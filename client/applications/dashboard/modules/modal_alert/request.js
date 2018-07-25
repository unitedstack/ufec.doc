import mock from 'client/libs/mock';
import { fake, fm } from 'client/libs/fake';

const data = fake(['name', 'email', 'sex', 'id'], 6);

export default {
  getList: () => mock(data, 2000),
  createRandomUser: () => {
    data.unshift({
      name: fm.name()[0],
      email: fm.email()[0],
      sex: fm.sex()[0],
      id: fm.id({ length: 20 })[0]
    });
    return mock(data, 2000);
  },
  deleteUser: (id) => {
    const index = data.findIndex(item => item.id === id);
    data.splice(index, 1);
    return mock(data, 1500);
  }
};

