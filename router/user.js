const Router = require('koa-router');
const userModel = require('../models/user');
const bodyParser = require('koa-bodyparser');
let userRouter = new Router();

userRouter
  .get('/:uid', async ctx => {
    let uid = ctx.params.uid;
    let info = await userModel.findOne({ uid });
    console.log(info);
    ctx.body = info.getIntro();
  })
  .post('/modify', bodyParser(), async ctx => {
    let body = ctx.request.body;
    let res = await userModel.update(body);
    ctx.body = res;
  })
  .post('/login', bodyParser(), async ctx => {
    let body = ctx.request.body;
    let res = await userModel.findOne({ uid: body.uid });
    let success = res.checkPwd(body.password);
    if (success) {
      ctx.session.username = res.name;
      ctx.body = 'success';
    } else {
      ctx.body = 'failed!';
    }
  })
  .post('/logout', bodyParser(), async ctx => {
    ctx.session.username = undefined;
    ctx.body = 'success';
  });

module.exports = userRouter;