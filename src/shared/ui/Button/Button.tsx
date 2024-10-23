import {
    forwardRef,
    ForwardedRef,
    useCallback,
    ComponentPropsWithoutRef,
    KeyboardEventHandler,
    MouseEventHandler,
    ReactNode,
} from 'react';

interface ButtonProps
    extends Omit<ComponentPropsWithoutRef<'button'>, 'onClick'> {
    children?: ReactNode;
    onClick?: () => void;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const { children, onClick, ...otherProps } = props;

        // TODO: fix DRY with ClickAble
        const onMouseClick: MouseEventHandler<HTMLButtonElement> =
            useCallback(() => {
                onClick?.();
            }, [onClick]);

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
                    onClick?.();
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
