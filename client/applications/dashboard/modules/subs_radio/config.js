import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.radio_title,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_radio',
  description: __.radio_description,
  components: [{
    __,
    description: __.description_radio_type_default,
    hideValidatedBtn: true,
    conf: {
      decorator: {
        id: 'radioTest1',
        initialValue: 'one',
        rules: [{
          required: true
        }]
      },
      data: [{
        id: 'one',
        name: 'A'
      }, {
        id: 'two',
        name: 'B'
      }, {
        id: 'three',
        name: 'C'
      }],
      hide: false
    }
  }, {
    __,
    description: __.description_radio_type_button,
    hideValidatedBtn: true,
    conf: {
      decorator: {
        id: 'radioTest2',
        initialValue: 'two',
        rules: [{
          required: false
        }]
      },
      button: true,
      data: [{
        id: 'one',
        name: 'A'
      }, {
        id: 'two',
        name: 'B'
      }, {
        id: 'three',
        name: 'C'
      }],
      hide: false
    }
  }, {
    __,
    description: __.description_radio_disabled,
    hideValidatedBtn: true,
    conf: {
      decorator: {
        id: 'radioTest3',
        initialValue: 'one',
      },
      disabled: true,
      data: [{
        id: 'one',
        name: 'A'
      }, {
        id: 'two',
        name: 'B'
      }, {
        id: 'three',
        name: 'C'
      }],
      hide: false
    }
  }, {
    __,
    description: __.description_radio_itemWidth,
    hideValidatedBtn: true,
    conf: {
      decorator: {
        id: 'radioTest3',
        initialValue: 'one',
      },
      button: true,
      itemWidth: 300,
      data: [{
        id: 'one',
        name: 'A'
      }, {
        id: 'two',
        name: 'B'
      }, {
        id: 'three',
        name: 'C'
      }],
      hide: false
    }
  }]
};
