import __ from 'client/locale/dashboard.lang.json';
import { Icon, Tooltip } from 'antd';
import React from 'react';

export default {
  __,
  title: __.input_number_title,
  description: __.input_number_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_input_number',
  components: [
    {
      __,
      description: __.first_input_number_description,
      hideValidatedBtn: false,
      conf: {
        min: 1,
        max: 10,
        step: 1,
        decorator: {
          id: 'input',
          rules: [{
            required: true,
            message: __.pls_input_or_select_a_number
          }]
        }
      }
    },
    {
      __,
      description: __.second_input_number_description,
      hideValidatedBtn: false,
      conf: {
        min: 0,
        max: 5,
        step: 0.2,
        addonAfter: (
          <Tooltip title="no problem">
            <Icon type="question" />
          </Tooltip>
        ),
        decorator: {
          id: 'input',
          rules: [{
            required: true
          }]
        }
      }
    }
  ]
};
