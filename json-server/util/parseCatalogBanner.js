const parseProduct = require('./parseProduct');

const parseCatalogBanner = (cfg, banner, dbProducts) => {
    const { bgImg, headerImg, carusel = [] } = banner;
    const { avatarsBaseUrl } = cfg;

    return {
        ...banner,
        bgImg: `${avatarsBaseUrl}{/get-marketcms}${bgImg}.png/optimize`,
        headerImg: `${avatarsBaseUrl}{/get-marketcms}${headerImg}.png/optimize`,
        carusel: carusel
            .map((id) => dbProducts.find((product) => product.id === id))
            .filter((product) => product)
            .map((product) => parseProduct(cfg, product))
            .map(({ catalogId, categoryId, ...rest }) => rest),
    };
};

module.exports = parseCatalogBanner;
