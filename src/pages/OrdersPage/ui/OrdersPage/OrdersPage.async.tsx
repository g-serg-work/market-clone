import { lazy } from 'react';

export const OrdersPageAsync = lazy(() =>
    import('./OrdersPage').then((module) => ({
        default: module.OrdersPage,
    })),
);
