const parseCatalogBanner = require('../../util/parseCatalogBanner');
const parseCategory = require('../../util/parseCategory');

const catalogGet = (cfg, db) => (req, res) => {
    try {
        const { id: catalogId } = req.params;

        const catalog = db.catalogs?.find(
            (catalog) => catalog.id === catalogId,
        );

        if (!catalog)
            return res.status(404).json({ message: 'Catalog not found' });

        const apply = {
            banners: (catalog.banners || []).map((banner) =>
                parseCatalogBanner(cfg, banner, db.products),
            ),
            categories: db.categories
                .filter((dbCategory) => dbCategory.catalogId === catalogId)
                .map((category) => parseCategory(cfg, category))
                .map(({ catalogId, ...rest }) => rest),
        };

        return res.json({ ...catalog, ...apply });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
};

module.exports = catalogGet;
