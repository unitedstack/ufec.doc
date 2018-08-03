import React from 'react';
import { Subs } from 'ufec';
import { Wrapper, Piece, formWrapper } from 'client/components/components_for_subs';
import config from './config';

const Select = Subs.Select;

const model = () => (
  <Wrapper
    title={config.title}
    description={config.description}
    link={config.link}
  >
    {
      config.components.map((c, index) => {
        const Sub = formWrapper(Select, c);
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
