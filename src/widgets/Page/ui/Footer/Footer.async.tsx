import { lazy } from 'react';

export const FooterAsync = lazy(() =>
    import('./Footer').then((module) => ({
        default: module.Footer,
    })),
);
