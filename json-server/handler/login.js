
const loginPost = (path) => (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(
            fs.readFileSync(path, 'UTF-8'),
        );
        const { users = [] } = db;

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
}

module.exports = loginPost;