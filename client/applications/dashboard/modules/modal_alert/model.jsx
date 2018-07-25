import React from 'react';
import { Main, ModalAlert } from 'ufec';
import config from './config';
import request from './request';
import './style/index.less';

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config
    };

    this.__ = props.__;
  }

  onInitialize = () => {
    this.getList();
  }

  getList() {
    const table = this.state.config.table;
    request.getList().then((res) => {
      this.updateTableData(table, res);
    }).catch((err) => {
      this.updateTableData(table, []);
    });
  }

  updateTableData(table, res) {
    const newConfig = this.state.config;
    table.data = res;
    table.total = res.length;
    newConfig.table = table;
    newConfig.table.loading = false;
    this.setState({
      config: newConfig
    });
  }

  onAction = (field, actionType, data, refs) => {
    switch (field) {
      case 'btnList':
        this.onClickBtnList(data.key, actionType, data, refs);
        break;
      default:
        break;
    }
  }

  onClickBtnList(key, actionType, data, refs) {
    const { rows } = data;
    switch (key) {
      case 'create':
        ModalAlert({
          __: this.props.__,
          title: ['create_new_user'],
          info: 'sure_create_user',
          message: 'sure_create_user_tip',
          tip_type: 'info',
          btnValue: 'create',
          btnType: 'default',
          onAction: (cb) => {
            request.createRandomUser().then(() => {
              cb(true);
              this.refresh();
            }).catch((err) => {
              cb(false, 'Error');
            });
          }
        });
        break;
      case 'delete':
        ModalAlert({
          __: this.props.__,
          title: ['delete_user'],
          message: 'sure_delete_user_tip',
          info: 'sure_delete_user',
          btnValue: 'delete',
          onAction: (cb) => {
            request.deleteUser(rows[0].id).then(() => {
              cb(true);
              this.refresh();
            }).catch((err) => {
              cb(false, 'Error');
            });
          }
        });
        break;
      case 'refresh':
        ModalAlert({
          __: this.props.__,
          title: ['refresh'],
          info: 'sure_refresh',
          btnType: 'primary',
          btnValue: 'refresh',
          onAction: (cb) => {
            cb(true);
            this.refresh();
          }
        });
        break;
      default:
        break;
    }
  }

  btnListRender(rows, btns) {
    for (const key in btns) {
      switch (key) {
        case 'delete':
          btns[key].disabled = !(rows && rows.length === 1);
          break;
        case 'refresh':
          btns[key].disabled = false;
          break;
        default:
          break;
      }
    }
    return btns;
  }

  refresh = () => {
    this.clearState();
    this.loadingTable();
    this.getList();
  }

  loadingTable = () => {
    const _config = this.state.config;
    _config.table.loading = true;

    this.setState({
      config: _config
    });
  }

  clearState = () => {
    const dashboardRef = this.dashboard.current;
    if (dashboardRef) {
      dashboardRef.clearState();
    }
  }

  dashboard = React.createRef();

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="ufec-module-modal_alert">
        <Main
          ref={this.dashboard}
          config={state.config}
          btnListRender={this.btnListRender}
          onAction={this.onAction}
          onInitialize={this.onInitialize}
          __={props.__}
        />
      </div>
    );
  }
}

export default Model;
