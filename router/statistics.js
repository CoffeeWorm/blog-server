const Router = require('koa-router');
const statisticsModel = require('../models/statistics');
const Result = require('../common/result');

const statisticsRouter = new Router();

statisticsRouter
  .get('/getList', async ctx => {
    let res = await statisticsModel.find({}).limit(10);
    if (res) { 
      ctx.body = new Result().setResult(res); 
    } else {
      ctx.body = new Result().notFound();
    }
  });

module.exports = statisticsRouter;