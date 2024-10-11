const parseOrder = require('../../util/parseOrder');

const ordersByUserGet = (handlerCfg) => (req, res) => {
    try {
        const { cfg, mainDbGetter, marketDb } = handlerCfg;

        const { userId } = req.params;

        const { orders: dbOrders } = mainDbGetter();

        const orders = dbOrders
            .filter((order) => order.userId === userId)
            .map((order) => parseOrder(cfg, order));

        return res.json(orders);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
};

module.exports = ordersByUserGet;
