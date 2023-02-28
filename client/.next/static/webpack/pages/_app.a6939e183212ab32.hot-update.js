"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\nconst pageList = {\n    Home: \"/\",\n    Overview: \"/overview\",\n    Statistics: \"/statistics\"\n};\nfunction PageLayout(param) {\n    let { children  } = param;\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        className: \"layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            router.asPath.substring(1)\n                        ],\n                        items: Object.keys(pageList).map((val, _)=>{\n                            return {\n                                key: pageList[val],\n                                label: val\n                            };\n                        }),\n                        onSelect: (item)=>{\n                            router.push(item.key);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"site-layout-content\",\n                    style: {\n                        background: colorBgContainer\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Ant Design \\xa92023 Created by Ant UED\"\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(PageLayout, \"Imurgoh3L5yJY4P38DrJRr+BYrg=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PageLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageLayout);\nvar _c;\n$RefreshReg$(_c, \"PageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUM4QjtBQUNmO0FBRXhDLE1BQU0sRUFBRU0sT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE9BQU0sRUFBRSxHQUFHTix3Q0FBTUE7QUFDMUMsTUFBTU8sV0FBVztJQUNmQyxNQUFPO0lBQ1BDLFVBQVc7SUFDWEMsWUFBYTtBQUNmO0FBQ0EsU0FBU0MsV0FBVyxLQUFVLEVBQUM7UUFBWCxFQUFDQyxTQUFRLEVBQUMsR0FBVjs7SUFDbEIsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLGlCQUFnQixFQUFFLEdBQzVCLEdBQUdaLGdEQUFjO0lBQ2xCLE1BQU1jLFNBQVNiLHNEQUFTQTtJQUN4QixxQkFFRSw4REFBQ0gsd0NBQU1BO1FBQUNpQixXQUFVOzswQkFDaEIsOERBQUNiOztrQ0FDQyw4REFBQ2M7d0JBQUlELFdBQVU7Ozs7OztrQ0FDZiw4REFBQ2hCLHNDQUFJQTt3QkFDSEMsT0FBTTt3QkFDTmlCLE1BQUs7d0JBQ0xDLHFCQUFxQjs0QkFBQ0osT0FBT0ssTUFBTSxDQUFDQyxTQUFTLENBQUM7eUJBQUc7d0JBQ2pEQyxPQUFPQyxPQUFPQyxJQUFJLENBQUNsQixVQUFVbUIsR0FBRyxDQUFDLENBQUNDLEtBQUtDLElBQU07NEJBQzNDLE9BQU87Z0NBQ0xDLEtBQUt0QixRQUFRLENBQUNvQixJQUFJO2dDQUNsQkcsT0FBT0g7NEJBQ1Q7d0JBQ0Y7d0JBQ0FJLFVBQVUsQ0FBQ0MsT0FBTzs0QkFDaEJoQixPQUFPaUIsSUFBSSxDQUFDRCxLQUFLSCxHQUFHO3dCQUN0Qjs7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDeEI7Z0JBQ0M2QixPQUFPO29CQUNMQyxTQUFTO2dCQUNYOzBCQUVBLDRFQUFDakI7b0JBQ0NELFdBQVU7b0JBQ1ZpQixPQUFPO3dCQUNMRSxZQUFZdEI7b0JBQ2Q7OEJBRUNGOzs7Ozs7Ozs7OzswQkFHTCw4REFBQ047Z0JBQ0M0QixPQUFPO29CQUNMRyxXQUFXO2dCQUNiOzBCQUNEOzs7Ozs7Ozs7Ozs7QUFLUDtHQWhEUzFCOztRQUdIVCxnREFBY2E7UUFDSFosa0RBQVNBOzs7S0FKakJRO0FBa0RULCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC5qcz9mZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJyZWFkY3J1bWIsIExheW91dCwgTWVudSwgdGhlbWUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0O1xuY29uc3QgcGFnZUxpc3QgPSB7XG4gIEhvbWUgOiAnLycsXG4gIE92ZXJ2aWV3IDogJy9vdmVydmlldycsXG4gIFN0YXRpc3RpY3MgOiAnL3N0YXRpc3RpY3MnXG59XG5mdW5jdGlvbiBQYWdlTGF5b3V0KHtjaGlsZHJlbn0pe1xuICBjb25zdCB7XG4gICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxuICB9ID0gdGhlbWUudXNlVG9rZW4oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbcm91dGVyLmFzUGF0aC5zdWJzdHJpbmcoMSldfVxuICAgICAgICAgIGl0ZW1zPXtPYmplY3Qua2V5cyhwYWdlTGlzdCkubWFwKCh2YWwsIF8pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtleTogcGFnZUxpc3RbdmFsXSxcbiAgICAgICAgICAgICAgbGFiZWw6IHZhbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25TZWxlY3Q9eyhpdGVtKT0+e1xuICAgICAgICAgICAgcm91dGVyLnB1c2goaXRlbS5rZXkpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZGVyID5cbiAgICAgIDxDb250ZW50XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogJzAgNTBweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1jb250ZW50XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JCZ0NvbnRhaW5lcixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIDxGb290ZXJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBbnQgRGVzaWduIMKpMjAyMyBDcmVhdGVkIGJ5IEFudCBVRURcbiAgICAgIDwvRm9vdGVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VMYXlvdXQiXSwibmFtZXMiOlsiUmVhY3QiLCJCcmVhZGNydW1iIiwiTGF5b3V0IiwiTWVudSIsInRoZW1lIiwidXNlUm91dGVyIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsInBhZ2VMaXN0IiwiSG9tZSIsIk92ZXJ2aWV3IiwiU3RhdGlzdGljcyIsIlBhZ2VMYXlvdXQiLCJjaGlsZHJlbiIsInRva2VuIiwiY29sb3JCZ0NvbnRhaW5lciIsInVzZVRva2VuIiwicm91dGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwibW9kZSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJhc1BhdGgiLCJzdWJzdHJpbmciLCJpdGVtcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ2YWwiLCJfIiwia2V5IiwibGFiZWwiLCJvblNlbGVjdCIsIml0ZW0iLCJwdXNoIiwic3R5bGUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n"));

/***/ })

});