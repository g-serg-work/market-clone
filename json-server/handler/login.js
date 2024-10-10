const loginPost = (handlerCfg) => (req, res) => {
    try {
        const { mainDbGetter } = handlerCfg;

        const { userName } = req.body;

        const { users, profiles } = mainDbGetter();

        const userRow = users.find((user) => user.userName === userName);

        if (userRow) {
            const profileRow = profiles.find(
                (profile) => profile.id === userRow.id,
            );

            if (profileRow) return res.json(profileRow);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
};

module.exports = loginPost;
