import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    AppRoutes,
    getRouteMain,
    getRouteCatalog,
    getRouteOrders,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { CatalogPage } from '@/pages/CatalogPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ORDERS]: {
        path: getRouteOrders(),
        element: <div>Orders</div>,
        authOnly: true,
    },
    [AppRoutes.CATALOG]: {
        path: getRouteCatalog(':catalogId'),
        element: <CatalogPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
