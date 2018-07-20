import mock from 'client/libs/mock';
import { fake, fm } from 'client/libs/fake';

const data = fake(['name', 'email', 'sex', 'id'], 6);

export default {
  getList: () => mock(data, 2000),
  getSingle: (id) => {
    const single = data.find(d => d.id === id);
    return mock([single], 1000, !single);
  },
  getFakeMeData: () => mock(fm.name({ count: 100 }), 1000)
};

