import __ from 'client/locale/dashboard.lang.json';
import React from 'react';

export default {
  banner: {
    description: <span>{__.search_des}<br />{__.source_code}<a href="https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/search">https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/search</a></span>
  },
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
    placeholder: ['pls_enter', 'id']
  },
  table: {
    rowKey: 'id',
    dataKey: 'id',
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
