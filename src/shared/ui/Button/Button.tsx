import {
    forwardRef,
    ForwardedRef,
    useCallback,
    ComponentPropsWithoutRef,
    KeyboardEventHandler,
    MouseEventHandler,
    ReactNode,
} from 'react';
import { AppEventCallbackEvent } from '@/shared/eventChannels/types';
import { callElementBoundingClientRect } from '@/shared/lib/helpers/callElementBoundingClientRect';

interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'onClick'> {
    children?: ReactNode;
    onClick?: AppEventCallbackEvent;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, onClick, ...otherProps } = props;

    // TODO: fix DRY with ClickAble
    const onMouseClick: MouseEventHandler<HTMLButtonElement> = useCallback(
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

    const onKeyUp: KeyboardEventHandler<HTMLButtonElement> = useCallback(
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
        <button type="button" ref={ref} onClick={onMouseClick} onKeyUp={onKeyUp} {...otherProps}>
            {children}
        </button>
    );
});
