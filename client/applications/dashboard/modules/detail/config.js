import __ from 'client/locale/dashboard.lang.json';
import React from 'react';

export default {
  banner: {
    description: <span>{__.detail_banner_text}<br />{__.source_code}<a href="https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/detail">https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/detail</a></span>
  },
  tabs: [{
    name: ['detail'],
    key: 'detail',
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
    rowKey: 'id',
    dataKey: 'id',
    loading: false,
    columns: [{
      title: ['name'],
      key: 'name',
      dataIndex: 'name',
      type: 'captain'
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
    data: [],
    detail: {
      tabs: [{
        name: ['description'],
        key: 'description',
        default: true
      }, {
        name: ['fakeme'],
        key: 'fakeme'
      }]
    }
  }
};
