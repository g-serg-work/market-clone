import {
    ComponentPropsWithoutRef,
    ForwardedRef,
    forwardRef,
    KeyboardEventHandler,
    MouseEventHandler,
    ReactNode,
    useCallback,
} from 'react';
import { AppEventCallbackEvent } from '@/shared/eventChannels/types';
import { callElementBoundingClientRect } from '@/shared/lib/helpers/callElementBoundingClientRect';

interface ClickAbleProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onClick'> {
    children?: ReactNode;
    onClick?: AppEventCallbackEvent;
}

const ClickAble = (props: ClickAbleProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, onClick, ...otherProps } = props;

    // TODO: fix DRY with Button
    const onMouseClick: MouseEventHandler<HTMLDivElement> = useCallback(
        (e) => {
            onClick?.({
                source: 'mouse',
                elementBoundingClientRect: callElementBoundingClientRect(
                    e.currentTarget as HTMLElement,
                ),
            });
        },
        [onClick],
    );

    const onKeyUp: KeyboardEventHandler<HTMLDivElement> = useCallback(
        (e) => {
            const enterOrSpace =
                e.key === 'Enter' ||
                e.key === ' ' ||
                e.key === 'Spacebar' ||
                e.code === 'Enter' ||
                e.code === 'Space';

            if (enterOrSpace) {
                e.preventDefault();

                onClick?.({
                    source: 'keyboard',
                    elementBoundingClientRect: callElementBoundingClientRect(
                        e.currentTarget as HTMLElement,
                    ),
                });
            }
        },
        [onClick],
    );

    return (
        <div ref={ref} onClick={onMouseClick} onKeyUp={onKeyUp} {...otherProps}>
            {children}
        </div>
    );
};

export default forwardRef(ClickAble);
