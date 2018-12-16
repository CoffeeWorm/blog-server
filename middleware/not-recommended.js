const util = require('../common/util');

async function jump2tips(ctx, next) {
  let { header: { 'user-agent': ua }, url } = ctx.request;
  let flag = true;
  let target = '/notrecommended.html';

  url === target && (flag = false);

  if (flag && util.isIE(ua) || util.isAndroid(ua) || util.isIOS(ua)) {
    ctx.status = 302;
    ctx.redirect(target);
  }

  await next();
}

module.exports = jump2tips;