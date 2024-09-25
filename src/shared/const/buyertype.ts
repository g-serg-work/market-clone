export enum BuyerTypeRoutes {
    DLYA_BIZNESA = 'https://business.market.yandex.ru/',
    PARTNER_MARKET = 'https://partner.market.yandex.ru/',
}

export const BuyerTypeRouteTitles = new Map<BuyerTypeRoutes, string>([
    [BuyerTypeRoutes.DLYA_BIZNESA, 'Покупайте как юрлицо'],
    [BuyerTypeRoutes.PARTNER_MARKET, 'Продавайте на Маркете'],
]);

export const BuyerTypeRouteNodeTabAble: Array<BuyerTypeRoutes> = [
    BuyerTypeRoutes.DLYA_BIZNESA,
];
