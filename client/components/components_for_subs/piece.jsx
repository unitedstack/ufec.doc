import React from 'react';
import Statement from './statement.jsx';
import './style/piece.less';

const Piece = ({
  title, children, description, link
}) => (
  <div className="subs-piece-wrapper">
    <Statement
      title={title}
      description={description}
      link={link}
    />
    <div className="subs-piece-instance">
      {children}
    </div>
  </div>
);


export default Piece;
