const parseOrder = (cfg, order) => {
    const { avatarsBaseUrl } = cfg;

    return {
        ...order,
        images: order.images.map((image) => `${avatarsBaseUrl}${image}`),
    };
};

module.exports = parseOrder;
