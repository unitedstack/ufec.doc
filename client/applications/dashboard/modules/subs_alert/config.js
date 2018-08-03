import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.alert_title,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_alert',
  description: __.alert_description,
  components: [{
    __,
    description: __.alert_description_type_info,
    hideValidatedBtn: true,
    conf: {
      tip_type: 'info',
      message: 'alert_message',
      showIcon: true
    }
  }, {
    __,
    description: __.alert_description_type_success,
    hideValidatedBtn: true,
    conf: {
      tip_type: 'success',
      message: 'alert_message',
      showIcon: true
    }
  }, {
    __,
    description: __.alert_description_type_warning,
    hideValidatedBtn: true,
    conf: {
      tip_type: 'warning',
      message: 'alert_message',
      showIcon: true
    }
  }, {
    __,
    description: __.alert_description_type_error,
    hideValidatedBtn: true,
    conf: {
      tip_type: 'error',
      message: 'alert_message',
      showIcon: true
    }
  }, {
    __,
    description: __.alert_description_hide_icon,
    hideValidatedBtn: true,
    conf: {
      tip_type: 'error',
      message: 'alert_message',
      showIcon: false
    }
  }]
};
