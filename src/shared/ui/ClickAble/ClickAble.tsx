import {
    ComponentPropsWithoutRef,
    ForwardedRef,
    forwardRef,
    KeyboardEventHandler,
    MouseEventHandler,
    ReactNode,
    useCallback,
} from 'react';

export interface ClickAbleProps
    extends Omit<ComponentPropsWithoutRef<'div'>, 'onClick'> {
    children?: ReactNode;
    onClick?: () => void;
}

const ClickAble = (
    props: ClickAbleProps,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const { children, onClick, ...otherProps } = props;

    // TODO: fix DRY with Button
    const onMouseClick: MouseEventHandler<HTMLDivElement> = useCallback(() => {
        onClick?.();
    }, [onClick]);

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
                onClick?.();
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
