var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import require$$0, { useEffect, useState, createContext, useContext, useCallback, useRef } from "react";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var React = require$$0;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var assign = Object.assign;
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              c--;
            }
            for (; s >= 1 && c >= 0; s--, c--) {
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--;
                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && self) ;
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type,
          key,
          ref,
          props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          if (maybeKey !== void 0) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = "" + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function isValidElement(object) {
        {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === void 0 || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      var didWarnAboutKeySpread = {};
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum();
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV(type, props, key, source, self);
          if (element == null) {
            return element;
          }
          if (validType) {
            var children = props.children;
            if (children !== void 0) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          {
            if (hasOwnProperty.call(props, "key")) {
              var componentName = getComponentNameFromType(type);
              var keys = Object.keys(props).filter(function(k) {
                return k !== "key";
              });
              var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
              if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                didWarnAboutKeySpread[componentName + beforeExample] = true;
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx = jsxWithValidationDynamic;
      var jsxs = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx;
      reactJsxRuntime_development.jsxs = jsxs;
    })();
  }
  return reactJsxRuntime_development;
}
if (process.env.NODE_ENV === "production") {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}
var jsxRuntimeExports = jsxRuntime.exports;
const CountrySelector = ({ selectedCountry, onChange }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        value: selectedCountry,
        onChange: (e) => onChange(e.target.value),
        className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "BENIN", children: "🇧🇯 Benin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "BURKINA_FASO", children: "🇧🇫 Burkina Faso" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CONGO_BRAZZAVILLE", children: "🇨🇬 Congo Brazzaville" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COTE_D_IVOIRE", children: "🇨🇮 Côte d'Ivoire" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SENEGAL", children: "🇸🇳 Sénégal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TOGO", children: "🇹🇬 Togo" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })
  ] });
};
const BENIN_PREFIXES = {
  CORIS: ["0142", "0146", "0150", "0151", "0152", "0153", "0154", "0156", "0157", "0159", "0161", "0162", "0166", "0145", "0155", "0158", "0160", "0163", "0164", "0165", "0168", "0194", "0195", "0198", "0199", "0140", "0141", "0143", "0144", "0147"],
  MTN: ["0142", "0146", "0150", "0151", "0152", "0153", "0154", "0156", "0157", "0159", "0161", "0162", "0166", "0167", "0169", "0190", "0191", "0192", "0193", "0196", "0197"],
  MOOV: ["0145", "0155", "0158", "0160", "0163", "0164", "0165", "0168", "0194", "0195", "0198", "0199"],
  CELTIIS: ["0140", "0141", "0143", "0144", "0147"]
};
const NETWORK_FEES = {
  BENIN: {
    MTN: 0.017,
    MOOV: 0.017,
    CELTIIS: 0.017,
    CORIS: 0.017
  },
  COTE_D_IVOIRE: {
    MTN: 0.029,
    MOOV: 0.029,
    ORANGE: 0.029,
    WAVE: 0.032
  },
  BURKINA_FASO: {
    MOOV: 0.032,
    ORANGE: 0.039
  },
  CONGO_BRAZZAVILLE: {
    MTN: 0.03
  },
  SENEGAL: {
    ORANGE: 0.019,
    FREE: 0.019
  },
  TOGO: {
    TOGOCOM: 0.03,
    MOOV: 0.03
  }
};
const NETWORK_API_MAPPING = {
  BENIN: {
    MTN: "MTN",
    MOOV: "MOOV",
    CELTIIS: "CELTIIS BJ",
    CORIS: "CORIS"
  },
  COTE_D_IVOIRE: {
    MTN: "MTN CI",
    MOOV: "MOOV CI",
    ORANGE: "ORANGE CI",
    WAVE: "WAVE CI"
  },
  BURKINA_FASO: {
    MOOV: "MOOV BF",
    ORANGE: "ORANGE BF"
  },
  CONGO_BRAZZAVILLE: {
    MTN: "MTN CG"
  },
  SENEGAL: {
    ORANGE: "ORANGE SN",
    FREE: "FREE SN"
  },
  TOGO: {
    TOGOCOM: "TOGOCOM TG",
    MOOV: "MOOV TG"
  }
};
const getNetworkByPhonePrefix = (prefix, currentNetwork) => {
  if (BENIN_PREFIXES.MTN.includes(prefix)) {
    return "MTN";
  } else if (BENIN_PREFIXES.MOOV.includes(prefix)) {
    return "MOOV";
  } else if (BENIN_PREFIXES.CELTIIS.includes(prefix)) {
    return "CELTIIS";
  } else if (BENIN_PREFIXES.CORIS.includes(prefix)) {
    return "CORIS";
  }
  return null;
};
const getNetworksForCountry = (country) => {
  switch (country) {
    case "BENIN":
      return ["MTN", "MOOV", "CELTIIS", "CORIS"];
    case "COTE_D_IVOIRE":
      return ["MTN", "MOOV", "ORANGE", "WAVE"];
    case "BURKINA_FASO":
      return ["MOOV", "ORANGE"];
    case "CONGO_BRAZZAVILLE":
      return ["MTN"];
    case "SENEGAL":
      return ["ORANGE", "FREE"];
    case "TOGO":
      return ["TOGOCOM", "MOOV"];
    default:
      return ["MTN", "MOOV"];
  }
};
const calculateFees = (amount, country, network, paymentMethod, cardType) => {
  if (paymentMethod === "CARD" && (cardType === "VISA" || cardType === "MASTERCARD")) {
    const cardFeePercentage = 0.045;
    return Math.ceil(amount * cardFeePercentage);
  }
  const countryFees = NETWORK_FEES[country];
  let feePercentage = 0;
  if (countryFees && countryFees[network]) {
    feePercentage = countryFees[network];
  }
  const calculatedFees = amount * feePercentage;
  return Math.ceil(calculatedFees);
};
const getNetworkApiCode = (country, network) => {
  const mapping = NETWORK_API_MAPPING[country];
  if (mapping && mapping[network]) {
    return mapping[network];
  }
  return network.toLowerCase();
};
const NetworkSelector = ({
  selectedNetwork,
  onChange,
  country
}) => {
  const availableNetworks = getNetworksForCountry(country);
  useEffect(() => {
    if (availableNetworks.length > 0 && !availableNetworks.includes(selectedNetwork)) {
      onChange(availableNetworks[0]);
    }
  }, [country, selectedNetwork, availableNetworks, onChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        value: selectedNetwork,
        onChange: (e) => onChange(e.target.value),
        className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
        children: availableNetworks.map((network) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: network, children: network.replace("_", " ") }, network))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })
  ] });
};
const StatusModal = ({
  isOpen,
  onClose,
  status,
  message
}) => {
  useEffect(() => {
    if (status === "SUCCESSFUL" || status === "SUCCESS") {
      const timer = setTimeout(() => {
        onClose();
      }, 5e3);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);
  if (!isOpen) return null;
  const getStatusIcon = () => {
    switch (status) {
      case "SUCCESSFUL":
      case "SUCCESS":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-green-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) });
      case "FAILED":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-red-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) });
      case "PENDING":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "animate-spin h-10 w-10 text-yellow-500", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }) });
      case "TIMEOUT":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }) });
      default:
        return null;
    }
  };
  const getButtonText = () => {
    switch (status) {
      case "SUCCESSFUL":
      case "SUCCESS":
        return "Continuer";
      case "FAILED":
      case "TIMEOUT":
        return "Réessayer";
      default:
        return "Fermer";
    }
  };
  const getButtonColor = () => {
    switch (status) {
      case "SUCCESSFUL":
      case "SUCCESS":
        return "bg-green-500 hover:bg-green-600";
      case "FAILED":
        return "bg-red-500 hover:bg-red-600";
      case "TIMEOUT":
        return "bg-gray-500 hover:bg-gray-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-sm p-6 text-center", children: [
    getStatusIcon(),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: status === "SUCCESSFUL" ? "Paiement Réussi" : status === "FAILED" ? "Paiement Échoué" : status === "SUCCESS" ? "Paiement Réussi" : status === "PENDING" ? "Traitement en cours" : "Vérification expirée" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onClose,
        className: `w-full ${getButtonColor()} text-white font-bold py-3 px-4 rounded-md transition-colors duration-300`,
        children: getButtonText()
      }
    )
  ] }) });
};
const OTPModal = ({ isOpen, onClose, onSubmit, reference }) => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    onSubmit(otp);
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium", children: "Confirmation de paiement" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Un code de confirmation a été envoyé à votre téléphone. Veuillez le saisir ci-dessous pour finaliser votre paiement." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mb-1", children: "Référence de transaction:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: reference })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Code OTP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: otp,
              onChange: (e) => setOtp(e.target.value),
              placeholder: "Entrez le code reçu par SMS",
              className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: isLoading,
            className: "w-full bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange disabled:opacity-50",
            children: isLoading ? "Traitement en cours..." : "Confirmer le paiement"
          }
        )
      ] })
    ] })
  ] }) });
};
const defaultPaymentConfig = {
  amount: 0,
  description: "",
  shop: "",
  apiToken: "",
  mode: "SANDBOX"
};
const FeexPayContext = createContext({
  paymentConfig: defaultPaymentConfig,
  setPaymentConfig: () => {
  }
});
const useFeexPay = () => useContext(FeexPayContext);
const FeexPayProvider = ({ children }) => {
  const [paymentConfig, setPaymentConfig] = useState(defaultPaymentConfig);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FeexPayContext.Provider, { value: { paymentConfig, setPaymentConfig }, children });
};
const getClientIP = () => __async(void 0, null, function* () {
  try {
    const res = yield fetch("https://api.ipify.org?format=json");
    const data = yield res.json();
    return data.ip;
  } catch (e) {
    return "unknown";
  }
});
const requestToPay = (params) => __async(void 0, null, function* () {
  const networkApiCode = getNetworkApiCode(params.country, params.network);
  const apiUrl = `https://api.feexpay.me/api/transactions/requesttopay/integration`;
  let cleanedPhone = params.phoneNumber.replace(/\+/g, "");
  if (cleanedPhone.length >= 8) {
    const prefix = cleanedPhone.slice(0, 3);
    if (cleanedPhone.startsWith(prefix + prefix)) {
      cleanedPhone = cleanedPhone.slice(prefix.length);
    }
  }
  try {
    const merchantDomain = window.location.origin;
    const merchantIp = yield getClientIP();
    const apiParams = {
      phoneNumber: cleanedPhone,
      amount: params.amount,
      reseau: networkApiCode,
      description: params.description,
      customId: params.customId,
      shop: params.shop,
      token: params.apiToken,
      merchant_domain: merchantDomain,
      merchant_ip: merchantIp,
      payment_interface: "REACT"
    };
    const response = yield fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${params.apiToken}`
      },
      body: JSON.stringify(apiParams)
    });
    if (!response.ok) {
      throw new Error("Payment request failed");
    }
    return yield response.json();
  } catch (error) {
    console.error("Payment request error:", error);
    throw error;
  }
});
const checkTransactionStatus = (reference) => __async(void 0, null, function* () {
  const apiUrl = `https://api.feexpay.me/api/transactions/getrequesttopay/integration/${reference}`;
  try {
    const response = yield fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Status check failed");
    }
    return yield response.json();
  } catch (error) {
    console.error("Status check error:", error);
    throw error;
  }
});
const getTransactionDetails = (params) => __async(void 0, null, function* () {
  const apiUrl = "https://api.feexpay.me/api/transactions/details";
  try {
    const networkApiCode = getNetworkApiCode(params.country, params.network);
    const requestParams = {
      network: networkApiCode,
      amount: params.amount,
      shop: params.shop
    };
    const response = yield fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${params.apiToken}`
      },
      body: JSON.stringify(requestParams)
    });
    if (!response.ok) {
      throw new Error("Failed to get transaction details");
    }
    return yield response.json();
  } catch (error) {
    console.error("Transaction details error:", error);
    throw error;
  }
});
const requestCardPayment = (params) => __async(void 0, null, function* () {
  const apiUrl = "https://api.feexpay.me/api/transactions/public/initcard";
  try {
    const requestParams = {
      phone: params.phone,
      amount: params.amount,
      shop: params.shop,
      first_name: params.first_name,
      last_name: params.last_name,
      email: params.email,
      type_card: params.type_card,
      currency: "XOF"
      // La devise est toujours XOF pour FeexPay
    };
    const response = yield fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${params.apiToken}`
      },
      body: JSON.stringify(requestParams)
    });
    if (!response.ok) {
      throw new Error("Card payment request failed");
    }
    return yield response.json();
  } catch (error) {
    console.error("Card payment request error:", error);
    throw error;
  }
});
const requestWalletCorisPayment = (params) => __async(void 0, null, function* () {
  const apiUrl = "https://api.feexpay.me/api/transactions/requesttopay/integration";
  try {
    const countryCode = "229";
    const phoneNumberRight = params.phoneNumber.startsWith("+229") ? params.phoneNumber.substring(4) : params.phoneNumber.startsWith("229") ? params.phoneNumber.substring(3) : params.phoneNumber;
    const requestParams = {
      phoneNumber: `229${phoneNumberRight}`,
      country: countryCode,
      phoneNumberRight,
      amount: params.amount.toString(),
      currency: "XOF",
      description: params.description || "Paiement via FeexPay",
      email: params.email,
      first_name: params.first_name,
      otp: params.otp || "",
      reference: params.reference || "",
      reseau: "CORIS",
      shop: params.shop,
      token: params.apiToken
    };
    const response = yield fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestParams)
    });
    const responseData = yield response.json();
    return __spreadProps(__spreadValues({}, responseData), {
      statusCode: response.status.toString()
    });
  } catch (error) {
    console.error("Wallet Coris payment request error:", error);
    throw error;
  }
});
const getShop$1 = (apiToken) => __async(void 0, null, function* () {
  const apiUrl = `https://api.feexpay.me/api/shop/${apiToken}/get_shop`;
  try {
    const response = yield fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Shop retrieval failed");
    }
    return yield response.json();
  } catch (error) {
    console.error("Shop retrieval error:", error);
    throw error;
  }
});
const handlePaymentSubmit = (e, props, validateForm, getFormattedPhoneNumber) => __async(void 0, null, function* () {
  e.preventDefault();
  if (!validateForm()) {
    return;
  }
  const {
    baseAmount,
    network,
    country,
    paymentConfig,
    generateRandomId,
    setStateCallbacks
  } = props;
  const {
    setTransactionReference,
    setPaymentStatus,
    setStatusMessage,
    setStatusModalOpen,
    setIsLoading
  } = setStateCallbacks;
  setIsLoading(true);
  try {
    const formattedPhoneNumber = getFormattedPhoneNumber();
    const response = yield requestToPay({
      phoneNumber: formattedPhoneNumber,
      amount: baseAmount,
      // Envoyer le montant sans frais
      network,
      country,
      // Ajout du paramètre country
      description: paymentConfig.description,
      customId: paymentConfig.customId || generateRandomId(),
      shop: paymentConfig.shop,
      apiToken: paymentConfig.apiToken,
      currency: paymentConfig.currency
    });
    if (response.statusCode === "10") {
      setPaymentStatus("INSUFFICIENT_FUNDS");
      setStatusMessage("Fonds insuffisants. Veuillez vérifier votre solde et réessayer.");
      setStatusModalOpen(true);
      setIsLoading(false);
      if (paymentConfig.callback) {
        paymentConfig.callback({
          reference: response.reference,
          status: "FAILED",
          phoneNumber: formattedPhoneNumber,
          reseau: network,
          callback_info: paymentConfig.callback_info,
          description: paymentConfig.description,
          transaction_id: response.reference,
          message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
          amount: paymentConfig.amount,
          currency: paymentConfig.currency
        });
      }
      if (paymentConfig.error_callback_url) {
        window.location.href = `${paymentConfig.error_callback_url}?ref=${response.reference}`;
      }
      return;
    } else if (response.statusCode === "92") {
      setPaymentStatus("FAILED");
      setStatusMessage("La transaction a été annulée. Veuillez réessayer.");
      setStatusModalOpen(true);
      setIsLoading(false);
      if (paymentConfig.callback) {
        paymentConfig.callback({
          reference: response.reference,
          status: "FAILED",
          phoneNumber: formattedPhoneNumber,
          reseau: network,
          callback_info: paymentConfig.callback_info,
          description: paymentConfig.description,
          transaction_id: response.reference,
          message: "La transaction a été annulée. Veuillez réessayer.",
          amount: paymentConfig.amount,
          currency: paymentConfig.currency
        });
      }
      if (paymentConfig.error_callback_url) {
        window.location.href = `${paymentConfig.error_callback_url}?ref=${response.reference}`;
      }
      return;
    }
    setTransactionReference(response.reference);
    return { reference: response.reference };
  } catch (error) {
    console.error("Payment initiation failed:", error);
    setPaymentStatus("FAILED");
    setStatusMessage("Le paiement a échoué. Veuillez réessayer.");
    setStatusModalOpen(true);
    setIsLoading(false);
  }
});
const startStatusCheck = (ref, props, network, getFormattedPhoneNumber) => {
  let checkCount = 0;
  const maxChecks = 12;
  const {
    paymentConfig,
    setStateCallbacks
  } = props;
  const {
    setPaymentStatus,
    setStatusMessage,
    setStatusModalOpen,
    setIsLoading
  } = setStateCallbacks;
  const intervalId = setInterval(() => __async(void 0, null, function* () {
    checkCount++;
    try {
      const status = yield checkTransactionStatus(ref);
      if (status.reason === "LOW_BALANCE_OR_PAYEE_LIMIT_REACHED_OR_NOT_ALLOWED") {
        clearInterval(intervalId);
        setPaymentStatus("INSUFFICIENT_FUNDS");
        setStatusMessage("Fonds insuffisants. Veuillez vérifier votre solde et réessayer.");
        setStatusModalOpen(true);
        setIsLoading(false);
        if (paymentConfig.callback) {
          paymentConfig.callback({
            reference: status.reference,
            status: "FAILED",
            phoneNumber: getFormattedPhoneNumber(),
            reseau: network,
            callback_info: paymentConfig.callback_info,
            description: paymentConfig.description,
            transaction_id: status.reference,
            message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
            amount: paymentConfig.amount,
            currency: paymentConfig.currency
          });
        }
        if (paymentConfig.error_callback_url) {
          window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
        }
        return;
      } else if (status.reason === "PAYER NOT FOUND") {
        clearInterval(intervalId);
        setPaymentStatus("FAILED");
        setStatusMessage("Numéro de téléphone non trouvé. Veuillez vérifier le numéro et réessayer.");
        setStatusModalOpen(true);
        setIsLoading(false);
        if (paymentConfig.callback) {
          paymentConfig.callback({
            reference: status.reference,
            status: "FAILED",
            phoneNumber: getFormattedPhoneNumber(),
            reseau: network,
            callback_info: paymentConfig.callback_info,
            description: paymentConfig.description,
            transaction_id: status.reference,
            message: "Le paiement a echoué. Veuillez vérifier le numéro et réessayer.",
            amount: paymentConfig.amount,
            currency: paymentConfig.currency
          });
        }
        if (paymentConfig.error_callback_url) {
          window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
        }
        return;
      }
      const paymentStatus = status.status.toUpperCase();
      switch (paymentStatus) {
        case "SUCCESSFUL":
        case "SUCCESS":
          clearInterval(intervalId);
          setPaymentStatus("SUCCESSFUL");
          setStatusMessage("Paiement réussi !");
          setStatusModalOpen(true);
          setIsLoading(false);
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: status.reference,
              status: paymentStatus,
              phoneNumber: getFormattedPhoneNumber(),
              reseau: network,
              callback_info: paymentConfig.callback_info,
              description: paymentConfig.description,
              transaction_id: status.reference,
              message: "La transaction a été effectuée avec succès.",
              amount: paymentConfig.amount,
              currency: paymentConfig.currency
            });
          }
          if (paymentConfig.callbackUrl) {
            window.location.href = `${paymentConfig.callbackUrl}?ref=${ref}`;
          }
          break;
        case "FAILED":
          clearInterval(intervalId);
          setPaymentStatus("FAILED");
          setStatusMessage("Le paiement a échoué. Veuillez réessayer ou utiliser une autre méthode de paiement.");
          setStatusModalOpen(true);
          setIsLoading(false);
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: status.reference,
              status: paymentStatus,
              phoneNumber: getFormattedPhoneNumber(),
              reseau: network,
              callback_info: paymentConfig.callback_info,
              description: paymentConfig.description,
              transaction_id: status.reference,
              message: "Le paiement a échoué. Veuillez réessayer ou utiliser une autre méthode de paiement.",
              amount: paymentConfig.amount,
              currency: paymentConfig.currency
            });
          }
          if (paymentConfig.error_callback_url) {
            window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
          }
          break;
        case "INSUFFICIENT_FUNDS":
          clearInterval(intervalId);
          setPaymentStatus("INSUFFICIENT_FUNDS");
          setStatusMessage("Fonds insuffisants. Veuillez vérifier votre solde et réessayer.");
          setStatusModalOpen(true);
          setIsLoading(false);
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: status.reference,
              status: paymentStatus,
              phoneNumber: getFormattedPhoneNumber(),
              reseau: network,
              callback_info: paymentConfig.callback_info,
              description: paymentConfig.description,
              transaction_id: status.reference,
              message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
              amount: paymentConfig.amount,
              currency: paymentConfig.currency
            });
          }
          if (paymentConfig.error_callback_url) {
            window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
          }
          break;
        case "TIMEOUT":
          clearInterval(intervalId);
          setPaymentStatus("TIMEOUT");
          setStatusMessage("La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.");
          setStatusModalOpen(true);
          setIsLoading(false);
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: status.reference,
              status: paymentStatus,
              phoneNumber: getFormattedPhoneNumber(),
              reseau: network,
              callback_info: paymentConfig.callback_info,
              description: paymentConfig.description,
              transaction_id: status.reference,
              message: "La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.",
              amount: paymentConfig.amount,
              currency: paymentConfig.currency
            });
          }
          if (paymentConfig.error_callback_url) {
            window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
          }
          break;
        case "PENDING":
          if (checkCount >= maxChecks) {
            clearInterval(intervalId);
            setPaymentStatus("TIMEOUT");
            setStatusMessage("La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.");
            setStatusModalOpen(true);
            setIsLoading(false);
            if (paymentConfig.callback) {
              paymentConfig.callback({
                reference: status.reference,
                status: "TIMEOUT",
                phoneNumber: getFormattedPhoneNumber(),
                reseau: network,
                callback_info: paymentConfig.callback_info,
                description: paymentConfig.description,
                transaction_id: status.reference,
                message: "La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.",
                amount: paymentConfig.amount,
                currency: paymentConfig.currency
              });
            }
            if (paymentConfig.error_callback_url) {
              window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
            }
          }
          break;
        default:
          if (checkCount >= maxChecks) {
            clearInterval(intervalId);
            setPaymentStatus("TIMEOUT");
            setStatusMessage("Le statut de la transaction est inconnu après plusieurs tentatives.");
            setStatusModalOpen(true);
            setIsLoading(false);
            if (paymentConfig.callback) {
              paymentConfig.callback({
                reference: ref,
                status: "TIMEOUT",
                phoneNumber: getFormattedPhoneNumber(),
                reseau: network,
                callback_info: paymentConfig.callback_info,
                description: paymentConfig.description,
                transaction_id: ref,
                message: "Le statut de la transaction est inconnu après plusieurs tentatives.",
                amount: paymentConfig.amount,
                currency: paymentConfig.currency
              });
            }
            if (paymentConfig.error_callback_url) {
              window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
            }
          }
          break;
      }
    } catch (error) {
      console.error(`Status check failed for ref ${ref}:`, error);
      if (checkCount >= maxChecks) {
        clearInterval(intervalId);
        setPaymentStatus("TIMEOUT");
        setStatusMessage("La vérification du paiement a échoué après plusieurs tentatives.");
        setStatusModalOpen(true);
        setIsLoading(false);
        if (paymentConfig.callback) {
          paymentConfig.callback({
            reference: ref,
            status: "TIMEOUT",
            phoneNumber: getFormattedPhoneNumber(),
            reseau: network,
            callback_info: paymentConfig.callback_info,
            description: paymentConfig.description,
            transaction_id: ref,
            message: "La vérification du paiement a échoué après plusieurs tentatives.",
            amount: paymentConfig.amount,
            currency: paymentConfig.currency
          });
        }
        if (paymentConfig.error_callback_url) {
          window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
        }
      }
    }
  }), 2e4);
  return () => {
    clearInterval(intervalId);
  };
};
const getShop = (shop) => __async(void 0, null, function* () {
  const apiUrl = `https://api.feexpay.me/api/shop/${shop}/get_shop`;
  const response = yield fetch(apiUrl);
  if (!response.ok) throw new Error("Shop retrieval failed");
  return yield response.json();
});
const HeaderBar = ({ shop, onClose }) => {
  const [shopData, setShopData] = useState(null);
  useEffect(() => {
    const fetchShop = () => __async(void 0, null, function* () {
      try {
        const data = yield getShop(shop);
        setShopData(data);
      } catch (err) {
        console.error("Erreur de récupération du shop :", err);
      }
    });
    fetchShop();
  }, [shop]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b border-gray-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../public/logo.png", width: "100", alt: "Logo" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-xs text-gray-700 ", children: shopData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold", children: [
        "MARCHAND: ",
        shopData.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500", children: [
        "ID : ",
        shopData.reference
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onClose,
        className: "text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
      }
    )
  ] });
};
const PaymentModal = ({ isOpen, onClose }) => {
  var _a;
  const { paymentConfig } = useFeexPay();
  const [paymentMethod, setPaymentMethod] = useState(() => {
    if (paymentConfig.case && ["MOBILE", "CARD", "WALLET"].includes(paymentConfig.case)) {
      return paymentConfig.case;
    }
    return "MOBILE";
  });
  const [country, setCountry] = useState("BENIN");
  const [network, setNetwork] = useState("MTN");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [typeCard, setTypeCard] = useState("VISA");
  const [baseAmount, setBaseAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [fees, setFees] = useState(0);
  const [feePercentage, setFeePercentage] = useState(0);
  const [transactionReference, setTransactionReference] = useState("");
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("PENDING");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [pendingReference, setPendingReference] = useState("");
  const [iframeUrl, setIframeUrl] = useState(null);
  const calculateFeesLocally = useCallback((amount, country2, network2, paymentMethodOverride) => {
    const currentPaymentMethod = paymentMethodOverride || paymentMethod;
    const calculatedFees = calculateFees(amount, country2, network2, currentPaymentMethod, typeCard);
    setFees(calculatedFees);
    setTotal(amount + calculatedFees);
    setBaseAmount(amount);
    if (paymentMethod === "CARD" && (typeCard === "VISA" || typeCard === "MASTERCARD")) {
      setFeePercentage(4.5);
    } else {
      const countryFees = NETWORK_FEES[country2];
      if (countryFees && countryFees[network2]) {
        setFeePercentage(countryFees[network2] * 100);
      } else {
        setFeePercentage(0);
      }
    }
  }, [paymentMethod, typeCard]);
  const fetchTransactionDetails = useCallback((amount, country2, network2, paymentMethodOverride) => __async(void 0, null, function* () {
    try {
      const currentPaymentMethod = paymentMethodOverride || paymentMethod;
      const details = yield getTransactionDetails({
        network: network2,
        country: country2,
        amount,
        shop: paymentConfig.shop,
        apiToken: paymentConfig.apiToken,
        currency: paymentConfig.currency
      });
      if (details && details.iffees) {
        if (details.total !== void 0) {
          const calculatedFees = details.total - amount;
          setFees(calculatedFees);
          setTotal(details.total);
          if (currentPaymentMethod === "CARD") {
            setFeePercentage(4.5);
          } else {
            const countryFees = NETWORK_FEES[country2];
            if (countryFees && countryFees[network2]) {
              setFeePercentage(countryFees[network2] * 100);
            } else {
              setFeePercentage(0);
            }
          }
        } else {
          calculateFeesLocally(amount, country2, network2, currentPaymentMethod);
        }
      } else {
        if (amount <= 30) {
          const countryFees = NETWORK_FEES[country2];
          if (countryFees && countryFees[network2] && countryFees[network2] > 0) {
            setFees(1);
            setTotal(amount + 1);
            setFeePercentage(countryFees[network2] * 100);
          } else {
            setFees(0);
            setTotal(amount);
            setFeePercentage(0);
          }
        } else {
          setFees(0);
          setTotal(amount);
          setFeePercentage(0);
        }
      }
      setBaseAmount(amount);
    } catch (error) {
      console.error("Erreur lors de la récupération des détails de transaction:", error);
      calculateFeesLocally(amount, country2, network2, paymentMethodOverride);
    }
  }), [paymentMethod, paymentConfig.shop, paymentConfig.apiToken, calculateFeesLocally]);
  useEffect(() => {
    if (paymentConfig.amount) {
      setBaseAmount(paymentConfig.amount);
      fetchTransactionDetails(paymentConfig.amount, country, network);
    }
  }, [paymentConfig, country, network, fetchTransactionDetails]);
  useEffect(() => {
    if (paymentMethod === "WALLET") {
      if (country === "BENIN") {
        setNetwork("CORIS");
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, "CORIS", paymentMethod);
        }
      } else if (country === "COTE_D_IVOIRE") {
        setNetwork("WAVE");
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, "WAVE", paymentMethod);
        }
      } else {
        setCountry("BENIN");
        setNetwork("CORIS");
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, "BENIN", "CORIS", paymentMethod);
        }
      }
    }
  }, []);
  const handleNetworkChange = (newNetwork) => {
    setNetwork(newNetwork);
    if (paymentConfig.amount) {
      fetchTransactionDetails(paymentConfig.amount, country, newNetwork);
    }
  };
  const resetAllFields = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setTypeCard("VISA");
  };
  const handlePaymentMethodChange = (method) => {
    resetAllFields();
    setFees(0);
    setTotal(paymentConfig.amount || 0);
    setFeePercentage(0);
    setPaymentMethod(method);
    if (method === "WALLET") {
      if (country === "BENIN") {
        setNetwork("CORIS");
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, "CORIS", method);
        }
      } else if (country === "COTE_D_IVOIRE") {
        setNetwork("WAVE");
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, "WAVE", method);
        }
      } else {
        setCountry("BENIN");
        setNetwork("CORIS");
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, "BENIN", "CORIS", method);
        }
      }
    } else if (method === "MOBILE") {
      const availableNetworks = getNetworksForCountry(country);
      if (availableNetworks.length > 0) {
        if (!availableNetworks.includes(network)) {
          setNetwork(availableNetworks[0]);
        }
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, network, method);
        }
      }
    } else if (method === "CARD") {
      if (paymentConfig.amount) {
        fetchTransactionDetails(paymentConfig.amount, country, network, method);
      }
    }
  };
  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
    if (paymentMethod === "WALLET") {
      if (newCountry === "BENIN") {
        setNetwork("CORIS");
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, newCountry, "CORIS");
        }
      } else if (newCountry === "COTE_D_IVOIRE") {
        setNetwork("WAVE");
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, newCountry, "WAVE");
        }
      }
    } else {
      const availableNetworks = getNetworksForCountry(newCountry);
      setNetwork(availableNetworks[0]);
      if (paymentConfig.amount) {
        fetchTransactionDetails(paymentConfig.amount, newCountry, availableNetworks[0]);
      }
    }
  };
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (country === "BENIN" && paymentMethod !== "WALLET") {
      if (value.length >= 4) {
        const prefix = value.substring(0, 4);
        const detectedNetwork = getNetworkByPhonePrefix(prefix);
        if (detectedNetwork) {
          setNetwork(detectedNetwork);
        }
      }
    }
    setPhoneNumber(value);
  };
  const getFormattedPhoneNumber = () => {
    if (!phoneNumber) return phoneNumber;
    let cleaned = phoneNumber.replace(/[^0-9]/g, "");
    let prefix = "";
    switch (country) {
      case "BENIN":
        prefix = "229";
        break;
      case "COTE_D_IVOIRE":
        prefix = "225";
        break;
      case "BURKINA_FASO":
        prefix = "226";
        break;
      case "CONGO_BRAZZAVILLE":
        prefix = "242";
        break;
      case "SENEGAL":
        prefix = "221";
        break;
      case "TOGO":
        prefix = "228";
        break;
      default:
        return cleaned;
    }
    if (cleaned.startsWith(prefix + prefix)) {
      cleaned = cleaned.slice(prefix.length);
    }
    if (cleaned.startsWith(prefix)) {
      return cleaned;
    }
    return prefix + cleaned;
  };
  const getPrefixFromCountry = (country2) => {
    switch (country2) {
      case "BENIN":
        return "+229";
      case "COTE_D_IVOIRE":
        return "+225";
      case "BURKINA_FASO":
        return "+226";
      case "CONGO_BRAZZAVILLE":
        return "+242";
      case "SENEGAL":
        return "+221";
      case "TOGO":
        return "+228";
      default:
        return "";
    }
  };
  const handlePaymentSubmit$1 = (e) => __async(void 0, null, function* () {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    const iframeNetworks = ["MOOV CI", "ORANGE CI", "MOOV BF", "ORANGE BF", "FREE SN", "WAVE CI"];
    const networkApiCode = getNetworkApiCode(country, network);
    if (iframeNetworks.includes(networkApiCode)) {
      try {
        const response = yield requestToPay({
          phoneNumber: getFormattedPhoneNumber(),
          amount: baseAmount,
          network,
          country,
          description: paymentConfig.description || "Payment",
          customId: generateRandomId(),
          shop: paymentConfig.shop,
          apiToken: paymentConfig.apiToken,
          currency: paymentConfig.currency
        });
        if (response.payment_url) {
          setIframeUrl(response.payment_url);
        }
        if (response.reference) {
          setTransactionReference(response.reference);
          handleStatusCheck(response.reference);
        } else if (!response.payment_url) {
          throw new Error("La réponse de paiement est invalide.");
        }
      } catch (error) {
        console.error("Payment error:", error);
        setPaymentStatus("FAILED");
        setStatusMessage("Le paiement a échoué. Veuillez réessayer.");
        setStatusModalOpen(true);
      } finally {
        setIsLoading(false);
      }
      return;
    }
    try {
      if (paymentMethod === "CARD") {
        const nameParts = fullName.split(" ");
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";
        const response = yield requestCardPayment({
          phone: phoneNumber,
          amount: baseAmount,
          shop: paymentConfig.shop,
          first_name: firstName,
          last_name: lastName,
          email,
          type_card: typeCard,
          apiToken: paymentConfig.apiToken,
          currency: paymentConfig.currency
        });
        if (response && response.reference) {
          setTransactionReference(response.reference);
          handleStatusCheck(response.reference);
        } else {
          setPaymentStatus("FAILED");
          setStatusMessage("La demande de paiement par carte a échoué. Veuillez réessayer.");
          setStatusModalOpen(true);
          setIsLoading(false);
        }
      } else if (paymentMethod === "MOBILE") {
        const handlerProps = {
          phoneNumber,
          baseAmount,
          network,
          country,
          paymentConfig,
          transactionReference,
          generateRandomId,
          setStateCallbacks: {
            setTransactionReference,
            setPaymentStatus,
            setStatusMessage,
            setStatusModalOpen,
            setIsLoading
          }
        };
        const response = yield handlePaymentSubmit(e, handlerProps, validateForm, getFormattedPhoneNumber);
        if (response && response.reference) {
          handleStatusCheck(response.reference);
        }
      } else if (paymentMethod === "WALLET") {
        if (country === "BENIN" && network === "CORIS") {
          try {
            const nameParts = fullName.split(" ");
            const firstName = nameParts[0] || "";
            const formattedPhone = phoneNumber.startsWith("+229") ? phoneNumber : `+229${phoneNumber}`;
            const response = yield requestWalletCorisPayment({
              phoneNumber: formattedPhone,
              amount: baseAmount,
              shop: paymentConfig.shop,
              email,
              first_name: firstName,
              description: "Paiement via FeexPay",
              apiToken: paymentConfig.apiToken,
              currency: paymentConfig.currency
            });
            if (response.statusCode === "201") {
              setPendingReference(response.reference);
              setOtpModalOpen(true);
              setIsLoading(false);
            } else {
              setPaymentStatus("FAILED");
              setStatusMessage("La demande de paiement a échoué. Veuillez réessayer.");
              setStatusModalOpen(true);
              setIsLoading(false);
            }
          } catch (error) {
            console.error("Error in Coris Wallet payment:", error);
            setPaymentStatus("FAILED");
            setStatusMessage("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.");
            setStatusModalOpen(true);
            setIsLoading(false);
          }
        } else {
          const handlerProps = {
            phoneNumber,
            baseAmount,
            network,
            country,
            paymentConfig,
            transactionReference,
            generateRandomId,
            setStateCallbacks: {
              setTransactionReference,
              setPaymentStatus,
              setStatusMessage,
              setStatusModalOpen,
              setIsLoading
            }
          };
          const response = yield handlePaymentSubmit(e, handlerProps, validateForm, getFormattedPhoneNumber);
          if (response && response.reference) {
            handleStatusCheck(response.reference);
          }
        }
      }
    } catch (error) {
      console.error("Error in payment submission:", error);
      setPaymentStatus("FAILED");
      setStatusMessage("Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.");
      setStatusModalOpen(true);
      setIsLoading(false);
    }
  });
  const validateForm = () => {
    const fieldsToHide = paymentConfig.fields_to_hide || [];
    if (paymentMethod === "MOBILE" || paymentMethod === "WALLET") {
      if (!fieldsToHide.includes("name") && !fullName.trim()) {
        setStatusMessage("Veuillez entrer votre nom complet");
        setStatusModalOpen(true);
        return false;
      }
      if (!fieldsToHide.includes("email") && (!email.trim() || !email.includes("@"))) {
        setStatusMessage("Veuillez entrer une adresse email valide");
        setStatusModalOpen(true);
        return false;
      }
      if (!phoneNumber.trim() || phoneNumber.length < 8) {
        setStatusMessage("Veuillez entrer un numéro de téléphone valide");
        setStatusModalOpen(true);
        return false;
      }
      if (paymentMethod === "WALLET" && country !== "BENIN" && country !== "COTE_D_IVOIRE") {
        setStatusMessage("Seuls le Bénin (Coris) et la Côte d'Ivoire (Wave) sont supportés pour les paiements Wallet");
        setStatusModalOpen(true);
        return false;
      }
    } else if (paymentMethod === "CARD") {
      if (!fullName || fullName.trim().split(" ").length < 2) {
        setStatusMessage("Veuillez entrer votre nom et prénom complets");
        setPaymentStatus("FAILED");
        setStatusModalOpen(true);
        return false;
      }
      if (!email || !email.includes("@")) {
        setStatusMessage("Veuillez entrer une adresse email valide");
        setPaymentStatus("FAILED");
        setStatusModalOpen(true);
        return false;
      }
      if (!phoneNumber) {
        setStatusMessage("Veuillez entrer un numéro de téléphone valide");
        setPaymentStatus("FAILED");
        setStatusModalOpen(true);
        return false;
      }
    }
    return true;
  };
  const generateRandomId = () => {
    return `TRX-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  };
  const handleOTPSubmit = (otp) => __async(void 0, null, function* () {
    setIsLoading(true);
    try {
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0] || "";
      const formattedPhone = phoneNumber.startsWith("+229") ? phoneNumber : `+229${phoneNumber}`;
      const response = yield requestWalletCorisPayment({
        phoneNumber: formattedPhone,
        amount: baseAmount,
        shop: paymentConfig.shop,
        email,
        first_name: firstName,
        description: "Paiement via FeexPay",
        reference: pendingReference,
        otp,
        apiToken: paymentConfig.apiToken,
        currency: paymentConfig.currency
      });
      setOtpModalOpen(false);
      if (response.reference) {
        if (response.status === "SUCCESSFUL" || response.status === "SUCCESS") {
          setPaymentStatus("SUCCESSFUL");
          setStatusMessage("Paiement effectué avec succès!");
          setStatusModalOpen(true);
          setIsLoading(false);
          if (paymentConfig.callbackUrl) {
            setTimeout(() => {
              window.location.href = `${paymentConfig.callbackUrl}?ref=${response.reference}`;
            }, 2e3);
          }
        } else if (response.status === "PENDING") {
          setTransactionReference(response.reference);
          handleStatusCheck(response.reference);
        } else {
          setPaymentStatus("FAILED");
          setStatusMessage(response.message || "La transaction a échoué. Veuillez réessayer.");
          setStatusModalOpen(true);
          setIsLoading(false);
          if (paymentConfig.error_callback_url) {
            setTimeout(() => {
              window.location.href = `${paymentConfig.error_callback_url}?ref=${response.reference}`;
            }, 2e3);
          }
        }
      } else {
        setPaymentStatus("FAILED");
        setStatusMessage(response.message || "La confirmation du paiement a échoué. Veuillez réessayer.");
        setStatusModalOpen(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error in OTP submission:", error);
      setPaymentStatus("FAILED");
      setStatusMessage("Une erreur est survenue lors de la confirmation du paiement. Veuillez réessayer.");
      setStatusModalOpen(true);
      setIsLoading(false);
      setOtpModalOpen(false);
    }
  });
  const handleStatusCheck = (ref) => {
    const handlerProps = {
      paymentConfig,
      setStateCallbacks: {
        setTransactionReference,
        setPaymentStatus,
        setStatusMessage,
        setStatusModalOpen,
        setIsLoading
      }
    };
    startStatusCheck(ref, handlerProps, network, getFormattedPhoneNumber);
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] flex flex-col", children: [
      iframeUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-white z-10 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIframeUrl(null),
            className: "absolute top-2 right-2 z-20 bg-gray-200 text-gray-800 rounded-full p-1 hover:bg-gray-300 focus:outline-none",
            "aria-label": "Fermer la passerelle de paiement",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            src: iframeUrl,
            className: "w-full h-full border-0",
            title: "Payment Gateway",
            allow: "payment"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderBar, { shop: paymentConfig.shop, onClose }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 overflow-y-auto flex-grow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 text-center mb-4", children: "Remplissez les champs suivants pour effectuer votre paiement" }),
        !paymentConfig.case && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6 border-b pb-4 w-fit gap-2", children: [
          { label: "Mobile Money", value: "MOBILE", icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#D45D00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "18", x2: "12", y2: "18" })
          ] }) },
          { label: "Carte Bancaire", value: "CARD", icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z", clipRule: "evenodd" })
          ] }) },
          { label: "Wallet", value: "WALLET", icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z", clipRule: "evenodd" }) }) }
        ].map(({ label, value, icon }) => {
          const isSelected = paymentMethod === value;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex flex-col items-center px-4 py-2 cursor-pointer rounded border ${isSelected ? "bg-[#fff7ed] border-[#D45D00]" : "bg-white border-[#D45D00]"}`,
              onClick: () => handlePaymentMethodChange(value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center mb-1", children: icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: label })
              ]
            },
            value
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          !((paymentConfig.fields_to_hide || []).includes("email") && (paymentConfig.fields_to_hide || []).includes("name")) && paymentMethod !== "CARD" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: "1" }),
              "Informations Personnelles"
            ] }),
            !(paymentConfig.fields_to_hide || []).includes("name") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Nom et Prénoms",
                className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                value: fullName,
                onChange: (e) => setFullName(e.target.value)
              }
            ) }),
            !(paymentConfig.fields_to_hide || []).includes("email") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                placeholder: "Email",
                className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                value: email,
                onChange: (e) => setEmail(e.target.value)
              }
            ) })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: paymentMethod === "CARD" || (paymentConfig.fields_to_hide || []).includes("email") && (paymentConfig.fields_to_hide || []).includes("name") ? "1" : "2" }),
              paymentMethod === "CARD" ? "Paiement par Carte Bancaire" : "Méthodes de paiement"
            ] }),
            paymentMethod === "MOBILE" && paymentConfig.currency !== "CAD" && paymentConfig.currency !== "USD" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CountrySelector,
                  {
                    selectedCountry: country,
                    onChange: handleCountryChange
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NetworkSelector,
                  {
                    selectedNetwork: network,
                    onChange: handleNetworkChange,
                    country
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 text-xs", children: getPrefixFromCountry(country) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: phoneNumber,
                    onChange: handlePhoneNumberChange
                  }
                )
              ] })
            ] }),
            paymentMethod === "CARD" && (paymentConfig.currency === "CAD" || paymentConfig.currency === "USD") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-md", children: "Les paiements par cartes sont momentanément indisponibles." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Prénom" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Prénom",
                      className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      value: fullName.split(" ")[0] || "",
                      onChange: (e) => {
                        const lastName = fullName.split(" ").slice(1).join(" ");
                        setFullName(`${e.target.value} ${lastName}`.trim());
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Nom" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Nom",
                      className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      value: fullName.split(" ").slice(1).join(" ") || "",
                      onChange: (e) => {
                        const firstName = fullName.split(" ")[0] || "";
                        setFullName(`${firstName} ${e.target.value}`.trim());
                      }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "exemple@email.com",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: email,
                    onChange: (e) => setEmail(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Téléphone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone avec indicatif",
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: phoneNumber,
                    onChange: (e) => setPhoneNumber(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Type de carte" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: typeCard,
                    onChange: (e) => setTypeCard(e.target.value),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VISA", children: "VISA" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MASTERCARD", children: "MASTERCARD" })
                    ]
                  }
                )
              ] })
            ] }),
            paymentMethod === "WALLET" && paymentConfig.currency !== "CAD" && paymentConfig.currency !== "USD" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Pays" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: country,
                      onChange: (e) => handleCountryChange(e.target.value),
                      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "BENIN", children: "Bénin" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COTE_D_IVOIRE", children: "Côte d'Ivoire" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Réseau" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: network,
                      onChange: (e) => handleNetworkChange(e.target.value),
                      className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                      disabled: true,
                      children: [
                        country === "BENIN" && /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CORIS", children: "Coris" }),
                        country === "COTE_D_IVOIRE" && /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "WAVE", children: "Wave" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 text-sm", children: country === "BENIN" ? "+229" : country === "COTE_D_IVOIRE" ? "+225" : "" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Numéro de téléphone sans indicatif",
                    className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs",
                    value: phoneNumber,
                    onChange: handlePhoneNumberChange
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-4 rounded-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: "Montant :" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                  (_a = paymentConfig.amount) == null ? void 0 : _a.toLocaleString("fr-FR"),
                  " ",
                  paymentConfig.currency
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: "Frais* :" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: fees > 0 ? `${fees.toLocaleString("fr-FR")} ${paymentConfig.currency}` : `0 ${paymentConfig.currency}` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Montant Total à payer :" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  total.toLocaleString("fr-FR"),
                  " ",
                  paymentConfig.currency
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-2", children: fees > 0 ? `*Les frais de transaction sont de ${feePercentage.toFixed(1).replace(".", ",")}% du montant.` : "*Aucun frais de transaction applicable pour cette transaction." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onClose(),
                  className: "w-1/3 bg-gray-200 hover:bg-gray-300 text-primary-blue font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center",
                  children: "Retour"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: handlePaymentSubmit$1,
                  disabled: isLoading,
                  className: `w-2/3 bg-primary-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`,
                  children: [
                    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                    ] }) : null,
                    "Payer ",
                    total.toLocaleString("fr-FR"),
                    " ",
                    paymentConfig.currency
                  ]
                }
              )
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center text-xs text-gray-500 flex-shrink-0 bg-gray-50 w-full p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Paiements sécurisés par FeexPay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2", children: [
            "En payant par ce plugin, vous acceptez les ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-blue-900", style: { textDecoration: "underline" }, target: "_blank", href: "https://feexpay.me/fr/terms-and-conditions", children: "conditions générales d'utilisation de FeexPay" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatusModal,
      {
        isOpen: statusModalOpen,
        onClose: () => setStatusModalOpen(false),
        status: paymentStatus,
        message: statusMessage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      OTPModal,
      {
        isOpen: otpModalOpen,
        onClose: () => {
          setOtpModalOpen(false);
          setIsLoading(false);
        },
        onSubmit: handleOTPSubmit,
        reference: pendingReference
      }
    )
  ] });
};
const Feexpay = ({
  amount,
  description,
  shop,
  apiToken,
  callbackUrl,
  mode = "LIVE",
  customId,
  fields_to_hide,
  callback,
  currency = "XOF",
  case: caseType,
  callback_info,
  error_callback_url,
  custom_button = false,
  buttonText = `Payer ${amount} ${currency}`,
  buttonClass
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setPaymentConfig } = useFeexPay();
  const containerRef = useRef(null);
  const [shopLoaded, setShopLoaded] = useState(false);
  const [shopError, setShopError] = useState(null);
  useEffect(() => {
    const loadShop = () => __async(void 0, null, function* () {
      try {
        yield getShop$1(shop);
        setShopLoaded(true);
      } catch (e) {
        setShopError("Veuillez vérifier vos identifiants de boutique (ID et token) et rester en mode LIVE.");
      }
    });
    loadShop();
  }, [shop]);
  const handlePaymentClick = useCallback(() => {
    setPaymentConfig({
      amount,
      description,
      shop,
      apiToken,
      callbackUrl,
      mode,
      customId: customId || generateRandomId(),
      fields_to_hide,
      callback,
      currency,
      case: caseType,
      callback_info,
      error_callback_url
    });
    setIsModalOpen(true);
  }, [
    amount,
    description,
    shop,
    apiToken,
    callbackUrl,
    mode,
    customId,
    fields_to_hide,
    callback,
    currency,
    caseType,
    callback_info,
    error_callback_url,
    setPaymentConfig
  ]);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleTrigger = () => {
      handlePaymentClick();
    };
    container.addEventListener("feexpay:trigger", handleTrigger);
    return () => {
      container.removeEventListener("feexpay:trigger", handleTrigger);
    };
  }, [handlePaymentClick]);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, children: [
    shopError ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 text-sm mb-2", children: shopError }) : shopLoaded && !custom_button && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handlePaymentClick,
        className: buttonClass || "w-full bg-primary-orange hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center",
        children: buttonText
      }
    ),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaymentModal,
      {
        isOpen: isModalOpen,
        onClose: handleCloseModal
      }
    )
  ] });
};
export {
  Feexpay as FeexPayButton,
  FeexPayProvider
};
//# sourceMappingURL=index.js.map
