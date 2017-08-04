// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/shihuanshao/Desktop/code/paytm/src/pages/home/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1c054d8f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue__);

__WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue___default.a.el = '#app';
new Vue(__WEBPACK_IMPORTED_MODULE_0__pages_home_index_vue___default.a);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function android_exec(n,e){var t=e.body,i=e.onSuccess,r=e.onFail,o=e.context;n&&"function"==typeof n?n(t,function(n){if(void 0!==n&&n.__status__){var e=n.__status__,t=n.__message__;"1"===e?i&&i.call(o,t):"2"===e&&r&&r.call(o,t)}else r&&r.call("-1","")}):r&&r.call("-1","")}function ios_exec(n,e){var t=e.body,i=e.onSuccess,r=e.onFail,o=e.context;n&&"function"==typeof n?n(t,function(n){void 0!==n?"0"===n.errorCode?i&&i.call(o,n.result):r&&r.call(o,n.result):r&&r.call("-1","")}):r&&r.call("-1","")}function exec(n){var e=nativeExec||function(){};"iOS"===platform$2?ios_exec(e,n):"android"===platform$2&&android_exec(e,n)}function build(n){var e=n.factory;return n.__nuva_exports__={},delete n.factory,e(__nuva_require__,n.__nuva_exports__,n),n.__nuva_exports__}function __nuva_require__(n){if(!__nuva_modules__[n])throw"__nuva_module__ "+n+" not found";if(n in inProgressModules){throw"Cycle in require graph: "+(requireStack.slice(inProgressModules[n]).join("->")+"->"+n)}if(__nuva_modules__[n].factory)try{return inProgressModules[n]=requireStack.length,requireStack.push(n),build(__nuva_modules__[n])}finally{delete inProgressModules[n],requireStack.pop()}return __nuva_modules__[n].__nuva_exports__}function __nuva_define__(n,e){if(__nuva_modules__[n])throw"module "+n+" already defined";__nuva_modules__[n]={id:n,factory:e}}function toArray(n,e){for(var t=e||0,i=n.length-t,r=new Array(i);i--;)r[i]=n[i+t];return r}function parseModules(n){for(var e in n){var t=n[e];!function(n,e){__nuva_define__(n,function(t,i,r){var o={};o._name=n;for(var u in e){var a=e[u];o[a]=function(e){return function(t){t||(t={});var i=t.onSuccess,r=t.onFail;return delete t.onSuccess,delete t.onFail,delete t.onCancel,exec({body:{plugin:n,action:e,args:t},onSuccess:i,onFail:r})}}(a)}r.__nuva_exports__=o})}(e,t)}}function rtFunc(n){return function(e){exec({body:{plugin:"runtime",action:n,args:{}},onSuccess:function(n){"function"==typeof e&&e(n)},onFail:function(){},context:null})}}function initDingtalkRequire(n){rtFunc("getModules")(n)}function permissionJsApis(n,e,t){if(!e)return void n(null);nuva.ready(function(){var i=nuva.require(runtimePermission),r=e||{},o=t||null;r.onSuccess=function(e){n(null,e)},r.onFail=function(e){"function"==typeof o?o(e):n(e,null)},i.requestJsApis(r)})}function parseJsApis(n){var e={};for(var t in n)for(var i=t.split("."),r=null,o=0,u=i.length;;)if(r){if(u-1===o){r[i[o]]=nuva.require(t);break}r[i[o]]?o++:(r[i[o]]={},r=r[i[o]],o++)}else{if(1===u){e[i[o]]=nuva.require(t);break}if(e[i[o]]){r=e[i[o]],o++;continue}e[i[o]]={},r=e[i[o]],o++}return e}function initNativeEvent(n){n.on=function(n,e,t){document.addEventListener(n,e,t)},n.off=function(n,e,t){document.removeEventListener(n,e,t)}}function initApis(n){n.apis=n}function initWebDingtalkSDK(){var n=function(){return function(){return window||this}()}();if(!n.dd)throw console.error("Not Found Dingtalk.js"),new Error;return initNativeEvent(n.dd),initApis(n.dd),n.dd}function performQueue(){dingtalkQueue&&dingtalkQueue.length>0&&(dingtalkQueue.forEach(function(n){n()}),dingtalkQueue.length=0)}var platform$2=weex.config.env.platform,nativeExec=null;"Web"!==platform$2&&(nativeExec=weex.requireModule("nuvajs-exec").exec);var __nuva_modules__={},requireStack=[],inProgressModules={},cat={},EventEmitter={on:function(n,e){var t=cat[n];t?t.push(e):cat[n]=[],t||cat[n].push(e)},off:function(n,e){var t=cat[n];if(!t)return!1;if(!n&&!e)return cat={},!0;if(n&&!e)return cat[n]=null,!0;for(var i=void 0,r=t.length;r--;)if((i=t[r])===e||i.fun===e){t.splice(r,1);break}return!0},once:function(n,e){function t(){EventEmitter.off(n,t),e.apply(this,arguments)}t.fun=e,EventEmitter.on(n,t)},emit:function(n){if("string"==typeof n){var e=cat[n],t=toArray(arguments,1);if(e)for(var i=0,r=e.length;i<r;i++){var o=e[i];o.apply(this,t)}}}},platform$1=weex.config.env.platform,globalEvent={};"Web"!==platform$1&&(globalEvent=weex.requireModule("globalEvent"));var nuva={getModules:null,isReady:!1,define:__nuva_define__,require:function(n){return n?__nuva_require__(n):exec},runtime:{info:rtFunc("info"),_interceptBackButton:rtFunc("interceptBackButton"),_interceptNavTitle:rtFunc("interceptNavTitle"),_recoverNavTitle:rtFunc("recoverNavTitle"),_getModules:rtFunc("getModules")},init:function(){initDingtalkRequire(function(n){n&&(parseModules(n),nuva.isReady=!0,nuva.getModules=n,EventEmitter.emit("__nuva_ready__"))})},ready:function(n){nuva.isReady?"function"==typeof n&&n():"function"==typeof n&&EventEmitter.once("__nuva_ready__",function(){n()})},on:function(n,e){globalEvent.addEventListener(n,function(n){var t={preventDefault:function(){console.warn("当前环境不支持 preventDefault")},detail:n};e.call(this,t)})},off:globalEvent.removeEventListener,EventEmitter:EventEmitter},runtimePermission="runtime.permission",logger={warn:function(n,e){if(console.warn("[DINGTALK JS SDK Warning]:",n),e)throw e;var t=new Error("WARNING STACK TRACE");console.warn(t.stack)},info:function(n){console.info("[DINGTALK JS SDK INFO]:",n)},error:function(n){console.error("[DINGTALK JS SDK ERROR]:",n)}},dingtalkJsApisConfig=null,dingtalkQueue=null,dingtalkErrorCb=null,dingtalkInit=!0,platform=weex.config.env.platform,dingtalkSDK={},dingtalk={isSync:!1,apis:{},config:function(n){function e(e){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){if(!n)return void logger.warn("config is undefined,you must configure Dingtalk parameters");dingtalkJsApisConfig=n}),init:function(){dingtalkQueue=[],nuva.init(),nuva.ready(function(){dingtalk.isSync=!0,dingtalk.apis=parseJsApis(nuva.getModules?nuva.getModules:{}),performQueue()})},ready:function(n){if(!n||"function"!=typeof n)return void logger.warn("callback is undefined");if(dingtalk.isSync)permissionJsApis(n,dingtalkJsApisConfig,dingtalkErrorCb);else{dingtalkQueue&&dingtalkQueue.push(function(n){return function(){permissionJsApis(n,dingtalkJsApisConfig,dingtalkErrorCb)}}(n))}},error:function(n){"function"==typeof n&&(dingtalkErrorCb=n)},on:nuva.on,off:nuva.off};if(dingtalkInit)switch(dingtalkInit=!1,platform){case"Web":dingtalkSDK=initWebDingtalkSDK();break;default:dingtalkSDK=dingtalk,dingtalk.init()}var dingtalkSDK$1=dingtalkSDK;module.exports=dingtalkSDK$1;
//# sourceMappingURL=weex-dingtalk-min.js.map


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_dingtalk__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var modal = weex.requireModule('modal');
var gotoUrl = ['https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm#custom?corpid=ding40c711eecf67ce54&showmenu=true&dd_progress=false&dd_share=false&TemplateManager=activate&processCode=PROC-94LKOG4W-8I5NRVL1NP3WI1AXBPO32-QDWDLW5J-5', 'https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm#custom?corpid=ding40c711eecf67ce54&showmenu=true&dd_progress=false&dd_share=false&TemplateManager=activate&processCode=PROC-FF6YHERSO2-AOTCDAPYTWZ0ARH4MOJQ1-LAE4VERI-F3'];

var apps = [{
  name: 'mail',
  text: 'Ding Mail',
  appid: '-5',
  icon: 'lALOD5pFIMzIzMg'
}, {
  name: 'drive',
  text: 'Ding Drive',
  appid: '-3',
  icon: 'lALODCPXR8zIzMg'
}, {
  name: 'videoconf',
  text: 'Video Conference',
  appid: '1288',
  icon: 'lALOHTFw58zIzMg'
}];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = apps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var app = _step.value;

    var url = 'dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid=ding40c711eecf67ce54&appid=' + app.appid;
    gotoUrl.push(url);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function toast(msg) {
  modal.toast({
    message: msg,
    duration: 2
  });
}

function openUrl(linkUrl) {
  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    var dd = __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis;
    dd.biz.util.openLink({
      url: linkUrl
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  data: function data() {
    return {
      "linkUrl": "https://paytm.com",
      "imgUrl": "https://gw.alicdn.com/tfs/TB1Qf_eQVXXXXazXXXXXXXXXXXX-1124-453.png"
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
      var dd = __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis;
      // 设置导航
      dd.biz.navigation.setTitle({
        title: 'Paytm'
      });
    });
  },
  methods: {
    onLinkImageUrl: function onLinkImageUrl() {
      var linkUrl = this.linkUrl;
      openUrl(linkUrl);
    },
    onAppItemUrl: function onAppItemUrl(cur) {
      var linkUrl = gotoUrl[cur] || '';
      openUrl(linkUrl);
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#eeeeee",
    "width": 750
  },
  "banner": {
    "width": 750,
    "marginBottom": 17
  },
  "banner-image": {
    "width": 750,
    "height": 300
  },
  "apps-title-container": {
    "width": 750,
    "height": 45,
    "backgroundColor": "#ffffff",
    "borderTopStyle": "solid",
    "borderTopWidth": 1,
    "borderTopColor": "#eeeeee",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "borderBottomColor": "#eeeeee"
  },
  "apps-title": {
    "fontSize": 18,
    "paddingLeft": 10,
    "lineHeight": 45
  },
  "apps-container": {
    "width": 750,
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "app-item": {
    "width": 187.5,
    "borderRightStyle": "solid",
    "borderRightColor": "#eeeeee",
    "borderRightWidth": 1,
    "position": "relative",
    "borderBottomColor": "#eeeeee",
    "borderBottomWidth": 1,
    "borderBottomStyle": "solid"
  },
  "item-image-container": {
    "position": "relative",
    "marginLeft": 56.25,
    "marginRight": 56.25,
    "marginBottom": 10,
    "marginTop": 30,
    "width": 75,
    "height": 75,
    "overflow": "hidden",
    "backgroundColor": "#f8f8f8"
  },
  "item-image-radius": {
    "width": 75,
    "height": 75,
    "borderRadius": 15
  },
  "item-image": {
    "width": 75,
    "height": 75,
    "borderRadius": 15
  },
  "item-text": {
    "textAlign": "center",
    "color": "#323334",
    "fontSize": 24,
    "marginBottom": 32
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["banner"]
  }, [_c('image', {
    staticClass: ["banner-image"],
    attrs: {
      "src": _vm.imgUrl
    },
    on: {
      "click": _vm.onLinkImageUrl
    }
  })]), _c('div', {
    staticClass: ["apps"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["apps-container"]
  }, [_c('div', {
    staticClass: ["app-item"],
    on: {
      "click": function($event) {
        _vm.onAppItemUrl(0)
      }
    }
  }, [_vm._m(1), _c('text', {
    staticClass: ["item-text"]
  }, [_vm._v("Unpaid Leave")])]), _c('div', {
    staticClass: ["app-item"],
    on: {
      "click": function($event) {
        _vm.onAppItemUrl(1)
      }
    }
  }, [_vm._m(2), _c('text', {
    staticClass: ["item-text"]
  }, [_vm._v("Casual Leave")])]), _c('div', {
    staticClass: ["app-item"],
    on: {
      "click": function($event) {
        _vm.onAppItemUrl(2)
      }
    }
  }, [_vm._m(3), _c('text', {
    staticClass: ["item-text"]
  }, [_vm._v("Ding Mail")])]), _c('div', {
    staticClass: ["app-item"],
    on: {
      "click": function($event) {
        _vm.onAppItemUrl(3)
      }
    }
  }, [_vm._m(4), _c('text', {
    staticClass: ["item-text"]
  }, [_vm._v("Ding Drive")])]), _c('div', {
    staticClass: ["app-item"],
    on: {
      "click": function($event) {
        _vm.onAppItemUrl(4)
      }
    }
  }, [_vm._m(5), _c('text', {
    staticClass: ["item-text"]
  }, [_vm._v("Video Conference")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["apps-title-container"]
  }, [_c('text', {
    staticClass: ["apps-title"]
  }, [_vm._v("Paytm Apps")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item-image-container"]
  }, [_c('div', {
    staticClass: ["item-image-radius"]
  }, [_c('image', {
    staticClass: ["item-image"],
    attrs: {
      "src": "//gw.alicdn.com/tps/TB1Ez8XOpXXXXa5XpXXXXXXXXXX-102-102.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item-image-container"]
  }, [_c('div', {
    staticClass: ["item-image-radius"]
  }, [_c('image', {
    staticClass: ["item-image"],
    attrs: {
      "src": "//gw.alicdn.com/tps/TB1zXtqOpXXXXa6XXXXXXXXXXXX-102-102.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item-image-container"]
  }, [_c('div', {
    staticClass: ["item-image-radius"]
  }, [_c('image', {
    staticClass: ["item-image"],
    attrs: {
      "src": "//static.dingtalk.com/media/lALOD5pFIMzIzMg_200_200.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item-image-container"]
  }, [_c('div', {
    staticClass: ["item-image-radius"]
  }, [_c('image', {
    staticClass: ["item-image"],
    attrs: {
      "src": "//static.dingtalk.com/media/lALODCPXR8zIzMg_200_200.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item-image-container"]
  }, [_c('div', {
    staticClass: ["item-image-radius"]
  }, [_c('image', {
    staticClass: ["item-image"],
    attrs: {
      "src": "//static.dingtalk.com/media/lALOHTFw58zIzMg_200_200.png"
    }
  })])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);