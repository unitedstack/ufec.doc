import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.alert_title,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/alert',
  description: __.alert_description,
  components: [{
    __,
    description: __.alert_description,
    hideValidatedBtn: false,
    conf: {
      tip_type: 'success',
      message: 'alert_message',
      showIcon: true
    }
  }, {
    __,
    description: __.alert_description,
    hideValidatedBtn: true,
    conf: {
      tip_type: 'warning',
      message: 'alert_message',
      showIcon: true
    }
  }]
};
