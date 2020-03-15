/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"detail": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/page/detail/detail.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/layout/common/banner/banner.js":
/*!********************************************!*\
  !*** ./src/layout/common/banner/banner.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 生成banner展示的标题和描述\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (title, discription) {\r\n    $('#banner_id').text(title);\r\n    $('#banner_dis').text(discription);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L2NvbW1vbi9iYW5uZXIvYmFubmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jb21tb24vYmFubmVyL2Jhbm5lci5qcz9hY2Q1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIOeUn+aIkGJhbm5lcuWxleekuueahOagh+mimOWSjOaPj+i/sFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGl0bGUsIGRpc2NyaXB0aW9uKSB7XHJcbiAgICAkKCcjYmFubmVyX2lkJykudGV4dCh0aXRsZSk7XHJcbiAgICAkKCcjYmFubmVyX2RpcycpLnRleHQoZGlzY3JpcHRpb24pO1xyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/common/banner/banner.js\n");

/***/ }),

/***/ "./src/page/detail/detail.css":
/*!************************************!*\
  !*** ./src/page/detail/detail.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS9kZXRhaWwvZGV0YWlsLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlL2RldGFpbC9kZXRhaWwuY3NzPzljMDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/page/detail/detail.css\n");

/***/ }),

/***/ "./src/page/detail/detail.js":
/*!***********************************!*\
  !*** ./src/page/detail/detail.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _detail_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.css */ \"./src/page/detail/detail.css\");\n/* harmony import */ var _detail_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_detail_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_common_banner_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/common/banner/banner */ \"./src/layout/common/banner/banner.js\");\n/* harmony import */ var _3_prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @3/prismjs/themes/prism.css */ \"./node_modules/prismjs/themes/prism.css\");\n/* harmony import */ var _3_prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_3_prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _3_prismjs_themes_prism_okaidia_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @3/prismjs/themes/prism-okaidia.css */ \"./node_modules/prismjs/themes/prism-okaidia.css\");\n/* harmony import */ var _3_prismjs_themes_prism_okaidia_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_3_prismjs_themes_prism_okaidia_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ \"./node_modules/prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _3_typocss_typo_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @3/typocss/typo.css */ \"./node_modules/typocss/typo.css\");\n/* harmony import */ var _3_typocss_typo_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_3_typocss_typo_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _util_blog_menu_js_jquery_autoMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/util/blog-menu/js/jquery.autoMenu.js */ \"./src/util/blog-menu/js/jquery.autoMenu.js\");\n/* harmony import */ var _util_blog_menu_js_jquery_autoMenu_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_util_blog_menu_js_jquery_autoMenu_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _util_blog_menu_css_jquery_autoMenu_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/util/blog-menu/css/jquery.autoMenu.css */ \"./src/util/blog-menu/css/jquery.autoMenu.css\");\n/* harmony import */ var _util_blog_menu_css_jquery_autoMenu_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_util_blog_menu_css_jquery_autoMenu_css__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n// 代码高亮\r\n\r\n\r\n\r\n// 排版\r\n\r\n// 自动目录生成\r\n\r\n\r\n\r\n$(function () {\r\n    sessionStorage.setItem('nth-nav', -1);\r\n    Object(_layout_common_banner_banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('标题', '发布时间');\r\n\r\n    let code = `#include \"flutter/fml/trace_event.h\"\r\n#define TRACE_EVENT0(category_group, name)\r\n#define TRACE_EVENT1(category_group, name, arg1_name, arg1_val)\r\n#define TRACE_EVENT2(category_group, name, arg1_name, arg1_val, arg2_name, arg2_val)\r\n#define FML_TRACE_EVENT(category_group, name, ...)\r\nfml:: tracing:: TraceEvent0(category_group, name);\r\nfml:: tracing:: TraceEventEnd(name);\r\n    //示例：\r\nTRACE_EVENT0(\"flutter\", \"PipelineConsume\");\r\nTRACE_EVENT2(\"flutter\", \"Framework Workload\",\r\n    \"mode\", \"basic\", \"frame\", FrameParity());\r\n`\r\n\r\n    let html = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.highlight(code, prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.javascript, 'c');\r\n\r\n    $('.language-c').html(html);\r\n\r\n\r\n    $('#auto_menu').autoMenu({\r\n        levelOne: 'h2', //一级标题\r\n        levelTwo: 'h3', //二级标题（暂不支持更多级）\r\n    });\r\n})\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS9kZXRhaWwvZGV0YWlsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UvZGV0YWlsL2RldGFpbC5qcz8yMjJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9kZXRhaWwuY3NzJ1xyXG5pbXBvcnQgYmFubmVyIGZyb20gJy4uLy4uL2xheW91dC9jb21tb24vYmFubmVyL2Jhbm5lcidcclxuLy8g5Luj56CB6auY5LquXHJcbmltcG9ydCAnQDMvcHJpc21qcy90aGVtZXMvcHJpc20uY3NzJ1xyXG5pbXBvcnQgJ0AzL3ByaXNtanMvdGhlbWVzL3ByaXNtLW9rYWlkaWEuY3NzJ1xyXG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XHJcbi8vIOaOkueJiFxyXG5pbXBvcnQgJ0AzL3R5cG9jc3MvdHlwby5jc3MnXHJcbi8vIOiHquWKqOebruW9leeUn+aIkFxyXG5pbXBvcnQgJ0AvdXRpbC9ibG9nLW1lbnUvanMvanF1ZXJ5LmF1dG9NZW51LmpzJ1xyXG5pbXBvcnQgJ0AvdXRpbC9ibG9nLW1lbnUvY3NzL2pxdWVyeS5hdXRvTWVudS5jc3MnXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ250aC1uYXYnLCAtMSk7XHJcbiAgICBiYW5uZXIoJ+agh+mimCcsICflj5HluIPml7bpl7QnKTtcclxuXHJcbiAgICBsZXQgY29kZSA9IGAjaW5jbHVkZSBcImZsdXR0ZXIvZm1sL3RyYWNlX2V2ZW50LmhcIlxyXG4jZGVmaW5lIFRSQUNFX0VWRU5UMChjYXRlZ29yeV9ncm91cCwgbmFtZSlcclxuI2RlZmluZSBUUkFDRV9FVkVOVDEoY2F0ZWdvcnlfZ3JvdXAsIG5hbWUsIGFyZzFfbmFtZSwgYXJnMV92YWwpXHJcbiNkZWZpbmUgVFJBQ0VfRVZFTlQyKGNhdGVnb3J5X2dyb3VwLCBuYW1lLCBhcmcxX25hbWUsIGFyZzFfdmFsLCBhcmcyX25hbWUsIGFyZzJfdmFsKVxyXG4jZGVmaW5lIEZNTF9UUkFDRV9FVkVOVChjYXRlZ29yeV9ncm91cCwgbmFtZSwgLi4uKVxyXG5mbWw6OiB0cmFjaW5nOjogVHJhY2VFdmVudDAoY2F0ZWdvcnlfZ3JvdXAsIG5hbWUpO1xyXG5mbWw6OiB0cmFjaW5nOjogVHJhY2VFdmVudEVuZChuYW1lKTtcclxuICAgIC8v56S65L6L77yaXHJcblRSQUNFX0VWRU5UMChcImZsdXR0ZXJcIiwgXCJQaXBlbGluZUNvbnN1bWVcIik7XHJcblRSQUNFX0VWRU5UMihcImZsdXR0ZXJcIiwgXCJGcmFtZXdvcmsgV29ya2xvYWRcIixcclxuICAgIFwibW9kZVwiLCBcImJhc2ljXCIsIFwiZnJhbWVcIiwgRnJhbWVQYXJpdHkoKSk7XHJcbmBcclxuXHJcbiAgICBsZXQgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCwgJ2MnKTtcclxuXHJcbiAgICAkKCcubGFuZ3VhZ2UtYycpLmh0bWwoaHRtbCk7XHJcblxyXG5cclxuICAgICQoJyNhdXRvX21lbnUnKS5hdXRvTWVudSh7XHJcbiAgICAgICAgbGV2ZWxPbmU6ICdoMicsIC8v5LiA57qn5qCH6aKYXHJcbiAgICAgICAgbGV2ZWxUd286ICdoMycsIC8v5LqM57qn5qCH6aKY77yI5pqC5LiN5pSv5oyB5pu05aSa57qn77yJXHJcbiAgICB9KTtcclxufSlcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/page/detail/detail.js\n");

/***/ }),

/***/ "./src/util/blog-menu/css/jquery.autoMenu.css":
/*!****************************************************!*\
  !*** ./src/util/blog-menu/css/jquery.autoMenu.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9ibG9nLW1lbnUvY3NzL2pxdWVyeS5hdXRvTWVudS5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9ibG9nLW1lbnUvY3NzL2pxdWVyeS5hdXRvTWVudS5jc3M/ZWYzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util/blog-menu/css/jquery.autoMenu.css\n");

/***/ }),

/***/ "./src/util/blog-menu/js/jquery.autoMenu.js":
/*!**************************************************!*\
  !*** ./src/util/blog-menu/js/jquery.autoMenu.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* \n * blogMenu plugin 1.0   2017-09-01 by cary\n * 说明：自动根据标签（h3,h4）生成博客目录\n */\n(function ($) {\n\n    var Menu = (function () {\n        /**\n         * 插件实例化部分，初始化时调用的代码可以放这里\n         * @param element 传入jq对象的选择器，如 $(\"#J_plugin\").plugin() ,其中 $(\"#J_plugin\") 即是 element\n         * @param options 插件的一些参数神马的\n         * @constructor\n         */\n        var Plugin = function (element, options) {\n            //将dom jquery对象赋值给插件，方便后续调用\n            this.$element = $(element);\n\n            //将插件的默认参数及用户定义的参数合并到一个新的obj里\n            this.settings = $.extend({}, $.fn.autoMenu.defaults, typeof options === 'object' && options)\n            //如果将参数设置在dom的自定义属性里，也可以这样写\n            //this.settings = $.extend({}, $.fn.plugin.defaults, this.$element.data(), options);\n\n            this.init();\n        }\n\n\n        /**\n         * 将插件所有函数放在prototype的大对象里\n         * 插件的公共方法，相当于接口函数，用于给外部调用\n         * @type {{}}\n         */\n        Plugin.prototype = {\n            init: function () {\n                var opts = this.settings;\n\n                //console.log(opts)\n                this.$element.html(this.createHtml());\n                this.setActive();\n                this.bindEvent();\n\n            },\n            createHtml: function () {\n                var that = this;\n                var opts = that.settings;\n                var width = opts.width;\n                var height = opts.height;\n                var padding = opts.padding;\n                that.$element.width(width);\n                var html = `<ul style=\"height:${height};padding:${padding}\">`;\n                var num = 0;\n                $('*').each(function () {\n                    var _this = $(this);\n                    if (_this.get(0).tagName == opts.levelOne.toUpperCase()) {\n                        _this.attr('id', num);\n                        var nodetext = that.handleTxt(_this.html());\n                        html += '<li name=\"' + num + '\"><a href=\"#' + num + '\">' + nodetext + '</a></li>';\n                        num++;\n                    } else if (_this.get(0).tagName == opts.levelTwo.toUpperCase()) {\n                        _this.attr('id', num);\n                        var nodetext = that.handleTxt(_this.html());\n                        html += '<li class=\"sub\" name=\"' + num + '\"><a href=\"#' + num + '\">' + nodetext + '</a></li>';\n                        num++;\n                    }\n                })\n                html += '</ul><a href=\"javascript:void(0);\" class=\"btn-box\">'\n                    + '<span class=\"icon-minus-sign\"></span>'\n                    + '</a>';\n                return html;\n            },\n            handleTxt: function (txt) {\n                //正则表达式去除HTML的标签\n                return txt.replace(/<\\/?[^>]+>/g, \"\").trim();\n            },\n            setActive: function () {\n                var $el = this.$element,\n                    opts = this.settings,\n                    items = opts.levelOne + ',' + opts.levelTwo,\n                    $items = $(items),\n                    offTop = opts.offTop,\n                    top = $(document).scrollTop(),\n                    currentId;\n                if ($(document).scrollTop() == 0) {\n                    //初始化active\n                    $el.find('li').removeClass('active').eq(0).addClass('active');\n                    return;\n                }\n                $items.each(function () {\n                    var m = $(this),\n                        itemTop = m.offset().top;\n                    if (top > itemTop - offTop) {\n                        currentId = m.attr('id');\n                    } else {\n                        return false;\n                    }\n                })\n                var currentLink = $el.find('.active');\n                if (currentId && currentLink.attr('name') != currentId) {\n                    currentLink.removeClass('active');\n                    $el.find('[name=' + currentId + ']').addClass('active');\n                }\n\n            },\n            bindEvent: function () {\n                var _this = this;\n                $(window).scroll(function () {\n                    _this.setActive()\n                });\n                _this.$element.on('click', '.btn-box', function () {\n                    if ($(this).find('span').hasClass('icon-minus-sign')) {\n                        $(this).find('span').removeClass('icon-minus-sign').addClass('icon-plus-sign');\n                        _this.$element.find('ul').fadeOut();\n                    } else {\n                        $(this).find('span').removeClass('icon-plus-sign').addClass('icon-minus-sign');\n                        _this.$element.find('ul').fadeIn();\n                    }\n\n                })\n            }\n\n        };\n\n        return Plugin;\n\n    })();\n\n\n    /**\n     * 这里是将Plugin对象 转为jq插件的形式进行调用\n     * 定义一个插件 plugin\n     */\n    $.fn.autoMenu = function (options) {\n        return this.each(function () {\n            var $el = $(this),\n                menu = $el.data('autoMenu'),\n                option = $.extend({}, $.fn.autoMenu.defaults, typeof options === 'object' && options);\n            if (!menu) {\n                //将实例化后的插件缓存在dom结构里（内存里）\n                $el.data('autoMenu', new Menu(this, option));\n            }\n\n            /**\n             * 如果插件的参数是一个字符串，则 调用 插件的 字符串方法。\n             * 如 $('#id').plugin('doSomething') 则实际调用的是 $('#id).plugin.doSomething();\n             */\n            if ($.type(options) === 'string') menu[option]();\n        });\n    };\n\n    /**\n     * 插件的默认值\n     */\n    $.fn.autoMenu.defaults = {\n        levelOne: 'h3', //一级标题\n        levelTwo: 'h4',  //二级标题（暂不支持更多级）\n        width: '100%', //容器宽度\n        height: '400px', //容器高度\n        padding: 0, //内部间距\n        offTop: 100, //滚动切换导航时离顶部的距离\n\n    };\n\n    /**\n     * 优雅处： 通过data-xxx 的方式 实例化插件。\n     * 这样的话 在页面上就不需要显示调用了。\n     * 可以查看bootstrap 里面的JS插件写法\n     */\n    $(function () {\n        if ($('[data-autoMenu]').length > 0) {\n            new Menu($('[data-autoMenu]'));\n        }\n\n    });\n\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9ibG9nLW1lbnUvanMvanF1ZXJ5LmF1dG9NZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYmxvZy1tZW51L2pzL2pxdWVyeS5hdXRvTWVudS5qcz85YzAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICogYmxvZ01lbnUgcGx1Z2luIDEuMCAgIDIwMTctMDktMDEgYnkgY2FyeVxuICog6K+05piO77ya6Ieq5Yqo5qC55o2u5qCH562+77yIaDMsaDTvvInnlJ/miJDljZrlrqLnm67lvZVcbiAqL1xuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgTWVudSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmj5Lku7blrp7kvovljJbpg6jliIbvvIzliJ3lp4vljJbml7bosIPnlKjnmoTku6PnoIHlj6/ku6XmlL7ov5nph4xcbiAgICAgICAgICogQHBhcmFtIGVsZW1lbnQg5Lyg5YWlanHlr7nosaHnmoTpgInmi6nlmajvvIzlpoIgJChcIiNKX3BsdWdpblwiKS5wbHVnaW4oKSAs5YW25LitICQoXCIjSl9wbHVnaW5cIikg5Y2z5pivIGVsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIG9wdGlvbnMg5o+S5Lu255qE5LiA5Lqb5Y+C5pWw56We6ams55qEXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIFBsdWdpbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgICAgICAvL+WwhmRvbSBqcXVlcnnlr7nosaHotYvlgLznu5nmj5Lku7bvvIzmlrnkvr/lkI7nu63osIPnlKhcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvL+WwhuaPkuS7tueahOm7mOiupOWPguaVsOWPiueUqOaIt+WumuS5ieeahOWPguaVsOWQiOW5tuWIsOS4gOS4quaWsOeahG9iaumHjFxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCAkLmZuLmF1dG9NZW51LmRlZmF1bHRzLCB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucylcbiAgICAgICAgICAgIC8v5aaC5p6c5bCG5Y+C5pWw6K6+572u5ZyoZG9t55qE6Ieq5a6a5LmJ5bGe5oCn6YeM77yM5Lmf5Y+v5Lul6L+Z5qC35YaZXG4gICAgICAgICAgICAvL3RoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgJC5mbi5wbHVnaW4uZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlsIbmj5Lku7bmiYDmnInlh73mlbDmlL7lnKhwcm90b3R5cGXnmoTlpKflr7nosaHph4xcbiAgICAgICAgICog5o+S5Lu255qE5YWs5YWx5pa55rOV77yM55u45b2T5LqO5o6l5Y+j5Ye95pWw77yM55So5LqO57uZ5aSW6YOo6LCD55SoXG4gICAgICAgICAqIEB0eXBlIHt7fX1cbiAgICAgICAgICovXG4gICAgICAgIFBsdWdpbi5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSB0aGlzLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvcHRzKVxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbCh0aGlzLmNyZWF0ZUh0bWwoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRFdmVudCgpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlSHRtbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IHRoYXQuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gb3B0cy53aWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gb3B0cy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBvcHRzLnBhZGRpbmc7XG4gICAgICAgICAgICAgICAgdGhhdC4kZWxlbWVudC53aWR0aCh3aWR0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGh0bWwgPSBgPHVsIHN0eWxlPVwiaGVpZ2h0OiR7aGVpZ2h0fTtwYWRkaW5nOiR7cGFkZGluZ31cIj5gO1xuICAgICAgICAgICAgICAgIHZhciBudW0gPSAwO1xuICAgICAgICAgICAgICAgICQoJyonKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmdldCgwKS50YWdOYW1lID09IG9wdHMubGV2ZWxPbmUudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXR0cignaWQnLCBudW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGV0ZXh0ID0gdGhhdC5oYW5kbGVUeHQoX3RoaXMuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxsaSBuYW1lPVwiJyArIG51bSArICdcIj48YSBocmVmPVwiIycgKyBudW0gKyAnXCI+JyArIG5vZGV0ZXh0ICsgJzwvYT48L2xpPic7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5nZXQoMCkudGFnTmFtZSA9PSBvcHRzLmxldmVsVHdvLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmF0dHIoJ2lkJywgbnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RldGV4dCA9IHRoYXQuaGFuZGxlVHh0KF90aGlzLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8bGkgY2xhc3M9XCJzdWJcIiBuYW1lPVwiJyArIG51bSArICdcIj48YSBocmVmPVwiIycgKyBudW0gKyAnXCI+JyArIG5vZGV0ZXh0ICsgJzwvYT48L2xpPic7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPC91bD48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwiYnRuLWJveFwiPidcbiAgICAgICAgICAgICAgICAgICAgKyAnPHNwYW4gY2xhc3M9XCJpY29uLW1pbnVzLXNpZ25cIj48L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICArICc8L2E+JztcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVUeHQ6IGZ1bmN0aW9uICh0eHQpIHtcbiAgICAgICAgICAgICAgICAvL+ato+WImeihqOi+vuW8j+WOu+mZpEhUTUznmoTmoIfnrb5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHh0LnJlcGxhY2UoLzxcXC8/W14+XSs+L2csIFwiXCIpLnRyaW0oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGVsID0gdGhpcy4kZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgb3B0cyA9IHRoaXMuc2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gb3B0cy5sZXZlbE9uZSArICcsJyArIG9wdHMubGV2ZWxUd28sXG4gICAgICAgICAgICAgICAgICAgICRpdGVtcyA9ICQoaXRlbXMpLFxuICAgICAgICAgICAgICAgICAgICBvZmZUb3AgPSBvcHRzLm9mZlRvcCxcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJZDtcbiAgICAgICAgICAgICAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL+WIneWni+WMlmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZXEoMCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRpdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRvcCA9IG0ub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9wID4gaXRlbVRvcCAtIG9mZlRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudElkID0gbS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudExpbmsgPSAkZWwuZmluZCgnLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SWQgJiYgY3VycmVudExpbmsuYXR0cignbmFtZScpICE9IGN1cnJlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5maW5kKCdbbmFtZT0nICsgY3VycmVudElkICsgJ10nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEV2ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0QWN0aXZlKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWxlbWVudC5vbignY2xpY2snLCAnLmJ0bi1ib3gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJ3NwYW4nKS5oYXNDbGFzcygnaWNvbi1taW51cy1zaWduJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3BhbicpLnJlbW92ZUNsYXNzKCdpY29uLW1pbnVzLXNpZ24nKS5hZGRDbGFzcygnaWNvbi1wbHVzLXNpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbGVtZW50LmZpbmQoJ3VsJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzcGFuJykucmVtb3ZlQ2xhc3MoJ2ljb24tcGx1cy1zaWduJykuYWRkQ2xhc3MoJ2ljb24tbWludXMtc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsZW1lbnQuZmluZCgndWwnKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBQbHVnaW47XG5cbiAgICB9KSgpO1xuXG5cbiAgICAvKipcbiAgICAgKiDov5nph4zmmK/lsIZQbHVnaW7lr7nosaEg6L2s5Li6anHmj5Lku7bnmoTlvaLlvI/ov5vooYzosIPnlKhcbiAgICAgKiDlrprkuYnkuIDkuKrmj5Lku7YgcGx1Z2luXG4gICAgICovXG4gICAgJC5mbi5hdXRvTWVudSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICRlbCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgbWVudSA9ICRlbC5kYXRhKCdhdXRvTWVudScpLFxuICAgICAgICAgICAgICAgIG9wdGlvbiA9ICQuZXh0ZW5kKHt9LCAkLmZuLmF1dG9NZW51LmRlZmF1bHRzLCB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoIW1lbnUpIHtcbiAgICAgICAgICAgICAgICAvL+WwhuWunuS+i+WMluWQjueahOaPkuS7tue8k+WtmOWcqGRvbee7k+aehOmHjO+8iOWGheWtmOmHjO+8iVxuICAgICAgICAgICAgICAgICRlbC5kYXRhKCdhdXRvTWVudScsIG5ldyBNZW51KHRoaXMsIG9wdGlvbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWmguaenOaPkuS7tueahOWPguaVsOaYr+S4gOS4quWtl+espuS4su+8jOWImSDosIPnlKgg5o+S5Lu255qEIOWtl+espuS4suaWueazleOAglxuICAgICAgICAgICAgICog5aaCICQoJyNpZCcpLnBsdWdpbignZG9Tb21ldGhpbmcnKSDliJnlrp7pmYXosIPnlKjnmoTmmK8gJCgnI2lkKS5wbHVnaW4uZG9Tb21ldGhpbmcoKTtcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKCQudHlwZShvcHRpb25zKSA9PT0gJ3N0cmluZycpIG1lbnVbb3B0aW9uXSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5o+S5Lu255qE6buY6K6k5YC8XG4gICAgICovXG4gICAgJC5mbi5hdXRvTWVudS5kZWZhdWx0cyA9IHtcbiAgICAgICAgbGV2ZWxPbmU6ICdoMycsIC8v5LiA57qn5qCH6aKYXG4gICAgICAgIGxldmVsVHdvOiAnaDQnLCAgLy/kuoznuqfmoIfpopjvvIjmmoLkuI3mlK/mjIHmm7TlpJrnuqfvvIlcbiAgICAgICAgd2lkdGg6ICcxMDAlJywgLy/lrrnlmajlrr3luqZcbiAgICAgICAgaGVpZ2h0OiAnNDAwcHgnLCAvL+WuueWZqOmrmOW6plxuICAgICAgICBwYWRkaW5nOiAwLCAvL+WGhemDqOmXtOi3nVxuICAgICAgICBvZmZUb3A6IDEwMCwgLy/mu5rliqjliIfmjaLlr7zoiKrml7bnprvpobbpg6jnmoTot53nprtcblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDkvJjpm4XlpITvvJog6YCa6L+HZGF0YS14eHgg55qE5pa55byPIOWunuS+i+WMluaPkuS7tuOAglxuICAgICAqIOi/meagt+eahOivnSDlnKjpobXpnaLkuIrlsLHkuI3pnIDopoHmmL7npLrosIPnlKjkuobjgIJcbiAgICAgKiDlj6/ku6Xmn6XnnItib290c3RyYXAg6YeM6Z2i55qESlPmj5Lku7blhpnms5VcbiAgICAgKi9cbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQoJ1tkYXRhLWF1dG9NZW51XScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG5ldyBNZW51KCQoJ1tkYXRhLWF1dG9NZW51XScpKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/blog-menu/js/jquery.autoMenu.js\n");

/***/ })

/******/ });