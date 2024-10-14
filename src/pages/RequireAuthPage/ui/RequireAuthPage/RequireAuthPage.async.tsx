import { lazy } from 'react';

export const RequireAuthPageAsync = lazy(() =>
    import('./RequireAuthPage').then((module) => ({
        default: module.RequireAuthPage,
    })),
);
