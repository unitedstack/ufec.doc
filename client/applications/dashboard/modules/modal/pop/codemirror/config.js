const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};

export default {
  title: ['create'],
  fields: [{
    type: 'codemirror',
    field: 'code',
    lang: 'javascript',
    theme: 'neat',
    lineNumbers: true,
    decorator: {
      id: 'code',
      initialValue: 'function Test(){\n  cosnole.log("Yes")\n}',
      rules: [{
        required: true
      }]
    },
    formItemLayout,
    height: 400
  }],
  btn: {
    value: 'create',
    type: 'primary'
  }
};
