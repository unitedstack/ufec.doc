import { Form, Button, message } from 'antd';
import React from 'react';

const formWrapper = (SubComponent, config) => {
  class FormWrapper extends React.Component {
    constructor(props) {
      super(props);
    }

    validate = () => {
      const __ = config.__;
      this.props.form.validateFields((err, values) => {
        if (!err) {
          message.info(__.validate_success);
        }
      });
    }

    render() {
      const __ = config.__;
      return (
        <Form>
          <SubComponent
            __={__}
            form={this.props.form}
            {...config.conf}
          />
          {
            config.hideValidatedBtn ? null : <Button onClick={this.validate} type="primary">{__.validate}</Button>
          }
        </Form>
      );
    }
  }
  return Form.create()(FormWrapper);
};

export default formWrapper;

