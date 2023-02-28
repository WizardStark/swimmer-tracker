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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _pages_pagelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/pagelist */ \"./src/pages/pagelist.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { Header , Content , Footer  } = antd__WEBPACK_IMPORTED_MODULE_4__.Layout;\nfunction PageLayout() {\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_4__.theme.useToken();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n        className: \"layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            router.asPath.substring(1)\n                        ],\n                        items: _pages_pagelist__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((val, index)=>{\n                            const key = val.name;\n                            return {\n                                key,\n                                label: \"\".concat(key)\n                            };\n                        }),\n                        onSelect: (item)=>{\n                            router.push(\"/\".concat(item.key));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"site-layout-content\",\n                    style: {\n                        background: colorBgContainer\n                    },\n                    children: \"Jou fokker\"\n                }, void 0, false, {\n                    fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Ant Design \\xa92023 Created by Ant UED\"\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(PageLayout, \"Imurgoh3L5yJY4P38DrJRr+BYrg=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_4__.theme.useToken,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = PageLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageLayout);\nvar _c;\n$RefreshReg$(_c, \"PageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDOEI7QUFDZjtBQUNBO0FBRXhDLE1BQU0sRUFBRU8sT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE9BQU0sRUFBRSxHQUFHUCx3Q0FBTUE7QUFFMUMsU0FBU1EsYUFBWTs7SUFDbkIsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLGlCQUFnQixFQUFFLEdBQzVCLEdBQUdSLGdEQUFjO0lBQ2xCLE1BQU1VLFNBQVNSLHNEQUFTQTtJQUN4QixxQkFFRSw4REFBQ0osd0NBQU1BO1FBQUNhLFdBQVU7OzBCQUNoQiw4REFBQ1I7O2tDQUNDLDhEQUFDUzt3QkFBSUQsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDWixzQ0FBSUE7d0JBQ0hDLE9BQU07d0JBQ05hLE1BQUs7d0JBQ0xDLHFCQUFxQjs0QkFBQ0osT0FBT0ssTUFBTSxDQUFDQyxTQUFTLENBQUM7eUJBQUc7d0JBQ2pEQyxPQUFPaEIsMkRBQVksQ0FBQyxDQUFDa0IsS0FBS0MsUUFBVTs0QkFDbEMsTUFBTUMsTUFBTUYsSUFBSUcsSUFBSTs0QkFDcEIsT0FBTztnQ0FDTEQ7Z0NBQ0FFLE9BQU8sR0FBTyxPQUFKRjs0QkFDWjt3QkFDRjt3QkFDQUcsVUFBVSxDQUFDQyxPQUFPOzRCQUNoQmYsT0FBT2dCLElBQUksQ0FBQyxJQUFhLE9BQVRELEtBQUtKLEdBQUc7d0JBQzFCOzs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNqQjtnQkFDQ3VCLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7MEJBRUEsNEVBQUNoQjtvQkFDQ0QsV0FBVTtvQkFDVmdCLE9BQU87d0JBQ0xFLFlBQVlyQjtvQkFDZDs4QkFDRDs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNIO2dCQUNDc0IsT0FBTztvQkFDTEcsV0FBVztnQkFDYjswQkFDRDs7Ozs7Ozs7Ozs7O0FBS1A7R0FqRFN4Qjs7UUFHSE4sZ0RBQWNTO1FBQ0hQLGtEQUFTQTs7O0tBSmpCSTtBQW1EVCwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanM/ZmU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCcmVhZGNydW1iLCBMYXlvdXQsIE1lbnUsIHRoZW1lIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgcGFnZWxpc3QgZnJvbSAnLi4vcGFnZXMvcGFnZWxpc3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcblxuZnVuY3Rpb24gUGFnZUxheW91dCgpe1xuICBjb25zdCB7XG4gICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxuICB9ID0gdGhlbWUudXNlVG9rZW4oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbcm91dGVyLmFzUGF0aC5zdWJzdHJpbmcoMSldfVxuICAgICAgICAgIGl0ZW1zPXtwYWdlbGlzdC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHZhbC5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICBsYWJlbDogYCR7a2V5fWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIG9uU2VsZWN0PXsoaXRlbSk9PntcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvJHtpdGVtLmtleX1gKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8Q29udGVudFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDUwcHgnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtY29udGVudFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEpvdSBmb2trZXJcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgICA8Rm9vdGVyXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQW50IERlc2lnbiDCqTIwMjMgQ3JlYXRlZCBieSBBbnQgVUVEXG4gICAgICA8L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnJlYWRjcnVtYiIsIkxheW91dCIsIk1lbnUiLCJ0aGVtZSIsInBhZ2VsaXN0IiwidXNlUm91dGVyIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlBhZ2VMYXlvdXQiLCJ0b2tlbiIsImNvbG9yQmdDb250YWluZXIiLCJ1c2VUb2tlbiIsInJvdXRlciIsImNsYXNzTmFtZSIsImRpdiIsIm1vZGUiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwiYXNQYXRoIiwic3Vic3RyaW5nIiwiaXRlbXMiLCJtYXAiLCJ2YWwiLCJpbmRleCIsImtleSIsIm5hbWUiLCJsYWJlbCIsIm9uU2VsZWN0IiwiaXRlbSIsInB1c2giLCJzdHlsZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n"));

/***/ })

});