/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevue_porta"]("app",{

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _views_LoginView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/LoginView.vue */ \"./src/views/LoginView.vue\");\n/* harmony import */ var _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/HomeView.vue */ \"./src/views/HomeView.vue\");\n/* harmony import */ var _views_RegisterView_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/RegisterView.vue */ \"./src/views/RegisterView.vue\");\n/* harmony import */ var _views_ResetView_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/ResetView.vue */ \"./src/views/ResetView.vue\");\n/* harmony import */ var _views_ProprietyView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/ProprietyView */ \"./src/views/ProprietyView.vue\");\n/* harmony import */ var _views_Propriety_ProprietyCreateFormView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/Propriety/ProprietyCreateFormView */ \"./src/views/Propriety/ProprietyCreateFormView.vue\");\n/* harmony import */ var _views_ContructionPageView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/ContructionPageView */ \"./src/views/ContructionPageView.vue\");\n/* harmony import */ var _views_ProprietyInfoView_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/ProprietyInfoView.vue */ \"./src/views/ProprietyInfoView.vue\");\n/* harmony import */ var _views_ProprietyInfoView_vue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_views_ProprietyInfoView_vue__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nconst routes = [{\n  path: '/login',\n  component: _views_LoginView_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/home',\n  component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '/register',\n  component: _views_RegisterView_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}, {\n  path: '/reset',\n  component: _views_ResetView_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  path: '/propriety',\n  component: _views_ProprietyView__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, {\n  path: '/propriety/create',\n  component: _views_Propriety_ProprietyCreateFormView__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, {\n  path: '/contruction',\n  component: _views_ContructionPageView__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}, {\n  path: '/propriety/:id',\n  // Usamos :id para indicar que este segmento de la URL es dinámico y puede ser cualquier ID de propiedad\n  name: 'ProprietyInfo',\n  // Nombre de la ruta\n  component: (_views_ProprietyInfoView_vue__WEBPACK_IMPORTED_MODULE_8___default()),\n  // Componente asociado a esta ruta\n  props: true // Esto permite pasar props a la vista\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createWebHistory)(),\n  routes: routes\n});\nconst getCurrentUser = () => {\n  return new Promise((resolve, reject) => {\n    const removeListener = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(), user => {\n      removeListener();\n      resolve(user);\n    }, reject);\n  });\n};\nrouter.beforeEach(async (to, from, next) => {\n  if (to.matched.some(record => record.meta.requiresAuth)) {\n    if (await getCurrentUser()) {\n      next();\n    } else {\n      alert(\"Usted no tiene acceso\");\n      next(\"/\");\n    }\n  } else {\n    next();\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtcG9ydGEvLi9zcmMvcm91dGVyLmpzPzRjODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV2ViSGlzdG9yeSwgY3JlYXRlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcidcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IExvZ2luVmlldyBmcm9tICcuL3ZpZXdzL0xvZ2luVmlldy52dWUnXHJcbmltcG9ydCBIb21lVmlldyBmcm9tICcuL3ZpZXdzL0hvbWVWaWV3LnZ1ZSdcclxuaW1wb3J0IFJlZ2lzdGVyVmlldyBmcm9tICcuL3ZpZXdzL1JlZ2lzdGVyVmlldy52dWUnXHJcbmltcG9ydCBSZXNldFZpZXcgZnJvbSAnLi92aWV3cy9SZXNldFZpZXcudnVlJ1xyXG5pbXBvcnQgUHJvcHJpZXR5VmlldyBmcm9tICcuL3ZpZXdzL1Byb3ByaWV0eVZpZXcnXHJcbmltcG9ydCBQcm9wcmlldHlDcmVhdGVGb3JtVmlldyBmcm9tICcuL3ZpZXdzL1Byb3ByaWV0eS9Qcm9wcmlldHlDcmVhdGVGb3JtVmlldydcclxuaW1wb3J0IENvbnRydWN0aW9uUGFnZVZpZXcgZnJvbSAnLi92aWV3cy9Db250cnVjdGlvblBhZ2VWaWV3J1xyXG5pbXBvcnQgUHJvcHJpZXR5SW5mb1ZpZXcgZnJvbSAnLi92aWV3cy9Qcm9wcmlldHlJbmZvVmlldy52dWUnXHJcblxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvbG9naW4nLFxyXG4gICAgY29tcG9uZW50OiBMb2dpblZpZXdcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvaG9tZScsXHJcbiAgICBjb21wb25lbnQ6IEhvbWVWaWV3XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3JlZ2lzdGVyJyxcclxuICAgIGNvbXBvbmVudDogUmVnaXN0ZXJWaWV3XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3Jlc2V0JyxcclxuICAgIGNvbXBvbmVudDogUmVzZXRWaWV3XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3Byb3ByaWV0eScsXHJcbiAgICBjb21wb25lbnQ6IFByb3ByaWV0eVZpZXdcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvcHJvcHJpZXR5L2NyZWF0ZScsXHJcbiAgICBjb21wb25lbnQ6IFByb3ByaWV0eUNyZWF0ZUZvcm1WaWV3XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2NvbnRydWN0aW9uJyxcclxuICAgIGNvbXBvbmVudDogQ29udHJ1Y3Rpb25QYWdlVmlld1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9wcm9wcmlldHkvOmlkJywgLy8gVXNhbW9zIDppZCBwYXJhIGluZGljYXIgcXVlIGVzdGUgc2VnbWVudG8gZGUgbGEgVVJMIGVzIGRpbsOhbWljbyB5IHB1ZWRlIHNlciBjdWFscXVpZXIgSUQgZGUgcHJvcGllZGFkXHJcbiAgICBuYW1lOiAnUHJvcHJpZXR5SW5mbycsIC8vIE5vbWJyZSBkZSBsYSBydXRhXHJcbiAgICBjb21wb25lbnQ6IFByb3ByaWV0eUluZm9WaWV3LCAvLyBDb21wb25lbnRlIGFzb2NpYWRvIGEgZXN0YSBydXRhXHJcbiAgICBwcm9wczogdHJ1ZSAvLyBFc3RvIHBlcm1pdGUgcGFzYXIgcHJvcHMgYSBsYSB2aXN0YVxyXG4gIH0sXHJcbiAgXHJcbiAgXHJcbl07XHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xyXG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoKSxcclxuICByb3V0ZXM6IHJvdXRlcyxcclxufSk7XHJcblxyXG5jb25zdCBnZXRDdXJyZW50VXNlciA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVtb3ZlTGlzdGVuZXIgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoXHJcbiAgICAgIGdldEF1dGgoKSxcclxuICAgICAgKHVzZXIpID0+IHtcclxuICAgICAgICByZW1vdmVMaXN0ZW5lcigpO1xyXG4gICAgICAgIHJlc29sdmUodXNlcik7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlamVjdFxyXG4gICAgKTtcclxuICB9KTtcclxufTtcclxuXHJcbnJvdXRlci5iZWZvcmVFYWNoKGFzeW5jKHRvLCBmcm9tLCBuZXh0KSA9PntcclxuICBpZiAodG8ubWF0Y2hlZC5zb21lKChyZWNvcmQpID0+IHJlY29yZC5tZXRhLnJlcXVpcmVzQXV0aCkpIHtcclxuICAgIGlmIChhd2FpdCBnZXRDdXJyZW50VXNlcigpKSB7XHJcbiAgICAgICBuZXh0KCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgYWxlcnQoXCJVc3RlZCBubyB0aWVuZSBhY2Nlc29cIik7XHJcbiAgICAgIG5leHQoXCIvXCIpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG5leHQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ }),

/***/ "./src/views/ProprietyInfoView.vue":
/*!*****************************************!*\
  !*** ./src/views/ProprietyInfoView.vue ***!
  \*****************************************/
/***/ (function() {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9c6719b2376155d1"; }
/******/ }();
/******/ 
/******/ }
);