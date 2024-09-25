import { CatalogId } from '@/entities/Catalog';

export enum AppRoutes {
    MAIN = 'main',
    ORDERS = 'my/orders',
    CATALOG = 'catalog',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteOrders = () => '/my/orders';
export const getRouteCatalog = (catalogId: CatalogId) =>
    `/catalog/${catalogId}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteOrders()]: AppRoutes.ORDERS,
    [getRouteCatalog(':catalogId')]: AppRoutes.CATALOG,
};
