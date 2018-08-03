import React from 'react';
import { Subs } from 'ufec';
import { Wrapper, Piece, formWrapper } from 'client/components/components_for_subs';
import config from './config';
import './style/index.less';

const InputKeypairs = Subs.InputKeypairs;

const model = () => (
  <Wrapper
    title={config.title}
    description={config.description}
    link={config.link}
  >
    {
      config.components.map((c, index) => {
        const Sub = formWrapper(InputKeypairs, c);
        return (<Piece
          className="keypair-"
          key={index}
          description={c.description}
        >
          <Sub />
        </Piece>);
      })
    }
  </Wrapper>
);

export default model;
