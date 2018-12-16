const Router = require('koa-router');
const userRouter = require('./user');
const photoRouter = require('./photo');
const articleRouter = require('./article');
const statisticsRouter = require('./statistics');

let apiRouter = new Router();

apiRouter
  .use('/user', userRouter.routes(), userRouter.allowedMethods())
  .use('/photo', photoRouter.routes(), photoRouter.allowedMethods())
  .use('/article', articleRouter.routes(), articleRouter.allowedMethods())
  .use('/statistics', statisticsRouter.routes(), statisticsRouter.allowedMethods());


module.exports = apiRouter;