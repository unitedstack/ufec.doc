import mock from 'client/libs/mock';
import { fake } from 'client/libs/fake';

const data = fake(['name', 'email', 'sex', 'id'], 100);

export default {
  getList: (sex) => {
    const res = sex === 'all' ? data : data.filter(item => item.sexEn === sex);
    return mock(res, 2000);
  }
};

