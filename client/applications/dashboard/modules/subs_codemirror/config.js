import __ from 'client/locale/dashboard.lang.json';

export default {
  __,
  title: __.codemirror_title,
  description: __.codemirror_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/subs_codemirror',
  components: [
    {
      __,
      description: __.first_code_description,
      hideValidatedBtn: true,
      conf: {
        type: 'codemirror',
        field: 'code',
        lang: 'javascript',
        lineNumbers: false,
        decorator: {
          id: 'code',
          initialValue: 'function Test(){\n  cosnole.log("Yes")\n}',
          rules: [{
            required: true
          }]
        }
      }
    },
    {
      __,
      description: __.second_code_description,
      hideValidatedBtn: true,
      conf: {
        type: 'codemirror',
        field: 'code2',
        lang: 'htmlmixed',
        theme: 'material',
        lineNumbers: true,
        decorator: {
          id: 'code2',
          initialValue: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ufec CodeMirror</title>
</head>

<body>
  <h1>Ufec CodeMirror</h1>
</body>

</html>`,
          rules: [{
            required: true
          }]
        },
        height: 400
      }
    }
  ]
};
