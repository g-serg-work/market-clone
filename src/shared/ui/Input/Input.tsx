import {
    ChangeEvent,
    ForwardedRef,
    forwardRef,
    InputHTMLAttributes,
} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>;

interface InputProps extends HTMLInputProps {
    onInput?: (value: string) => void;
}

export const Input = forwardRef(
    (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const { onInput, ...otherProps } = props;

        const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onInput?.(e.target.value);
        };

        return <input ref={ref} onInput={onInputHandler} {...otherProps} />;
    },
);
