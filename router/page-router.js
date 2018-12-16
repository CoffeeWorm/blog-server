const Router = require('koa-router');

let pageRouter = new Router();

pageRouter
  .get('/notrecommended.html', async ctx => {
    ctx.body = '<h1>推荐使用更加现代的PC端浏览器浏览哦~</h1>';
  });

module.exports = pageRouter;