import { Icon, Dropdown, Menu } from 'antd';
import { history } from 'ufec';
import React from 'react';
import __ from 'client/locale/dashboard.lang.json';
import apps from './app.json';
import './style/index.less';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    collapsed: this.props.collapsed
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return prevState.collapsed !== nextProps.collapsed ? nextProps : null;
  }

  onClick = () => {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const state = this.state;
    const lang = window.lang;

    const userMenu = (
      <Menu onClick={this.onClickUserList}>
        <Menu.Item><a href={lang === 'zh-CN' ? '?lang=en' : '?lang=zh-CN'}>{lang === 'zh-CN' ? __.en : __.zh}</a></Menu.Item>
      </Menu>
    );

    return (
      <div id="navbar_dropdown_wrapper" className="ufec-com-navbar">
        <ul className="left">
          <li className={state.collapsed ? 'logo-wrapper collapsed' : 'logo-wrapper'}>
            <img src={state.collapsed ? '/assets/logo_no_text.png' : '/assets/logo.png'} />
          </li>
          {
            !this.props.nocollapsed ? <li className="toggle" onClick={this.onClick}>
              <Icon type={
                state.collapsed ? 'menu-unfold' : 'menu-fold'
              }
              />
            </li> : null
          }
        </ul>
        <ul className="right">
          {
            apps.list.map(app => <li className={history.currentUfecApp === app ? 'select' : ''}><a href={`/${app}`}>{__[app]}</a></li>)
          }
          <li className="github">
            <a href="https://github.com/unitedstack/ufec.pro"><Icon type="github" /></a>
          </li>
          <Dropdown getPopupContainer={() => document.getElementById('navbar_dropdown_wrapper')} overlay={userMenu} >
            <li>
              <Icon type="user" />  <Icon type="caret-down-right" />
            </li>
          </Dropdown>
        </ul>
      </div>
    );
  }
}

module.exports = NavBar;
