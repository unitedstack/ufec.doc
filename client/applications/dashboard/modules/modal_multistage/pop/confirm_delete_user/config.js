export default {
  title: ['confirm'],
  fields: [{
    type: 'input',
    field: 'name',
    placeholder: 'pls_enter_name',
    decorator: {
      id: 'name',
      rules: [{
        required: true,
        message: 'name_not_equal'
      }]
    },
    extra: 'name_check_tip'
  }],
  btn: {
    value: 'confirm',
    type: 'primary'
  }
};
