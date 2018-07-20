export default {
  banner: {
    description: 'pagination_des',
    type: 'info'
  },
  tabs: [{
    name: ['default_pagination'],
    key: 'pagination',
    default: true
  }, {
    name: ['pagination_custom'],
    key: 'pagination_custom'
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
    placeholder: ['pls_enter', 'id']
  },
  table: {
    rowKey: 'id',
    dataKey: 'id',
    limit: 8,
    loading: false,
    columns: [{
      title: ['name'],
      key: 'name',
      dataIndex: 'name'
    }, {
      title: ['email'],
      key: 'email',
      dataIndex: 'email'
    }, {
      title: ['sex'],
      key: 'sex',
      dataIndex: 'sex'
    }, {
      title: ['id'],
      key: 'id',
      dataIndex: 'id'
    }],
    data: []
  }
};
