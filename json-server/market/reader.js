const fs = require('fs');

const _marketDataParse = (dir, idx, names, keys, data, result) => {
    const name = names[idx];
    const key = keys[idx];

    if (!result[name]) result[name] = [];

    const path = `${dir}/${name}.json`;
    if (!fs.existsSync(path)) return;

    const jsonPath = fs.readFileSync(path, 'UTF-8');

    JSON.parse(jsonPath).forEach((row) => {
        result[name].push({ ...data, ...row });

        const subDir = `${dir}/${row.id}`;

        if (fs.existsSync(subDir)) {
            _marketDataParse(
                subDir,
                idx + 1,
                names,
                keys,
                { ...data, [key]: row.id },
                result,
            );
        }
    });
};

const marketDataParse = (dir) => {
    const names = ['catalogs', 'categories', 'products'];
    const keys = ['catalogId', 'categoryId', 'productId'];

    // eslint-disable-next-line prefer-const
    let result = {};
    _marketDataParse(dir, 0, names, keys, {}, result);

    return result;
};

module.exports = marketDataParse;
