import React from 'react';
import './style/wrapper.less';
import Statement from './statement.jsx';

const Wrapper = ({
  title, link, description, children
}) =>
  (
    <div className="ufec-module-basic_layout">
      <div className="subs-wrapper">
        <div className="subs-inner">
          <Statement
            title={title}
            link={link}
            description={description}
          />
          {children}
        </div>
      </div>
    </div>
  );


export default Wrapper;
