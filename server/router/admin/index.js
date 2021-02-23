const Router = require('koa-router');
const router = new Router({ prefix: '/admin' });

const pages = require('./pages');

router.get("/", async ctx => {
  ctx.body = "admin";
});

router.use(pages);

module.exports = router.routes();