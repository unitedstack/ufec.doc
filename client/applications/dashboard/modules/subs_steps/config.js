import __ from 'client/locale/dashboard.lang.json';
import { message } from 'antd';

export default {
  __,
  title: __.steps_title,
  description: __.steps_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_steps',
  components: [{
    __,
    description: '',
    hideValidatedBtn: true,
    conf: {
      disabled: false,
      __,
      steps: [
        {
          title: __.steps_sptep1_title,
          description: __.steps_sptep1_description
        }, {
          title: __.steps_sptep2_title,
          description: __.steps_sptep2_description
        }, {
          title: __.steps_sptep3_title,
          description: __.steps_sptep3_description
        }
      ],
      onConfirm: () => {
        message.info(__.steps_finish);
      }
    }
  }]
};
