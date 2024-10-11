export enum AppRoutes {
    MAIN = 'main',
    ORDERS = 'my/orders',
    WISHLIST = 'my/wishlist',
    RETURNS = 'my/returns',
    REVIEWS = 'my/reviews',
    SETTINGS = 'my/settings',
    CART = 'my/cart',
    PROMOCODES = 'promocodes',
    COMPARE = 'comparison',
    ADDUSER = 'adduser',
    CATALOG = 'catalog',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteOrders = () => '/my/orders';
export const getRouteWishList = () => '/my/wishlist';
export const getRouteReturns = () => '/my/returns';
export const getRouteSettings = () => '/my/settings';
export const getRouteCart = () => '/my/cart';
export const getRouteReviews = () => '/my/reviews';
export const getRoutePromoCodes = () => '/promocodes';
export const getRouteCompare = () => '/compare';
export const getRouteAddUser = () => '/adduser';
export const getRouteCatalog = (id: string) => `/catalog/${id}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteOrders()]: AppRoutes.ORDERS,
    [getRouteReturns()]: AppRoutes.RETURNS,
    [getRouteReviews()]: AppRoutes.REVIEWS,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteCart()]: AppRoutes.CART,
    [getRoutePromoCodes()]: AppRoutes.PROMOCODES,
    [getRouteCompare()]: AppRoutes.COMPARE,
    [getRouteWishList()]: AppRoutes.WISHLIST,
    [getRouteAddUser()]: AppRoutes.ADDUSER,
    [getRouteCatalog(':catalogId')]: AppRoutes.CATALOG,
};
