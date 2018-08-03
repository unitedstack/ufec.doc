import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.auto_complete_title,
  description: __.auto_complete_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/auto_complete',
  components: [{
    __,
    description: __.default_auto_complete,
    hideValidatedBtn: true,
    conf: {
      label: __.name,
      placeholder: __.name,
      dataSource: ['Robin', 'Camilla', 'Deanna', 'Nelson', 'Carolyn', 'Barrett', 'Rodney'],
      decorator: {
        id: 'autoComplete1'
      }
    }
  }, {
    __,
    description: __.width_auto_complete,
    hideValidatedBtn: true,
    conf: {
      label: __.name,
      placeholder: __.name,
      width: '300px',
      dataSource: ['Hana', 'Simone', 'Nico', 'Frances', 'Catalina', 'Jeffery'],
      decorator: {
        id: 'autoComplete2'
      }
    }
  }, {
    __,
    description: __.required_auto_complete,
    hideValidatedBtn: false,
    conf: {
      label: __.name,
      placeholder: __.name,
      dataSource: ['Raphael', 'Alvin', 'Melvin', 'Brittney', 'Kaya'],
      decorator: {
        id: 'autoComplete3',
        rules: [{
          required: true,
          message: __.required_auto_complete_message
        }]
      }
    }
  }]
};
