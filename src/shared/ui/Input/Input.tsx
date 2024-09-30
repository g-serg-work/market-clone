import {
    ChangeEvent,
    ForwardedRef,
    forwardRef,
    InputHTMLAttributes,
    memo,
} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>;

interface InputProps extends HTMLInputProps {
    children?: React.ReactNode;
    onInput?: (value: string) => void;
}

export const Input = memo(
    forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const { children, onInput, ...otherProps } = props;

        const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onInput?.(e.target.value);
        };

        return (
            <input ref={ref} onInput={onInputHandler} {...otherProps}>
                {children}
            </input>
        );
    }),
);
