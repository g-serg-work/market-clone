import { useEffect, useRef } from 'react';

export function useAutoFocus() {
    const autoFocusRef = useRef<HTMLAnchorElement>(null);
    const currentFocusElement = useRef<Element | null>(null);

    useEffect(() => {
        currentFocusElement.current = document.activeElement;
        autoFocusRef.current?.focus();

        return () => (currentFocusElement.current as HTMLElement)?.focus();
    }, []);

    return {
        autoFocusRef,
    };
}
