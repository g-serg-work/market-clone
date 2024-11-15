import { useState, useMemo } from 'react';

interface UseBoolHandlers {
    on: () => void;
    off: () => void;
    set: (bool: boolean) => void;
    toggle: () => void;
    reset: () => void;
}

export function useBool(bool: boolean = false): [boolean, UseBoolHandlers] {
    const [state, setState] = useState(bool);

    const handlers = useMemo(
        () => ({
            on: () => setState(true),
            off: () => setState(false),
            set: (bool: boolean) => setState(bool),
            toggle: () => setState((s) => !s),
            reset: () => setState(bool),
        }),
        [bool],
    );

    return [state, handlers];
}
