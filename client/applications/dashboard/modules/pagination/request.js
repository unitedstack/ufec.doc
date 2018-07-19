import mock from 'client/libs/mock';
import fake from 'client/libs/fake';

const data = fake(['name', 'email', 'sex', 'id'], 30);

export default {
  getList: () => mock(data, 2000),
  getFromUuid: (id) => {
    const single = data.find(d => d.id === id);
    return mock([single], 1000, !single);
  }
};

