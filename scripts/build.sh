#!/bin/bash

cd client

npm run rmdist

rm -rf public/zh-CN/*
rm -rf public/en/*

export language=zh-CN
npm run transpile --lang=zh-CN && webpack

export language=en
npm run transpile --lang=en && webpack
