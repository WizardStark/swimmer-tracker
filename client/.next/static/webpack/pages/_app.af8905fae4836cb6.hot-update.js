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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\nconst pageList = {\n    Home: {\n        path: \"/\",\n        coachOnly: false\n    },\n    Overview: {\n        path: \"/Overview\",\n        coachOnly: false\n    },\n    Statistics: {\n        path: \"/Statistics\",\n        coachOnly: false\n    },\n    Kindertjies: {\n        path: \"/Kindertjies\",\n        coachOnly: true\n    }\n};\nconst pappa = true;\nfunction PageLayout(param) {\n    let { children  } = param;\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const aktualkies = Object.keys(pageList).filter((page)=>{\n        return pageList[page].coachOnly === pappa;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        className: \"layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            router.asPath.substring(1)\n                        ],\n                        items: Object.keys(pageList).map((val)=>{\n                            return {\n                                key: pageList[val],\n                                label: val\n                            };\n                        }),\n                        onSelect: (item)=>{\n                            router.push(item.key);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"site-layout-content\",\n                    style: {\n                        background: colorBgContainer\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Piet \\xa92023 Jouma\"\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(PageLayout, \"Imurgoh3L5yJY4P38DrJRr+BYrg=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PageLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageLayout);\nvar _c;\n$RefreshReg$(_c, \"PageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUM4QjtBQUNmO0FBRXhDLE1BQU0sRUFBRU0sT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE9BQU0sRUFBRSxHQUFHTix3Q0FBTUE7QUFDMUMsTUFBTU8sV0FBVztJQUNmQyxNQUFPO1FBQUNDLE1BQU87UUFBS0MsV0FBWSxLQUFLO0lBQUE7SUFDckNDLFVBQVc7UUFBQ0YsTUFBTztRQUFhQyxXQUFZLEtBQUs7SUFBQTtJQUNqREUsWUFBYTtRQUFDSCxNQUFPO1FBQWVDLFdBQVksS0FBSztJQUFBO0lBQ3JERyxhQUFjO1FBQUNKLE1BQU87UUFBZ0JDLFdBQVksSUFBSTtJQUFBO0FBQ3hEO0FBRUEsTUFBTUksUUFBUSxJQUFJO0FBQ2xCLFNBQVNDLFdBQVcsS0FBVSxFQUFDO1FBQVgsRUFBQ0MsU0FBUSxFQUFDLEdBQVY7O0lBQ2xCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxpQkFBZ0IsRUFBRSxHQUM1QixHQUFHaEIsZ0RBQWM7SUFFbEIsTUFBTWtCLFNBQVNqQixzREFBU0E7SUFDeEIsTUFBTWtCLGFBQWFDLE9BQU9DLElBQUksQ0FBQ2hCLFVBQVVpQixNQUFNLENBQUMsQ0FBQ0MsT0FBUztRQUN4RCxPQUFPbEIsUUFBUSxDQUFDa0IsS0FBSyxDQUFDZixTQUFTLEtBQUtJO0lBQ3RDO0lBQ0EscUJBQ0UsOERBQUNkLHdDQUFNQTtRQUFDMEIsV0FBVTs7MEJBQ2hCLDhEQUFDdEI7O2tDQUNDLDhEQUFDdUI7d0JBQUlELFdBQVU7Ozs7OztrQ0FDZiw4REFBQ3pCLHNDQUFJQTt3QkFDSEMsT0FBTTt3QkFDTjBCLE1BQUs7d0JBQ0xDLHFCQUFxQjs0QkFBQ1QsT0FBT1UsTUFBTSxDQUFDQyxTQUFTLENBQUM7eUJBQUc7d0JBQ2pEQyxPQUFPVixPQUFPQyxJQUFJLENBQUNoQixVQUFVMEIsR0FBRyxDQUFDLENBQUNDLE1BQVE7NEJBQ3hDLE9BQU87Z0NBQ0xDLEtBQUs1QixRQUFRLENBQUMyQixJQUFJO2dDQUNsQkUsT0FBT0Y7NEJBQ1Q7d0JBQ0Y7d0JBQ0FHLFVBQVUsQ0FBQ0MsT0FBTzs0QkFDaEJsQixPQUFPbUIsSUFBSSxDQUFDRCxLQUFLSCxHQUFHO3dCQUN0Qjs7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDOUI7Z0JBQ0NtQyxPQUFPO29CQUNMQyxTQUFTO2dCQUNYOzBCQUVBLDRFQUFDZDtvQkFDQ0QsV0FBVTtvQkFDVmMsT0FBTzt3QkFDTEUsWUFBWXhCO29CQUNkOzhCQUVDRjs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNWO2dCQUNDa0MsT0FBTztvQkFDTEcsV0FBVztnQkFDYjswQkFDRDs7Ozs7Ozs7Ozs7O0FBS1A7R0FuRFM1Qjs7UUFHSGIsZ0RBQWNpQjtRQUVIaEIsa0RBQVNBOzs7S0FMakJZO0FBcURULCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC5qcz9mZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJyZWFkY3J1bWIsIExheW91dCwgTWVudSwgdGhlbWUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0O1xuY29uc3QgcGFnZUxpc3QgPSB7XG4gIEhvbWUgOiB7cGF0aCA6ICcvJywgY29hY2hPbmx5IDogZmFsc2V9LFxuICBPdmVydmlldyA6IHtwYXRoIDogJy9PdmVydmlldycsIGNvYWNoT25seSA6IGZhbHNlfSxcbiAgU3RhdGlzdGljcyA6IHtwYXRoIDogJy9TdGF0aXN0aWNzJywgY29hY2hPbmx5IDogZmFsc2V9LFxuICBLaW5kZXJ0amllcyA6IHtwYXRoIDogJy9LaW5kZXJ0amllcycsIGNvYWNoT25seSA6IHRydWV9XG59XG5cbmNvbnN0IHBhcHBhID0gdHJ1ZVxuZnVuY3Rpb24gUGFnZUxheW91dCh7Y2hpbGRyZW59KXtcbiAgY29uc3Qge1xuICAgIHRva2VuOiB7IGNvbG9yQmdDb250YWluZXIgfSxcbiAgfSA9IHRoZW1lLnVzZVRva2VuKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgYWt0dWFsa2llcyA9IE9iamVjdC5rZXlzKHBhZ2VMaXN0KS5maWx0ZXIoKHBhZ2UpID0+IHtcbiAgICByZXR1cm4gcGFnZUxpc3RbcGFnZV0uY29hY2hPbmx5ID09PSBwYXBwYVxuICB9KTsgIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICA8TWVudVxuICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tyb3V0ZXIuYXNQYXRoLnN1YnN0cmluZygxKV19XG4gICAgICAgICAgaXRlbXM9e09iamVjdC5rZXlzKHBhZ2VMaXN0KS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2V5OiBwYWdlTGlzdFt2YWxdLFxuICAgICAgICAgICAgICBsYWJlbDogdmFsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvblNlbGVjdD17KGl0ZW0pPT57XG4gICAgICAgICAgICByb3V0ZXIucHVzaChpdGVtLmtleSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkZXIgPlxuICAgICAgPENvbnRlbnRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiAnMCA1MHB4JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWNvbnRlbnRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvckJnQ29udGFpbmVyLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250ZW50PlxuICAgICAgPEZvb3RlclxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFBpZXQgwqkyMDIzIEpvdW1hXG4gICAgICA8L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnJlYWRjcnVtYiIsIkxheW91dCIsIk1lbnUiLCJ0aGVtZSIsInVzZVJvdXRlciIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJwYWdlTGlzdCIsIkhvbWUiLCJwYXRoIiwiY29hY2hPbmx5IiwiT3ZlcnZpZXciLCJTdGF0aXN0aWNzIiwiS2luZGVydGppZXMiLCJwYXBwYSIsIlBhZ2VMYXlvdXQiLCJjaGlsZHJlbiIsInRva2VuIiwiY29sb3JCZ0NvbnRhaW5lciIsInVzZVRva2VuIiwicm91dGVyIiwiYWt0dWFsa2llcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJwYWdlIiwiY2xhc3NOYW1lIiwiZGl2IiwibW9kZSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJhc1BhdGgiLCJzdWJzdHJpbmciLCJpdGVtcyIsIm1hcCIsInZhbCIsImtleSIsImxhYmVsIiwib25TZWxlY3QiLCJpdGVtIiwicHVzaCIsInN0eWxlIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n"));

/***/ })

});