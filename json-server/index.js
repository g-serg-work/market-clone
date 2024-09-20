const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const http = require('http');

// custom
const marketDataParse = require('./market/reader.js');
const cfg = require('./market/cfg.json');
const loginPost = require('./handler/login');
const catalogGet = require('./market/handler/catalogGet');
//

const dir = path.resolve(__dirname, './market/data');
const marketData = marketDataParse(dir);

const server = jsonServer.create();
const jsonDbRouter = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// small delay for imitation of a real API
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// routes
server.post('/login', loginPost(path.resolve(__dirname, 'db.json')));
server.get('/catalogs/:id', catalogGet(cfg, marketData));

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
