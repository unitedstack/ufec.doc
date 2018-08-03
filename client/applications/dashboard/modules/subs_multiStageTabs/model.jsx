import React from 'react';
import __ from 'client/locale/dashboard.lang.json';
import { Subs } from 'ufec';
import { Wrapper, Piece, formWrapper } from 'client/components/components_for_subs';
import { Alert } from 'antd';
import config from './config';
import './style/index.less';


const MultistageTabs = Subs.MultistageTabs;

config.components[0].conf.onAction = (value, state) => {
  if (state.activeKey === 'levelone_two') {
    config.components[0].conf.subpanes = [{
      name: 'leveltwo_four',
      key: 'leveltwo_four',
      content: <div className="pool-copy-number">
        <div className="pool-copy-number-button">
          <Alert message={__.cherry_msg} type="success" />
        </div>
      </div>,
      default: true
    }, {
      name: 'leveltwo_five',
      content: <div className="pool-copy-number">
        <div className="pool-copy-number-button">
          <Alert message={__.watermelon_msg} type="warning" />
        </div>
      </div>,
      key: 'leveltwo_five'
    }];
  } else {
    config.components[0].conf.subpanes = [{
      name: 'leveltwo_one',
      key: 'leveltwo_one',
      content: <div className="pool-copy-number">
        <div className="pool-copy-number-button">
          <Alert message={__.apple_msg} type="success" />
        </div>
      </div>,
      default: true
    }, {
      name: 'leveltwo_two',
      content: <div className="pool-copy-number">
        <div className="pool-copy-number-button">
          <Alert message={__.banana_msg} type="warning" />
        </div>
      </div>,
      key: 'leveltwo_two'
    }];
  }
};

const model = () => (
  <Wrapper
    title={config.title}
    description={config.description}
    link={config.link}
  >
    {
      config.components.map((c, index) => {
        const Sub = formWrapper(MultistageTabs, c);
        return (<Piece
          className="multistagetabs-"
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
