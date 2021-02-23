const Router = require('koa-router');
const router = new Router({ prefix: '/pages' });

const { createPages, getCategories, getModes } = require('@/controllers/pages');

router.get("/categories", getCategories);

router.get("/modes", getModes);

router.post("/create", createPages);

router.get("/list", async ctx => {
  ctx.body = "list";
});

module.exports = router.routes();