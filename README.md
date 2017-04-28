# Paytm Weex and Web

this project is developed using weex,its mobile develop framework,so look weex guide [weex](https://weex.apache.org/cn/) and vue guide [vue](https://cn.vuejs.org/)。

### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev:web

# build for web release with minification
npm run build:web

# start serve 8089
python -m SimpleHTTPServer 8089

# build for weex dev
npm run dev:weex

# build for weex release
npm run build:weex

# build for weex release and web release
npm run build
```

see package.json ! configuration

### How ?

if is Weex page ，it is diff from web ,u just configuration `dd_wx_tpl` GET param in Web URL：

```bash

http://localhost?dd_wx_tpl=http://localhost/weex-bundle.js

```

if Web page , direct access to the Web URL:

```bash

http://localhost

```
