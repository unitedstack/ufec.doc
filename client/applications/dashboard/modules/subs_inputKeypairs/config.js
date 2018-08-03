import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.inputKeypairs_title,
  description: __.inputKeypairs_description,
  link: 'https://github.com/unitedstack/ufec/blob/master/components/modal_v2/subs/inputKeypairs/index.jsx',
  components: [{
    __,
    hideValidatedBtn: true,
    conf: {
      addCustomConfiguration: __.add,
      inputkey: __.key,
      inputvalue: __.value,
      metaData: {
        key1: 'value1'
      },
      getMetaData: (data) => {

      }
    }
  }]
};
