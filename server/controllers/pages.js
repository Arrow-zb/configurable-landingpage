const { UrlModel, CategoryModel, ModeModel } = require('../models');

class PagesController {
  // 增加落地页 URL
  static async createPages(ctx) {
    const { category, path } = ctx.request.body;
    const hasPath = await UrlModel.findAll({
      where: { category, path }
    });
    if(hasPath.length > 0) {
      ctx.throw(403, '此url已被占用！');
    }
    const res = await UrlModel.create(ctx.request.body);
    ctx.body = res;
  };

  // 获取分类
  static async getCategories(ctx) {
    ctx.body  = await CategoryModel.findAll();
  };

  // 获取布局模式
  static async getModes(ctx) {
    ctx.body  = await ModeModel.findAll();
  };
};

module.exports = PagesController;