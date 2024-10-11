const parseCategory = require('../../util/parseCategory');

const favoriteCategoryGet = (handlerCfg) => (req, res) => {
    try {
        const { cfg, mainDbGetter, marketDb } = handlerCfg;

        const { userId } = req.params;

        const { 'favorite-category': favoriteCategory } = mainDbGetter();

        const categories = favoriteCategory
            .filter((category) => category.userId === userId)
            .map(({ categoryId }) =>
                marketDb.categories?.find(
                    (category) => category.id === categoryId,
                ),
            )
            .filter((category) => category)
            .map((category) => parseCategory(cfg, category));

        return res.json(categories);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
};

module.exports = favoriteCategoryGet;
