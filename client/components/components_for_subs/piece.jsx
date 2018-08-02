import React from 'react';

import './style/piece.less';

const Piece = ({ children, description }) => (
  <div className="subs-piece-wrapper">
    <div className="description">{description}</div>
    <div className="subs-piece-instance">
      <div className="wrapper">
        {children}
      </div>
    </div>
  </div>
);


export default Piece;
