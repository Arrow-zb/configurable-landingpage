const { UserModel, UrlModel } = require('../models');

async function init() {
  const user = await UserModel.create({
    userName: 'arrow',
    password: '123456'
  });

  const url = await UrlModel.create({
    path: '/test',
    description: 'this is test'
  });
}

module.exports = init;