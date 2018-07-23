import __ from 'client/locale/dashboard.lang.json';

export default {
  title: ['create'],
  fields: [{
    type: 'input',
    field: 'name',
    placeholder: 'pls_enter_name',
    decorator: {
      id: 'name',
      rules: [{
        required: true,
        message: 'pls_enter_name'
      }]
    }
  }, {
    type: 'input',
    field: 'email',
    placeholder: 'pls_enter_email',
    decorator: {
      id: 'email',
      rules: [{
        required: true,
        type: 'email',
        message: 'email_format_error'
      }]
    }
  }, {
    type: 'select',
    field: 'sex',
    placeholder: 'pls_select_sex',
    decorator: {
      id: 'sex',
      rules: [{
        required: true,
        message: 'pls_select_sex'
      }]
    },
    data: [{
      name: __.male,
      id: 'male'
    }, {
      name: __.female,
      id: 'female'
    }]
  }, {
    type: 'checkbox',
    field: 'expand',
    decorator: {
      id: 'expand'
    },
    linkList: [{
      id: 'id',
      hide: value => !(value.length > 0)
    }],
    data: [{
      label: 'show_advanced_options',
      value: 'show_advanced_options'
    }]
  }, {
    type: 'input',
    field: 'id',
    decorator: {
      id: 'id',
      rules: [{
        required: true,
        pattern: /^[a-zA-Z0-9_~]{20}$/,
        message: 'id_format_error'
      }]
    },
    extra: __.id_extra,
    hide: true
  }],
  btn: {
    value: 'create',
    type: 'primary'
  }
};
