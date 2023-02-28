/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst { Header , Content , Footer  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nconst pageList = {\n    Home: {\n        path: \"/\",\n        forAll: true\n    },\n    Overview: {\n        path: \"/Overview\",\n        forAll: true\n    },\n    Statistics: {\n        path: \"/Statistics\",\n        forAll: true\n    },\n    Kindertjies: {\n        path: \"/Kindertjies\",\n        forAll: false\n    }\n};\nconst coach = true;\nfunction PageLayout({ children  }) {\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const aktualkies = Object.keys(pageList).filter((page)=>{\n        return pageList[page].forAll || coach;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        className: \"layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            router.asPath.substring(1)\n                        ],\n                        items: aktualkies.map((val)=>{\n                            return {\n                                key: pageList[val].path,\n                                label: val\n                            };\n                        }),\n                        onSelect: (item)=>{\n                            router.push(item.key);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"site-layout-content\",\n                    style: {\n                        background: colorBgContainer\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Piet \\xa92023 Jouma\"\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUM4QjtBQUNmO0FBRXhDLE1BQU0sRUFBRU0sT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE9BQU0sRUFBRSxHQUFHTix3Q0FBTUE7QUFDMUMsTUFBTU8sV0FBVztJQUNmQyxNQUFPO1FBQUNDLE1BQU87UUFBS0MsUUFBUyxJQUFJO0lBQUE7SUFDakNDLFVBQVc7UUFBQ0YsTUFBTztRQUFhQyxRQUFTLElBQUk7SUFBQTtJQUM3Q0UsWUFBYTtRQUFDSCxNQUFPO1FBQWVDLFFBQVMsSUFBSTtJQUFBO0lBQ2pERyxhQUFjO1FBQUNKLE1BQU87UUFBZ0JDLFFBQVMsS0FBSztJQUFBO0FBQ3REO0FBRUEsTUFBTUksUUFBUSxJQUFJO0FBQ2xCLFNBQVNDLFdBQVcsRUFBQ0MsU0FBUSxFQUFDLEVBQUM7SUFDN0IsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLGlCQUFnQixFQUFFLEdBQzVCLEdBQUdoQixnREFBYztJQUVsQixNQUFNa0IsU0FBU2pCLHNEQUFTQTtJQUN4QixNQUFNa0IsYUFBYUMsT0FBT0MsSUFBSSxDQUFDaEIsVUFBVWlCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTO1FBQ3hELE9BQU9sQixRQUFRLENBQUNrQixLQUFLLENBQUNmLE1BQU0sSUFBSUk7SUFDbEM7SUFDQSxxQkFDRSw4REFBQ2Qsd0NBQU1BO1FBQUMwQixXQUFVOzswQkFDaEIsOERBQUN0Qjs7a0NBQ0MsOERBQUN1Qjt3QkFBSUQsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDekIsc0NBQUlBO3dCQUNIQyxPQUFNO3dCQUNOMEIsTUFBSzt3QkFDTEMscUJBQXFCOzRCQUFDVCxPQUFPVSxNQUFNLENBQUNDLFNBQVMsQ0FBQzt5QkFBRzt3QkFDakRDLE9BQU9YLFdBQVdZLEdBQUcsQ0FBQyxDQUFDQyxNQUFROzRCQUM3QixPQUFPO2dDQUNMQyxLQUFLNUIsUUFBUSxDQUFDMkIsSUFBSSxDQUFDekIsSUFBSTtnQ0FDdkIyQixPQUFPRjs0QkFDVDt3QkFDRjt3QkFDQUcsVUFBVSxDQUFDQyxPQUFPOzRCQUNoQmxCLE9BQU9tQixJQUFJLENBQUNELEtBQUtILEdBQUc7d0JBQ3RCOzs7Ozs7Ozs7Ozs7MEJBR0osOERBQUM5QjtnQkFDQ21DLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7MEJBRUEsNEVBQUNkO29CQUNDRCxXQUFVO29CQUNWYyxPQUFPO3dCQUNMRSxZQUFZeEI7b0JBQ2Q7OEJBRUNGOzs7Ozs7Ozs7OzswQkFHTCw4REFBQ1Y7Z0JBQ0NrQyxPQUFPO29CQUNMRyxXQUFXO2dCQUNiOzBCQUNEOzs7Ozs7Ozs7Ozs7QUFLUDtBQUVBLGlFQUFlNUIsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N3aW1tZXItdHJhY2tlci8uL3NyYy9jb21wb25lbnRzL0xheW91dC5qcz9mZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJyZWFkY3J1bWIsIExheW91dCwgTWVudSwgdGhlbWUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0O1xuY29uc3QgcGFnZUxpc3QgPSB7XG4gIEhvbWUgOiB7cGF0aCA6ICcvJywgZm9yQWxsIDogdHJ1ZX0sXG4gIE92ZXJ2aWV3IDoge3BhdGggOiAnL092ZXJ2aWV3JywgZm9yQWxsIDogdHJ1ZX0sXG4gIFN0YXRpc3RpY3MgOiB7cGF0aCA6ICcvU3RhdGlzdGljcycsIGZvckFsbCA6IHRydWV9LFxuICBLaW5kZXJ0amllcyA6IHtwYXRoIDogJy9LaW5kZXJ0amllcycsIGZvckFsbCA6IGZhbHNlfVxufVxuXG5jb25zdCBjb2FjaCA9IHRydWVcbmZ1bmN0aW9uIFBhZ2VMYXlvdXQoe2NoaWxkcmVufSl7XG4gIGNvbnN0IHtcbiAgICB0b2tlbjogeyBjb2xvckJnQ29udGFpbmVyIH0sXG4gIH0gPSB0aGVtZS51c2VUb2tlbigpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGFrdHVhbGtpZXMgPSBPYmplY3Qua2V5cyhwYWdlTGlzdCkuZmlsdGVyKChwYWdlKSA9PiB7XG4gICAgcmV0dXJuIHBhZ2VMaXN0W3BhZ2VdLmZvckFsbCB8fCBjb2FjaFxuICB9KTsgIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICA8TWVudVxuICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tyb3V0ZXIuYXNQYXRoLnN1YnN0cmluZygxKV19XG4gICAgICAgICAgaXRlbXM9e2FrdHVhbGtpZXMubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtleTogcGFnZUxpc3RbdmFsXS5wYXRoLFxuICAgICAgICAgICAgICBsYWJlbDogdmFsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvblNlbGVjdD17KGl0ZW0pPT57XG4gICAgICAgICAgICByb3V0ZXIucHVzaChpdGVtLmtleSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkZXIgPlxuICAgICAgPENvbnRlbnRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiAnMCA1MHB4JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWNvbnRlbnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvckJnQ29udGFpbmVyLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250ZW50PlxuICAgICAgPEZvb3RlclxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFBpZXQgwqkyMDIzIEpvdW1hXG4gICAgICA8L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnJlYWRjcnVtYiIsIkxheW91dCIsIk1lbnUiLCJ0aGVtZSIsInVzZVJvdXRlciIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJwYWdlTGlzdCIsIkhvbWUiLCJwYXRoIiwiZm9yQWxsIiwiT3ZlcnZpZXciLCJTdGF0aXN0aWNzIiwiS2luZGVydGppZXMiLCJjb2FjaCIsIlBhZ2VMYXlvdXQiLCJjaGlsZHJlbiIsInRva2VuIiwiY29sb3JCZ0NvbnRhaW5lciIsInVzZVRva2VuIiwicm91dGVyIiwiYWt0dWFsa2llcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJwYWdlIiwiY2xhc3NOYW1lIiwiZGl2IiwibW9kZSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJhc1BhdGgiLCJzdWJzdHJpbmciLCJpdGVtcyIsIm1hcCIsInZhbCIsImtleSIsImxhYmVsIiwib25TZWxlY3QiLCJpdGVtIiwicHVzaCIsInN0eWxlIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.js\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQ2E7QUFFM0IsU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3BELHFCQUNFLDhEQUFDSCwwREFBTUE7a0JBQ0wsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N3aW1tZXItdHJhY2tlci8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();