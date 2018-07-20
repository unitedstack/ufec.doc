export default {
  banner: {
    description: 'checkbox_banner_text',
    type: 'info'
  },
  tabs: [{
    name: ['checkbox'],
    key: 'checkbox',
    default: true
  }],
  btns: [{
    value: ['create'],
    key: 'create',
    type: 'create',
    icon: 'plus-circle-o'
  }, {
    value: ['edit'],
    key: 'edit',
    type: 'primary',
    icon: 'edit',
    disabled: true
  }, {
    value: ['delete'],
    key: 'delete',
    type: 'danger',
    icon: 'delete',
    disabled: true
  }, {
    value: ['more'],
    key: 'more',
    type: 'primary',
    iconClass: 'more',
    dropdown: [{
      value: ['item1'],
      key: 'item1',
      disabled: true
    }, {
      value: ['item2'],
      key: 'item2',
      disabled: true
    }, {
      type: 'divider'
    }, {
      value: ['item3'],
      key: 'item3',
      disabled: true
    }, {
      value: ['item4'],
      key: 'item4',
      disabled: true
    }]
  }, {
    value: ['refresh'],
    key: 'refresh',
    type: 'primary',
    icon: 'reload'
  }],
  table: {
    rowKey: 'id',
    dataKey: 'id',
    checkbox: true,
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
