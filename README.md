# configurable-landingpage
落地页定制化，可配置化
## 目的
在可遍历的布局模式和统一的样式下，通过可视化的界面配置落地页元素和布局以达到自动上线落地页(展示页)的目的。
## 意义
- 不再需要前端开发人员开发落地页，产品可直接根据 UI 在后台配置数据以达到修改、增加以及删除的目的。
- 落地页项目不用专门维护，也不需要更新，代码也不用迭代。
## 实现的效果
- 可供选择的简单的整体布局，如上中下布局，上左右布局，文字不好描述，之后可展示图
- 可供选择的组件，如按钮（点击按钮后可以是点击跳转，也可以是弹框），如footer，可以是简单的，也可以是详细的
- 每个组件按需可上传图片，文字，链接等等
- 管理员编辑时可以看到实时的效果（保存后落地页刷新，数据控制）

# 技术实施
## 权限
只有超级管理员可配置
## 数据
- 因为只有超级管理员可配置，因此用户表里只需要存超级原理员即可，登录即实现权限控制了。
- 一张 mysql 表即可记录落地页对应的数据，path, category(整体布局), hasBanner, bannerImgUrl(这里暂时不考虑oss cdn等，直接存到机器里，第一个问题：docker怎么拿呢？), 等等

## 后端
- 用户登录注册注销  API
- 落地页数据的增删改查 API

## 前端
- 数据的增删改查 ajax
- 组件块的编写

# 技术选择
暂时全部采用前后端分离技术
我的最佳想法是：
- 落地页使用服务端渲染技术，因为需要契合 SEO， nuxt 
- admin 采用前后端分离即可， 前端 vue
- 服务端采用企业级框架 egg.js
- 数据库使用 mysql

不过，这第一阶段，我打算全部采用前后端分离技术。
- 落地页和 admin 均采用 vue
- 服务端采用 koa2
- 数据库使用 mysql(保证一致性，比如同时插入两张表同时成功或同时失败)

# 2021.2.7
1. 基于 koa 搭建基础框架
```bash
yarn add koa koa-bodyparser koa-router koa-logger 
```
初步搭建 MVC 结构， Models, Controllers 
2. 使用 Sequelize 和 Mysql 搭建基础的数据库
[sequelize](https://www.sequelize.com.cn/core-concepts/getting-started)
```bash
yarn add sequelize mysql2
```