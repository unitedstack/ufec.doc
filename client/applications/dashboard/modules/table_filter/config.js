import __ from 'client/locale/dashboard.lang.json';

export default {
  banner: {
    description: 'table_filter_banner_text',
    type: 'info'
  },
  tabs: [{
    name: ['table_filter'],
    key: 'table_filter',
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
    iconPrefix: 'bars',
    iconSuffix: 'caret-down',
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
  operations: [{
    key: 'sex',
    type: 'select',
    width: 120,
    transpile: true,
    data: [{
      name: 'all_sex',
      value: 'all'
    }, {
      name: 'male',
      value: 'male'
    }, {
      name: 'female',
      value: 'female'
    }]
  }],
  table: {
    rowKey: 'id',
    dataKey: 'id',
    checkbox: true,
    loading: false,
    columns: [{
      title: ['name'],
      key: 'name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length > b.name.length
    }, {
      title: ['email'],
      key: 'email',
      dataIndex: 'email',
      filters: [
        { text: '@gmail.com', value: '@gmail.com' },
        { text: '@qq.com', value: '@qq.com' },
      ],
      onFilter: (value, record) => `@${record.email.split('@')[1]}` === value,
      sorter: (a, b) => a.email.length > b.email.length
    }, {
      title: ['sex'],
      key: 'sex',
      dataIndex: 'sex',
      filters: [
        { text: __.male, value: 'male' },
        { text: __.female, value: 'female' },
      ],
      onFilter: (value, record) => record.sexEn === value,
      sorter: (a, b) => a.sexEn.length > b.sexEn.length
    }, {
      title: ['id'],
      key: 'id',
      dataIndex: 'id',
      sorter: (a, b) => a.id > b.id
    }],
    data: []
  }
};
