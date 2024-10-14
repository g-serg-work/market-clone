import { lazy } from 'react';

export const CatalogPageAsync = lazy(() =>
    import('./CatalogPage').then((module) => ({
        default: module.CatalogPage,
    })),
);
