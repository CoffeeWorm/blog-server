const Router = require('koa-router');
const apiRouter = require('./api-router');
const pageRouter = require('./page-router');

let router = new Router();

router
  .use(pageRouter.routes(), pageRouter.allowedMethods())
  .use('/api', apiRouter.routes(), apiRouter.allowedMethods());

module.exports = router;