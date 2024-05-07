"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevue_porta"]("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pinia */ \"./node_modules/pinia/dist/pinia.mjs\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n\n\n\n\n// Import the functions you need from the SDKs you need\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCHpD6Vi5PBT9hwd5uLXQkyGNpjKJFsWUk\",\n  authDomain: \"porta-inmobiliarias.firebaseapp.com\",\n  projectId: \"porta-inmobiliarias\",\n  storageBucket: \"porta-inmobiliarias.appspot.com\",\n  messagingSenderId: \"682048475301\",\n  appId: \"1:682048475301:web:80c81e61d6485e0efbfd4c\"\n};\n(0,firebase_app__WEBPACK_IMPORTED_MODULE_3__.initializeApp)(firebaseConfig);\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use((0,pinia__WEBPACK_IMPORTED_MODULE_4__.createPinia)());\napp.use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtcG9ydGEvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IGNyZWF0ZVBpbmlhIH0gZnJvbSAncGluaWEnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xuXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUNIcEQ2Vmk1UEJUOWh3ZDV1TFhRa3lHTnBqS0pGc1dVa1wiLFxuICBhdXRoRG9tYWluOiBcInBvcnRhLWlubW9iaWxpYXJpYXMuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJwb3J0YS1pbm1vYmlsaWFyaWFzXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicG9ydGEtaW5tb2JpbGlhcmlhcy5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2ODIwNDg0NzUzMDFcIixcbiAgYXBwSWQ6IFwiMTo2ODIwNDg0NzUzMDE6d2ViOjgwYzgxZTYxZDY0ODVlMGVmYmZkNGNcIlxufTtcblxuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApXG5cbmFwcC51c2UoY3JlYXRlUGluaWEoKSlcbmFwcC51c2Uocm91dGVyKVxuXG5hcHAubW91bnQoJyNhcHAnKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1ca35f58ce1f23ce"; }
/******/ }();
/******/ 
/******/ }
);