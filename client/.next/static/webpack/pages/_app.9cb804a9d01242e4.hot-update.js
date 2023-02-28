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

/***/ "./src/components/_layout.js":
/*!***********************************!*\
  !*** ./src/components/_layout.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _pages_pagelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/pagelist */ \"./src/pages/pagelist.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { Header , Content , Footer  } = antd__WEBPACK_IMPORTED_MODULE_4__.Layout;\nfunction PageLayout() {\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_4__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n        className: \"layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/_layout.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().asPath\n                        ],\n                        items: _pages_pagelist__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((val, index)=>{\n                            const key = val.name;\n                            return {\n                                key,\n                                label: \"\".concat(key)\n                            };\n                        }),\n                        onSelect: (item)=>{\n                            window.location = \"/\".concat(item.key);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/_layout.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/_layout.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"site-layout-content\",\n                    style: {\n                        background: colorBgContainer\n                    },\n                    children: \"Content\"\n                }, void 0, false, {\n                    fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/_layout.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/_layout.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Ant Design \\xa92023 Created by Ant UED\"\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/_layout.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/_layout.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(PageLayout, \"U8jJP5HD29AZGUPqazcFhji+GhQ=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_4__.theme.useToken,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = PageLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageLayout);\nvar _c;\n$RefreshReg$(_c, \"PageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9fbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQzhCO0FBQ2Y7QUFDQTtBQUV4QyxNQUFNLEVBQUVPLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUUsR0FBR1Asd0NBQU1BO0FBRTFDLFNBQVNRLGFBQVk7O0lBQ25CLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxpQkFBZ0IsRUFBRSxHQUM1QixHQUFHUixnREFBYztJQUNsQixxQkFDRSw4REFBQ0Ysd0NBQU1BO1FBQUNZLFdBQVU7OzBCQUNoQiw4REFBQ1A7O2tDQUNDLDhEQUFDUTt3QkFBSUQsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDWCxzQ0FBSUE7d0JBQ0hDLE9BQU07d0JBQ05ZLE1BQUs7d0JBQ0xDLHFCQUFxQjs0QkFBQ1gsc0RBQVNBLEdBQUdZLE1BQU07eUJBQUM7d0JBQ3pDQyxPQUFPZCwyREFBWSxDQUFDLENBQUNnQixLQUFLQyxRQUFVOzRCQUNsQyxNQUFNQyxNQUFNRixJQUFJRyxJQUFJOzRCQUNwQixPQUFPO2dDQUNMRDtnQ0FDQUUsT0FBTyxHQUFPLE9BQUpGOzRCQUNaO3dCQUNGO3dCQUNBRyxVQUFVLENBQUNDLE9BQU87NEJBQ2hCQyxPQUFPQyxRQUFRLEdBQUcsSUFBYSxPQUFURixLQUFLSixHQUFHO3dCQUNoQzs7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDZjtnQkFDQ3NCLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7MEJBRUEsNEVBQUNoQjtvQkFDQ0QsV0FBVTtvQkFDVmdCLE9BQU87d0JBQ0xFLFlBQVlwQjtvQkFDZDs4QkFDRDs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNIO2dCQUNDcUIsT0FBTztvQkFDTEcsV0FBVztnQkFDYjswQkFDRDs7Ozs7Ozs7Ozs7O0FBS1A7R0EvQ1N2Qjs7UUFHSE4sZ0RBQWNTO1FBUVlQLGtEQUFTQTs7O0tBWGhDSTtBQWlEVCwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9fbGF5b3V0LmpzPzA2ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0LCBNZW51LCB0aGVtZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHBhZ2VsaXN0IGZyb20gJy4uL3BhZ2VzL3BhZ2VsaXN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XG5cbmZ1bmN0aW9uIFBhZ2VMYXlvdXQoKXtcbiAgY29uc3Qge1xuICAgIHRva2VuOiB7IGNvbG9yQmdDb250YWluZXIgfSxcbiAgfSA9IHRoZW1lLnVzZVRva2VuKCk7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgdGhlbWU9XCJkYXJrXCJcbiAgICAgICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W3VzZVJvdXRlcigpLmFzUGF0aF19XG4gICAgICAgICAgaXRlbXM9e3BhZ2VsaXN0Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdmFsLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIGxhYmVsOiBgJHtrZXl9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25TZWxlY3Q9eyhpdGVtKT0+e1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYC8ke2l0ZW0ua2V5fWBcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8Q29udGVudFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDUwcHgnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtY29udGVudFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgICA8Rm9vdGVyXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQW50IERlc2lnbiDCqTIwMjMgQ3JlYXRlZCBieSBBbnQgVUVEXG4gICAgICA8L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnJlYWRjcnVtYiIsIkxheW91dCIsIk1lbnUiLCJ0aGVtZSIsInBhZ2VsaXN0IiwidXNlUm91dGVyIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlBhZ2VMYXlvdXQiLCJ0b2tlbiIsImNvbG9yQmdDb250YWluZXIiLCJ1c2VUb2tlbiIsImNsYXNzTmFtZSIsImRpdiIsIm1vZGUiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwiYXNQYXRoIiwiaXRlbXMiLCJtYXAiLCJ2YWwiLCJpbmRleCIsImtleSIsIm5hbWUiLCJsYWJlbCIsIm9uU2VsZWN0IiwiaXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwic3R5bGUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/_layout.js\n"));

/***/ })

});