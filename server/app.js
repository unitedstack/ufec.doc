const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const mount = require('koa-mount');
const { port } = require('./config.json');

const env = process.env.NODE_ENV;
const listenPort = env === 'production' ? port.production : port.development;

const app = new Koa();

const maxAge = 365 * 24 * 60 * 60;

app.use(mount('/zh-CN', serve(path.resolve(__dirname, '../client/public/zh-CN')), { maxAge }));
app.use(mount('/en', serve(path.resolve(__dirname, '../client/public/en')), { maxAge }));
app.use(mount('/assets', serve(path.resolve(__dirname, '../client/public/assets')), { maxAge }));

const locale = ['zh-CN', 'en'];

app.use((ctx, next) => {
  if (!ctx.lang) {
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

app.listen(listenPort);

console.log(`server port ${listenPort}`);
