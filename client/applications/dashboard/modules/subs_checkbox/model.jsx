import React from 'react';
import { Subs } from 'ufec';
import { Wrapper, Piece, formWrapper } from 'client/components/components_for_subs';
import config from './config';
import './style/index.less';

const Checkbox = Subs.Checkbox;

const model = () => (
  <Wrapper
    title={config.title}
    description={config.description}
    link={config.link}
  >
    {
      config.components.map((c, index) => {
        const Sub = formWrapper(Checkbox, c);
        return (<Piece
          key={index}
          description={c.description}
        >
          <div className="checkbox-subs"><Sub /></div>
        </Piece>);
      })
    }
  </Wrapper>
);

export default model;
