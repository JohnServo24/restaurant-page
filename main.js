/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/about.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/about.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Meow+Script&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: arial;\n}\n\nhtml, body {\n  height: 100vh;\n}\n\nbody {\n  background-color: #F8ECD1;\n  color: #85586F;\n}\n\n.navbar {\n  display: flex;\n  min-height: 8vh;\n}\n.navbar ul {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n}\n.navbar ul li {\n  list-style-type: none;\n  font-weight: 900;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.container[data-page=about] .top > h1 {\n  font-family: \"Meow Script\";\n  background-color: #EEE;\n  font-size: 3rem;\n  padding-left: 2rem;\n}\n.container[data-page=about] .top .hero {\n  min-height: 60vh;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.container[data-page=about] .top .hero h1 {\n  font-family: \"Meow Script\";\n  text-align: center;\n  font-size: 4rem;\n  background-color: rgba(238, 238, 238, 0.7);\n  position: relative;\n  top: 35vh;\n}\n.container[data-page=about] .bot {\n  padding: 2rem 20rem;\n}\n.container[data-page=about] .bot p {\n  font-size: 1.3rem;\n  text-align: justify;\n}", "",{"version":3,"sources":["webpack://./src/styles/_base.scss","webpack://./src/styles/about.scss"],"names":[],"mappings":"AAoCA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,kBAAA;AClCJ;;ADqCA;EACI,aAAA;AClCJ;;ADqCA;EACI,yBAlBY;EAmBZ,cAjBS;ACjBb;;ADqCA;EACI,aAAA;EACA,eAAA;AClCJ;ADmCI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,WAAA;ACjCR;ADmCQ;EACI,qBAAA;EACA,gBAAA;EACA,iBAAA;EAEA,eAAA;AClCZ;;ADtBI;EAPA,0BAAA;EACA,sBA8BsB;EA7BtB,eAAA;EACA,kBAAA;ACiCJ;ADzBI;EACI,gBAAA;EACA,mDAAA;AC2BR;ADzBQ;EACI,0BAAA;EACA,kBAAA;EACA,eAAA;EACA,0CAWI;EATJ,kBAAA;EACA,SAAA;AC0BZ;AA3CI;EACI,mBAAA;AA6CR;AA3CQ;EACI,iBAAA;EACA,mBAAA;AA6CZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Meow+Script&display=swap'); // Script font\n\n@mixin header-style {\n    font-family: \"Meow Script\";\n    background-color: $header-background-color;\n    font-size: 3rem;\n    padding-left: 2rem;\n}\n\n@mixin header-and-hero {\n    > h1 {\n        @include header-style;\n    }\n\n    .hero {\n        min-height: 60vh;\n        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n\n        h1 {\n            font-family: \"Meow Script\";\n            text-align: center;\n            font-size: 4rem;\n            background-color: $outline-color;\n\n            position: relative;\n            top: 35vh;\n        }\n    }\n}\n\n$primary-color: #F8ECD1;\n$secondary-color: #DEB6AB;\n$font-color: #85586F;\n$outline-color: rgba(238, 238, 238, 0.7);\n$header-background-color: #EEE;\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: arial;\n}\n\nhtml, body {\n    height: 100vh;\n}\n\nbody {\n    background-color: $primary-color;\n    color: $font-color;\n}\n\n.navbar {\n    display: flex;\n    min-height: 8vh;\n    ul {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        width: 100%;\n\n        li {\n            list-style-type: none;\n            font-weight: 900;\n            font-size: 1.2rem;\n\n            cursor: pointer;\n        }\n    }\n}\n","@import \"./_base.scss\";\n\n.container[data-page=\"about\"] {\n\n    .top {\n        @include header-and-hero;\n    }\n\n    .bot {\n        padding: 2rem 20rem;\n        \n        p {\n            font-size: 1.3rem;\n            text-align: justify;\n        }\n    }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Meow+Script&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: arial;\n}\n\nhtml, body {\n  height: 100vh;\n}\n\nbody {\n  background-color: #F8ECD1;\n  color: #85586F;\n}\n\n.navbar {\n  display: flex;\n  min-height: 8vh;\n}\n.navbar ul {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n}\n.navbar ul li {\n  list-style-type: none;\n  font-weight: 900;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.container[data-page=contacts] .top > h1 {\n  font-family: \"Meow Script\";\n  background-color: #EEE;\n  font-size: 3rem;\n  padding-left: 2rem;\n}\n.container[data-page=contacts] .top .hero {\n  min-height: 60vh;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.container[data-page=contacts] .top .hero h1 {\n  font-family: \"Meow Script\";\n  text-align: center;\n  font-size: 4rem;\n  background-color: rgba(238, 238, 238, 0.7);\n  position: relative;\n  top: 35vh;\n}\n.container[data-page=contacts] .bot {\n  position: relative;\n  bottom: 8rem;\n}\n.container[data-page=contacts] .bot .contacts {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.container[data-page=contacts] .bot .contacts .item {\n  width: 500px;\n  min-height: 400px;\n  border-radius: 15px;\n  background-color: #DEB6AB;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}", "",{"version":3,"sources":["webpack://./src/styles/_base.scss","webpack://./src/styles/contact.scss"],"names":[],"mappings":"AAoCA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,kBAAA;AClCJ;;ADqCA;EACI,aAAA;AClCJ;;ADqCA;EACI,yBAlBY;EAmBZ,cAjBS;ACjBb;;ADqCA;EACI,aAAA;EACA,eAAA;AClCJ;ADmCI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,WAAA;ACjCR;ADmCQ;EACI,qBAAA;EACA,gBAAA;EACA,iBAAA;EAEA,eAAA;AClCZ;;ADtBI;EAPA,0BAAA;EACA,sBA8BsB;EA7BtB,eAAA;EACA,kBAAA;ACiCJ;ADzBI;EACI,gBAAA;EACA,mDAAA;AC2BR;ADzBQ;EACI,0BAAA;EACA,kBAAA;EACA,eAAA;EACA,0CAWI;EATJ,kBAAA;EACA,SAAA;AC0BZ;AA5CI;EACI,kBAAA;EACA,YAAA;AA8CR;AA7CQ;EACI,aAAA;EACA,6BAAA;EACA,eAAA;AA+CZ;AA9CY;EACI,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBDaE;ECZF,2CAAA;AAgDhB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Meow+Script&display=swap'); // Script font\n\n@mixin header-style {\n    font-family: \"Meow Script\";\n    background-color: $header-background-color;\n    font-size: 3rem;\n    padding-left: 2rem;\n}\n\n@mixin header-and-hero {\n    > h1 {\n        @include header-style;\n    }\n\n    .hero {\n        min-height: 60vh;\n        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n\n        h1 {\n            font-family: \"Meow Script\";\n            text-align: center;\n            font-size: 4rem;\n            background-color: $outline-color;\n\n            position: relative;\n            top: 35vh;\n        }\n    }\n}\n\n$primary-color: #F8ECD1;\n$secondary-color: #DEB6AB;\n$font-color: #85586F;\n$outline-color: rgba(238, 238, 238, 0.7);\n$header-background-color: #EEE;\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: arial;\n}\n\nhtml, body {\n    height: 100vh;\n}\n\nbody {\n    background-color: $primary-color;\n    color: $font-color;\n}\n\n.navbar {\n    display: flex;\n    min-height: 8vh;\n    ul {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        width: 100%;\n\n        li {\n            list-style-type: none;\n            font-weight: 900;\n            font-size: 1.2rem;\n\n            cursor: pointer;\n        }\n    }\n}\n","@import './_base.scss';\n\n.container[data-page=\"contacts\"] {\n    .top {\n        @include header-and-hero;\n    }\n    \n    .bot {\n        position: relative;\n        bottom: 8rem;\n        .contacts {\n            display: flex;\n            justify-content: space-evenly;\n            flex-wrap: wrap;\n            .item {\n                width: 500px;\n                min-height: 400px;\n                border-radius: 15px;\n                background-color: $secondary-color;\n                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Meow+Script&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: arial;\n}\n\nhtml, body {\n  height: 100vh;\n}\n\nbody {\n  background-color: #F8ECD1;\n  color: #85586F;\n}\n\n.navbar {\n  display: flex;\n  min-height: 8vh;\n}\n.navbar ul {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n}\n.navbar ul li {\n  list-style-type: none;\n  font-weight: 900;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.container[data-page=home] {\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 100%;\n}\n.container[data-page=home] .left {\n  background-color: white;\n  flex-grow: 1;\n}\n.container[data-page=home] .left .title {\n  background-color: rgba(238, 238, 238, 0.7);\n  position: relative;\n  top: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1.2rem;\n}\n.container[data-page=home] .left .title p {\n  font-size: 4rem;\n  font-family: \"Meow Script\", cursive;\n}\n.container[data-page=home] .right {\n  flex-basis: 30%;\n}\n.container[data-page=home] .right .text {\n  position: relative;\n  top: 14vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 3rem;\n}\n.container[data-page=home] .right .text :first-child {\n  font-weight: 900;\n  font-size: 1.5rem;\n  padding-bottom: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/_base.scss","webpack://./src/styles/home.scss"],"names":[],"mappings":"AAoCA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,kBAAA;AClCJ;;ADqCA;EACI,aAAA;AClCJ;;ADqCA;EACI,yBAlBY;EAmBZ,cAjBS;ACjBb;;ADqCA;EACI,aAAA;EACA,eAAA;AClCJ;ADmCI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,WAAA;ACjCR;ADmCQ;EACI,qBAAA;EACA,gBAAA;EACA,iBAAA;EAEA,eAAA;AClCZ;;AA9BA;EACI,aAAA;EACA,eAAA;EACA,gBAAA;AAiCJ;AA/BI;EACI,uBAAA;EACA,YAAA;AAiCR;AA/BQ;EACI,0CDqBI;ECpBJ,kBAAA;EACA,SAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,eAAA;AA+BZ;AA7BY;EACI,eAAA;EACA,mCAAA;AA+BhB;AA1BI;EACI,eAAA;AA4BR;AA3BQ;EACI,kBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AA6BZ;AA3BY;EACI,gBAAA;EACA,iBAAA;EACA,oBAAA;AA6BhB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Meow+Script&display=swap'); // Script font\n\n@mixin header-style {\n    font-family: \"Meow Script\";\n    background-color: $header-background-color;\n    font-size: 3rem;\n    padding-left: 2rem;\n}\n\n@mixin header-and-hero {\n    > h1 {\n        @include header-style;\n    }\n\n    .hero {\n        min-height: 60vh;\n        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n\n        h1 {\n            font-family: \"Meow Script\";\n            text-align: center;\n            font-size: 4rem;\n            background-color: $outline-color;\n\n            position: relative;\n            top: 35vh;\n        }\n    }\n}\n\n$primary-color: #F8ECD1;\n$secondary-color: #DEB6AB;\n$font-color: #85586F;\n$outline-color: rgba(238, 238, 238, 0.7);\n$header-background-color: #EEE;\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: arial;\n}\n\nhtml, body {\n    height: 100vh;\n}\n\nbody {\n    background-color: $primary-color;\n    color: $font-color;\n}\n\n.navbar {\n    display: flex;\n    min-height: 8vh;\n    ul {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        width: 100%;\n\n        li {\n            list-style-type: none;\n            font-weight: 900;\n            font-size: 1.2rem;\n\n            cursor: pointer;\n        }\n    }\n}\n","@import \"./_base.scss\";\n\n.container[data-page=\"home\"] {\n    display: flex;\n    flex-wrap: wrap;\n    min-height: 100%;\n\n    .left {\n        background-color: white;\n        flex-grow: 1;\n\n        .title {\n            background-color: $outline-color;\n            position: relative;\n            top: 20vh;\n            \n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            padding: 1.2rem;\n\n            p {\n                font-size: 4rem;\n                font-family: 'Meow Script', cursive;\n            }\n        }\n    }\n\n    .right {\n        flex-basis: 30%;\n        .text {\n            position: relative;\n            top: 14vh;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            padding: 3rem;\n\n            :first-child {\n                font-weight: 900;\n                font-size: 1.5rem;\n                padding-bottom: 1rem;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Meow+Script&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: arial;\n}\n\nhtml, body {\n  height: 100vh;\n}\n\nbody {\n  background-color: #F8ECD1;\n  color: #85586F;\n}\n\n.navbar {\n  display: flex;\n  min-height: 8vh;\n}\n.navbar ul {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n}\n.navbar ul li {\n  list-style-type: none;\n  font-weight: 900;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.container[data-page=menu] section header {\n  font-family: \"Meow Script\";\n  background-color: #EEE;\n  font-size: 3rem;\n  padding-left: 2rem;\n}\n.container[data-page=menu] section .grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  padding: 2rem;\n  row-gap: 1rem;\n  place-items: center;\n}\n.container[data-page=menu] section .grid .item {\n  max-width: 400px;\n  min-height: 220px;\n  border-radius: 15px;\n  background-color: #DEB6AB;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  display: flex;\n}\n.container[data-page=menu] section .grid .item .img {\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n  flex-basis: 40vw;\n  background-color: white;\n}\n.container[data-page=menu] section .grid .item .text {\n  padding: 1rem;\n}\n.container[data-page=menu] section .grid .item .text :first-child {\n  text-align: center;\n  padding-bottom: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/_base.scss","webpack://./src/styles/menu.scss"],"names":[],"mappings":"AAoCA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,kBAAA;AClCJ;;ADqCA;EACI,aAAA;AClCJ;;ADqCA;EACI,yBAlBY;EAmBZ,cAjBS;ACjBb;;ADqCA;EACI,aAAA;EACA,eAAA;AClCJ;ADmCI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,WAAA;ACjCR;ADmCQ;EACI,qBAAA;EACA,gBAAA;EACA,iBAAA;EAEA,eAAA;AClCZ;;AA3BQ;EDFJ,0BAAA;EACA,sBA8BsB;EA7BtB,eAAA;EACA,kBAAA;ACiCJ;AA9BQ;EACI,aAAA;EACA,4DAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;AAgCZ;AA9BY;EACI,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBDWE;ECVF,2CAAA;EAEA,aAAA;AA+BhB;AA7BgB;EACI,4BAAA;EACA,+BAAA;EACA,gBAAA;EACA,uBAAA;AA+BpB;AA5BgB;EACI,aAAA;AA8BpB;AA5BoB;EACI,kBAAA;EACA,sBAAA;AA8BxB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Meow+Script&display=swap'); // Script font\n\n@mixin header-style {\n    font-family: \"Meow Script\";\n    background-color: $header-background-color;\n    font-size: 3rem;\n    padding-left: 2rem;\n}\n\n@mixin header-and-hero {\n    > h1 {\n        @include header-style;\n    }\n\n    .hero {\n        min-height: 60vh;\n        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n\n        h1 {\n            font-family: \"Meow Script\";\n            text-align: center;\n            font-size: 4rem;\n            background-color: $outline-color;\n\n            position: relative;\n            top: 35vh;\n        }\n    }\n}\n\n$primary-color: #F8ECD1;\n$secondary-color: #DEB6AB;\n$font-color: #85586F;\n$outline-color: rgba(238, 238, 238, 0.7);\n$header-background-color: #EEE;\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: arial;\n}\n\nhtml, body {\n    height: 100vh;\n}\n\nbody {\n    background-color: $primary-color;\n    color: $font-color;\n}\n\n.navbar {\n    display: flex;\n    min-height: 8vh;\n    ul {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        width: 100%;\n\n        li {\n            list-style-type: none;\n            font-weight: 900;\n            font-size: 1.2rem;\n\n            cursor: pointer;\n        }\n    }\n}\n","@import \"./_base.scss\";\n\n\n.container[data-page=\"menu\"] {\n    section {\n        header {\n            @include header-style;\n        }\n\n        .grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n            padding: 2rem;\n            row-gap: 1rem;\n            place-items: center;\n\n            .item {\n                max-width: 400px;\n                min-height: 220px;\n                border-radius: 15px;\n                background-color: $secondary-color;\n                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n\n                display: flex;\n\n                .img {\n                    border-top-left-radius: 15px;\n                    border-bottom-left-radius: 15px;\n                    flex-basis: 40vw;\n                    background-color: white;\n                }\n\n                .text {\n                    padding: 1rem;\n\n                    :first-child {\n                        text-align: center;\n                        padding-bottom: 0.5rem;\n                    }\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/about.scss":
/*!*******************************!*\
  !*** ./src/styles/about.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./about.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/about.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/contact.scss":
/*!*********************************!*\
  !*** ./src/styles/contact.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./contact.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/home.scss":
/*!******************************!*\
  !*** ./src/styles/home.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.scss":
/*!******************************!*\
  !*** ./src/styles/menu.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/about.scss */ "./src/styles/about.scss");
/* harmony import */ var _assets_images_about_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/about.jpg */ "./src/assets/images/about.jpg");



const createEssay = (paragraph, num) => {
    for(let i = 0; i < num; i++) {
        paragraph.innerHTML += `&nbsp&nbsp&nbsp&nbsp
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc nulla metus, tristique sed tincidunt et, cursus eu augue. 
            Sed quis pellentesque enim. Pellentesque eu orci id enim
            facilisis semper. Fusce laoreet dui ac dapibus congue. Donec 
            aliquam aliquam nibh, quis posuere magna molestie at. Pellentesque 
            pulvinar sapien nibh, sed hendrerit ligula scelerisque ut. Nulla 
            pharetra eleifend massa, ornare luctus sem aliquet in. Suspendisse
            tristique lacus vel dui dictum porttitor. Integer a justo id neque 
            aliquam mvulputate a nec mi. Praesent dolor felis, malesuada at
            aliquam sed, interdum vitae augue. Nam posuere tellus ac ante 
            ultrices, at dapibus felis porta. <br><br>`;
    }
}

const generateAbout = (container, nav) => {
    const topSection = document.createElement("section");
    const title = document.createElement("h1");
    const hero = document.createElement("div");
    const heroText = document.createElement("h1");

    const botSection = document.createElement("section");
    const paragraph = document.createElement("p");

    topSection.classList.add("top");
    hero.classList.add("hero");
    botSection.classList.add("bot");

    topSection.append(title);
    topSection.append(hero);
    hero.append(heroText);

    botSection.append(paragraph);

    container.append(nav);
    container.append(topSection);
    container.append(botSection);
    container.setAttribute("data-page", "about");

    hero.style.background = `url('${_assets_images_about_jpg__WEBPACK_IMPORTED_MODULE_1__}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundRepeat = 'no-repeat';
    title.textContent = "About Us";
    heroText.innerHTML = "Lorem ipsum dolor sit amet, <br> " +
                            "consectetur adipiscing elit!";
    createEssay(paragraph, 4);
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAbout);

/***/ }),

/***/ "./src/scripts/base.js":
/*!*****************************!*\
  !*** ./src/scripts/base.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearChildren": () => (/* binding */ clearChildren),
/* harmony export */   "generateNavbar": () => (/* binding */ generateNavbar)
/* harmony export */ });
const generateNavbar = () => {
    const navbar = document.createElement("navbar");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const about = document.createElement("li");
    const contact = document.createElement("li");

    navbar.id = 'navbar';
    ul.id = 'navUl';
    home.id = 'navHome';
    menu.id = 'navMenu';
    about.id = 'navAbout';
    contact.id = 'navContact';

    navbar.classList.add("navbar");

    home.textContent = "Home";
    menu.textContent = "Menu";
    about.textContent = "About";
    contact.textContent = "Contact";

    navbar.append(ul);
    ul.append(home);
    ul.append(menu);
    ul.append(about);
    ul.append(contact);

    return navbar;
}

const clearChildren = container => {
    while(container.firstChild) container.firstChild.remove();
}



/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_contact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/contact.scss */ "./src/styles/contact.scss");
/* harmony import */ var _assets_images_contact_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/contact.jpg */ "./src/assets/images/contact.jpg");



const generateContact = (container, nav) => {
    const topSection = document.createElement("section");
    const title = document.createElement("h1");
    const hero = document.createElement("div");
    const heroText = document.createElement("h1");

    const botSection = document.createElement("section");
    const contacts = document.createElement("div");
    const telephone = document.createElement("div");
    const email = document.createElement("div");

    topSection.classList.add("top");
    hero.classList.add("hero");
    botSection.classList.add("bot");
    contacts.classList.add("contacts");
    telephone.classList.add("item");
    email.classList.add("item");

    topSection.append(title);
    topSection.append(hero);
    hero.append(heroText);

    botSection.append(contacts);
    contacts.append(telephone);
    contacts.append(email);

    container.append(nav);
    container.append(topSection);
    container.append(botSection);
    container.setAttribute("data-page", "contacts");

    hero.style.background = `url('${_assets_images_contact_jpg__WEBPACK_IMPORTED_MODULE_1__}')`;
    hero.style.backgroundSize = 'cover';

    title.textContent = "Contacts";
    heroText.textContent = "Get in touch"; 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContact);

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.scss */ "./src/styles/home.scss");
/* harmony import */ var _assets_images_home_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/home.jpg */ "./src/assets/images/home.jpg");



const generateHome = (container, nav) => {
    const leftSection = document.createElement("section");
    const title = document.createElement("div");
    const name = document.createElement("p");

    const rightSection = document.createElement("section");
    const text = document.createElement("div");
    const textp1 = document.createElement("p");
    const textp2 = document.createElement("p");

    rightSection.id = "right-section";

    leftSection.classList.add("left");
    title.classList.add("title");

    rightSection.classList.add("right");
    text.classList.add("text");

    container.append(leftSection);
    leftSection.append(title);
    title.append(name);

    container.append(rightSection);
    rightSection.append(nav);
    rightSection.append(text);
    text.append(textp1);
    text.append(textp2);

    leftSection.style.backgroundImage = `url('${_assets_images_home_jpg__WEBPACK_IMPORTED_MODULE_1__}')`;
    leftSection.style.backgroundSize = 'cover';
    container.setAttribute("data-page", "home");

    name.textContent = "Restaurant Name";
    textp1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla metus, tristique sed tincidunt et, cursus eu augue. Sed quis pellentesque enim.";
    textp2.textContent = "Pellentesque eu orci id enim facilisis semper. Fusce laoreet dui ac dapibus congue.";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHome);



/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.scss */ "./src/styles/menu.scss");


const generateGrid = (section, name, noOfItems) => {
    const header = document.createElement("header");
    const grid = document.createElement("grid");
    grid.classList.add("grid");

    header.textContent = name;

    for(let i = 0; i < noOfItems; i++) {
        const item = document.createElement("div")
        const img = document.createElement("div");
        const text = document.createElement("div");
        const foodName = document.createElement("h1");
        const desc = document.createElement("p");

        item.classList.add("item");
        img.classList.add("img");
        text.classList.add("text");

        grid.append(item);
        item.append(img);
        item.append(text);
        text.append(foodName);
        text.append(desc);

        foodName.textContent = "FOOD NAME";
        desc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla metus, " +
                        " tristique sed tincidunt et, cursus eu augue. Sed quis pellentesque enim. " +
                        " Pellentesque eu orci id enim facilisis semper.";
    }

    section.append(header);
    section.append(grid);
}

const generateMenu = (container, nav) => {
    container.append(nav);
    container.setAttribute("data-page", "menu");

    const bfSection = document.createElement("section");
    const lSection = document.createElement("section");
    const dSection = document.createElement("section");

    generateGrid(bfSection, "Breakfast", 6);
    generateGrid(lSection, "Lunch", 6);
    generateGrid(dSection, "Dinner", 6);

    container.append(bfSection);
    container.append(lSection);
    container.append(dSection);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);

/***/ }),

/***/ "./src/assets/images/about.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/about.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "about.jpg";

/***/ }),

/***/ "./src/assets/images/contact.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/contact.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "contact.jpg";

/***/ }),

/***/ "./src/assets/images/home.jpg":
/*!************************************!*\
  !*** ./src/assets/images/home.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./src/scripts/base.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/scripts/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/scripts/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/scripts/contact.js");
/* harmony import */ var _styles_contact_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/contact.scss */ "./src/styles/contact.scss");








const container = document.getElementById("container");
const navbar = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.generateNavbar)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])(container, navbar);


const navItems = navbar.querySelectorAll("li");
navItems.forEach(item => {
    item.addEventListener("click", e => {

        (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.clearChildren)(container);

        if(item.id === "navHome") (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])(container, navbar);
        else if(item.id === "navMenu") (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])(container, navbar);
        else if(item.id === "navAbout") (0,_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])(container, navbar);
        else if(item.id === "navContact") (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])(container, navbar);
    })
});











})();

/******/ })()
;
//# sourceMappingURL=main.js.map