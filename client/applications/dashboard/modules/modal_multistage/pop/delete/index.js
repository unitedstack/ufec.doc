import { ModalV2 } from 'ufec';
import __ from 'client/locale/dashboard.lang.json';
import confirmDeleteUser from '../confirm_delete_user/index';
import config from './config';

function pop(rows, callback) {
  config.fields[0].onAction = () => {
    confirmDeleteUser(rows, callback);
  };
  const props = {
    __,
    config
  };
  ModalV2(props);
}
export default pop;
