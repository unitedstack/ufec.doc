import __ from 'client/locale/dashboard.lang.json';
import React from 'react';

export default {
  banner: {
    description: <div>{__.modal_plus_banner} <a href="https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/modal_plus">https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/modal_plus</a></div>
  },
  tabs: [{
    name: ['modal_plus'],
    key: 'modal_plus',
    default: true
  }],
  btns: [{
    value: ['create'],
    key: 'create',
    type: 'create',
    icon: 'plus-circle-o',
    disabled: false
  }, {
    value: ['delete'],
    key: 'delete',
    type: 'danger',
    icon: 'delete',
    disabled: true
  }, {
    value: ['refresh'],
    key: 'refresh',
    type: 'primary',
    icon: 'reload',
    disabled: false
  }],
  table: {
    checkbox: true,
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
