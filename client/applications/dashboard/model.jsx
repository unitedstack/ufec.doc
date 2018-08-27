import React from 'react';
import { SideMenu, history } from 'ufec';
import Navbar from 'client/components/navbar/index';
import { Switch, Route, Redirect } from 'react-router-dom';
import loader from './cores/loader';

const configs = loader.configs;

class Model extends React.Component {
  constructor(props) {
    super(props);
    // 放在componentDidMount中在初始化的时候无法正确监听到Redirect
    history.listen((h) => {
      this.setState({
        currentModule: this._filterMenu(history.getPathList()[0])
      });
    });
  }
  state = {
    // menus: [],
    currentModule: this._filterMenu(history.getPathList()[0]),
    collapsed: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!(nextState !== this.state);
  }

  _filterMenu(item) {
    let ret = item;
    configs.routers.some((m) => {
      if (item === m.key) {
        ret = m.link;
        return true;
      }
      return false;
    });
    return ret;
  }

  filterMenu(modules) {
    modules.forEach((m) => {
      m.items = m.items.filter((i) => {
        const b = configs.routers.some((n) => {
          if (n.key === i) {
            return true;
          }
          return false;
        });
        const h = configs.hidden ? configs.hidden.some((hide) => {
          if (hide === i) {
            return true;
          }
          return false;
        }) : null;
        return !b && !h;
      });
    });
    return modules;
  }

  getMenus() {
    const menus = {};
    menus.defaultOpenKeys = configs.default_openKeys;
    menus.defaultSelectedKeys = [this.state.currentModule];
    menus.modules = this.filterMenu(configs.modules);
    return menus;
  }

  toggleMenu() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  // icon定制
  iconsMap = (name) => {
    switch (name) {
      case 'popup':
        return 'switcher';
      case 'subs':
        return 'codepen';
      case 'overview':
        return 'exception';
      default:
        return name;
    }
  }

  render() {
    const modules = loader.modules;
    const menus = this.getMenus();
    const __ = this.props.__;

    return (
      <div id="wrapper">
        <div className="main-content">
          <div id="navbar">
            <Navbar
              __={__}
              collapsed={this.state.collapsed}
              onClick={this.toggleMenu.bind(this)}
            />
          </div>
          <div id="main-wrapper" className="main-wrapper">
            <Route children={({ location }) => (
              <div className="garen-com-menu">
                <SideMenu
                  __={__}
                  collapsed={this.state.collapsed}
                  location={location}
                  items={menus}
                  iconsMap={this.iconsMap}
                />
              </div>
            )}
            />
            <div id="main">
              <Switch>
                {
                  Object.keys(modules).map((m, i) => {
                    const M = modules[m];
                    return <Route key={i} path={`/${m}`} children={() => <M __={__} collapsed={this.state.collapsed} />} />;
                  })
                }
                <Redirect to={Object.keys(modules)[0]} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Model;
