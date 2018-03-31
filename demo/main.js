/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"main": 0
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
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
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/App.vue":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/App.vue ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

var _path2 = _interopRequireDefault(_path);

var _Menu = __webpack_require__(/*! ./icons/Menu */ "./src/components/icons/Menu.svg");

var _Menu2 = _interopRequireDefault(_Menu);

var _SourcePanel = __webpack_require__(/*! ./source/SourcePanel */ "./src/components/source/SourcePanel.vue");

var _SourcePanel2 = _interopRequireDefault(_SourcePanel);

var _models = __webpack_require__(/*! ../models */ "./src/models/index.js");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//

const SCROLL_SYNC = {
  generated: 'sourceMap',
  sourceMap: 'generated'
};

exports.default = {

  components: { Menu: _Menu2.default, SourcePanel: _SourcePanel2.default },

  data() {
    return {

      model: (0, _models2.default)(),

      hovering: null,

      displayFileList: false,

      enabledPanels: { generated: true, sourceMap: true, original: true }
    };
  },

  computed: {

    panels() {
      const { model } = this;

      return [{
        displayName: 'Generated',
        name: 'generated',
        content: model.generatedView,
        lineNumber: true,
        promoteText: `Drop ${model.generatedFileName || 'generated file'} here`
      }, {
        displayName: 'SourceMap',
        name: 'sourceMap',
        content: model.mappingsView,
        promoteText: `Drop ${model.sourceMapFileName || 'sourcemap file'} here`
      }, {
        displayName: 'Original',
        name: 'original',
        hidden: model.selectedFileName == null,
        content: model.selectedView,
        lineNumber: true,
        promoteText: model.selectedFileName && `Drop ${_path2.default.basename(model.selectedFileName)} here`,
        promoteTips: model.selectedFileName
      }];
    }
  },

  created() {
    this.onHideFileList = this.onHideFileList.bind(this);
  },

  mounted() {
    window.addEventListener('mousedown', this.onHideFileList);
  },

  beforeDestroy() {
    window.removeEventListener('mousedow', this.onHideFileList);
  },

  methods: {

    onUpload(files, type) {
      this.displayFileList = false;
      this.model.handleFiles(files, type);
    },

    onHover(id) {
      this.hovering = id;
    },

    onSelect(mapping, type) {
      if (type === 'original') {
        this.scrollToLine(mapping.generatedLine, 'generated');
        return this.scrollToLine(mapping.generatedLine, 'sourceMap');
      }
      this.model.selectedIndex = mapping.source;
      this.$nextTick(() => {
        this.scrollToLine(mapping.originalLine, 'original');
      });
    },

    onScroll(scrollTop, type) {
      for (const panel of this.$refs[SCROLL_SYNC[type]] || []) {
        panel.scrollTo(scrollTop);
      }
    },

    onToggleFileList() {
      this.displayFileList = !this.displayFileList;
    },

    onHideFileList() {
      this.displayFileList = false;
    },

    onSelectOriginal(index) {
      this.displayFileList = false;
      this.model.selectedIndex = index;
    },

    scrollToLine(line, target) {
      for (const panel of this.$refs[target] || []) {
        panel.scrollToLine(line);
      }
    },

    togglePanel(type) {
      this.enabledPanels[type] = !this.enabledPanels[type];
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/source/SourcePanel.vue":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/source/SourcePanel.vue ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SourceView = __webpack_require__(/*! ./SourceView */ "./src/components/source/SourceView.vue");

var _SourceView2 = _interopRequireDefault(_SourceView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  components: { SourceView: _SourceView2.default },

  props: {

    content: { type: Array },

    hovering: { type: String },

    lineNumber: { type: Boolean, default: false }
  },

  methods: {

    scrollTo(offset) {
      if (this.$refs.sourceView) {
        this.$refs.sourceView.scrollTo(offset);
      }
    },

    scrollToLine(line) {
      if (this.$refs.sourceView) {
        this.$refs.sourceView.scrollToLine(line);
      }
    },

    onHover(event) {
      this.$emit('hover', event);
    },

    onSelect(event) {
      this.$emit('select', event);
    },

    onScroll(event) {
      this.$emit('scroll', event);
    },

    onSelectFiles(event) {
      this.$emit('upload', event.target.files);
    },

    onDropFiles(event) {
      this.$emit('upload', event.dataTransfer.files);
    }
  }
}; //
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/source/SourceView.vue":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/source/SourceView.vue ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compact = __webpack_require__(/*! lodash/compact */ "./node_modules/lodash/compact.js");

var _compact2 = _interopRequireDefault(_compact);

var _debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

const LINE_PADDING = 10;

const DRAGGING_FACTOR = 2;

exports.default = {

  filters: {

    names(names) {
      return (0, _compact2.default)(names).join(',');
    }
  },

  props: {

    content: { type: Array, required: true },
    //

    hovering: { type: String },
    //

    lineNumber: { type: Boolean, default: false }
    //
  },

  data() {
    return {

      maxWidth: 0,
      //

      viewport: [0, 0],
      //

      dragging: null
      //
    };
  },

  computed: {

    displayRange() {
      return [Math.max(0, Math.floor((this.viewport[0] - 2) / this.lineHeight) - LINE_PADDING), Math.floor(this.viewport[1] / this.lineHeight) + 2 * LINE_PADDING];
    },

    displayLines() {
      return this.content.slice(this.displayRange[0], this.displayRange[0] + this.displayRange[1] + 2);
    },

    translateY() {
      return this.displayRange[0] * this.lineHeight;
    }
  },

  created() {
    this.lineHeight = 18;
    this.lastScrollTop = null;

    this.onHover = (0, _debounce2.default)(this.onHover).bind(this);
    this.onDragEnd = (0, _debounce2.default)(this.onDragEnd).bind(this);
    this.onDragMove = (0, _debounce2.default)(this.onDragMove).bind(this);
    this.onViewportUpdate = this.onViewportUpdate.bind(this);
  },

  mounted() {
    this.onViewportUpdate();

    window.addEventListener('mousemove', this.onDragMove);
    window.addEventListener('mouseup', this.onDragEnd);

    this.$refs.resizeDetector.contentWindow.addEventListener('resize', this.onViewportUpdate);
  },

  beforeDestroy() {
    window.removeEventListener('mousemove', this.onDragMove);
    window.removeEventListener('mouseup', this.onDragEnd);

    if (this.$refs.resizeDetector.contentWindow) {
      this.$refs.resizeDetector.contentWindow.removeEventListener('resize', this.onViewportUpdate);
    }
  },

  watch: {

    content() {
      this.$nextTick(() => {
        this.maxWidth = this.$el.scrollWidth;
      });
    }
  },

  methods: {

    scrollTo(offset) {
      if (this.lastScrollTop === offset) {
        return;
      }
      this.lastScrollTop = offset;
      this.$el.scrollTop = offset;
    },

    scrollToLine(line) {
      this.scrollTo(line * this.lineHeight - this.lineHeight / 2 + 2 - this.$el.offsetHeight / 2);
    },

    onViewportUpdate() {
      const { scrollTop, offsetHeight } = this.$el;

      this.viewport = [scrollTop, offsetHeight];
      this.lastScrollTop = scrollTop;

      this.$emit('scroll', scrollTop);
      this.$nextTick(() => {
        this.maxWidth = Math.max(this.maxWidth, this.$el.scrollWidth);
      });
    },

    onSelect(chunk) {
      if (chunk.id) {
        this.$emit('select', chunk.mapping);
      }
    },

    onHover(chunk) {
      if (chunk.id) {
        this.$emit('hover', chunk.id);
      }
    },

    onDragStart(event) {
      if (event.ctrlKey || event.button) {
        return;
      }
      event.preventDefault();
      this.dragging = {
        x: this.$el.scrollLeft + DRAGGING_FACTOR * event.clientX,
        y: this.$el.scrollTop + DRAGGING_FACTOR * event.clientY
      };
    },

    onDragMove(event) {
      if (!this.dragging) {
        return;
      }
      this.$el.scrollLeft = this.dragging.x - DRAGGING_FACTOR * event.clientX;
      this.$el.scrollTop = this.dragging.y - DRAGGING_FACTOR * event.clientY;
    },

    onDragEnd() {
      this.dragging = null;
    }
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/App.vue":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/App.vue ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  font-size: 14px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n*::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n*::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: #bbb;\n}\n*::-webkit-scrollbar-track {\n  background: #eee;\n}\n", "", {"version":3,"sources":["C:/Users/jason/source-map-viewer/src/components/src/components/App.vue"],"names":[],"mappings":";AAuLA;;EAEA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,0CAAA;CACA;AACA;;;EAGA,uBAAA;CACA;AACA;EACA,WAAA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,iBAAA;CACA;AACA;EACA,iBAAA;CACA","file":"App.vue","sourcesContent":["<template>\n  <div :class=\"$.app\">\n    <div :class=\"$.nav\">\n      <Menu v-if=\"model.sources.length\" :class=\"$.navMenu\" @click.native=\"onToggleFileList\" />\n      <ul v-if=\"displayFileList\" :class=\"$.fileList\" @mousedown.stop>\n        <li\n          v-for=\"(src, index) in model.sources\"\n          :key=\"index\"\n          :class=\"[$.fileListItem, {\n            [$.active]: model.selectedIndex === index,\n            [$.missingContent]: !model.sourceContents[index] && !model.overrides[index],\n          }]\"\n          :title=\"src\"\n          @click=\"onSelectOriginal(index)\"\n        >\n          {{src}}\n        </li>\n      </ul>\n      <span :class=\"$.navTitle\" :title=\"model.selectedFileName\">\n        {{model.selectedFileName}}\n      </span>\n      <span :class=\"$.panelButtonGroup\">\n        <a\n          v-for=\"item in panels\"\n          :key=\"item.name\"\n          :class=\"[$.panelButton, { [$.active]: !item.hidden && enabledPanels[item.name] }]\"\n          href=\"javascript:\"\n          @click=\"togglePanel(item.name)\"\n        >\n          {{item.displayName}}\n        </a>\n      </span>\n    </div>\n\n    <div :class=\"$.container\">\n      <SourcePanel\n        v-for=\"item in panels\"\n        v-if=\"!item.hidden && enabledPanels[item.name]\"\n        :key=\"item.name\"\n        :ref=\"item.name\"\n        :content=\"item.content\"\n        :hovering=\"hovering\"\n        :line-number=\"item.lineNumber\"\n        @hover=\"onHover\"\n        @select=\"onSelect($event, item.name)\"\n        @scroll=\"onScroll($event, item.name)\"\n        @upload=\"onUpload($event, item.name)\"\n      >\n        <div :class=\"$.promoteText\">{{item.promoteText}}</div>\n        <div v-if=\"item.promoteTips\" :class=\"$.promoteTips\">{{item.promoteTips}}</div>\n      </SourcePanel>\n    </div>\n  </div>\n</template>\n\n<script>\n  import path from 'path'\n\n  import Menu from './icons/Menu'\n  import SourcePanel from './source/SourcePanel'\n  import createModel from '../models'\n\n  const SCROLL_SYNC = {\n    generated: 'sourceMap',\n    sourceMap: 'generated',\n  }\n\n  export default {\n\n    components: { Menu, SourcePanel },\n\n    data() {\n      return {\n\n        model: createModel(),\n\n        hovering: null,\n\n        displayFileList: false,\n\n        enabledPanels: { generated: true, sourceMap: true, original: true },\n      }\n    },\n\n    computed: {\n\n      panels() {\n        const { model } = this\n\n        return [\n          {\n            displayName: 'Generated',\n            name: 'generated',\n            content: model.generatedView,\n            lineNumber: true,\n            promoteText: `Drop ${model.generatedFileName || 'generated file'} here`,\n          },\n          {\n            displayName: 'SourceMap',\n            name: 'sourceMap',\n            content: model.mappingsView,\n            promoteText: `Drop ${model.sourceMapFileName || 'sourcemap file'} here`,\n          },\n          {\n            displayName: 'Original',\n            name: 'original',\n            hidden: model.selectedFileName == null,\n            content: model.selectedView,\n            lineNumber: true,\n            promoteText: model.selectedFileName && `Drop ${path.basename(model.selectedFileName)} here`,\n            promoteTips: model.selectedFileName,\n          },\n        ]\n      },\n    },\n\n    created() {\n      this.onHideFileList = this.onHideFileList.bind(this)\n    },\n\n    mounted() {\n      window.addEventListener('mousedown', this.onHideFileList)\n    },\n\n    beforeDestroy() {\n      window.removeEventListener('mousedow', this.onHideFileList)\n    },\n\n    methods: {\n\n      onUpload(files, type) {\n        this.displayFileList = false\n        this.model.handleFiles(files, type)\n      },\n\n      onHover(id) {\n        this.hovering = id\n      },\n\n      onSelect(mapping, type) {\n        if (type === 'original') {\n          this.scrollToLine(mapping.generatedLine, 'generated')\n          return this.scrollToLine(mapping.generatedLine, 'sourceMap')\n        }\n        this.model.selectedIndex = mapping.source\n        this.$nextTick(() => {\n          this.scrollToLine(mapping.originalLine, 'original')\n        })\n      },\n\n      onScroll(scrollTop, type) {\n        for (const panel of this.$refs[SCROLL_SYNC[type]] || []) {\n          panel.scrollTo(scrollTop)\n        }\n      },\n\n      onToggleFileList() {\n        this.displayFileList = !this.displayFileList\n      },\n\n      onHideFileList() {\n        this.displayFileList = false\n      },\n\n      onSelectOriginal(index) {\n        this.displayFileList = false\n        this.model.selectedIndex = index\n      },\n\n      scrollToLine(line, target) {\n        for (const panel of this.$refs[target] || []) {\n          panel.scrollToLine(line)\n        }\n      },\n\n      togglePanel(type) {\n        this.enabledPanels[type] = !this.enabledPanels[type]\n      },\n    },\n  }\n</script>\n\n<style>\n  html,\n  body {\n    height: 100%;\n    margin: 0;\n    font-size: 14px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n  *::-webkit-scrollbar {\n    width: 5px;\n    height: 5px;\n  }\n  *::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #bbb;\n  }\n  *::-webkit-scrollbar-track {\n    background: #eee;\n  }\n</style>\n\n<style module=\"$\">\n  .app {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n  .nav {\n    position: relative;\n    display: flex;\n    flex: 0 0 auto;\n    line-height: 24px;\n    padding: 8px;\n    color: #bbb;\n    background: #444;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n  }\n  .navMenu {\n    flex: 0 0 auto;\n    cursor: pointer;\n    fill: #bbb;\n  }\n  .fileList {\n    position: fixed;\n    top: 6px;\n    left: 6px;\n    max-width: 90%;\n    max-width: calc(100% - 12px);\n    max-height: 90%;\n    max-height: calc(100% - 12px);\n    overflow: auto;\n    list-style: none;\n    margin: 0;\n    padding: 4px 0;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n    color: #888;\n    background: #fff;\n    z-index: 100;\n    user-select: none;\n  }\n  .fileListItem {\n    padding: 5px 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    cursor: pointer;\n  }\n  .fileListItem:hover {\n    background: #f6f6f6;\n  }\n  .fileListItem.active {\n    background: #eaeaea;\n    color: #333;\n  }\n  .fileListItem.missingContent {\n    color: #CD5C5C;\n  }\n  .navTitle {\n    margin-left: 8px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  .navTitle::selection {\n    background: #777;\n  }\n  .panelButtonGroup {\n    flex: 0 0 auto;\n    margin-left: auto;\n    user-select: none;\n  }\n  .panelButton {\n    display: inline-block;\n    margin-left: 8px;\n    color: #bbb;\n    text-decoration: none;\n  }\n  .panelButton.active {\n    color: white;\n  }\n  .container {\n    display: flex;\n    flex: 1;\n    width: 100%;\n    height: 100%;\n  }\n  .container > * {\n    flex: 1 auto;\n    width: 1px;\n  }\n  .promoteText {\n    display: inline-block;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.5em;\n    color: #aaa;\n  }\n  .promoteTips {\n    white-space: nowrap;\n    font-size: .9em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #999;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourcePanel.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourcePanel.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.sourceView_qUhuqRDY {\n  height: 100%;\n}\n.promote_31e4Zmjm {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  padding: 5px;\n}\n.promoteFilePicker_332M50E5 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.promoteContent_2JKq2xtb {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n  font-family: sans-serif;\n  border: 2px dashed #ccc;\n}\n", "", {"version":3,"sources":["C:/Users/jason/source-map-viewer/src/components/source/src/components/source/SourcePanel.vue"],"names":[],"mappings":";AAqFA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,iBAAA;EACA,aAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;CACA;AACA;EACA,cAAA;EACA,uBAAA;EACA,wBAAA;EACA,mBAAA;EACA,aAAA;EACA,wBAAA;EACA,wBAAA;CACA","file":"SourcePanel.vue","sourcesContent":["<template>\n  <div\n    :class=\"$.container\"\n    @dragover.prevent\n    @drop.prevent=\"onDropFiles\"\n  >\n    <SourceView\n      v-if=\"content\"\n      ref=\"sourceView\"\n      :class=\"$.sourceView\"\n      :content=\"content\"\n      :hovering=\"hovering\"\n      :line-number=\"lineNumber\"\n      @hover=\"onHover\"\n      @select=\"onSelect\"\n      @scroll=\"onScroll\"\n    />\n    <div v-else :class=\"$.promote\">\n      <input\n        :class=\"$.promoteFilePicker\"\n        type=\"file\"\n        multiple\n        @change=\"onSelectFiles\"\n      />\n      <div :class=\"$.promoteContent\">\n        <slot />\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  import SourceView from './SourceView'\n\n  export default {\n\n    components: { SourceView },\n\n    props: {\n\n      content: { type: Array },\n\n      hovering: { type: String },\n\n      lineNumber: { type: Boolean, default: false },\n    },\n\n    methods: {\n\n      scrollTo(offset) {\n        if (this.$refs.sourceView) {\n          this.$refs.sourceView.scrollTo(offset)\n        }\n      },\n\n      scrollToLine(line) {\n        if (this.$refs.sourceView) {\n          this.$refs.sourceView.scrollToLine(line)\n        }\n      },\n\n      onHover(event) {\n        this.$emit('hover', event)\n      },\n\n      onSelect(event) {\n        this.$emit('select', event)\n      },\n\n      onScroll(event) {\n        this.$emit('scroll', event)\n      },\n\n      onSelectFiles(event) {\n        this.$emit('upload', event.target.files)\n      },\n\n      onDropFiles(event) {\n        this.$emit('upload', event.dataTransfer.files)\n      },\n    },\n  }\n</script>\n\n<style module=\"$\">\n  .sourceView {\n    height: 100%;\n  }\n  .promote {\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n    padding: 5px;\n  }\n  .promoteFilePicker {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .promoteContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 100%;\n    font-family: sans-serif;\n    border: 2px dashed #ccc;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"sourceView": "sourceView_qUhuqRDY",
	"promote": "promote_31e4Zmjm",
	"promoteFilePicker": "promoteFilePicker_332M50E5",
	"promoteContent": "promoteContent_2JKq2xtb"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourceView.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourceView.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.container_XUtmg3tT {\n  position: relative;\n  overflow: scroll;\n  cursor: -webkit-grab;\n}\n.container_XUtmg3tT.dragging_34oUmRgY {\n  cursor: -webkit-grabbing;\n}\n.line_3bOwvp-4 {\n  font-size: 12px;\n  white-space: pre;\n  font-family: monospace;\n  color: #222;\n}\n.lineNumber_3sxf13FG {\n  padding: 0 10px;\n  min-width: 30px;\n  text-align: right;\n  vertical-align: top;\n  color: #999;\n}\n.lineNumber_3sxf13FG:before {\n  content: attr(data-line);\n}\n.chunk_Wp7S22I_.mapped_2nXZcprq {\n  border-left: 2px solid lightgray;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.chunk_Wp7S22I_.hovering_LMO8MzjV {\n  color: white;\n  background: black;\n  border-left-color: black !important;\n}\n.resizeDetector_35P6YwJX {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  pointer-events: none;\n}\n", "", {"version":3,"sources":["C:/Users/jason/source-map-viewer/src/components/source/src/components/source/SourceView.vue"],"names":[],"mappings":";AA4MA;EACA,mBAAA;EACA,iBAAA;EACA,qBAAA;CACA;AACA;EACA,yBAAA;CACA;AACA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,YAAA;CACA;AACA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,YAAA;CACA;AACA;EACA,yBAAA;CACA;AACA;EACA,iCAAA;EACA,mBAAA;EACA,gBAAA;CACA;AACA;EACA,aAAA;EACA,kBAAA;EACA,oCAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;CACA","file":"SourceView.vue","sourcesContent":["<template>\n  <div\n    :class=\"[$.container, { [$.dragging]: dragging }]\"\n    @scroll=\"onViewportUpdate\"\n    @mousedown=\"onDragStart\"\n  >\n    <div :style=\"{ height: `${content.length * lineHeight + 2}px`, minWidth: `${maxWidth}px` }\">\n      <table :style=\"{ transform: `translateY(${translateY}px)` }\">\n        <tbody>\n          <tr\n            v-for=\"(lineData, index) in displayLines\"\n            :key=\"displayRange[0] + index\"\n            :class=\"$.line\"\n          >\n            <td\n              v-if=\"lineNumber\"\n              :class=\"$.lineNumber\"\n              :data-line=\"displayRange[0] + index + 1\"\n            />\n            <td :class=\"$.lineContent\">\n              <span\n                v-for=\"(chunk, index) in lineData\"\n                :key=\"index\"\n                :class=\"[$.chunk, { [$.mapped]: chunk.id, [$.hovering]: chunk.id === hovering }]\"\n                :title=\"chunk.names | names\"\n                @click=\"onSelect(chunk)\"\n                @mouseover=\"onHover(chunk)\"\n              >\n                <template>{{chunk.content}}</template>\n              </span><br/>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <iframe ref=\"resizeDetector\"\n    :class=\"$.resizeDetector\"\n    />\n  </div>\n</template>\n\n<script>\n  import compact from 'lodash/compact'\n  import debounce from 'lodash/debounce'\n\n  const LINE_PADDING = 10\n\n  const DRAGGING_FACTOR = 2\n\n  export default {\n\n    filters: {\n\n      names(names) {\n        return compact(names).join(',')\n      },\n    },\n\n    props: {\n\n      content: { type: Array, required: true },\n      //\n\n      hovering: { type: String },\n      //\n\n      lineNumber: { type: Boolean, default: false },\n      //\n    },\n\n    data() {\n      return {\n\n        maxWidth: 0,\n        //\n\n        viewport: [0, 0],\n        //\n\n        dragging: null,\n        //\n      }\n    },\n\n    computed: {\n\n      displayRange() {\n        return [\n          Math.max(0, Math.floor((this.viewport[0] - 2) / this.lineHeight) - LINE_PADDING),\n          Math.floor(this.viewport[1] / this.lineHeight) + 2 * LINE_PADDING,\n        ]\n      },\n\n      displayLines() {\n        return this.content.slice(this.displayRange[0], this.displayRange[0] + this.displayRange[1] + 2)\n      },\n\n      translateY() {\n        return this.displayRange[0] * this.lineHeight\n      },\n    },\n\n    created() {\n      this.lineHeight = 18\n      this.lastScrollTop = null\n\n      this.onHover = debounce(this.onHover).bind(this)\n      this.onDragEnd = debounce(this.onDragEnd).bind(this)\n      this.onDragMove = debounce(this.onDragMove).bind(this)\n      this.onViewportUpdate = this.onViewportUpdate.bind(this)\n    },\n\n    mounted() {\n      this.onViewportUpdate()\n\n      window.addEventListener('mousemove', this.onDragMove)\n      window.addEventListener('mouseup', this.onDragEnd)\n\n      this.$refs.resizeDetector.contentWindow.addEventListener('resize', this.onViewportUpdate)\n    },\n\n    beforeDestroy() {\n      window.removeEventListener('mousemove', this.onDragMove)\n      window.removeEventListener('mouseup', this.onDragEnd)\n\n      if (this.$refs.resizeDetector.contentWindow) {\n        this.$refs.resizeDetector.contentWindow.removeEventListener('resize', this.onViewportUpdate)\n      }\n    },\n\n    watch: {\n\n      content() {\n        this.$nextTick(() => {\n          this.maxWidth = this.$el.scrollWidth\n        })\n      },\n    },\n\n    methods: {\n\n      scrollTo(offset) {\n        if (this.lastScrollTop === offset) {\n          return\n        }\n        this.lastScrollTop = offset\n        this.$el.scrollTop = offset\n      },\n\n      scrollToLine(line) {\n        this.scrollTo(line * this.lineHeight - this.lineHeight / 2 + 2 - this.$el.offsetHeight / 2)\n      },\n\n      onViewportUpdate() {\n        const { scrollTop, offsetHeight } = this.$el\n\n        this.viewport = [scrollTop, offsetHeight]\n        this.lastScrollTop = scrollTop\n\n        this.$emit('scroll', scrollTop)\n        this.$nextTick(() => {\n          this.maxWidth = Math.max(this.maxWidth, this.$el.scrollWidth)\n        })\n      },\n\n      onSelect(chunk) {\n        if (chunk.id) {\n          this.$emit('select', chunk.mapping)\n        }\n      },\n\n      onHover(chunk) {\n        if (chunk.id) {\n          this.$emit('hover', chunk.id)\n        }\n      },\n\n      onDragStart(event) {\n        if (event.ctrlKey || event.button) {\n          return\n        }\n        event.preventDefault()\n        this.dragging = {\n          x: this.$el.scrollLeft + DRAGGING_FACTOR * event.clientX,\n          y: this.$el.scrollTop + DRAGGING_FACTOR * event.clientY,\n        }\n      },\n\n      onDragMove(event) {\n        if (!this.dragging) {\n          return\n        }\n        this.$el.scrollLeft = this.dragging.x - DRAGGING_FACTOR * event.clientX\n        this.$el.scrollTop = this.dragging.y - DRAGGING_FACTOR * event.clientY\n      },\n\n      onDragEnd() {\n        this.dragging = null\n      },\n    },\n  }\n</script>\n\n<style module=\"$\">\n  .container {\n    position: relative;\n    overflow: scroll;\n    cursor: -webkit-grab;\n  }\n  .container.dragging {\n    cursor: -webkit-grabbing;\n  }\n  .line {\n    font-size: 12px;\n    white-space: pre;\n    font-family: monospace;\n    color: #222;\n  }\n  .lineNumber {\n    padding: 0 10px;\n    min-width: 30px;\n    text-align: right;\n    vertical-align: top;\n    color: #999;\n  }\n  .lineNumber:before {\n    content: attr(data-line);\n  }\n  .chunk.mapped {\n    border-left: 2px solid lightgray;\n    border-radius: 2px;\n    cursor: pointer;\n  }\n  .chunk.hovering {\n    color: white;\n    background: black;\n    border-left-color: black !important;\n  }\n  .resizeDetector {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    visibility: hidden;\n    pointer-events: none;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "container_XUtmg3tT",
	"dragging": "dragging_34oUmRgY",
	"line": "line_3bOwvp-4",
	"lineNumber": "lineNumber_3sxf13FG",
	"chunk": "chunk_Wp7S22I_",
	"mapped": "mapped_2nXZcprq",
	"hovering": "hovering_LMO8MzjV",
	"resizeDetector": "resizeDetector_35P6YwJX"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]_1\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/components/App.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]_1","importLoaders":1,"modules":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/components/App.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.app_3mlJZuUU_1 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.nav_bTwnlzJJ_1 {\n  position: relative;\n  display: flex;\n  flex: 0 0 auto;\n  line-height: 24px;\n  padding: 8px;\n  color: #bbb;\n  background: #444;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n}\n.navMenu_35Fwks0I_1 {\n  flex: 0 0 auto;\n  cursor: pointer;\n  fill: #bbb;\n}\n.fileList_2a_VsYD9_1 {\n  position: fixed;\n  top: 6px;\n  left: 6px;\n  max-width: 90%;\n  max-width: calc(100% - 12px);\n  max-height: 90%;\n  max-height: calc(100% - 12px);\n  overflow: auto;\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n  color: #888;\n  background: #fff;\n  z-index: 100;\n  user-select: none;\n}\n.fileListItem_2Fb4P--p_1 {\n  padding: 5px 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.fileListItem_2Fb4P--p_1:hover {\n  background: #f6f6f6;\n}\n.fileListItem_2Fb4P--p_1.active_2MSkmqRf_1 {\n  background: #eaeaea;\n  color: #333;\n}\n.fileListItem_2Fb4P--p_1.missingContent_3topMqSx_1 {\n  color: #CD5C5C;\n}\n.navTitle_LABcRnAo_1 {\n  margin-left: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.navTitle_LABcRnAo_1::selection {\n  background: #777;\n}\n.panelButtonGroup_2GOAK0wv_1 {\n  flex: 0 0 auto;\n  margin-left: auto;\n  user-select: none;\n}\n.panelButton_vd4i_gq4_1 {\n  display: inline-block;\n  margin-left: 8px;\n  color: #bbb;\n  text-decoration: none;\n}\n.panelButton_vd4i_gq4_1.active_2MSkmqRf_1 {\n  color: white;\n}\n.container_3Im7j72i_1 {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n.container_3Im7j72i_1 > * {\n  flex: 1 auto;\n  width: 1px;\n}\n.promoteText_2xVSONMg_1 {\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 1.5em;\n  color: #aaa;\n}\n.promoteTips_DNb9ft0T_1 {\n  white-space: nowrap;\n  font-size: .9em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #999;\n}\n", "", {"version":3,"sources":["C:/Users/jason/source-map-viewer/src/components/src/components/App.vue"],"names":[],"mappings":";AAiNA;EACA,cAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,wCAAA;CACA;AACA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;EACA,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,UAAA;EACA,eAAA;EACA,mBAAA;EACA,wCAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;CACA;AACA;EACA,kBAAA;EACA,iBAAA;EACA,wBAAA;EACA,oBAAA;EACA,gBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,oBAAA;EACA,YAAA;CACA;AACA;EACA,eAAA;CACA;AACA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,wBAAA;CACA;AACA;EACA,iBAAA;CACA;AACA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;CACA;AACA;EACA,sBAAA;EACA,iBAAA;EACA,YAAA;EACA,sBAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,cAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;CACA;AACA;EACA,aAAA;EACA,WAAA;CACA;AACA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;EACA,wBAAA;EACA,iBAAA;EACA,YAAA;CACA;AACA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,wBAAA;EACA,YAAA;CACA","file":"App.vue","sourcesContent":["<template>\n  <div :class=\"$.app\">\n    <div :class=\"$.nav\">\n      <Menu v-if=\"model.sources.length\" :class=\"$.navMenu\" @click.native=\"onToggleFileList\" />\n      <ul v-if=\"displayFileList\" :class=\"$.fileList\" @mousedown.stop>\n        <li\n          v-for=\"(src, index) in model.sources\"\n          :key=\"index\"\n          :class=\"[$.fileListItem, {\n            [$.active]: model.selectedIndex === index,\n            [$.missingContent]: !model.sourceContents[index] && !model.overrides[index],\n          }]\"\n          :title=\"src\"\n          @click=\"onSelectOriginal(index)\"\n        >\n          {{src}}\n        </li>\n      </ul>\n      <span :class=\"$.navTitle\" :title=\"model.selectedFileName\">\n        {{model.selectedFileName}}\n      </span>\n      <span :class=\"$.panelButtonGroup\">\n        <a\n          v-for=\"item in panels\"\n          :key=\"item.name\"\n          :class=\"[$.panelButton, { [$.active]: !item.hidden && enabledPanels[item.name] }]\"\n          href=\"javascript:\"\n          @click=\"togglePanel(item.name)\"\n        >\n          {{item.displayName}}\n        </a>\n      </span>\n    </div>\n\n    <div :class=\"$.container\">\n      <SourcePanel\n        v-for=\"item in panels\"\n        v-if=\"!item.hidden && enabledPanels[item.name]\"\n        :key=\"item.name\"\n        :ref=\"item.name\"\n        :content=\"item.content\"\n        :hovering=\"hovering\"\n        :line-number=\"item.lineNumber\"\n        @hover=\"onHover\"\n        @select=\"onSelect($event, item.name)\"\n        @scroll=\"onScroll($event, item.name)\"\n        @upload=\"onUpload($event, item.name)\"\n      >\n        <div :class=\"$.promoteText\">{{item.promoteText}}</div>\n        <div v-if=\"item.promoteTips\" :class=\"$.promoteTips\">{{item.promoteTips}}</div>\n      </SourcePanel>\n    </div>\n  </div>\n</template>\n\n<script>\n  import path from 'path'\n\n  import Menu from './icons/Menu'\n  import SourcePanel from './source/SourcePanel'\n  import createModel from '../models'\n\n  const SCROLL_SYNC = {\n    generated: 'sourceMap',\n    sourceMap: 'generated',\n  }\n\n  export default {\n\n    components: { Menu, SourcePanel },\n\n    data() {\n      return {\n\n        model: createModel(),\n\n        hovering: null,\n\n        displayFileList: false,\n\n        enabledPanels: { generated: true, sourceMap: true, original: true },\n      }\n    },\n\n    computed: {\n\n      panels() {\n        const { model } = this\n\n        return [\n          {\n            displayName: 'Generated',\n            name: 'generated',\n            content: model.generatedView,\n            lineNumber: true,\n            promoteText: `Drop ${model.generatedFileName || 'generated file'} here`,\n          },\n          {\n            displayName: 'SourceMap',\n            name: 'sourceMap',\n            content: model.mappingsView,\n            promoteText: `Drop ${model.sourceMapFileName || 'sourcemap file'} here`,\n          },\n          {\n            displayName: 'Original',\n            name: 'original',\n            hidden: model.selectedFileName == null,\n            content: model.selectedView,\n            lineNumber: true,\n            promoteText: model.selectedFileName && `Drop ${path.basename(model.selectedFileName)} here`,\n            promoteTips: model.selectedFileName,\n          },\n        ]\n      },\n    },\n\n    created() {\n      this.onHideFileList = this.onHideFileList.bind(this)\n    },\n\n    mounted() {\n      window.addEventListener('mousedown', this.onHideFileList)\n    },\n\n    beforeDestroy() {\n      window.removeEventListener('mousedow', this.onHideFileList)\n    },\n\n    methods: {\n\n      onUpload(files, type) {\n        this.displayFileList = false\n        this.model.handleFiles(files, type)\n      },\n\n      onHover(id) {\n        this.hovering = id\n      },\n\n      onSelect(mapping, type) {\n        if (type === 'original') {\n          this.scrollToLine(mapping.generatedLine, 'generated')\n          return this.scrollToLine(mapping.generatedLine, 'sourceMap')\n        }\n        this.model.selectedIndex = mapping.source\n        this.$nextTick(() => {\n          this.scrollToLine(mapping.originalLine, 'original')\n        })\n      },\n\n      onScroll(scrollTop, type) {\n        for (const panel of this.$refs[SCROLL_SYNC[type]] || []) {\n          panel.scrollTo(scrollTop)\n        }\n      },\n\n      onToggleFileList() {\n        this.displayFileList = !this.displayFileList\n      },\n\n      onHideFileList() {\n        this.displayFileList = false\n      },\n\n      onSelectOriginal(index) {\n        this.displayFileList = false\n        this.model.selectedIndex = index\n      },\n\n      scrollToLine(line, target) {\n        for (const panel of this.$refs[target] || []) {\n          panel.scrollToLine(line)\n        }\n      },\n\n      togglePanel(type) {\n        this.enabledPanels[type] = !this.enabledPanels[type]\n      },\n    },\n  }\n</script>\n\n<style>\n  html,\n  body {\n    height: 100%;\n    margin: 0;\n    font-size: 14px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n  *::-webkit-scrollbar {\n    width: 5px;\n    height: 5px;\n  }\n  *::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #bbb;\n  }\n  *::-webkit-scrollbar-track {\n    background: #eee;\n  }\n</style>\n\n<style module=\"$\">\n  .app {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n  .nav {\n    position: relative;\n    display: flex;\n    flex: 0 0 auto;\n    line-height: 24px;\n    padding: 8px;\n    color: #bbb;\n    background: #444;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n  }\n  .navMenu {\n    flex: 0 0 auto;\n    cursor: pointer;\n    fill: #bbb;\n  }\n  .fileList {\n    position: fixed;\n    top: 6px;\n    left: 6px;\n    max-width: 90%;\n    max-width: calc(100% - 12px);\n    max-height: 90%;\n    max-height: calc(100% - 12px);\n    overflow: auto;\n    list-style: none;\n    margin: 0;\n    padding: 4px 0;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n    color: #888;\n    background: #fff;\n    z-index: 100;\n    user-select: none;\n  }\n  .fileListItem {\n    padding: 5px 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    cursor: pointer;\n  }\n  .fileListItem:hover {\n    background: #f6f6f6;\n  }\n  .fileListItem.active {\n    background: #eaeaea;\n    color: #333;\n  }\n  .fileListItem.missingContent {\n    color: #CD5C5C;\n  }\n  .navTitle {\n    margin-left: 8px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  .navTitle::selection {\n    background: #777;\n  }\n  .panelButtonGroup {\n    flex: 0 0 auto;\n    margin-left: auto;\n    user-select: none;\n  }\n  .panelButton {\n    display: inline-block;\n    margin-left: 8px;\n    color: #bbb;\n    text-decoration: none;\n  }\n  .panelButton.active {\n    color: white;\n  }\n  .container {\n    display: flex;\n    flex: 1;\n    width: 100%;\n    height: 100%;\n  }\n  .container > * {\n    flex: 1 auto;\n    width: 1px;\n  }\n  .promoteText {\n    display: inline-block;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.5em;\n    color: #aaa;\n  }\n  .promoteTips {\n    white-space: nowrap;\n    font-size: .9em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #999;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"app": "app_3mlJZuUU_1",
	"nav": "nav_bTwnlzJJ_1",
	"navMenu": "navMenu_35Fwks0I_1",
	"fileList": "fileList_2a_VsYD9_1",
	"fileListItem": "fileListItem_2Fb4P--p_1",
	"active": "active_2MSkmqRf_1",
	"missingContent": "missingContent_3topMqSx_1",
	"navTitle": "navTitle_LABcRnAo_1",
	"panelButtonGroup": "panelButtonGroup_2GOAK0wv_1",
	"panelButton": "panelButton_vd4i_gq4_1",
	"container": "container_3Im7j72i_1",
	"promoteText": "promoteText_2xVSONMg_1",
	"promoteTips": "promoteTips_DNb9ft0T_1"
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-38cab9c1\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/App.vue":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-38cab9c1","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/App.vue ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.$.app }, [
    _c(
      "div",
      { class: _vm.$.nav },
      [
        _vm.model.sources.length
          ? _c("Menu", {
              class: _vm.$.navMenu,
              nativeOn: {
                click: function($event) {
                  return _vm.onToggleFileList($event)
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.displayFileList
          ? _c(
              "ul",
              {
                class: _vm.$.fileList,
                on: {
                  mousedown: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              _vm._l(_vm.model.sources, function(src, index) {
                return _c(
                  "li",
                  {
                    key: index,
                    class: [
                      _vm.$.fileListItem,
                      ((_obj = {}),
                      (_obj[_vm.$.active] = _vm.model.selectedIndex === index),
                      (_obj[_vm.$.missingContent] =
                        !_vm.model.sourceContents[index] &&
                        !_vm.model.overrides[index]),
                      _obj)
                    ],
                    attrs: { title: src },
                    on: {
                      click: function($event) {
                        _vm.onSelectOriginal(index)
                      }
                    }
                  },
                  [_vm._v("\n        " + _vm._s(src) + "\n      ")]
                )
                var _obj
              })
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "span",
          {
            class: _vm.$.navTitle,
            attrs: { title: _vm.model.selectedFileName }
          },
          [_vm._v("\n      " + _vm._s(_vm.model.selectedFileName) + "\n    ")]
        ),
        _vm._v(" "),
        _c(
          "span",
          { class: _vm.$.panelButtonGroup },
          _vm._l(_vm.panels, function(item) {
            return _c(
              "a",
              {
                key: item.name,
                class: [
                  _vm.$.panelButton,
                  ((_obj = {}),
                  (_obj[_vm.$.active] =
                    !item.hidden && _vm.enabledPanels[item.name]),
                  _obj)
                ],
                attrs: { href: "javascript:" },
                on: {
                  click: function($event) {
                    _vm.togglePanel(item.name)
                  }
                }
              },
              [_vm._v("\n        " + _vm._s(item.displayName) + "\n      ")]
            )
            var _obj
          })
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { class: _vm.$.container },
      _vm._l(_vm.panels, function(item) {
        return !item.hidden && _vm.enabledPanels[item.name]
          ? _c(
              "SourcePanel",
              {
                key: item.name,
                ref: item.name,
                refInFor: true,
                attrs: {
                  content: item.content,
                  hovering: _vm.hovering,
                  "line-number": item.lineNumber
                },
                on: {
                  hover: _vm.onHover,
                  select: function($event) {
                    _vm.onSelect($event, item.name)
                  },
                  scroll: function($event) {
                    _vm.onScroll($event, item.name)
                  },
                  upload: function($event) {
                    _vm.onUpload($event, item.name)
                  }
                }
              },
              [
                _c("div", { class: _vm.$.promoteText }, [
                  _vm._v(_vm._s(item.promoteText))
                ]),
                _vm._v(" "),
                item.promoteTips
                  ? _c("div", { class: _vm.$.promoteTips }, [
                      _vm._v(_vm._s(item.promoteTips))
                    ])
                  : _vm._e()
              ]
            )
          : _vm._e()
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8f45d790\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/source/SourcePanel.vue":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8f45d790","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/source/SourcePanel.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.$.container,
      on: {
        dragover: function($event) {
          $event.preventDefault()
        },
        drop: function($event) {
          $event.preventDefault()
          return _vm.onDropFiles($event)
        }
      }
    },
    [
      _vm.content
        ? _c("SourceView", {
            ref: "sourceView",
            class: _vm.$.sourceView,
            attrs: {
              content: _vm.content,
              hovering: _vm.hovering,
              "line-number": _vm.lineNumber
            },
            on: {
              hover: _vm.onHover,
              select: _vm.onSelect,
              scroll: _vm.onScroll
            }
          })
        : _c("div", { class: _vm.$.promote }, [
            _c("input", {
              class: _vm.$.promoteFilePicker,
              attrs: { type: "file", multiple: "" },
              on: { change: _vm.onSelectFiles }
            }),
            _vm._v(" "),
            _c("div", { class: _vm.$.promoteContent }, [_vm._t("default")], 2)
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bad114be\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/source/SourceView.vue":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bad114be","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/source/SourceView.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        _vm.$.container,
        ((_obj = {}), (_obj[_vm.$.dragging] = _vm.dragging), _obj)
      ],
      on: { scroll: _vm.onViewportUpdate, mousedown: _vm.onDragStart }
    },
    [
      _c(
        "div",
        {
          style: {
            height: _vm.content.length * _vm.lineHeight + 2 + "px",
            minWidth: _vm.maxWidth + "px"
          }
        },
        [
          _c(
            "table",
            { style: { transform: "translateY(" + _vm.translateY + "px)" } },
            [
              _c(
                "tbody",
                _vm._l(_vm.displayLines, function(lineData, index) {
                  return _c(
                    "tr",
                    { key: _vm.displayRange[0] + index, class: _vm.$.line },
                    [
                      _vm.lineNumber
                        ? _c("td", {
                            class: _vm.$.lineNumber,
                            attrs: {
                              "data-line": _vm.displayRange[0] + index + 1
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "td",
                        { class: _vm.$.lineContent },
                        [
                          _vm._l(lineData, function(chunk, index) {
                            return _c(
                              "span",
                              {
                                key: index,
                                class: [
                                  _vm.$.chunk,
                                  ((_obj = {}),
                                  (_obj[_vm.$.mapped] = chunk.id),
                                  (_obj[_vm.$.hovering] =
                                    chunk.id === _vm.hovering),
                                  _obj)
                                ],
                                attrs: { title: _vm._f("names")(chunk.names) },
                                on: {
                                  click: function($event) {
                                    _vm.onSelect(chunk)
                                  },
                                  mouseover: function($event) {
                                    _vm.onHover(chunk)
                                  }
                                }
                              },
                              [[_vm._v(_vm._s(chunk.content))]],
                              2
                            )
                            var _obj
                          }),
                          _c("br")
                        ],
                        2
                      )
                    ]
                  )
                })
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("iframe", { ref: "resizeDetector", class: _vm.$.resizeDetector })
    ]
  )
  var _obj
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/App.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/App.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/App.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d7de4b1c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourcePanel.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourcePanel.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SourcePanel.vue */ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourcePanel.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6c65c8b8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourceView.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourceView.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SourceView.vue */ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourceView.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1f542100", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]_1\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/components/App.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]_1","importLoaders":1,"modules":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/components/App.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]_1","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./App.vue */ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]_1\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/components/App.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2379ccf3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/App.vue":
/*!********************************!*\
  !*** ./src/components/App.vue ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/App.vue");
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_38cab9c1_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-38cab9c1","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-38cab9c1\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/App.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]_1\",\"importLoaders\":1,\"modules\":true}!../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=1!./App.vue"], function () {
  var oldLocals = cssModules["$"]
  if (!oldLocals) return
  var newLocals = __webpack_require__(/*! !vue-style-loader!css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]_1","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=1!./App.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]_1\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/components/App.vue")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$"] = newLocals
  __webpack_require__(/*! vue-hot-reload-api */ "./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-38cab9c1")
})
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./App.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/App.vue")
  cssModules["$"] = __webpack_require__(/*! !vue-style-loader!css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]_1","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=1!./App.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]_1\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/components/App.vue")
Object.defineProperty(this, "$", { get: function () { return cssModules["$"] }})
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_38cab9c1_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_38cab9c1_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\App.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/icons/Menu.svg":
/*!***************************************!*\
  !*** ./src/components/icons/Menu.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"height":"24","width":"24","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 0h24v24H0z","fill":"none"}}),_c('path',{attrs:{"d":"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}})])};var toString = function () {return "C:\\Users\\jason\\source-map-viewer\\src\\components\\icons\\Menu.svg"};module.exports = { render: render, toString: toString };

/***/ }),

/***/ "./src/components/source/SourcePanel.vue":
/*!***********************************************!*\
  !*** ./src/components/source/SourcePanel.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourcePanel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./SourcePanel.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/source/SourcePanel.vue");
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourcePanel_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourcePanel_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourcePanel_vue__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourcePanel_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f45d790_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SourcePanel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-8f45d790","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./SourcePanel.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8f45d790\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/source/SourcePanel.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourcePanel.vue"], function () {
  var oldLocals = cssModules["$"]
  if (!oldLocals) return
  var newLocals = __webpack_require__(/*! !vue-style-loader!css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourcePanel.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourcePanel.vue")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$"] = newLocals
  __webpack_require__(/*! vue-hot-reload-api */ "./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-8f45d790")
})
function injectStyle (context) {
  if (disposed) return
  cssModules["$"] = __webpack_require__(/*! !vue-style-loader!css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourcePanel.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourcePanel.vue")
Object.defineProperty(this, "$", { get: function () { return cssModules["$"] }})
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourcePanel_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f45d790_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SourcePanel_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f45d790_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SourcePanel_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\source\\SourcePanel.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/source/SourceView.vue":
/*!**********************************************!*\
  !*** ./src/components/source/SourceView.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourceView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./SourceView.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/source/SourceView.vue");
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourceView_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourceView_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourceView_vue__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourceView_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_bad114be_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SourceView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-bad114be","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./SourceView.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-bad114be\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/source/SourceView.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourceView.vue"], function () {
  var oldLocals = cssModules["$"]
  if (!oldLocals) return
  var newLocals = __webpack_require__(/*! !vue-style-loader!css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourceView.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourceView.vue")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$"] = newLocals
  __webpack_require__(/*! vue-hot-reload-api */ "./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-bad114be")
})
function injectStyle (context) {
  if (disposed) return
  cssModules["$"] = __webpack_require__(/*! !vue-style-loader!css-loader?{"sourceMap":true,"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourceView.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[local]_[hash:base64:8]\",\"importLoaders\":1,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/source/SourceView.vue")
Object.defineProperty(this, "$", { get: function () { return cssModules["$"] }})
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SourceView_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_bad114be_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SourceView_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_bad114be_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SourceView_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\source\\SourceView.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(/*! ./components/App */ "./src/components/App.vue");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default(_App2.default).$mount('#app');

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _sortedIndexBy = __webpack_require__(/*! lodash/sortedIndexBy */ "./node_modules/lodash/sortedIndexBy.js");

var _sortedIndexBy2 = _interopRequireDefault(_sortedIndexBy);

var _convertSourceMap = __webpack_require__(/*! convert-source-map */ "./node_modules/convert-source-map/index.js");

var _sourceMapConsumer = __webpack_require__(/*! source-map/lib/source-map-consumer */ "./node_modules/source-map/lib/source-map-consumer.js");

var _readAsText = __webpack_require__(/*! ../utils/readAsText */ "./src/utils/readAsText.js");

var _readAsText2 = _interopRequireDefault(_readAsText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parser = Object.create(_sourceMapConsumer.BasicSourceMapConsumer.prototype);

exports.default = () => new _vue2.default({

  data() {
    return {

      generatedContent: null,
      // content of the generated file

      sourceMapData: null,
      // sourcemap data in JS Object format

      overrides: {},
      // overrides for original file content

      selectedIndex: null
      // currently selected source index
    };
  },

  computed: {

    missingGenerated() {
      return this.generatedContent == null;
    },

    generatedFileName() {
      if (this.sourceMapData) {
        return this.sourceMapData.file;
      }
    },

    generatedInfo() {
      if (this.generatedContent == null) {
        return {};
      }
      const parseResult = (0, _convertSourceMap.fromSource)(this.generatedContent);
      if (parseResult) {
        return { inlineSourceMap: parseResult.sourcemap };
      }
      const match = _convertSourceMap.mapFileCommentRegex.exec(this.generatedContent);
      return { sourceMapFile: match && (match[1] || match[2]) };
    },

    missingSourceMap() {
      return this.sourceMapData == null;
    },

    sourceMapFileName() {
      return this.generatedInfo.sourceMapFile;
    },

    sources() {
      if (!this.sourceMapData) {
        return [];
      }
      return this.sourceMapData.sources;
    },

    sourceContents() {
      if (!this.sourceMapData) {
        return [];
      }
      return this.sourceMapData.sourcesContent || [];
    },

    mappings() {
      if (!this.sourceMapData) {
        return { generated: [], original: [] };
      }
      parser._parseMappings(this.sourceMapData.mappings);
      return {
        generated: parser.__generatedMappings,
        original: parser.__originalMappings
      };
    },

    selectedFileName() {
      return this.sources[this.selectedIndex];
    },

    generatedView() {
      if (!this.generatedContent) {
        return;
      }

      const rawLines = this.generatedContent.split(/\r?\n/g);
      const lineData = rawLines.map(() => []);

      const generatedMappings = this.mappings.generated;

      for (let i = generatedMappings.length - 1; i >= 0; i--) {
        const mapping = generatedMappings[i];
        const lineNumber = mapping.generatedLine - 1;

        if (!lineData[lineNumber]) {
          lineData[lineNumber] = [];
          rawLines[lineNumber] = '';
        }

        const content = rawLines[lineNumber].slice(mapping.generatedColumn);

        lineData[lineNumber].unshift({ content, mapping, id: genId(mapping), title: mapping.name });
        rawLines[lineNumber] = rawLines[lineNumber].slice(0, mapping.generatedColumn);
      }

      for (let i = 0, ii = rawLines.length; i < ii; i++) {
        if (rawLines[i]) {
          lineData[i].unshift({ content: rawLines[i] });
        }
      }

      return lineData;
    },

    mappingsView() {
      if (!this.sourceMapData) {
        return;
      }

      const generatedMappings = this.mappings.generated;
      const lineData = [];

      if (this.generatedContent) {
        lineData.length = this.generatedContent.split(/\r?\n/g).length;
      }

      for (const mapping of generatedMappings) {
        const lineNumber = mapping.generatedLine - 1;

        if (!lineData[lineNumber]) {
          lineData[lineNumber] = [];
        }

        const content = `${mapping.generatedColumn} => ${mapping.originalLine}:${mapping.originalColumn}`;

        lineData[lineNumber].push({ content, mapping, id: genId(mapping), names: [this.sources[mapping.source], mapping.name] });
        lineData[lineNumber].push({ content: ' ' });
      }

      return lineData;
    },

    selectedView() {
      const sourceContent = this.overrides[this.selectedIndex] || this.sourceContents[this.selectedIndex];

      if (!sourceContent) {
        return;
      }

      const rawLines = sourceContent.split(/\r?\n/g);
      const lineData = rawLines.map(() => []);

      const originalMappings = this.mappings.original;

      for (let i = (0, _sortedIndexBy2.default)(originalMappings, this.selectedIndex, 'source') - 1; i >= 0; i--) {
        const mapping = originalMappings[i];

        if (mapping.source !== this.selectedIndex) {
          continue;
        }

        const lineNumber = mapping.originalLine - 1;

        if (!lineData[lineNumber]) {
          lineData[lineNumber] = [];
          rawLines[lineNumber] = '';
        }

        const [lastChunk] = lineData[lineNumber];

        if (lastChunk && lastChunk.mapping && lastChunk.mapping.originalColumn === mapping.originalColumn) {
          lastChunk.names.push(mapping.name);
          continue;
        }

        const content = rawLines[lineNumber].slice(mapping.originalColumn);

        lineData[lineNumber].unshift({ content, mapping, id: genId(mapping), names: [mapping.name] });
        rawLines[lineNumber] = rawLines[lineNumber].slice(0, mapping.originalColumn);
      }

      for (let i = 0, ii = rawLines.length; i < ii; i++) {
        if (rawLines[i]) {
          lineData[i].unshift({ content: rawLines[i] });
        }
      }

      return lineData;
    }
  },

  methods: {

    async handleFiles(files, type) {
      if (!files || !files.length) {
        return;
      }
      if (files.length === 1 || type === 'original') {
        this.handleFile(files[0], type);
      }
      if (files[0].name.endsWith('.map')) {
        await this.handleFile(files[1], 'generated');
        this.handleFile(files[0], 'sourceMap');
      } else {
        await this.handleFile(files[0], 'generated');
        this.handleFile(files[1], 'sourceMap');
      }
    },

    async handleFile(file, type) {
      const content = await (0, _readAsText2.default)(file);
      switch (type) {
        case 'generated':
          {
            this.generatedContent = content;
            if (!this.generatedInfo.inlineSourceMap) {
              break;
            }
            this.sourceMapData = this.generatedInfo.inlineSourceMap;
            this.selectedIndex = 0;
            break;
          }
        case 'sourceMap':
          {
            this.sourceMapData = JSON.parse(content);
            this.selectedIndex = 0;
            break;
          }
        case 'original':
          {
            this.$set(this.overrides, this.selectedIndex, content);
            break;
          }
      }
    }
  }
});

function genId(mapping) {
  if (mapping.source == null) {
    return;
  }
  return `${mapping.source} ${mapping.originalLine} ${mapping.originalColumn}`;
}

/***/ }),

/***/ "./src/utils/readAsText.js":
/*!*********************************!*\
  !*** ./src/utils/readAsText.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readAsText;
function readAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = reject;
    reader.onload = () => resolve(reader.result);

    reader.readAsText(file);
  });
}

/***/ }),

/***/ "fs":
/*!***********************!*\
  !*** external "null" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = null;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3NvdXJjZS9Tb3VyY2VQYW5lbC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3NvdXJjZS9Tb3VyY2VWaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAudnVlPzY5ZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlL1NvdXJjZVBhbmVsLnZ1ZT9iOGQ5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvdXJjZS9Tb3VyY2VWaWV3LnZ1ZT9hZmRjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC52dWU/ZTBiYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAudnVlP2Q1MmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlL1NvdXJjZVBhbmVsLnZ1ZT8xM2QxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvdXJjZS9Tb3VyY2VWaWV3LnZ1ZT8yMmQ5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC52dWU/ODE5NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb3VyY2UvU291cmNlUGFuZWwudnVlPzQ2MzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlL1NvdXJjZVZpZXcudnVlPzcwNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLnZ1ZT8zNjUzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbnMvTWVudS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlL1NvdXJjZVBhbmVsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb3VyY2UvU291cmNlVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3JlYWRBc1RleHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnVsbFwiIl0sIm5hbWVzIjpbIiRtb3VudCIsInBhcnNlciIsIk9iamVjdCIsImNyZWF0ZSIsInByb3RvdHlwZSIsImRhdGEiLCJnZW5lcmF0ZWRDb250ZW50Iiwic291cmNlTWFwRGF0YSIsIm92ZXJyaWRlcyIsInNlbGVjdGVkSW5kZXgiLCJjb21wdXRlZCIsIm1pc3NpbmdHZW5lcmF0ZWQiLCJnZW5lcmF0ZWRGaWxlTmFtZSIsImZpbGUiLCJnZW5lcmF0ZWRJbmZvIiwicGFyc2VSZXN1bHQiLCJpbmxpbmVTb3VyY2VNYXAiLCJzb3VyY2VtYXAiLCJtYXRjaCIsImV4ZWMiLCJzb3VyY2VNYXBGaWxlIiwibWlzc2luZ1NvdXJjZU1hcCIsInNvdXJjZU1hcEZpbGVOYW1lIiwic291cmNlcyIsInNvdXJjZUNvbnRlbnRzIiwic291cmNlc0NvbnRlbnQiLCJtYXBwaW5ncyIsImdlbmVyYXRlZCIsIm9yaWdpbmFsIiwiX3BhcnNlTWFwcGluZ3MiLCJfX2dlbmVyYXRlZE1hcHBpbmdzIiwiX19vcmlnaW5hbE1hcHBpbmdzIiwic2VsZWN0ZWRGaWxlTmFtZSIsImdlbmVyYXRlZFZpZXciLCJyYXdMaW5lcyIsInNwbGl0IiwibGluZURhdGEiLCJtYXAiLCJnZW5lcmF0ZWRNYXBwaW5ncyIsImkiLCJsZW5ndGgiLCJtYXBwaW5nIiwibGluZU51bWJlciIsImdlbmVyYXRlZExpbmUiLCJjb250ZW50Iiwic2xpY2UiLCJnZW5lcmF0ZWRDb2x1bW4iLCJ1bnNoaWZ0IiwiaWQiLCJnZW5JZCIsInRpdGxlIiwibmFtZSIsImlpIiwibWFwcGluZ3NWaWV3Iiwib3JpZ2luYWxMaW5lIiwib3JpZ2luYWxDb2x1bW4iLCJwdXNoIiwibmFtZXMiLCJzb3VyY2UiLCJzZWxlY3RlZFZpZXciLCJzb3VyY2VDb250ZW50Iiwib3JpZ2luYWxNYXBwaW5ncyIsImxhc3RDaHVuayIsIm1ldGhvZHMiLCJoYW5kbGVGaWxlcyIsImZpbGVzIiwidHlwZSIsImhhbmRsZUZpbGUiLCJlbmRzV2l0aCIsIkpTT04iLCJwYXJzZSIsIiRzZXQiLCJyZWFkQXNUZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25lcnJvciIsIm9ubG9hZCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO2FBRUE7YUFHQTtBQUpBOzs7O3NDQVFBOztTQUNBOzs7YUFJQTs7Z0JBRUE7O3VCQUVBOzttRUFFQTtBQVJBO0FBVUE7Ozs7YUFHQTt3QkFFQTs7O3FCQUdBO2NBQ0E7dUJBQ0E7b0JBQ0E7d0VBRUE7QUFOQSxPQURBO3FCQVNBO2NBQ0E7dUJBQ0E7d0VBRUE7QUFMQTtxQkFPQTtjQUNBOzBDQUNBO3VCQUNBO29CQUNBO3NHQUNBOzJCQUdBO0FBVEE7QUFZQTtBQTlCQTs7WUErQkE7bURBQ0E7QUFFQTs7WUFDQTs4Q0FDQTtBQUVBOztrQkFDQTtnREFDQTtBQUVBOzs7OzBCQUdBOzZCQUNBO29DQUNBO0FBRUE7O2dCQUNBO3NCQUNBO0FBRUE7OzRCQUNBOytCQUNBO2lEQUNBO3dEQUNBO0FBQ0E7eUNBQ0E7MkJBQ0E7Z0RBQ0E7QUFDQTtBQUVBOzs4QkFDQTsrREFDQTt1QkFDQTtBQUNBO0FBRUE7O3VCQUNBO21DQUNBO0FBRUE7O3FCQUNBOzZCQUNBO0FBRUE7OzRCQUNBOzZCQUNBO2lDQUNBO0FBRUE7OytCQUNBO29EQUNBOzJCQUNBO0FBQ0E7QUFFQTs7c0JBQ0E7cURBQ0E7QUFFQTtBQWpEQTtBQTdEQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7Ozs7Ozs7O2dCQUlBOzs7O3FCQUlBOztzQkFFQTs7MENBR0E7QUFQQTs7OztxQkFVQTtpQ0FDQTt1Q0FDQTtBQUNBO0FBRUE7O3VCQUNBO2lDQUNBOzJDQUNBO0FBQ0E7QUFFQTs7bUJBQ0E7MEJBQ0E7QUFFQTs7b0JBQ0E7MkJBQ0E7QUFFQTs7b0JBQ0E7MkJBQ0E7QUFFQTs7eUJBQ0E7d0NBQ0E7QUFFQTs7dUJBQ0E7OENBQ0E7QUFFQTtBQWhDQTtBQWJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQSx3QkFFQTs7Ozs7O2lCQUtBO2dEQUNBO0FBR0E7QUFMQTs7OztzQ0FRQTtBQUVBOztzQkFDQTtBQUVBOzswQ0FDQTtBQUdBO0FBVkE7O1NBV0E7OztnQkFHQTtBQUVBOztvQkFDQTtBQUVBOztnQkFDQTtBQUVBO0FBVEE7QUFXQTs7OzttQkFHQTthQUNBLG9FQUNBLG9FQUVBO0FBRUE7O21CQUNBO29HQUNBO0FBRUE7O2lCQUNBO3lDQUNBO0FBR0E7QUFoQkE7O1lBaUJBO3NCQUNBO3lCQUVBOzs4REFDQTtrRUFDQTtvRUFDQTt1REFDQTtBQUVBOztZQUNBO1NBRUE7OzhDQUNBOzRDQUVBOzs0RUFDQTtBQUVBOztrQkFDQTtpREFDQTsrQ0FFQTs7aURBQ0E7aUZBQ0E7QUFDQTtBQUVBOzs7O2NBR0E7MkJBQ0E7aUNBQ0E7QUFDQTtBQUdBO0FBUEE7Ozs7cUJBVUE7eUNBQ0E7QUFDQTtBQUNBOzJCQUNBOzJCQUNBO0FBRUE7O3VCQUNBOytGQUNBO0FBRUE7O3VCQUNBOytDQUVBOztrQ0FDQTsyQkFFQTs7MkJBQ0E7MkJBQ0E7eURBQ0E7QUFDQTtBQUVBOztvQkFDQTtvQkFDQTttQ0FDQTtBQUNBO0FBRUE7O21CQUNBO29CQUNBO2tDQUNBO0FBQ0E7QUFFQTs7dUJBQ0E7eUNBQ0E7QUFDQTtBQUNBO1lBQ0E7O3lEQUVBO3dEQUVBO0FBSEE7QUFLQTs7c0JBQ0E7MEJBQ0E7QUFDQTtBQUNBO3NFQUNBO3FFQUNBO0FBRUE7O2dCQUNBO3NCQUNBO0FBRUE7QUEzREE7QUExRkEsRTs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTs7O0FBR0E7QUFDQSx3Q0FBeUMsaUJBQWlCLGNBQWMsb0JBQW9CLDhDQUE4QyxHQUFHLDBCQUEwQiwyQkFBMkIsR0FBRyx3QkFBd0IsZUFBZSxnQkFBZ0IsR0FBRyw4QkFBOEIsdUJBQXVCLHFCQUFxQixHQUFHLDhCQUE4QixxQkFBcUIsR0FBRyxVQUFVLHlIQUF5SCxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxPQUFPLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLDRaQUE0WiwrSkFBK0osb0dBQW9HLEtBQUssOEdBQThHLHdCQUF3QiwrS0FBK0ssdURBQXVELHlHQUF5RyxrQkFBa0IscWtCQUFxa0Isa0JBQWtCLDBFQUEwRSxrQkFBa0IsK1BBQStQLCtEQUErRCxzQkFBc0IscUJBQXFCLG9CQUFvQixpQkFBaUIsZ0JBQWdCLDJIQUEySCxtREFBbUQsVUFBVSxPQUFPLG9CQUFvQixvQkFBb0IsaUJBQWlCLFFBQVEsd0NBQXdDLG9MQUFvTCw0Q0FBNEMsb0JBQW9CLGNBQWMsb0pBQW9KLDRDQUE0QyxvQkFBb0IsY0FBYyxnUUFBZ1Esc0NBQXNDLHNFQUFzRSxxQkFBcUIsUUFBUSxvQkFBb0IsbUVBQW1FLG9CQUFvQix3RUFBd0UsMEJBQTBCLDBFQUEwRSxtQkFBbUIsaUNBQWlDLDRGQUE0Rix3QkFBd0IscUNBQXFDLG9DQUFvQyxvQ0FBb0Msb0pBQW9KLG1GQUFtRiwwRUFBMEUsVUFBVSxzQ0FBc0Msb0VBQW9FLGdEQUFnRCxTQUFTLCtCQUErQiwrREFBK0QsNkJBQTZCLCtDQUErQyxvQ0FBb0MseUZBQXlGLHVDQUF1Qyx5REFBeUQsK0NBQStDLFNBQVMsOEJBQThCLHVFQUF1RSxRQUFRLE1BQU0seUNBQXlDLG1CQUFtQixnQkFBZ0Isc0JBQXNCLGdEQUFnRCxLQUFLLGdDQUFnQyw2QkFBNkIsS0FBSywwQkFBMEIsaUJBQWlCLGtCQUFrQixLQUFLLGdDQUFnQyx5QkFBeUIsdUJBQXVCLEtBQUssZ0NBQWdDLHVCQUF1QixLQUFLLDRDQUE0QyxvQkFBb0IsNkJBQTZCLG1CQUFtQixrQkFBa0IsS0FBSyxVQUFVLHlCQUF5QixvQkFBb0IscUJBQXFCLHdCQUF3QixtQkFBbUIsa0JBQWtCLHVCQUF1Qiw4Q0FBOEMsS0FBSyxjQUFjLHFCQUFxQixzQkFBc0IsaUJBQWlCLEtBQUssZUFBZSxzQkFBc0IsZUFBZSxnQkFBZ0IscUJBQXFCLG1DQUFtQyxzQkFBc0Isb0NBQW9DLHFCQUFxQix1QkFBdUIsZ0JBQWdCLHFCQUFxQix5QkFBeUIsOENBQThDLGtCQUFrQix1QkFBdUIsbUJBQW1CLHdCQUF3QixLQUFLLG1CQUFtQix3QkFBd0IsdUJBQXVCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLEtBQUsseUJBQXlCLDBCQUEwQixLQUFLLDBCQUEwQiwwQkFBMEIsa0JBQWtCLEtBQUssa0NBQWtDLHFCQUFxQixLQUFLLGVBQWUsdUJBQXVCLHVCQUF1QiwwQkFBMEIsOEJBQThCLEtBQUssMEJBQTBCLHVCQUF1QixLQUFLLHVCQUF1QixxQkFBcUIsd0JBQXdCLHdCQUF3QixLQUFLLGtCQUFrQiw0QkFBNEIsdUJBQXVCLGtCQUFrQiw0QkFBNEIsS0FBSyx5QkFBeUIsbUJBQW1CLEtBQUssZ0JBQWdCLG9CQUFvQixjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxvQkFBb0IsbUJBQW1CLGlCQUFpQixLQUFLLGtCQUFrQiw0QkFBNEIsa0JBQWtCLHVCQUF1Qiw4QkFBOEIsdUJBQXVCLGtCQUFrQixLQUFLLGtCQUFrQiwwQkFBMEIsc0JBQXNCLHVCQUF1Qiw4QkFBOEIsa0JBQWtCLEtBQUssK0JBQStCOztBQUVoa1E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsaURBQWtELGlCQUFpQixHQUFHLHFCQUFxQix1QkFBdUIscUJBQXFCLGlCQUFpQixpQkFBaUIsR0FBRywrQkFBK0IsdUJBQXVCLFdBQVcsYUFBYSxnQkFBZ0IsaUJBQWlCLGVBQWUsb0JBQW9CLEdBQUcsNEJBQTRCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVCQUF1QixpQkFBaUIsNEJBQTRCLDRCQUE0QixHQUFHLFVBQVUsK0lBQStJLE1BQU0sVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxreUJBQWt5QixxQkFBcUIsYUFBYSxpQkFBaUIsb0JBQW9CLGNBQWMsc0JBQXNCLGVBQWUsd0JBQXdCLGdDQUFnQyxRQUFRLG1CQUFtQiw0QkFBNEIsc0NBQXNDLDZEQUE2RCxTQUFTLCtCQUErQixzQ0FBc0MsK0RBQStELFNBQVMsMkJBQTJCLDZDQUE2Qyw0QkFBNEIsOENBQThDLDRCQUE0Qiw4Q0FBOEMsaUNBQWlDLDJEQUEyRCwrQkFBK0IsaUVBQWlFLFFBQVEsTUFBTSxvREFBb0QsbUJBQW1CLEtBQUssY0FBYyx5QkFBeUIsdUJBQXVCLG1CQUFtQixtQkFBbUIsS0FBSyx3QkFBd0IseUJBQXlCLGFBQWEsZUFBZSxrQkFBa0IsbUJBQW1CLGlCQUFpQixzQkFBc0IsS0FBSyxxQkFBcUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIseUJBQXlCLG1CQUFtQiw4QkFBOEIsOEJBQThCLEtBQUssK0JBQStCOztBQUUxbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7QUFHQTtBQUNBLGdEQUFpRCx1QkFBdUIscUJBQXFCLHlCQUF5QixHQUFHLHlDQUF5Qyw2QkFBNkIsR0FBRyxrQkFBa0Isb0JBQW9CLHFCQUFxQiwyQkFBMkIsZ0JBQWdCLEdBQUcsd0JBQXdCLG9CQUFvQixvQkFBb0Isc0JBQXNCLHdCQUF3QixnQkFBZ0IsR0FBRywrQkFBK0IsNkJBQTZCLEdBQUcsbUNBQW1DLHFDQUFxQyx1QkFBdUIsb0JBQW9CLEdBQUcscUNBQXFDLGlCQUFpQixzQkFBc0Isd0NBQXdDLEdBQUcsNEJBQTRCLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQix1QkFBdUIseUJBQXlCLEdBQUcsVUFBVSw4SUFBOEksTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsaUdBQWlHLHlCQUF5QiwrRkFBK0YsWUFBWSxnQ0FBZ0Msa0JBQWtCLFNBQVMsS0FBSyw0QkFBNEIsMEJBQTBCLFdBQVcsTUFBTSx1aEJBQXVoQiw0REFBNEQsNkxBQTZMLGVBQWUsNllBQTZZLGtCQUFrQix3QkFBd0Isa0RBQWtELFFBQVEsaUJBQWlCLG9CQUFvQiw4QkFBOEIsZ0NBQWdDLGVBQWUsa0NBQWtDLGdDQUFnQyxrQkFBa0IsaUJBQWlCLGdCQUFnQiw2SEFBNkgsT0FBTyxvQkFBb0IsMEJBQTBCLGlOQUFpTiwyQkFBMkIsbUhBQW1ILHlCQUF5QixnRUFBZ0UsUUFBUSxvQkFBb0Isd1RBQXdULG9CQUFvQixrUUFBa1EsMEJBQTBCLHFMQUFxTCwrR0FBK0csT0FBTyxpQkFBaUIscUJBQXFCLGdDQUFnQywyREFBMkQsVUFBVSxRQUFRLG1CQUFtQiw0QkFBNEIsOENBQThDLDZCQUE2QixtRkFBbUYsK0JBQStCLDhHQUE4RywrQkFBK0IsaUJBQWlCLDBCQUEwQixtTEFBbUwsb0ZBQW9GLFVBQVUsNEJBQTRCLHlCQUF5QiwwREFBMEQsU0FBUywyQkFBMkIseUJBQXlCLG9EQUFvRCxTQUFTLCtCQUErQiw4Q0FBOEMsNkJBQTZCLDJEQUEyRCxvSkFBb0osU0FBUyw4QkFBOEIsK0JBQStCLDZCQUE2QiwwS0FBMEssd0JBQXdCLHVDQUF1QyxRQUFRLE1BQU0sbURBQW1ELHlCQUF5Qix1QkFBdUIsMkJBQTJCLEtBQUsseUJBQXlCLCtCQUErQixLQUFLLFdBQVcsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsa0JBQWtCLEtBQUssaUJBQWlCLHNCQUFzQixzQkFBc0Isd0JBQXdCLDBCQUEwQixrQkFBa0IsS0FBSyx3QkFBd0IsK0JBQStCLEtBQUssbUJBQW1CLHVDQUF1Qyx5QkFBeUIsc0JBQXNCLEtBQUsscUJBQXFCLG1CQUFtQix3QkFBd0IsMENBQTBDLEtBQUsscUJBQXFCLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQix5QkFBeUIsMkJBQTJCLEtBQUssK0JBQStCOztBQUU3ME87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7QUFHQTtBQUNBLDRDQUE2QyxrQkFBa0IsMkJBQTJCLGlCQUFpQixnQkFBZ0IsR0FBRyxtQkFBbUIsdUJBQXVCLGtCQUFrQixtQkFBbUIsc0JBQXNCLGlCQUFpQixnQkFBZ0IscUJBQXFCLDRDQUE0QyxHQUFHLHVCQUF1QixtQkFBbUIsb0JBQW9CLGVBQWUsR0FBRyx3QkFBd0Isb0JBQW9CLGFBQWEsY0FBYyxtQkFBbUIsaUNBQWlDLG9CQUFvQixrQ0FBa0MsbUJBQW1CLHFCQUFxQixjQUFjLG1CQUFtQix1QkFBdUIsNENBQTRDLGdCQUFnQixxQkFBcUIsaUJBQWlCLHNCQUFzQixHQUFHLDRCQUE0QixzQkFBc0IscUJBQXFCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLEdBQUcsa0NBQWtDLHdCQUF3QixHQUFHLDhDQUE4Qyx3QkFBd0IsZ0JBQWdCLEdBQUcsc0RBQXNELG1CQUFtQixHQUFHLHdCQUF3QixxQkFBcUIscUJBQXFCLHdCQUF3Qiw0QkFBNEIsR0FBRyxtQ0FBbUMscUJBQXFCLEdBQUcsZ0NBQWdDLG1CQUFtQixzQkFBc0Isc0JBQXNCLEdBQUcsMkJBQTJCLDBCQUEwQixxQkFBcUIsZ0JBQWdCLDBCQUEwQixHQUFHLDZDQUE2QyxpQkFBaUIsR0FBRyx5QkFBeUIsa0JBQWtCLFlBQVksZ0JBQWdCLGlCQUFpQixHQUFHLDZCQUE2QixpQkFBaUIsZUFBZSxHQUFHLDJCQUEyQiwwQkFBMEIsZ0JBQWdCLHFCQUFxQiw0QkFBNEIscUJBQXFCLGdCQUFnQixHQUFHLDJCQUEyQix3QkFBd0Isb0JBQW9CLHFCQUFxQiw0QkFBNEIsZ0JBQWdCLEdBQUcsVUFBVSx5SEFBeUgsTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLDRaQUE0WiwrSkFBK0osb0dBQW9HLEtBQUssOEdBQThHLHdCQUF3QiwrS0FBK0ssdURBQXVELHlHQUF5RyxrQkFBa0IscWtCQUFxa0Isa0JBQWtCLDBFQUEwRSxrQkFBa0IsK1BBQStQLCtEQUErRCxzQkFBc0IscUJBQXFCLG9CQUFvQixpQkFBaUIsZ0JBQWdCLDJIQUEySCxtREFBbUQsVUFBVSxPQUFPLG9CQUFvQixvQkFBb0IsaUJBQWlCLFFBQVEsd0NBQXdDLG9MQUFvTCw0Q0FBNEMsb0JBQW9CLGNBQWMsb0pBQW9KLDRDQUE0QyxvQkFBb0IsY0FBYyxnUUFBZ1Esc0NBQXNDLHNFQUFzRSxxQkFBcUIsUUFBUSxvQkFBb0IsbUVBQW1FLG9CQUFvQix3RUFBd0UsMEJBQTBCLDBFQUEwRSxtQkFBbUIsaUNBQWlDLDRGQUE0Rix3QkFBd0IscUNBQXFDLG9DQUFvQyxvQ0FBb0Msb0pBQW9KLG1GQUFtRiwwRUFBMEUsVUFBVSxzQ0FBc0Msb0VBQW9FLGdEQUFnRCxTQUFTLCtCQUErQiwrREFBK0QsNkJBQTZCLCtDQUErQyxvQ0FBb0MseUZBQXlGLHVDQUF1Qyx5REFBeUQsK0NBQStDLFNBQVMsOEJBQThCLHVFQUF1RSxRQUFRLE1BQU0seUNBQXlDLG1CQUFtQixnQkFBZ0Isc0JBQXNCLGdEQUFnRCxLQUFLLGdDQUFnQyw2QkFBNkIsS0FBSywwQkFBMEIsaUJBQWlCLGtCQUFrQixLQUFLLGdDQUFnQyx5QkFBeUIsdUJBQXVCLEtBQUssZ0NBQWdDLHVCQUF1QixLQUFLLDRDQUE0QyxvQkFBb0IsNkJBQTZCLG1CQUFtQixrQkFBa0IsS0FBSyxVQUFVLHlCQUF5QixvQkFBb0IscUJBQXFCLHdCQUF3QixtQkFBbUIsa0JBQWtCLHVCQUF1Qiw4Q0FBOEMsS0FBSyxjQUFjLHFCQUFxQixzQkFBc0IsaUJBQWlCLEtBQUssZUFBZSxzQkFBc0IsZUFBZSxnQkFBZ0IscUJBQXFCLG1DQUFtQyxzQkFBc0Isb0NBQW9DLHFCQUFxQix1QkFBdUIsZ0JBQWdCLHFCQUFxQix5QkFBeUIsOENBQThDLGtCQUFrQix1QkFBdUIsbUJBQW1CLHdCQUF3QixLQUFLLG1CQUFtQix3QkFBd0IsdUJBQXVCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLEtBQUsseUJBQXlCLDBCQUEwQixLQUFLLDBCQUEwQiwwQkFBMEIsa0JBQWtCLEtBQUssa0NBQWtDLHFCQUFxQixLQUFLLGVBQWUsdUJBQXVCLHVCQUF1QiwwQkFBMEIsOEJBQThCLEtBQUssMEJBQTBCLHVCQUF1QixLQUFLLHVCQUF1QixxQkFBcUIsd0JBQXdCLHdCQUF3QixLQUFLLGtCQUFrQiw0QkFBNEIsdUJBQXVCLGtCQUFrQiw0QkFBNEIsS0FBSyx5QkFBeUIsbUJBQW1CLEtBQUssZ0JBQWdCLG9CQUFvQixjQUFjLGtCQUFrQixtQkFBbUIsS0FBSyxvQkFBb0IsbUJBQW1CLGlCQUFpQixLQUFLLGtCQUFrQiw0QkFBNEIsa0JBQWtCLHVCQUF1Qiw4QkFBOEIsdUJBQXVCLGtCQUFrQixLQUFLLGtCQUFrQiwwQkFBMEIsc0JBQXNCLHVCQUF1Qiw4QkFBOEIsa0JBQWtCLEtBQUssK0JBQStCOztBQUVqK1U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBLE9BQU8sbUJBQW1CO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdDQUFnQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlCQUF5QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDUixhOzs7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25ELG1CQUFtQjtBQUNuQixhQUFhO0FBQ2I7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDUixhOzs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLFdBQVc7QUFDWCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsb0RBQW9ELEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFzRDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHNDQUFzQztBQUM5RTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBcUQ7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDUixhOzs7Ozs7Ozs7OztBQ2hHQTs7QUFFQTtBQUNBLDhnQkFBME07QUFDMU07QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxZOzs7Ozs7Ozs7OztBQ1ZBOztBQUVBO0FBQ0Esa3VCQUErUztBQUMvUztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLFk7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQSxndUJBQStTO0FBQy9TO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsWTs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQTtBQUNBLHNzQkFBMlM7QUFDM1M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxZOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFDQTtBQUNBLGlFQUFpRSx5R0FBeUcseURBQXlELHFFQUFxRTtBQUN4UztBQUNBO0FBQ0Esb3ZCQUFpUztBQUNqUztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDRpQkFBZ0w7QUFDaEwsc3ZCQUFtUztBQUNuUyxrQ0FBa0MsbUJBQW1CLDBCQUEwQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29QO0FBQ3BQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFpQkM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUM3REEsMEJBQTBCLGFBQWEsMEJBQTBCLHdCQUF3QixpQkFBaUIsT0FBTyxpRUFBaUUsYUFBYSxPQUFPLG1DQUFtQyxhQUFhLE9BQU8scURBQXFELEtBQUssNEJBQTRCLGdGQUFnRixrQkFBa0Isc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJiO0FBQUE7QUFDQTtBQUNBLGlFQUFpRSx1R0FBdUcsNERBQTRELHFFQUFxRTtBQUN6UztBQUNBO0FBQ0EsNndCQUFrUztBQUNsUztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLCt3QkFBb1M7QUFDcFMsa0NBQWtDLG1CQUFtQiwwQkFBMEI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1UDtBQUN2UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBaUJDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFDQTtBQUNBLGlFQUFpRSx1R0FBdUcsNERBQTRELHFFQUFxRTtBQUN6UztBQUNBO0FBQ0EsMndCQUFrUztBQUNsUztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDZ3QkFBb1M7QUFDcFMsa0NBQWtDLG1CQUFtQiwwQkFBMEI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1UDtBQUN2UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBaUJDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O0FDNURBOzs7O0FBQ0E7Ozs7OztBQUVBLGlDQUFhQSxNQUFiLENBQW9CLE1BQXBCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUMsU0FBU0MsT0FBT0MsTUFBUCxDQUFjLDBDQUF1QkMsU0FBckMsQ0FBZjs7a0JBRWUsTUFBTSxrQkFBUTs7QUFFM0JDLFNBQU87QUFDTCxXQUFPOztBQUVMQyx3QkFBa0IsSUFGYjtBQUdMOztBQUVBQyxxQkFBZSxJQUxWO0FBTUw7O0FBRUFDLGlCQUFXLEVBUk47QUFTTDs7QUFFQUMscUJBQWU7QUFDZjtBQVpLLEtBQVA7QUFjRCxHQWpCMEI7O0FBbUIzQkMsWUFBVTs7QUFFUkMsdUJBQW1CO0FBQ2pCLGFBQU8sS0FBS0wsZ0JBQUwsSUFBeUIsSUFBaEM7QUFDRCxLQUpPOztBQU1STSx3QkFBb0I7QUFDbEIsVUFBSSxLQUFLTCxhQUFULEVBQXdCO0FBQ3RCLGVBQU8sS0FBS0EsYUFBTCxDQUFtQk0sSUFBMUI7QUFDRDtBQUNGLEtBVk87O0FBWVJDLG9CQUFnQjtBQUNkLFVBQUksS0FBS1IsZ0JBQUwsSUFBeUIsSUFBN0IsRUFBbUM7QUFDakMsZUFBTyxFQUFQO0FBQ0Q7QUFDRCxZQUFNUyxjQUFjLGtDQUFXLEtBQUtULGdCQUFoQixDQUFwQjtBQUNBLFVBQUlTLFdBQUosRUFBaUI7QUFDZixlQUFPLEVBQUVDLGlCQUFpQkQsWUFBWUUsU0FBL0IsRUFBUDtBQUNEO0FBQ0QsWUFBTUMsUUFBUSxzQ0FBb0JDLElBQXBCLENBQXlCLEtBQUtiLGdCQUE5QixDQUFkO0FBQ0EsYUFBTyxFQUFFYyxlQUFlRixVQUFVQSxNQUFNLENBQU4sS0FBWUEsTUFBTSxDQUFOLENBQXRCLENBQWpCLEVBQVA7QUFDRCxLQXRCTzs7QUF3QlJHLHVCQUFtQjtBQUNqQixhQUFPLEtBQUtkLGFBQUwsSUFBc0IsSUFBN0I7QUFDRCxLQTFCTzs7QUE0QlJlLHdCQUFvQjtBQUNsQixhQUFPLEtBQUtSLGFBQUwsQ0FBbUJNLGFBQTFCO0FBQ0QsS0E5Qk87O0FBZ0NSRyxjQUFVO0FBQ1IsVUFBSSxDQUFDLEtBQUtoQixhQUFWLEVBQXlCO0FBQ3ZCLGVBQU8sRUFBUDtBQUNEO0FBQ0QsYUFBTyxLQUFLQSxhQUFMLENBQW1CZ0IsT0FBMUI7QUFDRCxLQXJDTzs7QUF1Q1JDLHFCQUFpQjtBQUNmLFVBQUksQ0FBQyxLQUFLakIsYUFBVixFQUF5QjtBQUN2QixlQUFPLEVBQVA7QUFDRDtBQUNELGFBQU8sS0FBS0EsYUFBTCxDQUFtQmtCLGNBQW5CLElBQXFDLEVBQTVDO0FBQ0QsS0E1Q087O0FBOENSQyxlQUFXO0FBQ1QsVUFBSSxDQUFDLEtBQUtuQixhQUFWLEVBQXlCO0FBQ3ZCLGVBQU8sRUFBRW9CLFdBQVcsRUFBYixFQUFpQkMsVUFBVSxFQUEzQixFQUFQO0FBQ0Q7QUFDRDNCLGFBQU80QixjQUFQLENBQXNCLEtBQUt0QixhQUFMLENBQW1CbUIsUUFBekM7QUFDQSxhQUFPO0FBQ0xDLG1CQUFXMUIsT0FBTzZCLG1CQURiO0FBRUxGLGtCQUFVM0IsT0FBTzhCO0FBRlosT0FBUDtBQUlELEtBdkRPOztBQXlEUkMsdUJBQW1CO0FBQ2pCLGFBQU8sS0FBS1QsT0FBTCxDQUFhLEtBQUtkLGFBQWxCLENBQVA7QUFDRCxLQTNETzs7QUE2RFJ3QixvQkFBZ0I7QUFDZCxVQUFJLENBQUMsS0FBSzNCLGdCQUFWLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBRUQsWUFBTTRCLFdBQVcsS0FBSzVCLGdCQUFMLENBQXNCNkIsS0FBdEIsQ0FBNEIsUUFBNUIsQ0FBakI7QUFDQSxZQUFNQyxXQUFXRixTQUFTRyxHQUFULENBQWEsTUFBTSxFQUFuQixDQUFqQjs7QUFFQSxZQUFNQyxvQkFBb0IsS0FBS1osUUFBTCxDQUFjQyxTQUF4Qzs7QUFFQSxXQUFLLElBQUlZLElBQUlELGtCQUFrQkUsTUFBbEIsR0FBMkIsQ0FBeEMsRUFBMkNELEtBQUssQ0FBaEQsRUFBbURBLEdBQW5ELEVBQXdEO0FBQ3RELGNBQU1FLFVBQVVILGtCQUFrQkMsQ0FBbEIsQ0FBaEI7QUFDQSxjQUFNRyxhQUFhRCxRQUFRRSxhQUFSLEdBQXdCLENBQTNDOztBQUVBLFlBQUksQ0FBQ1AsU0FBU00sVUFBVCxDQUFMLEVBQTJCO0FBQ3pCTixtQkFBU00sVUFBVCxJQUF1QixFQUF2QjtBQUNBUixtQkFBU1EsVUFBVCxJQUF1QixFQUF2QjtBQUNEOztBQUVELGNBQU1FLFVBQVVWLFNBQVNRLFVBQVQsRUFBcUJHLEtBQXJCLENBQTJCSixRQUFRSyxlQUFuQyxDQUFoQjs7QUFFQVYsaUJBQVNNLFVBQVQsRUFBcUJLLE9BQXJCLENBQTZCLEVBQUVILE9BQUYsRUFBV0gsT0FBWCxFQUFvQk8sSUFBSUMsTUFBTVIsT0FBTixDQUF4QixFQUF3Q1MsT0FBT1QsUUFBUVUsSUFBdkQsRUFBN0I7QUFDQWpCLGlCQUFTUSxVQUFULElBQXVCUixTQUFTUSxVQUFULEVBQXFCRyxLQUFyQixDQUEyQixDQUEzQixFQUE4QkosUUFBUUssZUFBdEMsQ0FBdkI7QUFDRDs7QUFFRCxXQUFLLElBQUlQLElBQUksQ0FBUixFQUFXYSxLQUFLbEIsU0FBU00sTUFBOUIsRUFBc0NELElBQUlhLEVBQTFDLEVBQThDYixHQUE5QyxFQUFtRDtBQUNqRCxZQUFJTCxTQUFTSyxDQUFULENBQUosRUFBaUI7QUFDZkgsbUJBQVNHLENBQVQsRUFBWVEsT0FBWixDQUFvQixFQUFFSCxTQUFTVixTQUFTSyxDQUFULENBQVgsRUFBcEI7QUFDRDtBQUNGOztBQUVELGFBQU9ILFFBQVA7QUFDRCxLQTdGTzs7QUErRlJpQixtQkFBZTtBQUNiLFVBQUksQ0FBQyxLQUFLOUMsYUFBVixFQUF5QjtBQUN2QjtBQUNEOztBQUVELFlBQU0rQixvQkFBb0IsS0FBS1osUUFBTCxDQUFjQyxTQUF4QztBQUNBLFlBQU1TLFdBQVcsRUFBakI7O0FBRUEsVUFBSSxLQUFLOUIsZ0JBQVQsRUFBMkI7QUFDekI4QixpQkFBU0ksTUFBVCxHQUFrQixLQUFLbEMsZ0JBQUwsQ0FBc0I2QixLQUF0QixDQUE0QixRQUE1QixFQUFzQ0ssTUFBeEQ7QUFDRDs7QUFFRCxXQUFLLE1BQU1DLE9BQVgsSUFBc0JILGlCQUF0QixFQUF5QztBQUN2QyxjQUFNSSxhQUFhRCxRQUFRRSxhQUFSLEdBQXdCLENBQTNDOztBQUVBLFlBQUksQ0FBQ1AsU0FBU00sVUFBVCxDQUFMLEVBQTJCO0FBQ3pCTixtQkFBU00sVUFBVCxJQUF1QixFQUF2QjtBQUNEOztBQUVELGNBQU1FLFVBQVcsR0FBRUgsUUFBUUssZUFBZ0IsT0FBTUwsUUFBUWEsWUFBYSxJQUFHYixRQUFRYyxjQUFlLEVBQWhHOztBQUVBbkIsaUJBQVNNLFVBQVQsRUFBcUJjLElBQXJCLENBQTBCLEVBQUVaLE9BQUYsRUFBV0gsT0FBWCxFQUFvQk8sSUFBSUMsTUFBTVIsT0FBTixDQUF4QixFQUF3Q2dCLE9BQU8sQ0FBQyxLQUFLbEMsT0FBTCxDQUFha0IsUUFBUWlCLE1BQXJCLENBQUQsRUFBK0JqQixRQUFRVSxJQUF2QyxDQUEvQyxFQUExQjtBQUNBZixpQkFBU00sVUFBVCxFQUFxQmMsSUFBckIsQ0FBMEIsRUFBRVosU0FBUyxHQUFYLEVBQTFCO0FBQ0Q7O0FBRUQsYUFBT1IsUUFBUDtBQUNELEtBekhPOztBQTJIUnVCLG1CQUFlO0FBQ2IsWUFBTUMsZ0JBQWdCLEtBQUtwRCxTQUFMLENBQWUsS0FBS0MsYUFBcEIsS0FBc0MsS0FBS2UsY0FBTCxDQUFvQixLQUFLZixhQUF6QixDQUE1RDs7QUFFQSxVQUFJLENBQUNtRCxhQUFMLEVBQW9CO0FBQ2xCO0FBQ0Q7O0FBRUQsWUFBTTFCLFdBQVcwQixjQUFjekIsS0FBZCxDQUFvQixRQUFwQixDQUFqQjtBQUNBLFlBQU1DLFdBQVdGLFNBQVNHLEdBQVQsQ0FBYSxNQUFNLEVBQW5CLENBQWpCOztBQUVBLFlBQU13QixtQkFBbUIsS0FBS25DLFFBQUwsQ0FBY0UsUUFBdkM7O0FBRUEsV0FBSyxJQUFJVyxJQUFJLDZCQUFjc0IsZ0JBQWQsRUFBZ0MsS0FBS3BELGFBQXJDLEVBQW9ELFFBQXBELElBQWdFLENBQTdFLEVBQWdGOEIsS0FBSyxDQUFyRixFQUF3RkEsR0FBeEYsRUFBNkY7QUFDM0YsY0FBTUUsVUFBVW9CLGlCQUFpQnRCLENBQWpCLENBQWhCOztBQUVBLFlBQUlFLFFBQVFpQixNQUFSLEtBQW1CLEtBQUtqRCxhQUE1QixFQUEyQztBQUN6QztBQUNEOztBQUVELGNBQU1pQyxhQUFhRCxRQUFRYSxZQUFSLEdBQXVCLENBQTFDOztBQUVBLFlBQUksQ0FBQ2xCLFNBQVNNLFVBQVQsQ0FBTCxFQUEyQjtBQUN6Qk4sbUJBQVNNLFVBQVQsSUFBdUIsRUFBdkI7QUFDQVIsbUJBQVNRLFVBQVQsSUFBdUIsRUFBdkI7QUFDRDs7QUFFRCxjQUFNLENBQUNvQixTQUFELElBQWMxQixTQUFTTSxVQUFULENBQXBCOztBQUVBLFlBQUlvQixhQUFhQSxVQUFVckIsT0FBdkIsSUFBa0NxQixVQUFVckIsT0FBVixDQUFrQmMsY0FBbEIsS0FBcUNkLFFBQVFjLGNBQW5GLEVBQW1HO0FBQ2pHTyxvQkFBVUwsS0FBVixDQUFnQkQsSUFBaEIsQ0FBcUJmLFFBQVFVLElBQTdCO0FBQ0E7QUFDRDs7QUFFRCxjQUFNUCxVQUFVVixTQUFTUSxVQUFULEVBQXFCRyxLQUFyQixDQUEyQkosUUFBUWMsY0FBbkMsQ0FBaEI7O0FBRUFuQixpQkFBU00sVUFBVCxFQUFxQkssT0FBckIsQ0FBNkIsRUFBRUgsT0FBRixFQUFXSCxPQUFYLEVBQW9CTyxJQUFJQyxNQUFNUixPQUFOLENBQXhCLEVBQXdDZ0IsT0FBTyxDQUFDaEIsUUFBUVUsSUFBVCxDQUEvQyxFQUE3QjtBQUNBakIsaUJBQVNRLFVBQVQsSUFBdUJSLFNBQVNRLFVBQVQsRUFBcUJHLEtBQXJCLENBQTJCLENBQTNCLEVBQThCSixRQUFRYyxjQUF0QyxDQUF2QjtBQUNEOztBQUVELFdBQUssSUFBSWhCLElBQUksQ0FBUixFQUFXYSxLQUFLbEIsU0FBU00sTUFBOUIsRUFBc0NELElBQUlhLEVBQTFDLEVBQThDYixHQUE5QyxFQUFtRDtBQUNqRCxZQUFJTCxTQUFTSyxDQUFULENBQUosRUFBaUI7QUFDZkgsbUJBQVNHLENBQVQsRUFBWVEsT0FBWixDQUFvQixFQUFFSCxTQUFTVixTQUFTSyxDQUFULENBQVgsRUFBcEI7QUFDRDtBQUNGOztBQUVELGFBQU9ILFFBQVA7QUFDRDtBQXpLTyxHQW5CaUI7O0FBK0wzQjJCLFdBQVM7O0FBRVAsVUFBTUMsV0FBTixDQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQzdCLFVBQUksQ0FBQ0QsS0FBRCxJQUFVLENBQUNBLE1BQU16QixNQUFyQixFQUE2QjtBQUMzQjtBQUNEO0FBQ0QsVUFBSXlCLE1BQU16QixNQUFOLEtBQWlCLENBQWpCLElBQXNCMEIsU0FBUyxVQUFuQyxFQUErQztBQUM3QyxhQUFLQyxVQUFMLENBQWdCRixNQUFNLENBQU4sQ0FBaEIsRUFBMEJDLElBQTFCO0FBQ0Q7QUFDRCxVQUFJRCxNQUFNLENBQU4sRUFBU2QsSUFBVCxDQUFjaUIsUUFBZCxDQUF1QixNQUF2QixDQUFKLEVBQW9DO0FBQ2xDLGNBQU0sS0FBS0QsVUFBTCxDQUFnQkYsTUFBTSxDQUFOLENBQWhCLEVBQTBCLFdBQTFCLENBQU47QUFDQSxhQUFLRSxVQUFMLENBQWdCRixNQUFNLENBQU4sQ0FBaEIsRUFBMEIsV0FBMUI7QUFDRCxPQUhELE1BR087QUFDTCxjQUFNLEtBQUtFLFVBQUwsQ0FBZ0JGLE1BQU0sQ0FBTixDQUFoQixFQUEwQixXQUExQixDQUFOO0FBQ0EsYUFBS0UsVUFBTCxDQUFnQkYsTUFBTSxDQUFOLENBQWhCLEVBQTBCLFdBQTFCO0FBQ0Q7QUFDRixLQWhCTTs7QUFrQlAsVUFBTUUsVUFBTixDQUFpQnRELElBQWpCLEVBQXVCcUQsSUFBdkIsRUFBNkI7QUFDM0IsWUFBTXRCLFVBQVUsTUFBTSwwQkFBVy9CLElBQVgsQ0FBdEI7QUFDQSxjQUFRcUQsSUFBUjtBQUNFLGFBQUssV0FBTDtBQUFrQjtBQUNoQixpQkFBSzVELGdCQUFMLEdBQXdCc0MsT0FBeEI7QUFDQSxnQkFBSSxDQUFDLEtBQUs5QixhQUFMLENBQW1CRSxlQUF4QixFQUF5QztBQUN2QztBQUNEO0FBQ0QsaUJBQUtULGFBQUwsR0FBcUIsS0FBS08sYUFBTCxDQUFtQkUsZUFBeEM7QUFDQSxpQkFBS1AsYUFBTCxHQUFxQixDQUFyQjtBQUNBO0FBQ0Q7QUFDRCxhQUFLLFdBQUw7QUFBa0I7QUFDaEIsaUJBQUtGLGFBQUwsR0FBcUI4RCxLQUFLQyxLQUFMLENBQVcxQixPQUFYLENBQXJCO0FBQ0EsaUJBQUtuQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0E7QUFDRDtBQUNELGFBQUssVUFBTDtBQUFpQjtBQUNmLGlCQUFLOEQsSUFBTCxDQUFVLEtBQUsvRCxTQUFmLEVBQTBCLEtBQUtDLGFBQS9CLEVBQThDbUMsT0FBOUM7QUFDQTtBQUNEO0FBbEJIO0FBb0JEO0FBeENNO0FBL0xrQixDQUFSLEM7O0FBMk9yQixTQUFTSyxLQUFULENBQWVSLE9BQWYsRUFBd0I7QUFDdEIsTUFBSUEsUUFBUWlCLE1BQVIsSUFBa0IsSUFBdEIsRUFBNEI7QUFDMUI7QUFDRDtBQUNELFNBQVEsR0FBRWpCLFFBQVFpQixNQUFPLElBQUdqQixRQUFRYSxZQUFhLElBQUdiLFFBQVFjLGNBQWUsRUFBM0U7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztrQkN6UHVCaUIsVTtBQUFULFNBQVNBLFVBQVQsQ0FBb0IzRCxJQUFwQixFQUEwQjtBQUN2QyxTQUFPLElBQUk0RCxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDLFVBQU1DLFNBQVMsSUFBSUMsVUFBSixFQUFmOztBQUVBRCxXQUFPRSxPQUFQLEdBQWlCSCxNQUFqQjtBQUNBQyxXQUFPRyxNQUFQLEdBQWdCLE1BQU1MLFFBQVFFLE9BQU9JLE1BQWYsQ0FBdEI7O0FBRUFKLFdBQU9KLFVBQVAsQ0FBa0IzRCxJQUFsQjtBQUNELEdBUE0sQ0FBUDtBQVFELEM7Ozs7Ozs7Ozs7O0FDVEQsc0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPVwiJC5hcHBcIj5cbiAgICA8ZGl2IDpjbGFzcz1cIiQubmF2XCI+XG4gICAgICA8TWVudSB2LWlmPVwibW9kZWwuc291cmNlcy5sZW5ndGhcIiA6Y2xhc3M9XCIkLm5hdk1lbnVcIiBAY2xpY2submF0aXZlPVwib25Ub2dnbGVGaWxlTGlzdFwiIC8+XG4gICAgICA8dWwgdi1pZj1cImRpc3BsYXlGaWxlTGlzdFwiIDpjbGFzcz1cIiQuZmlsZUxpc3RcIiBAbW91c2Vkb3duLnN0b3A+XG4gICAgICAgIDxsaVxuICAgICAgICAgIHYtZm9yPVwiKHNyYywgaW5kZXgpIGluIG1vZGVsLnNvdXJjZXNcIlxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgOmNsYXNzPVwiWyQuZmlsZUxpc3RJdGVtLCB7XG4gICAgICAgICAgICBbJC5hY3RpdmVdOiBtb2RlbC5zZWxlY3RlZEluZGV4ID09PSBpbmRleCxcbiAgICAgICAgICAgIFskLm1pc3NpbmdDb250ZW50XTogIW1vZGVsLnNvdXJjZUNvbnRlbnRzW2luZGV4XSAmJiAhbW9kZWwub3ZlcnJpZGVzW2luZGV4XSxcbiAgICAgICAgICB9XVwiXG4gICAgICAgICAgOnRpdGxlPVwic3JjXCJcbiAgICAgICAgICBAY2xpY2s9XCJvblNlbGVjdE9yaWdpbmFsKGluZGV4KVwiXG4gICAgICAgID5cbiAgICAgICAgICB7e3NyY319XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHNwYW4gOmNsYXNzPVwiJC5uYXZUaXRsZVwiIDp0aXRsZT1cIm1vZGVsLnNlbGVjdGVkRmlsZU5hbWVcIj5cbiAgICAgICAge3ttb2RlbC5zZWxlY3RlZEZpbGVOYW1lfX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIDpjbGFzcz1cIiQucGFuZWxCdXR0b25Hcm91cFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiBwYW5lbHNcIlxuICAgICAgICAgIDprZXk9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgIDpjbGFzcz1cIlskLnBhbmVsQnV0dG9uLCB7IFskLmFjdGl2ZV06ICFpdGVtLmhpZGRlbiAmJiBlbmFibGVkUGFuZWxzW2l0ZW0ubmFtZV0gfV1cIlxuICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OlwiXG4gICAgICAgICAgQGNsaWNrPVwidG9nZ2xlUGFuZWwoaXRlbS5uYW1lKVwiXG4gICAgICAgID5cbiAgICAgICAgICB7e2l0ZW0uZGlzcGxheU5hbWV9fVxuICAgICAgICA8L2E+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IDpjbGFzcz1cIiQuY29udGFpbmVyXCI+XG4gICAgICA8U291cmNlUGFuZWxcbiAgICAgICAgdi1mb3I9XCJpdGVtIGluIHBhbmVsc1wiXG4gICAgICAgIHYtaWY9XCIhaXRlbS5oaWRkZW4gJiYgZW5hYmxlZFBhbmVsc1tpdGVtLm5hbWVdXCJcbiAgICAgICAgOmtleT1cIml0ZW0ubmFtZVwiXG4gICAgICAgIDpyZWY9XCJpdGVtLm5hbWVcIlxuICAgICAgICA6Y29udGVudD1cIml0ZW0uY29udGVudFwiXG4gICAgICAgIDpob3ZlcmluZz1cImhvdmVyaW5nXCJcbiAgICAgICAgOmxpbmUtbnVtYmVyPVwiaXRlbS5saW5lTnVtYmVyXCJcbiAgICAgICAgQGhvdmVyPVwib25Ib3ZlclwiXG4gICAgICAgIEBzZWxlY3Q9XCJvblNlbGVjdCgkZXZlbnQsIGl0ZW0ubmFtZSlcIlxuICAgICAgICBAc2Nyb2xsPVwib25TY3JvbGwoJGV2ZW50LCBpdGVtLm5hbWUpXCJcbiAgICAgICAgQHVwbG9hZD1cIm9uVXBsb2FkKCRldmVudCwgaXRlbS5uYW1lKVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwiJC5wcm9tb3RlVGV4dFwiPnt7aXRlbS5wcm9tb3RlVGV4dH19PC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cIml0ZW0ucHJvbW90ZVRpcHNcIiA6Y2xhc3M9XCIkLnByb21vdGVUaXBzXCI+e3tpdGVtLnByb21vdGVUaXBzfX08L2Rpdj5cbiAgICAgIDwvU291cmNlUGFuZWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuICBpbXBvcnQgTWVudSBmcm9tICcuL2ljb25zL01lbnUnXG4gIGltcG9ydCBTb3VyY2VQYW5lbCBmcm9tICcuL3NvdXJjZS9Tb3VyY2VQYW5lbCdcbiAgaW1wb3J0IGNyZWF0ZU1vZGVsIGZyb20gJy4uL21vZGVscydcblxuICBjb25zdCBTQ1JPTExfU1lOQyA9IHtcbiAgICBnZW5lcmF0ZWQ6ICdzb3VyY2VNYXAnLFxuICAgIHNvdXJjZU1hcDogJ2dlbmVyYXRlZCcsXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICBjb21wb25lbnRzOiB7IE1lbnUsIFNvdXJjZVBhbmVsIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcblxuICAgICAgICBtb2RlbDogY3JlYXRlTW9kZWwoKSxcblxuICAgICAgICBob3ZlcmluZzogbnVsbCxcblxuICAgICAgICBkaXNwbGF5RmlsZUxpc3Q6IGZhbHNlLFxuXG4gICAgICAgIGVuYWJsZWRQYW5lbHM6IHsgZ2VuZXJhdGVkOiB0cnVlLCBzb3VyY2VNYXA6IHRydWUsIG9yaWdpbmFsOiB0cnVlIH0sXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgIHBhbmVscygpIHtcbiAgICAgICAgY29uc3QgeyBtb2RlbCB9ID0gdGhpc1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdHZW5lcmF0ZWQnLFxuICAgICAgICAgICAgbmFtZTogJ2dlbmVyYXRlZCcsXG4gICAgICAgICAgICBjb250ZW50OiBtb2RlbC5nZW5lcmF0ZWRWaWV3LFxuICAgICAgICAgICAgbGluZU51bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIHByb21vdGVUZXh0OiBgRHJvcCAke21vZGVsLmdlbmVyYXRlZEZpbGVOYW1lIHx8ICdnZW5lcmF0ZWQgZmlsZSd9IGhlcmVgLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdTb3VyY2VNYXAnLFxuICAgICAgICAgICAgbmFtZTogJ3NvdXJjZU1hcCcsXG4gICAgICAgICAgICBjb250ZW50OiBtb2RlbC5tYXBwaW5nc1ZpZXcsXG4gICAgICAgICAgICBwcm9tb3RlVGV4dDogYERyb3AgJHttb2RlbC5zb3VyY2VNYXBGaWxlTmFtZSB8fCAnc291cmNlbWFwIGZpbGUnfSBoZXJlYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnT3JpZ2luYWwnLFxuICAgICAgICAgICAgbmFtZTogJ29yaWdpbmFsJyxcbiAgICAgICAgICAgIGhpZGRlbjogbW9kZWwuc2VsZWN0ZWRGaWxlTmFtZSA9PSBudWxsLFxuICAgICAgICAgICAgY29udGVudDogbW9kZWwuc2VsZWN0ZWRWaWV3LFxuICAgICAgICAgICAgbGluZU51bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIHByb21vdGVUZXh0OiBtb2RlbC5zZWxlY3RlZEZpbGVOYW1lICYmIGBEcm9wICR7cGF0aC5iYXNlbmFtZShtb2RlbC5zZWxlY3RlZEZpbGVOYW1lKX0gaGVyZWAsXG4gICAgICAgICAgICBwcm9tb3RlVGlwczogbW9kZWwuc2VsZWN0ZWRGaWxlTmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgdGhpcy5vbkhpZGVGaWxlTGlzdCA9IHRoaXMub25IaWRlRmlsZUxpc3QuYmluZCh0aGlzKVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IaWRlRmlsZUxpc3QpXG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3cnLCB0aGlzLm9uSGlkZUZpbGVMaXN0KVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgIG9uVXBsb2FkKGZpbGVzLCB0eXBlKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUZpbGVMaXN0ID0gZmFsc2VcbiAgICAgICAgdGhpcy5tb2RlbC5oYW5kbGVGaWxlcyhmaWxlcywgdHlwZSlcbiAgICAgIH0sXG5cbiAgICAgIG9uSG92ZXIoaWQpIHtcbiAgICAgICAgdGhpcy5ob3ZlcmluZyA9IGlkXG4gICAgICB9LFxuXG4gICAgICBvblNlbGVjdChtYXBwaW5nLCB0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnb3JpZ2luYWwnKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0xpbmUobWFwcGluZy5nZW5lcmF0ZWRMaW5lLCAnZ2VuZXJhdGVkJylcbiAgICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUb0xpbmUobWFwcGluZy5nZW5lcmF0ZWRMaW5lLCAnc291cmNlTWFwJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsLnNlbGVjdGVkSW5kZXggPSBtYXBwaW5nLnNvdXJjZVxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0xpbmUobWFwcGluZy5vcmlnaW5hbExpbmUsICdvcmlnaW5hbCcpXG4gICAgICAgIH0pXG4gICAgICB9LFxuXG4gICAgICBvblNjcm9sbChzY3JvbGxUb3AsIHR5cGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBwYW5lbCBvZiB0aGlzLiRyZWZzW1NDUk9MTF9TWU5DW3R5cGVdXSB8fCBbXSkge1xuICAgICAgICAgIHBhbmVsLnNjcm9sbFRvKHNjcm9sbFRvcClcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgb25Ub2dnbGVGaWxlTGlzdCgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5RmlsZUxpc3QgPSAhdGhpcy5kaXNwbGF5RmlsZUxpc3RcbiAgICAgIH0sXG5cbiAgICAgIG9uSGlkZUZpbGVMaXN0KCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlGaWxlTGlzdCA9IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBvblNlbGVjdE9yaWdpbmFsKGluZGV4KSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUZpbGVMaXN0ID0gZmFsc2VcbiAgICAgICAgdGhpcy5tb2RlbC5zZWxlY3RlZEluZGV4ID0gaW5kZXhcbiAgICAgIH0sXG5cbiAgICAgIHNjcm9sbFRvTGluZShsaW5lLCB0YXJnZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCBwYW5lbCBvZiB0aGlzLiRyZWZzW3RhcmdldF0gfHwgW10pIHtcbiAgICAgICAgICBwYW5lbC5zY3JvbGxUb0xpbmUobGluZSlcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdG9nZ2xlUGFuZWwodHlwZSkge1xuICAgICAgICB0aGlzLmVuYWJsZWRQYW5lbHNbdHlwZV0gPSAhdGhpcy5lbmFibGVkUGFuZWxzW3R5cGVdXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB9XG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICB9XG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2JiYjtcbiAgfVxuICAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgfVxuPC9zdHlsZT5cblxuPHN0eWxlIG1vZHVsZT1cIiRcIj5cbiAgLmFwcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubmF2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgY29sb3I6ICNiYmI7XG4gICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gIH1cbiAgLm5hdk1lbnUge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWxsOiAjYmJiO1xuICB9XG4gIC5maWxlTGlzdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNnB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xuICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA0cHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIC5maWxlTGlzdEl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmZpbGVMaXN0SXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgfVxuICAuZmlsZUxpc3RJdGVtLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICAuZmlsZUxpc3RJdGVtLm1pc3NpbmdDb250ZW50IHtcbiAgICBjb2xvcjogI0NENUM1QztcbiAgfVxuICAubmF2VGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5uYXZUaXRsZTo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xuICB9XG4gIC5wYW5lbEJ1dHRvbkdyb3VwIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICAucGFuZWxCdXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGNvbG9yOiAjYmJiO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAucGFuZWxCdXR0b24uYWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuY29udGFpbmVyID4gKiB7XG4gICAgZmxleDogMSBhdXRvO1xuICAgIHdpZHRoOiAxcHg7XG4gIH1cbiAgLnByb21vdGVUZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gIC5wcm9tb3RlVGlwcyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIDpjbGFzcz1cIiQuY29udGFpbmVyXCJcbiAgICBAZHJhZ292ZXIucHJldmVudFxuICAgIEBkcm9wLnByZXZlbnQ9XCJvbkRyb3BGaWxlc1wiXG4gID5cbiAgICA8U291cmNlVmlld1xuICAgICAgdi1pZj1cImNvbnRlbnRcIlxuICAgICAgcmVmPVwic291cmNlVmlld1wiXG4gICAgICA6Y2xhc3M9XCIkLnNvdXJjZVZpZXdcIlxuICAgICAgOmNvbnRlbnQ9XCJjb250ZW50XCJcbiAgICAgIDpob3ZlcmluZz1cImhvdmVyaW5nXCJcbiAgICAgIDpsaW5lLW51bWJlcj1cImxpbmVOdW1iZXJcIlxuICAgICAgQGhvdmVyPVwib25Ib3ZlclwiXG4gICAgICBAc2VsZWN0PVwib25TZWxlY3RcIlxuICAgICAgQHNjcm9sbD1cIm9uU2Nyb2xsXCJcbiAgICAvPlxuICAgIDxkaXYgdi1lbHNlIDpjbGFzcz1cIiQucHJvbW90ZVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIDpjbGFzcz1cIiQucHJvbW90ZUZpbGVQaWNrZXJcIlxuICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgIG11bHRpcGxlXG4gICAgICAgIEBjaGFuZ2U9XCJvblNlbGVjdEZpbGVzXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IDpjbGFzcz1cIiQucHJvbW90ZUNvbnRlbnRcIj5cbiAgICAgICAgPHNsb3QgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTb3VyY2VWaWV3IGZyb20gJy4vU291cmNlVmlldydcblxuICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICBjb21wb25lbnRzOiB7IFNvdXJjZVZpZXcgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgIGNvbnRlbnQ6IHsgdHlwZTogQXJyYXkgfSxcblxuICAgICAgaG92ZXJpbmc6IHsgdHlwZTogU3RyaW5nIH0sXG5cbiAgICAgIGxpbmVOdW1iZXI6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICBzY3JvbGxUbyhvZmZzZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuJHJlZnMuc291cmNlVmlldykge1xuICAgICAgICAgIHRoaXMuJHJlZnMuc291cmNlVmlldy5zY3JvbGxUbyhvZmZzZXQpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHNjcm9sbFRvTGluZShsaW5lKSB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLnNvdXJjZVZpZXcpIHtcbiAgICAgICAgICB0aGlzLiRyZWZzLnNvdXJjZVZpZXcuc2Nyb2xsVG9MaW5lKGxpbmUpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG9uSG92ZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaG92ZXInLCBldmVudClcbiAgICAgIH0sXG5cbiAgICAgIG9uU2VsZWN0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGV2ZW50KVxuICAgICAgfSxcblxuICAgICAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsJywgZXZlbnQpXG4gICAgICB9LFxuXG4gICAgICBvblNlbGVjdEZpbGVzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwbG9hZCcsIGV2ZW50LnRhcmdldC5maWxlcylcbiAgICAgIH0sXG5cbiAgICAgIG9uRHJvcEZpbGVzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwbG9hZCcsIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcylcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBtb2R1bGU9XCIkXCI+XG4gIC5zb3VyY2VWaWV3IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnByb21vdGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgLnByb21vdGVGaWxlUGlja2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAucHJvbW90ZUNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiWyQuY29udGFpbmVyLCB7IFskLmRyYWdnaW5nXTogZHJhZ2dpbmcgfV1cIlxuICAgIEBzY3JvbGw9XCJvblZpZXdwb3J0VXBkYXRlXCJcbiAgICBAbW91c2Vkb3duPVwib25EcmFnU3RhcnRcIlxuICA+XG4gICAgPGRpdiA6c3R5bGU9XCJ7IGhlaWdodDogYCR7Y29udGVudC5sZW5ndGggKiBsaW5lSGVpZ2h0ICsgMn1weGAsIG1pbldpZHRoOiBgJHttYXhXaWR0aH1weGAgfVwiPlxuICAgICAgPHRhYmxlIDpzdHlsZT1cInsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9cHgpYCB9XCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHJcbiAgICAgICAgICAgIHYtZm9yPVwiKGxpbmVEYXRhLCBpbmRleCkgaW4gZGlzcGxheUxpbmVzXCJcbiAgICAgICAgICAgIDprZXk9XCJkaXNwbGF5UmFuZ2VbMF0gKyBpbmRleFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCIkLmxpbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICB2LWlmPVwibGluZU51bWJlclwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cIiQubGluZU51bWJlclwiXG4gICAgICAgICAgICAgIDpkYXRhLWxpbmU9XCJkaXNwbGF5UmFuZ2VbMF0gKyBpbmRleCArIDFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XCIkLmxpbmVDb250ZW50XCI+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIoY2h1bmssIGluZGV4KSBpbiBsaW5lRGF0YVwiXG4gICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJC5jaHVuaywgeyBbJC5tYXBwZWRdOiBjaHVuay5pZCwgWyQuaG92ZXJpbmddOiBjaHVuay5pZCA9PT0gaG92ZXJpbmcgfV1cIlxuICAgICAgICAgICAgICAgIDp0aXRsZT1cImNodW5rLm5hbWVzIHwgbmFtZXNcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uU2VsZWN0KGNodW5rKVwiXG4gICAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cIm9uSG92ZXIoY2h1bmspXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZT57e2NodW5rLmNvbnRlbnR9fTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvc3Bhbj48YnIvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgICA8aWZyYW1lIHJlZj1cInJlc2l6ZURldGVjdG9yXCJcbiAgICA6Y2xhc3M9XCIkLnJlc2l6ZURldGVjdG9yXCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBjb21wYWN0IGZyb20gJ2xvZGFzaC9jb21wYWN0J1xuICBpbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJ1xuXG4gIGNvbnN0IExJTkVfUEFERElORyA9IDEwXG5cbiAgY29uc3QgRFJBR0dJTkdfRkFDVE9SID0gMlxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGZpbHRlcnM6IHtcblxuICAgICAgbmFtZXMobmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhY3QobmFtZXMpLmpvaW4oJywnKVxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgY29udGVudDogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgIC8vXG5cbiAgICAgIGhvdmVyaW5nOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgICAgLy9cblxuICAgICAgbGluZU51bWJlcjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgLy9cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG5cbiAgICAgICAgbWF4V2lkdGg6IDAsXG4gICAgICAgIC8vXG5cbiAgICAgICAgdmlld3BvcnQ6IFswLCAwXSxcbiAgICAgICAgLy9cblxuICAgICAgICBkcmFnZ2luZzogbnVsbCxcbiAgICAgICAgLy9cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgZGlzcGxheVJhbmdlKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIE1hdGgubWF4KDAsIE1hdGguZmxvb3IoKHRoaXMudmlld3BvcnRbMF0gLSAyKSAvIHRoaXMubGluZUhlaWdodCkgLSBMSU5FX1BBRERJTkcpLFxuICAgICAgICAgIE1hdGguZmxvb3IodGhpcy52aWV3cG9ydFsxXSAvIHRoaXMubGluZUhlaWdodCkgKyAyICogTElORV9QQURESU5HLFxuICAgICAgICBdXG4gICAgICB9LFxuXG4gICAgICBkaXNwbGF5TGluZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQuc2xpY2UodGhpcy5kaXNwbGF5UmFuZ2VbMF0sIHRoaXMuZGlzcGxheVJhbmdlWzBdICsgdGhpcy5kaXNwbGF5UmFuZ2VbMV0gKyAyKVxuICAgICAgfSxcblxuICAgICAgdHJhbnNsYXRlWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheVJhbmdlWzBdICogdGhpcy5saW5lSGVpZ2h0XG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gMThcbiAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IG51bGxcblxuICAgICAgdGhpcy5vbkhvdmVyID0gZGVib3VuY2UodGhpcy5vbkhvdmVyKS5iaW5kKHRoaXMpXG4gICAgICB0aGlzLm9uRHJhZ0VuZCA9IGRlYm91bmNlKHRoaXMub25EcmFnRW5kKS5iaW5kKHRoaXMpXG4gICAgICB0aGlzLm9uRHJhZ01vdmUgPSBkZWJvdW5jZSh0aGlzLm9uRHJhZ01vdmUpLmJpbmQodGhpcylcbiAgICAgIHRoaXMub25WaWV3cG9ydFVwZGF0ZSA9IHRoaXMub25WaWV3cG9ydFVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLm9uVmlld3BvcnRVcGRhdGUoKVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRyYWdNb3ZlKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRHJhZ0VuZClcblxuICAgICAgdGhpcy4kcmVmcy5yZXNpemVEZXRlY3Rvci5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25WaWV3cG9ydFVwZGF0ZSlcbiAgICB9LFxuXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRHJhZ01vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25EcmFnRW5kKVxuXG4gICAgICBpZiAodGhpcy4kcmVmcy5yZXNpemVEZXRlY3Rvci5jb250ZW50V2luZG93KSB7XG4gICAgICAgIHRoaXMuJHJlZnMucmVzaXplRGV0ZWN0b3IuY29udGVudFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uVmlld3BvcnRVcGRhdGUpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG5cbiAgICAgIGNvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm1heFdpZHRoID0gdGhpcy4kZWwuc2Nyb2xsV2lkdGhcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgc2Nyb2xsVG8ob2Zmc2V0KSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RTY3JvbGxUb3AgPT09IG9mZnNldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IG9mZnNldFxuICAgICAgICB0aGlzLiRlbC5zY3JvbGxUb3AgPSBvZmZzZXRcbiAgICAgIH0sXG5cbiAgICAgIHNjcm9sbFRvTGluZShsaW5lKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8obGluZSAqIHRoaXMubGluZUhlaWdodCAtIHRoaXMubGluZUhlaWdodCAvIDIgKyAyIC0gdGhpcy4kZWwub2Zmc2V0SGVpZ2h0IC8gMilcbiAgICAgIH0sXG5cbiAgICAgIG9uVmlld3BvcnRVcGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBvZmZzZXRIZWlnaHQgfSA9IHRoaXMuJGVsXG5cbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IFtzY3JvbGxUb3AsIG9mZnNldEhlaWdodF1cbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG5cbiAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsJywgc2Nyb2xsVG9wKVxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXhXaWR0aCA9IE1hdGgubWF4KHRoaXMubWF4V2lkdGgsIHRoaXMuJGVsLnNjcm9sbFdpZHRoKVxuICAgICAgICB9KVxuICAgICAgfSxcblxuICAgICAgb25TZWxlY3QoY2h1bmspIHtcbiAgICAgICAgaWYgKGNodW5rLmlkKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgY2h1bmsubWFwcGluZylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgb25Ib3ZlcihjaHVuaykge1xuICAgICAgICBpZiAoY2h1bmsuaWQpIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdob3ZlcicsIGNodW5rLmlkKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBvbkRyYWdTdGFydChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5idXR0b24pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB7XG4gICAgICAgICAgeDogdGhpcy4kZWwuc2Nyb2xsTGVmdCArIERSQUdHSU5HX0ZBQ1RPUiAqIGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgeTogdGhpcy4kZWwuc2Nyb2xsVG9wICsgRFJBR0dJTkdfRkFDVE9SICogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgb25EcmFnTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRlbC5zY3JvbGxMZWZ0ID0gdGhpcy5kcmFnZ2luZy54IC0gRFJBR0dJTkdfRkFDVE9SICogZXZlbnQuY2xpZW50WFxuICAgICAgICB0aGlzLiRlbC5zY3JvbGxUb3AgPSB0aGlzLmRyYWdnaW5nLnkgLSBEUkFHR0lOR19GQUNUT1IgKiBldmVudC5jbGllbnRZXG4gICAgICB9LFxuXG4gICAgICBvbkRyYWdFbmQoKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBudWxsXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbW9kdWxlPVwiJFwiPlxuICAuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgfVxuICAuY29udGFpbmVyLmRyYWdnaW5nIHtcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIH1cbiAgLmxpbmUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgY29sb3I6ICMyMjI7XG4gIH1cbiAgLmxpbmVOdW1iZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuICAubGluZU51bWJlcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1saW5lKTtcbiAgfVxuICAuY2h1bmsubWFwcGVkIHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5jaHVuay5ob3ZlcmluZyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB9XG4gIC5yZXNpemVEZXRlY3RvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbn1cXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvamFzb24vc291cmNlLW1hcC12aWV3ZXIvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdUxBOztFQUVBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtDQUNBO0FBQ0E7OztFQUdBLHVCQUFBO0NBQ0E7QUFDQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0NBQ0E7QUFDQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUNBO0VBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQXBwLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IDpjbGFzcz1cXFwiJC5hcHBcXFwiPlxcbiAgICA8ZGl2IDpjbGFzcz1cXFwiJC5uYXZcXFwiPlxcbiAgICAgIDxNZW51IHYtaWY9XFxcIm1vZGVsLnNvdXJjZXMubGVuZ3RoXFxcIiA6Y2xhc3M9XFxcIiQubmF2TWVudVxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwib25Ub2dnbGVGaWxlTGlzdFxcXCIgLz5cXG4gICAgICA8dWwgdi1pZj1cXFwiZGlzcGxheUZpbGVMaXN0XFxcIiA6Y2xhc3M9XFxcIiQuZmlsZUxpc3RcXFwiIEBtb3VzZWRvd24uc3RvcD5cXG4gICAgICAgIDxsaVxcbiAgICAgICAgICB2LWZvcj1cXFwiKHNyYywgaW5kZXgpIGluIG1vZGVsLnNvdXJjZXNcXFwiXFxuICAgICAgICAgIDprZXk9XFxcImluZGV4XFxcIlxcbiAgICAgICAgICA6Y2xhc3M9XFxcIlskLmZpbGVMaXN0SXRlbSwge1xcbiAgICAgICAgICAgIFskLmFjdGl2ZV06IG1vZGVsLnNlbGVjdGVkSW5kZXggPT09IGluZGV4LFxcbiAgICAgICAgICAgIFskLm1pc3NpbmdDb250ZW50XTogIW1vZGVsLnNvdXJjZUNvbnRlbnRzW2luZGV4XSAmJiAhbW9kZWwub3ZlcnJpZGVzW2luZGV4XSxcXG4gICAgICAgICAgfV1cXFwiXFxuICAgICAgICAgIDp0aXRsZT1cXFwic3JjXFxcIlxcbiAgICAgICAgICBAY2xpY2s9XFxcIm9uU2VsZWN0T3JpZ2luYWwoaW5kZXgpXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICB7e3NyY319XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgICAgPHNwYW4gOmNsYXNzPVxcXCIkLm5hdlRpdGxlXFxcIiA6dGl0bGU9XFxcIm1vZGVsLnNlbGVjdGVkRmlsZU5hbWVcXFwiPlxcbiAgICAgICAge3ttb2RlbC5zZWxlY3RlZEZpbGVOYW1lfX1cXG4gICAgICA8L3NwYW4+XFxuICAgICAgPHNwYW4gOmNsYXNzPVxcXCIkLnBhbmVsQnV0dG9uR3JvdXBcXFwiPlxcbiAgICAgICAgPGFcXG4gICAgICAgICAgdi1mb3I9XFxcIml0ZW0gaW4gcGFuZWxzXFxcIlxcbiAgICAgICAgICA6a2V5PVxcXCJpdGVtLm5hbWVcXFwiXFxuICAgICAgICAgIDpjbGFzcz1cXFwiWyQucGFuZWxCdXR0b24sIHsgWyQuYWN0aXZlXTogIWl0ZW0uaGlkZGVuICYmIGVuYWJsZWRQYW5lbHNbaXRlbS5uYW1lXSB9XVxcXCJcXG4gICAgICAgICAgaHJlZj1cXFwiamF2YXNjcmlwdDpcXFwiXFxuICAgICAgICAgIEBjbGljaz1cXFwidG9nZ2xlUGFuZWwoaXRlbS5uYW1lKVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAge3tpdGVtLmRpc3BsYXlOYW1lfX1cXG4gICAgICAgIDwvYT5cXG4gICAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IDpjbGFzcz1cXFwiJC5jb250YWluZXJcXFwiPlxcbiAgICAgIDxTb3VyY2VQYW5lbFxcbiAgICAgICAgdi1mb3I9XFxcIml0ZW0gaW4gcGFuZWxzXFxcIlxcbiAgICAgICAgdi1pZj1cXFwiIWl0ZW0uaGlkZGVuICYmIGVuYWJsZWRQYW5lbHNbaXRlbS5uYW1lXVxcXCJcXG4gICAgICAgIDprZXk9XFxcIml0ZW0ubmFtZVxcXCJcXG4gICAgICAgIDpyZWY9XFxcIml0ZW0ubmFtZVxcXCJcXG4gICAgICAgIDpjb250ZW50PVxcXCJpdGVtLmNvbnRlbnRcXFwiXFxuICAgICAgICA6aG92ZXJpbmc9XFxcImhvdmVyaW5nXFxcIlxcbiAgICAgICAgOmxpbmUtbnVtYmVyPVxcXCJpdGVtLmxpbmVOdW1iZXJcXFwiXFxuICAgICAgICBAaG92ZXI9XFxcIm9uSG92ZXJcXFwiXFxuICAgICAgICBAc2VsZWN0PVxcXCJvblNlbGVjdCgkZXZlbnQsIGl0ZW0ubmFtZSlcXFwiXFxuICAgICAgICBAc2Nyb2xsPVxcXCJvblNjcm9sbCgkZXZlbnQsIGl0ZW0ubmFtZSlcXFwiXFxuICAgICAgICBAdXBsb2FkPVxcXCJvblVwbG9hZCgkZXZlbnQsIGl0ZW0ubmFtZSlcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGRpdiA6Y2xhc3M9XFxcIiQucHJvbW90ZVRleHRcXFwiPnt7aXRlbS5wcm9tb3RlVGV4dH19PC9kaXY+XFxuICAgICAgICA8ZGl2IHYtaWY9XFxcIml0ZW0ucHJvbW90ZVRpcHNcXFwiIDpjbGFzcz1cXFwiJC5wcm9tb3RlVGlwc1xcXCI+e3tpdGVtLnByb21vdGVUaXBzfX08L2Rpdj5cXG4gICAgICA8L1NvdXJjZVBhbmVsPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gIGltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXFxuXFxuICBpbXBvcnQgTWVudSBmcm9tICcuL2ljb25zL01lbnUnXFxuICBpbXBvcnQgU291cmNlUGFuZWwgZnJvbSAnLi9zb3VyY2UvU291cmNlUGFuZWwnXFxuICBpbXBvcnQgY3JlYXRlTW9kZWwgZnJvbSAnLi4vbW9kZWxzJ1xcblxcbiAgY29uc3QgU0NST0xMX1NZTkMgPSB7XFxuICAgIGdlbmVyYXRlZDogJ3NvdXJjZU1hcCcsXFxuICAgIHNvdXJjZU1hcDogJ2dlbmVyYXRlZCcsXFxuICB9XFxuXFxuICBleHBvcnQgZGVmYXVsdCB7XFxuXFxuICAgIGNvbXBvbmVudHM6IHsgTWVudSwgU291cmNlUGFuZWwgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcblxcbiAgICAgICAgbW9kZWw6IGNyZWF0ZU1vZGVsKCksXFxuXFxuICAgICAgICBob3ZlcmluZzogbnVsbCxcXG5cXG4gICAgICAgIGRpc3BsYXlGaWxlTGlzdDogZmFsc2UsXFxuXFxuICAgICAgICBlbmFibGVkUGFuZWxzOiB7IGdlbmVyYXRlZDogdHJ1ZSwgc291cmNlTWFwOiB0cnVlLCBvcmlnaW5hbDogdHJ1ZSB9LFxcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG5cXG4gICAgICBwYW5lbHMoKSB7XFxuICAgICAgICBjb25zdCB7IG1vZGVsIH0gPSB0aGlzXFxuXFxuICAgICAgICByZXR1cm4gW1xcbiAgICAgICAgICB7XFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdHZW5lcmF0ZWQnLFxcbiAgICAgICAgICAgIG5hbWU6ICdnZW5lcmF0ZWQnLFxcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1vZGVsLmdlbmVyYXRlZFZpZXcsXFxuICAgICAgICAgICAgbGluZU51bWJlcjogdHJ1ZSxcXG4gICAgICAgICAgICBwcm9tb3RlVGV4dDogYERyb3AgJHttb2RlbC5nZW5lcmF0ZWRGaWxlTmFtZSB8fCAnZ2VuZXJhdGVkIGZpbGUnfSBoZXJlYCxcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnU291cmNlTWFwJyxcXG4gICAgICAgICAgICBuYW1lOiAnc291cmNlTWFwJyxcXG4gICAgICAgICAgICBjb250ZW50OiBtb2RlbC5tYXBwaW5nc1ZpZXcsXFxuICAgICAgICAgICAgcHJvbW90ZVRleHQ6IGBEcm9wICR7bW9kZWwuc291cmNlTWFwRmlsZU5hbWUgfHwgJ3NvdXJjZW1hcCBmaWxlJ30gaGVyZWAsXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ09yaWdpbmFsJyxcXG4gICAgICAgICAgICBuYW1lOiAnb3JpZ2luYWwnLFxcbiAgICAgICAgICAgIGhpZGRlbjogbW9kZWwuc2VsZWN0ZWRGaWxlTmFtZSA9PSBudWxsLFxcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1vZGVsLnNlbGVjdGVkVmlldyxcXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiB0cnVlLFxcbiAgICAgICAgICAgIHByb21vdGVUZXh0OiBtb2RlbC5zZWxlY3RlZEZpbGVOYW1lICYmIGBEcm9wICR7cGF0aC5iYXNlbmFtZShtb2RlbC5zZWxlY3RlZEZpbGVOYW1lKX0gaGVyZWAsXFxuICAgICAgICAgICAgcHJvbW90ZVRpcHM6IG1vZGVsLnNlbGVjdGVkRmlsZU5hbWUsXFxuICAgICAgICAgIH0sXFxuICAgICAgICBdXFxuICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICB0aGlzLm9uSGlkZUZpbGVMaXN0ID0gdGhpcy5vbkhpZGVGaWxlTGlzdC5iaW5kKHRoaXMpXFxuICAgIH0sXFxuXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IaWRlRmlsZUxpc3QpXFxuICAgIH0sXFxuXFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XFxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93JywgdGhpcy5vbkhpZGVGaWxlTGlzdClcXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcblxcbiAgICAgIG9uVXBsb2FkKGZpbGVzLCB0eXBlKSB7XFxuICAgICAgICB0aGlzLmRpc3BsYXlGaWxlTGlzdCA9IGZhbHNlXFxuICAgICAgICB0aGlzLm1vZGVsLmhhbmRsZUZpbGVzKGZpbGVzLCB0eXBlKVxcbiAgICAgIH0sXFxuXFxuICAgICAgb25Ib3ZlcihpZCkge1xcbiAgICAgICAgdGhpcy5ob3ZlcmluZyA9IGlkXFxuICAgICAgfSxcXG5cXG4gICAgICBvblNlbGVjdChtYXBwaW5nLCB0eXBlKSB7XFxuICAgICAgICBpZiAodHlwZSA9PT0gJ29yaWdpbmFsJykge1xcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvTGluZShtYXBwaW5nLmdlbmVyYXRlZExpbmUsICdnZW5lcmF0ZWQnKVxcbiAgICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUb0xpbmUobWFwcGluZy5nZW5lcmF0ZWRMaW5lLCAnc291cmNlTWFwJylcXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMubW9kZWwuc2VsZWN0ZWRJbmRleCA9IG1hcHBpbmcuc291cmNlXFxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9MaW5lKG1hcHBpbmcub3JpZ2luYWxMaW5lLCAnb3JpZ2luYWwnKVxcbiAgICAgICAgfSlcXG4gICAgICB9LFxcblxcbiAgICAgIG9uU2Nyb2xsKHNjcm9sbFRvcCwgdHlwZSkge1xcbiAgICAgICAgZm9yIChjb25zdCBwYW5lbCBvZiB0aGlzLiRyZWZzW1NDUk9MTF9TWU5DW3R5cGVdXSB8fCBbXSkge1xcbiAgICAgICAgICBwYW5lbC5zY3JvbGxUbyhzY3JvbGxUb3ApXFxuICAgICAgICB9XFxuICAgICAgfSxcXG5cXG4gICAgICBvblRvZ2dsZUZpbGVMaXN0KCkge1xcbiAgICAgICAgdGhpcy5kaXNwbGF5RmlsZUxpc3QgPSAhdGhpcy5kaXNwbGF5RmlsZUxpc3RcXG4gICAgICB9LFxcblxcbiAgICAgIG9uSGlkZUZpbGVMaXN0KCkge1xcbiAgICAgICAgdGhpcy5kaXNwbGF5RmlsZUxpc3QgPSBmYWxzZVxcbiAgICAgIH0sXFxuXFxuICAgICAgb25TZWxlY3RPcmlnaW5hbChpbmRleCkge1xcbiAgICAgICAgdGhpcy5kaXNwbGF5RmlsZUxpc3QgPSBmYWxzZVxcbiAgICAgICAgdGhpcy5tb2RlbC5zZWxlY3RlZEluZGV4ID0gaW5kZXhcXG4gICAgICB9LFxcblxcbiAgICAgIHNjcm9sbFRvTGluZShsaW5lLCB0YXJnZXQpIHtcXG4gICAgICAgIGZvciAoY29uc3QgcGFuZWwgb2YgdGhpcy4kcmVmc1t0YXJnZXRdIHx8IFtdKSB7XFxuICAgICAgICAgIHBhbmVsLnNjcm9sbFRvTGluZShsaW5lKVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuXFxuICAgICAgdG9nZ2xlUGFuZWwodHlwZSkge1xcbiAgICAgICAgdGhpcy5lbmFibGVkUGFuZWxzW3R5cGVdID0gIXRoaXMuZW5hYmxlZFBhbmVsc1t0eXBlXVxcbiAgICAgIH0sXFxuICAgIH0sXFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgaHRtbCxcXG4gIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIH1cXG4gICosXFxuICAqOmJlZm9yZSxcXG4gICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gIH1cXG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgfVxcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPHN0eWxlIG1vZHVsZT1cXFwiJFxcXCI+XFxuICAuYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5uYXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogI2JiYjtcXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xcbiAgfVxcbiAgLm5hdk1lbnUge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWxsOiAjYmJiO1xcbiAgfVxcbiAgLmZpbGVMaXN0IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDZweDtcXG4gICAgbGVmdDogNnB4O1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMnB4KTtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogNHB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xcbiAgICBjb2xvcjogIzg4ODtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIH1cXG4gIC5maWxlTGlzdEl0ZW0ge1xcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC5maWxlTGlzdEl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbiAgfVxcbiAgLmZpbGVMaXN0SXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xcbiAgICBjb2xvcjogIzMzMztcXG4gIH1cXG4gIC5maWxlTGlzdEl0ZW0ubWlzc2luZ0NvbnRlbnQge1xcbiAgICBjb2xvcjogI0NENUM1QztcXG4gIH1cXG4gIC5uYXZUaXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgfVxcbiAgLm5hdlRpdGxlOjpzZWxlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xcbiAgfVxcbiAgLnBhbmVsQnV0dG9uR3JvdXAge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgfVxcbiAgLnBhbmVsQnV0dG9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBjb2xvcjogI2JiYjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbiAgLnBhbmVsQnV0dG9uLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG4gIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgLmNvbnRhaW5lciA+ICoge1xcbiAgICBmbGV4OiAxIGF1dG87XFxuICAgIHdpZHRoOiAxcHg7XFxuICB9XFxuICAucHJvbW90ZVRleHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY29sb3I6ICNhYWE7XFxuICB9XFxuICAucHJvbW90ZVRpcHMge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IC45ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBjb2xvcjogIzk5OTtcXG4gIH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNvdXJjZVZpZXdfcVVodXFSRFkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucHJvbW90ZV8zMWU0Wm1qbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4ucHJvbW90ZUZpbGVQaWNrZXJfMzMyTTUwRTUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9tb3RlQ29udGVudF8ySktxMnh0YiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL2phc29uL3NvdXJjZS1tYXAtdmlld2VyL3NyYy9jb21wb25lbnRzL3NvdXJjZS9zcmMvY29tcG9uZW50cy9zb3VyY2UvU291cmNlUGFuZWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxRkE7RUFDQSxhQUFBO0NBQ0E7QUFDQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtDQUNBO0FBQ0E7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7Q0FDQTtBQUNBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNvdXJjZVBhbmVsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2XFxuICAgIDpjbGFzcz1cXFwiJC5jb250YWluZXJcXFwiXFxuICAgIEBkcmFnb3Zlci5wcmV2ZW50XFxuICAgIEBkcm9wLnByZXZlbnQ9XFxcIm9uRHJvcEZpbGVzXFxcIlxcbiAgPlxcbiAgICA8U291cmNlVmlld1xcbiAgICAgIHYtaWY9XFxcImNvbnRlbnRcXFwiXFxuICAgICAgcmVmPVxcXCJzb3VyY2VWaWV3XFxcIlxcbiAgICAgIDpjbGFzcz1cXFwiJC5zb3VyY2VWaWV3XFxcIlxcbiAgICAgIDpjb250ZW50PVxcXCJjb250ZW50XFxcIlxcbiAgICAgIDpob3ZlcmluZz1cXFwiaG92ZXJpbmdcXFwiXFxuICAgICAgOmxpbmUtbnVtYmVyPVxcXCJsaW5lTnVtYmVyXFxcIlxcbiAgICAgIEBob3Zlcj1cXFwib25Ib3ZlclxcXCJcXG4gICAgICBAc2VsZWN0PVxcXCJvblNlbGVjdFxcXCJcXG4gICAgICBAc2Nyb2xsPVxcXCJvblNjcm9sbFxcXCJcXG4gICAgLz5cXG4gICAgPGRpdiB2LWVsc2UgOmNsYXNzPVxcXCIkLnByb21vdGVcXFwiPlxcbiAgICAgIDxpbnB1dFxcbiAgICAgICAgOmNsYXNzPVxcXCIkLnByb21vdGVGaWxlUGlja2VyXFxcIlxcbiAgICAgICAgdHlwZT1cXFwiZmlsZVxcXCJcXG4gICAgICAgIG11bHRpcGxlXFxuICAgICAgICBAY2hhbmdlPVxcXCJvblNlbGVjdEZpbGVzXFxcIlxcbiAgICAgIC8+XFxuICAgICAgPGRpdiA6Y2xhc3M9XFxcIiQucHJvbW90ZUNvbnRlbnRcXFwiPlxcbiAgICAgICAgPHNsb3QgLz5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBpbXBvcnQgU291cmNlVmlldyBmcm9tICcuL1NvdXJjZVZpZXcnXFxuXFxuICBleHBvcnQgZGVmYXVsdCB7XFxuXFxuICAgIGNvbXBvbmVudHM6IHsgU291cmNlVmlldyB9LFxcblxcbiAgICBwcm9wczoge1xcblxcbiAgICAgIGNvbnRlbnQ6IHsgdHlwZTogQXJyYXkgfSxcXG5cXG4gICAgICBob3ZlcmluZzogeyB0eXBlOiBTdHJpbmcgfSxcXG5cXG4gICAgICBsaW5lTnVtYmVyOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG5cXG4gICAgICBzY3JvbGxUbyhvZmZzZXQpIHtcXG4gICAgICAgIGlmICh0aGlzLiRyZWZzLnNvdXJjZVZpZXcpIHtcXG4gICAgICAgICAgdGhpcy4kcmVmcy5zb3VyY2VWaWV3LnNjcm9sbFRvKG9mZnNldClcXG4gICAgICAgIH1cXG4gICAgICB9LFxcblxcbiAgICAgIHNjcm9sbFRvTGluZShsaW5lKSB7XFxuICAgICAgICBpZiAodGhpcy4kcmVmcy5zb3VyY2VWaWV3KSB7XFxuICAgICAgICAgIHRoaXMuJHJlZnMuc291cmNlVmlldy5zY3JvbGxUb0xpbmUobGluZSlcXG4gICAgICAgIH1cXG4gICAgICB9LFxcblxcbiAgICAgIG9uSG92ZXIoZXZlbnQpIHtcXG4gICAgICAgIHRoaXMuJGVtaXQoJ2hvdmVyJywgZXZlbnQpXFxuICAgICAgfSxcXG5cXG4gICAgICBvblNlbGVjdChldmVudCkge1xcbiAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgZXZlbnQpXFxuICAgICAgfSxcXG5cXG4gICAgICBvblNjcm9sbChldmVudCkge1xcbiAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsJywgZXZlbnQpXFxuICAgICAgfSxcXG5cXG4gICAgICBvblNlbGVjdEZpbGVzKGV2ZW50KSB7XFxuICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQnLCBldmVudC50YXJnZXQuZmlsZXMpXFxuICAgICAgfSxcXG5cXG4gICAgICBvbkRyb3BGaWxlcyhldmVudCkge1xcbiAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkJywgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKVxcbiAgICAgIH0sXFxuICAgIH0sXFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIG1vZHVsZT1cXFwiJFxcXCI+XFxuICAuc291cmNlVmlldyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIC5wcm9tb3RlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIC5wcm9tb3RlRmlsZVBpY2tlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLnByb21vdGVDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNjY2M7XFxuICB9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic291cmNlVmlld1wiOiBcInNvdXJjZVZpZXdfcVVodXFSRFlcIixcblx0XCJwcm9tb3RlXCI6IFwicHJvbW90ZV8zMWU0Wm1qbVwiLFxuXHRcInByb21vdGVGaWxlUGlja2VyXCI6IFwicHJvbW90ZUZpbGVQaWNrZXJfMzMyTTUwRTVcIixcblx0XCJwcm9tb3RlQ29udGVudFwiOiBcInByb21vdGVDb250ZW50XzJKS3EyeHRiXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jb250YWluZXJfWFV0bWczdFQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbn1cXG4uY29udGFpbmVyX1hVdG1nM3RULmRyYWdnaW5nXzM0b1VtUmdZIHtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG59XFxuLmxpbmVfM2JPd3ZwLTQge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBjb2xvcjogIzIyMjtcXG59XFxuLmxpbmVOdW1iZXJfM3N4ZjEzRkcge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5saW5lTnVtYmVyXzNzeGYxM0ZHOmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtbGluZSk7XFxufVxcbi5jaHVua19XcDdTMjJJXy5tYXBwZWRfMm5YWmNwcnEge1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaHVua19XcDdTMjJJXy5ob3ZlcmluZ19MTU84TXpqViB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbn1cXG4ucmVzaXplRGV0ZWN0b3JfMzVQNll3Slgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9qYXNvbi9zb3VyY2UtbWFwLXZpZXdlci9zcmMvY29tcG9uZW50cy9zb3VyY2Uvc3JjL2NvbXBvbmVudHMvc291cmNlL1NvdXJjZVZpZXcudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE0TUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7Q0FDQTtBQUNBO0VBQ0EseUJBQUE7Q0FDQTtBQUNBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtDQUNBO0FBQ0E7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7Q0FDQTtBQUNBO0VBQ0EseUJBQUE7Q0FDQTtBQUNBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0NBQ0E7QUFDQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0NBQ0E7QUFDQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU291cmNlVmlldy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdlxcbiAgICA6Y2xhc3M9XFxcIlskLmNvbnRhaW5lciwgeyBbJC5kcmFnZ2luZ106IGRyYWdnaW5nIH1dXFxcIlxcbiAgICBAc2Nyb2xsPVxcXCJvblZpZXdwb3J0VXBkYXRlXFxcIlxcbiAgICBAbW91c2Vkb3duPVxcXCJvbkRyYWdTdGFydFxcXCJcXG4gID5cXG4gICAgPGRpdiA6c3R5bGU9XFxcInsgaGVpZ2h0OiBgJHtjb250ZW50Lmxlbmd0aCAqIGxpbmVIZWlnaHQgKyAyfXB4YCwgbWluV2lkdGg6IGAke21heFdpZHRofXB4YCB9XFxcIj5cXG4gICAgICA8dGFibGUgOnN0eWxlPVxcXCJ7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWAgfVxcXCI+XFxuICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgIDx0clxcbiAgICAgICAgICAgIHYtZm9yPVxcXCIobGluZURhdGEsIGluZGV4KSBpbiBkaXNwbGF5TGluZXNcXFwiXFxuICAgICAgICAgICAgOmtleT1cXFwiZGlzcGxheVJhbmdlWzBdICsgaW5kZXhcXFwiXFxuICAgICAgICAgICAgOmNsYXNzPVxcXCIkLmxpbmVcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8dGRcXG4gICAgICAgICAgICAgIHYtaWY9XFxcImxpbmVOdW1iZXJcXFwiXFxuICAgICAgICAgICAgICA6Y2xhc3M9XFxcIiQubGluZU51bWJlclxcXCJcXG4gICAgICAgICAgICAgIDpkYXRhLWxpbmU9XFxcImRpc3BsYXlSYW5nZVswXSArIGluZGV4ICsgMVxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XFxcIiQubGluZUNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW5cXG4gICAgICAgICAgICAgICAgdi1mb3I9XFxcIihjaHVuaywgaW5kZXgpIGluIGxpbmVEYXRhXFxcIlxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJC5jaHVuaywgeyBbJC5tYXBwZWRdOiBjaHVuay5pZCwgWyQuaG92ZXJpbmddOiBjaHVuay5pZCA9PT0gaG92ZXJpbmcgfV1cXFwiXFxuICAgICAgICAgICAgICAgIDp0aXRsZT1cXFwiY2h1bmsubmFtZXMgfCBuYW1lc1xcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblNlbGVjdChjaHVuaylcXFwiXFxuICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XFxcIm9uSG92ZXIoY2h1bmspXFxcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGU+e3tjaHVuay5jb250ZW50fX08L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgPC9zcGFuPjxici8+XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgICAgPC90YWJsZT5cXG4gICAgPC9kaXY+XFxuICAgIDxpZnJhbWUgcmVmPVxcXCJyZXNpemVEZXRlY3RvclxcXCJcXG4gICAgOmNsYXNzPVxcXCIkLnJlc2l6ZURldGVjdG9yXFxcIlxcbiAgICAvPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgaW1wb3J0IGNvbXBhY3QgZnJvbSAnbG9kYXNoL2NvbXBhY3QnXFxuICBpbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJ1xcblxcbiAgY29uc3QgTElORV9QQURESU5HID0gMTBcXG5cXG4gIGNvbnN0IERSQUdHSU5HX0ZBQ1RPUiA9IDJcXG5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG5cXG4gICAgZmlsdGVyczoge1xcblxcbiAgICAgIG5hbWVzKG5hbWVzKSB7XFxuICAgICAgICByZXR1cm4gY29tcGFjdChuYW1lcykuam9pbignLCcpXFxuICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG5cXG4gICAgICBjb250ZW50OiB7IHR5cGU6IEFycmF5LCByZXF1aXJlZDogdHJ1ZSB9LFxcbiAgICAgIC8vXFxuXFxuICAgICAgaG92ZXJpbmc6IHsgdHlwZTogU3RyaW5nIH0sXFxuICAgICAgLy9cXG5cXG4gICAgICBsaW5lTnVtYmVyOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXFxuICAgICAgLy9cXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcblxcbiAgICAgICAgbWF4V2lkdGg6IDAsXFxuICAgICAgICAvL1xcblxcbiAgICAgICAgdmlld3BvcnQ6IFswLCAwXSxcXG4gICAgICAgIC8vXFxuXFxuICAgICAgICBkcmFnZ2luZzogbnVsbCxcXG4gICAgICAgIC8vXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcblxcbiAgICAgIGRpc3BsYXlSYW5nZSgpIHtcXG4gICAgICAgIHJldHVybiBbXFxuICAgICAgICAgIE1hdGgubWF4KDAsIE1hdGguZmxvb3IoKHRoaXMudmlld3BvcnRbMF0gLSAyKSAvIHRoaXMubGluZUhlaWdodCkgLSBMSU5FX1BBRERJTkcpLFxcbiAgICAgICAgICBNYXRoLmZsb29yKHRoaXMudmlld3BvcnRbMV0gLyB0aGlzLmxpbmVIZWlnaHQpICsgMiAqIExJTkVfUEFERElORyxcXG4gICAgICAgIF1cXG4gICAgICB9LFxcblxcbiAgICAgIGRpc3BsYXlMaW5lcygpIHtcXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQuc2xpY2UodGhpcy5kaXNwbGF5UmFuZ2VbMF0sIHRoaXMuZGlzcGxheVJhbmdlWzBdICsgdGhpcy5kaXNwbGF5UmFuZ2VbMV0gKyAyKVxcbiAgICAgIH0sXFxuXFxuICAgICAgdHJhbnNsYXRlWSgpIHtcXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlSYW5nZVswXSAqIHRoaXMubGluZUhlaWdodFxcbiAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gMThcXG4gICAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBudWxsXFxuXFxuICAgICAgdGhpcy5vbkhvdmVyID0gZGVib3VuY2UodGhpcy5vbkhvdmVyKS5iaW5kKHRoaXMpXFxuICAgICAgdGhpcy5vbkRyYWdFbmQgPSBkZWJvdW5jZSh0aGlzLm9uRHJhZ0VuZCkuYmluZCh0aGlzKVxcbiAgICAgIHRoaXMub25EcmFnTW92ZSA9IGRlYm91bmNlKHRoaXMub25EcmFnTW92ZSkuYmluZCh0aGlzKVxcbiAgICAgIHRoaXMub25WaWV3cG9ydFVwZGF0ZSA9IHRoaXMub25WaWV3cG9ydFVwZGF0ZS5iaW5kKHRoaXMpXFxuICAgIH0sXFxuXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgdGhpcy5vblZpZXdwb3J0VXBkYXRlKClcXG5cXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRyYWdNb3ZlKVxcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRyYWdFbmQpXFxuXFxuICAgICAgdGhpcy4kcmVmcy5yZXNpemVEZXRlY3Rvci5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25WaWV3cG9ydFVwZGF0ZSlcXG4gICAgfSxcXG5cXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRyYWdNb3ZlKVxcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRyYWdFbmQpXFxuXFxuICAgICAgaWYgKHRoaXMuJHJlZnMucmVzaXplRGV0ZWN0b3IuY29udGVudFdpbmRvdykge1xcbiAgICAgICAgdGhpcy4kcmVmcy5yZXNpemVEZXRlY3Rvci5jb250ZW50V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25WaWV3cG9ydFVwZGF0ZSlcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIHdhdGNoOiB7XFxuXFxuICAgICAgY29udGVudCgpIHtcXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5tYXhXaWR0aCA9IHRoaXMuJGVsLnNjcm9sbFdpZHRoXFxuICAgICAgICB9KVxcbiAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG5cXG4gICAgICBzY3JvbGxUbyhvZmZzZXQpIHtcXG4gICAgICAgIGlmICh0aGlzLmxhc3RTY3JvbGxUb3AgPT09IG9mZnNldCkge1xcbiAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IG9mZnNldFxcbiAgICAgICAgdGhpcy4kZWwuc2Nyb2xsVG9wID0gb2Zmc2V0XFxuICAgICAgfSxcXG5cXG4gICAgICBzY3JvbGxUb0xpbmUobGluZSkge1xcbiAgICAgICAgdGhpcy5zY3JvbGxUbyhsaW5lICogdGhpcy5saW5lSGVpZ2h0IC0gdGhpcy5saW5lSGVpZ2h0IC8gMiArIDIgLSB0aGlzLiRlbC5vZmZzZXRIZWlnaHQgLyAyKVxcbiAgICAgIH0sXFxuXFxuICAgICAgb25WaWV3cG9ydFVwZGF0ZSgpIHtcXG4gICAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBvZmZzZXRIZWlnaHQgfSA9IHRoaXMuJGVsXFxuXFxuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gW3Njcm9sbFRvcCwgb2Zmc2V0SGVpZ2h0XVxcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXFxuXFxuICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGwnLCBzY3JvbGxUb3ApXFxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XFxuICAgICAgICAgIHRoaXMubWF4V2lkdGggPSBNYXRoLm1heCh0aGlzLm1heFdpZHRoLCB0aGlzLiRlbC5zY3JvbGxXaWR0aClcXG4gICAgICAgIH0pXFxuICAgICAgfSxcXG5cXG4gICAgICBvblNlbGVjdChjaHVuaykge1xcbiAgICAgICAgaWYgKGNodW5rLmlkKSB7XFxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGNodW5rLm1hcHBpbmcpXFxuICAgICAgICB9XFxuICAgICAgfSxcXG5cXG4gICAgICBvbkhvdmVyKGNodW5rKSB7XFxuICAgICAgICBpZiAoY2h1bmsuaWQpIHtcXG4gICAgICAgICAgdGhpcy4kZW1pdCgnaG92ZXInLCBjaHVuay5pZClcXG4gICAgICAgIH1cXG4gICAgICB9LFxcblxcbiAgICAgIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XFxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5idXR0b24pIHtcXG4gICAgICAgICAgcmV0dXJuXFxuICAgICAgICB9XFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXFxuICAgICAgICB0aGlzLmRyYWdnaW5nID0ge1xcbiAgICAgICAgICB4OiB0aGlzLiRlbC5zY3JvbGxMZWZ0ICsgRFJBR0dJTkdfRkFDVE9SICogZXZlbnQuY2xpZW50WCxcXG4gICAgICAgICAgeTogdGhpcy4kZWwuc2Nyb2xsVG9wICsgRFJBR0dJTkdfRkFDVE9SICogZXZlbnQuY2xpZW50WSxcXG4gICAgICAgIH1cXG4gICAgICB9LFxcblxcbiAgICAgIG9uRHJhZ01vdmUoZXZlbnQpIHtcXG4gICAgICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xcbiAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMuJGVsLnNjcm9sbExlZnQgPSB0aGlzLmRyYWdnaW5nLnggLSBEUkFHR0lOR19GQUNUT1IgKiBldmVudC5jbGllbnRYXFxuICAgICAgICB0aGlzLiRlbC5zY3JvbGxUb3AgPSB0aGlzLmRyYWdnaW5nLnkgLSBEUkFHR0lOR19GQUNUT1IgKiBldmVudC5jbGllbnRZXFxuICAgICAgfSxcXG5cXG4gICAgICBvbkRyYWdFbmQoKSB7XFxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gbnVsbFxcbiAgICAgIH0sXFxuICAgIH0sXFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIG1vZHVsZT1cXFwiJFxcXCI+XFxuICAuY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIH1cXG4gIC5jb250YWluZXIuZHJhZ2dpbmcge1xcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XFxuICB9XFxuICAubGluZSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgY29sb3I6ICMyMjI7XFxuICB9XFxuICAubGluZU51bWJlciB7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgY29sb3I6ICM5OTk7XFxuICB9XFxuICAubGluZU51bWJlcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGluZSk7XFxuICB9XFxuICAuY2h1bmsubWFwcGVkIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLmNodW5rLmhvdmVyaW5nIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucmVzaXplRGV0ZWN0b3Ige1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJjb250YWluZXJfWFV0bWczdFRcIixcblx0XCJkcmFnZ2luZ1wiOiBcImRyYWdnaW5nXzM0b1VtUmdZXCIsXG5cdFwibGluZVwiOiBcImxpbmVfM2JPd3ZwLTRcIixcblx0XCJsaW5lTnVtYmVyXCI6IFwibGluZU51bWJlcl8zc3hmMTNGR1wiLFxuXHRcImNodW5rXCI6IFwiY2h1bmtfV3A3UzIySV9cIixcblx0XCJtYXBwZWRcIjogXCJtYXBwZWRfMm5YWmNwcnFcIixcblx0XCJob3ZlcmluZ1wiOiBcImhvdmVyaW5nX0xNTzhNempWXCIsXG5cdFwicmVzaXplRGV0ZWN0b3JcIjogXCJyZXNpemVEZXRlY3Rvcl8zNVA2WXdKWFwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYXBwXzNtbEpadVVVXzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdl9iVHdubHpKSl8xIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6ICNiYmI7XFxuICBiYWNrZ3JvdW5kOiAjNDQ0O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xcbn1cXG4ubmF2TWVudV8zNUZ3a3MwSV8xIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsbDogI2JiYjtcXG59XFxuLmZpbGVMaXN0XzJhX1ZzWUQ5XzEge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA2cHg7XFxuICBsZWZ0OiA2cHg7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTJweCk7XFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xcbiAgY29sb3I6ICM4ODg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5maWxlTGlzdEl0ZW1fMkZiNFAtLXBfMSB7XFxuICBwYWRkaW5nOiA1cHggMTJweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5maWxlTGlzdEl0ZW1fMkZiNFAtLXBfMTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbn1cXG4uZmlsZUxpc3RJdGVtXzJGYjRQLS1wXzEuYWN0aXZlXzJNU2ttcVJmXzEge1xcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uZmlsZUxpc3RJdGVtXzJGYjRQLS1wXzEubWlzc2luZ0NvbnRlbnRfM3RvcE1xU3hfMSB7XFxuICBjb2xvcjogI0NENUM1QztcXG59XFxuLm5hdlRpdGxlX0xBQmNSbkFvXzEge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5uYXZUaXRsZV9MQUJjUm5Bb18xOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogIzc3NztcXG59XFxuLnBhbmVsQnV0dG9uR3JvdXBfMkdPQUswd3ZfMSB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5wYW5lbEJ1dHRvbl92ZDRpX2dxNF8xIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBjb2xvcjogI2JiYjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnBhbmVsQnV0dG9uX3ZkNGlfZ3E0XzEuYWN0aXZlXzJNU2ttcVJmXzEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY29udGFpbmVyXzNJbTdqNzJpXzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmNvbnRhaW5lcl8zSW03ajcyaV8xID4gKiB7XFxuICBmbGV4OiAxIGF1dG87XFxuICB3aWR0aDogMXB4O1xcbn1cXG4ucHJvbW90ZVRleHRfMnhWU09OTWdfMSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogI2FhYTtcXG59XFxuLnByb21vdGVUaXBzX0ROYjlmdDBUXzEge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvamFzb24vc291cmNlLW1hcC12aWV3ZXIvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaU5BO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7Q0FDQTtBQUNBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0NBQ0E7QUFDQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7Q0FDQTtBQUNBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7Q0FDQTtBQUNBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtDQUNBO0FBQ0E7RUFDQSxvQkFBQTtDQUNBO0FBQ0E7RUFDQSxvQkFBQTtFQUNBLFlBQUE7Q0FDQTtBQUNBO0VBQ0EsZUFBQTtDQUNBO0FBQ0E7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtDQUNBO0FBQ0E7RUFDQSxpQkFBQTtDQUNBO0FBQ0E7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtDQUNBO0FBQ0E7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0NBQ0E7QUFDQTtFQUNBLGFBQUE7Q0FDQTtBQUNBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtDQUNBO0FBQ0E7RUFDQSxhQUFBO0VBQ0EsV0FBQTtDQUNBO0FBQ0E7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0NBQ0E7QUFDQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJBcHAudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgOmNsYXNzPVxcXCIkLmFwcFxcXCI+XFxuICAgIDxkaXYgOmNsYXNzPVxcXCIkLm5hdlxcXCI+XFxuICAgICAgPE1lbnUgdi1pZj1cXFwibW9kZWwuc291cmNlcy5sZW5ndGhcXFwiIDpjbGFzcz1cXFwiJC5uYXZNZW51XFxcIiBAY2xpY2submF0aXZlPVxcXCJvblRvZ2dsZUZpbGVMaXN0XFxcIiAvPlxcbiAgICAgIDx1bCB2LWlmPVxcXCJkaXNwbGF5RmlsZUxpc3RcXFwiIDpjbGFzcz1cXFwiJC5maWxlTGlzdFxcXCIgQG1vdXNlZG93bi5zdG9wPlxcbiAgICAgICAgPGxpXFxuICAgICAgICAgIHYtZm9yPVxcXCIoc3JjLCBpbmRleCkgaW4gbW9kZWwuc291cmNlc1xcXCJcXG4gICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgIDpjbGFzcz1cXFwiWyQuZmlsZUxpc3RJdGVtLCB7XFxuICAgICAgICAgICAgWyQuYWN0aXZlXTogbW9kZWwuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXgsXFxuICAgICAgICAgICAgWyQubWlzc2luZ0NvbnRlbnRdOiAhbW9kZWwuc291cmNlQ29udGVudHNbaW5kZXhdICYmICFtb2RlbC5vdmVycmlkZXNbaW5kZXhdLFxcbiAgICAgICAgICB9XVxcXCJcXG4gICAgICAgICAgOnRpdGxlPVxcXCJzcmNcXFwiXFxuICAgICAgICAgIEBjbGljaz1cXFwib25TZWxlY3RPcmlnaW5hbChpbmRleClcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIHt7c3JjfX1cXG4gICAgICAgIDwvbGk+XFxuICAgICAgPC91bD5cXG4gICAgICA8c3BhbiA6Y2xhc3M9XFxcIiQubmF2VGl0bGVcXFwiIDp0aXRsZT1cXFwibW9kZWwuc2VsZWN0ZWRGaWxlTmFtZVxcXCI+XFxuICAgICAgICB7e21vZGVsLnNlbGVjdGVkRmlsZU5hbWV9fVxcbiAgICAgIDwvc3Bhbj5cXG4gICAgICA8c3BhbiA6Y2xhc3M9XFxcIiQucGFuZWxCdXR0b25Hcm91cFxcXCI+XFxuICAgICAgICA8YVxcbiAgICAgICAgICB2LWZvcj1cXFwiaXRlbSBpbiBwYW5lbHNcXFwiXFxuICAgICAgICAgIDprZXk9XFxcIml0ZW0ubmFtZVxcXCJcXG4gICAgICAgICAgOmNsYXNzPVxcXCJbJC5wYW5lbEJ1dHRvbiwgeyBbJC5hY3RpdmVdOiAhaXRlbS5oaWRkZW4gJiYgZW5hYmxlZFBhbmVsc1tpdGVtLm5hbWVdIH1dXFxcIlxcbiAgICAgICAgICBocmVmPVxcXCJqYXZhc2NyaXB0OlxcXCJcXG4gICAgICAgICAgQGNsaWNrPVxcXCJ0b2dnbGVQYW5lbChpdGVtLm5hbWUpXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICB7e2l0ZW0uZGlzcGxheU5hbWV9fVxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgOmNsYXNzPVxcXCIkLmNvbnRhaW5lclxcXCI+XFxuICAgICAgPFNvdXJjZVBhbmVsXFxuICAgICAgICB2LWZvcj1cXFwiaXRlbSBpbiBwYW5lbHNcXFwiXFxuICAgICAgICB2LWlmPVxcXCIhaXRlbS5oaWRkZW4gJiYgZW5hYmxlZFBhbmVsc1tpdGVtLm5hbWVdXFxcIlxcbiAgICAgICAgOmtleT1cXFwiaXRlbS5uYW1lXFxcIlxcbiAgICAgICAgOnJlZj1cXFwiaXRlbS5uYW1lXFxcIlxcbiAgICAgICAgOmNvbnRlbnQ9XFxcIml0ZW0uY29udGVudFxcXCJcXG4gICAgICAgIDpob3ZlcmluZz1cXFwiaG92ZXJpbmdcXFwiXFxuICAgICAgICA6bGluZS1udW1iZXI9XFxcIml0ZW0ubGluZU51bWJlclxcXCJcXG4gICAgICAgIEBob3Zlcj1cXFwib25Ib3ZlclxcXCJcXG4gICAgICAgIEBzZWxlY3Q9XFxcIm9uU2VsZWN0KCRldmVudCwgaXRlbS5uYW1lKVxcXCJcXG4gICAgICAgIEBzY3JvbGw9XFxcIm9uU2Nyb2xsKCRldmVudCwgaXRlbS5uYW1lKVxcXCJcXG4gICAgICAgIEB1cGxvYWQ9XFxcIm9uVXBsb2FkKCRldmVudCwgaXRlbS5uYW1lKVxcXCJcXG4gICAgICA+XFxuICAgICAgICA8ZGl2IDpjbGFzcz1cXFwiJC5wcm9tb3RlVGV4dFxcXCI+e3tpdGVtLnByb21vdGVUZXh0fX08L2Rpdj5cXG4gICAgICAgIDxkaXYgdi1pZj1cXFwiaXRlbS5wcm9tb3RlVGlwc1xcXCIgOmNsYXNzPVxcXCIkLnByb21vdGVUaXBzXFxcIj57e2l0ZW0ucHJvbW90ZVRpcHN9fTwvZGl2PlxcbiAgICAgIDwvU291cmNlUGFuZWw+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcXG5cXG4gIGltcG9ydCBNZW51IGZyb20gJy4vaWNvbnMvTWVudSdcXG4gIGltcG9ydCBTb3VyY2VQYW5lbCBmcm9tICcuL3NvdXJjZS9Tb3VyY2VQYW5lbCdcXG4gIGltcG9ydCBjcmVhdGVNb2RlbCBmcm9tICcuLi9tb2RlbHMnXFxuXFxuICBjb25zdCBTQ1JPTExfU1lOQyA9IHtcXG4gICAgZ2VuZXJhdGVkOiAnc291cmNlTWFwJyxcXG4gICAgc291cmNlTWFwOiAnZ2VuZXJhdGVkJyxcXG4gIH1cXG5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG5cXG4gICAgY29tcG9uZW50czogeyBNZW51LCBTb3VyY2VQYW5lbCB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7XFxuXFxuICAgICAgICBtb2RlbDogY3JlYXRlTW9kZWwoKSxcXG5cXG4gICAgICAgIGhvdmVyaW5nOiBudWxsLFxcblxcbiAgICAgICAgZGlzcGxheUZpbGVMaXN0OiBmYWxzZSxcXG5cXG4gICAgICAgIGVuYWJsZWRQYW5lbHM6IHsgZ2VuZXJhdGVkOiB0cnVlLCBzb3VyY2VNYXA6IHRydWUsIG9yaWdpbmFsOiB0cnVlIH0sXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcblxcbiAgICAgIHBhbmVscygpIHtcXG4gICAgICAgIGNvbnN0IHsgbW9kZWwgfSA9IHRoaXNcXG5cXG4gICAgICAgIHJldHVybiBbXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0dlbmVyYXRlZCcsXFxuICAgICAgICAgICAgbmFtZTogJ2dlbmVyYXRlZCcsXFxuICAgICAgICAgICAgY29udGVudDogbW9kZWwuZ2VuZXJhdGVkVmlldyxcXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiB0cnVlLFxcbiAgICAgICAgICAgIHByb21vdGVUZXh0OiBgRHJvcCAke21vZGVsLmdlbmVyYXRlZEZpbGVOYW1lIHx8ICdnZW5lcmF0ZWQgZmlsZSd9IGhlcmVgLFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICB7XFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdTb3VyY2VNYXAnLFxcbiAgICAgICAgICAgIG5hbWU6ICdzb3VyY2VNYXAnLFxcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1vZGVsLm1hcHBpbmdzVmlldyxcXG4gICAgICAgICAgICBwcm9tb3RlVGV4dDogYERyb3AgJHttb2RlbC5zb3VyY2VNYXBGaWxlTmFtZSB8fCAnc291cmNlbWFwIGZpbGUnfSBoZXJlYCxcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnT3JpZ2luYWwnLFxcbiAgICAgICAgICAgIG5hbWU6ICdvcmlnaW5hbCcsXFxuICAgICAgICAgICAgaGlkZGVuOiBtb2RlbC5zZWxlY3RlZEZpbGVOYW1lID09IG51bGwsXFxuICAgICAgICAgICAgY29udGVudDogbW9kZWwuc2VsZWN0ZWRWaWV3LFxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IHRydWUsXFxuICAgICAgICAgICAgcHJvbW90ZVRleHQ6IG1vZGVsLnNlbGVjdGVkRmlsZU5hbWUgJiYgYERyb3AgJHtwYXRoLmJhc2VuYW1lKG1vZGVsLnNlbGVjdGVkRmlsZU5hbWUpfSBoZXJlYCxcXG4gICAgICAgICAgICBwcm9tb3RlVGlwczogbW9kZWwuc2VsZWN0ZWRGaWxlTmFtZSxcXG4gICAgICAgICAgfSxcXG4gICAgICAgIF1cXG4gICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgIHRoaXMub25IaWRlRmlsZUxpc3QgPSB0aGlzLm9uSGlkZUZpbGVMaXN0LmJpbmQodGhpcylcXG4gICAgfSxcXG5cXG4gICAgbW91bnRlZCgpIHtcXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbkhpZGVGaWxlTGlzdClcXG4gICAgfSxcXG5cXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3cnLCB0aGlzLm9uSGlkZUZpbGVMaXN0KVxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuXFxuICAgICAgb25VcGxvYWQoZmlsZXMsIHR5cGUpIHtcXG4gICAgICAgIHRoaXMuZGlzcGxheUZpbGVMaXN0ID0gZmFsc2VcXG4gICAgICAgIHRoaXMubW9kZWwuaGFuZGxlRmlsZXMoZmlsZXMsIHR5cGUpXFxuICAgICAgfSxcXG5cXG4gICAgICBvbkhvdmVyKGlkKSB7XFxuICAgICAgICB0aGlzLmhvdmVyaW5nID0gaWRcXG4gICAgICB9LFxcblxcbiAgICAgIG9uU2VsZWN0KG1hcHBpbmcsIHR5cGUpIHtcXG4gICAgICAgIGlmICh0eXBlID09PSAnb3JpZ2luYWwnKSB7XFxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9MaW5lKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSwgJ2dlbmVyYXRlZCcpXFxuICAgICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvTGluZShtYXBwaW5nLmdlbmVyYXRlZExpbmUsICdzb3VyY2VNYXAnKVxcbiAgICAgICAgfVxcbiAgICAgICAgdGhpcy5tb2RlbC5zZWxlY3RlZEluZGV4ID0gbWFwcGluZy5zb3VyY2VcXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0xpbmUobWFwcGluZy5vcmlnaW5hbExpbmUsICdvcmlnaW5hbCcpXFxuICAgICAgICB9KVxcbiAgICAgIH0sXFxuXFxuICAgICAgb25TY3JvbGwoc2Nyb2xsVG9wLCB0eXBlKSB7XFxuICAgICAgICBmb3IgKGNvbnN0IHBhbmVsIG9mIHRoaXMuJHJlZnNbU0NST0xMX1NZTkNbdHlwZV1dIHx8IFtdKSB7XFxuICAgICAgICAgIHBhbmVsLnNjcm9sbFRvKHNjcm9sbFRvcClcXG4gICAgICAgIH1cXG4gICAgICB9LFxcblxcbiAgICAgIG9uVG9nZ2xlRmlsZUxpc3QoKSB7XFxuICAgICAgICB0aGlzLmRpc3BsYXlGaWxlTGlzdCA9ICF0aGlzLmRpc3BsYXlGaWxlTGlzdFxcbiAgICAgIH0sXFxuXFxuICAgICAgb25IaWRlRmlsZUxpc3QoKSB7XFxuICAgICAgICB0aGlzLmRpc3BsYXlGaWxlTGlzdCA9IGZhbHNlXFxuICAgICAgfSxcXG5cXG4gICAgICBvblNlbGVjdE9yaWdpbmFsKGluZGV4KSB7XFxuICAgICAgICB0aGlzLmRpc3BsYXlGaWxlTGlzdCA9IGZhbHNlXFxuICAgICAgICB0aGlzLm1vZGVsLnNlbGVjdGVkSW5kZXggPSBpbmRleFxcbiAgICAgIH0sXFxuXFxuICAgICAgc2Nyb2xsVG9MaW5lKGxpbmUsIHRhcmdldCkge1xcbiAgICAgICAgZm9yIChjb25zdCBwYW5lbCBvZiB0aGlzLiRyZWZzW3RhcmdldF0gfHwgW10pIHtcXG4gICAgICAgICAgcGFuZWwuc2Nyb2xsVG9MaW5lKGxpbmUpXFxuICAgICAgICB9XFxuICAgICAgfSxcXG5cXG4gICAgICB0b2dnbGVQYW5lbCh0eXBlKSB7XFxuICAgICAgICB0aGlzLmVuYWJsZWRQYW5lbHNbdHlwZV0gPSAhdGhpcy5lbmFibGVkUGFuZWxzW3R5cGVdXFxuICAgICAgfSxcXG4gICAgfSxcXG4gIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgfVxcbiAgKixcXG4gICo6YmVmb3JlLFxcbiAgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAqOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgfVxcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6ICNiYmI7XFxuICB9XFxuICAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48c3R5bGUgbW9kdWxlPVxcXCIkXFxcIj5cXG4gIC5hcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm5hdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGNvbG9yOiAjYmJiO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMik7XFxuICB9XFxuICAubmF2TWVudSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbGw6ICNiYmI7XFxuICB9XFxuICAuZmlsZUxpc3Qge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNnB4O1xcbiAgICBsZWZ0OiA2cHg7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEycHgpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA0cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAuNik7XFxuICAgIGNvbG9yOiAjODg4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgfVxcbiAgLmZpbGVMaXN0SXRlbSB7XFxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLmZpbGVMaXN0SXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxuICB9XFxuICAuZmlsZUxpc3RJdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgfVxcbiAgLmZpbGVMaXN0SXRlbS5taXNzaW5nQ29udGVudCB7XFxuICAgIGNvbG9yOiAjQ0Q1QzVDO1xcbiAgfVxcbiAgLm5hdlRpdGxlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB9XFxuICAubmF2VGl0bGU6OnNlbGVjdGlvbiB7XFxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XFxuICB9XFxuICAucGFuZWxCdXR0b25Hcm91cCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB9XFxuICAucGFuZWxCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIGNvbG9yOiAjYmJiO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxuICAucGFuZWxCdXR0b24uYWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICAuY29udGFpbmVyID4gKiB7XFxuICAgIGZsZXg6IDEgYXV0bztcXG4gICAgd2lkdGg6IDFweDtcXG4gIH1cXG4gIC5wcm9tb3RlVGV4dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBjb2xvcjogI2FhYTtcXG4gIH1cXG4gIC5wcm9tb3RlVGlwcyB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogLjllbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGNvbG9yOiAjOTk5O1xcbiAgfVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImFwcFwiOiBcImFwcF8zbWxKWnVVVV8xXCIsXG5cdFwibmF2XCI6IFwibmF2X2JUd25sekpKXzFcIixcblx0XCJuYXZNZW51XCI6IFwibmF2TWVudV8zNUZ3a3MwSV8xXCIsXG5cdFwiZmlsZUxpc3RcIjogXCJmaWxlTGlzdF8yYV9Wc1lEOV8xXCIsXG5cdFwiZmlsZUxpc3RJdGVtXCI6IFwiZmlsZUxpc3RJdGVtXzJGYjRQLS1wXzFcIixcblx0XCJhY3RpdmVcIjogXCJhY3RpdmVfMk1Ta21xUmZfMVwiLFxuXHRcIm1pc3NpbmdDb250ZW50XCI6IFwibWlzc2luZ0NvbnRlbnRfM3RvcE1xU3hfMVwiLFxuXHRcIm5hdlRpdGxlXCI6IFwibmF2VGl0bGVfTEFCY1JuQW9fMVwiLFxuXHRcInBhbmVsQnV0dG9uR3JvdXBcIjogXCJwYW5lbEJ1dHRvbkdyb3VwXzJHT0FLMHd2XzFcIixcblx0XCJwYW5lbEJ1dHRvblwiOiBcInBhbmVsQnV0dG9uX3ZkNGlfZ3E0XzFcIixcblx0XCJjb250YWluZXJcIjogXCJjb250YWluZXJfM0ltN2o3MmlfMVwiLFxuXHRcInByb21vdGVUZXh0XCI6IFwicHJvbW90ZVRleHRfMnhWU09OTWdfMVwiLFxuXHRcInByb21vdGVUaXBzXCI6IFwicHJvbW90ZVRpcHNfRE5iOWZ0MFRfMVwiXG59OyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLiQuYXBwIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzOiBfdm0uJC5uYXYgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLm1vZGVsLnNvdXJjZXMubGVuZ3RoXG4gICAgICAgICAgPyBfYyhcIk1lbnVcIiwge1xuICAgICAgICAgICAgICBjbGFzczogX3ZtLiQubmF2TWVudSxcbiAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uVG9nZ2xlRmlsZUxpc3QoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uZGlzcGxheUZpbGVMaXN0XG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS4kLmZpbGVMaXN0LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ubW9kZWwuc291cmNlcywgZnVuY3Rpb24oc3JjLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJC5maWxlTGlzdEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgKChfb2JqID0ge30pLFxuICAgICAgICAgICAgICAgICAgICAgIChfb2JqW192bS4kLmFjdGl2ZV0gPSBfdm0ubW9kZWwuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgIChfb2JqW192bS4kLm1pc3NpbmdDb250ZW50XSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLm1vZGVsLnNvdXJjZUNvbnRlbnRzW2luZGV4XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5tb2RlbC5vdmVycmlkZXNbaW5kZXhdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfb2JqKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogc3JjIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uU2VsZWN0T3JpZ2luYWwoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3Moc3JjKSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB2YXIgX29ialxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uJC5uYXZUaXRsZSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0ubW9kZWwuc2VsZWN0ZWRGaWxlTmFtZSB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnNlbGVjdGVkRmlsZU5hbWUpICsgXCJcXG4gICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICB7IGNsYXNzOiBfdm0uJC5wYW5lbEJ1dHRvbkdyb3VwIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5wYW5lbHMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgX3ZtLiQucGFuZWxCdXR0b24sXG4gICAgICAgICAgICAgICAgICAoKF9vYmogPSB7fSksXG4gICAgICAgICAgICAgICAgICAoX29ialtfdm0uJC5hY3RpdmVdID1cbiAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaGlkZGVuICYmIF92bS5lbmFibGVkUGFuZWxzW2l0ZW0ubmFtZV0pLFxuICAgICAgICAgICAgICAgICAgX29iailcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDpcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVQYW5lbChpdGVtLm5hbWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhpdGVtLmRpc3BsYXlOYW1lKSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdmFyIF9vYmpcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzOiBfdm0uJC5jb250YWluZXIgfSxcbiAgICAgIF92bS5fbChfdm0ucGFuZWxzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiAhaXRlbS5oaWRkZW4gJiYgX3ZtLmVuYWJsZWRQYW5lbHNbaXRlbS5uYW1lXVxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiU291cmNlUGFuZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIHJlZjogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBob3ZlcmluZzogX3ZtLmhvdmVyaW5nLFxuICAgICAgICAgICAgICAgICAgXCJsaW5lLW51bWJlclwiOiBpdGVtLmxpbmVOdW1iZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBob3ZlcjogX3ZtLm9uSG92ZXIsXG4gICAgICAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0ub25TZWxlY3QoJGV2ZW50LCBpdGVtLm5hbWUpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2Nyb2xsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLm9uU2Nyb2xsKCRldmVudCwgaXRlbS5uYW1lKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHVwbG9hZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5vblVwbG9hZCgkZXZlbnQsIGl0ZW0ubmFtZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0uJC5wcm9tb3RlVGV4dCB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ucHJvbW90ZVRleHQpKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgaXRlbS5wcm9tb3RlVGlwc1xuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0uJC5wcm9tb3RlVGlwcyB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnByb21vdGVUaXBzKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIH0pXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzhjYWI5YzFcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczogX3ZtLiQuY29udGFpbmVyLFxuICAgICAgb246IHtcbiAgICAgICAgZHJhZ292ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH0sXG4gICAgICAgIGRyb3A6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgcmV0dXJuIF92bS5vbkRyb3BGaWxlcygkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5jb250ZW50XG4gICAgICAgID8gX2MoXCJTb3VyY2VWaWV3XCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJzb3VyY2VWaWV3XCIsXG4gICAgICAgICAgICBjbGFzczogX3ZtLiQuc291cmNlVmlldyxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IF92bS5jb250ZW50LFxuICAgICAgICAgICAgICBob3ZlcmluZzogX3ZtLmhvdmVyaW5nLFxuICAgICAgICAgICAgICBcImxpbmUtbnVtYmVyXCI6IF92bS5saW5lTnVtYmVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaG92ZXI6IF92bS5vbkhvdmVyLFxuICAgICAgICAgICAgICBzZWxlY3Q6IF92bS5vblNlbGVjdCxcbiAgICAgICAgICAgICAgc2Nyb2xsOiBfdm0ub25TY3JvbGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS4kLnByb21vdGUgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uJC5wcm9tb3RlRmlsZVBpY2tlcixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG11bHRpcGxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uU2VsZWN0RmlsZXMgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLiQucHJvbW90ZUNvbnRlbnQgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxuICAgICAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LThmNDVkNzkwXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6IFtcbiAgICAgICAgX3ZtLiQuY29udGFpbmVyLFxuICAgICAgICAoKF9vYmogPSB7fSksIChfb2JqW192bS4kLmRyYWdnaW5nXSA9IF92bS5kcmFnZ2luZyksIF9vYmopXG4gICAgICBdLFxuICAgICAgb246IHsgc2Nyb2xsOiBfdm0ub25WaWV3cG9ydFVwZGF0ZSwgbW91c2Vkb3duOiBfdm0ub25EcmFnU3RhcnQgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgaGVpZ2h0OiBfdm0uY29udGVudC5sZW5ndGggKiBfdm0ubGluZUhlaWdodCArIDIgKyBcInB4XCIsXG4gICAgICAgICAgICBtaW5XaWR0aDogX3ZtLm1heFdpZHRoICsgXCJweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7IHN0eWxlOiB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKFwiICsgX3ZtLnRyYW5zbGF0ZVkgKyBcInB4KVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGlzcGxheUxpbmVzLCBmdW5jdGlvbihsaW5lRGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogX3ZtLmRpc3BsYXlSYW5nZVswXSArIGluZGV4LCBjbGFzczogX3ZtLiQubGluZSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpbmVOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS4kLmxpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1saW5lXCI6IF92bS5kaXNwbGF5UmFuZ2VbMF0gKyBpbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiBfdm0uJC5saW5lQ29udGVudCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wobGluZURhdGEsIGZ1bmN0aW9uKGNodW5rLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kLmNodW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoX29iaiA9IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX29ialtfdm0uJC5tYXBwZWRdID0gY2h1bmsuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfb2JqW192bS4kLmhvdmVyaW5nXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHVuay5pZCA9PT0gX3ZtLmhvdmVyaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLl9mKFwibmFtZXNcIikoY2h1bmsubmFtZXMpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uU2VsZWN0KGNodW5rKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkhvdmVyKGNodW5rKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtbX3ZtLl92KF92bS5fcyhjaHVuay5jb250ZW50KSldXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9vYmpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlmcmFtZVwiLCB7IHJlZjogXCJyZXNpemVEZXRlY3RvclwiLCBjbGFzczogX3ZtLiQucmVzaXplRGV0ZWN0b3IgfSlcbiAgICBdXG4gIClcbiAgdmFyIF9vYmpcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWJhZDExNGJlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHAudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImQ3ZGU0YjFjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHAudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImxvY2FsSWRlbnROYW1lXFxcIjpcXFwiW2xvY2FsXV9baGFzaDpiYXNlNjQ6OF1cXFwiLFxcXCJpbXBvcnRMb2FkZXJzXFxcIjoxLFxcXCJtb2R1bGVzXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU291cmNlUGFuZWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjZjNjVjOGI4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwibG9jYWxJZGVudE5hbWVcXFwiOlxcXCJbbG9jYWxdX1toYXNoOmJhc2U2NDo4XVxcXCIsXFxcImltcG9ydExvYWRlcnNcXFwiOjEsXFxcIm1vZHVsZXNcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Tb3VyY2VQYW5lbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImxvY2FsSWRlbnROYW1lXFxcIjpcXFwiW2xvY2FsXV9baGFzaDpiYXNlNjQ6OF1cXFwiLFxcXCJpbXBvcnRMb2FkZXJzXFxcIjoxLFxcXCJtb2R1bGVzXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU291cmNlUGFuZWwudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImxvY2FsSWRlbnROYW1lXFxcIjpcXFwiW2xvY2FsXV9baGFzaDpiYXNlNjQ6OF1cXFwiLFxcXCJpbXBvcnRMb2FkZXJzXFxcIjoxLFxcXCJtb2R1bGVzXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU291cmNlVmlldy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWY1NDIxMDBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlLFxcXCJsb2NhbElkZW50TmFtZVxcXCI6XFxcIltsb2NhbF1fW2hhc2g6YmFzZTY0OjhdXFxcIixcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibW9kdWxlc1xcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NvdXJjZVZpZXcudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlLFxcXCJsb2NhbElkZW50TmFtZVxcXCI6XFxcIltsb2NhbF1fW2hhc2g6YmFzZTY0OjhdXFxcIixcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibW9kdWxlc1xcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NvdXJjZVZpZXcudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImxvY2FsSWRlbnROYW1lXFxcIjpcXFwiW2xvY2FsXV9baGFzaDpiYXNlNjQ6OF1fMVxcXCIsXFxcImltcG9ydExvYWRlcnNcXFwiOjEsXFxcIm1vZHVsZXNcXFwiOnRydWV9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9BcHAudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIzNzljY2YzXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwibG9jYWxJZGVudE5hbWVcXFwiOlxcXCJbbG9jYWxdX1toYXNoOmJhc2U2NDo4XV8xXFxcIixcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibW9kdWxlc1xcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0FwcC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImxvY2FsSWRlbnROYW1lXFxcIjpcXFwiW2xvY2FsXV9baGFzaDpiYXNlNjQ6OF1fMVxcXCIsXFxcImltcG9ydExvYWRlcnNcXFwiOjEsXFxcIm1vZHVsZXNcXFwiOnRydWV9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9BcHAudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIGNzc01vZHVsZXMgPSB7fVxubW9kdWxlLmhvdCAmJiBtb2R1bGUuaG90LmFjY2VwdChbXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwibG9jYWxJZGVudE5hbWVcXFwiOlxcXCJbbG9jYWxdX1toYXNoOmJhc2U2NDo4XV8xXFxcIixcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibW9kdWxlc1xcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0FwcC52dWVcIl0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9sZExvY2FscyA9IGNzc01vZHVsZXNbXCIkXCJdXG4gIGlmICghb2xkTG9jYWxzKSByZXR1cm5cbiAgdmFyIG5ld0xvY2FscyA9IHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwibG9jYWxJZGVudE5hbWVcXFwiOlxcXCJbbG9jYWxdX1toYXNoOmJhc2U2NDo4XV8xXFxcIixcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibW9kdWxlc1xcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0FwcC52dWVcIilcbiAgaWYgKEpTT04uc3RyaW5naWZ5KG5ld0xvY2FscykgPT09IEpTT04uc3RyaW5naWZ5KG9sZExvY2FscykpIHJldHVyblxuICBjc3NNb2R1bGVzW1wiJFwiXSA9IG5ld0xvY2Fsc1xuICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM4Y2FiOWMxXCIpXG59KVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxuICBjc3NNb2R1bGVzW1wiJFwiXSA9IHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwibG9jYWxJZGVudE5hbWVcXFwiOlxcXCJbbG9jYWxdX1toYXNoOmJhc2U2NDo4XV8xXFxcIixcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibW9kdWxlc1xcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0FwcC52dWVcIilcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIiRcIiwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNzc01vZHVsZXNbXCIkXCJdIH19KVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BcHAudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BcHAudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM4Y2FiOWMxXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcY29tcG9uZW50c1xcXFxBcHAudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM4Y2FiOWMxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGlmIChtb2R1bGUuaG90LmRhdGEuY3NzTW9kdWxlcyAmJiBPYmplY3Qua2V5cyhtb2R1bGUuaG90LmRhdGEuY3NzTW9kdWxlcykgIT09IE9iamVjdC5rZXlzKGNzc01vZHVsZXMpKSB7XG4gICAgICBkZWxldGUgQ29tcG9uZW50Lm9wdGlvbnMuX0N0b3JcbiAgICB9XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zOGNhYjljMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkYXRhLmNzc01vZHVsZXMgPSBjc3NNb2R1bGVzXG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3N2Zycse2F0dHJzOntcImhlaWdodFwiOlwiMjRcIixcIndpZHRoXCI6XCIyNFwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNMCAwaDI0djI0SDB6XCIsXCJmaWxsXCI6XCJub25lXCJ9fSksX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3pcIn19KV0pfTt2YXIgdG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7cmV0dXJuIFwiQzpcXFxcVXNlcnNcXFxcamFzb25cXFxcc291cmNlLW1hcC12aWV3ZXJcXFxcc3JjXFxcXGNvbXBvbmVudHNcXFxcaWNvbnNcXFxcTWVudS5zdmdcIn07bW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCB0b1N0cmluZzogdG9TdHJpbmcgfTsiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIGNzc01vZHVsZXMgPSB7fVxubW9kdWxlLmhvdCAmJiBtb2R1bGUuaG90LmFjY2VwdChbXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwibG9jYWxJZGVudE5hbWVcXFwiOlxcXCJbbG9jYWxdX1toYXNoOmJhc2U2NDo4XVxcXCIsXFxcImltcG9ydExvYWRlcnNcXFwiOjEsXFxcIm1vZHVsZXNcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Tb3VyY2VQYW5lbC52dWVcIl0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9sZExvY2FscyA9IGNzc01vZHVsZXNbXCIkXCJdXG4gIGlmICghb2xkTG9jYWxzKSByZXR1cm5cbiAgdmFyIG5ld0xvY2FscyA9IHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZSxcXFwibG9jYWxJZGVudE5hbWVcXFwiOlxcXCJbbG9jYWxdX1toYXNoOmJhc2U2NDo4XVxcXCIsXFxcImltcG9ydExvYWRlcnNcXFwiOjEsXFxcIm1vZHVsZXNcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJ2dWVcXFwiOnRydWUsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Tb3VyY2VQYW5lbC52dWVcIilcbiAgaWYgKEpTT04uc3RyaW5naWZ5KG5ld0xvY2FscykgPT09IEpTT04uc3RyaW5naWZ5KG9sZExvY2FscykpIHJldHVyblxuICBjc3NNb2R1bGVzW1wiJFwiXSA9IG5ld0xvY2Fsc1xuICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LThmNDVkNzkwXCIpXG59KVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgY3NzTW9kdWxlc1tcIiRcIl0gPSByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImxvY2FsSWRlbnROYW1lXFxcIjpcXFwiW2xvY2FsXV9baGFzaDpiYXNlNjQ6OF1cXFwiLFxcXCJpbXBvcnRMb2FkZXJzXFxcIjoxLFxcXCJtb2R1bGVzXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU291cmNlUGFuZWwudnVlXCIpXG5PYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCIkXCIsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjc3NNb2R1bGVzW1wiJFwiXSB9fSlcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU291cmNlUGFuZWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Tb3VyY2VQYW5lbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOGY0NWQ3OTBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU291cmNlUGFuZWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGNvbXBvbmVudHNcXFxcc291cmNlXFxcXFNvdXJjZVBhbmVsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04ZjQ1ZDc5MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBpZiAobW9kdWxlLmhvdC5kYXRhLmNzc01vZHVsZXMgJiYgT2JqZWN0LmtleXMobW9kdWxlLmhvdC5kYXRhLmNzc01vZHVsZXMpICE9PSBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKSkge1xuICAgICAgZGVsZXRlIENvbXBvbmVudC5vcHRpb25zLl9DdG9yXG4gICAgfVxuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOGY0NWQ3OTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGF0YS5jc3NNb2R1bGVzID0gY3NzTW9kdWxlc1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgY3NzTW9kdWxlcyA9IHt9XG5tb2R1bGUuaG90ICYmIG1vZHVsZS5ob3QuYWNjZXB0KFtcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3tcXFwic291cmNlTWFwXFxcIjp0cnVlLFxcXCJsb2NhbElkZW50TmFtZVxcXCI6XFxcIltsb2NhbF1fW2hhc2g6YmFzZTY0OjhdXFxcIixcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibW9kdWxlc1xcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NvdXJjZVZpZXcudnVlXCJdLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBvbGRMb2NhbHMgPSBjc3NNb2R1bGVzW1wiJFwiXVxuICBpZiAoIW9sZExvY2FscykgcmV0dXJuXG4gIHZhciBuZXdMb2NhbHMgPSByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImxvY2FsSWRlbnROYW1lXFxcIjpcXFwiW2xvY2FsXV9baGFzaDpiYXNlNjQ6OF1cXFwiLFxcXCJpbXBvcnRMb2FkZXJzXFxcIjoxLFxcXCJtb2R1bGVzXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU291cmNlVmlldy52dWVcIilcbiAgaWYgKEpTT04uc3RyaW5naWZ5KG5ld0xvY2FscykgPT09IEpTT04uc3RyaW5naWZ5KG9sZExvY2FscykpIHJldHVyblxuICBjc3NNb2R1bGVzW1wiJFwiXSA9IG5ld0xvY2Fsc1xuICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWJhZDExNGJlXCIpXG59KVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgY3NzTW9kdWxlc1tcIiRcIl0gPSByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWUsXFxcImxvY2FsSWRlbnROYW1lXFxcIjpcXFwiW2xvY2FsXV9baGFzaDpiYXNlNjQ6OF1cXFwiLFxcXCJpbXBvcnRMb2FkZXJzXFxcIjoxLFxcXCJtb2R1bGVzXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU291cmNlVmlldy52dWVcIilcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIiRcIiwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNzc01vZHVsZXNbXCIkXCJdIH19KVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Tb3VyY2VWaWV3LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU291cmNlVmlldy52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmFkMTE0YmVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU291cmNlVmlldy52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcY29tcG9uZW50c1xcXFxzb3VyY2VcXFxcU291cmNlVmlldy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYmFkMTE0YmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaWYgKG1vZHVsZS5ob3QuZGF0YS5jc3NNb2R1bGVzICYmIE9iamVjdC5rZXlzKG1vZHVsZS5ob3QuZGF0YS5jc3NNb2R1bGVzKSAhPT0gT2JqZWN0LmtleXMoY3NzTW9kdWxlcykpIHtcbiAgICAgIGRlbGV0ZSBDb21wb25lbnQub3B0aW9ucy5fQ3RvclxuICAgIH1cbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWJhZDExNGJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRhdGEuY3NzTW9kdWxlcyA9IGNzc01vZHVsZXNcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcblxubmV3IFZ1ZShBcHApLiRtb3VudCgnI2FwcCcpXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBzb3J0ZWRJbmRleEJ5IGZyb20gJ2xvZGFzaC9zb3J0ZWRJbmRleEJ5J1xuaW1wb3J0IHsgZnJvbVNvdXJjZSwgbWFwRmlsZUNvbW1lbnRSZWdleCB9IGZyb20gJ2NvbnZlcnQtc291cmNlLW1hcCdcbmltcG9ydCB7IEJhc2ljU291cmNlTWFwQ29uc3VtZXIgfSBmcm9tICdzb3VyY2UtbWFwL2xpYi9zb3VyY2UtbWFwLWNvbnN1bWVyJ1xuXG5pbXBvcnQgcmVhZEFzVGV4dCBmcm9tICcuLi91dGlscy9yZWFkQXNUZXh0J1xuXG5jb25zdCBwYXJzZXIgPSBPYmplY3QuY3JlYXRlKEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBuZXcgVnVlKHtcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgIGdlbmVyYXRlZENvbnRlbnQ6IG51bGwsXG4gICAgICAvLyBjb250ZW50IG9mIHRoZSBnZW5lcmF0ZWQgZmlsZVxuXG4gICAgICBzb3VyY2VNYXBEYXRhOiBudWxsLFxuICAgICAgLy8gc291cmNlbWFwIGRhdGEgaW4gSlMgT2JqZWN0IGZvcm1hdFxuXG4gICAgICBvdmVycmlkZXM6IHt9LFxuICAgICAgLy8gb3ZlcnJpZGVzIGZvciBvcmlnaW5hbCBmaWxlIGNvbnRlbnRcblxuICAgICAgc2VsZWN0ZWRJbmRleDogbnVsbCxcbiAgICAgIC8vIGN1cnJlbnRseSBzZWxlY3RlZCBzb3VyY2UgaW5kZXhcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcblxuICAgIG1pc3NpbmdHZW5lcmF0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZWRDb250ZW50ID09IG51bGxcbiAgICB9LFxuXG4gICAgZ2VuZXJhdGVkRmlsZU5hbWUoKSB7XG4gICAgICBpZiAodGhpcy5zb3VyY2VNYXBEYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU1hcERhdGEuZmlsZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZW5lcmF0ZWRJbmZvKCkge1xuICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVkQ29udGVudCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuICAgICAgY29uc3QgcGFyc2VSZXN1bHQgPSBmcm9tU291cmNlKHRoaXMuZ2VuZXJhdGVkQ29udGVudClcbiAgICAgIGlmIChwYXJzZVJlc3VsdCkge1xuICAgICAgICByZXR1cm4geyBpbmxpbmVTb3VyY2VNYXA6IHBhcnNlUmVzdWx0LnNvdXJjZW1hcCB9XG4gICAgICB9XG4gICAgICBjb25zdCBtYXRjaCA9IG1hcEZpbGVDb21tZW50UmVnZXguZXhlYyh0aGlzLmdlbmVyYXRlZENvbnRlbnQpXG4gICAgICByZXR1cm4geyBzb3VyY2VNYXBGaWxlOiBtYXRjaCAmJiAobWF0Y2hbMV0gfHwgbWF0Y2hbMl0pIH1cbiAgICB9LFxuXG4gICAgbWlzc2luZ1NvdXJjZU1hcCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZU1hcERhdGEgPT0gbnVsbFxuICAgIH0sXG5cbiAgICBzb3VyY2VNYXBGaWxlTmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlZEluZm8uc291cmNlTWFwRmlsZVxuICAgIH0sXG5cbiAgICBzb3VyY2VzKCkge1xuICAgICAgaWYgKCF0aGlzLnNvdXJjZU1hcERhdGEpIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2VNYXBEYXRhLnNvdXJjZXNcbiAgICB9LFxuXG4gICAgc291cmNlQ29udGVudHMoKSB7XG4gICAgICBpZiAoIXRoaXMuc291cmNlTWFwRGF0YSkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZU1hcERhdGEuc291cmNlc0NvbnRlbnQgfHwgW11cbiAgICB9LFxuXG4gICAgbWFwcGluZ3MoKSB7XG4gICAgICBpZiAoIXRoaXMuc291cmNlTWFwRGF0YSkge1xuICAgICAgICByZXR1cm4geyBnZW5lcmF0ZWQ6IFtdLCBvcmlnaW5hbDogW10gfVxuICAgICAgfVxuICAgICAgcGFyc2VyLl9wYXJzZU1hcHBpbmdzKHRoaXMuc291cmNlTWFwRGF0YS5tYXBwaW5ncylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdlbmVyYXRlZDogcGFyc2VyLl9fZ2VuZXJhdGVkTWFwcGluZ3MsXG4gICAgICAgIG9yaWdpbmFsOiBwYXJzZXIuX19vcmlnaW5hbE1hcHBpbmdzLFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzZWxlY3RlZEZpbGVOYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlc1t0aGlzLnNlbGVjdGVkSW5kZXhdXG4gICAgfSxcblxuICAgIGdlbmVyYXRlZFZpZXcoKSB7XG4gICAgICBpZiAoIXRoaXMuZ2VuZXJhdGVkQ29udGVudCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmF3TGluZXMgPSB0aGlzLmdlbmVyYXRlZENvbnRlbnQuc3BsaXQoL1xccj9cXG4vZylcbiAgICAgIGNvbnN0IGxpbmVEYXRhID0gcmF3TGluZXMubWFwKCgpID0+IFtdKVxuXG4gICAgICBjb25zdCBnZW5lcmF0ZWRNYXBwaW5ncyA9IHRoaXMubWFwcGluZ3MuZ2VuZXJhdGVkXG5cbiAgICAgIGZvciAobGV0IGkgPSBnZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBtYXBwaW5nID0gZ2VuZXJhdGVkTWFwcGluZ3NbaV1cbiAgICAgICAgY29uc3QgbGluZU51bWJlciA9IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSAtIDFcblxuICAgICAgICBpZiAoIWxpbmVEYXRhW2xpbmVOdW1iZXJdKSB7XG4gICAgICAgICAgbGluZURhdGFbbGluZU51bWJlcl0gPSBbXVxuICAgICAgICAgIHJhd0xpbmVzW2xpbmVOdW1iZXJdID0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSByYXdMaW5lc1tsaW5lTnVtYmVyXS5zbGljZShtYXBwaW5nLmdlbmVyYXRlZENvbHVtbilcblxuICAgICAgICBsaW5lRGF0YVtsaW5lTnVtYmVyXS51bnNoaWZ0KHsgY29udGVudCwgbWFwcGluZywgaWQ6IGdlbklkKG1hcHBpbmcpLCB0aXRsZTogbWFwcGluZy5uYW1lIH0pXG4gICAgICAgIHJhd0xpbmVzW2xpbmVOdW1iZXJdID0gcmF3TGluZXNbbGluZU51bWJlcl0uc2xpY2UoMCwgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4pXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHJhd0xpbmVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgaWYgKHJhd0xpbmVzW2ldKSB7XG4gICAgICAgICAgbGluZURhdGFbaV0udW5zaGlmdCh7IGNvbnRlbnQ6IHJhd0xpbmVzW2ldIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpbmVEYXRhXG4gICAgfSxcblxuICAgIG1hcHBpbmdzVmlldygpIHtcbiAgICAgIGlmICghdGhpcy5zb3VyY2VNYXBEYXRhKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBnZW5lcmF0ZWRNYXBwaW5ncyA9IHRoaXMubWFwcGluZ3MuZ2VuZXJhdGVkXG4gICAgICBjb25zdCBsaW5lRGF0YSA9IFtdXG5cbiAgICAgIGlmICh0aGlzLmdlbmVyYXRlZENvbnRlbnQpIHtcbiAgICAgICAgbGluZURhdGEubGVuZ3RoID0gdGhpcy5nZW5lcmF0ZWRDb250ZW50LnNwbGl0KC9cXHI/XFxuL2cpLmxlbmd0aFxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IG1hcHBpbmcgb2YgZ2VuZXJhdGVkTWFwcGluZ3MpIHtcbiAgICAgICAgY29uc3QgbGluZU51bWJlciA9IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSAtIDFcblxuICAgICAgICBpZiAoIWxpbmVEYXRhW2xpbmVOdW1iZXJdKSB7XG4gICAgICAgICAgbGluZURhdGFbbGluZU51bWJlcl0gPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGAke21hcHBpbmcuZ2VuZXJhdGVkQ29sdW1ufSA9PiAke21hcHBpbmcub3JpZ2luYWxMaW5lfToke21hcHBpbmcub3JpZ2luYWxDb2x1bW59YFxuXG4gICAgICAgIGxpbmVEYXRhW2xpbmVOdW1iZXJdLnB1c2goeyBjb250ZW50LCBtYXBwaW5nLCBpZDogZ2VuSWQobWFwcGluZyksIG5hbWVzOiBbdGhpcy5zb3VyY2VzW21hcHBpbmcuc291cmNlXSwgbWFwcGluZy5uYW1lXSB9KVxuICAgICAgICBsaW5lRGF0YVtsaW5lTnVtYmVyXS5wdXNoKHsgY29udGVudDogJyAnIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaW5lRGF0YVxuICAgIH0sXG5cbiAgICBzZWxlY3RlZFZpZXcoKSB7XG4gICAgICBjb25zdCBzb3VyY2VDb250ZW50ID0gdGhpcy5vdmVycmlkZXNbdGhpcy5zZWxlY3RlZEluZGV4XSB8fCB0aGlzLnNvdXJjZUNvbnRlbnRzW3RoaXMuc2VsZWN0ZWRJbmRleF1cblxuICAgICAgaWYgKCFzb3VyY2VDb250ZW50KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCByYXdMaW5lcyA9IHNvdXJjZUNvbnRlbnQuc3BsaXQoL1xccj9cXG4vZylcbiAgICAgIGNvbnN0IGxpbmVEYXRhID0gcmF3TGluZXMubWFwKCgpID0+IFtdKVxuXG4gICAgICBjb25zdCBvcmlnaW5hbE1hcHBpbmdzID0gdGhpcy5tYXBwaW5ncy5vcmlnaW5hbFxuXG4gICAgICBmb3IgKGxldCBpID0gc29ydGVkSW5kZXhCeShvcmlnaW5hbE1hcHBpbmdzLCB0aGlzLnNlbGVjdGVkSW5kZXgsICdzb3VyY2UnKSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmcgPSBvcmlnaW5hbE1hcHBpbmdzW2ldXG5cbiAgICAgICAgaWYgKG1hcHBpbmcuc291cmNlICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluZU51bWJlciA9IG1hcHBpbmcub3JpZ2luYWxMaW5lIC0gMVxuXG4gICAgICAgIGlmICghbGluZURhdGFbbGluZU51bWJlcl0pIHtcbiAgICAgICAgICBsaW5lRGF0YVtsaW5lTnVtYmVyXSA9IFtdXG4gICAgICAgICAgcmF3TGluZXNbbGluZU51bWJlcl0gPSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgW2xhc3RDaHVua10gPSBsaW5lRGF0YVtsaW5lTnVtYmVyXVxuXG4gICAgICAgIGlmIChsYXN0Q2h1bmsgJiYgbGFzdENodW5rLm1hcHBpbmcgJiYgbGFzdENodW5rLm1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPT09IG1hcHBpbmcub3JpZ2luYWxDb2x1bW4pIHtcbiAgICAgICAgICBsYXN0Q2h1bmsubmFtZXMucHVzaChtYXBwaW5nLm5hbWUpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSByYXdMaW5lc1tsaW5lTnVtYmVyXS5zbGljZShtYXBwaW5nLm9yaWdpbmFsQ29sdW1uKVxuXG4gICAgICAgIGxpbmVEYXRhW2xpbmVOdW1iZXJdLnVuc2hpZnQoeyBjb250ZW50LCBtYXBwaW5nLCBpZDogZ2VuSWQobWFwcGluZyksIG5hbWVzOiBbbWFwcGluZy5uYW1lXSB9KVxuICAgICAgICByYXdMaW5lc1tsaW5lTnVtYmVyXSA9IHJhd0xpbmVzW2xpbmVOdW1iZXJdLnNsaWNlKDAsIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4pXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHJhd0xpbmVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgaWYgKHJhd0xpbmVzW2ldKSB7XG4gICAgICAgICAgbGluZURhdGFbaV0udW5zaGlmdCh7IGNvbnRlbnQ6IHJhd0xpbmVzW2ldIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpbmVEYXRhXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG5cbiAgICBhc3luYyBoYW5kbGVGaWxlcyhmaWxlcywgdHlwZSkge1xuICAgICAgaWYgKCFmaWxlcyB8fCAhZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMSB8fCB0eXBlID09PSAnb3JpZ2luYWwnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsZShmaWxlc1swXSwgdHlwZSlcbiAgICAgIH1cbiAgICAgIGlmIChmaWxlc1swXS5uYW1lLmVuZHNXaXRoKCcubWFwJykpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVGaWxlKGZpbGVzWzFdLCAnZ2VuZXJhdGVkJylcbiAgICAgICAgdGhpcy5oYW5kbGVGaWxlKGZpbGVzWzBdLCAnc291cmNlTWFwJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlRmlsZShmaWxlc1swXSwgJ2dlbmVyYXRlZCcpXG4gICAgICAgIHRoaXMuaGFuZGxlRmlsZShmaWxlc1sxXSwgJ3NvdXJjZU1hcCcpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIGhhbmRsZUZpbGUoZmlsZSwgdHlwZSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRBc1RleHQoZmlsZSlcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdnZW5lcmF0ZWQnOiB7XG4gICAgICAgICAgdGhpcy5nZW5lcmF0ZWRDb250ZW50ID0gY29udGVudFxuICAgICAgICAgIGlmICghdGhpcy5nZW5lcmF0ZWRJbmZvLmlubGluZVNvdXJjZU1hcCkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zb3VyY2VNYXBEYXRhID0gdGhpcy5nZW5lcmF0ZWRJbmZvLmlubGluZVNvdXJjZU1hcFxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDBcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3NvdXJjZU1hcCc6IHtcbiAgICAgICAgICB0aGlzLnNvdXJjZU1hcERhdGEgPSBKU09OLnBhcnNlKGNvbnRlbnQpXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnb3JpZ2luYWwnOiB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRoaXMub3ZlcnJpZGVzLCB0aGlzLnNlbGVjdGVkSW5kZXgsIGNvbnRlbnQpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59KVxuXG5mdW5jdGlvbiBnZW5JZChtYXBwaW5nKSB7XG4gIGlmIChtYXBwaW5nLnNvdXJjZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgcmV0dXJuIGAke21hcHBpbmcuc291cmNlfSAke21hcHBpbmcub3JpZ2luYWxMaW5lfSAke21hcHBpbmcub3JpZ2luYWxDb2x1bW59YFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhZEFzVGV4dChmaWxlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXJcblxuICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdClcblxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG51bGw7Il0sInNvdXJjZVJvb3QiOiIifQ==