import React from 'react';
import { Main } from 'ufec';
import { message } from 'antd';
import config from './config';
import request from './request';
import './style/index.less';

class Model extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      config
    };
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
    switch (key) {
      case 'create':
        message.info('你点击了创建按钮');
        break;
      case 'refresh':
        this.refresh();
        break;
      default:
        break;
    }
  }

  btnListRender(rows, btns) {
    for (const key in btns) {
      switch (key) {
        case 'refresh':
          btns[key].disabled = false;
          break;
        default:
          break;
      }
    }
    return btns;
  }

  refresh() {
    this.clearState();
    this.loadingTable();
    this.getList();
  }

  loadingTable() {
    const _config = this.state.config;
    _config.table.loading = true;

    this.setState({
      config: _config
    });
  }

  clearState() {
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
      <div className="ufec-module-basic_layout">
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
