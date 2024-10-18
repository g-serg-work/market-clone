import {
    AppRoutes,
    getRouteMain,
    getRouteCatalog,
    getRouteOrders,
    getRouteAddUser,
    getRouteCart,
    getRouteCompare,
    getRoutePromoCodes,
    getRouteReturns,
    getRouteReviews,
    getRouteSettings,
    getRouteWishList,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { CatalogPage } from '@/pages/CatalogPage';
import { OrdersPage } from '@/pages/OrdersPage';
import { StubPage } from '@/pages/StubPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ORDERS]: {
        path: getRouteOrders(),
        element: <OrdersPage />,
        authOnly: true,
    },
    [AppRoutes.CATALOG]: {
        path: getRouteCatalog(':catalogId'),
        element: <CatalogPage />,
    },
    [AppRoutes.RETURNS]: {
        path: getRouteReturns(),
        element: <StubPage />,
    },
    [AppRoutes.REVIEWS]: {
        path: getRouteReviews(),
        element: <StubPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <StubPage />,
    },
    [AppRoutes.CART]: {
        path: getRouteCart(),
        element: <StubPage />,
    },
    [AppRoutes.PROMOCODES]: {
        path: getRoutePromoCodes(),
        element: <StubPage />,
    },
    [AppRoutes.COMPARE]: {
        path: getRouteCompare(),
        element: <StubPage />,
    },
    [AppRoutes.WISHLIST]: {
        path: getRouteWishList(),
        element: <StubPage />,
    },
    [AppRoutes.ADDUSER]: {
        path: getRouteAddUser(),
        element: <StubPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
