module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ \"@material-ui/core/Link\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/context */ \"./lib/context.js\");\n\nvar _jsxFileName = \"/home/daemin/Desktop/FinalProject/CloutCoinMUI/components/Navbar.js\";\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"makeStyles\"])(theme => ({\n  \"@global\": {\n    ul: {\n      margin: 0,\n      padding: 0,\n      listStyle: \"none\"\n    }\n  },\n  appBar: {\n    borderBottom: `1px solid ${theme.palette.divider}`\n  },\n  toolbar: {\n    flexWrap: \"wrap\"\n  },\n  toolbarTitle: {\n    flexGrow: 1\n  },\n  link: {\n    margin: theme.spacing(1, 1.5)\n  }\n}));\n\nconst Navbar = () => {\n  const {\n    0: address,\n    1: setAddress\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const classes = useStyles();\n  const user = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_lib_context__WEBPACK_IMPORTED_MODULE_9__[\"UserContext\"]);\n\n  const signInSignOut = async () => {\n    if (user) {\n      await _lib_firebase__WEBPACK_IMPORTED_MODULE_8__[\"auth\"].signOut();\n      console.log(\"Signed Out\");\n    } else {\n      await _lib_firebase__WEBPACK_IMPORTED_MODULE_8__[\"auth\"].signInWithPopup(_lib_firebase__WEBPACK_IMPORTED_MODULE_8__[\"googleAuthProvider\"]);\n      console.log(\"Signed In\");\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    console.log(address);\n  }, [address]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    ethereum.on(\"accountsChanged\", handleAccountsChanged);\n    console.log(\"nut\");\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    ethereum.request({\n      method: \"eth_accounts\"\n    }).then(handleAccountsChanged).catch(err => {\n      // Some unexpected error.\n      // For backwards compatibility reasons, if no accounts are available,\n      // eth_accounts will return an empty array.\n      console.error(err);\n    });\n  }, []);\n\n  function handleAccountsChanged(accounts) {\n    if (accounts.length === 0) {\n      // MetaMask is locked or the user has not connected any accounts\n      console.log(\"Please connect to MetaMask.\");\n    } else if (accounts[0] !== address) {\n      setAddress(accounts[0]); // Do any other work!\n    }\n  }\n\n  function connect() {\n    ethereum.request({\n      method: \"eth_requestAccounts\"\n    }).then(handleAccountsChanged).catch(err => {\n      if (err.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        // If this happens, the user rejected the connection request.\n        console.log(\"Please connect to MetaMask.\");\n      } else {\n        console.error(err);\n      }\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    position: \"static\",\n    color: \"default\",\n    elevation: 0,\n    className: classes.appBar,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      className: classes.toolbar,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        variant: \"h6\",\n        color: \"inherit\",\n        noWrap: true,\n        className: classes.toolbarTitle,\n        children: \"CloutCoin\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"#\",\n          color: \"primary\",\n          variant: \"outlined\",\n          className: classes.link,\n          onClick: signInSignOut,\n          children: user ? \"Signout\" : \"SignIn\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"#\",\n          color: \"primary\",\n          variant: \"outlined\",\n          className: classes.link,\n          onClick: connect,\n          children: `${address === null || address === void 0 ? void 0 : address.slice(0, 8)}...`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcz9jZDgyIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInVsIiwibWFyZ2luIiwicGFkZGluZyIsImxpc3RTdHlsZSIsImFwcEJhciIsImJvcmRlckJvdHRvbSIsInBhbGV0dGUiLCJkaXZpZGVyIiwidG9vbGJhciIsImZsZXhXcmFwIiwidG9vbGJhclRpdGxlIiwiZmxleEdyb3ciLCJsaW5rIiwic3BhY2luZyIsIk5hdmJhciIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwidXNlU3RhdGUiLCJjbGFzc2VzIiwidXNlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInNpZ25JblNpZ25PdXQiLCJhdXRoIiwic2lnbk91dCIsImNvbnNvbGUiLCJsb2ciLCJzaWduSW5XaXRoUG9wdXAiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJ1c2VFZmZlY3QiLCJldGhlcmV1bSIsIm9uIiwiaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwicmVxdWVzdCIsIm1ldGhvZCIsInRoZW4iLCJjYXRjaCIsImVyciIsImVycm9yIiwiYWNjb3VudHMiLCJsZW5ndGgiLCJjb25uZWN0IiwiY29kZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQyxhQUFXO0FBQ1BDLE1BQUUsRUFBRTtBQUNBQyxZQUFNLEVBQUUsQ0FEUjtBQUVBQyxhQUFPLEVBQUUsQ0FGVDtBQUdBQyxlQUFTLEVBQUU7QUFIWDtBQURHLEdBRDBCO0FBUXJDQyxRQUFNLEVBQUU7QUFDSkMsZ0JBQVksRUFBRyxhQUFZTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsT0FBUTtBQUQ3QyxHQVI2QjtBQVdyQ0MsU0FBTyxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQURMLEdBWDRCO0FBY3JDQyxjQUFZLEVBQUU7QUFDVkMsWUFBUSxFQUFFO0FBREEsR0FkdUI7QUFpQnJDQyxNQUFJLEVBQUU7QUFDRlgsVUFBTSxFQUFFRixLQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLEdBQWpCO0FBRE47QUFqQitCLENBQVosQ0FBRCxDQUE1Qjs7QUFzQkEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDakIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxFQUF0QztBQUNBLFFBQU1DLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7QUFFQSxRQUFNc0IsSUFBSSxHQUFHQyx3REFBVSxDQUFDQyx3REFBRCxDQUF2Qjs7QUFFQSxRQUFNQyxhQUFhLEdBQUcsWUFBWTtBQUM5QixRQUFJSCxJQUFKLEVBQVU7QUFDTixZQUFNSSxrREFBSSxDQUFDQyxPQUFMLEVBQU47QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNILEtBSEQsTUFHTztBQUNILFlBQU1ILGtEQUFJLENBQUNJLGVBQUwsQ0FBcUJDLGdFQUFyQixDQUFOO0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDtBQUNKLEdBUkQ7O0FBVUFHLHlEQUFTLENBQUMsTUFBTTtBQUNaSixXQUFPLENBQUNDLEdBQVIsQ0FBWVgsT0FBWjtBQUNILEdBRlEsRUFFTixDQUFDQSxPQUFELENBRk0sQ0FBVDtBQUlBYyx5REFBUyxDQUFDLE1BQU07QUFDWkMsWUFBUSxDQUFDQyxFQUFULENBQVksaUJBQVosRUFBK0JDLHFCQUEvQjtBQUNBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBRyx5REFBUyxDQUFDLE1BQU07QUFDWkMsWUFBUSxDQUNIRyxPQURMLENBQ2E7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FEYixFQUVLQyxJQUZMLENBRVVILHFCQUZWLEVBR0tJLEtBSEwsQ0FHWUMsR0FBRCxJQUFTO0FBQ1o7QUFDQTtBQUNBO0FBQ0FaLGFBQU8sQ0FBQ2EsS0FBUixDQUFjRCxHQUFkO0FBQ0gsS0FSTDtBQVNILEdBVlEsRUFVTixFQVZNLENBQVQ7O0FBWUEsV0FBU0wscUJBQVQsQ0FBK0JPLFFBQS9CLEVBQXlDO0FBQ3JDLFFBQUlBLFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QjtBQUNBZixhQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNILEtBSEQsTUFHTyxJQUFJYSxRQUFRLENBQUMsQ0FBRCxDQUFSLEtBQWdCeEIsT0FBcEIsRUFBNkI7QUFDaENDLGdCQUFVLENBQUN1QixRQUFRLENBQUMsQ0FBRCxDQUFULENBQVYsQ0FEZ0MsQ0FFaEM7QUFDSDtBQUNKOztBQUVELFdBQVNFLE9BQVQsR0FBbUI7QUFDZlgsWUFBUSxDQUNIRyxPQURMLENBQ2E7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FEYixFQUVLQyxJQUZMLENBRVVILHFCQUZWLEVBR0tJLEtBSEwsQ0FHWUMsR0FBRCxJQUFTO0FBQ1osVUFBSUEsR0FBRyxDQUFDSyxJQUFKLEtBQWEsSUFBakIsRUFBdUI7QUFDbkI7QUFDQTtBQUNBakIsZUFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDSCxPQUpELE1BSU87QUFDSEQsZUFBTyxDQUFDYSxLQUFSLENBQWNELEdBQWQ7QUFDSDtBQUNKLEtBWEw7QUFZSDs7QUFFRCxzQkFDSSxxRUFBQywrREFBRDtBQUNJLFlBQVEsRUFBQyxRQURiO0FBRUksU0FBSyxFQUFDLFNBRlY7QUFHSSxhQUFTLEVBQUUsQ0FIZjtBQUlJLGFBQVMsRUFBRW5CLE9BQU8sQ0FBQ2QsTUFKdkI7QUFBQSwyQkFNSSxxRUFBQyxnRUFBRDtBQUFTLGVBQVMsRUFBRWMsT0FBTyxDQUFDVixPQUE1QjtBQUFBLDhCQUNJLHFFQUFDLG1FQUFEO0FBQ0ksZUFBTyxFQUFDLElBRFo7QUFFSSxhQUFLLEVBQUMsU0FGVjtBQUdJLGNBQU0sTUFIVjtBQUlJLGlCQUFTLEVBQUVVLE9BQU8sQ0FBQ1IsWUFKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFTSTtBQUFBLGdDQUNJLHFFQUFDLCtEQUFEO0FBQ0ksY0FBSSxFQUFDLEdBRFQ7QUFFSSxlQUFLLEVBQUMsU0FGVjtBQUdJLGlCQUFPLEVBQUMsVUFIWjtBQUlJLG1CQUFTLEVBQUVRLE9BQU8sQ0FBQ04sSUFKdkI7QUFLSSxpQkFBTyxFQUFFVSxhQUxiO0FBQUEsb0JBT0tILElBQUksR0FBRyxTQUFILEdBQWU7QUFQeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQVVJLHFFQUFDLCtEQUFEO0FBQ0ksY0FBSSxFQUFDLEdBRFQ7QUFFSSxlQUFLLEVBQUMsU0FGVjtBQUdJLGlCQUFPLEVBQUMsVUFIWjtBQUlJLG1CQUFTLEVBQUVELE9BQU8sQ0FBQ04sSUFKdkI7QUFLSSxpQkFBTyxFQUFFNkIsT0FMYjtBQUFBLG9CQU9NLEdBQUUxQixPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRTRCLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQXFCO0FBUDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXVDSCxDQXJHRDs7QUF1R2U3QixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgYXV0aCwgZmlyZXN0b3JlLCBnb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9saWIvY29udGV4dFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICBcIkBnbG9iYWxcIjoge1xuICAgICAgICB1bDoge1xuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBhcHBCYXI6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWAsXG4gICAgfSxcbiAgICB0b29sYmFyOiB7XG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICB9LFxuICAgIHRvb2xiYXJUaXRsZToge1xuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDEuNSksXG4gICAgfSxcbn0pKTtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gICAgY29uc3Qgc2lnbkluU2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGF3YWl0IGF1dGguc2lnbk91dCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaWduZWQgT3V0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgYXV0aC5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlQXV0aFByb3ZpZGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbmVkIEluXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpO1xuICAgIH0sIFthZGRyZXNzXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBldGhlcmV1bS5vbihcImFjY291bnRzQ2hhbmdlZFwiLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm51dFwiKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBldGhlcmV1bVxuICAgICAgICAgICAgLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIgfSlcbiAgICAgICAgICAgIC50aGVuKGhhbmRsZUFjY291bnRzQ2hhbmdlZClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU29tZSB1bmV4cGVjdGVkIGVycm9yLlxuICAgICAgICAgICAgICAgIC8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zLCBpZiBubyBhY2NvdW50cyBhcmUgYXZhaWxhYmxlLFxuICAgICAgICAgICAgICAgIC8vIGV0aF9hY2NvdW50cyB3aWxsIHJldHVybiBhbiBlbXB0eSBhcnJheS5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVBY2NvdW50c0NoYW5nZWQoYWNjb3VudHMpIHtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTWV0YU1hc2sgaXMgbG9ja2VkIG9yIHRoZSB1c2VyIGhhcyBub3QgY29ubmVjdGVkIGFueSBhY2NvdW50c1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgY29ubmVjdCB0byBNZXRhTWFzay5cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoYWNjb3VudHNbMF0gIT09IGFkZHJlc3MpIHtcbiAgICAgICAgICAgIHNldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgLy8gRG8gYW55IG90aGVyIHdvcmshXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICBldGhlcmV1bVxuICAgICAgICAgICAgLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pXG4gICAgICAgICAgICAudGhlbihoYW5kbGVBY2NvdW50c0NoYW5nZWQpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gNDAwMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFSVAtMTE5MyB1c2VyUmVqZWN0ZWRSZXF1ZXN0IGVycm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaGFwcGVucywgdGhlIHVzZXIgcmVqZWN0ZWQgdGhlIGNvbm5lY3Rpb24gcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgY29ubmVjdCB0byBNZXRhTWFzay5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcHBCYXJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcbiAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfVxuICAgICAgICA+XG4gICAgICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgbm9XcmFwXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyVGl0bGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDbG91dENvaW5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25JblNpZ25PdXR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyID8gXCJTaWdub3V0XCIgOiBcIlNpZ25JblwifVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3R9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHthZGRyZXNzPy5zbGljZSgwLCA4KX0uLi5gfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./lib/context.js":
/*!************************!*\
  !*** ./lib/context.js ***!
  \************************/
/*! exports provided: UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  user: null\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29udGV4dC5qcz82MWFlIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQUQsQ0FBakMiLCJmaWxlIjoiLi9saWIvY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IHVzZXI6IG51bGwgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/context.js\n");

/***/ }),

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/*! exports provided: auth, firestore, googleAuthProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firestore\", function() { return firestore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"googleAuthProvider\", function() { return googleAuthProvider; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_analytics__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyCQ6Ghyg-Y7FAA3GSyuyZErxkEzvWOjf60\",\n  authDomain: \"cloutcoin-1e045.firebaseapp.com\",\n  projectId: \"cloutcoin-1e045\",\n  storageBucket: \"cloutcoin-1e045.appspot.com\",\n  messagingSenderId: \"1008994815390\",\n  appId: \"1:1008994815390:web:93086d54682a2954cbda8f\",\n  measurementId: \"G-1M57JJ6MXY\"\n};\n\nif (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\n}\n\nconst auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();\nconst firestore = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();\nconst googleAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZmlyZWJhc2UuanM/NTNhMyJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXV0aCIsImZpcmVzdG9yZSIsImdvb2dsZUF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUc7QUFDakJDLFFBQU0sRUFBRSx5Q0FEUztBQUVqQkMsWUFBVSxFQUFFLGlDQUZLO0FBR2pCQyxXQUFTLEVBQUUsaUJBSE07QUFJakJDLGVBQWEsRUFBRSw2QkFKRTtBQUtqQkMsbUJBQWlCLEVBQUUsZUFMRjtBQU1qQkMsT0FBSyxFQUFFLDRDQU5VO0FBT2pCQyxlQUFhLEVBQUU7QUFQRSxDQUFyQjs7QUFVQSxJQUFJLENBQUNDLG1EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDdkJGLHFEQUFRLENBQUNHLGFBQVQsQ0FBdUJYLGNBQXZCO0FBQ0g7O0FBRU0sTUFBTVksSUFBSSxHQUFHSixtREFBUSxDQUFDSSxJQUFULEVBQWI7QUFDQSxNQUFNQyxTQUFTLEdBQUdMLG1EQUFRLENBQUNLLFNBQVQsRUFBbEI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxJQUFJTixtREFBUSxDQUFDSSxJQUFULENBQWNHLGtCQUFsQixFQUEzQjtBQUVRUCxrSEFBZiIsImZpbGUiOiIuL2xpYi9maXJlYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcbmltcG9ydCBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xuXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUNRNkdoeWctWTdGQUEzR1N5dXlaRXJ4a0V6dldPamY2MFwiLFxuICAgIGF1dGhEb21haW46IFwiY2xvdXRjb2luLTFlMDQ1LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJjbG91dGNvaW4tMWUwNDVcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImNsb3V0Y29pbi0xZTA0NS5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMDg5OTQ4MTUzOTBcIixcbiAgICBhcHBJZDogXCIxOjEwMDg5OTQ4MTUzOTA6d2ViOjkzMDg2ZDU0NjgyYTI5NTRjYmRhOGZcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctMU01N0pKNk1YWVwiLFxufTtcblxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xufVxuXG5leHBvcnQgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbmV4cG9ydCBjb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbmV4cG9ydCBjb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cache\", function() { return cache; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/context */ \"./lib/context.js\");\n\nvar _jsxFileName = \"/home/daemin/Desktop/FinalProject/CloutCoinMUI/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst cache = _emotion_cache__WEBPACK_IMPORTED_MODULE_7___default()({\n  key: \"css\",\n  prepend: true\n});\nfunction MyApp(props) {\n  const {\n    Component,\n    pageProps\n  } = props;\n  const [user] = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__[\"useAuthState\"])(_lib_firebase__WEBPACK_IMPORTED_MODULE_11__[\"auth\"]); //provides an easy way to listen to the current user in firebase\n\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector(\"#jss-server-side\");\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    // turn off realtime subscription\n    let unsubscribe;\n\n    if (user) {\n      const ref = _lib_firebase__WEBPACK_IMPORTED_MODULE_11__[\"firestore\"].collection(\"users\").doc(user.uid);\n      console.log(user); // unsubscribe = ref.onSnapshot((doc) => {\n      //     console.log(doc.data());\n      // });\n    } else {\n      console.log(\"ntohing\");\n    }\n\n    return unsubscribe;\n  }, [user]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_emotion_react__WEBPACK_IMPORTED_MODULE_5__[\"CacheProvider\"], {\n    value: cache,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"My page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_context__WEBPACK_IMPORTED_MODULE_12__[\"UserContext\"].Provider, {\n      value: user,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"ThemeProvider\"], {\n        theme: _src_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, this);\n}\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiY2FjaGUiLCJjcmVhdGVDYWNoZSIsImtleSIsInByZXBlbmQiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJSZWFjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwicmVmIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsS0FBSyxHQUFHQyxxREFBVyxDQUFDO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQWNDLFNBQU8sRUFBRTtBQUF2QixDQUFELENBQXpCO0FBRVEsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ2pDLFFBQU07QUFBRUMsYUFBRjtBQUFhQztBQUFiLE1BQTJCRixLQUFqQztBQUNBLFFBQU0sQ0FBQ0csSUFBRCxJQUFTQywrRUFBWSxDQUFDQyxtREFBRCxDQUEzQixDQUZpQyxDQUVFOztBQUVuQ0MsaURBQUEsQ0FBZ0IsTUFBTTtBQUNsQjtBQUNBLFVBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFsQjs7QUFDQSxRQUFJRixTQUFKLEVBQWU7QUFDWEEsZUFBUyxDQUFDRyxhQUFWLENBQXdCQyxXQUF4QixDQUFvQ0osU0FBcEM7QUFDSDtBQUNKLEdBTkQsRUFNRyxFQU5IO0FBUUFLLHlEQUFTLENBQUMsTUFBTTtBQUNaO0FBQ0EsUUFBSUMsV0FBSjs7QUFFQSxRQUFJVixJQUFKLEVBQVU7QUFDTixZQUFNVyxHQUFHLEdBQUdDLHdEQUFTLENBQUNDLFVBQVYsQ0FBcUIsT0FBckIsRUFBOEJDLEdBQTlCLENBQWtDZCxJQUFJLENBQUNlLEdBQXZDLENBQVo7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlqQixJQUFaLEVBRk0sQ0FHTjtBQUNBO0FBQ0E7QUFDSCxLQU5ELE1BTU87QUFDSGdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSDs7QUFFRCxXQUFPUCxXQUFQO0FBQ0gsR0FmUSxFQWVOLENBQUNWLElBQUQsQ0FmTSxDQUFUO0FBaUJBLHNCQUNJLHFFQUFDLDREQUFEO0FBQWUsU0FBSyxFQUFFUixLQUF0QjtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxlQUFPLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFRSSxxRUFBQyx5REFBRCxDQUFhLFFBQWI7QUFBc0IsV0FBSyxFQUFFUSxJQUE3QjtBQUFBLDZCQUNJLHFFQUFDLHNFQUFEO0FBQWUsYUFBSyxFQUFFa0Isa0RBQXRCO0FBQUEsZ0NBRUkscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSSxxRUFBQyxTQUFELG9CQUFlbkIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CSDtBQUVESCxLQUFLLENBQUN1QixTQUFOLEdBQWtCO0FBQ2RyQixXQUFTLEVBQUVzQixpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQURuQjtBQUVkdkIsV0FBUyxFQUFFcUIsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFGZCxDQUFsQiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3NyYy90aGVtZVwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcbmltcG9ydCB7IGF1dGgsIGZpcmVzdG9yZSB9IGZyb20gXCIuLi9saWIvZmlyZWJhc2VcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi9jb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBjYWNoZSA9IGNyZWF0ZUNhY2hlKHsga2V5OiBcImNzc1wiLCBwcmVwZW5kOiB0cnVlIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTsgLy9wcm92aWRlcyBhbiBlYXN5IHdheSB0byBsaXN0ZW4gdG8gdGhlIGN1cnJlbnQgdXNlciBpbiBmaXJlYmFzZVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNzLXNlcnZlci1zaWRlXCIpO1xuICAgICAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICAgICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gdHVybiBvZmYgcmVhbHRpbWUgc3Vic2NyaXB0aW9uXG4gICAgICAgIGxldCB1bnN1YnNjcmliZTtcblxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgY29uc3QgcmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlci51aWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICAgICAgICAvLyB1bnN1YnNjcmliZSA9IHJlZi5vblNuYXBzaG90KChkb2MpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJudG9oaW5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICAgIH0sIFt1c2VyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPk15IHBhZ2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlcn0+XG4gICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9DYWNoZVByb3ZpZGVyPlxuICAgICk7XG59XG5cbk15QXBwLnByb3BUeXBlcyA9IHtcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICAgIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: \"#556cd6\"\n    },\n    secondary: {\n      main: \"#19857b\"\n    },\n    error: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"red\"].A400\n    },\n    background: {\n      default: \"#fff\"\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUuanM/Y2MzNyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJyZWQiLCJBNDAwIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBLE1BQU1BLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUN6QkMsU0FBTyxFQUFFO0FBQ0xDLFdBQU8sRUFBRTtBQUNMQyxVQUFJLEVBQUU7QUFERCxLQURKO0FBSUxDLGFBQVMsRUFBRTtBQUNQRCxVQUFJLEVBQUU7QUFEQyxLQUpOO0FBT0xFLFNBQUssRUFBRTtBQUNIRixVQUFJLEVBQUVHLDREQUFHLENBQUNDO0FBRFAsS0FQRjtBQVVMQyxjQUFVLEVBQUU7QUFDUkMsYUFBTyxFQUFFO0FBREQ7QUFWUDtBQURnQixDQUFELENBQTVCO0FBaUJlVixvRUFBZiIsImZpbGUiOiIuL3NyYy90aGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogXCIjNTU2Y2Q2XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogXCIjMTk4NTdiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtYWluOiByZWQuQTQwMCxcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogXCIjZmZmXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/cache\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jYWNoZVwiP2Q4YzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGVtb3Rpb24vY2FjaGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jYWNoZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/cache\n");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiPzZkMDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGVtb3Rpb24vcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/react\n");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIj85MWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/AppBar\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI/YjIxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Link\n");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI/MzZlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Toolbar\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI/MGJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIj83ZTM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/colors\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/analytics\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hbmFseXRpY3NcIj82ZjI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FuYWx5dGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FuYWx5dGljc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/analytics\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-firebase-hooks/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI/YzljZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-firebase-hooks/auth\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });