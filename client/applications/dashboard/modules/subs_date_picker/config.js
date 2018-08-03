import { message } from 'antd';
import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.date_picker_title,
  description: __.date_picker_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_date_picker',
  components: [{
    __,
    description: '',
    hideValidatedBtn: false,
    conf: {
      showTime: true,
      decorator: {
        id: 'datePicker',
        rules: [{
          required: true
        }],
        onChange: (value) => {
          message.info(`You have chosen date of ${value}`);
        }
      }
    }
  }]
};
