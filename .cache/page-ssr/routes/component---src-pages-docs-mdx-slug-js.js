exports.id = "component---src-pages-docs-mdx-slug-js";
exports.ids = ["component---src-pages-docs-mdx-slug-js"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/components/layout.module.css":
/*!******************************************!*\
  !*** ./src/components/layout.module.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "heading": () => (/* binding */ heading),
/* harmony export */   "navLinkItem": () => (/* binding */ navLinkItem),
/* harmony export */   "navLinkText": () => (/* binding */ navLinkText),
/* harmony export */   "navLinks": () => (/* binding */ navLinks),
/* harmony export */   "siteTitle": () => (/* binding */ siteTitle)
/* harmony export */ });
// Exports
var container = "layout-module--container--eLBMS";
var heading = "layout-module--heading--8VjLO";
var navLinks = "layout-module--nav-links--EROwB";
var navLinkItem = "layout-module--nav-link-item--pfCo2";
var navLinkText = "layout-module--nav-link-text--ac2nV";
var siteTitle = "layout-module--site-title--5N6mf";


/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/index.js":
/*!*************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Welcome to gatsby-plugin-mdx!
 *
 * Start reading in gatsby-node.js
 */
const MDXRenderer = __webpack_require__(/*! ./mdx-renderer */ "./node_modules/gatsby-plugin-mdx/mdx-renderer.js");

module.exports = {
  MDXRenderer: MDXRenderer
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/mdx-renderer.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/mdx-renderer.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");

const _excluded = ["scope", "children"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

const React = __webpack_require__(/*! react */ "react");

const {
  mdx
} = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

const {
  useMDXScope
} = __webpack_require__(/*! ./context */ "./node_modules/gatsby-plugin-mdx/context.js");

module.exports = function MDXRenderer(_ref) {
  let {
    scope,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const mdxScope = useMDXScope(scope); // Memoize the compiled component

  const End = React.useMemo(() => {
    if (!children) {
      return null;
    }

    const fullScope = _objectSpread({
      // React is here just in case the user doesn't pass them in
      // in a manual usage of the renderer
      React,
      mdx
    }, mdxScope);

    const keys = Object.keys(fullScope);
    const values = keys.map(key => fullScope[key]);
    const fn = new Function(`_fn`, ...keys, `${children}`);
    return fn({}, ...values);
  }, [children, scope]);
  return React.createElement(End, _objectSpread({}, props));
};

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3159585216.json */ "./public/page-data/sq/d/3159585216.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./src/components/layout.module.css");





const Layout = ({
  pageTitle,
  children
}) => {
  const data = _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, pageTitle, " | ", data.site.siteMetadata.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("header", {
    class: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.siteTitle
  }, data.site.siteMetadata.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinks
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkText
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkText
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/docs",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkText
  }, "Reference Docs")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.heading
  }, pageTitle), children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/docs/{mdx.slug}.js":
/*!**************************************!*\
  !*** ./src/pages/docs/{mdx.slug}.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-mdx */ "./node_modules/gatsby-plugin-mdx/index.js");
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./src/components/layout.js");




const DocPage = ({
  data
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: data.mdx.frontmatter.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, data.mdx.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_1__.MDXRenderer, null, data.mdx.body));
};

const query = "1268230702";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocPage);

/***/ }),

/***/ "./public/page-data/sq/d/3159585216.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3159585216.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Sean\'s API Page"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-docs-mdx-slug-js.js.map