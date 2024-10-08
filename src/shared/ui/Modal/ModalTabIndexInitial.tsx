export interface ModalTabIndexInitialProps {
    tabIndex: number;
}

export const ModalTabIndexInitial = ({
    tabIndex,
}: ModalTabIndexInitialProps) => (
    <span
        tabIndex={tabIndex}
        aria-hidden="true"
        data-focus-trap-guard="true"
        style={{
            position: 'fixed',
            overflow: 'hidden',
            padding: 0,
            width: 1,
            height: 0,
            top: 1,
            left: 1,
        }}
     />
);
