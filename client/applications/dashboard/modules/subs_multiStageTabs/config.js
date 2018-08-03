import __ from 'client/locale/dashboard.lang.json';
import React from 'react';
import { Alert } from 'antd';

export default {
  __,
  title: __.multiStageTabs_title,
  description: __.multiStageTabs_description,
  link: 'https://github.com/unitedstack/ufec/blob/master/components/modal_v2/subs/multistageTabs/index.jsx',
  components: [{
    __,
    hideValidatedBtn: true,
    conf: {
      type: 'card',
      subtype: 'card',
      panes: [{
        name: 'levelone_one',
        key: 'levelone_one',
        default: true
      }, {
        name: 'levelone_two',
        key: 'levelone_two'
      }, {
        name: 'levelone_three',
        key: 'levelone_three'
      }],
      subpanes: [{
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
      }],
      onSubAction: (value, state) => {
      },
    }
  }]
};
