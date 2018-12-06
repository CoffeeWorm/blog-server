const Router = require('koa-router');
const userRouter = require('./user');

let router = new Router();

router
  .use('/user', userRouter.routes(), userRouter.allowedMethods());


module.exports = router;