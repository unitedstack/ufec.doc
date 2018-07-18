const session = require('koa-session');

const CONFIG = {
  key: 'ufec',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: false,
  signed: false,
  rolling: false,
  renew: true
};

module.exports = (app) => {

  app.keys = [ 'ufec' ];
  app.use(session(CONFIG, app));

  return app;
};
