export default {
  tabs: [{
    name: ['basic_layout'],
    key: 'basic_layout',
    default: true
  }],
  btns: [{
    value: ['create'],
    key: 'create',
    type: 'create',
    icon: 'plus-circle-o',
    disabled: false
  }, {
    value: ['refresh'],
    key: 'refresh',
    type: 'primary',
    icon: 'reload',
    disabled: false
  }],
  table: {
    rowKey: 'uuid',
    dataKey: 'uuid',
    loading: false,
    columns: [{
      title: ['name'],
      key: 'name',
      dataIndex: 'name'
    }, {
      title: ['uuid'],
      key: 'uuid',
      dataIndex: 'uuid'
    }],
    data: []
  }
};
