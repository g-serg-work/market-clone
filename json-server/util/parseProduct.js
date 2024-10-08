const parseProduct = (cfg, product) => {
    const { id, img } = product;
    const { avatarsBaseUrl } = cfg;

    return {
        ...product,
        img: `${avatarsBaseUrl}/get-mpic${img}`,
        href: `/product/${id}`,
    };
};

module.exports = parseProduct;
