import React from 'react';
import { Subs } from 'ufec';
import { Wrapper, Piece, formWrapper } from 'client/components/components_for_subs';
import config from './config';

const URadio = Subs.Radio;

const model = () => (
  <Wrapper
    title={config.title}
    description={config.description}
    link={config.link}
  >
    {
      config.components.map((c, index) => {
        const Sub = formWrapper(URadio, c);
        return (<Piece
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
