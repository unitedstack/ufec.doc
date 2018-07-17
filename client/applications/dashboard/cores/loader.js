import configs from '../config.json';
import * as importModules from '../require';

const modules = {};
configs.modules.forEach((m) => {
  m.items.forEach((n) => {
    modules[n] = importModules[n];
  });
});
export default {
  configs,
  modules
};
