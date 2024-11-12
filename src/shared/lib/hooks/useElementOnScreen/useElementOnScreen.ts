import { RefObject, useRef, useState, useEffect, useCallback } from 'react';

export function useElementOnScreen<T extends Element>(
    options?: IntersectionObserverInit,
    onChange?: (onScreen: boolean) => void,
): [RefObject<T>, boolean] {
    const containerRef = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    const observeCallback: IntersectionObserverCallback = useCallback(
        (entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
            onChange?.(entry.isIntersecting);
        },
        [setIsVisible, onChange],
    );

    useEffect(() => {
        const { current: container } = containerRef;
        if (!container) return undefined;

        if (!('IntersectionObserver' in window)) return undefined;

        const observer = new IntersectionObserver(observeCallback, options);
        observer.observe(container);

        return () => observer.unobserve(container);
    }, [containerRef, options, observeCallback]);

    return [containerRef, isVisible];
}
