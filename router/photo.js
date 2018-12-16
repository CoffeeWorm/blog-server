const Router = require('koa-router');
const photoModel = require('../models/photo');
const bodyParser = require('koa-bodyparser');
const multer = require('../middleware/multer');
const Result = require('../common/result');

const photoRouter = new Router();

photoRouter
  .get('/getList', async ctx => {
    let { page = 1, pageSize = 10, isTop} = JSON.parse(JSON.stringify(ctx.query));
    let skip = +page > 0 ? (+page - 1) * +pageSize : 0;
    let filter = isTop == undefined ? {} : { isTop };
    let photoList = await photoModel.find(filter, {_id: 0, __v: 0}).sort({date: -1}).skip(skip).limit(+pageSize);
    ctx.body = new Result().setResult(photoList);
  })
  .put('/upload', bodyParser(), multer.any(), async ctx => {
    ctx.body = ctx.files;
  })
  .post('/modify', bodyParser(), async ctx => {
    let body = ctx.body;
    let photo = await photoModel.findOne({id: body.id});
    if (!photo) {
      ctx.body = new Result().notFound();
    }
    if (await photo.update(body)) {
      ctx.body = new Result();
      return;
    }
    ctx.body = new Result().setCode(500).setMessage('内部错误');
  })
  .delete('/del', bodyParser(), async ctx => {
    let body = ctx.body;
    let photo = await photoModel.findOne({id: body.id});
    if (!photo) {
      ctx.body = new Result().notFound();
    }
    if (await photo.remove()) {
      ctx.body = new Result();
      return;
    }
    ctx.body = new Result().setCode(500).setMessage('内部错误');
  });

module.exports = photoRouter;