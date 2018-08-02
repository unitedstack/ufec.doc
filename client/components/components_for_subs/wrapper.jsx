import React from 'react';
import './style/wrapper.less';

const Wrapper = ({ children }) =>
  (
    <div className="ufec-module-basic_layout">
      <div className="subs-wrapper">
        <div className="subs-inner">
          {children}
        </div>
      </div>
    </div>
  );


export default Wrapper;
