const parseOrder = (cfg, order) => {
    const { avatarsBaseUrl } = cfg;

    return {
        ...order,
        number: order.id,
        images: order.images.map((image) => `${avatarsBaseUrl}${image}`),
    };
};

module.exports = parseOrder;
