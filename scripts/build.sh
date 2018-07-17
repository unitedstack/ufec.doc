#!/bin/bash

cd client

npm run rmdist

export language=zh-CN
npm run transpile --lang=zh-CN && webpack

export language=en
npm run transpile --lang=en && webpack
