import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.slider_title,
  description: __.slider_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_slider',
  components: [
    {
      __,
      description: __.first_slider_description,
      hideValidatedBtn: true,
      conf: {
        min: 0,
        max: 100,
        step: 1,
        unit: '',
        decorator: {
          id: 'slider',
          rules: [{
            required: true
          }]
        }
      }
    },
    {
      __,
      description: __.second_slider_description,
      hideValidatedBtn: false,
      conf: {
        min: 0,
        max: 2,
        step: 0.2,
        unit: 'MB/s',
        decorator: {
          id: 'slider',
          rules: [{
            required: true
          }]
        }
      }
    }
  ]
};
