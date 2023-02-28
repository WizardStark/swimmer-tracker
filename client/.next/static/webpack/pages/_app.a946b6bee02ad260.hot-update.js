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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content , Footer  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\nconst pageList = {\n    Home: {\n        path: \"/\",\n        forAll: true\n    },\n    Overview: {\n        path: \"/Overview\",\n        forAll: true\n    },\n    Statistics: {\n        path: \"/Statistics\",\n        forAll: true\n    },\n    Kindertjies: {\n        path: \"/Kindertjies\",\n        forAll: false\n    }\n};\nconst coach = true;\nfunction PageLayout(param) {\n    let { children  } = param;\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const aktualkies = Object.keys(pageList).filter((page)=>{\n        return pageList[page].forAll || coach;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        className: \"layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            router.asPath.substring(1)\n                        ],\n                        items: aktualkies.map((val)=>{\n                            return {\n                                key: pageList[val],\n                                label: val\n                            };\n                        }),\n                        onSelect: (item)=>{\n                            router.push(item.aktualkies[key].path);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"site-layout-content\",\n                    style: {\n                        background: colorBgContainer\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Piet \\xa92023 Jouma\"\n            }, void 0, false, {\n                fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/juan/Documents/Code/swimmer-tracker/src/components/Layout.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(PageLayout, \"Imurgoh3L5yJY4P38DrJRr+BYrg=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PageLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageLayout);\nvar _c;\n$RefreshReg$(_c, \"PageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUM4QjtBQUNmO0FBRXhDLE1BQU0sRUFBRU0sT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE9BQU0sRUFBRSxHQUFHTix3Q0FBTUE7QUFDMUMsTUFBTU8sV0FBVztJQUNmQyxNQUFPO1FBQUNDLE1BQU87UUFBS0MsUUFBUyxJQUFJO0lBQUE7SUFDakNDLFVBQVc7UUFBQ0YsTUFBTztRQUFhQyxRQUFTLElBQUk7SUFBQTtJQUM3Q0UsWUFBYTtRQUFDSCxNQUFPO1FBQWVDLFFBQVMsSUFBSTtJQUFBO0lBQ2pERyxhQUFjO1FBQUNKLE1BQU87UUFBZ0JDLFFBQVMsS0FBSztJQUFBO0FBQ3REO0FBRUEsTUFBTUksUUFBUSxJQUFJO0FBQ2xCLFNBQVNDLFdBQVcsS0FBVSxFQUFDO1FBQVgsRUFBQ0MsU0FBUSxFQUFDLEdBQVY7O0lBQ2xCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxpQkFBZ0IsRUFBRSxHQUM1QixHQUFHaEIsZ0RBQWM7SUFFbEIsTUFBTWtCLFNBQVNqQixzREFBU0E7SUFDeEIsTUFBTWtCLGFBQWFDLE9BQU9DLElBQUksQ0FBQ2hCLFVBQVVpQixNQUFNLENBQUMsQ0FBQ0MsT0FBUztRQUN4RCxPQUFPbEIsUUFBUSxDQUFDa0IsS0FBSyxDQUFDZixNQUFNLElBQUlJO0lBQ2xDO0lBQ0EscUJBQ0UsOERBQUNkLHdDQUFNQTtRQUFDMEIsV0FBVTs7MEJBQ2hCLDhEQUFDdEI7O2tDQUNDLDhEQUFDdUI7d0JBQUlELFdBQVU7Ozs7OztrQ0FDZiw4REFBQ3pCLHNDQUFJQTt3QkFDSEMsT0FBTTt3QkFDTjBCLE1BQUs7d0JBQ0xDLHFCQUFxQjs0QkFBQ1QsT0FBT1UsTUFBTSxDQUFDQyxTQUFTLENBQUM7eUJBQUc7d0JBQ2pEQyxPQUFPWCxXQUFXWSxHQUFHLENBQUMsQ0FBQ0MsTUFBUTs0QkFDN0IsT0FBTztnQ0FDTEMsS0FBSzVCLFFBQVEsQ0FBQzJCLElBQUk7Z0NBQ2xCRSxPQUFPRjs0QkFDVDt3QkFDRjt3QkFDQUcsVUFBVSxDQUFDQyxPQUFPOzRCQUNoQmxCLE9BQU9tQixJQUFJLENBQUNELEtBQUtqQixVQUFVLENBQUNjLElBQUksQ0FBQzFCLElBQUk7d0JBQ3ZDOzs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNKO2dCQUNDbUMsT0FBTztvQkFDTEMsU0FBUztnQkFDWDswQkFFQSw0RUFBQ2Q7b0JBQ0NELFdBQVU7b0JBQ1ZjLE9BQU87d0JBQ0xFLFlBQVl4QjtvQkFDZDs4QkFFQ0Y7Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDVjtnQkFDQ2tDLE9BQU87b0JBQ0xHLFdBQVc7Z0JBQ2I7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQO0dBbkRTNUI7O1FBR0hiLGdEQUFjaUI7UUFFSGhCLGtEQUFTQTs7O0tBTGpCWTtBQXFEVCwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanM/ZmU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCcmVhZGNydW1iLCBMYXlvdXQsIE1lbnUsIHRoZW1lIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcbmNvbnN0IHBhZ2VMaXN0ID0ge1xuICBIb21lIDoge3BhdGggOiAnLycsIGZvckFsbCA6IHRydWV9LFxuICBPdmVydmlldyA6IHtwYXRoIDogJy9PdmVydmlldycsIGZvckFsbCA6IHRydWV9LFxuICBTdGF0aXN0aWNzIDoge3BhdGggOiAnL1N0YXRpc3RpY3MnLCBmb3JBbGwgOiB0cnVlfSxcbiAgS2luZGVydGppZXMgOiB7cGF0aCA6ICcvS2luZGVydGppZXMnLCBmb3JBbGwgOiBmYWxzZX1cbn1cblxuY29uc3QgY29hY2ggPSB0cnVlXG5mdW5jdGlvbiBQYWdlTGF5b3V0KHtjaGlsZHJlbn0pe1xuICBjb25zdCB7XG4gICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxuICB9ID0gdGhlbWUudXNlVG9rZW4oKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBha3R1YWxraWVzID0gT2JqZWN0LmtleXMocGFnZUxpc3QpLmZpbHRlcigocGFnZSkgPT4ge1xuICAgIHJldHVybiBwYWdlTGlzdFtwYWdlXS5mb3JBbGwgfHwgY29hY2hcbiAgfSk7ICBcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbcm91dGVyLmFzUGF0aC5zdWJzdHJpbmcoMSldfVxuICAgICAgICAgIGl0ZW1zPXtha3R1YWxraWVzLm1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBrZXk6IHBhZ2VMaXN0W3ZhbF0sXG4gICAgICAgICAgICAgIGxhYmVsOiB2YWwsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIG9uU2VsZWN0PXsoaXRlbSk9PntcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGl0ZW0uYWt0dWFsa2llc1trZXldLnBhdGgpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZGVyID5cbiAgICAgIDxDb250ZW50XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogJzAgNTBweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1jb250ZW50XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JCZ0NvbnRhaW5lcixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIDxGb290ZXJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBQaWV0IMKpMjAyMyBKb3VtYVxuICAgICAgPC9Gb290ZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dCJdLCJuYW1lcyI6WyJSZWFjdCIsIkJyZWFkY3J1bWIiLCJMYXlvdXQiLCJNZW51IiwidGhlbWUiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwicGFnZUxpc3QiLCJIb21lIiwicGF0aCIsImZvckFsbCIsIk92ZXJ2aWV3IiwiU3RhdGlzdGljcyIsIktpbmRlcnRqaWVzIiwiY29hY2giLCJQYWdlTGF5b3V0IiwiY2hpbGRyZW4iLCJ0b2tlbiIsImNvbG9yQmdDb250YWluZXIiLCJ1c2VUb2tlbiIsInJvdXRlciIsImFrdHVhbGtpZXMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwicGFnZSIsImNsYXNzTmFtZSIsImRpdiIsIm1vZGUiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwiYXNQYXRoIiwic3Vic3RyaW5nIiwiaXRlbXMiLCJtYXAiLCJ2YWwiLCJrZXkiLCJsYWJlbCIsIm9uU2VsZWN0IiwiaXRlbSIsInB1c2giLCJzdHlsZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n"));

/***/ })

});