import { ModalV2 } from 'ufec';
import __ from 'client/locale/dashboard.lang.json';
import config from './config';
import request from '../../request';

function pop(rows, callback) {
  const name = rows[0].name;
  config.fields[0].decorator.rules[0].validator = (rule, value, validate) => {
    if (value !== name) {
      validate(__.name_not_equal);
    } else {
      validate();
    }
  };
  const props = {
    __,
    config,
    onConfirm(values, cb, closeImmediately) {
      request.deleteUser(rows).then(() => {
        closeImmediately();
        callback();
      }).catch((err) => {
        cb(false, 'Error');
      });
    },
    onAction(field, value, form, updateFields) {
    }
  };
  ModalV2(props);
}
export default pop;
