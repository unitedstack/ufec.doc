import React from 'react';
import { Subs } from 'ufec';
import { Wrapper, Piece, formWrapper } from 'client/components/components_for_subs';
import config from './config';

const DatePicker = Subs.DatePicker;
const DatePickerInstance = formWrapper(DatePicker, config.conf);

const Model = () =>
  (
    <Wrapper>
      <Piece
        title={config.title}
        description={config.description}
        link={config.link}
      >
        <DatePickerInstance />
      </Piece>
    </Wrapper>
  );

export default Model;
