"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/card/card.jsx":
/*!**********************************!*\
  !*** ./components/card/card.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card_card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/card.module.css */ \"./components/card/card.module.css\");\n/* harmony import */ var _card_card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets */ \"./assets/index.js\");\nvar _this = undefined;\n\n\n\n//INTERNAL IMPORT\n\n\nvar card = function(param) {\n    var candidatesArray = param.candidatesArray, giveVote = param.giveVote;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_card_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        children: candidatesArray.map(function(el, i) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_card_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_card_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: el[3],\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_card_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_info),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    el[2],\n                                    \" #\",\n                                    el[0].toNumber()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Age: \",\n                                    el[1].toNumber()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: el[4]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Wallet Address: \",\n                                    el[6].slice(0, 20),\n                                    \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_card_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().total),\n                                children: \"Total Vote\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_card_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_vote),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el[5].toNumber()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_card_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_button),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return giveVote({\n                                    id: el[1].toNumber(),\n                                    address: el[6]\n                                });\n                            },\n                            children: \" Give Vote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }, i + 1, true, {\n                fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kodya\\\\Documents\\\\Tobi_project\\\\BlockchainVoting\\\\components\\\\card\\\\card.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (card);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQvY2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNLO0FBRS9CLGlCQUFpQjtBQUMwQjtBQUNYO0FBR2hDLElBQU1JLElBQUksR0FBRyxnQkFBa0M7UUFBaENDLGVBQWUsU0FBZkEsZUFBZSxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3RDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRU4sbUVBQVU7a0JBQ3ZCRyxlQUFlLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxFQUFFLEVBQUVDLENBQUM7aUNBQ3pCLDhEQUFDSixLQUFHO2dCQUFhQyxTQUFTLEVBQUdOLHVFQUFjOztrQ0FFekMsOERBQUNLLEtBQUc7d0JBQUNDLFNBQVMsRUFBR04sb0VBQVc7a0NBQzFCLDRFQUFDVyxLQUFHOzRCQUFDQyxHQUFHLEVBQUdKLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQUVLLEdBQUcsRUFBQyxTQUFTOzs7OztrQ0FBRTs7Ozs7OEJBQzdCO2tDQUNOLDhEQUFDUixLQUFHO3dCQUFDQyxTQUFTLEVBQUVOLHdFQUFlOzswQ0FDN0IsOERBQUNlLElBQUU7O29DQUNBUCxFQUFFLENBQUMsQ0FBQyxDQUFDO29DQUFDLElBQUU7b0NBQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsUUFBUSxFQUFFOzs7Ozs7c0NBQ3ZCOzBDQUNMLDhEQUFDQyxHQUFDOztvQ0FBQyxPQUFLO29DQUFDVCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNRLFFBQVEsRUFBRTs7Ozs7O3NDQUFLOzBDQUM5Qiw4REFBQ0MsR0FBQzswQ0FBRVQsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7c0NBQUs7MENBQ2QsOERBQUNTLEdBQUM7O29DQUFDLGtCQUFnQjtvQ0FBQ1QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDVSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQ0FBQyxLQUFHOzs7Ozs7c0NBQUk7MENBQzlDLDhEQUFDRCxHQUFDO2dDQUFDWCxTQUFTLEVBQUVOLG9FQUFXOzBDQUFFLFlBQVU7Ozs7O3NDQUFJOzs7Ozs7OEJBQ3JDO2tDQUVOLDhEQUFDSyxLQUFHO3dCQUFDQyxTQUFTLEVBQUVOLHdFQUFlO2tDQUM3Qiw0RUFBQ2lCLEdBQUM7c0NBQUVULEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsUUFBUSxFQUFFOzs7OztrQ0FBSzs7Ozs7OEJBQ3JCO2tDQUNOLDhEQUFDWCxLQUFHO3dCQUFDQyxTQUFTLEVBQUVOLDBFQUFpQjtrQ0FDL0IsNEVBQUNzQixRQUFNOzRCQUFDQyxPQUFPLEVBQUU7dUNBQU1uQixRQUFRLENBQUM7b0NBQUNvQixFQUFFLEVBQUVoQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNRLFFBQVEsRUFBRTtvQ0FBRVMsT0FBTyxFQUFFakIsRUFBRSxDQUFDLENBQUMsQ0FBQztpQ0FBQyxDQUFDOzZCQUFBO3NDQUFFLFlBQVU7Ozs7O2tDQUFTOzs7Ozs4QkFFeEY7O2VBckJFQyxDQUFDLEdBQUcsQ0FBQzs7OztzQkF1QlQ7U0FDUCxDQUFDOzs7OzthQUNFLENBQ1A7Q0FDRjtBQUVELCtEQUFlUCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkL2NhcmQuanN4PzM2YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbi8vSU5URVJOQUwgSU1QT1JUXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vY2FyZC9jYXJkLm1vZHVsZS5jc3MnXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzJ1xuXG5cbmNvbnN0IGNhcmQgPSAoe2NhbmRpZGF0ZXNBcnJheSwgZ2l2ZVZvdGUgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNhcmR9PlxuICAgICAge2NhbmRpZGF0ZXNBcnJheS5tYXAoKGVsLCBpKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpICsgMX0gY2xhc3NOYW1lPSB7U3R5bGUuY2FyZF9ib3h9PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtTdHlsZS5pbWFnZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz0ge2VsWzNdfSBhbHQ9XCJwcm9maWxlXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jYXJkX2luZm99PlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICB7ZWxbMl19ICN7ZWxbMF0udG9OdW1iZXIoKSB9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+QWdlOiB7ZWxbMV0udG9OdW1iZXIoKX08L3A+XG4gICAgICAgICAgICA8cD57ZWxbNF19PC9wPlxuICAgICAgICAgICAgPHA+V2FsbGV0IEFkZHJlc3M6IHtlbFs2XS5zbGljZSgwLCAyMCl9Li4uPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtTdHlsZS50b3RhbH0+VG90YWwgVm90ZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jYXJkX3ZvdGV9PlxuICAgICAgICAgICAgPHA+e2VsWzVdLnRvTnVtYmVyKCl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jYXJkX2J1dHRvbn0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdpdmVWb3RlKHtpZDogZWxbMV0udG9OdW1iZXIoKSwgYWRkcmVzczogZWxbNl19KX0+IEdpdmUgVm90ZTwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZDtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJTdHlsZSIsImltYWdlIiwiY2FyZCIsImNhbmRpZGF0ZXNBcnJheSIsImdpdmVWb3RlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZWwiLCJpIiwiY2FyZF9ib3giLCJpbWciLCJzcmMiLCJhbHQiLCJjYXJkX2luZm8iLCJoMiIsInRvTnVtYmVyIiwicCIsInNsaWNlIiwidG90YWwiLCJjYXJkX3ZvdGUiLCJjYXJkX2J1dHRvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/card/card.jsx\n"));

/***/ })

});