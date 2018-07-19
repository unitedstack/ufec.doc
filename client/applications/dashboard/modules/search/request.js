import mock from 'client/libs/mock';

const data = [{
  name: '张三',
  uuid: '12133213213'
}, {
  name: '李四',
  uuid: '12313124124'
}, {
  name: '王五',
  uuid: '14125123452'
}];

export default {
  getList: () => mock(data, 2000),
  getFromUuid: (uuid) => {
    const single = data.find(d => d.uuid === uuid);
    return mock([single], 1000, !single);
  }
};

