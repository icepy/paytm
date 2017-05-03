# Dingtalk Paytm Homepage

This project is powered by [weex](https://weex.apache.org), which is an awesome solution for building [Dingtalk microapp](https://open-doc.dingtalk.com/docs/doc.htm?treeId=171&articleId=104910&docType=1) with extremely high performanece. 

Usually you can build your microapp in Dingtalk as a traditional webapp, however sometimes your users are unsatisfied with the poor performance of your webapp. Why? Nowadays the gap between web and native, in the aspect of performance and user experience, is still wide. You might feel frustrated to optimize the performance of your webapp, but finally bring just a little improvement. That is why we need weex.

With the help of weex, you can focus on your business, no more need to worry about the performance, just enjoy the fun of coding and building your microapp. The microapps based on weex will look so elegant and run so smoothly that your users cannot tell the difference between a weex microapp developed by javascript and a native user interface developed by java or objective-c.

The code you write for a weex microapp is javascript and css, you will feel so familiar if you are a web developer. Under the hood, weex render engine parse your code and render a completely native user interface, rather than a web user interface. 

You can refer to the doc of [weex](https://weex.apache.org/cn/) and [vue](https://cn.vuejs.org/) for more information.

Enjoy the fun of building dingtalk microapp with weex ☺

### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev:web

# build for web release with minification
npm run build:web

# build for weex dev reload at localhost:8089
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
