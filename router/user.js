const Router = require('koa-router');
const userModel = require('../models/user');
const bodyParser = require('koa-bodyparser');
const Result = require('../common/result');


let userRouter = new Router();

userRouter
  .get('/info/', async ctx => {
    let uid = 0;
    let info = await userModel.findOne({ uid }, {_id: 0, __v: 0});
    ctx.body = new Result().setResult(info.getIntro());
  })
  .post('/modify', bodyParser(), async ctx => {
    let body = ctx.request.body || {};
    if (body.name === ctx.session.user) {
      let res = await userModel.update(body);
      if(res) {
        ctx.body = new Result().setResult(null);
      } else {
        ctx.body = new Result().setCode(401).setMessage('修改失败');
      }
    } else {
      ctx.body = new Result().setCode(403).setMessage('该用户未登录！');
    }
  })
  .post('/login', bodyParser(), async ctx => {
    let body = ctx.request.body;
    let res = await userModel.findOne({ name: body.name });
    let success = res == null ? false : res.checkPwd(body.password);
    if (success) {
      ctx.session.user = res.name;
      ctx.body = new Result().setResult(null);
    } else {
      ctx.body = new Result().setResult(null).setMessage('failed');
    }
  })
  .post('/logout', async ctx => {
    if (ctx.session.user) {
      ctx.session.user = null;
      ctx.body = new Result();
    } else {
      ctx.body = new Result().setCode(403).setMessage('该用户未登录！');
    }
  });

module.exports = userRouter;