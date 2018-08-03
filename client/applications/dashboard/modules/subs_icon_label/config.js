import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.icon_label_title,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_icon_label',
  description: __.icon_label_description,
  components: [{
    __,
    description: __.description_icon_label_text_with_icon,
    hideValidatedBtn: true,
    conf: {
      icon_type: 'lock',
      text: 'icon_label_text_with_icon',
      hide: false
    }
  }]
};
