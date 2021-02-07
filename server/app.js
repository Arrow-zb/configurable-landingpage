const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const client = require("./router/client");
const admin = require("./router/admin");

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(logger());

app.use(client);
app.use(admin);
app.use(router.allowedMethods());

const port = 6090;
app.listen(port, err => {
  if(err) throw err;
  console.log(`app start at ${port}`);
});

