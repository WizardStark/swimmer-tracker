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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\nconst pageList = {\n    Home: \"/\",\n    Overview: \"/overview\",\n    Statistics: \"/statistics\"\n};\nfunction PageLayout(param) {\n    let { children  } = param;\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        className: \"layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            router.asPath.substring(1)\n                        ],\n                        items: Object.keys(pageList).map((val, _)=>{\n                            return {\n                                key: \"\".concat(pageList[val]),\n                                label: val\n                            };\n                        }),\n                        onSelect: (item)=>{\n                            router.push(item.key);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"site-layout-content\",\n                    style: {\n                        background: colorBgContainer\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Ant Design \\xa92023 Created by Ant UED\"\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(PageLayout, \"Imurgoh3L5yJY4P38DrJRr+BYrg=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PageLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageLayout);\nvar _c;\n$RefreshReg$(_c, \"PageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUM4QjtBQUNmO0FBRXhDLE1BQU0sRUFBRU0sT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE9BQU0sRUFBRSxHQUFHTix3Q0FBTUE7QUFDMUMsTUFBTU8sV0FBVztJQUNmQyxNQUFPO0lBQ1BDLFVBQVc7SUFDWEMsWUFBYTtBQUNmO0FBQ0EsU0FBU0MsV0FBVyxLQUFVLEVBQUM7UUFBWCxFQUFDQyxTQUFRLEVBQUMsR0FBVjs7SUFDbEIsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLGlCQUFnQixFQUFFLEdBQzVCLEdBQUdaLGdEQUFjO0lBQ2xCLE1BQU1jLFNBQVNiLHNEQUFTQTtJQUN4QixxQkFFRSw4REFBQ0gsd0NBQU1BO1FBQUNpQixXQUFVOzswQkFDaEIsOERBQUNiOztrQ0FDQyw4REFBQ2M7d0JBQUlELFdBQVU7Ozs7OztrQ0FDZiw4REFBQ2hCLHNDQUFJQTt3QkFDSEMsT0FBTTt3QkFDTmlCLE1BQUs7d0JBQ0xDLHFCQUFxQjs0QkFBQ0osT0FBT0ssTUFBTSxDQUFDQyxTQUFTLENBQUM7eUJBQUc7d0JBQ2pEQyxPQUFPQyxPQUFPQyxJQUFJLENBQUNsQixVQUFVbUIsR0FBRyxDQUFDLENBQUNDLEtBQUtDLElBQU07NEJBQzNDLE9BQU87Z0NBQ0xDLEtBQUssR0FBaUIsT0FBZHRCLFFBQVEsQ0FBQ29CLElBQUk7Z0NBQ3JCRyxPQUFPSDs0QkFDVDt3QkFDRjt3QkFDQUksVUFBVSxDQUFDQyxPQUFPOzRCQUNoQmhCLE9BQU9pQixJQUFJLENBQUNELEtBQUtILEdBQUc7d0JBQ3RCOzs7Ozs7Ozs7Ozs7MEJBR0osOERBQUN4QjtnQkFDQzZCLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7MEJBRUEsNEVBQUNqQjtvQkFDQ0QsV0FBVTtvQkFDVmlCLE9BQU87d0JBQ0xFLFlBQVl0QjtvQkFDZDs4QkFFQ0Y7Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDTjtnQkFDQzRCLE9BQU87b0JBQ0xHLFdBQVc7Z0JBQ2I7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQO0dBaERTMUI7O1FBR0hULGdEQUFjYTtRQUNIWixrREFBU0E7OztLQUpqQlE7QUFrRFQsK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzP2ZlNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0LCBNZW51LCB0aGVtZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XG5jb25zdCBwYWdlTGlzdCA9IHtcbiAgSG9tZSA6ICcvJyxcbiAgT3ZlcnZpZXcgOiAnL292ZXJ2aWV3JyxcbiAgU3RhdGlzdGljcyA6ICcvc3RhdGlzdGljcydcbn1cbmZ1bmN0aW9uIFBhZ2VMYXlvdXQoe2NoaWxkcmVufSl7XG4gIGNvbnN0IHtcbiAgICB0b2tlbjogeyBjb2xvckJnQ29udGFpbmVyIH0sXG4gIH0gPSB0aGVtZS51c2VUb2tlbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICByZXR1cm4gKFxuICAgIFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICA8TWVudVxuICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tyb3V0ZXIuYXNQYXRoLnN1YnN0cmluZygxKV19XG4gICAgICAgICAgaXRlbXM9e09iamVjdC5rZXlzKHBhZ2VMaXN0KS5tYXAoKHZhbCwgXykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2V5OiBgJHtwYWdlTGlzdFt2YWxdfWAsXG4gICAgICAgICAgICAgIGxhYmVsOiB2YWwsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIG9uU2VsZWN0PXsoaXRlbSk9PntcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGl0ZW0ua2V5KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8Q29udGVudFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDUwcHgnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtY29udGVudFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgICA8Rm9vdGVyXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQW50IERlc2lnbiDCqTIwMjMgQ3JlYXRlZCBieSBBbnQgVUVEXG4gICAgICA8L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnJlYWRjcnVtYiIsIkxheW91dCIsIk1lbnUiLCJ0aGVtZSIsInVzZVJvdXRlciIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJwYWdlTGlzdCIsIkhvbWUiLCJPdmVydmlldyIsIlN0YXRpc3RpY3MiLCJQYWdlTGF5b3V0IiwiY2hpbGRyZW4iLCJ0b2tlbiIsImNvbG9yQmdDb250YWluZXIiLCJ1c2VUb2tlbiIsInJvdXRlciIsImNsYXNzTmFtZSIsImRpdiIsIm1vZGUiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwiYXNQYXRoIiwic3Vic3RyaW5nIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwidmFsIiwiXyIsImtleSIsImxhYmVsIiwib25TZWxlY3QiLCJpdGVtIiwicHVzaCIsInN0eWxlIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n"));

/***/ })

});