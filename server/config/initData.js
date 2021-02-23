const { UserModel, UrlModel, CategoryModel, ModeModel } = require('../models');

async function init() {
  await UserModel.create({
    userName: 'arrow',
    password: '123456'
  });

  await UrlModel.create({
    category: 'arr',
    path: '/test',
    description: 'this is test'
  });

  await CategoryModel.bulkCreate([
    {
      category: 'arr',
      description: 'this is test'
    },
    {
      category: 'foo',
      description: 'this is foo'
    }
  ], { validate: true });

  await ModeModel.bulkCreate([
    {
      modeId: 1,
      text: "上中下",
      description: '这是上中下'
    },
    {
      modeId: 2,
      text: "左中右",
      description: '这是左中右'
    }
  ], { validate: true });
}

module.exports = init;