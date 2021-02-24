const Router = require('koa-router');
const router = new Router({ prefix: '/pages' });
const path = require('path');
const { 
  createPages, 
  getCategories, 
  getLayoutModes,
  getBannerModes,
  uploadBannerPic 
} = require('@/controllers/pages');

const upload = require('@/utils/multer');

router.get("/categories", getCategories);

router.get("/layout/modes", getLayoutModes);

router.post("/create", createPages);

router.get("/banner/modes", getBannerModes);

router.post("/banner/:pathId/pic", uploadBannerPic);

router.get("/list", async ctx => {
  ctx.body = "list";
});

module.exports = router.routes();