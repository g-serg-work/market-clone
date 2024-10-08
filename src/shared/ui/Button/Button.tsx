import {
    ForwardedRef,
    forwardRef,
    ButtonHTMLAttributes,
    MouseEventHandler,
} from 'react';

type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

interface ButtonProps extends HTMLButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const { children, onClick, ...otherProps } = props;

        const onButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
            onClick?.();
        };

        return (
            <button
                type="button"
                ref={ref}
                onClick={onButtonClick}
                {...otherProps}
            >
                {children}
            </button>
        );
    },
);
