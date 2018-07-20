import React from 'react';
import { Main, history } from 'ufec';
import { message, notification } from 'antd';
import Properties from 'client/components/basic_props/index';
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
    const path = history.getPathList();
    if (path.length > 1) {
      this.getSingle(path[1]);
    } else {
      this.getList();
    }
  }

  getList() {
    const table = this.state.config.table;
    request.getList().then((res) => {
      this.updateTableData(table, res);
    }).catch((err) => {
      this.updateTableData(table, []);
    });
  }

  getSingle(id) {
    const table = this.state.config.table;
    const __ = this.props.__;
    request.getSingle(id).then((res) => {
      this.updateTableData(table, res);
    }).catch((err) => {
      notification.warning({
        duration: null,
        message: __.warning,
        description: __.single_refersh_warning
      });
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
      case 'detail':
        this.onClickDetailTabs(data.key, data, refs);
        break;
      default:
        break;
    }
  }

  onClickDetailTabs(tabKey, data, refs) {
    const contents = refs.state.contents;
    const { rows } = data;
    const properties = this.getProperties(rows[0]);

    switch (tabKey) {
      case 'description':
        refs.loading(true, () => {
          contents[tabKey] = (
            <div>
              <Properties __={this.props.__} properties={properties} />
            </div>
          );
          refs.setState({
            loading: false,
            contents
          });
        });
        refs.setState({
          loading: false,
          contents
        });
        break;
      default:
        break;
    }
  }

  getProperties(item) {
    const properties = [{
      title: 'name',
      content: item.name
    }, {
      title: 'email',
      content: <a herf={item.email}>{item.email}</a>
    }, {
      title: 'sex',
      content: item.sex
    }, {
      title: 'id',
      content: item.id
    }];
    return properties;
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
