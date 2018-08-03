import React from 'react';
import { Subs } from 'ufec';
import { Wrapper, Piece, formWrapper } from 'client/components/components_for_subs';
import config from './config';
import './style/index.less';

const Input = Subs.Input;

const Model = () =>
  (
    <Wrapper
      title={config.title}
      description={config.description}
      link={config.link}
    >
      <div className="ufec-pro-input-page">
        {
          config.components.map((c, index) => {
            const Sub = formWrapper(Input, c);
            return (<Piece
              key={index}
              description={c.description}
            >
              <Sub />
            </Piece>);
          })
        }
      </div>
    </Wrapper>
  );

export default Model;
