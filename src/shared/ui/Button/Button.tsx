import {
    ForwardedRef,
    forwardRef,
    ButtonHTMLAttributes,
    MouseEventHandler,
    memo,
} from 'react';

type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

interface ButtonProps extends HTMLButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Button = memo(
    forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const { children, onClick, ...otherProps } = props;

        const onButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
            onClick?.();
        };

        return (
            <button ref={ref} onClick={onButtonClick} {...otherProps}>
                {children}
            </button>
        );
    }),
);
