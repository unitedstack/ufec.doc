import { ModalV2 } from 'ufec';
import { message } from 'antd';
import __ from 'client/locale/dashboard.lang.json';
import config from './config';

function pop(callback) {
  const props = {
    __,
    width: 800,
    config,
    onConfirm(values, cb, closeImmediately) {
      message.info(JSON.stringify(values));
      cb(true);
    },
    onAction(field, value, form, updateFields) {
    }
  };
  ModalV2(props);
}
export default pop;
