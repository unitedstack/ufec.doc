[![Build Status](https://travis-ci.org/unitedstack/ufec.doc.svg?branch=master)](https://travis-ci.org/unitedstack/ufec.doc)

# ufec.doc
Ufec dashboard website.

## 在线demo

[ufec.tfcloud.com](https://ufec.tfloud.com)

## 使用方法

* 克隆这个仓库到本地. (可能需要先Fork到自己的github下)
* 进入项目根目录，然后`npm install`
* `npm run dev`
* 等待编译完成，打开`localhost:8888`即可

## 命令行

#### 开发模式

`npm run dev`

#### 线上模式

`npm run build`

这个命令会生成中文和英文两套文件，用于i18n.

#### pm2

`npm start`

会监听`80`端口。

`npm run start:local`

会监听`3000`端口。

#### 代码lint

`npm run lint`

这个命令会在commit之前自动执行

#### 编译i18n语言文件

`npm run transpile`

可以通过npm_config指定编译中文还是英文:

`npm run transpile --lang=en`
