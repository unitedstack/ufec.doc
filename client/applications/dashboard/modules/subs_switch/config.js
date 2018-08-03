import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.switch_title,
  description: __.switch_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_switch',
  components: [{
    __,
    description: '',
    hideValidatedBtn: true,
    conf: {
      disabled: false,
      required: true,
      hide: false,
      checkedChildren: 'yes',
      unCheckedChildren: 'no',
      loading: false,
      size: 'large',
      defaultChecked: true,
      decorator: {
        id: 'switch'
      }
    }
  }]
};
