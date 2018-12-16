const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const multer = require('../middleware/multer');
const Result = require('../common/result');
const articleModel = require('../models/article');


const articleRouter = new Router();

articleRouter
  .get('/getList', async ctx => {
    let { page = 1, pageSize = 10 } = ctx.query;
    let skip = (page - 1) * pageSize;
    let all = await articleModel.find({}, {_id: 0, __v: 0});
    let list = await articleModel.find({isAd: false, isTop: false}, {_id: 0, __v: 0}).sort({id: -1}).skip(skip).limit(+pageSize);
    ctx.body = new Result().setResult({list, total: all.length});
  })
  .put('/upload', bodyParser(), multer.any(), async ctx => {
    ctx.body = new Result();
  })
  .post('/modify', bodyParser(), async ctx => {
    ctx.body = new Result();
  })
  .delete('/del', bodyParser(), async ctx => {
    ctx.body = new Result();
  });

module.exports = articleRouter;