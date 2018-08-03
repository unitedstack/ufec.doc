import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.select_title,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_select',
  description: __.select_description,
  components: [{
    __,
    description: __.select_default,
    hideValidatedBtn: true,
    conf: {
      label: 'default',
      type: 'select',
      data: [{
        id: '1',
        name: 'jack'
      }, {
        id: '2',
        name: 'Lucy'
      }, {
        id: '3',
        name: 'James'
      }],
      decorator: {
        id: 'selectTest1',
        initialValue: '2',
        onChange: (value) => {
          window.alert(`value: ${value}`);
        },
        rules: [{
          required: true
        }]
      }
    }
  }, {
    __,
    description: __.select_disabled,
    hideValidatedBtn: true,
    conf: {
      decorator: {
        id: 'selectTest2',
        initialValue: '1',
        onChange: () => {}
      },
      label: 'selectType',
      type: 'select',
      disabled: true,
      data: [{
        id: '1',
        name: 'jack'
      }, {
        id: '2',
        name: 'Lucy'
      }, {
        id: '3',
        name: 'James'
      }]
    }
  }, {
    __,
    description: __.select_type_select,
    hideValidatedBtn: true,
    conf: {
      decorator: {
        id: 'selectTest2',
        initialValue: '1',
        onChange: () => {}
      },
      label: 'selectType',
      type: 'select',
      data: [{
        id: '1',
        name: 'jack'
      }, {
        id: '2',
        name: 'Lucy'
      }, {
        id: '3',
        name: 'James'
      }]
    }
  }, {
    __,
    description: __.select_type_optionGroup,
    hideValidatedBtn: true,
    conf: {
      decorator: {
        id: 'selectTest3',
        initialValue: '10',
        onChange: () => {}
      },
      label: 'optionGroup',
      type: 'optionGroup',
      data: [{
        id: 'optionGroup1',
        name: 'name',
        children: [{
          id: '1',
          name: 'jack'
        }, {
          id: '2',
          name: 'Lucy'
        }, {
          id: '3',
          name: 'James'
        }],
      }, {
        id: 'optionGroup2',
        name: 'word',
        children: [{
          id: '10',
          name: 'apple'
        }, {
          id: '20',
          name: 'boom'
        }, {
          id: '30',
          name: 'can'
        }],
      }]
    }
  }]
};
