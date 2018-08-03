import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.checkbox_title,
  description: __.checkbox_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/checkbox',
  components: [{
    __,
    description: __.default_checkbox,
    hideValidatedBtn: true,
    conf: {
      label: __.name,
      hasLabel: true,
      placeholder: __.name,
      data: [{
        label: 'Robin',
        value: 'Robin'
      }, {
        label: 'Camilla',
        value: 'Camilla'
      }, {
        label: 'Deanna',
        value: 'Deanna'
      }, {
        label: 'Nelson',
        value: 'Nelson'
      }],
      decorator: {
        id: 'checkbox',
        initialValue: ['Robin', 'Deanna']
      }
    }
  }, {
    __,
    description: __.required_checkbox,
    hideValidatedBtn: false,
    conf: {
      label: __.name,
      hasLabel: true,
      placeholder: __.name,
      data: [{
        label: 'Robin',
        value: 'Robin'
      }, {
        label: 'Camilla',
        value: 'Camilla'
      }, {
        label: 'Deanna',
        value: 'Deanna'
      }, {
        label: 'Nelson',
        value: 'Nelson'
      }],
      decorator: {
        id: 'checkbox1',
        rules: [{
          required: true,
          message: __.required_checkbox_message
        }]
      }
    }
  }]
};
