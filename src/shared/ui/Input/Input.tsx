import { ChangeEvent, ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react';

interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'onInput'> {
    onInput?: (value: string) => void;
}

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { onInput, ...otherProps } = props;

    const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onInput?.(e.target.value);
    };

    return <input ref={ref} onInput={onInputHandler} {...otherProps} />;
});
