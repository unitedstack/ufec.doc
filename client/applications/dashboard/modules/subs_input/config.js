import __ from 'client/locale/dashboard.lang.json';
import { Icon, Tooltip } from 'antd';
import React from 'react';

export default {
  __,
  title: __.input_title,
  description: __.input_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_input',
  components: [
    {
      __,
      description: __.first_input_description,
      hideValidatedBtn: false,
      conf: {
        type: 'input',
        placeholder: __.subs_input,
        decorator: {
          id: 'input',
          rules: [{
            required: true
          }]
        }
      }
    },
    {
      __,
      description: __.second_input_description,
      hideValidatedBtn: false,
      conf: {
        type: 'input',
        placeholder: __.subs_input,
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
    },
    {
      __,
      description: __.third_input_description,
      hideValidatedBtn: false,
      conf: {
        type: 'input',
        placeholder: __.subs_input,
        decorator: {
          id: 'input',
          rules: [{
            required: true
          }, {
            type: 'email',
            message: __.pls_enter_a_valid_email_address
          }]
        }
      }
    },
    {
      __,
      description: __.textarea_description,
      hideValidatedBtn: true,
      conf: {
        type: 'textarea',
        decorator: {
          id: 'textarea'
        }
      }
    },
    {
      __,
      description: __.search_input_description,
      hideValidatedBtn: false,
      conf: {
        type: 'searchInput',
        enterButton: 'Search',
        extra: __.all_digits,
        decorator: {
          rules: [{
            required: true,
            message: __.pls_enter_11_digits
          }, {
            pattern: /^\d{11}$/,
            message: __.pls_enter_11_digits
          }],
          id: 'search-input'
        }
      }
    },
    {
      __,
      description: __.password_description,
      hideValidatedBtn: true,
      conf: {
        type: 'password',
        decorator: {
          id: 'password'
        }
      }
    },
    {
      __,
      description: __.group_input_description,
      hideValidatedBtn: true,
      conf: {
        type: 'groupInput',
        data: ['Arsenal', 'Manchester City', 'Liverpool', 'Chelsea'],
        selectInitialValue: 'Arsenal',
        decorator: {
          id: 'groupInput'
        }
      }
    }
  ]
};
