const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const http = require('http');

// custom
const marketDataParse = require('./market/reader.js');
const cfg = require('./market/cfg.json');
const loginPost = require('./handler/login');
const catalogGet = require('./market/handler/catalogGet');
const favoriteCategoryGet = require('./market/handler/favoriteCategoryGet');
//

const dir = path.resolve(__dirname, './market/data');
const marketDb = marketDataParse(dir);

const mainDbPath = path.resolve(__dirname, 'db.json');
const mainDbGetter = () => JSON.parse(fs.readFileSync(mainDbPath, 'UTF-8'));

const handlerCfg = { cfg, mainDbGetter, marketDb };

const server = jsonServer.create();
const jsonDbRouter = jsonServer.router(mainDbPath);

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// small delay for imitation of a real API
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

const badRequest = (req, res) =>
    res.status(400).json({ message: 'Bad Request' });

// routes
server.post('/login', loginPost(handlerCfg));
server.get('/catalog/:catalogId', catalogGet(handlerCfg));
server.get('/favorite-category/:userId', favoriteCategoryGet(handlerCfg));

server.get('/login', badRequest);
server.get('/catalog', badRequest);
server.get('/favorite-category', badRequest);

server.use((req, res, next) => {
    // check authorization user
    /* TODO: remove (disable for browser test)
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    } */

    next();
});

server.use(jsonDbRouter);

// run server
const HTTP_PORT = 8000;

const httpServer = http.createServer(server);

httpServer.listen(HTTP_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`server is running on ${HTTP_PORT} port`);
});
