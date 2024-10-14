import { lazy } from 'react';

export const ErrorPageAsync = lazy(() =>
    import('./ErrorPage').then((module) => ({
        default: module.ErrorPage,
    })),
);
