import { useEffect, useRef } from 'react';

export function useAutoFocus<T>() {
    const autoFocusRef = useRef<T | null>(null);
    const currentFocusElement = useRef<Element | null>(null);

    useEffect(() => {
        currentFocusElement.current = document.activeElement;
        (autoFocusRef.current as HTMLElement)?.focus();

        return () => (currentFocusElement.current as HTMLElement)?.focus();
    }, []);

    return {
        autoFocusRef,
    };
}
