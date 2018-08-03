import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.text_title,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/alert',
  description: __.text_description,
  components: [{
    __,
    description: __.text_type_info,
    hideValidatedBtn: true,
    conf: {
      text_type: 'info',
      info: 'text_message'
    }
  }, {
    __,
    description: __.text_type_warning,
    hideValidatedBtn: true,
    conf: {
      text_type: 'warning',
      info: 'text_message'
    }
  }, {
    __,
    description: __.text_type_error,
    hideValidatedBtn: true,
    conf: {
      text_type: 'error',
      info: 'text_message'
    }
  }, {
    __,
    description: __.text_type_default,
    hideValidatedBtn: true,
    conf: {
      info: 'text_message'
    }
  }]
};
