import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.alert_with_click_title,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_alert_with_click',
  description: __.alert_with_click_description,
  components: [{
    __,
    description: null,
    hideValidatedBtn: true,
    conf: {
      field: 'AlertWithClick',
      tip_type: 'info',
      message: 'alert_with_click_message',
      linkText: 'alert_with_click_linkText',
      showIcon: true,
      description: 'alert_with_click_com_description',
      onAction: (field) => {
        window.alert(field);
      }
    }
  }]
};
