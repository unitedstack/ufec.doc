import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.TreeSelect_title,
  description: __.TreeSelect_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_tree_select',
  components: [{
    __,
    description: '',
    hideValidatedBtn: true,
    conf: {
      placeholder: __.TreeSelect_placeholder,
      treeData: [
        {
          name: __.TreeSelect_dog,
          id: 'dog',
          disabled: false,
          children: [{
            name: __.TreeSelect_dog_husky,
            id: __.TreeSelect_dog_husky,
            disabled: false
          }, {
            name: __.TreeSelect_dog_labrador,
            id: __.TreeSelect_dog_labrador,
            disabled: false
          }]
        }, {
          name: __.TreeSelect_cat,
          id: 'cat',
          disabled: false,
          children: [{
            name: __.TreeSelect_cat_british_short_hair,
            id: __.TreeSelect_cat_british_short_hair,
            disabled: false
          }, {
            name: __.TreeSelect_cat_garfield,
            id: __.TreeSelect_cat_garfield,
            disabled: false
          }]
        }
      ],
      decorator: {
        id: 'tree'
      }
    }
  }]
};
