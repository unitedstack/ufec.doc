import React from 'react';
import __ from 'client/locale/dashboard.lang.json';
import './style/statement.less';

const Statement = ({ title, description, link }) => (
  <div>
    <p className="subs-piece-title">{title}</p>
    <p>{__.current_link}<a className="subs-piece-link" href={link}>{link}</a></p>
    <p className="subs-piece-description">
      <span>{__.sub_description}</span>
      <span>{description}</span>
    </p>
  </div>

);

export default Statement;
