import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.checkboxTable_title,
  description: __.checkboxTable_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/checkboxTable',
  components: [{
    __,
    description: __.default_checkbox_table,
    hideValidatedBtn: true,
    conf: {
      field: 'checkboxtable',
      label: __.name,
      placeholder: __.name,
      title: ['name', 'checkbox'],
      nameType: 'name',
      addValue: 'add_value',
      userData: [{
        id: 'George Nelson',
        user_id: 'George Nelson',
        name: 'George Nelson'
      }, {
        id: 'Scott White',
        user_id: 'Scott White',
        name: 'Scott White'
      }, {
        id: 'Quinn Jones',
        user_id: 'Quinn Jones',
        name: 'Quinn Jones'
      }, {
        id: 'Kenneth White',
        user_id: 'Kenneth White',
        name: 'Kenneth White'
      }, {
        id: 'Marshall Bailey',
        user_id: 'Marshall Bailey',
        name: 'Marshall Bailey'
      }, {
        id: 'Miles Watson',
        user_id: 'Miles Watson',
        name: 'Miles Watson'
      }],
      initData: [{
        user_name: 'Watson',
        competence: ['Walter Harris', 'Kirk Wood']
      }, {
        user_name: 'Morgan',
        competence: ['Tobias Sanchez']
      }, {
        user_name: 'Young',
        competence: ['Tobias Sanchez', 'Quentin Sanders', 'Kirk Wood']
      }],
      options: [{
        label: 'Tobias Sanchez',
        value: 'Tobias Sanchez'
      }, {
        label: 'Walter Harris',
        value: 'Walter Harris'
      }, {
        label: 'Quentin Sanders',
        value: 'Quentin Sanders'
      }, {
        label: 'Louis Gonzales',
        value: 'Louis Gonzales'
      }, {
        label: 'Kirk Wood',
        value: 'Kirk Wood'
      }],
      decorator: {
        id: 'checkboxtable'
      }
    }
  }]
};
