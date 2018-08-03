import React from 'react';

import './style/piece.less';

const Piece = ({ children, description, className }) => (
  <div className="subs-piece-wrapper">
    <div className="description">{description}</div>
    <div className="subs-piece-instance">
      <div className={`${className}wrapper`}>
        {children}
      </div>
    </div>
  </div>
);

export default Piece;
