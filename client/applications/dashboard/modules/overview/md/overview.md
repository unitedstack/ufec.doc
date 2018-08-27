# UnitedStack Front End Components

一个基于antd实现的一套组件封装，用于开发管理平台面板

![unitedStack](/assets/logo.svg) `+`
![antd](/assets/antd.svg) `+`
![react](/assets/react.svg)

## 特性
- 提炼后台管理产品的交互风格
- 高质量react组件
- 完全基于配置，开发方便

## 安装

我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install antd --save
```

```bash
$ yarn add antd
```
## External
Ufec依赖一些库，你需要保证你的上下文中有以下这些库:

* React v16+
* React-dom v16+
* React-dom-router v4.0+
* antd v3.5+

## API

### Main

主页面设计：包括了列表，详情页，checkbox，tab, 操作按钮列表，分页, 搜索，过滤等功能。

```javascript
import {Main} from 'ufec';
```

![modal-main](/assets/api/api-main.jpg)
![modal-detail](/assets/api/api-detail.jpg)

### ModalV2

弹出框主逻辑，支持通过json文件配置`Subs`中的子组件，并且支持自动验证，也可以把本地组件扩展到该组件，主要应用于表单类，例如创建和编辑等.

![modal-main](/assets/api/api-modalv2.jpg)

### ModalPlus

和`ModalV2`逻辑相同，样式不同，交互不同.

![modal-main](/assets/api/api-modalplus.jpg)

### ModalDelete

包含删除逻辑的弹出框.

![modal-main](/assets/api/modal-delete.jpg)

### ModalAlert

弹出消息／提醒／确认等信息的弹出框.

![modal-main](/assets/api/modal-alert.jpg)

### SideMenu

菜单栏：可设置主菜单和二级菜单.

![modal-main](/assets/api/menu.jpg)

### Subs `{Object}`

Subs包含着一些小组件，这些子组件和Modal配合使用可以通过配置来进行组件验证。

* alert：提示，主要应用于请求接口返回状态的实时显示, [查看 demo][1]。

* alertWithClick：提示中带有可点击的文本，与alert相似，差别在于显示的文本可以点击进行跳转, [查看 demo][2]。

* autoComplete：带自动补全输入框，主要用于文本输入框内容的补全或提示, [查看 demo][3]。
* checkbox：复选框，主要是进行多选, [查看 demo][4]。
* checkboxTable：多个区域的表格形式复选框, [查看 demo][5]。

* datePicker：时间选择器，主要应用于进行时间点选择和时间段选择, [查看 demo][6]。

* iconLabel：带有icon图标的文本, [查看 demo][7]。

* input：输入框, [查看 demo][8]。

* inputNumber：数字输入框，可以设置数值范围，步长等，只能用于输入数字, [查看 demo][9]。

* inputKeypairs：分别输入key和value，即可生成键值对, [查看 demo][10]。

* multistageTabs: 多级联动tabs, [查看 demo][11]。

* radio：单选框, [查看 demo][12]。

* select：选择器，选择除了常规功能外，还有一种multiple模式, [查看 demo][13]。

* slider：滑动条, [查看 demo][14]。

* steps：步骤条，主要应用于顺序操作步骤的提示, [查看 demo][15]。

* switch：开关，主要应用两种状态的改变, [查看 demo][16]。

* text：文本，只是用与文本的展示，不同的类型会有不同的背景展示，方便文本类型识别, [查看 demo][17]。

* treeSelect：树形选择器，在select中，一个选项中还有其他多个选项, [查看 demo][18]。


##### ModalV2 demo

上述子组件的设计是为了方便modalV2, modalPlus等使用。

```javascript
// config.js

import __ from 'client/locale/dashboard.lang.json';
export default {
   title: ['create'],
    fields: [{
      type: 'input',
      field: 'name',
      placeholder: 'pls_enter_name',
      decorator: {
        id: 'name',
        rules: [{
          required: true,
          message: 'pls_enter_name'
        }]
      }
    }, {
      type: 'input',
      field: 'email',
      placeholder: 'pls_enter_email',
      decorator: {
        id: 'email',
        rules: [{
          required: true,
          type: 'email',
          message: 'email_format_error'
        }]
      }
    }, {
      type: 'select',
      field: 'sex',
      placeholder: 'pls_select_sex',
      decorator: {
        id: 'sex',
        rules: [{
          required: true,
          message: 'pls_select_sex'
        }]
      },
      data: [{
        name: __.male,
        id: 'male'
      }, {
        name: __.female,
        id: 'female'
      }]
    }, {
      type: 'checkbox',
      field: 'expand',
      decorator: {
        id: 'expand'
      },
      linkList: [{
        id: 'id',
        hide: value => !(value.length > 0)
      }],
      data: [{
        label: 'show_advanced_options',
        value: 'show_advanced_options'
      }]
    }, {
      type: 'input',
      field: 'id',
      decorator: {
        id: 'id',
        rules: [{
          required: true,
          pattern: /^[a-zA-Z0-9_~]{20}$/,
          message: 'id_format_error'
        }]
      },
      extra: __.id_extra,
      hide: true
    }],
    btn: {
      value: 'create',
      type: 'primary'
    }
}



// index.js

import { ModalV2 } from 'ufec';
import { fm } from 'client/libs/fake';
import __ from 'client/locale/dashboard.lang.json';
import config from './config';
import request from '../../request';

function pop(callback) {
  const props = {
    __,
    config,
    onConfirm(values, cb, closeImmediately) {
      const data = {
        name: values.name,
        email: values.email,
        sex: values.sex
      };
      // 判断高级选项是否打开
      if (!values.expand || values.expand.length < 1) {
        data.id = fm.id({ length: 20 })[0];
      } else {
        data.id = values.id;
      }
      request.createUser(data).then((res) => {
        // 创建成功后刷新列表
        callback();
        // 关闭pop
        cb(true);
      }).catch((err) => {
        // 报错，不关闭pop，显示报错信息
        cb(false, __.create_user_error);
      });
    },
    onAction(field, value, form, updateFields) {
    }
  };
  ModalV2(props);
}
export default pop;


```

![modal_demo](/assets/api/modalV2_demo.png)


##### 自己使用subs demo

使用注意事项：在使用该组件，必须使用Form来包裹，并且form以属性的方式传给子组件，上述表单组件已经过FormItem进行了包裹。

```javascript
import {Form} from 'antd';
import {Subs} from 'ufec';
const Input = Subs.Input;
class Model extends React.Components {
  onChange = (value) => {
    console.log(value);
  }
  render () {
    return <div>
      <Form>
        <Input form={this.props.form} placeholder="please input xxx" onChange={this.onChange} />
      </Form>
    </div>
  }
}

export default Model;
```

### history

React-router的状态管理.

```javascript
import { history } from 'ufec';

history.push(xxx);
history.getPathList();
...
```

## Style

组件的样式需要另外引入.

```less
@import '~ufec/style/index.less';
```

## CLI

Ufec 有一些命令行的操作.

输入 `node_modules/.bin/ufec -h` 来查看ufec支持的所有操作。

### 初始化svg图片。

因为ufec本身有一些icon要支持，所以在初始化一个项目的时候，可以使用这个命令把ufec所需要的svg复制到目标文件夹中，比如：

```bash
ufec --svg client/iconfonts/svgs/ufec
```

上边这个命令会把ufec需要的svg图片都复制到`client/iconfonts/svgs/ufec`这个文件夹中。

### 打包i18n json文件

这个命令会把`client`文件夹下所有目录的`lang.json`打包合成一个`${app}.lang.json`，然后放到`client/locale`文件夹中。

```bash
ufec --transpile
```

当然，这个脚本也接受npm参数，如果你把这个脚本放在`package.json`的`scripts`中，比如：

```json
{
  "scripts": {
    "transpile": "ufec --transpile"
  }
}
```

那么，你可以通过传入npm参数来指定生成什么语言的文件。比如：

```bash
npm run transpile --lang=en
```

这样会生成英文lang文件，不传的默认生成中文lang文件。


[1]: /subs_alert
[2]: /subs_alert_with_click
[3]: /subs_auto_complete
[4]: /subs_checkbox
[5]: /subs_checkboxTable
[6]: /subs_data_picker
[7]: /subs_icon_label
[8]: /subs_input
[9]: /subs_input_number
[10]: /subs_inputKeyPairs
[11]: /subs_multiStageTabs
[12]: /subs_radio
[13]: /subs_select
[14]: /subs_slider
[15]: /subs_steps
[16]: /subs_switch
[17]: /subs_text
[18]: /subs_tree_select

