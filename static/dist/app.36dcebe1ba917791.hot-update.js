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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProprietyInfoView.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProprietyInfoView.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProprietyInfoView',\n  props: ['id'],\n  // Recibe el ID de la propiedad como prop\n  data() {\n    return {\n      property: null // Almacenará los detalles de la propiedad\n    };\n  },\n  mounted() {\n    // Llama al método para obtener los detalles de la propiedad cuando se monta el componente\n    this.getPropertyDetails(this.id);\n  },\n  methods: {\n    // Método para obtener los detalles de la propiedad\n    getPropertyDetails(id) {\n      // Ejemplo de datos estáticos\n      const properties = [{\n        id: 1,\n        name: \"Cozy Apartment\",\n        price: 150000,\n        bedrooms: 2,\n        bathrooms: 1,\n        images: [\"https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg\", \"https://canalhogar.com/wp-content/uploads/2023/10/casa_de_2_pisos_con_garaje_y_3_dormitorios_1.jpg\"]\n      }, {\n        id: 2,\n        name: \"Spacious House\",\n        price: 300000,\n        bedrooms: 4,\n        bathrooms: 3,\n        images: [\"https://i.ytimg.com/vi/x7UflKOhhe4/maxresdefault.jpg\", \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhMHpwiU1LkmFzRnc6Xif5suMbV8j-shbpeROCoicN6qBX8_-QUoKKs6BAlCjuO5v2Oo\"]\n      }, {\n        id: 3,\n        name: \"Luxury Villa\",\n        price: 750000,\n        bedrooms: 6,\n        bathrooms: 4,\n        images: [\"https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560\", \"https://images.adsttc.com/media/images/5d34/e684/284d/d131/4700/0124/newsletter/Casa_H_ELEVACI%C3%93N_POSTERIOR.jpg?1563747941\"]\n      }];\n\n      // Encuentra la propiedad por ID\n      this.property = properties.find(property => property.id === parseInt(id));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9Qcm9wcmlldHlJbmZvVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6IjtBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1wb3J0YS8uL3NyYy92aWV3cy9Qcm9wcmlldHlJbmZvVmlldy52dWU/MTliMiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8RGFzaGJvYXJkLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1pbmZvLXZpZXdcIj5cclxuICAgICAgPGgyPkluZm9ybWFjacOzbiBkZSBsYSBQcm9waWVkYWQ8L2gyPlxyXG4gICAgICA8ZGl2IHYtaWY9XCJwcm9wZXJ0eVwiPlxyXG4gICAgICAgIDxoMz57eyBwcm9wZXJ0eS5uYW1lIH19PC9oMz5cclxuICAgICAgICA8cD5QcmVjaW86ICR7eyBwcm9wZXJ0eS5wcmljZSB9fTwvcD5cclxuICAgICAgICA8cD5Eb3JtaXRvcmlvczoge3sgcHJvcGVydHkuYmVkcm9vbXMgfX08L3A+XHJcbiAgICAgICAgPHA+QmHDsW9zOiB7eyBwcm9wZXJ0eS5iYXRocm9vbXMgfX08L3A+XHJcbiAgICAgICAgPCEtLSBNb3N0cmFyIGxhcyBpbcOhZ2VuZXMgZGUgbGEgcHJvcGllZGFkIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktaW1hZ2VzXCI+XHJcbiAgICAgICAgPGltZyB2LWZvcj1cIihpbWFnZSwgaW5kZXgpIGluIHByb3BlcnR5LmltYWdlc1wiIDprZXk9XCJpbmRleFwiIDpzcmM9XCJpbWFnZVwiIGFsdD1cIlByb3BlcnR5IEltYWdlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gT3Ryb3MgZGV0YWxsZXMgZGUgbGEgcHJvcGllZGFkLi4uIC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdQcm9wcmlldHlJbmZvVmlldycsXHJcbiAgcHJvcHM6IFsnaWQnXSwgLy8gUmVjaWJlIGVsIElEIGRlIGxhIHByb3BpZWRhZCBjb21vIHByb3BcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcGVydHk6IG51bGwgLy8gQWxtYWNlbmFyw6EgbG9zIGRldGFsbGVzIGRlIGxhIHByb3BpZWRhZFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIC8vIExsYW1hIGFsIG3DqXRvZG8gcGFyYSBvYnRlbmVyIGxvcyBkZXRhbGxlcyBkZSBsYSBwcm9waWVkYWQgY3VhbmRvIHNlIG1vbnRhIGVsIGNvbXBvbmVudGVcclxuICAgIHRoaXMuZ2V0UHJvcGVydHlEZXRhaWxzKHRoaXMuaWQpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLy8gTcOpdG9kbyBwYXJhIG9idGVuZXIgbG9zIGRldGFsbGVzIGRlIGxhIHByb3BpZWRhZFxyXG4gICAgZ2V0UHJvcGVydHlEZXRhaWxzKGlkKSB7XHJcbiAgICAgIC8vIEVqZW1wbG8gZGUgZGF0b3MgZXN0w6F0aWNvc1xyXG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBpZDogMSwgXHJcbiAgICAgICAgICBuYW1lOiBcIkNvenkgQXBhcnRtZW50XCIsIFxyXG4gICAgICAgICAgcHJpY2U6IDE1MDAwMCwgXHJcbiAgICAgICAgICBiZWRyb29tczogMiwgXHJcbiAgICAgICAgICBiYXRocm9vbXM6IDEsIFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXCJodHRwczovL2NhbmFsaG9nYXIuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzEwLzI1LXBsYW5vcy15LURpc2Vub3MtZGUtQ2FzYXMtZGUtMi1QaXNvcy1Nb2Rlcm5hcy04MDB4NjAwLmpwZ1wiLFwiaHR0cHM6Ly9jYW5hbGhvZ2FyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8xMC9jYXNhX2RlXzJfcGlzb3NfY29uX2dhcmFqZV95XzNfZG9ybWl0b3Jpb3NfMS5qcGdcIl0gXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgaWQ6IDIsIFxyXG4gICAgICAgICAgbmFtZTogXCJTcGFjaW91cyBIb3VzZVwiLCBcclxuICAgICAgICAgIHByaWNlOiAzMDAwMDAsIFxyXG4gICAgICAgICAgYmVkcm9vbXM6IDQsIFxyXG4gICAgICAgICAgYmF0aHJvb21zOiAzLCBcclxuICAgICAgICAgIGltYWdlczogW1wiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS94N1VmbEtPaGhlNC9tYXhyZXNkZWZhdWx0LmpwZ1wiLFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU0VoTUhwd2lVMUxrbUZ6Um5jNlhpZjVzdU1iVjhqLXNoYnBlUk9Db2ljTjZxQlg4Xy1RVW9LS3M2QkFsQ2p1TzV2Mk9vXCJdIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgIGlkOiAzLCBcclxuICAgICAgICAgIG5hbWU6IFwiTHV4dXJ5IFZpbGxhXCIsIFxyXG4gICAgICAgICAgcHJpY2U6IDc1MDAwMCwgXHJcbiAgICAgICAgICBiZWRyb29tczogNiwgXHJcbiAgICAgICAgICBiYXRocm9vbXM6IDQsIFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXCJodHRwczovL2ltYWdlcy5hZHN0dGMuY29tL21lZGlhL2ltYWdlcy81ZDM0L2U1MDcvMjg0ZC9kMTA5LzU2MDAvMDI0MC9uZXdzbGV0dGVyL19GSS5qcGc/MTU2Mzc0NzU2MFwiLFwiaHR0cHM6Ly9pbWFnZXMuYWRzdHRjLmNvbS9tZWRpYS9pbWFnZXMvNWQzNC9lNjg0LzI4NGQvZDEzMS80NzAwLzAxMjQvbmV3c2xldHRlci9DYXNhX0hfRUxFVkFDSSVDMyU5M05fUE9TVEVSSU9SLmpwZz8xNTYzNzQ3OTQxXCJdIFxyXG4gICAgICAgIH1cclxuICAgICAgXTtcclxuICAgICAgXHJcbiAgICAgIC8vIEVuY3VlbnRyYSBsYSBwcm9waWVkYWQgcG9yIElEXHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0aWVzLmZpbmQocHJvcGVydHkgPT4gcHJvcGVydHkuaWQgPT09IHBhcnNlSW50KGlkKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLyogRXN0aWxvcyBlc3BlY8OtZmljb3MgcGFyYSBsYSB2aXN0YSBkZSBpbmZvcm1hY2nDs24gZGUgbGEgcHJvcGllZGFkICovXHJcbi5wcm9wZXJ0eS1pbmZvLXZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogQWxpbmVhY2nDs24gdmVydGljYWwgKi9cclxuICB3aWR0aDogNjAwcHg7IC8qIEFuY2hvIGRlbCBjb250ZW5lZG9yICovXHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRyYXIgZWwgY29udGVuZWRvciBob3Jpem9udGFsbWVudGUgKi9cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnByb3BlcnR5LWluZm8tdmlldyBoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pbmZvLXZpZXcgaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnByb3BlcnR5LWluZm8tdmlldyBwIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi8qIEVzdGlsb3MgcGFyYSBkZXRhbGxlcyBkZSBsYSBwcm9waWVkYWQgKi9cclxuLnByb3BlcnR5LWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBQZXJtaXRlIHF1ZSBsb3MgZWxlbWVudG9zIHNlIGFqdXN0ZW4gZW4gdmFyaWFzIGZpbGFzIHNpIGVzIG5lY2VzYXJpbyAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogRGlzdHJpYnV5ZSBsb3MgZWxlbWVudG9zIHVuaWZvcm1lbWVudGUgKi9cclxufVxyXG5cclxuLnByb3BlcnR5LWRldGFpbHMgcCB7XHJcbiAgZmxleDogMTsgLyogT2N1cGEgZWwgZXNwYWNpbyBkaXNwb25pYmxlICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogRXN0aWxvIHBhcmEgbGEgcHJvcGllZGFkIFwiR2FyYWplXCIgKi9cclxuLnByb3BlcnR5LWRldGFpbHMgcDpsYXN0LWNoaWxkIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDsgLyogQWxpbmVhIGVsIHRleHRvIGEgbGEgZGVyZWNoYSAqL1xyXG59XHJcbi8qIEVzdGlsb3MgcGFyYSBsYXMgaW3DoWdlbmVzIGRlIGxhIHByb3BpZWRhZCAqL1xyXG4ucHJvcGVydHktaW1hZ2VzIHtcclxuICBkaXNwbGF5OiBmbGV4OyAvKiBDb2xvY2EgbGFzIGltw6FnZW5lcyBlbiB1bmEgZmlsYSAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIEFsaW5lYWNpw7NuIGhvcml6b250YWwgKi9cclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBFc3BhY2lvIGluZmVyaW9yICovXHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pbWFnZXMgaW1nIHtcclxuICBmbGV4OiAxIDAgYXV0bzsgLyogT2N1cGEgZWwgZXNwYWNpbyBkaXNwb25pYmxlIHByb3BvcmNpb25hbG1lbnRlICovXHJcbiAgbWFyZ2luOiAwIDEwcHg7IC8qIEVzcGFjaW8gZW50cmUgaW3DoWdlbmVzICovXHJcbiAgbWF4LXdpZHRoOiAzMDBweDsgLyogQW5jaG8gbcOheGltbyBwYXJhIGNhZGEgaW1hZ2VuICovXHJcbiAgaGVpZ2h0OiBhdXRvOyAvKiBNYW50aWVuZSBsYSBwcm9wb3JjacOzbiBkZSBhc3BlY3RvICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogQm9yZGUgZ3JpcyBjbGFybyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgLyogRXNxdWluYXMgcmVkb25kZWFkYXMgKi9cclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTb21icmEgc3V0aWwgKi9cclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlOyAvKiBBbmltYWNpw7NuIGRlIHRyYW5zaWNpw7NuIHBhcmEgZWwgZWZlY3RvIGhvdmVyICovXHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pbWFnZXMgaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEF1bWVudGEgZWwgdGFtYcOxbyBkZSBsYSBpbWFnZW4gYWwgcGFzYXIgZWwgY3Vyc29yICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgLyogU29tYnJhIG3DoXMgb3NjdXJhIGFsIHBhc2FyIGVsIGN1cnNvciAqL1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProprietyInfoView.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProprietyInfoView.vue?vue&type=template&id=13749ed9&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProprietyInfoView.vue?vue&type=template&id=13749ed9&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-13749ed9\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"property-info-view\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"Información de la Propiedad\", -1 /* HOISTED */));\nconst _hoisted_3 = {\n  key: 0\n};\nconst _hoisted_4 = {\n  class: \"property-images\"\n};\nconst _hoisted_5 = [\"src\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Dashboard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Dashboard\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dashboard), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [_hoisted_2, $data.property ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.property.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Precio: $\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.property.price), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Dormitorios: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.property.bedrooms), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Baños: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.property.bathrooms), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Mostrar las imágenes de la propiedad \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.property.images, (image, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"img\", {\n      key: index,\n      src: image,\n      alt: \"Property Image\"\n    }, null, 8 /* PROPS */, _hoisted_5);\n  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Otros detalles de la propiedad... \")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)])], 64 /* STABLE_FRAGMENT */);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvdmlld3MvUHJvcHJpZXR5SW5mb1ZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzNzQ5ZWQ5JnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBQUE7O0FBVUE7QUFBQTtBQVZBOzs7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFhQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1wb3J0YS8uL3NyYy92aWV3cy9Qcm9wcmlldHlJbmZvVmlldy52dWU/MTliMiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8RGFzaGJvYXJkLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1pbmZvLXZpZXdcIj5cclxuICAgICAgPGgyPkluZm9ybWFjacOzbiBkZSBsYSBQcm9waWVkYWQ8L2gyPlxyXG4gICAgICA8ZGl2IHYtaWY9XCJwcm9wZXJ0eVwiPlxyXG4gICAgICAgIDxoMz57eyBwcm9wZXJ0eS5uYW1lIH19PC9oMz5cclxuICAgICAgICA8cD5QcmVjaW86ICR7eyBwcm9wZXJ0eS5wcmljZSB9fTwvcD5cclxuICAgICAgICA8cD5Eb3JtaXRvcmlvczoge3sgcHJvcGVydHkuYmVkcm9vbXMgfX08L3A+XHJcbiAgICAgICAgPHA+QmHDsW9zOiB7eyBwcm9wZXJ0eS5iYXRocm9vbXMgfX08L3A+XHJcbiAgICAgICAgPCEtLSBNb3N0cmFyIGxhcyBpbcOhZ2VuZXMgZGUgbGEgcHJvcGllZGFkIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktaW1hZ2VzXCI+XHJcbiAgICAgICAgPGltZyB2LWZvcj1cIihpbWFnZSwgaW5kZXgpIGluIHByb3BlcnR5LmltYWdlc1wiIDprZXk9XCJpbmRleFwiIDpzcmM9XCJpbWFnZVwiIGFsdD1cIlByb3BlcnR5IEltYWdlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gT3Ryb3MgZGV0YWxsZXMgZGUgbGEgcHJvcGllZGFkLi4uIC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdQcm9wcmlldHlJbmZvVmlldycsXHJcbiAgcHJvcHM6IFsnaWQnXSwgLy8gUmVjaWJlIGVsIElEIGRlIGxhIHByb3BpZWRhZCBjb21vIHByb3BcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcGVydHk6IG51bGwgLy8gQWxtYWNlbmFyw6EgbG9zIGRldGFsbGVzIGRlIGxhIHByb3BpZWRhZFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIC8vIExsYW1hIGFsIG3DqXRvZG8gcGFyYSBvYnRlbmVyIGxvcyBkZXRhbGxlcyBkZSBsYSBwcm9waWVkYWQgY3VhbmRvIHNlIG1vbnRhIGVsIGNvbXBvbmVudGVcclxuICAgIHRoaXMuZ2V0UHJvcGVydHlEZXRhaWxzKHRoaXMuaWQpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLy8gTcOpdG9kbyBwYXJhIG9idGVuZXIgbG9zIGRldGFsbGVzIGRlIGxhIHByb3BpZWRhZFxyXG4gICAgZ2V0UHJvcGVydHlEZXRhaWxzKGlkKSB7XHJcbiAgICAgIC8vIEVqZW1wbG8gZGUgZGF0b3MgZXN0w6F0aWNvc1xyXG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBpZDogMSwgXHJcbiAgICAgICAgICBuYW1lOiBcIkNvenkgQXBhcnRtZW50XCIsIFxyXG4gICAgICAgICAgcHJpY2U6IDE1MDAwMCwgXHJcbiAgICAgICAgICBiZWRyb29tczogMiwgXHJcbiAgICAgICAgICBiYXRocm9vbXM6IDEsIFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXCJodHRwczovL2NhbmFsaG9nYXIuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzEwLzI1LXBsYW5vcy15LURpc2Vub3MtZGUtQ2FzYXMtZGUtMi1QaXNvcy1Nb2Rlcm5hcy04MDB4NjAwLmpwZ1wiLFwiaHR0cHM6Ly9jYW5hbGhvZ2FyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8xMC9jYXNhX2RlXzJfcGlzb3NfY29uX2dhcmFqZV95XzNfZG9ybWl0b3Jpb3NfMS5qcGdcIl0gXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgaWQ6IDIsIFxyXG4gICAgICAgICAgbmFtZTogXCJTcGFjaW91cyBIb3VzZVwiLCBcclxuICAgICAgICAgIHByaWNlOiAzMDAwMDAsIFxyXG4gICAgICAgICAgYmVkcm9vbXM6IDQsIFxyXG4gICAgICAgICAgYmF0aHJvb21zOiAzLCBcclxuICAgICAgICAgIGltYWdlczogW1wiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS94N1VmbEtPaGhlNC9tYXhyZXNkZWZhdWx0LmpwZ1wiLFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU0VoTUhwd2lVMUxrbUZ6Um5jNlhpZjVzdU1iVjhqLXNoYnBlUk9Db2ljTjZxQlg4Xy1RVW9LS3M2QkFsQ2p1TzV2Mk9vXCJdIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgIGlkOiAzLCBcclxuICAgICAgICAgIG5hbWU6IFwiTHV4dXJ5IFZpbGxhXCIsIFxyXG4gICAgICAgICAgcHJpY2U6IDc1MDAwMCwgXHJcbiAgICAgICAgICBiZWRyb29tczogNiwgXHJcbiAgICAgICAgICBiYXRocm9vbXM6IDQsIFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXCJodHRwczovL2ltYWdlcy5hZHN0dGMuY29tL21lZGlhL2ltYWdlcy81ZDM0L2U1MDcvMjg0ZC9kMTA5LzU2MDAvMDI0MC9uZXdzbGV0dGVyL19GSS5qcGc/MTU2Mzc0NzU2MFwiLFwiaHR0cHM6Ly9pbWFnZXMuYWRzdHRjLmNvbS9tZWRpYS9pbWFnZXMvNWQzNC9lNjg0LzI4NGQvZDEzMS80NzAwLzAxMjQvbmV3c2xldHRlci9DYXNhX0hfRUxFVkFDSSVDMyU5M05fUE9TVEVSSU9SLmpwZz8xNTYzNzQ3OTQxXCJdIFxyXG4gICAgICAgIH1cclxuICAgICAgXTtcclxuICAgICAgXHJcbiAgICAgIC8vIEVuY3VlbnRyYSBsYSBwcm9waWVkYWQgcG9yIElEXHJcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0aWVzLmZpbmQocHJvcGVydHkgPT4gcHJvcGVydHkuaWQgPT09IHBhcnNlSW50KGlkKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLyogRXN0aWxvcyBlc3BlY8OtZmljb3MgcGFyYSBsYSB2aXN0YSBkZSBpbmZvcm1hY2nDs24gZGUgbGEgcHJvcGllZGFkICovXHJcbi5wcm9wZXJ0eS1pbmZvLXZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogQWxpbmVhY2nDs24gdmVydGljYWwgKi9cclxuICB3aWR0aDogNjAwcHg7IC8qIEFuY2hvIGRlbCBjb250ZW5lZG9yICovXHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRyYXIgZWwgY29udGVuZWRvciBob3Jpem9udGFsbWVudGUgKi9cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnByb3BlcnR5LWluZm8tdmlldyBoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pbmZvLXZpZXcgaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnByb3BlcnR5LWluZm8tdmlldyBwIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi8qIEVzdGlsb3MgcGFyYSBkZXRhbGxlcyBkZSBsYSBwcm9waWVkYWQgKi9cclxuLnByb3BlcnR5LWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBQZXJtaXRlIHF1ZSBsb3MgZWxlbWVudG9zIHNlIGFqdXN0ZW4gZW4gdmFyaWFzIGZpbGFzIHNpIGVzIG5lY2VzYXJpbyAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogRGlzdHJpYnV5ZSBsb3MgZWxlbWVudG9zIHVuaWZvcm1lbWVudGUgKi9cclxufVxyXG5cclxuLnByb3BlcnR5LWRldGFpbHMgcCB7XHJcbiAgZmxleDogMTsgLyogT2N1cGEgZWwgZXNwYWNpbyBkaXNwb25pYmxlICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogRXN0aWxvIHBhcmEgbGEgcHJvcGllZGFkIFwiR2FyYWplXCIgKi9cclxuLnByb3BlcnR5LWRldGFpbHMgcDpsYXN0LWNoaWxkIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDsgLyogQWxpbmVhIGVsIHRleHRvIGEgbGEgZGVyZWNoYSAqL1xyXG59XHJcbi8qIEVzdGlsb3MgcGFyYSBsYXMgaW3DoWdlbmVzIGRlIGxhIHByb3BpZWRhZCAqL1xyXG4ucHJvcGVydHktaW1hZ2VzIHtcclxuICBkaXNwbGF5OiBmbGV4OyAvKiBDb2xvY2EgbGFzIGltw6FnZW5lcyBlbiB1bmEgZmlsYSAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIEFsaW5lYWNpw7NuIGhvcml6b250YWwgKi9cclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBFc3BhY2lvIGluZmVyaW9yICovXHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pbWFnZXMgaW1nIHtcclxuICBmbGV4OiAxIDAgYXV0bzsgLyogT2N1cGEgZWwgZXNwYWNpbyBkaXNwb25pYmxlIHByb3BvcmNpb25hbG1lbnRlICovXHJcbiAgbWFyZ2luOiAwIDEwcHg7IC8qIEVzcGFjaW8gZW50cmUgaW3DoWdlbmVzICovXHJcbiAgbWF4LXdpZHRoOiAzMDBweDsgLyogQW5jaG8gbcOheGltbyBwYXJhIGNhZGEgaW1hZ2VuICovXHJcbiAgaGVpZ2h0OiBhdXRvOyAvKiBNYW50aWVuZSBsYSBwcm9wb3JjacOzbiBkZSBhc3BlY3RvICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogQm9yZGUgZ3JpcyBjbGFybyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgLyogRXNxdWluYXMgcmVkb25kZWFkYXMgKi9cclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTb21icmEgc3V0aWwgKi9cclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlOyAvKiBBbmltYWNpw7NuIGRlIHRyYW5zaWNpw7NuIHBhcmEgZWwgZWZlY3RvIGhvdmVyICovXHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1pbWFnZXMgaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEF1bWVudGEgZWwgdGFtYcOxbyBkZSBsYSBpbWFnZW4gYWwgcGFzYXIgZWwgY3Vyc29yICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgLyogU29tYnJhIG3DoXMgb3NjdXJhIGFsIHBhc2FyIGVsIGN1cnNvciAqL1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProprietyInfoView.vue?vue&type=template&id=13749ed9&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProprietyInfoView.vue?vue&type=style&index=0&id=13749ed9&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProprietyInfoView.vue?vue&type=style&index=0&id=13749ed9&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n/* Estilos específicos para la vista de información de la propiedad */\\n.property-info-view[data-v-13749ed9] {\\r\\n  display: flex;\\r\\n  flex-direction: column; /* Alineación vertical */\\r\\n  width: 600px; /* Ancho del contenedor */\\r\\n  margin: 0 auto; /* Centrar el contenedor horizontalmente */\\r\\n  padding: 20px;\\r\\n  border: 1px solid #ccc;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\\r\\n  background-color: #fff;\\n}\\n.property-info-view h2[data-v-13749ed9] {\\r\\n  text-align: center;\\r\\n  margin-bottom: 20px;\\r\\n  font-size: 2rem;\\r\\n  font-weight: 600;\\r\\n  color: #333;\\n}\\n.property-info-view h3[data-v-13749ed9] {\\r\\n  margin-bottom: 10px;\\r\\n  font-size: 1.6rem;\\r\\n  font-weight: 500;\\r\\n  color: #333;\\n}\\n.property-info-view p[data-v-13749ed9] {\\r\\n  margin-bottom: 5px;\\r\\n  font-size: 1rem;\\r\\n  line-height: 1.6;\\r\\n  color: #666;\\n}\\r\\n\\r\\n/* Estilos para detalles de la propiedad */\\n.property-details[data-v-13749ed9] {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap; /* Permite que los elementos se ajusten en varias filas si es necesario */\\r\\n  justify-content: space-between; /* Distribuye los elementos uniformemente */\\n}\\n.property-details p[data-v-13749ed9] {\\r\\n  flex: 1; /* Ocupa el espacio disponible */\\r\\n  margin-bottom: 10px;\\n}\\r\\n\\r\\n/* Estilo para la propiedad \\\"Garaje\\\" */\\n.property-details p[data-v-13749ed9]:last-child {\\r\\n  text-align: right; /* Alinea el texto a la derecha */\\n}\\r\\n/* Estilos para las imágenes de la propiedad */\\n.property-images[data-v-13749ed9] {\\r\\n  display: flex; /* Coloca las imágenes en una fila */\\r\\n  flex-direction: row; /* Alineación horizontal */\\r\\n  margin-bottom: 20px; /* Espacio inferior */\\n}\\n.property-images img[data-v-13749ed9] {\\r\\n  flex: 1 0 auto; /* Ocupa el espacio disponible proporcionalmente */\\r\\n  margin: 0 10px; /* Espacio entre imágenes */\\r\\n  max-width: 300px; /* Ancho máximo para cada imagen */\\r\\n  height: auto; /* Mantiene la proporción de aspecto */\\r\\n  border: 1px solid #ddd; /* Borde gris claro */\\r\\n  border-radius: 8px; /* Esquinas redondeadas */\\r\\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */\\r\\n  transition: transform 0.3s ease; /* Animación de transición para el efecto hover */\\n}\\n.property-images img[data-v-13749ed9]:hover {\\r\\n  transform: scale(1.1); /* Aumenta el tamaño de la imagen al pasar el cursor */\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra más oscura al pasar el cursor */\\n}\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9Qcm9wcmlldHlJbmZvVmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzc0OWVkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtcG9ydGEvLi9zcmMvdmlld3MvUHJvcHJpZXR5SW5mb1ZpZXcudnVlPzBlMGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9ub1NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qIEVzdGlsb3MgZXNwZWPDrWZpY29zIHBhcmEgbGEgdmlzdGEgZGUgaW5mb3JtYWNpw7NuIGRlIGxhIHByb3BpZWRhZCAqL1xcbi5wcm9wZXJ0eS1pbmZvLXZpZXdbZGF0YS12LTEzNzQ5ZWQ5XSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogQWxpbmVhY2nDs24gdmVydGljYWwgKi9cXHJcXG4gIHdpZHRoOiA2MDBweDsgLyogQW5jaG8gZGVsIGNvbnRlbmVkb3IgKi9cXHJcXG4gIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50cmFyIGVsIGNvbnRlbmVkb3IgaG9yaXpvbnRhbG1lbnRlICovXFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ucHJvcGVydHktaW5mby12aWV3IGgyW2RhdGEtdi0xMzc0OWVkOV0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzMzMztcXG59XFxuLnByb3BlcnR5LWluZm8tdmlldyBoM1tkYXRhLXYtMTM3NDllZDldIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogIzMzMztcXG59XFxuLnByb3BlcnR5LWluZm8tdmlldyBwW2RhdGEtdi0xMzc0OWVkOV0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXHJcXG5cXHJcXG4vKiBFc3RpbG9zIHBhcmEgZGV0YWxsZXMgZGUgbGEgcHJvcGllZGFkICovXFxuLnByb3BlcnR5LWRldGFpbHNbZGF0YS12LTEzNzQ5ZWQ5XSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwOyAvKiBQZXJtaXRlIHF1ZSBsb3MgZWxlbWVudG9zIHNlIGFqdXN0ZW4gZW4gdmFyaWFzIGZpbGFzIHNpIGVzIG5lY2VzYXJpbyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBEaXN0cmlidXllIGxvcyBlbGVtZW50b3MgdW5pZm9ybWVtZW50ZSAqL1xcbn1cXG4ucHJvcGVydHktZGV0YWlscyBwW2RhdGEtdi0xMzc0OWVkOV0ge1xcclxcbiAgZmxleDogMTsgLyogT2N1cGEgZWwgZXNwYWNpbyBkaXNwb25pYmxlICovXFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXHJcXG5cXHJcXG4vKiBFc3RpbG8gcGFyYSBsYSBwcm9waWVkYWQgXFxcIkdhcmFqZVxcXCIgKi9cXG4ucHJvcGVydHktZGV0YWlscyBwW2RhdGEtdi0xMzc0OWVkOV06bGFzdC1jaGlsZCB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDsgLyogQWxpbmVhIGVsIHRleHRvIGEgbGEgZGVyZWNoYSAqL1xcbn1cXHJcXG4vKiBFc3RpbG9zIHBhcmEgbGFzIGltw6FnZW5lcyBkZSBsYSBwcm9waWVkYWQgKi9cXG4ucHJvcGVydHktaW1hZ2VzW2RhdGEtdi0xMzc0OWVkOV0ge1xcclxcbiAgZGlzcGxheTogZmxleDsgLyogQ29sb2NhIGxhcyBpbcOhZ2VuZXMgZW4gdW5hIGZpbGEgKi9cXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIEFsaW5lYWNpw7NuIGhvcml6b250YWwgKi9cXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEVzcGFjaW8gaW5mZXJpb3IgKi9cXG59XFxuLnByb3BlcnR5LWltYWdlcyBpbWdbZGF0YS12LTEzNzQ5ZWQ5XSB7XFxyXFxuICBmbGV4OiAxIDAgYXV0bzsgLyogT2N1cGEgZWwgZXNwYWNpbyBkaXNwb25pYmxlIHByb3BvcmNpb25hbG1lbnRlICovXFxyXFxuICBtYXJnaW46IDAgMTBweDsgLyogRXNwYWNpbyBlbnRyZSBpbcOhZ2VuZXMgKi9cXHJcXG4gIG1heC13aWR0aDogMzAwcHg7IC8qIEFuY2hvIG3DoXhpbW8gcGFyYSBjYWRhIGltYWdlbiAqL1xcclxcbiAgaGVpZ2h0OiBhdXRvOyAvKiBNYW50aWVuZSBsYSBwcm9wb3JjacOzbiBkZSBhc3BlY3RvICovXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAvKiBCb3JkZSBncmlzIGNsYXJvICovXFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIEVzcXVpbmFzIHJlZG9uZGVhZGFzICovXFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTb21icmEgc3V0aWwgKi9cXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7IC8qIEFuaW1hY2nDs24gZGUgdHJhbnNpY2nDs24gcGFyYSBlbCBlZmVjdG8gaG92ZXIgKi9cXG59XFxuLnByb3BlcnR5LWltYWdlcyBpbWdbZGF0YS12LTEzNzQ5ZWQ5XTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEF1bWVudGEgZWwgdGFtYcOxbyBkZSBsYSBpbWFnZW4gYWwgcGFzYXIgZWwgY3Vyc29yICovXFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpOyAvKiBTb21icmEgbcOhcyBvc2N1cmEgYWwgcGFzYXIgZWwgY3Vyc29yICovXFxufVxcclxcblxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProprietyInfoView.vue?vue&type=style&index=0&id=13749ed9&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "016647626aab66d1"; }
/******/ }();
/******/ 
/******/ }
);