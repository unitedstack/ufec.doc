const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const mount = require('koa-mount');
const app = new Koa();

const maxAge = 1;

app.use(mount('/zh-CN', serve(path.resolve(__dirname, '../client/public/zh-CN')), {maxAge}));
app.use(mount('/en', serve(path.resolve(__dirname, '../client/public/en')), {maxAge}));
app.use(mount('/assets', serve(path.resolve(__dirname, '../client/public/assets')), {maxAge}));

const locale = ['zh-CN', 'en'];

app.use((ctx, next) => {
  if (!ctx.cookies.get('lang')) {
    ctx.lang = 'zh-CN';
    ctx.cookies.set('lang', 'zh-CN', {
      httpOnly: false
    });
  }
  const queryLang = ctx.query.lang;
  if (queryLang && ~locale.indexOf(queryLang)) {
    ctx.lang = queryLang;
    ctx.cookies.set('lang', queryLang, {
      httpOnly: false
    });
  }
  next();
});

router.get('/(.*)', (ctx, next) => {
  const html = fs.readFileSync(path.resolve(__dirname, `../client/public/${ctx.lang}/index.html`), 'utf8');
  ctx.body = html;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

console.log('server port 3000');