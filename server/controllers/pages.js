const { 
  UrlModel, 
  CategoryModel, 
  LayoutModeModel, 
  BannerModeModel 
} = require('../models');

const upload = require('@/utils/multer');


class PagesController {
  // 增加落地页 URL
  static async createPages(ctx) {
    const { category, path } = ctx.request.body;
    const hasPath = await UrlModel.findAll({
      where: { category, path }
    });
    if(hasPath.length > 0) {
      ctx.send(null, '此url已被占用！', 403);
    }else {
      ctx.send(await UrlModel.create(ctx.request.body));
    }
  };

  // 获取分类
  static async getCategories(ctx) {
    ctx.send(await CategoryModel.findAll());
  };

  // 获取布局模式
  static async getLayoutModes(ctx) {
    ctx.send(await LayoutModeModel.findAll());
  };

  // 获取 Banner 模式
  static async getBannerModes(ctx) {
    ctx.send(await BannerModeModel.findAll());
  };

  // 上传 banner 图片
  
  static async uploadBannerPic(ctx, next) {
    await upload(ctx.params.pathId).array('file',5)(ctx, next);
    ctx.body = "11"
  }
};

module.exports = PagesController;