export interface ClickAbleDivProps
    extends React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        React.AriaAttributes {
    children: React.ReactNode;
    onDivClick?: () => void;
}

export const ClickAbleDiv = (props: ClickAbleDivProps) => {
    const { children, onDivClick, ...rest } = props;

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
            onDivClick?.();
        }
    };

    return (
        <div onClick={onDivClick} onKeyUp={onKeyUp} {...rest}>
            {children}
        </div>
    );
};
