import { useState, useCallback } from 'react';

export function useJSXModal<T>(jsx: (props: T) => JSX.Element) {
    const [isOpen, setIsOpen] = useState(false);

    const doModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        doModal,
        modalContent: isOpen && jsx({ isOpen, onClose } as T),
    };
}
