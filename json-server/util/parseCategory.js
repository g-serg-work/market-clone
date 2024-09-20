const parseCategory = (cfg, category) => {
    const { id, img } = category;
    const { avatarsBaseUrl } = cfg;

    return {
        ...category,
        img: `${avatarsBaseUrl}/get-marketcms/${img}.png/optimize`,
        href: `/category/${id}`,
    };
};

module.exports = parseCategory;
