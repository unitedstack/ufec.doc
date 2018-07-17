const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const mount = require('koa-mount');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

const maxAge = 1;

app.use(mount('/', serve(path.resolve(__dirname, 'client/public/zh-CN')), {maxAge}));
app.use(mount('/assets', serve(path.resolve(__dirname, 'client/public/assets')), {maxAge}));

router.get('/(.*)', (ctx, next) => {
  const html = fs.readFileSync(path.resolve(__dirname, 'client/public/zh-CN/index.html'), 'utf8');
  ctx.body = html;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

console.log('server port 3000');