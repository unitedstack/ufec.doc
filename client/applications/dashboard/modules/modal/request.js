import mock from 'client/libs/mock';
import { fake } from 'client/libs/fake';

const data = fake(['name', 'email', 'sex', 'id'], 6);

export default {
  getList: () => mock(data, 2000),
  createUser: (user) => {
    data.unshift(user);
    return mock(data, 2000);
  },
  deleteUser: (rows) => {
    rows.forEach((row) => {
      const index = data.findIndex(item => item.id === row.id);
      data.splice(index, 1);
    });
    return mock(data, 1500);
  }
};

