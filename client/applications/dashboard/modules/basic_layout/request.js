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
  getList: () => {
    return mock(data, 2000);
  }
};

