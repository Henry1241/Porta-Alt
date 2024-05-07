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

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _views_LoginView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/LoginView.vue */ \"./src/views/LoginView.vue\");\n/* harmony import */ var _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/HomeView.vue */ \"./src/views/HomeView.vue\");\n/* harmony import */ var _views_RegisterView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/RegisterView.vue */ \"./src/views/RegisterView.vue\");\n/* harmony import */ var _views_ResetView_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/ResetView.vue */ \"./src/views/ResetView.vue\");\n/* harmony import */ var _views_ProprietyView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/ProprietyView */ \"./src/views/ProprietyView.vue\");\n/* harmony import */ var _views_Propriety_ProprietyCreateFormView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/Propriety/ProprietyCreateFormView */ \"./src/views/Propriety/ProprietyCreateFormView.vue\");\n/* harmony import */ var _views_ContructionPageView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/ContructionPageView */ \"./src/views/ContructionPageView.vue\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\n\n\n\n\n\n\n\n\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_8__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_8__.createWebHistory)(/* unsupported import.meta.env.BASE_URL */ undefined.BASE_URL),\n  routes: [{\n    path: '/',\n    name: 'login',\n    component: _views_LoginView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }, {\n    path: '/home',\n    name: 'dashboard',\n    // route level code-splitting\n    // this generates a separate chunk (About.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    meta: {\n      requiresAuth: true\n    }\n  }, {\n    path: '/register',\n    name: 'registro',\n    // route level code-splitting\n    // this generates a separate chunk (About.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: _views_RegisterView_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: '/propriety',\n    name: 'Bienes Raices',\n    // route level code-splitting\n    // this generates a separate chunk (About.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: _views_ProprietyView__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    meta: {\n      requiresAuth: true\n    }\n  }, {\n    path: '/reset',\n    name: 'Reset',\n    // route level code-splitting\n    // this generates a separate chunk (About.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: _views_ResetView_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    path: '/propriety/create',\n    name: 'Create',\n    // route level code-splitting\n    // this generates a separate chunk (About.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: _views_Propriety_ProprietyCreateFormView__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    meta: {\n      requiresAuth: true\n    }\n  }, {\n    path: '/contruccion',\n    name: 'Contruccion',\n    // route level code-splitting\n    // this generates a separate chunk (About.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: _views_ContructionPageView__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    meta: {\n      requiresAuth: true\n    }\n  }]\n});\nconst getCurrentUser = () => {\n  return new Promise((resolve, reject) => {\n    const removeListener = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.onAuthStateChanged)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.getAuth)(), user => {\n      removeListener();\n      resolve(user);\n    }, reject);\n  });\n};\nrouter.beforeEach(async (to, from, next) => {\n  if (to.matched.some(record => record.meta.requiresAuth)) {\n    if (await getCurrentUser()) {\n      next();\n    } else {\n      alert(\"Usted no tiene acceso\");\n      next(\"/\");\n    }\n  } else {\n    next();\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLXBvcnRhLy4vc3JjL3JvdXRlci5qcz80YzgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciwgY3JlYXRlV2ViSGlzdG9yeSB9IGZyb20gJ3Z1ZS1yb3V0ZXInXHJcbmltcG9ydCBMb2dpblZpZXcgZnJvbSAnQC92aWV3cy9Mb2dpblZpZXcudnVlJ1xyXG5pbXBvcnQgSG9tZVZpZXcgZnJvbSAnQC92aWV3cy9Ib21lVmlldy52dWUnXHJcbmltcG9ydCBSZWdpc3RlclZpZXcgZnJvbSAnQC92aWV3cy9SZWdpc3RlclZpZXcudnVlJ1xyXG5pbXBvcnQgUmVzZXRWaWV3IGZyb20gJ0Avdmlld3MvUmVzZXRWaWV3LnZ1ZSdcclxuaW1wb3J0IFByb3ByaWV0eVZpZXcgZnJvbSAnQC92aWV3cy9Qcm9wcmlldHlWaWV3J1xyXG5pbXBvcnQgUHJvcHJpZXR5Q3JlYXRlRm9ybVZpZXcgZnJvbSAnQC92aWV3cy9Qcm9wcmlldHkvUHJvcHJpZXR5Q3JlYXRlRm9ybVZpZXcnXHJcbmltcG9ydCBDb250cnVjdGlvblBhZ2VWaWV3IGZyb20gJ0Avdmlld3MvQ29udHJ1Y3Rpb25QYWdlVmlldydcclxuXHJcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xyXG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoaW1wb3J0Lm1ldGEuZW52LkJBU0VfVVJMKSxcclxuICByb3V0ZXM6IFtcclxuICAgIHtcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgICBuYW1lOiAnbG9naW4nLFxyXG4gICAgICBjb21wb25lbnQ6IExvZ2luVmlldyxcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnL2hvbWUnLFxyXG4gICAgICBuYW1lOiAnZGFzaGJvYXJkJyxcclxuICAgICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcclxuICAgICAgLy8gdGhpcyBnZW5lcmF0ZXMgYSBzZXBhcmF0ZSBjaHVuayAoQWJvdXQuW2hhc2hdLmpzKSBmb3IgdGhpcyByb3V0ZVxyXG4gICAgICAvLyB3aGljaCBpcyBsYXp5LWxvYWRlZCB3aGVuIHRoZSByb3V0ZSBpcyB2aXNpdGVkLlxyXG4gICAgICBjb21wb25lbnQ6IEhvbWVWaWV3LFxyXG4gICAgICBtZXRhOiB7XHJcbiAgICAgICAgcmVxdWlyZXNBdXRoOiB0cnVlLFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnL3JlZ2lzdGVyJyxcclxuICAgICAgbmFtZTogJ3JlZ2lzdHJvJyxcclxuICAgICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcclxuICAgICAgLy8gdGhpcyBnZW5lcmF0ZXMgYSBzZXBhcmF0ZSBjaHVuayAoQWJvdXQuW2hhc2hdLmpzKSBmb3IgdGhpcyByb3V0ZVxyXG4gICAgICAvLyB3aGljaCBpcyBsYXp5LWxvYWRlZCB3aGVuIHRoZSByb3V0ZSBpcyB2aXNpdGVkLlxyXG4gICAgICBjb21wb25lbnQ6IFJlZ2lzdGVyVmlldyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6ICcvcHJvcHJpZXR5JyxcclxuICAgICAgbmFtZTogJ0JpZW5lcyBSYWljZXMnLFxyXG4gICAgICAvLyByb3V0ZSBsZXZlbCBjb2RlLXNwbGl0dGluZ1xyXG4gICAgICAvLyB0aGlzIGdlbmVyYXRlcyBhIHNlcGFyYXRlIGNodW5rIChBYm91dC5baGFzaF0uanMpIGZvciB0aGlzIHJvdXRlXHJcbiAgICAgIC8vIHdoaWNoIGlzIGxhenktbG9hZGVkIHdoZW4gdGhlIHJvdXRlIGlzIHZpc2l0ZWQuXHJcbiAgICAgIGNvbXBvbmVudDogUHJvcHJpZXR5VmlldyxcclxuICAgICAgbWV0YToge1xyXG4gICAgICAgIHJlcXVpcmVzQXV0aDogdHJ1ZSxcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogJy9yZXNldCcsXHJcbiAgICAgIG5hbWU6ICdSZXNldCcsXHJcbiAgICAgIC8vIHJvdXRlIGxldmVsIGNvZGUtc3BsaXR0aW5nXHJcbiAgICAgIC8vIHRoaXMgZ2VuZXJhdGVzIGEgc2VwYXJhdGUgY2h1bmsgKEFib3V0LltoYXNoXS5qcykgZm9yIHRoaXMgcm91dGVcclxuICAgICAgLy8gd2hpY2ggaXMgbGF6eS1sb2FkZWQgd2hlbiB0aGUgcm91dGUgaXMgdmlzaXRlZC5cclxuICAgICAgY29tcG9uZW50OiBSZXNldFZpZXcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnL3Byb3ByaWV0eS9jcmVhdGUnLFxyXG4gICAgICBuYW1lOiAnQ3JlYXRlJyxcclxuICAgICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcclxuICAgICAgLy8gdGhpcyBnZW5lcmF0ZXMgYSBzZXBhcmF0ZSBjaHVuayAoQWJvdXQuW2hhc2hdLmpzKSBmb3IgdGhpcyByb3V0ZVxyXG4gICAgICAvLyB3aGljaCBpcyBsYXp5LWxvYWRlZCB3aGVuIHRoZSByb3V0ZSBpcyB2aXNpdGVkLlxyXG4gICAgICBjb21wb25lbnQ6IFByb3ByaWV0eUNyZWF0ZUZvcm1WaWV3LFxyXG4gICAgICBtZXRhOiB7XHJcbiAgICAgICAgcmVxdWlyZXNBdXRoOiB0cnVlLFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnL2NvbnRydWNjaW9uJyxcclxuICAgICAgbmFtZTogJ0NvbnRydWNjaW9uJyxcclxuICAgICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcclxuICAgICAgLy8gdGhpcyBnZW5lcmF0ZXMgYSBzZXBhcmF0ZSBjaHVuayAoQWJvdXQuW2hhc2hdLmpzKSBmb3IgdGhpcyByb3V0ZVxyXG4gICAgICAvLyB3aGljaCBpcyBsYXp5LWxvYWRlZCB3aGVuIHRoZSByb3V0ZSBpcyB2aXNpdGVkLlxyXG4gICAgICBjb21wb25lbnQ6IENvbnRydWN0aW9uUGFnZVZpZXcsXHJcbiAgICAgIG1ldGE6IHtcclxuICAgICAgICByZXF1aXJlc0F1dGg6IHRydWUsXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXSxcclxufSk7XHJcblxyXG5jb25zdCBnZXRDdXJyZW50VXNlciA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVtb3ZlTGlzdGVuZXIgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoXHJcbiAgICAgIGdldEF1dGgoKSxcclxuICAgICAgKHVzZXIpID0+IHtcclxuICAgICAgICByZW1vdmVMaXN0ZW5lcigpO1xyXG4gICAgICAgIHJlc29sdmUodXNlcik7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlamVjdFxyXG4gICAgKTtcclxuICB9KTtcclxufTtcclxuXHJcbnJvdXRlci5iZWZvcmVFYWNoKGFzeW5jKHRvLCBmcm9tLCBuZXh0KSA9PntcclxuICBpZiAodG8ubWF0Y2hlZC5zb21lKChyZWNvcmQpID0+IHJlY29yZC5tZXRhLnJlcXVpcmVzQXV0aCkpIHtcclxuICAgIGlmIChhd2FpdCBnZXRDdXJyZW50VXNlcigpKSB7XHJcbiAgICAgICBuZXh0KCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgYWxlcnQoXCJVc3RlZCBubyB0aWVuZSBhY2Nlc29cIik7XHJcbiAgICAgIG5leHQoXCIvXCIpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG5leHQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "75a9b5828c6beb88"; }
/******/ }();
/******/ 
/******/ }
);