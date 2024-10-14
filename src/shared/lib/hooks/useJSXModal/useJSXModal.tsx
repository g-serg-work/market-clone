import { useState, useCallback } from 'react';

type doModal = () => void;
type modalContent = JSX.Element | null;

type useJSXModalResult = [doModal, modalContent];

export function useJSXModal<T>(
    jsx: (props: T) => JSX.Element,
    getProps: () => Partial<T> = () => ({}),
): useJSXModalResult {
    const [isOpen, setIsOpen] = useState(false);

    const doModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return [
        doModal,
        isOpen ? jsx({ isOpen, onClose, ...getProps() } as T) : null,
    ];
}
