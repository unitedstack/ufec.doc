export default {
  tabs: [{
    name: ['search'],
    key: 'search',
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
  search: {
    placeholder: ['pls_enter', 'uuid']
  },
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
