export interface ClickAbleProps
    extends React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        React.AriaAttributes {
    children: React.ReactNode;
    onClick?: () => void;
}

export const ClickAble = (props: ClickAbleProps) => {
    const { children, onClick, ...otherProps } = props;

    const onKeyUp = (e: React.KeyboardEvent) => {
        // console.log(e.currentTarget.value);
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
    };

    return (
        <div onClick={onClick} onKeyUp={onKeyUp} {...otherProps}>
            {children}
        </div>
    );
};
