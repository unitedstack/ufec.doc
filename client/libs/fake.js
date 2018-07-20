/**
 * 根据给定的字段，随机生成信息列表。
 */

import FakeMe from 'fakeme';
import Cookies from 'js-cookie';

const lang = Cookies.get('lang');

export const fm = new FakeMe({
  lang: lang === 'zh-CN' ? 'zh' : 'en'
});

/**
 * @param {Array} keys
 * @param {int} count
 */
export const fake = (keys, count) => {
  const sex = ~keys.indexOf('sex');
  const fakeDatas = [];
  for (let i = 0; i < count; i++) {
    const data = {};
    let currentSex = 'male';
    if (sex) {
      data.sex = fm.sex();
      if (data.sex[0] === '男') {
        currentSex = 'male';
      } else if (data.sex[0] === '女') {
        currentSex = 'female';
      } else {
        currentSex = data.sex[0];
      }
    }
    keys.forEach((key) => {
      if (key !== 'sex') {
        data[key] = fm[key]({ count: 1, sex: currentSex, length: 20 })[0];
      }
    });
    fakeDatas.push(data);
  }
  return fakeDatas;
};
