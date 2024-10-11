import {
    ButtonHTMLAttributes,
    forwardRef,
    ForwardedRef,
    useCallback,
} from 'react';
import { onClickType } from '@/shared/eventChannels/modalChannelEvents';
import callElementBoundingClientRect from '@/shared/lib/helpers/callElementBoundingClientRect';

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    children?: React.ReactNode;
    onClick?: onClickType;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const { children, onClick, ...otherProps } = props;

        // TODO: fix DRY with ClickAble
        const onMouseClick: React.MouseEventHandler<HTMLButtonElement> =
            useCallback(
                (e) => {
                    onClick?.({
                        source: 'mouse',
                        elementBoundingClientRect:
                            callElementBoundingClientRect(
                                e.currentTarget as HTMLElement,
                            ),
                    });
                },
                [onClick],
            );

        const onKeyUp: React.KeyboardEventHandler<HTMLButtonElement> =
            useCallback(
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
                            elementBoundingClientRect:
                                callElementBoundingClientRect(
                                    e.currentTarget as HTMLElement,
                                ),
                        });
                    }
                },
                [onClick],
            );

        return (
            <button
                type="button"
                ref={ref}
                onClick={onMouseClick}
                onKeyUp={onKeyUp}
                {...otherProps}
            >
                {children}
            </button>
        );
    },
);
