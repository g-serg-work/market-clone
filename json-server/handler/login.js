const loginPost = (handlerCfg) => (req, res) => {
    try {
        const { mainDbGetter } = handlerCfg;

        const { username, password } = req.body;

        const { users = [] } = mainDbGetter();

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
};

module.exports = loginPost;
