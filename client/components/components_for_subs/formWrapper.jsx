import { Form } from 'antd';
import React from 'react';

const formWrapper = (SubComponent, confs) => {
  class FormWrapper extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Form>
          <SubComponent
            form={this.props.form}
            {...confs}
          />
        </Form>
      );
    }
  }
  return Form.create()(FormWrapper);
};

export default formWrapper;

