import ReactDOM from 'react-dom';
import React from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';
import { Router } from 'react-router-dom';
import Cookies from 'js-cookie';
import __ from 'client/locale/dashboard.lang.json';
import { history } from 'ufec';
import Model from './model';
import './style/index.less';

const language = Cookies.get('lang');
window.lang = language;

const lang = language === 'zh-CN' ? zhCN : enUS;

ReactDOM.render(
  <Router history={history}>
    <LocaleProvider locale={lang}>
      <Model __={__} />
    </LocaleProvider>
  </Router>,
  document.getElementById('container')
);
