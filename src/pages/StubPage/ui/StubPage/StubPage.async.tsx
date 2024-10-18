import { lazy } from 'react';

export const StubPageAsync = lazy(() =>
    import('./StubPage').then((module) => ({
        default: module.StubPage,
    })),
);
