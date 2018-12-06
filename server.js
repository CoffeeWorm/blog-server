const Koa = require('koa');
const koaStatic = require('koa-static');
const session = require('koa-session2');
const router = require('./router/router');
require('./mongodb/db');
const config = require('./config/common');


let app = new Koa();

app.keys = ['asudhfushabdlfkjhasdkjfblaksjdbflkjabsdfuigeiu1!@#$#%#%#$'];

app.listen(config.port, () => {
  console.log(`Server is running at ${config.port} port!`);
});
app.use(session({ key: 'SESSIONID', maxAge: 20 * 60 * 1000, httpOnly: true, signed: true }));
app.use(router.routes());
app.use(router.allowedMethods());

app.use(koaStatic('./public', {
  gzip: true,
  maxage: 20 * 60 * 1000
}));