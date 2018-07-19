import mock from 'client/libs/mock';
import fake from 'client/libs/fake';

const data = fake(['name', 'email', 'sex', 'id'], 6);

export default {
  getList: () => mock(data, 2000)
};

