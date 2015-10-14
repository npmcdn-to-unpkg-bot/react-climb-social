/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _componentsWallContainer = __webpack_require__(2);
	
	var _componentsWallContainer2 = _interopRequireDefault(_componentsWallContainer);
	
	__webpack_require__(29);
	
	if (window) {
	    window.Climb = window.Climb || {};
	
	    var $targets = document.querySelectorAll('.climb-wall');
	
	    for (var i = 0; i < $targets.length; ++i) {
	        var $item = $targets[i];
	        var collectionId = $item.dataset.collectionId;
	        var limit = $item.dataset.limit;
	
	        _react2['default'].render(_react2['default'].createElement(_componentsWallContainer2['default'], { collectionId: collectionId, limit: limit }), $item);
	    }
	}
	
	exports.WallContainer = _componentsWallContainer2['default'];
	
	var _componentsWall = __webpack_require__(8);
	
	Object.defineProperty(exports, 'Wall', {
	    enumerable: true,
	    get: function get() {
	        return _componentsWall.Wall;
	    }
	});
	
	var _componentsTile = __webpack_require__(9);
	
	Object.defineProperty(exports, 'Tile', {
	    enumerable: true,
	    get: function get() {
	        return _componentsTile.Tile;
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _climbSocial = __webpack_require__(3);
	
	var _climbSocial2 = _interopRequireDefault(_climbSocial);
	
	var _Wall = __webpack_require__(8);
	
	var _Wall2 = _interopRequireDefault(_Wall);
	
	var WallContainer = (function (_Component) {
	    _inherits(WallContainer, _Component);
	
	    function WallContainer(props) {
	        _classCallCheck(this, WallContainer);
	
	        _get(Object.getPrototypeOf(WallContainer.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            items: {}
	        };
	    }
	
	    _createClass(WallContainer, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;
	
	            if (!this.props.collectionId) {
	                return;
	            }
	
	            _climbSocial2['default'].getStream(this.props.collectionId).subscribe(function (items) {
	
	                var maxSize = parseInt(_this.props.limit, 0);
	
	                var mappedItems = {};
	                items.splice(0, maxSize).map(function (item) {
	                    mappedItems[item.id] = item;
	                });
	
	                _this.setState({
	                    items: mappedItems
	                });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.init();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var cb = undefined;
	            if (window.Climb && window.Climb.onUpdate) {
	                cb = window.Climb.onUpdate;
	            } else {
	                // noop
	                cb = function () {};
	            }
	            cb();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(_Wall2['default'], { items: this.state.items });
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            collectionId: _react.PropTypes.string.isRequired,
	            limit: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            collectionId: '561ba63445284e1740e016f7',
	            limit: 30
	        },
	        enumerable: true
	    }]);
	
	    return WallContainer;
	})(_react.Component);
	
	exports['default'] = WallContainer;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rxLite = __webpack_require__(4);
	
	var _fetchJsonp = __webpack_require__(7);
	
	var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);
	
	var getStream = function getStream(collectionId) {
	
	    var pollRate = 5 * 1000;
	
	    var requestStream = _rxLite.Observable.just('http://app.climb.social/api/v1/collections/' + collectionId);
	
	    var updateStream = _rxLite.Observable.interval(pollRate).startWith(null);
	
	    var responseStream = updateStream.combineLatest(requestStream, function (tick, url) {
	        return url;
	    }).flatMap(function (baseUrl) {
	
	        var requestUrl = '' + baseUrl;
	
	        return _rxLite.Observable.fromPromise((0, _fetchJsonp2['default'])(requestUrl).then(function (resp) {
	            return resp.json();
	        }));
	    });
	
	    return responseStream;
	};
	
	exports['default'] = {
	    getStream: getStream
	};
	module.exports = exports['default'];


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global, process) {// Copyright (c) Microsoft, All rights reserved. See License.txt in the project root for license information.
	
	;(function (undefined) {
	
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };
	
	  function checkGlobal(value) {
	    return (value && value.Object === Object) ? value : null;
	  }
	
	  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;
	  var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;
	  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global === 'object' && global);
	  var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	  var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	  var moduleExports = (freeModule && freeModule.exports === freeExports) ? freeExports : null;
	  var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	  var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
	
	  var Rx = {
	    internals: {},
	    config: {
	      Promise: root.Promise
	    },
	    helpers: { }
	  };
	
	  // Defaults
	  var noop = Rx.helpers.noop = function () { },
	    identity = Rx.helpers.identity = function (x) { return x; },
	    defaultNow = Rx.helpers.defaultNow = Date.now,
	    defaultComparer = Rx.helpers.defaultComparer = function (x, y) { return isEqual(x, y); },
	    defaultSubComparer = Rx.helpers.defaultSubComparer = function (x, y) { return x > y ? 1 : (x < y ? -1 : 0); },
	    defaultKeySerializer = Rx.helpers.defaultKeySerializer = function (x) { return x.toString(); },
	    defaultError = Rx.helpers.defaultError = function (err) { throw err; },
	    isPromise = Rx.helpers.isPromise = function (p) { return !!p && typeof p.subscribe !== 'function' && typeof p.then === 'function'; },
	    isFunction = Rx.helpers.isFunction = (function () {
	
	      var isFn = function (value) {
	        return typeof value == 'function' || false;
	      }
	
	      // fallback for older versions of Chrome and Safari
	      if (isFn(/x/)) {
	        isFn = function(value) {
	          return typeof value == 'function' && toString.call(value) == '[object Function]';
	        };
	      }
	
	      return isFn;
	    }());
	
	    function cloneArray(arr) {
	      var len = arr.length, a = new Array(len);
	      for(var i = 0; i < len; i++) { a[i] = arr[i]; }
	      return a;
	    }
	
	  var errorObj = {e: {}};
	  
	  function tryCatcherGen(tryCatchTarget) {
	    return function tryCatcher() {
	      try {
	        return tryCatchTarget.apply(this, arguments);
	      } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	      }
	    };
	  }
	
	  var tryCatch = Rx.internals.tryCatch = function tryCatch(fn) {
	    if (!isFunction(fn)) { throw new TypeError('fn must be a function'); }
	    return tryCatcherGen(fn);
	  };
	
	  function thrower(e) {
	    throw e;
	  }
	
	  Rx.config.longStackSupport = false;
	  var hasStacks = false, stacks = tryCatch(function () { throw new Error(); })();
	  hasStacks = !!stacks.e && !!stacks.e.stack;
	
	  // All code after this point will be filtered from stack traces reported by RxJS
	  var rStartingLine = captureLine(), rFileName;
	
	  var STACK_JUMP_SEPARATOR = 'From previous event:';
	
	  function makeStackTraceLong(error, observable) {
	    // If possible, transform the error stack trace by removing Node and RxJS
	    // cruft, then concatenating with the stack trace of `observable`.
	    if (hasStacks &&
	        observable.stack &&
	        typeof error === 'object' &&
	        error !== null &&
	        error.stack &&
	        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
	    ) {
	      var stacks = [];
	      for (var o = observable; !!o; o = o.source) {
	        if (o.stack) {
	          stacks.unshift(o.stack);
	        }
	      }
	      stacks.unshift(error.stack);
	
	      var concatedStacks = stacks.join('\n' + STACK_JUMP_SEPARATOR + '\n');
	      error.stack = filterStackString(concatedStacks);
	    }
	  }
	
	  function filterStackString(stackString) {
	    var lines = stackString.split('\n'), desiredLines = [];
	    for (var i = 0, len = lines.length; i < len; i++) {
	      var line = lines[i];
	
	      if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
	        desiredLines.push(line);
	      }
	    }
	    return desiredLines.join('\n');
	  }
	
	  function isInternalFrame(stackLine) {
	    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);
	    if (!fileNameAndLineNumber) {
	      return false;
	    }
	    var fileName = fileNameAndLineNumber[0], lineNumber = fileNameAndLineNumber[1];
	
	    return fileName === rFileName &&
	      lineNumber >= rStartingLine &&
	      lineNumber <= rEndingLine;
	  }
	
	  function isNodeFrame(stackLine) {
	    return stackLine.indexOf('(module.js:') !== -1 ||
	      stackLine.indexOf('(node.js:') !== -1;
	  }
	
	  function captureLine() {
	    if (!hasStacks) { return; }
	
	    try {
	      throw new Error();
	    } catch (e) {
	      var lines = e.stack.split('\n');
	      var firstLine = lines[0].indexOf('@') > 0 ? lines[1] : lines[2];
	      var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
	      if (!fileNameAndLineNumber) { return; }
	
	      rFileName = fileNameAndLineNumber[0];
	      return fileNameAndLineNumber[1];
	    }
	  }
	
	  function getFileNameAndLineNumber(stackLine) {
	    // Named functions: 'at functionName (filename:lineNumber:columnNumber)'
	    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
	    if (attempt1) { return [attempt1[1], Number(attempt1[2])]; }
	
	    // Anonymous functions: 'at filename:lineNumber:columnNumber'
	    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
	    if (attempt2) { return [attempt2[1], Number(attempt2[2])]; }
	
	    // Firefox style: 'function@filename:lineNumber or @filename:lineNumber'
	    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
	    if (attempt3) { return [attempt3[1], Number(attempt3[2])]; }
	  }
	
	  var EmptyError = Rx.EmptyError = function() {
	    this.message = 'Sequence contains no elements.';
	    Error.call(this);
	  };
	  EmptyError.prototype = Object.create(Error.prototype);
	  EmptyError.prototype.name = 'EmptyError';
	
	  var ObjectDisposedError = Rx.ObjectDisposedError = function() {
	    this.message = 'Object has been disposed';
	    Error.call(this);
	  };
	  ObjectDisposedError.prototype = Object.create(Error.prototype);
	  ObjectDisposedError.prototype.name = 'ObjectDisposedError';
	
	  var ArgumentOutOfRangeError = Rx.ArgumentOutOfRangeError = function () {
	    this.message = 'Argument out of range';
	    Error.call(this);
	  };
	  ArgumentOutOfRangeError.prototype = Object.create(Error.prototype);
	  ArgumentOutOfRangeError.prototype.name = 'ArgumentOutOfRangeError';
	
	  var NotSupportedError = Rx.NotSupportedError = function (message) {
	    this.message = message || 'This operation is not supported';
	    Error.call(this);
	  };
	  NotSupportedError.prototype = Object.create(Error.prototype);
	  NotSupportedError.prototype.name = 'NotSupportedError';
	
	  var NotImplementedError = Rx.NotImplementedError = function (message) {
	    this.message = message || 'This operation is not implemented';
	    Error.call(this);
	  };
	  NotImplementedError.prototype = Object.create(Error.prototype);
	  NotImplementedError.prototype.name = 'NotImplementedError';
	
	  var notImplemented = Rx.helpers.notImplemented = function () {
	    throw new NotImplementedError();
	  };
	
	  var notSupported = Rx.helpers.notSupported = function () {
	    throw new NotSupportedError();
	  };
	
	  // Shim in iterator support
	  var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) ||
	    '_es6shim_iterator_';
	  // Bug for mozilla version
	  if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
	    $iterator$ = '@@iterator';
	  }
	
	  var doneEnumerator = Rx.doneEnumerator = { done: true, value: undefined };
	
	  var isIterable = Rx.helpers.isIterable = function (o) {
	    return o && o[$iterator$] !== undefined;
	  };
	
	  var isArrayLike = Rx.helpers.isArrayLike = function (o) {
	    return o && o.length !== undefined;
	  };
	
	  Rx.helpers.iterator = $iterator$;
	
	  var bindCallback = Rx.internals.bindCallback = function (func, thisArg, argCount) {
	    if (typeof thisArg === 'undefined') { return func; }
	    switch(argCount) {
	      case 0:
	        return function() {
	          return func.call(thisArg)
	        };
	      case 1:
	        return function(arg) {
	          return func.call(thisArg, arg);
	        }
	      case 2:
	        return function(value, index) {
	          return func.call(thisArg, value, index);
	        };
	      case 3:
	        return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	    }
	
	    return function() {
	      return func.apply(thisArg, arguments);
	    };
	  };
	
	  /** Used to determine if values are of the language type Object */
	  var dontEnums = ['toString',
	    'toLocaleString',
	    'valueOf',
	    'hasOwnProperty',
	    'isPrototypeOf',
	    'propertyIsEnumerable',
	    'constructor'],
	  dontEnumsLength = dontEnums.length;
	
	  /** `Object#toString` result shortcuts */
	  var argsClass = '[object Arguments]',
	    arrayClass = '[object Array]',
	    boolClass = '[object Boolean]',
	    dateClass = '[object Date]',
	    errorClass = '[object Error]',
	    funcClass = '[object Function]',
	    numberClass = '[object Number]',
	    objectClass = '[object Object]',
	    regexpClass = '[object RegExp]',
	    stringClass = '[object String]';
	
	  var toString = Object.prototype.toString,
	    hasOwnProperty = Object.prototype.hasOwnProperty,
	    supportsArgsClass = toString.call(arguments) == argsClass, // For less <IE9 && FF<4
	    supportNodeClass,
	    errorProto = Error.prototype,
	    objectProto = Object.prototype,
	    stringProto = String.prototype,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	  try {
	    supportNodeClass = !(toString.call(document) == objectClass && !({ 'toString': 0 } + ''));
	  } catch (e) {
	    supportNodeClass = true;
	  }
	
	  var nonEnumProps = {};
	  nonEnumProps[arrayClass] = nonEnumProps[dateClass] = nonEnumProps[numberClass] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
	  nonEnumProps[boolClass] = nonEnumProps[stringClass] = { 'constructor': true, 'toString': true, 'valueOf': true };
	  nonEnumProps[errorClass] = nonEnumProps[funcClass] = nonEnumProps[regexpClass] = { 'constructor': true, 'toString': true };
	  nonEnumProps[objectClass] = { 'constructor': true };
	
	  var support = {};
	  (function () {
	    var ctor = function() { this.x = 1; },
	      props = [];
	
	    ctor.prototype = { 'valueOf': 1, 'y': 1 };
	    for (var key in new ctor) { props.push(key); }
	    for (key in arguments) { }
	
	    // Detect if `name` or `message` properties of `Error.prototype` are enumerable by default.
	    support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') || propertyIsEnumerable.call(errorProto, 'name');
	
	    // Detect if `prototype` properties are enumerable by default.
	    support.enumPrototypes = propertyIsEnumerable.call(ctor, 'prototype');
	
	    // Detect if `arguments` object indexes are non-enumerable
	    support.nonEnumArgs = key != 0;
	
	    // Detect if properties shadowing those on `Object.prototype` are non-enumerable.
	    support.nonEnumShadows = !/valueOf/.test(props);
	  }(1));
	
	  var isObject = Rx.internals.isObject = function(value) {
	    var type = typeof value;
	    return value && (type == 'function' || type == 'object') || false;
	  };
	
	  function keysIn(object) {
	    var result = [];
	    if (!isObject(object)) {
	      return result;
	    }
	    if (support.nonEnumArgs && object.length && isArguments(object)) {
	      object = slice.call(object);
	    }
	    var skipProto = support.enumPrototypes && typeof object == 'function',
	        skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error);
	
	    for (var key in object) {
	      if (!(skipProto && key == 'prototype') &&
	          !(skipErrorProps && (key == 'message' || key == 'name'))) {
	        result.push(key);
	      }
	    }
	
	    if (support.nonEnumShadows && object !== objectProto) {
	      var ctor = object.constructor,
	          index = -1,
	          length = dontEnumsLength;
	
	      if (object === (ctor && ctor.prototype)) {
	        var className = object === stringProto ? stringClass : object === errorProto ? errorClass : toString.call(object),
	            nonEnum = nonEnumProps[className];
	      }
	      while (++index < length) {
	        key = dontEnums[index];
	        if (!(nonEnum && nonEnum[key]) && hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	    }
	    return result;
	  }
	
	  function internalFor(object, callback, keysFunc) {
	    var index = -1,
	      props = keysFunc(object),
	      length = props.length;
	
	    while (++index < length) {
	      var key = props[index];
	      if (callback(object[key], key, object) === false) {
	        break;
	      }
	    }
	    return object;
	  }
	
	  function internalForIn(object, callback) {
	    return internalFor(object, callback, keysIn);
	  }
	
	  function isNode(value) {
	    // IE < 9 presents DOM nodes as `Object` objects except they have `toString`
	    // methods that are `typeof` "string" and still can coerce nodes to strings
	    return typeof value.toString != 'function' && typeof (value + '') == 'string';
	  }
	
	  var isArguments = function(value) {
	    return (value && typeof value == 'object') ? toString.call(value) == argsClass : false;
	  }
	
	  // fallback for browsers that can't detect `arguments` objects by [[Class]]
	  if (!supportsArgsClass) {
	    isArguments = function(value) {
	      return (value && typeof value == 'object') ? hasOwnProperty.call(value, 'callee') : false;
	    };
	  }
	
	  var isEqual = Rx.internals.isEqual = function (x, y) {
	    return deepEquals(x, y, [], []);
	  };
	
	  /** @private
	   * Used for deep comparison
	   **/
	  function deepEquals(a, b, stackA, stackB) {
	    // exit early for identical values
	    if (a === b) {
	      // treat `+0` vs. `-0` as not equal
	      return a !== 0 || (1 / a == 1 / b);
	    }
	
	    var type = typeof a,
	        otherType = typeof b;
	
	    // exit early for unlike primitive values
	    if (a === a && (a == null || b == null ||
	        (type != 'function' && type != 'object' && otherType != 'function' && otherType != 'object'))) {
	      return false;
	    }
	
	    // compare [[Class]] names
	    var className = toString.call(a),
	        otherClass = toString.call(b);
	
	    if (className == argsClass) {
	      className = objectClass;
	    }
	    if (otherClass == argsClass) {
	      otherClass = objectClass;
	    }
	    if (className != otherClass) {
	      return false;
	    }
	    switch (className) {
	      case boolClass:
	      case dateClass:
	        // coerce dates and booleans to numbers, dates to milliseconds and booleans
	        // to `1` or `0` treating invalid dates coerced to `NaN` as not equal
	        return +a == +b;
	
	      case numberClass:
	        // treat `NaN` vs. `NaN` as equal
	        return (a != +a) ?
	          b != +b :
	          // but treat `-0` vs. `+0` as not equal
	          (a == 0 ? (1 / a == 1 / b) : a == +b);
	
	      case regexpClass:
	      case stringClass:
	        // coerce regexes to strings (http://es5.github.io/#x15.10.6.4)
	        // treat string primitives and their corresponding object instances as equal
	        return a == String(b);
	    }
	    var isArr = className == arrayClass;
	    if (!isArr) {
	
	      // exit for functions and DOM nodes
	      if (className != objectClass || (!support.nodeClass && (isNode(a) || isNode(b)))) {
	        return false;
	      }
	      // in older versions of Opera, `arguments` objects have `Array` constructors
	      var ctorA = !support.argsObject && isArguments(a) ? Object : a.constructor,
	          ctorB = !support.argsObject && isArguments(b) ? Object : b.constructor;
	
	      // non `Object` object instances with different constructors are not equal
	      if (ctorA != ctorB &&
	            !(hasOwnProperty.call(a, 'constructor') && hasOwnProperty.call(b, 'constructor')) &&
	            !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
	            ('constructor' in a && 'constructor' in b)
	          ) {
	        return false;
	      }
	    }
	    // assume cyclic structures are equal
	    // the algorithm for detecting cyclic structures is adapted from ES 5.1
	    // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3)
	    var initedStack = !stackA;
	    stackA || (stackA = []);
	    stackB || (stackB = []);
	
	    var length = stackA.length;
	    while (length--) {
	      if (stackA[length] == a) {
	        return stackB[length] == b;
	      }
	    }
	    var size = 0;
	    var result = true;
	
	    // add `a` and `b` to the stack of traversed objects
	    stackA.push(a);
	    stackB.push(b);
	
	    // recursively compare objects and arrays (susceptible to call stack limits)
	    if (isArr) {
	      // compare lengths to determine if a deep comparison is necessary
	      length = a.length;
	      size = b.length;
	      result = size == length;
	
	      if (result) {
	        // deep compare the contents, ignoring non-numeric properties
	        while (size--) {
	          var index = length,
	              value = b[size];
	
	          if (!(result = deepEquals(a[size], value, stackA, stackB))) {
	            break;
	          }
	        }
	      }
	    }
	    else {
	      // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
	      // which, in this case, is more costly
	      internalForIn(b, function(value, key, b) {
	        if (hasOwnProperty.call(b, key)) {
	          // count the number of properties.
	          size++;
	          // deep compare each property value.
	          return (result = hasOwnProperty.call(a, key) && deepEquals(a[key], value, stackA, stackB));
	        }
	      });
	
	      if (result) {
	        // ensure both objects have the same number of properties
	        internalForIn(a, function(value, key, a) {
	          if (hasOwnProperty.call(a, key)) {
	            // `size` will be `-1` if `a` has more properties than `b`
	            return (result = --size > -1);
	          }
	        });
	      }
	    }
	    stackA.pop();
	    stackB.pop();
	
	    return result;
	  }
	
	  var hasProp = {}.hasOwnProperty,
	      slice = Array.prototype.slice;
	
	  var inherits = Rx.internals.inherits = function (child, parent) {
	    function __() { this.constructor = child; }
	    __.prototype = parent.prototype;
	    child.prototype = new __();
	  };
	
	  var addProperties = Rx.internals.addProperties = function (obj) {
	    for(var sources = [], i = 1, len = arguments.length; i < len; i++) { sources.push(arguments[i]); }
	    for (var idx = 0, ln = sources.length; idx < ln; idx++) {
	      var source = sources[idx];
	      for (var prop in source) {
	        obj[prop] = source[prop];
	      }
	    }
	  };
	
	  // Rx Utils
	  var addRef = Rx.internals.addRef = function (xs, r) {
	    return new AnonymousObservable(function (observer) {
	      return new BinaryDisposable(r.getDisposable(), xs.subscribe(observer));
	    });
	  };
	
	  function arrayInitialize(count, factory) {
	    var a = new Array(count);
	    for (var i = 0; i < count; i++) {
	      a[i] = factory();
	    }
	    return a;
	  }
	
	  /**
	   * Represents a group of disposable resources that are disposed together.
	   * @constructor
	   */
	  var CompositeDisposable = Rx.CompositeDisposable = function () {
	    var args = [], i, len;
	    if (Array.isArray(arguments[0])) {
	      args = arguments[0];
	      len = args.length;
	    } else {
	      len = arguments.length;
	      args = new Array(len);
	      for(i = 0; i < len; i++) { args[i] = arguments[i]; }
	    }
	    this.disposables = args;
	    this.isDisposed = false;
	    this.length = args.length;
	  };
	
	  var CompositeDisposablePrototype = CompositeDisposable.prototype;
	
	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Mixed} item Disposable to add.
	   */
	  CompositeDisposablePrototype.add = function (item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	      this.length++;
	    }
	  };
	
	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Mixed} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */
	  CompositeDisposablePrototype.remove = function (item) {
	    var shouldDispose = false;
	    if (!this.isDisposed) {
	      var idx = this.disposables.indexOf(item);
	      if (idx !== -1) {
	        shouldDispose = true;
	        this.disposables.splice(idx, 1);
	        this.length--;
	        item.dispose();
	      }
	    }
	    return shouldDispose;
	  };
	
	  /**
	   *  Disposes all disposables in the group and removes them from the group.
	   */
	  CompositeDisposablePrototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var len = this.disposables.length, currentDisposables = new Array(len);
	      for(var i = 0; i < len; i++) { currentDisposables[i] = this.disposables[i]; }
	      this.disposables = [];
	      this.length = 0;
	
	      for (i = 0; i < len; i++) {
	        currentDisposables[i].dispose();
	      }
	    }
	  };
	
	  /**
	   * Provides a set of static methods for creating Disposables.
	   * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
	   */
	  var Disposable = Rx.Disposable = function (action) {
	    this.isDisposed = false;
	    this.action = action || noop;
	  };
	
	  /** Performs the task of cleaning up resources. */
	  Disposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.action();
	      this.isDisposed = true;
	    }
	  };
	
	  /**
	   * Creates a disposable object that invokes the specified action when disposed.
	   * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
	   * @return {Disposable} The disposable object that runs the given action upon disposal.
	   */
	  var disposableCreate = Disposable.create = function (action) { return new Disposable(action); };
	
	  /**
	   * Gets the disposable that does nothing when disposed.
	   */
	  var disposableEmpty = Disposable.empty = { dispose: noop };
	
	  /**
	   * Validates whether the given object is a disposable
	   * @param {Object} Object to test whether it has a dispose method
	   * @returns {Boolean} true if a disposable object, else false.
	   */
	  var isDisposable = Disposable.isDisposable = function (d) {
	    return d && isFunction(d.dispose);
	  };
	
	  var checkDisposed = Disposable.checkDisposed = function (disposable) {
	    if (disposable.isDisposed) { throw new ObjectDisposedError(); }
	  };
	
	  var disposableFixup = Disposable._fixup = function (result) {
	    return isDisposable(result) ? result : disposableEmpty;
	  };
	
	  // Single assignment
	  var SingleAssignmentDisposable = Rx.SingleAssignmentDisposable = function () {
	    this.isDisposed = false;
	    this.current = null;
	  };
	  SingleAssignmentDisposable.prototype.getDisposable = function () {
	    return this.current;
	  };
	  SingleAssignmentDisposable.prototype.setDisposable = function (value) {
	    if (this.current) { throw new Error('Disposable has already been assigned'); }
	    var shouldDispose = this.isDisposed;
	    !shouldDispose && (this.current = value);
	    shouldDispose && value && value.dispose();
	  };
	  SingleAssignmentDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var old = this.current;
	      this.current = null;
	      old && old.dispose();
	    }
	  };
	
	  // Multiple assignment disposable
	  var SerialDisposable = Rx.SerialDisposable = function () {
	    this.isDisposed = false;
	    this.current = null;
	  };
	  SerialDisposable.prototype.getDisposable = function () {
	    return this.current;
	  };
	  SerialDisposable.prototype.setDisposable = function (value) {
	    var shouldDispose = this.isDisposed;
	    if (!shouldDispose) {
	      var old = this.current;
	      this.current = value;
	    }
	    old && old.dispose();
	    shouldDispose && value && value.dispose();
	  };
	  SerialDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var old = this.current;
	      this.current = null;
	    }
	    old && old.dispose();
	  };
	
	  var BinaryDisposable = Rx.BinaryDisposable = function (first, second) {
	    this._first = first;
	    this._second = second;
	    this.isDisposed = false;
	  };
	
	  BinaryDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var old1 = this._first;
	      this._first = null;
	      old1 && old1.dispose();
	      var old2 = this._second;
	      this._second = null;
	      old2 && old2.dispose();
	    }
	  };
	
	  var NAryDisposable = Rx.NAryDisposable = function (disposables) {
	    this._disposables = disposables;
	    this.isDisposed = false;
	  };
	
	  NAryDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      for (var i = 0, len = this._disposables.length; i < len; i++) {
	        this._disposables[i].dispose();
	      }
	      this._disposables.length = 0;
	    }
	  };
	
	  /**
	   * Represents a disposable resource that only disposes its underlying disposable resource when all dependent disposable objects have been disposed.
	   */
	  var RefCountDisposable = Rx.RefCountDisposable = (function () {
	
	    function InnerDisposable(disposable) {
	      this.disposable = disposable;
	      this.disposable.count++;
	      this.isInnerDisposed = false;
	    }
	
	    InnerDisposable.prototype.dispose = function () {
	      if (!this.disposable.isDisposed && !this.isInnerDisposed) {
	        this.isInnerDisposed = true;
	        this.disposable.count--;
	        if (this.disposable.count === 0 && this.disposable.isPrimaryDisposed) {
	          this.disposable.isDisposed = true;
	          this.disposable.underlyingDisposable.dispose();
	        }
	      }
	    };
	
	    /**
	     * Initializes a new instance of the RefCountDisposable with the specified disposable.
	     * @constructor
	     * @param {Disposable} disposable Underlying disposable.
	      */
	    function RefCountDisposable(disposable) {
	      this.underlyingDisposable = disposable;
	      this.isDisposed = false;
	      this.isPrimaryDisposed = false;
	      this.count = 0;
	    }
	
	    /**
	     * Disposes the underlying disposable only when all dependent disposables have been disposed
	     */
	    RefCountDisposable.prototype.dispose = function () {
	      if (!this.isDisposed && !this.isPrimaryDisposed) {
	        this.isPrimaryDisposed = true;
	        if (this.count === 0) {
	          this.isDisposed = true;
	          this.underlyingDisposable.dispose();
	        }
	      }
	    };
	
	    /**
	     * Returns a dependent disposable that when disposed decreases the refcount on the underlying disposable.
	     * @returns {Disposable} A dependent disposable contributing to the reference count that manages the underlying disposable's lifetime.
	     */
	    RefCountDisposable.prototype.getDisposable = function () {
	      return this.isDisposed ? disposableEmpty : new InnerDisposable(this);
	    };
	
	    return RefCountDisposable;
	  })();
	
	  var ScheduledItem = Rx.internals.ScheduledItem = function (scheduler, state, action, dueTime, comparer) {
	    this.scheduler = scheduler;
	    this.state = state;
	    this.action = action;
	    this.dueTime = dueTime;
	    this.comparer = comparer || defaultSubComparer;
	    this.disposable = new SingleAssignmentDisposable();
	  }
	
	  ScheduledItem.prototype.invoke = function () {
	    this.disposable.setDisposable(this.invokeCore());
	  };
	
	  ScheduledItem.prototype.compareTo = function (other) {
	    return this.comparer(this.dueTime, other.dueTime);
	  };
	
	  ScheduledItem.prototype.isCancelled = function () {
	    return this.disposable.isDisposed;
	  };
	
	  ScheduledItem.prototype.invokeCore = function () {
	    return disposableFixup(this.action(this.scheduler, this.state));
	  };
	
	  /** Provides a set of static properties to access commonly used schedulers. */
	  var Scheduler = Rx.Scheduler = (function () {
	
	    function Scheduler() { }
	
	    /** Determines whether the given object is a scheduler */
	    Scheduler.isScheduler = function (s) {
	      return s instanceof Scheduler;
	    };
	
	    var schedulerProto = Scheduler.prototype;
	
	    /**
	   * Schedules an action to be executed.
	   * @param state State passed to the action to be executed.
	   * @param {Function} action Action to be executed.
	   * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	   */
	    schedulerProto.schedule = function (state, action) {
	      throw new NotImplementedError();
	    };
	
	  /**
	   * Schedules an action to be executed after dueTime.
	   * @param state State passed to the action to be executed.
	   * @param {Function} action Action to be executed.
	   * @param {Number} dueTime Relative time after which to execute the action.
	   * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	   */
	    schedulerProto.scheduleFuture = function (state, dueTime, action) {
	      var dt = dueTime;
	      dt instanceof Date && (dt = dt - this.now());
	      dt = Scheduler.normalize(dt);
	
	      if (dt === 0) { return this.schedule(state, action); }
	
	      return this._scheduleFuture(state, dt, action);
	    };
	
	    schedulerProto._scheduleFuture = function (state, dueTime, action) {
	      throw new NotImplementedError();
	    };
	
	    /** Gets the current time according to the local machine's system clock. */
	    Scheduler.now = defaultNow;
	
	    /** Gets the current time according to the local machine's system clock. */
	    Scheduler.prototype.now = defaultNow;
	
	    /**
	     * Normalizes the specified TimeSpan value to a positive value.
	     * @param {Number} timeSpan The time span value to normalize.
	     * @returns {Number} The specified TimeSpan value if it is zero or positive; otherwise, 0
	     */
	    Scheduler.normalize = function (timeSpan) {
	      timeSpan < 0 && (timeSpan = 0);
	      return timeSpan;
	    };
	
	    return Scheduler;
	  }());
	
	  var normalizeTime = Scheduler.normalize, isScheduler = Scheduler.isScheduler;
	
	  (function (schedulerProto) {
	
	    function invokeRecImmediate(scheduler, pair) {
	      var state = pair[0], action = pair[1], group = new CompositeDisposable();
	      action(state, innerAction);
	      return group;
	
	      function innerAction(state2) {
	        var isAdded = false, isDone = false;
	
	        var d = scheduler.schedule(state2, scheduleWork);
	        if (!isDone) {
	          group.add(d);
	          isAdded = true;
	        }
	
	        function scheduleWork(_, state3) {
	          if (isAdded) {
	            group.remove(d);
	          } else {
	            isDone = true;
	          }
	          action(state3, innerAction);
	          return disposableEmpty;
	        }
	      }
	    }
	
	    function invokeRecDate(scheduler, pair) {
	      var state = pair[0], action = pair[1], group = new CompositeDisposable();
	      action(state, innerAction);
	      return group;
	
	      function innerAction(state2, dueTime1) {
	        var isAdded = false, isDone = false;
	
	        var d = scheduler.scheduleFuture(state2, dueTime1, scheduleWork);
	        if (!isDone) {
	          group.add(d);
	          isAdded = true;
	        }
	
	        function scheduleWork(_, state3) {
	          if (isAdded) {
	            group.remove(d);
	          } else {
	            isDone = true;
	          }
	          action(state3, innerAction);
	          return disposableEmpty;
	        }
	      }
	    }
	
	    /**
	     * Schedules an action to be executed recursively.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in recursive invocation state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */
	    schedulerProto.scheduleRecursive = function (state, action) {
	      return this.schedule([state, action], invokeRecImmediate);
	    };
	
	    /**
	     * Schedules an action to be executed recursively after a specified relative or absolute due time.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in the recursive due time and invocation state.
	     * @param {Number | Date} dueTime Relative or absolute time after which to execute the action for the first time.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */
	    schedulerProto.scheduleRecursiveFuture = function (state, dueTime, action) {
	      return this.scheduleFuture([state, action], dueTime, invokeRecDate);
	    };
	
	  }(Scheduler.prototype));
	
	  (function (schedulerProto) {
	
	    /**
	     * Schedules a periodic piece of work by dynamically discovering the scheduler's capabilities. The periodic task will be scheduled using window.setInterval for the base implementation.
	     * @param {Mixed} state Initial state passed to the action upon the first iteration.
	     * @param {Number} period Period for running the work periodically.
	     * @param {Function} action Action to be executed, potentially updating the state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled recurring action (best effort).
	     */
	    Scheduler.prototype.schedulePeriodic = function(state, period, action) {
	      if (typeof root.setInterval === 'undefined') { throw new NotSupportedError(); }
	      period = normalizeTime(period);
	      var s = state, id = root.setInterval(function () { s = action(s); }, period);
	      return disposableCreate(function () { root.clearInterval(id); });
	    };
	
	  }(Scheduler.prototype));
	
	  /** Gets a scheduler that schedules work immediately on the current thread. */
	   var ImmediateScheduler = (function (__super__) {
	    inherits(ImmediateScheduler, __super__);
	    function ImmediateScheduler() {
	      __super__.call(this);
	    }
	
	    ImmediateScheduler.prototype.schedule = function (state, action) {
	      return disposableFixup(action(this, state));
	    };
	
	    return ImmediateScheduler;
	  }(Scheduler));
	
	  var immediateScheduler = Scheduler.immediate = new ImmediateScheduler();
	
	  /**
	   * Gets a scheduler that schedules work as soon as possible on the current thread.
	   */
	  var CurrentThreadScheduler = (function (__super__) {
	    var queue;
	
	    function runTrampoline () {
	      while (queue.length > 0) {
	        var item = queue.dequeue();
	        !item.isCancelled() && item.invoke();
	      }
	    }
	
	    inherits(CurrentThreadScheduler, __super__);
	    function CurrentThreadScheduler() {
	      __super__.call(this);
	    }
	
	    CurrentThreadScheduler.prototype.schedule = function (state, action) {
	      var si = new ScheduledItem(this, state, action, this.now());
	
	      if (!queue) {
	        queue = new PriorityQueue(4);
	        queue.enqueue(si);
	
	        var result = tryCatch(runTrampoline)();
	        queue = null;
	        if (result === errorObj) { thrower(result.e); }
	      } else {
	        queue.enqueue(si);
	      }
	      return si.disposable;
	    };
	
	    CurrentThreadScheduler.prototype.scheduleRequired = function () { return !queue; };
	
	    return CurrentThreadScheduler;
	  }(Scheduler));
	
	  var currentThreadScheduler = Scheduler.currentThread = new CurrentThreadScheduler();
	
	  var SchedulePeriodicRecursive = Rx.internals.SchedulePeriodicRecursive = (function () {
	    function createTick(self) {
	      return function tick(command, recurse) {
	        recurse(0, self._period);
	        var state = tryCatch(self._action)(self._state);
	        if (state === errorObj) {
	          self._cancel.dispose();
	          thrower(state.e);
	        }
	        self._state = state;
	      };
	    }
	
	    function SchedulePeriodicRecursive(scheduler, state, period, action) {
	      this._scheduler = scheduler;
	      this._state = state;
	      this._period = period;
	      this._action = action;
	    }
	
	    SchedulePeriodicRecursive.prototype.start = function () {
	      var d = new SingleAssignmentDisposable();
	      this._cancel = d;
	      d.setDisposable(this._scheduler.scheduleRecursiveFuture(0, this._period, createTick(this)));
	
	      return d;
	    };
	
	    return SchedulePeriodicRecursive;
	  }());
	
	  var scheduleMethod, clearMethod;
	
	  var localTimer = (function () {
	    var localSetTimeout, localClearTimeout = noop;
	    if (!!root.setTimeout) {
	      localSetTimeout = root.setTimeout;
	      localClearTimeout = root.clearTimeout;
	    } else if (!!root.WScript) {
	      localSetTimeout = function (fn, time) {
	        root.WScript.Sleep(time);
	        fn();
	      };
	    } else {
	      throw new NotSupportedError();
	    }
	
	    return {
	      setTimeout: localSetTimeout,
	      clearTimeout: localClearTimeout
	    };
	  }());
	  var localSetTimeout = localTimer.setTimeout,
	    localClearTimeout = localTimer.clearTimeout;
	
	  (function () {
	
	    var nextHandle = 1, tasksByHandle = {}, currentlyRunning = false;
	
	    clearMethod = function (handle) {
	      delete tasksByHandle[handle];
	    };
	
	    function runTask(handle) {
	      if (currentlyRunning) {
	        localSetTimeout(function () { runTask(handle); }, 0);
	      } else {
	        var task = tasksByHandle[handle];
	        if (task) {
	          currentlyRunning = true;
	          var result = tryCatch(task)();
	          clearMethod(handle);
	          currentlyRunning = false;
	          if (result === errorObj) { thrower(result.e); }
	        }
	      }
	    }
	
	    var reNative = new RegExp('^' +
	      String(toString)
	        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	        .replace(/toString| for [^\]]+/g, '.*?') + '$'
	    );
	
	    var setImmediate = typeof (setImmediate = freeGlobal && moduleExports && freeGlobal.setImmediate) == 'function' &&
	      !reNative.test(setImmediate) && setImmediate;
	
	    function postMessageSupported () {
	      // Ensure not in a worker
	      if (!root.postMessage || root.importScripts) { return false; }
	      var isAsync = false, oldHandler = root.onmessage;
	      // Test for async
	      root.onmessage = function () { isAsync = true; };
	      root.postMessage('', '*');
	      root.onmessage = oldHandler;
	
	      return isAsync;
	    }
	
	    // Use in order, setImmediate, nextTick, postMessage, MessageChannel, script readystatechanged, setTimeout
	    if (isFunction(setImmediate)) {
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        setImmediate(function () { runTask(id); });
	
	        return id;
	      };
	    } else if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        process.nextTick(function () { runTask(id); });
	
	        return id;
	      };
	    } else if (postMessageSupported()) {
	      var MSG_PREFIX = 'ms.rx.schedule' + Math.random();
	
	      var onGlobalPostMessage = function (event) {
	        // Only if we're a match to avoid any other global events
	        if (typeof event.data === 'string' && event.data.substring(0, MSG_PREFIX.length) === MSG_PREFIX) {
	          runTask(event.data.substring(MSG_PREFIX.length));
	        }
	      };
	
	      root.addEventListener('message', onGlobalPostMessage, false);
	
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        root.postMessage(MSG_PREFIX + currentId, '*');
	        return id;
	      };
	    } else if (!!root.MessageChannel) {
	      var channel = new root.MessageChannel();
	
	      channel.port1.onmessage = function (e) { runTask(e.data); };
	
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        channel.port2.postMessage(id);
	        return id;
	      };
	    } else if ('document' in root && 'onreadystatechange' in root.document.createElement('script')) {
	
	      scheduleMethod = function (action) {
	        var scriptElement = root.document.createElement('script');
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	
	        scriptElement.onreadystatechange = function () {
	          runTask(id);
	          scriptElement.onreadystatechange = null;
	          scriptElement.parentNode.removeChild(scriptElement);
	          scriptElement = null;
	        };
	        root.document.documentElement.appendChild(scriptElement);
	        return id;
	      };
	
	    } else {
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        localSetTimeout(function () {
	          runTask(id);
	        }, 0);
	
	        return id;
	      };
	    }
	  }());
	
	  /**
	   * Gets a scheduler that schedules work via a timed callback based upon platform.
	   */
	   var DefaultScheduler = (function (__super__) {
	     inherits(DefaultScheduler, __super__);
	     function DefaultScheduler() {
	       __super__.call(this);
	     }
	
	     function scheduleAction(disposable, action, scheduler, state) {
	       return function schedule() {
	         !disposable.isDisposed && disposable.setDisposable(Disposable._fixup(action(scheduler, state)));
	       };
	     }
	
	     function ClearDisposable(method, id) {
	       this._id = id;
	       this._method = method;
	       this.isDisposed = false;
	     }
	
	     ClearDisposable.prototype.dispose = function () {
	       if (!this.isDisposed) {
	         this.isDisposed = true;
	         this._method.call(null, this._id);
	       }
	     };
	
	    DefaultScheduler.prototype.schedule = function (state, action) {
	      var disposable = new SingleAssignmentDisposable(),
	          id = scheduleMethod(scheduleAction(disposable, action, this, state));
	      return new BinaryDisposable(disposable, new ClearDisposable(clearMethod, id));
	    };
	
	    DefaultScheduler.prototype._scheduleFuture = function (state, dueTime, action) {
	      if (dueTime === 0) { return this.schedule(state, action); }
	      var disposable = new SingleAssignmentDisposable(),
	          id = localSetTimeout(scheduleAction(disposable, action, this, state), dueTime);
	      return new BinaryDisposable(disposable, new ClearDisposable(localClearTimeout, id));
	    };
	
	    return DefaultScheduler;
	  }(Scheduler));
	
	  var defaultScheduler = Scheduler['default'] = Scheduler.async = new DefaultScheduler();
	
	  function IndexedItem(id, value) {
	    this.id = id;
	    this.value = value;
	  }
	
	  IndexedItem.prototype.compareTo = function (other) {
	    var c = this.value.compareTo(other.value);
	    c === 0 && (c = this.id - other.id);
	    return c;
	  };
	
	  var PriorityQueue = Rx.internals.PriorityQueue = function (capacity) {
	    this.items = new Array(capacity);
	    this.length = 0;
	  };
	
	  var priorityProto = PriorityQueue.prototype;
	  priorityProto.isHigherPriority = function (left, right) {
	    return this.items[left].compareTo(this.items[right]) < 0;
	  };
	
	  priorityProto.percolate = function (index) {
	    if (index >= this.length || index < 0) { return; }
	    var parent = index - 1 >> 1;
	    if (parent < 0 || parent === index) { return; }
	    if (this.isHigherPriority(index, parent)) {
	      var temp = this.items[index];
	      this.items[index] = this.items[parent];
	      this.items[parent] = temp;
	      this.percolate(parent);
	    }
	  };
	
	  priorityProto.heapify = function (index) {
	    +index || (index = 0);
	    if (index >= this.length || index < 0) { return; }
	    var left = 2 * index + 1,
	        right = 2 * index + 2,
	        first = index;
	    if (left < this.length && this.isHigherPriority(left, first)) {
	      first = left;
	    }
	    if (right < this.length && this.isHigherPriority(right, first)) {
	      first = right;
	    }
	    if (first !== index) {
	      var temp = this.items[index];
	      this.items[index] = this.items[first];
	      this.items[first] = temp;
	      this.heapify(first);
	    }
	  };
	
	  priorityProto.peek = function () { return this.items[0].value; };
	
	  priorityProto.removeAt = function (index) {
	    this.items[index] = this.items[--this.length];
	    this.items[this.length] = undefined;
	    this.heapify();
	  };
	
	  priorityProto.dequeue = function () {
	    var result = this.peek();
	    this.removeAt(0);
	    return result;
	  };
	
	  priorityProto.enqueue = function (item) {
	    var index = this.length++;
	    this.items[index] = new IndexedItem(PriorityQueue.count++, item);
	    this.percolate(index);
	  };
	
	  priorityProto.remove = function (item) {
	    for (var i = 0; i < this.length; i++) {
	      if (this.items[i].value === item) {
	        this.removeAt(i);
	        return true;
	      }
	    }
	    return false;
	  };
	  PriorityQueue.count = 0;
	
	  /**
	   *  Represents a notification to an observer.
	   */
	  var Notification = Rx.Notification = (function () {
	    function Notification() {
	
	    }
	
	    Notification.prototype._accept = function (onNext, onError, onCompleted) {
	      throw new NotImplementedError();
	    };
	
	    Notification.prototype._acceptObservable = function (onNext, onError, onCompleted) {
	      throw new NotImplementedError();
	    };
	
	    /**
	     * Invokes the delegate corresponding to the notification or the observer's method corresponding to the notification and returns the produced result.
	     *
	     * @memberOf Notification
	     * @param {Any} observerOrOnNext Delegate to invoke for an OnNext notification or Observer to invoke the notification on..
	     * @param {Function} onError Delegate to invoke for an OnError notification.
	     * @param {Function} onCompleted Delegate to invoke for an OnCompleted notification.
	     * @returns {Any} Result produced by the observation.
	     */
	    Notification.prototype.accept = function (observerOrOnNext, onError, onCompleted) {
	      return observerOrOnNext && typeof observerOrOnNext === 'object' ?
	        this._acceptObservable(observerOrOnNext) :
	        this._accept(observerOrOnNext, onError, onCompleted);
	    };
	
	    /**
	     * Returns an observable sequence with a single notification.
	     *
	     * @memberOf Notifications
	     * @param {Scheduler} [scheduler] Scheduler to send out the notification calls on.
	     * @returns {Observable} The observable sequence that surfaces the behavior of the notification upon subscription.
	     */
	    Notification.prototype.toObservable = function (scheduler) {
	      var self = this;
	      isScheduler(scheduler) || (scheduler = immediateScheduler);
	      return new AnonymousObservable(function (o) {
	        return scheduler.schedule(self, function (_, notification) {
	          notification._acceptObservable(o);
	          notification.kind === 'N' && o.onCompleted();
	        });
	      });
	    };
	
	    return Notification;
	  })();
	
	  var OnNextNotification = (function (__super__) {
	    inherits(OnNextNotification, __super__);
	    function OnNextNotification(value) {
	      this.value = value;
	      this.kind = 'N';
	    }
	
	    OnNextNotification.prototype._accept = function (onNext) {
	      return onNext(this.value);
	    };
	
	    OnNextNotification.prototype._acceptObservable = function (o) {
	      return o.onNext(this.value);
	    };
	
	    OnNextNotification.prototype.toString = function () {
	      return 'OnNext(' + this.value + ')';
	    };
	
	    return OnNextNotification;
	  }(Notification));
	
	  var OnErrorNotification = (function (__super__) {
	    inherits(OnErrorNotification, __super__);
	    function OnErrorNotification(error) {
	      this.error = error;
	      this.kind = 'E';
	    }
	
	    OnErrorNotification.prototype._accept = function (onNext, onError) {
	      return onError(this.error);
	    };
	
	    OnErrorNotification.prototype._acceptObservable = function (o) {
	      return o.onError(this.error);
	    };
	
	    OnErrorNotification.prototype.toString = function () {
	      return 'OnError(' + this.error + ')';
	    };
	
	    return OnErrorNotification;
	  }(Notification));
	
	  var OnCompletedNotification = (function (__super__) {
	    inherits(OnCompletedNotification, __super__);
	    function OnCompletedNotification() {
	      this.kind = 'C';
	    }
	
	    OnCompletedNotification.prototype._accept = function (onNext, onError, onCompleted) {
	      return onCompleted();
	    };
	
	    OnCompletedNotification.prototype._acceptObservable = function (o) {
	      return o.onCompleted();
	    };
	
	    OnCompletedNotification.prototype.toString = function () {
	      return 'OnCompleted()';
	    };
	
	    return OnCompletedNotification;
	  }(Notification));
	
	  /**
	   * Creates an object that represents an OnNext notification to an observer.
	   * @param {Any} value The value contained in the notification.
	   * @returns {Notification} The OnNext notification containing the value.
	   */
	  var notificationCreateOnNext = Notification.createOnNext = function (value) {
	    return new OnNextNotification(value);
	  };
	
	  /**
	   * Creates an object that represents an OnError notification to an observer.
	   * @param {Any} error The exception contained in the notification.
	   * @returns {Notification} The OnError notification containing the exception.
	   */
	  var notificationCreateOnError = Notification.createOnError = function (error) {
	    return new OnErrorNotification(error);
	  };
	
	  /**
	   * Creates an object that represents an OnCompleted notification to an observer.
	   * @returns {Notification} The OnCompleted notification.
	   */
	  var notificationCreateOnCompleted = Notification.createOnCompleted = function () {
	    return new OnCompletedNotification();
	  };
	
	  /**
	   * Supports push-style iteration over an observable sequence.
	   */
	  var Observer = Rx.Observer = function () { };
	
	  /**
	   *  Creates an observer from the specified OnNext, along with optional OnError, and OnCompleted actions.
	   * @param {Function} [onNext] Observer's OnNext action implementation.
	   * @param {Function} [onError] Observer's OnError action implementation.
	   * @param {Function} [onCompleted] Observer's OnCompleted action implementation.
	   * @returns {Observer} The observer object implemented using the given actions.
	   */
	  var observerCreate = Observer.create = function (onNext, onError, onCompleted) {
	    onNext || (onNext = noop);
	    onError || (onError = defaultError);
	    onCompleted || (onCompleted = noop);
	    return new AnonymousObserver(onNext, onError, onCompleted);
	  };
	
	  /**
	   * Abstract base class for implementations of the Observer class.
	   * This base class enforces the grammar of observers where OnError and OnCompleted are terminal messages.
	   */
	  var AbstractObserver = Rx.internals.AbstractObserver = (function (__super__) {
	    inherits(AbstractObserver, __super__);
	
	    /**
	     * Creates a new observer in a non-stopped state.
	     */
	    function AbstractObserver() {
	      this.isStopped = false;
	    }
	
	    // Must be implemented by other observers
	    AbstractObserver.prototype.next = notImplemented;
	    AbstractObserver.prototype.error = notImplemented;
	    AbstractObserver.prototype.completed = notImplemented;
	
	    /**
	     * Notifies the observer of a new element in the sequence.
	     * @param {Any} value Next element in the sequence.
	     */
	    AbstractObserver.prototype.onNext = function (value) {
	      !this.isStopped && this.next(value);
	    };
	
	    /**
	     * Notifies the observer that an exception has occurred.
	     * @param {Any} error The error that has occurred.
	     */
	    AbstractObserver.prototype.onError = function (error) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.error(error);
	      }
	    };
	
	    /**
	     * Notifies the observer of the end of the sequence.
	     */
	    AbstractObserver.prototype.onCompleted = function () {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.completed();
	      }
	    };
	
	    /**
	     * Disposes the observer, causing it to transition to the stopped state.
	     */
	    AbstractObserver.prototype.dispose = function () { this.isStopped = true; };
	
	    AbstractObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.error(e);
	        return true;
	      }
	
	      return false;
	    };
	
	    return AbstractObserver;
	  }(Observer));
	
	  /**
	   * Class to create an Observer instance from delegate-based implementations of the on* methods.
	   */
	  var AnonymousObserver = Rx.AnonymousObserver = (function (__super__) {
	    inherits(AnonymousObserver, __super__);
	
	    /**
	     * Creates an observer from the specified OnNext, OnError, and OnCompleted actions.
	     * @param {Any} onNext Observer's OnNext action implementation.
	     * @param {Any} onError Observer's OnError action implementation.
	     * @param {Any} onCompleted Observer's OnCompleted action implementation.
	     */
	    function AnonymousObserver(onNext, onError, onCompleted) {
	      __super__.call(this);
	      this._onNext = onNext;
	      this._onError = onError;
	      this._onCompleted = onCompleted;
	    }
	
	    /**
	     * Calls the onNext action.
	     * @param {Any} value Next element in the sequence.
	     */
	    AnonymousObserver.prototype.next = function (value) {
	      this._onNext(value);
	    };
	
	    /**
	     * Calls the onError action.
	     * @param {Any} error The error that has occurred.
	     */
	    AnonymousObserver.prototype.error = function (error) {
	      this._onError(error);
	    };
	
	    /**
	     *  Calls the onCompleted action.
	     */
	    AnonymousObserver.prototype.completed = function () {
	      this._onCompleted();
	    };
	
	    return AnonymousObserver;
	  }(AbstractObserver));
	
	  var observableProto;
	
	  /**
	   * Represents a push-style collection.
	   */
	  var Observable = Rx.Observable = (function () {
	
	    function makeSubscribe(self, subscribe) {
	      return function (o) {
	        var oldOnError = o.onError;
	        o.onError = function (e) {
	          makeStackTraceLong(e, self);
	          oldOnError.call(o, e);
	        };
	
	        return subscribe.call(self, o);
	      };
	    }
	
	    function Observable() {
	      if (Rx.config.longStackSupport && hasStacks) {
	        var oldSubscribe = this._subscribe;
	        var e = tryCatch(thrower)(new Error()).e;
	        this.stack = e.stack.substring(e.stack.indexOf('\n') + 1);
	        this._subscribe = makeSubscribe(this, oldSubscribe);
	      }
	    }
	
	    observableProto = Observable.prototype;
	
	    /**
	    * Determines whether the given object is an Observable
	    * @param {Any} An object to determine whether it is an Observable
	    * @returns {Boolean} true if an Observable, else false.
	    */
	    Observable.isObservable = function (o) {
	      return o && isFunction(o.subscribe);
	    };
	
	    /**
	     *  Subscribes an o to the observable sequence.
	     *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
	     *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
	     *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
	     *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribe = observableProto.forEach = function (oOrOnNext, onError, onCompleted) {
	      return this._subscribe(typeof oOrOnNext === 'object' ?
	        oOrOnNext :
	        observerCreate(oOrOnNext, onError, onCompleted));
	    };
	
	    /**
	     * Subscribes to the next value in the sequence with an optional "this" argument.
	     * @param {Function} onNext The function to invoke on each element in the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribeOnNext = function (onNext, thisArg) {
	      return this._subscribe(observerCreate(typeof thisArg !== 'undefined' ? function(x) { onNext.call(thisArg, x); } : onNext));
	    };
	
	    /**
	     * Subscribes to an exceptional condition in the sequence with an optional "this" argument.
	     * @param {Function} onError The function to invoke upon exceptional termination of the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribeOnError = function (onError, thisArg) {
	      return this._subscribe(observerCreate(null, typeof thisArg !== 'undefined' ? function(e) { onError.call(thisArg, e); } : onError));
	    };
	
	    /**
	     * Subscribes to the next value in the sequence with an optional "this" argument.
	     * @param {Function} onCompleted The function to invoke upon graceful termination of the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribeOnCompleted = function (onCompleted, thisArg) {
	      return this._subscribe(observerCreate(null, null, typeof thisArg !== 'undefined' ? function() { onCompleted.call(thisArg); } : onCompleted));
	    };
	
	    return Observable;
	  })();
	
	  var ScheduledObserver = Rx.internals.ScheduledObserver = (function (__super__) {
	    inherits(ScheduledObserver, __super__);
	
	    function ScheduledObserver(scheduler, observer) {
	      __super__.call(this);
	      this.scheduler = scheduler;
	      this.observer = observer;
	      this.isAcquired = false;
	      this.hasFaulted = false;
	      this.queue = [];
	      this.disposable = new SerialDisposable();
	    }
	
	    ScheduledObserver.prototype.next = function (value) {
	      var self = this;
	      this.queue.push(function () { self.observer.onNext(value); });
	    };
	
	    ScheduledObserver.prototype.error = function (e) {
	      var self = this;
	      this.queue.push(function () { self.observer.onError(e); });
	    };
	
	    ScheduledObserver.prototype.completed = function () {
	      var self = this;
	      this.queue.push(function () { self.observer.onCompleted(); });
	    };
	
	    ScheduledObserver.prototype.ensureActive = function () {
	      var isOwner = false;
	      if (!this.hasFaulted && this.queue.length > 0) {
	        isOwner = !this.isAcquired;
	        this.isAcquired = true;
	      }
	      if (isOwner) {
	        this.disposable.setDisposable(this.scheduler.scheduleRecursive(this, function (parent, self) {
	          var work;
	          if (parent.queue.length > 0) {
	            work = parent.queue.shift();
	          } else {
	            parent.isAcquired = false;
	            return;
	          }
	          var res = tryCatch(work)();
	          if (res === errorObj) {
	            parent.queue = [];
	            parent.hasFaulted = true;
	            return thrower(res.e);
	          }
	          self(parent);
	        }));
	      }
	    };
	
	    ScheduledObserver.prototype.dispose = function () {
	      __super__.prototype.dispose.call(this);
	      this.disposable.dispose();
	    };
	
	    return ScheduledObserver;
	  }(AbstractObserver));
	
	  var ObservableBase = Rx.ObservableBase = (function (__super__) {
	    inherits(ObservableBase, __super__);
	
	    function fixSubscriber(subscriber) {
	      return subscriber && isFunction(subscriber.dispose) ? subscriber :
	        isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
	    }
	
	    function setDisposable(s, state) {
	      var ado = state[0], self = state[1];
	      var sub = tryCatch(self.subscribeCore).call(self, ado);
	      if (sub === errorObj && !ado.fail(errorObj.e)) { thrower(errorObj.e); }
	      ado.setDisposable(fixSubscriber(sub));
	    }
	
	    function ObservableBase() {
	      __super__.call(this);
	    }
	
	    ObservableBase.prototype._subscribe = function (o) {
	      var ado = new AutoDetachObserver(o), state = [ado, this];
	
	      if (currentThreadScheduler.scheduleRequired()) {
	        currentThreadScheduler.schedule(state, setDisposable);
	      } else {
	        setDisposable(null, state);
	      }
	      return ado;
	    };
	
	    ObservableBase.prototype.subscribeCore = notImplemented;
	
	    return ObservableBase;
	  }(Observable));
	
	var FlatMapObservable = Rx.FlatMapObservable = (function(__super__) {
	
	    inherits(FlatMapObservable, __super__);
	
	    function FlatMapObservable(source, selector, resultSelector, thisArg) {
	      this.resultSelector = isFunction(resultSelector) ? resultSelector : null;
	      this.selector = bindCallback(isFunction(selector) ? selector : function() { return selector; }, thisArg, 3);
	      this.source = source;
	      __super__.call(this);
	    }
	
	    FlatMapObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new InnerObserver(o, this.selector, this.resultSelector, this));
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(observer, selector, resultSelector, source) {
	      this.i = 0;
	      this.selector = selector;
	      this.resultSelector = resultSelector;
	      this.source = source;
	      this.o = observer;
	      AbstractObserver.call(this);
	    }
	
	    InnerObserver.prototype._wrapResult = function(result, x, i) {
	      return this.resultSelector ?
	        result.map(function(y, i2) { return this.resultSelector(x, y, i, i2); }, this) :
	        result;
	    };
	
	    InnerObserver.prototype.next = function(x) {
	      var i = this.i++;
	      var result = tryCatch(this.selector)(x, i, this.source);
	      if (result === errorObj) { return this.o.onError(result.e); }
	
	      isPromise(result) && (result = observableFromPromise(result));
	      (isArrayLike(result) || isIterable(result)) && (result = Observable.from(result));
	      this.o.onNext(this._wrapResult(result, x, i));
	    };
	
	    InnerObserver.prototype.error = function(e) { this.o.onError(e); };
	
	    InnerObserver.prototype.onCompleted = function() { this.o.onCompleted(); };
	
	    return FlatMapObservable;
	
	}(ObservableBase));
	
	  var Enumerable = Rx.internals.Enumerable = function () { };
	
	  function IsDisposedDisposable(state) {
	    this._s = state;
	    this.isDisposed = false;
	  }
	
	  IsDisposedDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      this._s.isDisposed = true;
	    }
	  };
	
	  var ConcatEnumerableObservable = (function(__super__) {
	    inherits(ConcatEnumerableObservable, __super__);
	    function ConcatEnumerableObservable(sources) {
	      this.sources = sources;
	      __super__.call(this);
	    }
	
	    ConcatEnumerableObservable.prototype.subscribeCore = function (o) {
	      var state = { isDisposed: false }, subscription = new SerialDisposable();
	      var cancelable = currentThreadScheduler.scheduleRecursive(this.sources[$iterator$](), function (e, self) {
	        if (state.isDisposed) { return; }
	        var currentItem = tryCatch(e.next).call(e);
	        if (currentItem === errorObj) { return o.onError(currentItem.e); }
	
	        if (currentItem.done) {
	          return o.onCompleted();
	        }
	
	        // Check if promise
	        var currentValue = currentItem.value;
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
	
	        var d = new SingleAssignmentDisposable();
	        subscription.setDisposable(d);
	        d.setDisposable(currentValue.subscribe(new InnerObserver(o, self, e)));
	      });
	
	      return new NAryDisposable([subscription, cancelable, new IsDisposedDisposable(state)]);
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, s, e) {
	      this._o = o;
	      this._s = s;
	      this._e = e;
	      AbstractObserver.call(this);
	    }
	    InnerObserver.prototype.onNext = function (x) { this._o.onNext(x); };
	    InnerObserver.prototype.onError = function (e) { this._o.onError(e); };
	    InnerObserver.prototype.onCompleted = function () { this._s(this._e); };
	
	    return ConcatEnumerableObservable;
	  }(ObservableBase));
	
	  Enumerable.prototype.concat = function () {
	    return new ConcatEnumerableObservable(this);
	  };
	
	  var CatchErrorObservable = (function(__super__) {
	    inherits(CatchErrorObservable, __super__);
	    function CatchErrorObservable(sources) {
	      this.sources = sources;
	      __super__.call(this);
	    }
	
	    CatchErrorObservable.prototype.subscribeCore = function (o) {
	      var e = this.sources[$iterator$]();
	
	      var state = { isDisposed: false }, subscription = new SerialDisposable();
	      var cancelable = currentThreadScheduler.scheduleRecursive(null, function (lastException, self) {
	        if (state.isDisposed) { return; }
	        var currentItem = tryCatch(e.next).call(e);
	        if (currentItem === errorObj) { return o.onError(currentItem.e); }
	
	        if (currentItem.done) {
	          return lastException !== null ? o.onError(lastException) : o.onCompleted();
	        }
	
	        // Check if promise
	        var currentValue = currentItem.value;
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
	
	        var d = new SingleAssignmentDisposable();
	        subscription.setDisposable(d);
	        d.setDisposable(currentValue.subscribe(new InnerObserver(o, self)));
	      });
	      return new NAryDisposable([subscription, cancelable, new IsDisposedDisposable(state)]);
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, recurse) {
	      this._o = o;
	      this._recurse = recurse;
	      AbstractObserver.call(this);
	    }
	
	    InnerObserver.prototype.next = function (x) { this._o.onNext(x); };
	    InnerObserver.prototype.error = function (e) { this._recurse(e); };
	    InnerObserver.prototype.completed = function () { this._o.onCompleted(); };
	
	    return CatchErrorObservable;
	  }(ObservableBase));
	
	  Enumerable.prototype.catchError = function () {
	    return new CatchErrorObservable(this);
	  };
	
	  Enumerable.prototype.catchErrorWhen = function (notificationHandler) {
	    var sources = this;
	    return new AnonymousObservable(function (o) {
	      var exceptions = new Subject(),
	        notifier = new Subject(),
	        handled = notificationHandler(exceptions),
	        notificationDisposable = handled.subscribe(notifier);
	
	      var e = sources[$iterator$]();
	
	      var state = { isDisposed: false },
	        lastException,
	        subscription = new SerialDisposable();
	      var cancelable = currentThreadScheduler.scheduleRecursive(null, function (_, self) {
	        if (state.isDisposed) { return; }
	        var currentItem = tryCatch(e.next).call(e);
	        if (currentItem === errorObj) { return o.onError(currentItem.e); }
	
	        if (currentItem.done) {
	          if (lastException) {
	            o.onError(lastException);
	          } else {
	            o.onCompleted();
	          }
	          return;
	        }
	
	        // Check if promise
	        var currentValue = currentItem.value;
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
	
	        var outer = new SingleAssignmentDisposable();
	        var inner = new SingleAssignmentDisposable();
	        subscription.setDisposable(new BinaryDisposable(inner, outer));
	        outer.setDisposable(currentValue.subscribe(
	          function(x) { o.onNext(x); },
	          function (exn) {
	            inner.setDisposable(notifier.subscribe(self, function(ex) {
	              o.onError(ex);
	            }, function() {
	              o.onCompleted();
	            }));
	
	            exceptions.onNext(exn);
	          },
	          function() { o.onCompleted(); }));
	      });
	
	      return new NAryDisposable([notificationDisposable, subscription, cancelable, new IsDisposedDisposable(state)]);
	    });
	  };
	
	  var RepeatEnumerable = (function (__super__) {
	    inherits(RepeatEnumerable, __super__);
	
	    function RepeatEnumerable(v, c) {
	      this.v = v;
	      this.c = c == null ? -1 : c;
	    }
	    RepeatEnumerable.prototype[$iterator$] = function () {
	      return new RepeatEnumerator(this);
	    };
	
	    function RepeatEnumerator(p) {
	      this.v = p.v;
	      this.l = p.c;
	    }
	    RepeatEnumerator.prototype.next = function () {
	      if (this.l === 0) { return doneEnumerator; }
	      if (this.l > 0) { this.l--; }
	      return { done: false, value: this.v };
	    };
	
	    return RepeatEnumerable;
	  }(Enumerable));
	
	  var enumerableRepeat = Enumerable.repeat = function (value, repeatCount) {
	    return new RepeatEnumerable(value, repeatCount);
	  };
	
	  var OfEnumerable = (function(__super__) {
	    inherits(OfEnumerable, __super__);
	    function OfEnumerable(s, fn, thisArg) {
	      this.s = s;
	      this.fn = fn ? bindCallback(fn, thisArg, 3) : null;
	    }
	    OfEnumerable.prototype[$iterator$] = function () {
	      return new OfEnumerator(this);
	    };
	
	    function OfEnumerator(p) {
	      this.i = -1;
	      this.s = p.s;
	      this.l = this.s.length;
	      this.fn = p.fn;
	    }
	    OfEnumerator.prototype.next = function () {
	     return ++this.i < this.l ?
	       { done: false, value: !this.fn ? this.s[this.i] : this.fn(this.s[this.i], this.i, this.s) } :
	       doneEnumerator;
	    };
	
	    return OfEnumerable;
	  }(Enumerable));
	
	  var enumerableOf = Enumerable.of = function (source, selector, thisArg) {
	    return new OfEnumerable(source, selector, thisArg);
	  };
	
	  var ToArrayObservable = (function(__super__) {
	    inherits(ToArrayObservable, __super__);
	    function ToArrayObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    ToArrayObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new InnerObserver(o));
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o) {
	      this.o = o;
	      this.a = [];
	      AbstractObserver.call(this);
	    }
	    
	    InnerObserver.prototype.next = function (x) { this.a.push(x); };
	    InnerObserver.prototype.error = function (e) { this.o.onError(e);  };
	    InnerObserver.prototype.completed = function () { this.o.onNext(this.a); this.o.onCompleted(); };
	
	    return ToArrayObservable;
	  }(ObservableBase));
	
	  /**
	  * Creates an array from an observable sequence.
	  * @returns {Observable} An observable sequence containing a single element with a list containing all the elements of the source sequence.
	  */
	  observableProto.toArray = function () {
	    return new ToArrayObservable(this);
	  };
	
	  /**
	   *  Creates an observable sequence from a specified subscribe method implementation.
	   * @example
	   *  var res = Rx.Observable.create(function (observer) { return function () { } );
	   *  var res = Rx.Observable.create(function (observer) { return Rx.Disposable.empty; } );
	   *  var res = Rx.Observable.create(function (observer) { } );
	   * @param {Function} subscribe Implementation of the resulting observable sequence's subscribe method, returning a function that will be wrapped in a Disposable.
	   * @returns {Observable} The observable sequence with the specified implementation for the Subscribe method.
	   */
	  Observable.create = function (subscribe, parent) {
	    return new AnonymousObservable(subscribe, parent);
	  };
	
	  var Defer = (function(__super__) {
	    inherits(Defer, __super__);
	    function Defer(factory) {
	      this._f = factory;
	      __super__.call(this);
	    }
	
	    Defer.prototype.subscribeCore = function (o) {
	      var result = tryCatch(this._f)();
	      if (result === errorObj) { return observableThrow(result.e).subscribe(o);}
	      isPromise(result) && (result = observableFromPromise(result));
	      return result.subscribe(o);
	    };
	
	    return Defer;
	  }(ObservableBase));
	
	  /**
	   *  Returns an observable sequence that invokes the specified factory function whenever a new observer subscribes.
	   *
	   * @example
	   *  var res = Rx.Observable.defer(function () { return Rx.Observable.fromArray([1,2,3]); });
	   * @param {Function} observableFactory Observable factory function to invoke for each observer that subscribes to the resulting sequence or Promise.
	   * @returns {Observable} An observable sequence whose observers trigger an invocation of the given observable factory function.
	   */
	  var observableDefer = Observable.defer = function (observableFactory) {
	    return new Defer(observableFactory);
	  };
	
	  var EmptyObservable = (function(__super__) {
	    inherits(EmptyObservable, __super__);
	    function EmptyObservable(scheduler) {
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    EmptyObservable.prototype.subscribeCore = function (observer) {
	      var sink = new EmptySink(observer, this.scheduler);
	      return sink.run();
	    };
	
	    function EmptySink(observer, scheduler) {
	      this.observer = observer;
	      this.scheduler = scheduler;
	    }
	
	    function scheduleItem(s, state) {
	      state.onCompleted();
	      return disposableEmpty;
	    }
	
	    EmptySink.prototype.run = function () {
	      var state = this.observer;
	      return this.scheduler === immediateScheduler ?
	        scheduleItem(null, state) :
	        this.scheduler.schedule(state, scheduleItem);
	    };
	
	    return EmptyObservable;
	  }(ObservableBase));
	
	  var EMPTY_OBSERVABLE = new EmptyObservable(immediateScheduler);
	
	  /**
	   *  Returns an empty observable sequence, using the specified scheduler to send out the single OnCompleted message.
	   *
	   * @example
	   *  var res = Rx.Observable.empty();
	   *  var res = Rx.Observable.empty(Rx.Scheduler.timeout);
	   * @param {Scheduler} [scheduler] Scheduler to send the termination call on.
	   * @returns {Observable} An observable sequence with no elements.
	   */
	  var observableEmpty = Observable.empty = function (scheduler) {
	    isScheduler(scheduler) || (scheduler = immediateScheduler);
	    return scheduler === immediateScheduler ? EMPTY_OBSERVABLE : new EmptyObservable(scheduler);
	  };
	
	  var FromObservable = (function(__super__) {
	    inherits(FromObservable, __super__);
	    function FromObservable(iterable, mapper, scheduler) {
	      this.iterable = iterable;
	      this.mapper = mapper;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    FromObservable.prototype.subscribeCore = function (o) {
	      var sink = new FromSink(o, this);
	      return sink.run();
	    };
	
	    return FromObservable;
	  }(ObservableBase));
	
	  var FromSink = (function () {
	    function FromSink(o, parent) {
	      this.o = o;
	      this.parent = parent;
	    }
	
	    FromSink.prototype.run = function () {
	      var list = Object(this.parent.iterable),
	          it = getIterable(list),
	          o = this.o,
	          mapper = this.parent.mapper;
	
	      function loopRecursive(i, recurse) {
	        var next = tryCatch(it.next).call(it);
	        if (next === errorObj) { return o.onError(next.e); }
	        if (next.done) { return o.onCompleted(); }
	
	        var result = next.value;
	
	        if (isFunction(mapper)) {
	          result = tryCatch(mapper)(result, i);
	          if (result === errorObj) { return o.onError(result.e); }
	        }
	
	        o.onNext(result);
	        recurse(i + 1);
	      }
	
	      return this.parent.scheduler.scheduleRecursive(0, loopRecursive);
	    };
	
	    return FromSink;
	  }());
	
	  var maxSafeInteger = Math.pow(2, 53) - 1;
	
	  function StringIterable(s) {
	    this._s = s;
	  }
	
	  StringIterable.prototype[$iterator$] = function () {
	    return new StringIterator(this._s);
	  };
	
	  function StringIterator(s) {
	    this._s = s;
	    this._l = s.length;
	    this._i = 0;
	  }
	
	  StringIterator.prototype[$iterator$] = function () {
	    return this;
	  };
	
	  StringIterator.prototype.next = function () {
	    return this._i < this._l ? { done: false, value: this._s.charAt(this._i++) } : doneEnumerator;
	  };
	
	  function ArrayIterable(a) {
	    this._a = a;
	  }
	
	  ArrayIterable.prototype[$iterator$] = function () {
	    return new ArrayIterator(this._a);
	  };
	
	  function ArrayIterator(a) {
	    this._a = a;
	    this._l = toLength(a);
	    this._i = 0;
	  }
	
	  ArrayIterator.prototype[$iterator$] = function () {
	    return this;
	  };
	
	  ArrayIterator.prototype.next = function () {
	    return this._i < this._l ? { done: false, value: this._a[this._i++] } : doneEnumerator;
	  };
	
	  function numberIsFinite(value) {
	    return typeof value === 'number' && root.isFinite(value);
	  }
	
	  function isNan(n) {
	    return n !== n;
	  }
	
	  function getIterable(o) {
	    var i = o[$iterator$], it;
	    if (!i && typeof o === 'string') {
	      it = new StringIterable(o);
	      return it[$iterator$]();
	    }
	    if (!i && o.length !== undefined) {
	      it = new ArrayIterable(o);
	      return it[$iterator$]();
	    }
	    if (!i) { throw new TypeError('Object is not iterable'); }
	    return o[$iterator$]();
	  }
	
	  function sign(value) {
	    var number = +value;
	    if (number === 0) { return number; }
	    if (isNaN(number)) { return number; }
	    return number < 0 ? -1 : 1;
	  }
	
	  function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) { return 0; }
	    if (len === 0 || !numberIsFinite(len)) { return len; }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) { return 0; }
	    if (len > maxSafeInteger) { return maxSafeInteger; }
	    return len;
	  }
	
	  /**
	  * This method creates a new Observable sequence from an array-like or iterable object.
	  * @param {Any} arrayLike An array-like or iterable object to convert to an Observable sequence.
	  * @param {Function} [mapFn] Map function to call on every element of the array.
	  * @param {Any} [thisArg] The context to use calling the mapFn if provided.
	  * @param {Scheduler} [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
	  */
	  var observableFrom = Observable.from = function (iterable, mapFn, thisArg, scheduler) {
	    if (iterable == null) {
	      throw new Error('iterable cannot be null.')
	    }
	    if (mapFn && !isFunction(mapFn)) {
	      throw new Error('mapFn when provided must be a function');
	    }
	    if (mapFn) {
	      var mapper = bindCallback(mapFn, thisArg, 2);
	    }
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new FromObservable(iterable, mapper, scheduler);
	  }
	
	  var FromArrayObservable = (function(__super__) {
	    inherits(FromArrayObservable, __super__);
	    function FromArrayObservable(args, scheduler) {
	      this.args = args;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    FromArrayObservable.prototype.subscribeCore = function (observer) {
	      var sink = new FromArraySink(observer, this);
	      return sink.run();
	    };
	
	    return FromArrayObservable;
	  }(ObservableBase));
	
	  function FromArraySink(observer, parent) {
	    this.observer = observer;
	    this.parent = parent;
	  }
	
	  function loopRecursive(args, observer) {
	    var len = args.length;
	    return function loop (i, recurse) {
	      if (i < len) {
	        observer.onNext(args[i]);
	        recurse(i + 1);
	      } else {
	        observer.onCompleted();
	      }
	    };
	  }
	
	  FromArraySink.prototype.run = function () {
	    return this.parent.scheduler.scheduleRecursive(0, loopRecursive(this.parent.args, this.observer));
	  };
	
	  /**
	  *  Converts an array to an observable sequence, using an optional scheduler to enumerate the array.
	  * @deprecated use Observable.from or Observable.of
	  * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given enumerable sequence.
	  */
	  var observableFromArray = Observable.fromArray = function (array, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new FromArrayObservable(array, scheduler)
	  };
	
	  var NeverObservable = (function(__super__) {
	    inherits(NeverObservable, __super__);
	    function NeverObservable() {
	      __super__.call(this);
	    }
	
	    NeverObservable.prototype.subscribeCore = function (observer) {
	      return disposableEmpty;
	    };
	
	    return NeverObservable;
	  }(ObservableBase));
	
	  var NEVER_OBSERVABLE = new NeverObservable();
	
	  /**
	   * Returns a non-terminating observable sequence, which can be used to denote an infinite duration (e.g. when using reactive joins).
	   * @returns {Observable} An observable sequence whose observers will never get called.
	   */
	  var observableNever = Observable.never = function () {
	    return NEVER_OBSERVABLE;
	  };
	
	  function observableOf (scheduler, array) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new FromArrayObservable(array, scheduler);
	  }
	
	  /**
	  *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
	  */
	  Observable.of = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return new FromArrayObservable(args, currentThreadScheduler);
	  };
	
	  /**
	  *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
	  * @param {Scheduler} scheduler A scheduler to use for scheduling the arguments.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
	  */
	  Observable.ofWithScheduler = function (scheduler) {
	    var len = arguments.length, args = new Array(len - 1);
	    for(var i = 1; i < len; i++) { args[i - 1] = arguments[i]; }
	    return new FromArrayObservable(args, scheduler);
	  };
	
	  var PairsObservable = (function(__super__) {
	    inherits(PairsObservable, __super__);
	    function PairsObservable(obj, scheduler) {
	      this.obj = obj;
	      this.keys = Object.keys(obj);
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    PairsObservable.prototype.subscribeCore = function (observer) {
	      var sink = new PairsSink(observer, this);
	      return sink.run();
	    };
	
	    return PairsObservable;
	  }(ObservableBase));
	
	  function PairsSink(observer, parent) {
	    this.observer = observer;
	    this.parent = parent;
	  }
	
	  PairsSink.prototype.run = function () {
	    var observer = this.observer, obj = this.parent.obj, keys = this.parent.keys, len = keys.length;
	    function loopRecursive(i, recurse) {
	      if (i < len) {
	        var key = keys[i];
	        observer.onNext([key, obj[key]]);
	        recurse(i + 1);
	      } else {
	        observer.onCompleted();
	      }
	    }
	
	    return this.parent.scheduler.scheduleRecursive(0, loopRecursive);
	  };
	
	  /**
	   * Convert an object into an observable sequence of [key, value] pairs.
	   * @param {Object} obj The object to inspect.
	   * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
	   * @returns {Observable} An observable sequence of [key, value] pairs from the object.
	   */
	  Observable.pairs = function (obj, scheduler) {
	    scheduler || (scheduler = currentThreadScheduler);
	    return new PairsObservable(obj, scheduler);
	  };
	
	    var RangeObservable = (function(__super__) {
	    inherits(RangeObservable, __super__);
	    function RangeObservable(start, count, scheduler) {
	      this.start = start;
	      this.rangeCount = count;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    RangeObservable.prototype.subscribeCore = function (observer) {
	      var sink = new RangeSink(observer, this);
	      return sink.run();
	    };
	
	    return RangeObservable;
	  }(ObservableBase));
	
	  var RangeSink = (function () {
	    function RangeSink(observer, parent) {
	      this.observer = observer;
	      this.parent = parent;
	    }
	
	    function loopRecursive(start, count, observer) {
	      return function loop (i, recurse) {
	        if (i < count) {
	          observer.onNext(start + i);
	          recurse(i + 1);
	        } else {
	          observer.onCompleted();
	        }
	      };
	    }
	
	    RangeSink.prototype.run = function () {
	      return this.parent.scheduler.scheduleRecursive(
	        0,
	        loopRecursive(this.parent.start, this.parent.rangeCount, this.observer)
	      );
	    };
	
	    return RangeSink;
	  }());
	
	  /**
	  *  Generates an observable sequence of integral numbers within a specified range, using the specified scheduler to send out observer messages.
	  * @param {Number} start The value of the first integer in the sequence.
	  * @param {Number} count The number of sequential integers to generate.
	  * @param {Scheduler} [scheduler] Scheduler to run the generator loop on. If not specified, defaults to Scheduler.currentThread.
	  * @returns {Observable} An observable sequence that contains a range of sequential integral numbers.
	  */
	  Observable.range = function (start, count, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new RangeObservable(start, count, scheduler);
	  };
	
	  var RepeatObservable = (function(__super__) {
	    inherits(RepeatObservable, __super__);
	    function RepeatObservable(value, repeatCount, scheduler) {
	      this.value = value;
	      this.repeatCount = repeatCount == null ? -1 : repeatCount;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    RepeatObservable.prototype.subscribeCore = function (observer) {
	      var sink = new RepeatSink(observer, this);
	      return sink.run();
	    };
	
	    return RepeatObservable;
	  }(ObservableBase));
	
	  function RepeatSink(observer, parent) {
	    this.observer = observer;
	    this.parent = parent;
	  }
	
	  RepeatSink.prototype.run = function () {
	    var observer = this.observer, value = this.parent.value;
	    function loopRecursive(i, recurse) {
	      if (i === -1 || i > 0) {
	        observer.onNext(value);
	        i > 0 && i--;
	      }
	      if (i === 0) { return observer.onCompleted(); }
	      recurse(i);
	    }
	
	    return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount, loopRecursive);
	  };
	
	  /**
	   *  Generates an observable sequence that repeats the given element the specified number of times, using the specified scheduler to send out observer messages.
	   * @param {Mixed} value Element to repeat.
	   * @param {Number} repeatCount [Optiona] Number of times to repeat the element. If not specified, repeats indefinitely.
	   * @param {Scheduler} scheduler Scheduler to run the producer loop on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} An observable sequence that repeats the given element the specified number of times.
	   */
	  Observable.repeat = function (value, repeatCount, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new RepeatObservable(value, repeatCount, scheduler);
	  };
	
	  var JustObservable = (function(__super__) {
	    inherits(JustObservable, __super__);
	    function JustObservable(value, scheduler) {
	      this.value = value;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    JustObservable.prototype.subscribeCore = function (observer) {
	      var sink = new JustSink(observer, this.value, this.scheduler);
	      return sink.run();
	    };
	
	    function JustSink(observer, value, scheduler) {
	      this.observer = observer;
	      this.value = value;
	      this.scheduler = scheduler;
	    }
	
	    function scheduleItem(s, state) {
	      var value = state[0], observer = state[1];
	      observer.onNext(value);
	      observer.onCompleted();
	      return disposableEmpty;
	    }
	
	    JustSink.prototype.run = function () {
	      var state = [this.value, this.observer];
	      return this.scheduler === immediateScheduler ?
	        scheduleItem(null, state) :
	        this.scheduler.schedule(state, scheduleItem);
	    };
	
	    return JustObservable;
	  }(ObservableBase));
	
	  /**
	   *  Returns an observable sequence that contains a single element, using the specified scheduler to send out observer messages.
	   *  There is an alias called 'just' or browsers <IE9.
	   * @param {Mixed} value Single element in the resulting observable sequence.
	   * @param {Scheduler} scheduler Scheduler to send the single element on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} An observable sequence containing the single specified element.
	   */
	  var observableReturn = Observable['return'] = Observable.just = function (value, scheduler) {
	    isScheduler(scheduler) || (scheduler = immediateScheduler);
	    return new JustObservable(value, scheduler);
	  };
	
	  var ThrowObservable = (function(__super__) {
	    inherits(ThrowObservable, __super__);
	    function ThrowObservable(error, scheduler) {
	      this.error = error;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    ThrowObservable.prototype.subscribeCore = function (o) {
	      var sink = new ThrowSink(o, this);
	      return sink.run();
	    };
	
	    function ThrowSink(o, p) {
	      this.o = o;
	      this.p = p;
	    }
	
	    function scheduleItem(s, state) {
	      var e = state[0], o = state[1];
	      o.onError(e);
	    }
	
	    ThrowSink.prototype.run = function () {
	      return this.p.scheduler.schedule([this.p.error, this.o], scheduleItem);
	    };
	
	    return ThrowObservable;
	  }(ObservableBase));
	
	  /**
	   *  Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.
	   *  There is an alias to this method called 'throwError' for browsers <IE9.
	   * @param {Mixed} error An object used for the sequence's termination.
	   * @param {Scheduler} scheduler Scheduler to send the exceptional termination call on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} The observable sequence that terminates exceptionally with the specified exception object.
	   */
	  var observableThrow = Observable['throw'] = function (error, scheduler) {
	    isScheduler(scheduler) || (scheduler = immediateScheduler);
	    return new ThrowObservable(error, scheduler);
	  };
	
	  var CatchObservable = (function (__super__) {
	    inherits(CatchObservable, __super__);
	    function CatchObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    CatchObservable.prototype.subscribeCore = function (o) {
	      var d1 = new SingleAssignmentDisposable(), subscription = new SerialDisposable();
	      subscription.setDisposable(d1);
	      d1.setDisposable(this.source.subscribe(new CatchObserver(o, subscription, this._fn)));
	      return subscription;
	    };
	
	    return CatchObservable;
	  }(ObservableBase));
	
	  var CatchObserver = (function(__super__) {
	    inherits(CatchObserver, __super__);
	    function CatchObserver(o, s, fn) {
	      this._o = o;
	      this._s = s;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    CatchObserver.prototype.next = function (x) { this._o.onNext(x); };
	    CatchObserver.prototype.completed = function () { return this._o.onCompleted(); };
	    CatchObserver.prototype.error = function (e) {
	      var result = tryCatch(this._fn)(e);
	      if (result === errorObj) { return this._o.onError(result.e); }
	      isPromise(result) && (result = observableFromPromise(result));
	
	      var d = new SingleAssignmentDisposable();
	      this._s.setDisposable(d);
	      d.setDisposable(result.subscribe(this._o));
	    };
	
	    return CatchObserver;
	  }(AbstractObserver));
	
	  /**
	   * Continues an observable sequence that is terminated by an exception with the next observable sequence.
	   * @param {Mixed} handlerOrSecond Exception handler function that returns an observable sequence given the error that occurred in the first sequence, or a second observable sequence used to produce results when an error occurred in the first sequence.
	   * @returns {Observable} An observable sequence containing the first sequence's elements, followed by the elements of the handler sequence in case an exception occurred.
	   */
	  observableProto['catch'] = function (handlerOrSecond) {
	    return isFunction(handlerOrSecond) ? new CatchObservable(this, handlerOrSecond) : observableCatch([this, handlerOrSecond]);
	  };
	
	  /**
	   * Continues an observable sequence that is terminated by an exception with the next observable sequence.
	   * @param {Array | Arguments} args Arguments or an array to use as the next sequence if an error occurs.
	   * @returns {Observable} An observable sequence containing elements from consecutive source sequences until a source sequence terminates successfully.
	   */
	  var observableCatch = Observable['catch'] = function () {
	    var items;
	    if (Array.isArray(arguments[0])) {
	      items = arguments[0];
	    } else {
	      var len = arguments.length;
	      items = new Array(len);
	      for(var i = 0; i < len; i++) { items[i] = arguments[i]; }
	    }
	    return enumerableOf(items).catchError();
	  };
	
	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
	   * This can be in the form of an argument list of observables or an array.
	   *
	   * @example
	   * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
	   * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */
	  observableProto.combineLatest = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    if (Array.isArray(args[0])) {
	      args[0].unshift(this);
	    } else {
	      args.unshift(this);
	    }
	    return combineLatest.apply(this, args);
	  };
	
	  function falseFactory() { return false; }
	  function argumentsToArray() {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return args;
	  }
	
	  var CombineLatestObservable = (function(__super__) {
	    inherits(CombineLatestObservable, __super__);
	    function CombineLatestObservable(params, cb) {
	      this._params = params;
	      this._cb = cb;
	      __super__.call(this);
	    }
	
	    CombineLatestObservable.prototype.subscribeCore = function(observer) {
	      var len = this._params.length,
	          subscriptions = new Array(len);
	
	      var state = {
	        hasValue: arrayInitialize(len, falseFactory),
	        hasValueAll: false,
	        isDone: arrayInitialize(len, falseFactory),
	        values: new Array(len)
	      };
	
	      for (var i = 0; i < len; i++) {
	        var source = this._params[i], sad = new SingleAssignmentDisposable();
	        subscriptions[i] = sad;
	        isPromise(source) && (source = observableFromPromise(source));
	        sad.setDisposable(source.subscribe(new CombineLatestObserver(observer, i, this._cb, state)));
	      }
	
	      return new NAryDisposable(subscriptions);
	    };
	
	    return CombineLatestObservable;
	  }(ObservableBase));
	
	  var CombineLatestObserver = (function (__super__) {
	    inherits(CombineLatestObserver, __super__);
	    function CombineLatestObserver(o, i, cb, state) {
	      this._o = o;
	      this._i = i;
	      this._cb = cb;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    function notTheSame(i) {
	      return function (x, j) {
	        return j !== i;
	      };
	    }
	
	    CombineLatestObserver.prototype.next = function (x) {
	      this._state.values[this._i] = x;
	      this._state.hasValue[this._i] = true;
	      if (this._state.hasValueAll || (this._state.hasValueAll = this._state.hasValue.every(identity))) {
	        var res = tryCatch(this._cb).apply(null, this._state.values);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        this._o.onNext(res);
	      } else if (this._state.isDone.filter(notTheSame(this._i)).every(identity)) {
	        this._o.onCompleted();
	      }
	    };
	
	    CombineLatestObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    CombineLatestObserver.prototype.completed = function () {
	      this._state.isDone[this._i] = true;
	      this._state.isDone.every(identity) && this._o.onCompleted();
	    };
	
	    return CombineLatestObserver;
	  }(AbstractObserver));
	
	  /**
	  * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
	  *
	  * @example
	  * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
	  * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
	  * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	  */
	  var combineLatest = Observable.combineLatest = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);
	    return new CombineLatestObservable(args, resultSelector);
	  };
	
	  /**
	   * Concatenates all the observable sequences.  This takes in either an array or variable arguments to concatenate.
	   * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
	   */
	  observableProto.concat = function () {
	    for(var args = [], i = 0, len = arguments.length; i < len; i++) { args.push(arguments[i]); }
	    args.unshift(this);
	    return observableConcat.apply(null, args);
	  };
	
	  var ConcatObservable = (function(__super__) {
	    inherits(ConcatObservable, __super__);
	    function ConcatObservable(sources) {
	      this.sources = sources;
	      __super__.call(this);
	    }
	
	    ConcatObservable.prototype.subscribeCore = function(o) {
	      var sink = new ConcatSink(this.sources, o);
	      return sink.run();
	    };
	
	    function ConcatSink(sources, o) {
	      this.sources = sources;
	      this.o = o;
	    }
	    ConcatSink.prototype.run = function () {
	      var isDisposed, subscription = new SerialDisposable(), sources = this.sources, length = sources.length, o = this.o;
	      var cancelable = immediateScheduler.scheduleRecursive(0, function (i, self) {
	        if (isDisposed) { return; }
	        if (i === length) {
	          return o.onCompleted();
	        }
	
	        // Check if promise
	        var currentValue = sources[i];
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
	
	        var d = new SingleAssignmentDisposable();
	        subscription.setDisposable(d);
	        d.setDisposable(currentValue.subscribe(
	          function (x) { o.onNext(x); },
	          function (e) { o.onError(e); },
	          function () { self(i + 1); }
	        ));
	      });
	
	      return new CompositeDisposable(subscription, cancelable, disposableCreate(function () {
	        isDisposed = true;
	      }));
	    };
	
	
	    return ConcatObservable;
	  }(ObservableBase));
	
	  /**
	   * Concatenates all the observable sequences.
	   * @param {Array | Arguments} args Arguments or an array to concat to the observable sequence.
	   * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
	   */
	  var observableConcat = Observable.concat = function () {
	    var args;
	    if (Array.isArray(arguments[0])) {
	      args = arguments[0];
	    } else {
	      args = new Array(arguments.length);
	      for(var i = 0, len = arguments.length; i < len; i++) { args[i] = arguments[i]; }
	    }
	    return new ConcatObservable(args);
	  };
	
	  /**
	   * Concatenates an observable sequence of observable sequences.
	   * @returns {Observable} An observable sequence that contains the elements of each observed inner sequence, in sequential order.
	   */
	  observableProto.concatAll = function () {
	    return this.merge(1);
	  };
	
	  var MergeObservable = (function (__super__) {
	    inherits(MergeObservable, __super__);
	
	    function MergeObservable(source, maxConcurrent) {
	      this.source = source;
	      this.maxConcurrent = maxConcurrent;
	      __super__.call(this);
	    }
	
	    MergeObservable.prototype.subscribeCore = function(observer) {
	      var g = new CompositeDisposable();
	      g.add(this.source.subscribe(new MergeObserver(observer, this.maxConcurrent, g)));
	      return g;
	    };
	
	    return MergeObservable;
	
	  }(ObservableBase));
	
	  var MergeObserver = (function () {
	    function MergeObserver(o, max, g) {
	      this.o = o;
	      this.max = max;
	      this.g = g;
	      this.done = false;
	      this.q = [];
	      this.activeCount = 0;
	      this.isStopped = false;
	    }
	    MergeObserver.prototype.handleSubscribe = function (xs) {
	      var sad = new SingleAssignmentDisposable();
	      this.g.add(sad);
	      isPromise(xs) && (xs = observableFromPromise(xs));
	      sad.setDisposable(xs.subscribe(new InnerObserver(this, sad)));
	    };
	    MergeObserver.prototype.onNext = function (innerSource) {
	      if (this.isStopped) { return; }
	        if(this.activeCount < this.max) {
	          this.activeCount++;
	          this.handleSubscribe(innerSource);
	        } else {
	          this.q.push(innerSource);
	        }
	      };
	      MergeObserver.prototype.onError = function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onError(e);
	        }
	      };
	      MergeObserver.prototype.onCompleted = function () {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.done = true;
	          this.activeCount === 0 && this.o.onCompleted();
	        }
	      };
	      MergeObserver.prototype.dispose = function() { this.isStopped = true; };
	      MergeObserver.prototype.fail = function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onError(e);
	          return true;
	        }
	
	        return false;
	      };
	
	      function InnerObserver(parent, sad) {
	        this.parent = parent;
	        this.sad = sad;
	        this.isStopped = false;
	      }
	      InnerObserver.prototype.onNext = function (x) { if(!this.isStopped) { this.parent.o.onNext(x); } };
	      InnerObserver.prototype.onError = function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.parent.o.onError(e);
	        }
	      };
	      InnerObserver.prototype.onCompleted = function () {
	        if(!this.isStopped) {
	          this.isStopped = true;
	          var parent = this.parent;
	          parent.g.remove(this.sad);
	          if (parent.q.length > 0) {
	            parent.handleSubscribe(parent.q.shift());
	          } else {
	            parent.activeCount--;
	            parent.done && parent.activeCount === 0 && parent.o.onCompleted();
	          }
	        }
	      };
	      InnerObserver.prototype.dispose = function() { this.isStopped = true; };
	      InnerObserver.prototype.fail = function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.parent.o.onError(e);
	          return true;
	        }
	
	        return false;
	      };
	
	      return MergeObserver;
	  }());
	
	
	
	
	
	  /**
	  * Merges an observable sequence of observable sequences into an observable sequence, limiting the number of concurrent subscriptions to inner sequences.
	  * Or merges two observable sequences into a single observable sequence.
	  *
	  * @example
	  * 1 - merged = sources.merge(1);
	  * 2 - merged = source.merge(otherSource);
	  * @param {Mixed} [maxConcurrentOrOther] Maximum number of inner observable sequences being subscribed to concurrently or the second observable sequence.
	  * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
	  */
	  observableProto.merge = function (maxConcurrentOrOther) {
	    return typeof maxConcurrentOrOther !== 'number' ?
	      observableMerge(this, maxConcurrentOrOther) :
	      new MergeObservable(this, maxConcurrentOrOther);
	  };
	
	  /**
	   * Merges all the observable sequences into a single observable sequence.
	   * The scheduler is optional and if not specified, the immediate scheduler is used.
	   * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
	   */
	  var observableMerge = Observable.merge = function () {
	    var scheduler, sources = [], i, len = arguments.length;
	    if (!arguments[0]) {
	      scheduler = immediateScheduler;
	      for(i = 1; i < len; i++) { sources.push(arguments[i]); }
	    } else if (isScheduler(arguments[0])) {
	      scheduler = arguments[0];
	      for(i = 1; i < len; i++) { sources.push(arguments[i]); }
	    } else {
	      scheduler = immediateScheduler;
	      for(i = 0; i < len; i++) { sources.push(arguments[i]); }
	    }
	    if (Array.isArray(sources[0])) {
	      sources = sources[0];
	    }
	    return observableOf(scheduler, sources).mergeAll();
	  };
	
	  var CompositeError = Rx.CompositeError = function(errors) {
	    this.innerErrors = errors;
	    this.message = 'This contains multiple errors. Check the innerErrors';
	    Error.call(this);
	  };
	  CompositeError.prototype = Object.create(Error.prototype);
	  CompositeError.prototype.name = 'CompositeError';
	
	  var MergeDelayErrorObservable = (function(__super__) {
	    inherits(MergeDelayErrorObservable, __super__);
	    function MergeDelayErrorObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    MergeDelayErrorObservable.prototype.subscribeCore = function (o) {
	      var group = new CompositeDisposable(),
	        m = new SingleAssignmentDisposable(),
	        state = { isStopped: false, errors: [], o: o };
	
	      group.add(m);
	      m.setDisposable(this.source.subscribe(new MergeDelayErrorObserver(group, state)));
	
	      return group;
	    };
	
	    return MergeDelayErrorObservable;
	  }(ObservableBase));
	
	  var MergeDelayErrorObserver = (function(__super__) {
	    inherits(MergeDelayErrorObserver, __super__);
	    function MergeDelayErrorObserver(group, state) {
	      this._group = group;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    function setCompletion(o, errors) {
	      if (errors.length === 0) {
	        o.onCompleted();
	      } else if (errors.length === 1) {
	        o.onError(errors[0]);
	      } else {
	        o.onError(new CompositeError(errors));
	      }
	    }
	
	    MergeDelayErrorObserver.prototype.next = function (x) {
	      var inner = new SingleAssignmentDisposable();
	      this._group.add(inner);
	
	      // Check for promises support
	      isPromise(x) && (x = observableFromPromise(x));
	      inner.setDisposable(x.subscribe(new InnerObserver(inner, this._group, this._state)));
	    };
	
	    MergeDelayErrorObserver.prototype.error = function (e) {
	      this._state.errors.push(e);
	      this._state.isStopped = true;
	      this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };
	
	    MergeDelayErrorObserver.prototype.completed = function () {
	      this._state.isStopped = true;
	      this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };
	
	    inherits(InnerObserver, __super__);
	    function InnerObserver(inner, group, state) {
	      this._inner = inner;
	      this._group = group;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    InnerObserver.prototype.next = function (x) { this._state.o.onNext(x); };
	    InnerObserver.prototype.error = function (e) {
	      this._state.errors.push(e);
	      this._group.remove(this._inner);
	      this._state.isStopped && this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };
	    InnerObserver.prototype.completed = function () {
	      this._group.remove(this._inner);
	      this._state.isStopped && this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };
	
	    return MergeDelayErrorObserver;
	  }(AbstractObserver));
	
	  /**
	  * Flattens an Observable that emits Observables into one Observable, in a way that allows an Observer to
	  * receive all successfully emitted items from all of the source Observables without being interrupted by
	  * an error notification from one of them.
	  *
	  * This behaves like Observable.prototype.mergeAll except that if any of the merged Observables notify of an
	  * error via the Observer's onError, mergeDelayError will refrain from propagating that
	  * error notification until all of the merged Observables have finished emitting items.
	  * @param {Array | Arguments} args Arguments or an array to merge.
	  * @returns {Observable} an Observable that emits all of the items emitted by the Observables emitted by the Observable
	  */
	  Observable.mergeDelayError = function() {
	    var args;
	    if (Array.isArray(arguments[0])) {
	      args = arguments[0];
	    } else {
	      var len = arguments.length;
	      args = new Array(len);
	      for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    }
	    var source = observableOf(null, args);
	    return new MergeDelayErrorObservable(source);
	  };
	
	  var MergeAllObservable = (function (__super__) {
	    inherits(MergeAllObservable, __super__);
	
	    function MergeAllObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    MergeAllObservable.prototype.subscribeCore = function (observer) {
	      var g = new CompositeDisposable(), m = new SingleAssignmentDisposable();
	      g.add(m);
	      m.setDisposable(this.source.subscribe(new MergeAllObserver(observer, g)));
	      return g;
	    };
	
	    function MergeAllObserver(o, g) {
	      this.o = o;
	      this.g = g;
	      this.isStopped = false;
	      this.done = false;
	    }
	    MergeAllObserver.prototype.onNext = function(innerSource) {
	      if(this.isStopped) { return; }
	      var sad = new SingleAssignmentDisposable();
	      this.g.add(sad);
	
	      isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
	
	      sad.setDisposable(innerSource.subscribe(new InnerObserver(this, sad)));
	    };
	    MergeAllObserver.prototype.onError = function (e) {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.o.onError(e);
	      }
	    };
	    MergeAllObserver.prototype.onCompleted = function () {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.done = true;
	        this.g.length === 1 && this.o.onCompleted();
	      }
	    };
	    MergeAllObserver.prototype.dispose = function() { this.isStopped = true; };
	    MergeAllObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.o.onError(e);
	        return true;
	      }
	
	      return false;
	    };
	
	    function InnerObserver(parent, sad) {
	      this.parent = parent;
	      this.sad = sad;
	      this.isStopped = false;
	    }
	    InnerObserver.prototype.onNext = function (x) { if (!this.isStopped) { this.parent.o.onNext(x); } };
	    InnerObserver.prototype.onError = function (e) {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.parent.o.onError(e);
	      }
	    };
	    InnerObserver.prototype.onCompleted = function () {
	      if(!this.isStopped) {
	        var parent = this.parent;
	        this.isStopped = true;
	        parent.g.remove(this.sad);
	        parent.done && parent.g.length === 1 && parent.o.onCompleted();
	      }
	    };
	    InnerObserver.prototype.dispose = function() { this.isStopped = true; };
	    InnerObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.parent.o.onError(e);
	        return true;
	      }
	
	      return false;
	    };
	
	    return MergeAllObservable;
	  }(ObservableBase));
	
	  /**
	  * Merges an observable sequence of observable sequences into an observable sequence.
	  * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
	  */
	  observableProto.mergeAll = function () {
	    return new MergeAllObservable(this);
	  };
	
	  var SkipUntilObservable = (function(__super__) {
	    inherits(SkipUntilObservable, __super__);
	
	    function SkipUntilObservable(source, other) {
	      this._s = source;
	      this._o = isPromise(other) ? observableFromPromise(other) : other;
	      this._open = false;
	      __super__.call(this);
	    }
	
	    SkipUntilObservable.prototype.subscribeCore = function(o) {
	      var leftSubscription = new SingleAssignmentDisposable();
	      leftSubscription.setDisposable(this._s.subscribe(new SkipUntilSourceObserver(o, this)));
	
	      isPromise(this._o) && (this._o = observableFromPromise(this._o));
	
	      var rightSubscription = new SingleAssignmentDisposable();
	      rightSubscription.setDisposable(this._o.subscribe(new SkipUntilOtherObserver(o, this, rightSubscription)));
	
	      return new BinaryDisposable(leftSubscription, rightSubscription);
	    };
	
	    return SkipUntilObservable;
	  }(ObservableBase));
	
	  var SkipUntilSourceObserver = (function(__super__) {
	    inherits(SkipUntilSourceObserver, __super__);
	    function SkipUntilSourceObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      __super__.call(this);
	    }
	
	    SkipUntilSourceObserver.prototype.next = function (x) {
	      this._p._open && this._o.onNext(x);
	    };
	
	    SkipUntilSourceObserver.prototype.error = function (err) {
	      this._o.onError(err);
	    };
	
	    SkipUntilSourceObserver.prototype.onCompleted = function () {
	      this._p._open && this._o.onCompleted();
	    };
	
	    return SkipUntilSourceObserver;
	  }(AbstractObserver));
	
	  var SkipUntilOtherObserver = (function(__super__) {
	    inherits(SkipUntilOtherObserver, __super__);
	    function SkipUntilOtherObserver(o, p, r) {
	      this._o = o;
	      this._p = p;
	      this._r = r;
	      __super__.call(this);
	    }
	
	    SkipUntilOtherObserver.prototype.next = function () {
	      this._p._open = true;
	      this._r.dispose();
	    };
	
	    SkipUntilOtherObserver.prototype.error = function (err) {
	      this._o.onError(err);
	    };
	
	    SkipUntilOtherObserver.prototype.onCompleted = function () {
	      this._r.dispose();
	    };
	
	    return SkipUntilOtherObserver;
	  }(AbstractObserver));
	
	  /**
	   * Returns the values from the source observable sequence only after the other observable sequence produces a value.
	   * @param {Observable | Promise} other The observable sequence or Promise that triggers propagation of elements of the source sequence.
	   * @returns {Observable} An observable sequence containing the elements of the source sequence starting from the point the other sequence triggered propagation.
	   */
	  observableProto.skipUntil = function (other) {
	    return new SkipUntilObservable(this, other);
	  };
	
	  var SwitchObservable = (function(__super__) {
	    inherits(SwitchObservable, __super__);
	    function SwitchObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    SwitchObservable.prototype.subscribeCore = function (o) {
	      var inner = new SerialDisposable(), s = this.source.subscribe(new SwitchObserver(o, inner));
	      return new BinaryDisposable(s, inner);
	    };
	
	    inherits(SwitchObserver, AbstractObserver);
	    function SwitchObserver(o, inner) {
	      this.o = o;
	      this.inner = inner;
	      this.stopped = false;
	      this.latest = 0;
	      this.hasLatest = false;
	      AbstractObserver.call(this);
	    }
	
	    SwitchObserver.prototype.next = function (innerSource) {
	      var d = new SingleAssignmentDisposable(), id = ++this.latest;
	      this.hasLatest = true;
	      this.inner.setDisposable(d);
	      isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
	      d.setDisposable(innerSource.subscribe(new InnerObserver(this, id)));
	    };
	
	    SwitchObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };
	
	    SwitchObserver.prototype.completed = function () {
	      this.stopped = true;
	      !this.hasLatest && this.o.onCompleted();
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(parent, id) {
	      this.parent = parent;
	      this.id = id;
	      AbstractObserver.call(this);
	    }
	    InnerObserver.prototype.next = function (x) {
	      this.parent.latest === this.id && this.parent.o.onNext(x);
	    };
	
	    InnerObserver.prototype.error = function (e) {
	      this.parent.latest === this.id && this.parent.o.onError(e);
	    };
	
	    InnerObserver.prototype.completed = function () {
	      if (this.parent.latest === this.id) {
	        this.parent.hasLatest = false;
	        this.parent.isStopped && this.parent.o.onCompleted();
	      }
	    };
	
	    return SwitchObservable;
	  }(ObservableBase));
	
	  /**
	  * Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
	  * @returns {Observable} The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.
	  */
	  observableProto['switch'] = observableProto.switchLatest = function () {
	    return new SwitchObservable(this);
	  };
	
	  var TakeUntilObservable = (function(__super__) {
	    inherits(TakeUntilObservable, __super__);
	
	    function TakeUntilObservable(source, other) {
	      this.source = source;
	      this.other = isPromise(other) ? observableFromPromise(other) : other;
	      __super__.call(this);
	    }
	
	    TakeUntilObservable.prototype.subscribeCore = function(o) {
	      return new BinaryDisposable(
	        this.source.subscribe(o),
	        this.other.subscribe(new TakeUntilObserver(o))
	      );
	    };
	
	    return TakeUntilObservable;
	  }(ObservableBase));
	
	  var TakeUntilObserver = (function(__super__) {
	    inherits(TakeUntilObserver, __super__);
	    function TakeUntilObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }
	
	    TakeUntilObserver.prototype.next = function () {
	      this._o.onCompleted();
	    };
	
	    TakeUntilObserver.prototype.error = function (err) {
	      this._o.onError(err);
	    };
	
	    TakeUntilObserver.prototype.onCompleted = noop;
	
	    return TakeUntilObserver;
	  }(AbstractObserver));
	
	  /**
	   * Returns the values from the source observable sequence until the other observable sequence produces a value.
	   * @param {Observable | Promise} other Observable sequence or Promise that terminates propagation of elements of the source sequence.
	   * @returns {Observable} An observable sequence containing the elements of the source sequence up to the point the other sequence interrupted further propagation.
	   */
	  observableProto.takeUntil = function (other) {
	    return new TakeUntilObservable(this, other);
	  };
	
	  function falseFactory() { return false; }
	  function argumentsToArray() {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return args;
	  }
	
	  var WithLatestFromObservable = (function(__super__) {
	    inherits(WithLatestFromObservable, __super__);
	    function WithLatestFromObservable(source, sources, resultSelector) {
	      this._s = source;
	      this._ss = sources;
	      this._cb = resultSelector;
	      __super__.call(this);
	    }
	
	    WithLatestFromObservable.prototype.subscribeCore = function (o) {
	      var len = this._ss.length;
	      var state = {
	        hasValue: arrayInitialize(len, falseFactory),
	        hasValueAll: false,
	        values: new Array(len)
	      };
	
	      var n = this._ss.length, subscriptions = new Array(n + 1);
	      for (var i = 0; i < n; i++) {
	        var other = this._ss[i], sad = new SingleAssignmentDisposable();
	        isPromise(other) && (other = observableFromPromise(other));
	        sad.setDisposable(other.subscribe(new WithLatestFromOtherObserver(o, i, state)));
	        subscriptions[i] = sad;
	      }
	
	      var sad = new SingleAssignmentDisposable();
	      sad.setDisposable(this._s.subscribe(new WithLatestFromSourceObserver(o, this._cb, state)));
	      subscriptions[n] = sad;
	
	      return new NAryDisposable(subscriptions);
	    };
	
	    return WithLatestFromObservable;
	  }(ObservableBase));
	
	  var WithLatestFromOtherObserver = (function (__super__) {
	    inherits(WithLatestFromOtherObserver, __super__);
	    function WithLatestFromOtherObserver(o, i, state) {
	      this._o = o;
	      this._i = i;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    WithLatestFromOtherObserver.prototype.next = function (x) {
	      this._state.values[this._i] = x;
	      this._state.hasValue[this._i] = true;
	      this._state.hasValueAll = this._state.hasValue.every(identity);
	    };
	
	    WithLatestFromOtherObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    WithLatestFromOtherObserver.prototype.completed = noop;
	
	    return WithLatestFromOtherObserver;
	  }(AbstractObserver));
	
	  var WithLatestFromSourceObserver = (function (__super__) {
	    inherits(WithLatestFromSourceObserver, __super__);
	    function WithLatestFromSourceObserver(o, cb, state) {
	      this._o = o;
	      this._cb = cb;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    WithLatestFromSourceObserver.prototype.next = function (x) {
	      var allValues = [x].concat(this._state.values);
	      if (!this._state.hasValueAll) { return; }
	      var res = tryCatch(this._cb).apply(null, allValues);
	      if (res === errorObj) { return this._o.onError(res.e); }
	      this._o.onNext(res);
	    };
	
	    WithLatestFromSourceObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    WithLatestFromSourceObserver.prototype.completed = function () {
	      this._o.onCompleted();
	    };
	
	    return WithLatestFromSourceObserver;
	  }(AbstractObserver));
	
	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */
	  observableProto.withLatestFrom = function () {
	    if (arguments.length === 0) { throw new Error('invalid arguments'); }
	
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);
	
	    return new WithLatestFromObservable(this, args, resultSelector);
	  };
	
	  function falseFactory() { return false; }
	  function emptyArrayFactory() { return []; }
	
	  var ZipObservable = (function(__super__) {
	    inherits(ZipObservable, __super__);
	    function ZipObservable(sources, resultSelector) {
	      this._s = sources;
	      this._cb = resultSelector;
	      __super__.call(this);
	    }
	
	    ZipObservable.prototype.subscribeCore = function(observer) {
	      var n = this._s.length,
	          subscriptions = new Array(n);
	          done = arrayInitialize(n, falseFactory),
	          q = arrayInitialize(n, emptyArrayFactory);
	
	      for (var i = 0; i < n; i++) {
	        var source = this._s[i], sad = new SingleAssignmentDisposable();
	        subscriptions[i] = sad;
	        isPromise(source) && (source = observableFromPromise(source));
	        sad.setDisposable(source.subscribe(new ZipObserver(observer, i, this, q, done)));
	      }
	
	      return new NAryDisposable(subscriptions);
	    };
	
	    return ZipObservable;
	  }(ObservableBase));
	
	  var ZipObserver = (function (__super__) {
	    inherits(ZipObserver, __super__);
	    function ZipObserver(o, i, p, q, d) {
	      this._o = o;
	      this._i = i;
	      this._p = p;
	      this._q = q;
	      this._d = d;
	      __super__.call(this);
	    }
	
	    function notEmpty(x) { return x.length > 0; }
	    function shiftEach(x) { return x.shift(); }
	    function notTheSame(i) {
	      return function (x, j) {
	        return j !== i;
	      };
	    }
	
	    ZipObserver.prototype.next = function (x) {
	      this._q[this._i].push(x);
	      if (this._q.every(notEmpty)) {
	        var queuedValues = this._q.map(shiftEach);
	        var res = tryCatch(this._p._cb).apply(null, queuedValues);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        this._o.onNext(res);
	      } else if (this._d.filter(notTheSame(this._i)).every(identity)) {
	        this._o.onCompleted();
	      }
	    };
	
	    ZipObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    ZipObserver.prototype.completed = function () {
	      this._d[this._i] = true;
	      this._d.every(identity) && this._o.onCompleted();
	    };
	
	    return ZipObserver;
	  }(AbstractObserver));
	
	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
	   * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
	   */
	  observableProto.zip = function () {
	    if (arguments.length === 0) { throw new Error('invalid arguments'); }
	
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);
	
	    var parent = this;
	    args.unshift(parent);
	
	    return new ZipObservable(args, resultSelector);
	  };
	
	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
	   * @param arguments Observable sources.
	   * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */
	  Observable.zip = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    if (Array.isArray(args[0])) {
	      args = isFunction(args[1]) ? args[0].concat(args[1]) : args[0];
	    }
	    var first = args.shift();
	    return first.zip.apply(first, args);
	  };
	
	function falseFactory() { return false; }
	function emptyArrayFactory() { return []; }
	function argumentsToArray() {
	  var len = arguments.length, args = new Array(len);
	  for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	  return args;
	}
	
	/**
	 * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
	 * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
	 * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
	 */
	observableProto.zipIterable = function () {
	  if (arguments.length === 0) { throw new Error('invalid arguments'); }
	
	  var len = arguments.length, args = new Array(len);
	  for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	  var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	
	  var parent = this;
	  args.unshift(parent);
	  return new AnonymousObservable(function (o) {
	    var n = args.length,
	      queues = arrayInitialize(n, emptyArrayFactory),
	      isDone = arrayInitialize(n, falseFactory);
	
	    var subscriptions = new Array(n);
	    for (var idx = 0; idx < n; idx++) {
	      (function (i) {
	        var source = args[i], sad = new SingleAssignmentDisposable();
	
	        (isArrayLike(source) || isIterable(source)) && (source = observableFrom(source));
	
	        sad.setDisposable(source.subscribe(function (x) {
	          queues[i].push(x);
	          if (queues.every(function (x) { return x.length > 0; })) {
	            var queuedValues = queues.map(function (x) { return x.shift(); }),
	                res = tryCatch(resultSelector).apply(parent, queuedValues);
	            if (res === errorObj) { return o.onError(res.e); }
	            o.onNext(res);
	          } else if (isDone.filter(function (x, j) { return j !== i; }).every(identity)) {
	            o.onCompleted();
	          }
	        }, function (e) { o.onError(e); }, function () {
	          isDone[i] = true;
	          isDone.every(identity) && o.onCompleted();
	        }));
	        subscriptions[i] = sad;
	      })(idx);
	    }
	
	    return new CompositeDisposable(subscriptions);
	  }, parent);
	};
	
	  function asObservable(source) {
	    return function subscribe(o) { return source.subscribe(o); };
	  }
	
	  /**
	   *  Hides the identity of an observable sequence.
	   * @returns {Observable} An observable sequence that hides the identity of the source sequence.
	   */
	  observableProto.asObservable = function () {
	    return new AnonymousObservable(asObservable(this), this);
	  };
	
	  var DematerializeObservable = (function (__super__) {
	    inherits(DematerializeObservable, __super__);
	    function DematerializeObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    DematerializeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new DematerializeObserver(o));
	    };
	
	    return DematerializeObservable;
	  }(ObservableBase));
	
	  var DematerializeObserver = (function (__super__) {
	    inherits(DematerializeObserver, __super__);
	
	    function DematerializeObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }
	
	    DematerializeObserver.prototype.next = function (x) { x.accept(this._o); };
	    DematerializeObserver.prototype.error = function (e) { this._o.onError(e); };
	    DematerializeObserver.prototype.completed = function () { this._o.onCompleted(); };
	
	    return DematerializeObserver;
	  }(AbstractObserver));
	
	  /**
	   * Dematerializes the explicit notification values of an observable sequence as implicit notifications.
	   * @returns {Observable} An observable sequence exhibiting the behavior corresponding to the source sequence's notification values.
	   */
	  observableProto.dematerialize = function () {
	    return new DematerializeObservable(this);
	  };
	
	  var DistinctUntilChangedObservable = (function(__super__) {
	    inherits(DistinctUntilChangedObservable, __super__);
	    function DistinctUntilChangedObservable(source, keyFn, comparer) {
	      this.source = source;
	      this.keyFn = keyFn;
	      this.comparer = comparer;
	      __super__.call(this);
	    }
	
	    DistinctUntilChangedObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new DistinctUntilChangedObserver(o, this.keyFn, this.comparer));
	    };
	
	    return DistinctUntilChangedObservable;
	  }(ObservableBase));
	
	  var DistinctUntilChangedObserver = (function(__super__) {
	    inherits(DistinctUntilChangedObserver, __super__);
	    function DistinctUntilChangedObserver(o, keyFn, comparer) {
	      this.o = o;
	      this.keyFn = keyFn;
	      this.comparer = comparer;
	      this.hasCurrentKey = false;
	      this.currentKey = null;
	      __super__.call(this);
	    }
	
	    DistinctUntilChangedObserver.prototype.next = function (x) {
	      var key = x, comparerEquals;
	      if (isFunction(this.keyFn)) {
	        key = tryCatch(this.keyFn)(x);
	        if (key === errorObj) { return this.o.onError(key.e); }
	      }
	      if (this.hasCurrentKey) {
	        comparerEquals = tryCatch(this.comparer)(this.currentKey, key);
	        if (comparerEquals === errorObj) { return this.o.onError(comparerEquals.e); }
	      }
	      if (!this.hasCurrentKey || !comparerEquals) {
	        this.hasCurrentKey = true;
	        this.currentKey = key;
	        this.o.onNext(x);
	      }
	    };
	    DistinctUntilChangedObserver.prototype.error = function(e) {
	      this.o.onError(e);
	    };
	    DistinctUntilChangedObserver.prototype.completed = function () {
	      this.o.onCompleted();
	    };
	
	    return DistinctUntilChangedObserver;
	  }(AbstractObserver));
	
	  /**
	  *  Returns an observable sequence that contains only distinct contiguous elements according to the keyFn and the comparer.
	  * @param {Function} [keyFn] A function to compute the comparison key for each element. If not provided, it projects the value.
	  * @param {Function} [comparer] Equality comparer for computed key values. If not provided, defaults to an equality comparer function.
	  * @returns {Observable} An observable sequence only containing the distinct contiguous elements, based on a computed key value, from the source sequence.
	  */
	  observableProto.distinctUntilChanged = function (keyFn, comparer) {
	    comparer || (comparer = defaultComparer);
	    return new DistinctUntilChangedObservable(this, keyFn, comparer);
	  };
	
	  var TapObservable = (function(__super__) {
	    inherits(TapObservable,__super__);
	    function TapObservable(source, observerOrOnNext, onError, onCompleted) {
	      this.source = source;
	      this._oN = observerOrOnNext;
	      this._oE = onError;
	      this._oC = onCompleted;
	      __super__.call(this);
	    }
	
	    TapObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new InnerObserver(o, this));
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, p) {
	      this.o = o;
	      this.t = !p._oN || isFunction(p._oN) ?
	        observerCreate(p._oN || noop, p._oE || noop, p._oC || noop) :
	        p._oN;
	      this.isStopped = false;
	      AbstractObserver.call(this);
	    }
	    InnerObserver.prototype.next = function(x) {
	      var res = tryCatch(this.t.onNext).call(this.t, x);
	      if (res === errorObj) { this.o.onError(res.e); }
	      this.o.onNext(x);
	    };
	    InnerObserver.prototype.error = function(err) {
	      var res = tryCatch(this.t.onError).call(this.t, err);
	      if (res === errorObj) { return this.o.onError(res.e); }
	      this.o.onError(err);
	    };
	    InnerObserver.prototype.completed = function() {
	      var res = tryCatch(this.t.onCompleted).call(this.t);
	      if (res === errorObj) { return this.o.onError(res.e); }
	      this.o.onCompleted();
	    };
	
	    return TapObservable;
	  }(ObservableBase));
	
	  /**
	  *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an o.
	  * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
	  * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto['do'] = observableProto.tap = observableProto.doAction = function (observerOrOnNext, onError, onCompleted) {
	    return new TapObservable(this, observerOrOnNext, onError, onCompleted);
	  };
	
	  /**
	  *  Invokes an action for each element in the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onNext Action to invoke for each element in the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto.doOnNext = observableProto.tapOnNext = function (onNext, thisArg) {
	    return this.tap(typeof thisArg !== 'undefined' ? function (x) { onNext.call(thisArg, x); } : onNext);
	  };
	
	  /**
	  *  Invokes an action upon exceptional termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onError Action to invoke upon exceptional termination of the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto.doOnError = observableProto.tapOnError = function (onError, thisArg) {
	    return this.tap(noop, typeof thisArg !== 'undefined' ? function (e) { onError.call(thisArg, e); } : onError);
	  };
	
	  /**
	  *  Invokes an action upon graceful termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onCompleted Action to invoke upon graceful termination of the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto.doOnCompleted = observableProto.tapOnCompleted = function (onCompleted, thisArg) {
	    return this.tap(noop, null, typeof thisArg !== 'undefined' ? function () { onCompleted.call(thisArg); } : onCompleted);
	  };
	
	  /**
	   *  Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.
	   * @param {Function} finallyAction Action to invoke after the source observable sequence terminates.
	   * @returns {Observable} Source sequence with the action-invoking termination behavior applied.
	   */
	  observableProto['finally'] = function (action) {
	    var source = this;
	    return new AnonymousObservable(function (observer) {
	      var subscription = tryCatch(source.subscribe).call(source, observer);
	      if (subscription === errorObj) {
	        action();
	        return thrower(subscription.e);
	      }
	      return disposableCreate(function () {
	        var r = tryCatch(subscription.dispose).call(subscription);
	        action();
	        r === errorObj && thrower(r.e);
	      });
	    }, this);
	  };
	
	  var IgnoreElementsObservable = (function(__super__) {
	    inherits(IgnoreElementsObservable, __super__);
	
	    function IgnoreElementsObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    IgnoreElementsObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o));
	    };
	
	    function InnerObserver(o) {
	      this.o = o;
	      this.isStopped = false;
	    }
	    InnerObserver.prototype.onNext = noop;
	    InnerObserver.prototype.onError = function (err) {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.o.onError(err);
	      }
	    };
	    InnerObserver.prototype.onCompleted = function () {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.o.onCompleted();
	      }
	    };
	    InnerObserver.prototype.dispose = function() { this.isStopped = true; };
	    InnerObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.observer.onError(e);
	        return true;
	      }
	
	      return false;
	    };
	
	    return IgnoreElementsObservable;
	  }(ObservableBase));
	
	  /**
	   *  Ignores all elements in an observable sequence leaving only the termination messages.
	   * @returns {Observable} An empty observable sequence that signals termination, successful or exceptional, of the source sequence.
	   */
	  observableProto.ignoreElements = function () {
	    return new IgnoreElementsObservable(this);
	  };
	
	  var MaterializeObservable = (function (__super__) {
	    inherits(MaterializeObservable, __super__);
	    function MaterializeObservable(source, fn) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    MaterializeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new MaterializeObserver(o));
	    };
	
	    return MaterializeObservable;
	  }(ObservableBase));
	
	  var MaterializeObserver = (function (__super__) {
	    inherits(MaterializeObserver, __super__);
	
	    function MaterializeObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }
	
	    MaterializeObserver.prototype.next = function (x) { this._o.onNext(notificationCreateOnNext(x)) };
	    MaterializeObserver.prototype.error = function (e) { this._o.onNext(notificationCreateOnError(e)); this._o.onCompleted(); };
	    MaterializeObserver.prototype.completed = function () { this._o.onNext(notificationCreateOnCompleted()); this._o.onCompleted(); };
	
	    return MaterializeObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Materializes the implicit notifications of an observable sequence as explicit notification values.
	   * @returns {Observable} An observable sequence containing the materialized notification values from the source sequence.
	   */
	  observableProto.materialize = function () {
	    return new MaterializeObservable(this);
	  };
	
	  /**
	   *  Repeats the observable sequence a specified number of times. If the repeat count is not specified, the sequence repeats indefinitely.
	   * @param {Number} [repeatCount]  Number of times to repeat the sequence. If not provided, repeats the sequence indefinitely.
	   * @returns {Observable} The observable sequence producing the elements of the given sequence repeatedly.
	   */
	  observableProto.repeat = function (repeatCount) {
	    return enumerableRepeat(this, repeatCount).concat();
	  };
	
	  /**
	   *  Repeats the source observable sequence the specified number of times or until it successfully terminates. If the retry count is not specified, it retries indefinitely.
	   *  Note if you encounter an error and want it to retry once, then you must use .retry(2);
	   *
	   * @example
	   *  var res = retried = retry.repeat();
	   *  var res = retried = retry.repeat(2);
	   * @param {Number} [retryCount]  Number of times to retry the sequence. If not provided, retry the sequence indefinitely.
	   * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
	   */
	  observableProto.retry = function (retryCount) {
	    return enumerableRepeat(this, retryCount).catchError();
	  };
	
	  /**
	   *  Repeats the source observable sequence upon error each time the notifier emits or until it successfully terminates. 
	   *  if the notifier completes, the observable sequence completes.
	   *
	   * @example
	   *  var timer = Observable.timer(500);
	   *  var source = observable.retryWhen(timer);
	   * @param {Observable} [notifier] An observable that triggers the retries or completes the observable with onNext or onCompleted respectively.
	   * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
	   */
	  observableProto.retryWhen = function (notifier) {
	    return enumerableRepeat(this).catchErrorWhen(notifier);
	  };
	  var ScanObservable = (function(__super__) {
	    inherits(ScanObservable, __super__);
	    function ScanObservable(source, accumulator, hasSeed, seed) {
	      this.source = source;
	      this.accumulator = accumulator;
	      this.hasSeed = hasSeed;
	      this.seed = seed;
	      __super__.call(this);
	    }
	
	    ScanObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new ScanObserver(o,this));
	    };
	
	    return ScanObservable;
	  }(ObservableBase));
	
	  var ScanObserver = (function (__super__) {
	    inherits(ScanObserver, __super__);
	    function ScanObserver(o, parent) {
	      this._o = o;
	      this._p = parent;
	      this._fn = parent.accumulator;
	      this._hs = parent.hasSeed;
	      this._s = parent.seed;
	      this._ha = false;
	      this._a = null;
	      this._hv = false;
	      this._i = 0;
	      __super__.call(this);
	    }
	
	    ScanObserver.prototype.next = function (x) {
	      !this._hv && (this._hv = true);
	      if (this._ha) {
	        this._a = tryCatch(this._fn)(this._a, x, this._i, this._p);
	      } else {
	        this._a = this._hs ? tryCatch(this._fn)(this._s, x, this._i, this._p) : x;
	        this._ha = true;
	      }
	      if (this._a === errorObj) { return this._o.onError(this._a.e); }
	      this._o.onNext(this._a);
	      this._i++;
	    };
	
	    ScanObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    ScanObserver.prototype.completed = function () {
	      !this._hv && this._hs && this._o.onNext(this._s);
	      this._o.onCompleted();
	    };
	
	    return ScanObserver;
	  }(AbstractObserver));
	
	  /**
	  *  Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
	  *  For aggregation behavior with no intermediate results, see Observable.aggregate.
	  * @param {Mixed} [seed] The initial accumulator value.
	  * @param {Function} accumulator An accumulator function to be invoked on each element.
	  * @returns {Observable} An observable sequence containing the accumulated values.
	  */
	  observableProto.scan = function () {
	    var hasSeed = false, seed, accumulator = arguments[0];
	    if (arguments.length === 2) {
	      hasSeed = true;
	      seed = arguments[1];
	    }
	    return new ScanObservable(this, accumulator, hasSeed, seed);
	  };
	
	  var SkipLastObservable = (function (__super__) {
	    inherits(SkipLastObservable, __super__);
	    function SkipLastObservable(source, c) {
	      this.source = source;
	      this._c = c;
	      __super__.call(this);
	    }
	
	    SkipLastObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SkipLastObserver(o, this._c));
	    };
	
	    return SkipLastObservable;
	  }(ObservableBase));
	
	  var SkipLastObserver = (function (__super__) {
	    inherits(SkipLastObserver, __super__);
	    function SkipLastObserver(o, c) {
	      this._o = o;
	      this._c = c;
	      this._q = [];
	      __super__.call(this);
	    }
	
	    SkipLastObserver.prototype.next = function (x) {
	      this._q.push(x);
	      this._q.length > this._c && this._o.onNext(this._q.shift());
	    };
	
	    SkipLastObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    SkipLastObserver.prototype.completed = function () {
	      this._o.onCompleted();
	    };
	
	    return SkipLastObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Bypasses a specified number of elements at the end of an observable sequence.
	   * @description
	   *  This operator accumulates a queue with a length enough to store the first `count` elements. As more elements are
	   *  received, elements are taken from the front of the queue and produced on the result sequence. This causes elements to be delayed.
	   * @param count Number of elements to bypass at the end of the source sequence.
	   * @returns {Observable} An observable sequence containing the source sequence elements except for the bypassed ones at the end.
	   */
	  observableProto.skipLast = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    return new SkipLastObservable(this, count);
	  };
	
	  /**
	   *  Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.
	   *  @example
	   *  var res = source.startWith(1, 2, 3);
	   *  var res = source.startWith(Rx.Scheduler.timeout, 1, 2, 3);
	   * @param {Arguments} args The specified values to prepend to the observable sequence
	   * @returns {Observable} The source sequence prepended with the specified values.
	   */
	  observableProto.startWith = function () {
	    var values, scheduler, start = 0;
	    if (!!arguments.length && isScheduler(arguments[0])) {
	      scheduler = arguments[0];
	      start = 1;
	    } else {
	      scheduler = immediateScheduler;
	    }
	    for(var args = [], i = start, len = arguments.length; i < len; i++) { args.push(arguments[i]); }
	    return enumerableOf([observableFromArray(args, scheduler), this]).concat();
	  };
	
	  var TakeLastObserver = (function (__super__) {
	    inherits(TakeLastObserver, __super__);
	    function TakeLastObserver(o, c) {
	      this._o = o;
	      this._c = c;
	      this._q = [];
	      __super__.call(this);
	    }
	
	    TakeLastObserver.prototype.next = function (x) {
	      this._q.push(x);
	      this._q.length > this._c && this._q.shift();
	    };
	
	    TakeLastObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    TakeLastObserver.prototype.completed = function () {
	      while (this._q.length > 0) { this._o.onNext(this._q.shift()); }
	      this._o.onCompleted();
	    };
	
	    return TakeLastObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Returns a specified number of contiguous elements from the end of an observable sequence.
	   * @description
	   *  This operator accumulates a buffer with a length enough to store elements count elements. Upon completion of
	   *  the source sequence, this buffer is drained on the result sequence. This causes the elements to be delayed.
	   * @param {Number} count Number of elements to take from the end of the source sequence.
	   * @returns {Observable} An observable sequence containing the specified number of elements from the end of the source sequence.
	   */
	  observableProto.takeLast = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    var source = this;
	    return new AnonymousObservable(function (o) {
	      return source.subscribe(new TakeLastObserver(o, count));
	    }, source);
	  };
	
	observableProto.flatMapConcat = observableProto.concatMap = function(selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).merge(1);
	};
	  var MapObservable = (function (__super__) {
	    inherits(MapObservable, __super__);
	
	    function MapObservable(source, selector, thisArg) {
	      this.source = source;
	      this.selector = bindCallback(selector, thisArg, 3);
	      __super__.call(this);
	    }
	
	    function innerMap(selector, self) {
	      return function (x, i, o) { return selector.call(this, self.selector(x, i, o), i, o); }
	    }
	
	    MapObservable.prototype.internalMap = function (selector, thisArg) {
	      return new MapObservable(this.source, innerMap(selector, this), thisArg);
	    };
	
	    MapObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.selector, this));
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, selector, source) {
	      this.o = o;
	      this.selector = selector;
	      this.source = source;
	      this.i = 0;
	      AbstractObserver.call(this);
	    }
	
	    InnerObserver.prototype.next = function(x) {
	      var result = tryCatch(this.selector)(x, this.i++, this.source);
	      if (result === errorObj) { return this.o.onError(result.e); }
	      this.o.onNext(result);
	    };
	
	    InnerObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };
	
	    InnerObserver.prototype.completed = function () {
	      this.o.onCompleted();
	    };
	
	    return MapObservable;
	
	  }(ObservableBase));
	
	  /**
	  * Projects each element of an observable sequence into a new form by incorporating the element's index.
	  * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source.
	  */
	  observableProto.map = observableProto.select = function (selector, thisArg) {
	    var selectorFn = typeof selector === 'function' ? selector : function () { return selector; };
	    return this instanceof MapObservable ?
	      this.internalMap(selectorFn, thisArg) :
	      new MapObservable(this, selectorFn, thisArg);
	  };
	
	  function plucker(args, len) {
	    return function mapper(x) {
	      var currentProp = x;
	      for (var i = 0; i < len; i++) {
	        var p = currentProp[args[i]];
	        if (typeof p !== 'undefined') {
	          currentProp = p;
	        } else {
	          return undefined;
	        }
	      }
	      return currentProp;
	    }
	  }
	
	  /**
	   * Retrieves the value of a specified nested property from all elements in
	   * the Observable sequence.
	   * @param {Arguments} arguments The nested properties to pluck.
	   * @returns {Observable} Returns a new Observable sequence of property values.
	   */
	  observableProto.pluck = function () {
	    var len = arguments.length, args = new Array(len);
	    if (len === 0) { throw new Error('List of properties cannot be empty.'); }
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return this.map(plucker(args, len));
	  };
	
	observableProto.flatMap = observableProto.selectMany = function(selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).mergeAll();
	};
	
	
	//
	//Rx.Observable.prototype.flatMapWithMaxConcurrent = function(limit, selector, resultSelector, thisArg) {
	//    return new FlatMapObservable(this, selector, resultSelector, thisArg).merge(limit);
	//};
	//
	
	Rx.Observable.prototype.flatMapLatest = function(selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).switchLatest();
	};
	  var SkipObservable = (function(__super__) {
	    inherits(SkipObservable, __super__);
	    function SkipObservable(source, count) {
	      this.source = source;
	      this.skipCount = count;
	      __super__.call(this);
	    }
	    
	    SkipObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.skipCount));
	    };
	    
	    function InnerObserver(o, c) {
	      this.c = c;
	      this.r = c;
	      this.o = o;
	      this.isStopped = false;
	    }
	    InnerObserver.prototype.onNext = function (x) {
	      if (this.isStopped) { return; }
	      if (this.r <= 0) { 
	        this.o.onNext(x);
	      } else {
	        this.r--;
	      }
	    };
	    InnerObserver.prototype.onError = function(e) {
	      if (!this.isStopped) { this.isStopped = true; this.o.onError(e); }
	    };
	    InnerObserver.prototype.onCompleted = function() {
	      if (!this.isStopped) { this.isStopped = true; this.o.onCompleted(); }
	    };
	    InnerObserver.prototype.dispose = function() { this.isStopped = true; };
	    InnerObserver.prototype.fail = function(e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.o.onError(e);
	        return true;
	      }
	      return false;
	    };
	    
	    return SkipObservable;
	  }(ObservableBase));  
	  
	  /**
	   * Bypasses a specified number of elements in an observable sequence and then returns the remaining elements.
	   * @param {Number} count The number of elements to skip before returning the remaining elements.
	   * @returns {Observable} An observable sequence that contains the elements that occur after the specified index in the input sequence.
	   */
	  observableProto.skip = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    return new SkipObservable(this, count);
	  };
	  var SkipWhileObservable = (function (__super__) {
	    inherits(SkipWhileObservable, __super__);
	    function SkipWhileObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    SkipWhileObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SkipWhileObserver(o, this));
	    };
	
	    return SkipWhileObservable;
	  }(ObservableBase));
	
	  var SkipWhileObserver = (function (__super__) {
	    inherits(SkipWhileObserver, __super__);
	
	    function SkipWhileObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      this._i = 0;
	      this._r = false;
	      __super__.call(this);
	    }
	
	    SkipWhileObserver.prototype.next = function (x) {
	      if (!this._r) {
	        var res = tryCatch(this._p._fn)(x, this._i++, this._p);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        this._r = !res;
	      }
	      this._r && this._o.onNext(x);
	    };
	    SkipWhileObserver.prototype.error = function (e) { this._o.onError(e); };
	    SkipWhileObserver.prototype.completed = function () { this._o.onCompleted(); };
	
	    return SkipWhileObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Bypasses elements in an observable sequence as long as a specified condition is true and then returns the remaining elements.
	   *  The element's index is used in the logic of the predicate function.
	   *
	   *  var res = source.skipWhile(function (value) { return value < 10; });
	   *  var res = source.skipWhile(function (value, index) { return value < 10 || index < 10; });
	   * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence that contains the elements from the input sequence starting at the first element in the linear series that does not pass the test specified by predicate.
	   */
	  observableProto.skipWhile = function (predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return new SkipWhileObservable(this, fn);
	  };
	
	  var TakeObservable = (function(__super__) {
	    inherits(TakeObservable, __super__);
	    
	    function TakeObservable(source, count) {
	      this.source = source;
	      this.takeCount = count;
	      __super__.call(this);
	    }
	    
	    TakeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.takeCount));
	    };
	    
	    function InnerObserver(o, c) {
	      this.o = o;
	      this.c = c;
	      this.r = c;
	      this.isStopped = false;
	    }
	    InnerObserver.prototype = {
	      onNext: function (x) {
	        if (this.isStopped) { return; }
	        if (this.r-- > 0) {
	          this.o.onNext(x);
	          this.r <= 0 && this.o.onCompleted();
	        }
	      },
	      onError: function (err) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onError(err);
	        }
	      },
	      onCompleted: function () {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onCompleted();
	        }
	      },
	      dispose: function () { this.isStopped = true; },
	      fail: function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onError(e);
	          return true;
	        }
	        return false;
	      }
	    };
	    
	    return TakeObservable;
	  }(ObservableBase));  
	  
	  /**
	   *  Returns a specified number of contiguous elements from the start of an observable sequence, using the specified scheduler for the edge case of take(0).
	   * @param {Number} count The number of elements to return.
	   * @param {Scheduler} [scheduler] Scheduler used to produce an OnCompleted message in case <paramref name="count count</paramref> is set to 0.
	   * @returns {Observable} An observable sequence that contains the specified number of elements from the start of the input sequence.
	   */
	  observableProto.take = function (count, scheduler) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    if (count === 0) { return observableEmpty(scheduler); }
	    return new TakeObservable(this, count);
	  };
	
	  var TakeWhileObservable = (function (__super__) {
	    inherits(TakeWhileObservable, __super__);
	    function TakeWhileObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    TakeWhileObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new TakeWhileObserver(o, this));
	    };
	
	    return TakeWhileObservable;
	  }(ObservableBase));
	
	  var TakeWhileObserver = (function (__super__) {
	    inherits(TakeWhileObserver, __super__);
	
	    function TakeWhileObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      this._i = 0;
	      this._r = true;
	      __super__.call(this);
	    }
	
	    TakeWhileObserver.prototype.next = function (x) {
	      if (this._r) {
	        this._r = tryCatch(this._p._fn)(x, this._i++, this._p);
	        if (this._r === errorObj) { return this._o.onError(this._r.e); }
	      }
	      if (this._r) {
	        this._o.onNext(x);
	      } else {
	        this._o.onCompleted();
	      }
	    };
	    TakeWhileObserver.prototype.error = function (e) { this._o.onError(e); };
	    TakeWhileObserver.prototype.completed = function () { this._o.onCompleted(); };
	
	    return TakeWhileObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Returns elements from an observable sequence as long as a specified condition is true.
	   *  The element's index is used in the logic of the predicate function.
	   * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence that contains the elements from the input sequence that occur before the element at which the test no longer passes.
	   */
	  observableProto.takeWhile = function (predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return new TakeWhileObservable(this, fn);
	  };
	
	  var FilterObservable = (function (__super__) {
	    inherits(FilterObservable, __super__);
	
	    function FilterObservable(source, predicate, thisArg) {
	      this.source = source;
	      this.predicate = bindCallback(predicate, thisArg, 3);
	      __super__.call(this);
	    }
	
	    FilterObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.predicate, this));
	    };
	
	    function innerPredicate(predicate, self) {
	      return function(x, i, o) { return self.predicate(x, i, o) && predicate.call(this, x, i, o); }
	    }
	
	    FilterObservable.prototype.internalFilter = function(predicate, thisArg) {
	      return new FilterObservable(this.source, innerPredicate(predicate, this), thisArg);
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, predicate, source) {
	      this.o = o;
	      this.predicate = predicate;
	      this.source = source;
	      this.i = 0;
	      AbstractObserver.call(this);
	    }
	
	    InnerObserver.prototype.next = function(x) {
	      var shouldYield = tryCatch(this.predicate)(x, this.i++, this.source);
	      if (shouldYield === errorObj) {
	        return this.o.onError(shouldYield.e);
	      }
	      shouldYield && this.o.onNext(x);
	    };
	
	    InnerObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };
	
	    InnerObserver.prototype.completed = function () {
	      this.o.onCompleted();
	    };
	
	    return FilterObservable;
	
	  }(ObservableBase));
	
	  /**
	  *  Filters the elements of an observable sequence based on a predicate by incorporating the element's index.
	  * @param {Function} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} An observable sequence that contains elements from the input sequence that satisfy the condition.
	  */
	  observableProto.filter = observableProto.where = function (predicate, thisArg) {
	    return this instanceof FilterObservable ? this.internalFilter(predicate, thisArg) :
	      new FilterObservable(this, predicate, thisArg);
	  };
	
	function createCbObservable(fn, ctx, selector, args) {
	  var o = new AsyncSubject();
	
	  args.push(createCbHandler(o, ctx, selector));
	  fn.apply(ctx, args);
	
	  return o.asObservable();
	}
	
	function createCbHandler(o, ctx, selector) {
	  return function handler () {
	    var len = arguments.length, results = new Array(len);
	    for(var i = 0; i < len; i++) { results[i] = arguments[i]; }
	
	    if (isFunction(selector)) {
	      results = tryCatch(selector).apply(ctx, results);
	      if (results === errorObj) { return o.onError(results.e); }
	      o.onNext(results);
	    } else {
	      if (results.length <= 1) {
	        o.onNext(results[0]);
	      } else {
	        o.onNext(results);
	      }
	    }
	
	    o.onCompleted();
	  };
	}
	
	/**
	 * Converts a callback function to an observable sequence.
	 *
	 * @param {Function} fn Function with a callback as the last parameter to convert to an Observable sequence.
	 * @param {Mixed} [ctx] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	 * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
	 * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
	 */
	Observable.fromCallback = function (fn, ctx, selector) {
	  return function () {
	    typeof ctx === 'undefined' && (ctx = this); 
	
	    var len = arguments.length, args = new Array(len)
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return createCbObservable(fn, ctx, selector, args);
	  };
	};
	
	function createNodeObservable(fn, ctx, selector, args) {
	  var o = new AsyncSubject();
	
	  args.push(createNodeHandler(o, ctx, selector));
	  fn.apply(ctx, args);
	
	  return o.asObservable();
	}
	
	function createNodeHandler(o, ctx, selector) {
	  return function handler () {
	    var err = arguments[0];
	    if (err) { return o.onError(err); }
	
	    var len = arguments.length, results = [];
	    for(var i = 1; i < len; i++) { results[i - 1] = arguments[i]; }
	
	    if (isFunction(selector)) {
	      var results = tryCatch(selector).apply(ctx, results);
	      if (results === errorObj) { return o.onError(results.e); }
	      o.onNext(results);
	    } else {
	      if (results.length <= 1) {
	        o.onNext(results[0]);
	      } else {
	        o.onNext(results);
	      }
	    }
	
	    o.onCompleted();
	  };
	}
	
	/**
	 * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
	 * @param {Function} fn The function to call
	 * @param {Mixed} [ctx] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	 * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
	 * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
	 */
	Observable.fromNodeCallback = function (fn, ctx, selector) {
	  return function () {
	    typeof ctx === 'undefined' && (ctx = this); 
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return createNodeObservable(fn, ctx, selector, args);
	  };
	};
	
	  function isNodeList(el) {
	    if (root.StaticNodeList) {
	      // IE8 Specific
	      // instanceof is slower than Object#toString, but Object#toString will not work as intended in IE8
	      return el instanceof root.StaticNodeList || el instanceof root.NodeList;
	    } else {
	      return Object.prototype.toString.call(el) === '[object NodeList]';
	    }
	  }
	
	  function ListenDisposable(e, n, fn) {
	    this._e = e;
	    this._n = n;
	    this._fn = fn;
	    this._e.addEventListener(this._n, this._fn, false);
	    this.isDisposed = false;
	  }
	  ListenDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this._e.removeEventListener(this._n, this._fn, false);
	      this.isDisposed = true;
	    }
	  };
	
	  function createEventListener (el, eventName, handler) {
	    var disposables = new CompositeDisposable();
	
	    // Asume NodeList or HTMLCollection
	    var elemToString = Object.prototype.toString.call(el);
	    if (isNodeList(el) || elemToString === '[object HTMLCollection]') {
	      for (var i = 0, len = el.length; i < len; i++) {
	        disposables.add(createEventListener(el.item(i), eventName, handler));
	      }
	    } else if (el) {
	      disposables.add(new ListenDisposable(el, eventName, handler));
	    }
	
	    return disposables;
	  }
	
	  /**
	   * Configuration option to determine whether to use native events only
	   */
	  Rx.config.useNativeEvents = false;
	
	  var EventObservable = (function(__super__) {
	    inherits(EventObservable, __super__);
	    function EventObservable(el, name, fn) {
	      this._el = el;
	      this._n = name;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    function createHandler(o, fn) {
	      return function handler () {
	        var results = arguments[0];
	        if (isFunction(fn)) {
	          results = tryCatch(fn).apply(null, arguments);
	          if (results === errorObj) { return o.onError(results.e); }
	        }
	        o.onNext(results);
	      };
	    }
	
	    EventObservable.prototype.subscribeCore = function (o) {
	      return createEventListener(
	        this._el,
	        this._n,
	        createHandler(o, this._fn));
	    };
	
	    return EventObservable;
	  }(ObservableBase));
	
	  /**
	   * Creates an observable sequence by adding an event listener to the matching DOMElement or each item in the NodeList.
	   * @param {Object} element The DOMElement or NodeList to attach a listener.
	   * @param {String} eventName The event name to attach the observable sequence.
	   * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
	   * @returns {Observable} An observable sequence of events from the specified element and the specified event.
	   */
	  Observable.fromEvent = function (element, eventName, selector) {
	    // Node.js specific
	    if (element.addListener) {
	      return fromEventPattern(
	        function (h) { element.addListener(eventName, h); },
	        function (h) { element.removeListener(eventName, h); },
	        selector);
	    }
	
	    // Use only if non-native events are allowed
	    if (!Rx.config.useNativeEvents) {
	      // Handles jq, Angular.js, Zepto, Marionette, Ember.js
	      if (typeof element.on === 'function' && typeof element.off === 'function') {
	        return fromEventPattern(
	          function (h) { element.on(eventName, h); },
	          function (h) { element.off(eventName, h); },
	          selector);
	      }
	    }
	
	    return new EventObservable(element, eventName, selector).publish().refCount();
	  };
	
	  var EventPatternObservable = (function(__super__) {
	    inherits(EventPatternObservable, __super__);
	    function EventPatternObservable(add, del, fn) {
	      this._add = add;
	      this._del = del;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    function createHandler(o, fn) {
	      return function handler () {
	        var results = arguments[0];
	        if (isFunction(fn)) {
	          results = tryCatch(fn).apply(null, arguments);
	          if (results === errorObj) { return o.onError(results.e); }
	        }
	        o.onNext(results);
	      };
	    }
	
	    EventPatternObservable.prototype.subscribeCore = function (o) {
	      var fn = createHandler(o, this._fn);
	      var returnValue = this._add(fn);
	      return new EventPatternDisposable(this._del, fn, returnValue);
	    };
	
	    function EventPatternDisposable(del, fn, ret) {
	      this._del = del;
	      this._fn = fn;
	      this._ret = ret;
	      this.isDisposed = false;
	    }
	
	    EventPatternDisposable.prototype.dispose = function () {
	      if(!this.isDisposed) {
	        isFunction(this._del) && this._del(this._fn, this._ret);
	      }
	    };
	
	    return EventPatternObservable;
	  }(ObservableBase));
	
	  /**
	   * Creates an observable sequence from an event emitter via an addHandler/removeHandler pair.
	   * @param {Function} addHandler The function to add a handler to the emitter.
	   * @param {Function} [removeHandler] The optional function to remove a handler from an emitter.
	   * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
	   * @returns {Observable} An observable sequence which wraps an event from an event emitter
	   */
	  var fromEventPattern = Observable.fromEventPattern = function (addHandler, removeHandler, selector) {
	    return new EventPatternObservable(addHandler, removeHandler, selector).publish().refCount();
	  };
	
	  var FromPromiseObservable = (function(__super__) {
	    inherits(FromPromiseObservable, __super__);
	    function FromPromiseObservable(p, s) {
	      this._p = p;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    function scheduleNext(s, state) {
	      var o = state[0], data = state[1];
	      o.onNext(data);
	      o.onCompleted();
	    }
	
	    function scheduleError(s, state) {
	      var o = state[0], err = state[1];
	      o.onError(err);
	    }
	
	    FromPromiseObservable.prototype.subscribeCore = function(o) {
	      var sad = new SingleAssignmentDisposable(), self = this;
	
	      this._p
	        .then(function (data) {
	          sad.setDisposable(self._s.schedule([o, data], scheduleNext));
	        }, function (err) {
	          sad.setDisposable(self._s.schedule([o, err], scheduleError));
	        });
	
	      return sad;
	    };
	
	    return FromPromiseObservable;
	  }(ObservableBase));
	
	  /**
	  * Converts a Promise to an Observable sequence
	  * @param {Promise} An ES6 Compliant promise.
	  * @returns {Observable} An Observable sequence which wraps the existing promise success and failure.
	  */
	  var observableFromPromise = Observable.fromPromise = function (promise, scheduler) {
	    scheduler || (scheduler = defaultScheduler);
	    return new FromPromiseObservable(promise, scheduler);
	  };
	
	  /*
	   * Converts an existing observable sequence to an ES6 Compatible Promise
	   * @example
	   * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
	   *
	   * // With config
	   * Rx.config.Promise = RSVP.Promise;
	   * var promise = Rx.Observable.return(42).toPromise();
	   * @param {Function} [promiseCtor] The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
	   * @returns {Promise} An ES6 compatible promise with the last value from the observable sequence.
	   */
	  observableProto.toPromise = function (promiseCtor) {
	    promiseCtor || (promiseCtor = Rx.config.Promise);
	    if (!promiseCtor) { throw new NotSupportedError('Promise type not provided nor in Rx.config.Promise'); }
	    var source = this;
	    return new promiseCtor(function (resolve, reject) {
	      // No cancellation can be done
	      var value;
	      source.subscribe(function (v) {
	        value = v;
	      }, reject, function () {
	        resolve(value);
	      });
	    });
	  };
	
	  /**
	   * Invokes the asynchronous function, surfacing the result through an observable sequence.
	   * @param {Function} functionAsync Asynchronous function which returns a Promise to run.
	   * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
	   */
	  Observable.startAsync = function (functionAsync) {
	    var promise = tryCatch(functionAsync)();
	    if (promise === errorObj) { return observableThrow(promise.e); }
	    return observableFromPromise(promise);
	  };
	
	  var MulticastObservable = (function (__super__) {
	    inherits(MulticastObservable, __super__);
	    function MulticastObservable(source, fn1, fn2) {
	      this.source = source;
	      this._fn1 = fn1;
	      this._fn2 = fn2;
	      __super__.call(this);
	    }
	
	    MulticastObservable.prototype.subscribeCore = function (o) {
	      var connectable = this.source.multicast(this._fn1());
	      return new BinaryDisposable(this._fn2(connectable).subscribe(o), connectable.connect());
	    };
	
	    return MulticastObservable;
	  }(ObservableBase));
	
	  /**
	   * Multicasts the source sequence notifications through an instantiated subject into all uses of the sequence within a selector function. Each
	   * subscription to the resulting sequence causes a separate multicast invocation, exposing the sequence resulting from the selector function's
	   * invocation. For specializations with fixed subject types, see Publish, PublishLast, and Replay.
	   *
	   * @example
	   * 1 - res = source.multicast(observable);
	   * 2 - res = source.multicast(function () { return new Subject(); }, function (x) { return x; });
	   *
	   * @param {Function|Subject} subjectOrSubjectSelector
	   * Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function.
	   * Or:
	   * Subject to push source elements into.
	   *
	   * @param {Function} [selector] Optional selector function which can use the multicasted source sequence subject to the policies enforced by the created subject. Specified only if <paramref name="subjectOrSubjectSelector" is a factory function.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.multicast = function (subjectOrSubjectSelector, selector) {
	    return isFunction(subjectOrSubjectSelector) ?
	      new MulticastObservable(this, subjectOrSubjectSelector, selector) :
	      new ConnectableObservable(this, subjectOrSubjectSelector);
	  };
	
	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence.
	   * This operator is a specialization of Multicast using a regular Subject.
	   *
	   * @example
	   * var resres = source.publish();
	   * var res = source.publish(function (x) { return x; });
	   *
	   * @param {Function} [selector] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.publish = function (selector) {
	    return selector && isFunction(selector) ?
	      this.multicast(function () { return new Subject(); }, selector) :
	      this.multicast(new Subject());
	  };
	
	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence.
	   * This operator is a specialization of publish which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */
	  observableProto.share = function () {
	    return this.publish().refCount();
	  };
	
	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.
	   * This operator is a specialization of Multicast using a AsyncSubject.
	   *
	   * @example
	   * var res = source.publishLast();
	   * var res = source.publishLast(function (x) { return x; });
	   *
	   * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will only receive the last notification of the source.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.publishLast = function (selector) {
	    return selector && isFunction(selector) ?
	      this.multicast(function () { return new AsyncSubject(); }, selector) :
	      this.multicast(new AsyncSubject());
	  };
	
	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
	   * This operator is a specialization of Multicast using a BehaviorSubject.
	   *
	   * @example
	   * var res = source.publishValue(42);
	   * var res = source.publishValue(function (x) { return x.select(function (y) { return y * y; }) }, 42);
	   *
	   * @param {Function} [selector] Optional selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive immediately receive the initial value, followed by all notifications of the source from the time of the subscription on.
	   * @param {Mixed} initialValue Initial value received by observers upon subscription.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.publishValue = function (initialValueOrSelector, initialValue) {
	    return arguments.length === 2 ?
	      this.multicast(function () {
	        return new BehaviorSubject(initialValue);
	      }, initialValueOrSelector) :
	      this.multicast(new BehaviorSubject(initialValueOrSelector));
	  };
	
	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence and starts with an initialValue.
	   * This operator is a specialization of publishValue which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   * @param {Mixed} initialValue Initial value received by observers upon subscription.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */
	  observableProto.shareValue = function (initialValue) {
	    return this.publishValue(initialValue).refCount();
	  };
	
	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
	   * This operator is a specialization of Multicast using a ReplaySubject.
	   *
	   * @example
	   * var res = source.replay(null, 3);
	   * var res = source.replay(null, 3, 500);
	   * var res = source.replay(null, 3, 500, scheduler);
	   * var res = source.replay(function (x) { return x.take(6).repeat(); }, 3, 500, scheduler);
	   *
	   * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all the notifications of the source subject to the specified replay buffer trimming policy.
	   * @param bufferSize [Optional] Maximum element count of the replay buffer.
	   * @param windowSize [Optional] Maximum time length of the replay buffer.
	   * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.replay = function (selector, bufferSize, windowSize, scheduler) {
	    return selector && isFunction(selector) ?
	      this.multicast(function () { return new ReplaySubject(bufferSize, windowSize, scheduler); }, selector) :
	      this.multicast(new ReplaySubject(bufferSize, windowSize, scheduler));
	  };
	
	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
	   * This operator is a specialization of replay which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   *
	   * @example
	   * var res = source.shareReplay(3);
	   * var res = source.shareReplay(3, 500);
	   * var res = source.shareReplay(3, 500, scheduler);
	   *
	
	   * @param bufferSize [Optional] Maximum element count of the replay buffer.
	   * @param window [Optional] Maximum time length of the replay buffer.
	   * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */
	  observableProto.shareReplay = function (bufferSize, windowSize, scheduler) {
	    return this.replay(null, bufferSize, windowSize, scheduler).refCount();
	  };
	
	  var RefCountObservable = (function (__super__) {
	    inherits(RefCountObservable, __super__);
	    function RefCountObservable(source) {
	      this.source = source;
	      this._count = 0;
	      this._connectableSubscription = null;
	      __super__.call(this);
	    }
	
	    RefCountObservable.prototype.subscribeCore = function (o) {
	      var shouldConnect = ++this._count === 1, subscription = this.source.subscribe(o);
	      shouldConnect && (this._connectableSubscription = this.source.connect());
	      return new RefCountDisposable(this, subscription);
	    };
	
	    function RefCountDisposable(p, s) {
	      this._p = p;
	      this._s = s;
	      this.isDisposed = false;
	    }
	
	    RefCountDisposable.prototype.dispose = function () {
	      if (!this.isDisposed) {
	        this.isDisposed = true;
	        this._s.dispose();
	        --this._p._count === 0 && this._p._connectableSubscription.dispose();
	      }
	    };
	
	    return RefCountObservable;
	  }(ObservableBase));
	
	  var ConnectableObservable = Rx.ConnectableObservable = (function (__super__) {
	    inherits(ConnectableObservable, __super__);
	    function ConnectableObservable(source, subject) {
	      this.source = source;
	      this._hasSubscription  = false;
	      this._subscription = null;
	      this._sourceObservable = source.asObservable();
	      this._subject = subject;
	      __super__.call(this);
	    }
	
	    function ConnectDisposable(parent) {
	      this._p = parent;
	      this.isDisposed = false;
	    }
	
	    ConnectDisposable.prototype.dispose = function () {
	      if (!this.isDisposed) {
	        this.isDisposed = true;
	        this._p._hasSubscription = false;
	      }
	    };
	
	    ConnectableObservable.prototype.connect = function () {
	      if (!this._hasSubscription) {
	        this._hasSubscription = true;
	        this._subscription = new BinaryDisposable(
	          this._sourceObservable.subscribe(this._subject),
	          new ConnectDisposable(this)
	        );
	      }
	      return this._subscription;
	    };
	
	    ConnectableObservable.prototype._subscribe = function (o) {
	      return this._subject.subscribe(o);
	    };
	
	    ConnectableObservable.prototype.refCount = function () {
	      return new RefCountObservable(this);
	    };
	
	    return ConnectableObservable;
	  }(Observable));
	
	  var TimerObservable = (function(__super__) {
	    inherits(TimerObservable, __super__);
	    function TimerObservable(dt, s) {
	      this._dt = dt;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    TimerObservable.prototype.subscribeCore = function (o) {
	      return this._s.scheduleFuture(o, this._dt, scheduleMethod);
	    };
	
	    function scheduleMethod(s, o) {
	      o.onNext(0);
	      o.onCompleted();
	    }
	
	    return TimerObservable;
	  }(ObservableBase));
	
	  function _observableTimer(dueTime, scheduler) {
	    return new TimerObservable(dueTime, scheduler);
	  }
	
	  function observableTimerDateAndPeriod(dueTime, period, scheduler) {
	    return new AnonymousObservable(function (observer) {
	      var d = dueTime, p = normalizeTime(period);
	      return scheduler.scheduleRecursiveFuture(0, d, function (count, self) {
	        if (p > 0) {
	          var now = scheduler.now();
	          d = new Date(d.getTime() + p);
	          d.getTime() <= now && (d = new Date(now + p));
	        }
	        observer.onNext(count);
	        self(count + 1, new Date(d));
	      });
	    });
	  }
	
	  function observableTimerTimeSpanAndPeriod(dueTime, period, scheduler) {
	    return dueTime === period ?
	      new AnonymousObservable(function (observer) {
	        return scheduler.schedulePeriodic(0, period, function (count) {
	          observer.onNext(count);
	          return count + 1;
	        });
	      }) :
	      observableDefer(function () {
	        return observableTimerDateAndPeriod(new Date(scheduler.now() + dueTime), period, scheduler);
	      });
	  }
	
	  /**
	   *  Returns an observable sequence that produces a value after each period.
	   *
	   * @example
	   *  1 - res = Rx.Observable.interval(1000);
	   *  2 - res = Rx.Observable.interval(1000, Rx.Scheduler.timeout);
	   *
	   * @param {Number} period Period for producing the values in the resulting sequence (specified as an integer denoting milliseconds).
	   * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, Rx.Scheduler.timeout is used.
	   * @returns {Observable} An observable sequence that produces a value after each period.
	   */
	  var observableinterval = Observable.interval = function (period, scheduler) {
	    return observableTimerTimeSpanAndPeriod(period, period, isScheduler(scheduler) ? scheduler : defaultScheduler);
	  };
	
	  /**
	   *  Returns an observable sequence that produces a value after dueTime has elapsed and then after each period.
	   * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
	   * @param {Mixed} [periodOrScheduler]  Period to produce subsequent values (specified as an integer denoting milliseconds), or the scheduler to run the timer on. If not specified, the resulting timer is not recurring.
	   * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence that produces a value after due time has elapsed and then each period.
	   */
	  var observableTimer = Observable.timer = function (dueTime, periodOrScheduler, scheduler) {
	    var period;
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    if (periodOrScheduler != null && typeof periodOrScheduler === 'number') {
	      period = periodOrScheduler;
	    } else if (isScheduler(periodOrScheduler)) {
	      scheduler = periodOrScheduler;
	    }
	    if ((dueTime instanceof Date || typeof dueTime === 'number') && period === undefined) {
	      return _observableTimer(dueTime, scheduler);
	    }
	    if (dueTime instanceof Date && period !== undefined) {
	      return observableTimerDateAndPeriod(dueTime.getTime(), periodOrScheduler, scheduler);
	    }
	    return observableTimerTimeSpanAndPeriod(dueTime, period, scheduler);
	  };
	
	  function observableDelayRelative(source, dueTime, scheduler) {
	    return new AnonymousObservable(function (o) {
	      var active = false,
	        cancelable = new SerialDisposable(),
	        exception = null,
	        q = [],
	        running = false,
	        subscription;
	      subscription = source.materialize().timestamp(scheduler).subscribe(function (notification) {
	        var d, shouldRun;
	        if (notification.value.kind === 'E') {
	          q = [];
	          q.push(notification);
	          exception = notification.value.error;
	          shouldRun = !running;
	        } else {
	          q.push({ value: notification.value, timestamp: notification.timestamp + dueTime });
	          shouldRun = !active;
	          active = true;
	        }
	        if (shouldRun) {
	          if (exception !== null) {
	            o.onError(exception);
	          } else {
	            d = new SingleAssignmentDisposable();
	            cancelable.setDisposable(d);
	            d.setDisposable(scheduler.scheduleRecursiveFuture(null, dueTime, function (_, self) {
	              var e, recurseDueTime, result, shouldRecurse;
	              if (exception !== null) {
	                return;
	              }
	              running = true;
	              do {
	                result = null;
	                if (q.length > 0 && q[0].timestamp - scheduler.now() <= 0) {
	                  result = q.shift().value;
	                }
	                if (result !== null) {
	                  result.accept(o);
	                }
	              } while (result !== null);
	              shouldRecurse = false;
	              recurseDueTime = 0;
	              if (q.length > 0) {
	                shouldRecurse = true;
	                recurseDueTime = Math.max(0, q[0].timestamp - scheduler.now());
	              } else {
	                active = false;
	              }
	              e = exception;
	              running = false;
	              if (e !== null) {
	                o.onError(e);
	              } else if (shouldRecurse) {
	                self(null, recurseDueTime);
	              }
	            }));
	          }
	        }
	      });
	      return new BinaryDisposable(subscription, cancelable);
	    }, source);
	  }
	
	  function observableDelayAbsolute(source, dueTime, scheduler) {
	    return observableDefer(function () {
	      return observableDelayRelative(source, dueTime - scheduler.now(), scheduler);
	    });
	  }
	
	  function delayWithSelector(source, subscriptionDelay, delayDurationSelector) {
	    var subDelay, selector;
	    if (isFunction(subscriptionDelay)) {
	      selector = subscriptionDelay;
	    } else {
	      subDelay = subscriptionDelay;
	      selector = delayDurationSelector;
	    }
	    return new AnonymousObservable(function (o) {
	      var delays = new CompositeDisposable(), atEnd = false, subscription = new SerialDisposable();
	
	      function start() {
	        subscription.setDisposable(source.subscribe(
	          function (x) {
	            var delay = tryCatch(selector)(x);
	            if (delay === errorObj) { return o.onError(delay.e); }
	            var d = new SingleAssignmentDisposable();
	            delays.add(d);
	            d.setDisposable(delay.subscribe(
	              function () {
	                o.onNext(x);
	                delays.remove(d);
	                done();
	              },
	              function (e) { o.onError(e); },
	              function () {
	                o.onNext(x);
	                delays.remove(d);
	                done();
	              }
	            ));
	          },
	          function (e) { o.onError(e); },
	          function () {
	            atEnd = true;
	            subscription.dispose();
	            done();
	          }
	        ));
	      }
	
	      function done () {
	        atEnd && delays.length === 0 && o.onCompleted();
	      }
	
	      if (!subDelay) {
	        start();
	      } else {
	        subscription.setDisposable(subDelay.subscribe(start, function (e) { o.onError(e); }, start));
	      }
	
	      return new BinaryDisposable(subscription, delays);
	    }, this);
	  }
	
	  /**
	   *  Time shifts the observable sequence by dueTime.
	   *  The relative time intervals between the values are preserved.
	   *
	   * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
	   * @param {Scheduler} [scheduler] Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Time-shifted sequence.
	   */
	  observableProto.delay = function () {
	    var firstArg = arguments[0];
	    if (typeof firstArg === 'number' || firstArg instanceof Date) {
	      var dueTime = firstArg, scheduler = arguments[1];
	      isScheduler(scheduler) || (scheduler = defaultScheduler);
	      return dueTime instanceof Date ?
	        observableDelayAbsolute(this, dueTime, scheduler) :
	        observableDelayRelative(this, dueTime, scheduler);
	    } else if (Observable.isObservable(firstArg) || isFunction(firstArg)) {
	      return delayWithSelector(this, firstArg, arguments[1]);
	    } else {
	      throw new Error('Invalid arguments');
	    }
	  };
	
	  var DebounceObservable = (function (__super__) {
	    inherits(DebounceObservable, __super__);
	    function DebounceObservable(source, dt, s) {
	      isScheduler(s) || (s = defaultScheduler);
	      this.source = source;
	      this._dt = dt;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    DebounceObservable.prototype.subscribeCore = function (o) {
	      var cancelable = new SerialDisposable();
	      return new BinaryDisposable(
	        this.source.subscribe(new DebounceObserver(o, this.source, this._dt, this._s, cancelable)),
	        cancelable);
	    };
	
	    return DebounceObservable;
	  }(ObservableBase));
	
	  var DebounceObserver = (function (__super__) {
	    inherits(DebounceObserver, __super__);
	    function DebounceObserver(observer, source, dueTime, scheduler, cancelable) {
	      this._o = observer;
	      this._s = source;
	      this._d = dueTime;
	      this._scheduler = scheduler;
	      this._c = cancelable;
	      this._v = null;
	      this._hv = false;
	      this._id = 0;
	      __super__.call(this);
	    }
	
	    DebounceObserver.prototype.next = function (x) {
	      this._hv = true;
	      this._v = x;
	      var currentId = ++this._id, d = new SingleAssignmentDisposable();
	      this._c.setDisposable(d);
	      d.setDisposable(this._scheduler.scheduleFuture(this, this._d, function (_, self) {
	        self._hv && self._id === currentId && self._o.onNext(x);
	        self._hv = false;
	      }));
	    };
	
	    DebounceObserver.prototype.error = function (e) {
	      this._c.dispose();
	      this._o.onError(e);
	      this._hv = false;
	      this._id++;
	    };
	
	    DebounceObserver.prototype.completed = function () {
	      this._c.dispose();
	      this._hv && this._o.onNext(this._v);
	      this._o.onCompleted();
	      this._hv = false;
	      this._id++;
	    };
	
	    return DebounceObserver;
	  }(AbstractObserver));
	
	  function debounceWithSelector(source, durationSelector) {
	    return new AnonymousObservable(function (o) {
	      var value, hasValue = false, cancelable = new SerialDisposable(), id = 0;
	      var subscription = source.subscribe(
	        function (x) {
	          var throttle = tryCatch(durationSelector)(x);
	          if (throttle === errorObj) { return o.onError(throttle.e); }
	
	          isPromise(throttle) && (throttle = observableFromPromise(throttle));
	
	          hasValue = true;
	          value = x;
	          id++;
	          var currentid = id, d = new SingleAssignmentDisposable();
	          cancelable.setDisposable(d);
	          d.setDisposable(throttle.subscribe(
	            function () {
	              hasValue && id === currentid && o.onNext(value);
	              hasValue = false;
	              d.dispose();
	            },
	            function (e) { o.onError(e); },
	            function () {
	              hasValue && id === currentid && o.onNext(value);
	              hasValue = false;
	              d.dispose();
	            }
	          ));
	        },
	        function (e) {
	          cancelable.dispose();
	          o.onError(e);
	          hasValue = false;
	          id++;
	        },
	        function () {
	          cancelable.dispose();
	          hasValue && o.onNext(value);
	          o.onCompleted();
	          hasValue = false;
	          id++;
	        }
	      );
	      return new BinaryDisposable(subscription, cancelable);
	    }, source);
	  }
	
	  observableProto.debounce = function () {
	    if (isFunction (arguments[0])) {
	      return debounceWithSelector(this, arguments[0]);
	    } else if (typeof arguments[0] === 'number') {
	      return new DebounceObservable(this, arguments[0], arguments[1]);
	    } else {
	      throw new Error('Invalid arguments');
	    }
	  };
	
	  var TimestampObservable = (function (__super__) {
	    inherits(TimestampObservable, __super__);
	    function TimestampObservable(source, s) {
	      this.source = source;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    TimestampObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new TimestampObserver(o, this._s));
	    };
	
	    return TimestampObservable;
	  }(ObservableBase));
	
	  var TimestampObserver = (function (__super__) {
	    inherits(TimestampObserver, __super__);
	    function TimestampObserver(o, s) {
	      this._o = o;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    TimestampObserver.prototype.next = function (x) {
	      this._o.onNext({ value: x, timestamp: this._s.now() });
	    };
	
	    TimestampObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    TimestampObserver.prototype.completed = function () {
	      this._o.onCompleted();
	    };
	
	    return TimestampObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Records the timestamp for each value in an observable sequence.
	   *
	   * @example
	   *  1 - res = source.timestamp(); // produces { value: x, timestamp: ts }
	   *  2 - res = source.timestamp(Rx.Scheduler.default);
	   *
	   * @param {Scheduler} [scheduler]  Scheduler used to compute timestamps. If not specified, the default scheduler is used.
	   * @returns {Observable} An observable sequence with timestamp information on values.
	   */
	  observableProto.timestamp = function (scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new TimestampObservable(this, scheduler);
	  };
	
	  function sampleObservable(source, sampler) {
	    return new AnonymousObservable(function (o) {
	      var atEnd = false, value, hasValue = false;
	
	      function sampleSubscribe() {
	        if (hasValue) {
	          hasValue = false;
	          o.onNext(value);
	        }
	        atEnd && o.onCompleted();
	      }
	
	      var sourceSubscription = new SingleAssignmentDisposable();
	      sourceSubscription.setDisposable(source.subscribe(
	        function (newValue) {
	          hasValue = true;
	          value = newValue;
	        },
	        function (e) { o.onError(e); },
	        function () {
	          atEnd = true;
	          sourceSubscription.dispose();
	        }
	      ));
	
	      return new BinaryDisposable(
	        sourceSubscription,
	        sampler.subscribe(sampleSubscribe, function (e) { o.onError(e); }, sampleSubscribe)
	      );
	    }, source);
	  }
	
	  /**
	   *  Samples the observable sequence at each interval.
	   *
	   * @example
	   *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
	   *  2 - res = source.sample(5000); // 5 seconds
	   *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
	   *
	   * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
	   * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Sampled observable sequence.
	   */
	  observableProto.sample = observableProto.throttleLatest = function (intervalOrSampler, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return typeof intervalOrSampler === 'number' ?
	      sampleObservable(this, observableinterval(intervalOrSampler, scheduler)) :
	      sampleObservable(this, intervalOrSampler);
	  };
	
	  var TimeoutError = Rx.TimeoutError = function(message) {
	    this.message = message || 'Timeout has occurred';
	    this.name = 'TimeoutError';
	    Error.call(this);
	  };
	  TimeoutError.prototype = Object.create(Error.prototype);
	
	  function timeoutWithSelector(source, firstTimeout, timeoutDurationSelector, other) {
	    if (isFunction(firstTimeout)) {
	      other = timeoutDurationSelector;
	      timeoutDurationSelector = firstTimeout;
	      firstTimeout = observableNever();
	    }
	    other || (other = observableThrow(new TimeoutError()));
	    return new AnonymousObservable(function (o) {
	      var subscription = new SerialDisposable(),
	        timer = new SerialDisposable(),
	        original = new SingleAssignmentDisposable();
	
	      subscription.setDisposable(original);
	
	      var id = 0, switched = false;
	
	      function setTimer(timeout) {
	        var myId = id, d = new SingleAssignmentDisposable();
	
	        function timerWins() {
	          switched = (myId === id);
	          return switched;
	        }
	
	        timer.setDisposable(d);
	        d.setDisposable(timeout.subscribe(function () {
	          timerWins() && subscription.setDisposable(other.subscribe(o));
	          d.dispose();
	        }, function (e) {
	          timerWins() && o.onError(e);
	        }, function () {
	          timerWins() && subscription.setDisposable(other.subscribe(o));
	        }));
	      };
	
	      setTimer(firstTimeout);
	
	      function oWins() {
	        var res = !switched;
	        if (res) { id++; }
	        return res;
	      }
	
	      original.setDisposable(source.subscribe(function (x) {
	        if (oWins()) {
	          o.onNext(x);
	          var timeout = tryCatch(timeoutDurationSelector)(x);
	          if (timeout === errorObj) { return o.onError(timeout.e); }
	          setTimer(isPromise(timeout) ? observableFromPromise(timeout) : timeout);
	        }
	      }, function (e) {
	        oWins() && o.onError(e);
	      }, function () {
	        oWins() && o.onCompleted();
	      }));
	      return new BinaryDisposable(subscription, timer);
	    }, source);
	  }
	
	  function timeout(source, dueTime, other, scheduler) {
	    if (isScheduler(other)) {
	      scheduler = other;
	      other = observableThrow(new TimeoutError());
	    }
	    if (other instanceof Error) { other = observableThrow(other); }
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	
	    return new AnonymousObservable(function (o) {
	      var id = 0,
	        original = new SingleAssignmentDisposable(),
	        subscription = new SerialDisposable(),
	        switched = false,
	        timer = new SerialDisposable();
	
	      subscription.setDisposable(original);
	
	      function createTimer() {
	        var myId = id;
	        timer.setDisposable(scheduler.scheduleFuture(null, dueTime, function () {
	          switched = id === myId;
	          if (switched) {
	            isPromise(other) && (other = observableFromPromise(other));
	            subscription.setDisposable(other.subscribe(o));
	          }
	        }));
	      }
	
	      createTimer();
	
	      original.setDisposable(source.subscribe(function (x) {
	        if (!switched) {
	          id++;
	          o.onNext(x);
	          createTimer();
	        }
	      }, function (e) {
	        if (!switched) {
	          id++;
	          o.onError(e);
	        }
	      }, function () {
	        if (!switched) {
	          id++;
	          o.onCompleted();
	        }
	      }));
	      return new BinaryDisposable(subscription, timer);
	    }, source);
	  }
	
	  observableProto.timeout = function () {
	    var firstArg = arguments[0];
	    if (firstArg instanceof Date || typeof firstArg === 'number') {
	      return timeout(this, firstArg, arguments[1], arguments[2]);
	    } else if (Observable.isObservable(firstArg) || isFunction(firstArg)) {
	      return timeoutWithSelector(this, firstArg, arguments[1], arguments[2]);
	    } else {
	      throw new Error('Invalid arguments');
	    }
	  };
	
	  /**
	   * Returns an Observable that emits only the first item emitted by the source Observable during sequential time windows of a specified duration.
	   * @param {Number} windowDuration time to wait before emitting another item after emitting the last item
	   * @param {Scheduler} [scheduler] the Scheduler to use internally to manage the timers that handle timeout for each item. If not provided, defaults to Scheduler.timeout.
	   * @returns {Observable} An Observable that performs the throttle operation.
	   */
	  observableProto.throttle = function (windowDuration, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    var duration = +windowDuration || 0;
	    if (duration <= 0) { throw new RangeError('windowDuration cannot be less or equal zero.'); }
	    var source = this;
	    return new AnonymousObservable(function (o) {
	      var lastOnNext = 0;
	      return source.subscribe(
	        function (x) {
	          var now = scheduler.now();
	          if (lastOnNext === 0 || now - lastOnNext >= duration) {
	            lastOnNext = now;
	            o.onNext(x);
	          }
	        },function (e) { o.onError(e); }, function () { o.onCompleted(); }
	      );
	    }, source);
	  };
	
	  var PausableObservable = (function (__super__) {
	    inherits(PausableObservable, __super__);
	    function PausableObservable(source, pauser) {
	      this.source = source;
	      this.controller = new Subject();
	
	      if (pauser && pauser.subscribe) {
	        this.pauser = this.controller.merge(pauser);
	      } else {
	        this.pauser = this.controller;
	      }
	
	      __super__.call(this);
	    }
	
	    PausableObservable.prototype._subscribe = function (o) {
	      var conn = this.source.publish(),
	        subscription = conn.subscribe(o),
	        connection = disposableEmpty;
	
	      var pausable = this.pauser.distinctUntilChanged().subscribe(function (b) {
	        if (b) {
	          connection = conn.connect();
	        } else {
	          connection.dispose();
	          connection = disposableEmpty;
	        }
	      });
	
	      return new NAryDisposable([subscription, connection, pausable]);
	    };
	
	    PausableObservable.prototype.pause = function () {
	      this.controller.onNext(false);
	    };
	
	    PausableObservable.prototype.resume = function () {
	      this.controller.onNext(true);
	    };
	
	    return PausableObservable;
	
	  }(Observable));
	
	  /**
	   * Pauses the underlying observable sequence based upon the observable sequence which yields true/false.
	   * @example
	   * var pauser = new Rx.Subject();
	   * var source = Rx.Observable.interval(100).pausable(pauser);
	   * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
	   * @returns {Observable} The observable sequence which is paused based upon the pauser.
	   */
	  observableProto.pausable = function (pauser) {
	    return new PausableObservable(this, pauser);
	  };
	
	  function combineLatestSource(source, subject, resultSelector) {
	    return new AnonymousObservable(function (o) {
	      var hasValue = [false, false],
	        hasValueAll = false,
	        isDone = false,
	        values = new Array(2),
	        err;
	
	      function next(x, i) {
	        values[i] = x;
	        hasValue[i] = true;
	        if (hasValueAll || (hasValueAll = hasValue.every(identity))) {
	          if (err) { return o.onError(err); }
	          var res = tryCatch(resultSelector).apply(null, values);
	          if (res === errorObj) { return o.onError(res.e); }
	          o.onNext(res);
	        }
	        isDone && values[1] && o.onCompleted();
	      }
	
	      return new BinaryDisposable(
	        source.subscribe(
	          function (x) {
	            next(x, 0);
	          },
	          function (e) {
	            if (values[1]) {
	              o.onError(e);
	            } else {
	              err = e;
	            }
	          },
	          function () {
	            isDone = true;
	            values[1] && o.onCompleted();
	          }),
	        subject.subscribe(
	          function (x) {
	            next(x, 1);
	          },
	          function (e) { o.onError(e); },
	          function () {
	            isDone = true;
	            next(true, 1);
	          })
	        );
	    }, source);
	  }
	
	  var PausableBufferedObservable = (function (__super__) {
	    inherits(PausableBufferedObservable, __super__);
	    function PausableBufferedObservable(source, pauser) {
	      this.source = source;
	      this.controller = new Subject();
	
	      if (pauser && pauser.subscribe) {
	        this.pauser = this.controller.merge(pauser);
	      } else {
	        this.pauser = this.controller;
	      }
	
	      __super__.call(this);
	    }
	
	    PausableBufferedObservable.prototype._subscribe = function (o) {
	      var q = [], previousShouldFire;
	
	      function drainQueue() { while (q.length > 0) { o.onNext(q.shift()); } }
	
	      var subscription =
	        combineLatestSource(
	          this.source,
	          this.pauser.startWith(false).distinctUntilChanged(),
	          function (data, shouldFire) {
	            return { data: data, shouldFire: shouldFire };
	          })
	          .subscribe(
	            function (results) {
	              if (previousShouldFire !== undefined && results.shouldFire !== previousShouldFire) {
	                previousShouldFire = results.shouldFire;
	                // change in shouldFire
	                if (results.shouldFire) { drainQueue(); }
	              } else {
	                previousShouldFire = results.shouldFire;
	                // new data
	                if (results.shouldFire) {
	                  o.onNext(results.data);
	                } else {
	                  q.push(results.data);
	                }
	              }
	            },
	            function (err) {
	              drainQueue();
	              o.onError(err);
	            },
	            function () {
	              drainQueue();
	              o.onCompleted();
	            }
	          );
	      return subscription;      
	    };
	
	    PausableBufferedObservable.prototype.pause = function () {
	      this.controller.onNext(false);
	    };
	
	    PausableBufferedObservable.prototype.resume = function () {
	      this.controller.onNext(true);
	    };
	
	    return PausableBufferedObservable;
	
	  }(Observable));
	
	  /**
	   * Pauses the underlying observable sequence based upon the observable sequence which yields true/false,
	   * and yields the values that were buffered while paused.
	   * @example
	   * var pauser = new Rx.Subject();
	   * var source = Rx.Observable.interval(100).pausableBuffered(pauser);
	   * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
	   * @returns {Observable} The observable sequence which is paused based upon the pauser.
	   */
	  observableProto.pausableBuffered = function (subject) {
	    return new PausableBufferedObservable(this, subject);
	  };
	
	  var ControlledObservable = (function (__super__) {
	    inherits(ControlledObservable, __super__);
	    function ControlledObservable (source, enableQueue, scheduler) {
	      __super__.call(this);
	      this.subject = new ControlledSubject(enableQueue, scheduler);
	      this.source = source.multicast(this.subject).refCount();
	    }
	
	    ControlledObservable.prototype._subscribe = function (o) {
	      return this.source.subscribe(o);
	    };
	
	    ControlledObservable.prototype.request = function (numberOfItems) {
	      return this.subject.request(numberOfItems == null ? -1 : numberOfItems);
	    };
	
	    return ControlledObservable;
	
	  }(Observable));
	
	  var ControlledSubject = (function (__super__) {
	    inherits(ControlledSubject, __super__);
	    function ControlledSubject(enableQueue, scheduler) {
	      enableQueue == null && (enableQueue = true);
	
	      __super__.call(this);
	      this.subject = new Subject();
	      this.enableQueue = enableQueue;
	      this.queue = enableQueue ? [] : null;
	      this.requestedCount = 0;
	      this.requestedDisposable = null;
	      this.error = null;
	      this.hasFailed = false;
	      this.hasCompleted = false;
	      this.scheduler = scheduler || currentThreadScheduler;
	    }
	
	    addProperties(ControlledSubject.prototype, Observer, {
	      _subscribe: function (o) {
	        return this.subject.subscribe(o);
	      },
	      onCompleted: function () {
	        this.hasCompleted = true;
	        if (!this.enableQueue || this.queue.length === 0) {
	          this.subject.onCompleted();
	          this.disposeCurrentRequest();
	        } else {
	          this.queue.push(Notification.createOnCompleted());
	        }
	      },
	      onError: function (error) {
	        this.hasFailed = true;
	        this.error = error;
	        if (!this.enableQueue || this.queue.length === 0) {
	          this.subject.onError(error);
	          this.disposeCurrentRequest();
	        } else {
	          this.queue.push(Notification.createOnError(error));
	        }
	      },
	      onNext: function (value) {
	        if (this.requestedCount <= 0) {
	          this.enableQueue && this.queue.push(Notification.createOnNext(value));
	        } else {
	          (this.requestedCount-- === 0) && this.disposeCurrentRequest();
	          this.subject.onNext(value);
	        }
	      },
	      _processRequest: function (numberOfItems) {
	        if (this.enableQueue) {
	          while (this.queue.length > 0 && (numberOfItems > 0 || this.queue[0].kind !== 'N')) {
	            var first = this.queue.shift();
	            first.accept(this.subject);
	            if (first.kind === 'N') {
	              numberOfItems--;
	            } else {
	              this.disposeCurrentRequest();
	              this.queue = [];
	            }
	          }
	        }
	
	        return numberOfItems;
	      },
	      request: function (number) {
	        this.disposeCurrentRequest();
	        var self = this;
	
	        this.requestedDisposable = this.scheduler.schedule(number,
	        function(s, i) {
	          var remaining = self._processRequest(i);
	          var stopped = self.hasCompleted || self.hasFailed;
	          if (!stopped && remaining > 0) {
	            self.requestedCount = remaining;
	
	            return disposableCreate(function () {
	              self.requestedCount = 0;
	            });
	              // Scheduled item is still in progress. Return a new
	              // disposable to allow the request to be interrupted
	              // via dispose.
	          }
	        });
	
	        return this.requestedDisposable;
	      },
	      disposeCurrentRequest: function () {
	        if (this.requestedDisposable) {
	          this.requestedDisposable.dispose();
	          this.requestedDisposable = null;
	        }
	      }
	    });
	
	    return ControlledSubject;
	  }(Observable));
	
	  /**
	   * Attaches a controller to the observable sequence with the ability to queue.
	   * @example
	   * var source = Rx.Observable.interval(100).controlled();
	   * source.request(3); // Reads 3 values
	   * @param {bool} enableQueue truthy value to determine if values should be queued pending the next request
	   * @param {Scheduler} scheduler determines how the requests will be scheduled
	   * @returns {Observable} The observable sequence which only propagates values on request.
	   */
	  observableProto.controlled = function (enableQueue, scheduler) {
	
	    if (enableQueue && isScheduler(enableQueue)) {
	      scheduler = enableQueue;
	      enableQueue = true;
	    }
	
	    if (enableQueue == null) {  enableQueue = true; }
	    return new ControlledObservable(this, enableQueue, scheduler);
	  };
	
	  /**
	   * Pipes the existing Observable sequence into a Node.js Stream.
	   * @param {Stream} dest The destination Node.js stream.
	   * @returns {Stream} The destination stream.
	   */
	  observableProto.pipe = function (dest) {
	    var source = this.pausableBuffered();
	
	    function onDrain() {
	      source.resume();
	    }
	
	    dest.addListener('drain', onDrain);
	
	    source.subscribe(
	      function (x) {
	        !dest.write(String(x)) && source.pause();
	      },
	      function (err) {
	        dest.emit('error', err);
	      },
	      function () {
	        // Hack check because STDIO is not closable
	        !dest._isStdio && dest.end();
	        dest.removeListener('drain', onDrain);
	      });
	
	    source.resume();
	
	    return dest;
	  };
	
	  var TransduceObserver = (function (__super__) {
	    inherits(TransduceObserver, __super__);
	    function TransduceObserver(o, xform) {
	      this._o = o;
	      this._xform = xform;
	      __super__.call(this);
	    }
	
	    TransduceObserver.prototype.next = function (x) {
	      var res = tryCatch(this._xform['@@transducer/step']).call(this._xform, this._o, x);
	      if (res === errorObj) { this._o.onError(res.e); }
	    };
	
	    TransduceObserver.prototype.error = function (e) { this._o.onError(e); };
	
	    TransduceObserver.prototype.completed = function () {
	      this._xform['@@transducer/result'](this._o);
	    };
	
	    return TransduceObserver;
	  }(AbstractObserver));
	
	  function transformForObserver(o) {
	    return {
	      '@@transducer/init': function() {
	        return o;
	      },
	      '@@transducer/step': function(obs, input) {
	        return obs.onNext(input);
	      },
	      '@@transducer/result': function(obs) {
	        return obs.onCompleted();
	      }
	    };
	  }
	
	  /**
	   * Executes a transducer to transform the observable sequence
	   * @param {Transducer} transducer A transducer to execute
	   * @returns {Observable} An Observable sequence containing the results from the transducer.
	   */
	  observableProto.transduce = function(transducer) {
	    var source = this;
	    return new AnonymousObservable(function(o) {
	      var xform = transducer(transformForObserver(o));
	      return source.subscribe(new TransduceObserver(o, xform));
	    }, source);
	  };
	
	  var AnonymousObservable = Rx.AnonymousObservable = (function (__super__) {
	    inherits(AnonymousObservable, __super__);
	
	    // Fix subscriber to check for undefined or function returned to decorate as Disposable
	    function fixSubscriber(subscriber) {
	      return subscriber && isFunction(subscriber.dispose) ? subscriber :
	        isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
	    }
	
	    function setDisposable(s, state) {
	      var ado = state[0], self = state[1];
	      var sub = tryCatch(self.__subscribe).call(self, ado);
	      if (sub === errorObj && !ado.fail(errorObj.e)) { thrower(errorObj.e); }
	      ado.setDisposable(fixSubscriber(sub));
	    }
	
	    function AnonymousObservable(subscribe, parent) {
	      this.source = parent;
	      this.__subscribe = subscribe;
	      __super__.call(this);
	    }
	
	    AnonymousObservable.prototype._subscribe = function (o) {
	      var ado = new AutoDetachObserver(o), state = [ado, this];
	
	      if (currentThreadScheduler.scheduleRequired()) {
	        currentThreadScheduler.schedule(state, setDisposable);
	      } else {
	        setDisposable(null, state);
	      }
	      return ado;
	    };
	
	    return AnonymousObservable;
	
	  }(Observable));
	
	  var AutoDetachObserver = (function (__super__) {
	    inherits(AutoDetachObserver, __super__);
	
	    function AutoDetachObserver(observer) {
	      __super__.call(this);
	      this.observer = observer;
	      this.m = new SingleAssignmentDisposable();
	    }
	
	    var AutoDetachObserverPrototype = AutoDetachObserver.prototype;
	
	    AutoDetachObserverPrototype.next = function (value) {
	      var result = tryCatch(this.observer.onNext).call(this.observer, value);
	      if (result === errorObj) {
	        this.dispose();
	        thrower(result.e);
	      }
	    };
	
	    AutoDetachObserverPrototype.error = function (err) {
	      var result = tryCatch(this.observer.onError).call(this.observer, err);
	      this.dispose();
	      result === errorObj && thrower(result.e);
	    };
	
	    AutoDetachObserverPrototype.completed = function () {
	      var result = tryCatch(this.observer.onCompleted).call(this.observer);
	      this.dispose();
	      result === errorObj && thrower(result.e);
	    };
	
	    AutoDetachObserverPrototype.setDisposable = function (value) { this.m.setDisposable(value); };
	    AutoDetachObserverPrototype.getDisposable = function () { return this.m.getDisposable(); };
	
	    AutoDetachObserverPrototype.dispose = function () {
	      __super__.prototype.dispose.call(this);
	      this.m.dispose();
	    };
	
	    return AutoDetachObserver;
	  }(AbstractObserver));
	
	  var InnerSubscription = function (s, o) {
	    this._s = s;
	    this._o = o;
	  };
	
	  InnerSubscription.prototype.dispose = function () {
	    if (!this._s.isDisposed && this._o !== null) {
	      var idx = this._s.observers.indexOf(this._o);
	      this._s.observers.splice(idx, 1);
	      this._o = null;
	    }
	  };
	
	  /**
	   *  Represents an object that is both an observable sequence as well as an observer.
	   *  Each notification is broadcasted to all subscribed observers.
	   */
	  var Subject = Rx.Subject = (function (__super__) {
	    inherits(Subject, __super__);
	    function Subject() {
	      __super__.call(this);
	      this.isDisposed = false;
	      this.isStopped = false;
	      this.observers = [];
	      this.hasError = false;
	    }
	
	    addProperties(Subject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.observers.push(o);
	          return new InnerSubscription(this, o);
	        }
	        if (this.hasError) {
	          o.onError(this.error);
	          return disposableEmpty;
	        }
	        o.onCompleted();
	        return disposableEmpty;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () { return this.observers.length > 0; },
	      /**
	       * Notifies all subscribed observers about the end of the sequence.
	       */
	      onCompleted: function () {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onCompleted();
	          }
	
	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.error = error;
	          this.hasError = true;
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onError(error);
	          }
	
	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onNext(value);
	          }
	        }
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	      }
	    });
	
	    /**
	     * Creates a subject from the specified observer and observable.
	     * @param {Observer} observer The observer used to send messages to the subject.
	     * @param {Observable} observable The observable used to subscribe to messages sent from the subject.
	     * @returns {Subject} Subject implemented using the given observer and observable.
	     */
	    Subject.create = function (observer, observable) {
	      return new AnonymousSubject(observer, observable);
	    };
	
	    return Subject;
	  }(Observable));
	
	  /**
	   *  Represents the result of an asynchronous operation.
	   *  The last value before the OnCompleted notification, or the error received through OnError, is sent to all subscribed observers.
	   */
	  var AsyncSubject = Rx.AsyncSubject = (function (__super__) {
	    inherits(AsyncSubject, __super__);
	
	    /**
	     * Creates a subject that can only receive one value and that value is cached for all future observations.
	     * @constructor
	     */
	    function AsyncSubject() {
	      __super__.call(this);
	      this.isDisposed = false;
	      this.isStopped = false;
	      this.hasValue = false;
	      this.observers = [];
	      this.hasError = false;
	    }
	
	    addProperties(AsyncSubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	
	        if (!this.isStopped) {
	          this.observers.push(o);
	          return new InnerSubscription(this, o);
	        }
	
	        if (this.hasError) {
	          o.onError(this.error);
	        } else if (this.hasValue) {
	          o.onNext(this.value);
	          o.onCompleted();
	        } else {
	          o.onCompleted();
	        }
	
	        return disposableEmpty;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () {
	        checkDisposed(this);
	        return this.observers.length > 0;
	      },
	      /**
	       * Notifies all subscribed observers about the end of the sequence, also causing the last received value to be sent out (if any).
	       */
	      onCompleted: function () {
	        var i, len;
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          var os = cloneArray(this.observers), len = os.length;
	
	          if (this.hasValue) {
	            for (i = 0; i < len; i++) {
	              var o = os[i];
	              o.onNext(this.value);
	              o.onCompleted();
	            }
	          } else {
	            for (i = 0; i < len; i++) {
	              os[i].onCompleted();
	            }
	          }
	
	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the error.
	       * @param {Mixed} error The Error to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.hasError = true;
	          this.error = error;
	
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onError(error);
	          }
	
	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Sends a value to the subject. The last value received before successful termination will be sent to all subscribed and future observers.
	       * @param {Mixed} value The value to store in the subject.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.value = value;
	        this.hasValue = true;
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	        this.error = null;
	        this.value = null;
	      }
	    });
	
	    return AsyncSubject;
	  }(Observable));
	
	  var AnonymousSubject = Rx.AnonymousSubject = (function (__super__) {
	    inherits(AnonymousSubject, __super__);
	    function AnonymousSubject(observer, observable) {
	      this.observer = observer;
	      this.observable = observable;
	      __super__.call(this);
	    }
	
	    addProperties(AnonymousSubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        return this.observable.subscribe(o);
	      },
	      onCompleted: function () {
	        this.observer.onCompleted();
	      },
	      onError: function (error) {
	        this.observer.onError(error);
	      },
	      onNext: function (value) {
	        this.observer.onNext(value);
	      }
	    });
	
	    return AnonymousSubject;
	  }(Observable));
	
	  /**
	   *  Represents a value that changes over time.
	   *  Observers can subscribe to the subject to receive the last (or initial) value and all subsequent notifications.
	   */
	  var BehaviorSubject = Rx.BehaviorSubject = (function (__super__) {
	    inherits(BehaviorSubject, __super__);
	    function BehaviorSubject(value) {
	      __super__.call(this);
	      this.value = value;
	      this.observers = [];
	      this.isDisposed = false;
	      this.isStopped = false;
	      this.hasError = false;
	    }
	
	    addProperties(BehaviorSubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.observers.push(o);
	          o.onNext(this.value);
	          return new InnerSubscription(this, o);
	        }
	        if (this.hasError) {
	          o.onError(this.error);
	        } else {
	          o.onCompleted();
	        }
	        return disposableEmpty;
	      },
	      /**
	       * Gets the current value or throws an exception.
	       * Value is frozen after onCompleted is called.
	       * After onError is called always throws the specified exception.
	       * An exception is always thrown after dispose is called.
	       * @returns {Mixed} The initial value passed to the constructor until onNext is called; after which, the last value passed to onNext.
	       */
	      getValue: function () {
	          checkDisposed(this);
	          if (this.hasError) {
	              throw this.error;
	          }
	          return this.value;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () { return this.observers.length > 0; },
	      /**
	       * Notifies all subscribed observers about the end of the sequence.
	       */
	      onCompleted: function () {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          os[i].onCompleted();
	        }
	
	        this.observers.length = 0;
	      },
	      /**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        this.hasError = true;
	        this.error = error;
	
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          os[i].onError(error);
	        }
	
	        this.observers.length = 0;
	      },
	      /**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.value = value;
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          os[i].onNext(value);
	        }
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	        this.value = null;
	        this.error = null;
	      }
	    });
	
	    return BehaviorSubject;
	  }(Observable));
	
	  /**
	   * Represents an object that is both an observable sequence as well as an observer.
	   * Each notification is broadcasted to all subscribed and future observers, subject to buffer trimming policies.
	   */
	  var ReplaySubject = Rx.ReplaySubject = (function (__super__) {
	
	    var maxSafeInteger = Math.pow(2, 53) - 1;
	
	    function createRemovableDisposable(subject, observer) {
	      return disposableCreate(function () {
	        observer.dispose();
	        !subject.isDisposed && subject.observers.splice(subject.observers.indexOf(observer), 1);
	      });
	    }
	
	    inherits(ReplaySubject, __super__);
	
	    /**
	     *  Initializes a new instance of the ReplaySubject class with the specified buffer size, window size and scheduler.
	     *  @param {Number} [bufferSize] Maximum element count of the replay buffer.
	     *  @param {Number} [windowSize] Maximum time length of the replay buffer.
	     *  @param {Scheduler} [scheduler] Scheduler the observers are invoked on.
	     */
	    function ReplaySubject(bufferSize, windowSize, scheduler) {
	      this.bufferSize = bufferSize == null ? maxSafeInteger : bufferSize;
	      this.windowSize = windowSize == null ? maxSafeInteger : windowSize;
	      this.scheduler = scheduler || currentThreadScheduler;
	      this.q = [];
	      this.observers = [];
	      this.isStopped = false;
	      this.isDisposed = false;
	      this.hasError = false;
	      this.error = null;
	      __super__.call(this);
	    }
	
	    addProperties(ReplaySubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	        var so = new ScheduledObserver(this.scheduler, o), subscription = createRemovableDisposable(this, so);
	
	        this._trim(this.scheduler.now());
	        this.observers.push(so);
	
	        for (var i = 0, len = this.q.length; i < len; i++) {
	          so.onNext(this.q[i].value);
	        }
	
	        if (this.hasError) {
	          so.onError(this.error);
	        } else if (this.isStopped) {
	          so.onCompleted();
	        }
	
	        so.ensureActive();
	        return subscription;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () {
	        return this.observers.length > 0;
	      },
	      _trim: function (now) {
	        while (this.q.length > this.bufferSize) {
	          this.q.shift();
	        }
	        while (this.q.length > 0 && (now - this.q[0].interval) > this.windowSize) {
	          this.q.shift();
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        var now = this.scheduler.now();
	        this.q.push({ interval: now, value: value });
	        this._trim(now);
	
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          var observer = os[i];
	          observer.onNext(value);
	          observer.ensureActive();
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        this.error = error;
	        this.hasError = true;
	        var now = this.scheduler.now();
	        this._trim(now);
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          var observer = os[i];
	          observer.onError(error);
	          observer.ensureActive();
	        }
	        this.observers.length = 0;
	      },
	      /**
	       * Notifies all subscribed observers about the end of the sequence.
	       */
	      onCompleted: function () {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        var now = this.scheduler.now();
	        this._trim(now);
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          var observer = os[i];
	          observer.onCompleted();
	          observer.ensureActive();
	        }
	        this.observers.length = 0;
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	      }
	    });
	
	    return ReplaySubject;
	  }(Observable));
	
	  /**
	  * Used to pause and resume streams.
	  */
	  Rx.Pauser = (function (__super__) {
	    inherits(Pauser, __super__);
	    function Pauser() {
	      __super__.call(this);
	    }
	
	    /**
	     * Pauses the underlying sequence.
	     */
	    Pauser.prototype.pause = function () { this.onNext(false); };
	
	    /**
	    * Resumes the underlying sequence.
	    */
	    Pauser.prototype.resume = function () { this.onNext(true); };
	
	    return Pauser;
	  }(Subject));
	
	  if (true) {
	    root.Rx = Rx;
	
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Rx;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (freeExports && freeModule) {
	    // in Node.js or RingoJS
	    if (moduleExports) {
	      (freeModule.exports = Rx).Rx = Rx;
	    } else {
	      freeExports.Rx = Rx;
	    }
	  } else {
	    // in a browser or Rhino
	    root.Rx = Rx;
	  }
	
	  // All code before this point will be filtered from stack traces.
	  var rEndingLine = captureLine();
	
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module), (function() { return this; }()), __webpack_require__(6)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.fetchJsonp = mod.exports;
	  }
	})(this, function (exports, module) {
	  'use strict';
	
	  var defaultOptions = {
	    timeout: 5000,
	    jsonpCallback: 'callback'
	  };
	
	  function generateCallbackFunction() {
	    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
	  }
	
	  // Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined' error if request timeout
	  function clearFunction(functionName) {
	    // IE8 throws an exception when you try to delete a property on window
	    // http://stackoverflow.com/a/1824228/751089
	    try {
	      delete window[functionName];
	    } catch (e) {
	      window[functionName] = undefined;
	    }
	  }
	
	  function removeScript(scriptId) {
	    var script = document.getElementById(scriptId);
	    document.getElementsByTagName("head")[0].removeChild(script);
	  }
	
	  var fetchJsonp = function fetchJsonp(url) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var timeout = options.timeout != null ? options.timeout : defaultOptions.timeout;
	    var jsonpCallback = options.jsonpCallback != null ? options.jsonpCallback : defaultOptions.jsonpCallback;
	
	    var timeoutId = undefined;
	
	    return new Promise(function (resolve, reject) {
	      var callbackFunction = generateCallbackFunction();
	
	      window[callbackFunction] = function (response) {
	        resolve({
	          ok: true,
	          // keep consistent with fetch API
	          json: function json() {
	            return Promise.resolve(response);
	          }
	        });
	
	        if (timeoutId) clearTimeout(timeoutId);
	
	        removeScript(jsonpCallback + '_' + callbackFunction);
	
	        clearFunction(callbackFunction);
	      };
	
	      // Check if the user set their own params, and if not add a ? to start a list of params
	      url += url.indexOf('?') === -1 ? '?' : '&';
	
	      var jsonpScript = document.createElement('script');
	      jsonpScript.setAttribute("src", url + jsonpCallback + '=' + callbackFunction);
	      jsonpScript.id = jsonpCallback + '_' + callbackFunction;
	      document.getElementsByTagName("head")[0].appendChild(jsonpScript);
	
	      timeoutId = setTimeout(function () {
	        reject(new Error('JSONP request to ' + url + ' timed out'));
	
	        clearFunction(callbackFunction);
	        removeScript(jsonpCallback + '_' + callbackFunction);
	      }, timeout);
	    });
	  };
	
	  // export as global function
	  /*
	  let local;
	  if (typeof global !== 'undefined') {
	    local = global;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }
	  
	  local.fetchJsonp = fetchJsonp;
	  */
	
	  module.exports = fetchJsonp;
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tile = __webpack_require__(9);
	
	var _Tile2 = _interopRequireDefault(_Tile);
	
	var _reactMotion = __webpack_require__(13);
	
	var Wall = (function (_Component) {
	    _inherits(Wall, _Component);
	
	    function Wall() {
	        _classCallCheck(this, Wall);
	
	        _get(Object.getPrototypeOf(Wall.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Wall, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            var _this = this;
	
	            var configs = {};
	            Object.keys(this.props.items).map(function (key) {
	                configs[key] = {
	                    opacity: (0, _reactMotion.spring)(1),
	                    width: (0, _reactMotion.spring)(375),
	                    margin: (0, _reactMotion.spring)(10),
	                    item: _this.props.items[key]
	                };
	            });
	            return configs;
	        }
	    }, {
	        key: 'willEnter',
	        value: function willEnter(key) {
	            return {
	                opacity: (0, _reactMotion.spring)(0),
	                width: (0, _reactMotion.spring)(0),
	                margin: (0, _reactMotion.spring)(0),
	                item: this.props.items[key]
	            };
	        }
	    }, {
	        key: 'willLeave',
	        value: function willLeave(key, style) {
	            return {
	                opacity: (0, _reactMotion.spring)(0),
	                width: (0, _reactMotion.spring)(0),
	                margin: (0, _reactMotion.spring)(0),
	                item: style.item
	            };
	        }
	    }, {
	        key: 'renderTile',
	        value: function renderTile(key, itemValues) {
	            var item = itemValues.item;
	
	            var styleConfig = _objectWithoutProperties(itemValues, ['item']);
	
	            var itemProps = _objectWithoutProperties(item, []);
	
	            var style = {
	                opacity: styleConfig.opacity,
	                width: styleConfig.width + 'px',
	                marginLeft: styleConfig.margin,
	                marginRight: styleConfig.margin
	            };
	
	            return _react2['default'].createElement(_Tile2['default'], _extends({ key: key,
	                style: style
	            }, itemProps));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2['default'].createElement(
	                _reactMotion.TransitionMotion,
	                {
	                    styles: this.getStyles.bind(this)(),
	                    willEnter: this.willEnter.bind(this),
	                    willLeave: this.willLeave.bind(this) },
	                function (values) {
	                    return _react2['default'].createElement(
	                        'div',
	                        { className: 'climb__wall' },
	                        Object.keys(values).map(function (key) {
	                            var itemValues = values[key];
	                            return _this2.renderTile(key, itemValues);
	                        })
	                    );
	                }
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            items: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	    }]);
	
	    return Wall;
	})(_react.Component);
	
	exports['default'] = Wall;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Image = __webpack_require__(10);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _Message = __webpack_require__(11);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _Author = __webpack_require__(12);
	
	var _Author2 = _interopRequireDefault(_Author);
	
	var Tile = (function (_React$Component) {
	    _inherits(Tile, _React$Component);
	
	    function Tile(props) {
	        _classCallCheck(this, Tile);
	
	        _get(Object.getPrototypeOf(Tile.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(Tile, [{
	        key: 'createImage',
	        value: function createImage() {
	
	            if (this.props.image !== null) {
	                var _props$image = this.props.image;
	                var src = _props$image.url;
	                var width = _props$image.width;
	                var height = _props$image.height;
	
	                return _react2['default'].createElement(_Image2['default'], { src: src,
	                    width: width,
	                    height: height });
	            }
	            return null;
	        }
	    }, {
	        key: 'createMessage',
	        value: function createMessage() {
	
	            if (this.props.message) {
	                return _react2['default'].createElement(_Message2['default'], { body: this.props.message });
	            }
	            return null;
	        }
	    }, {
	        key: 'createClassString',
	        value: function createClassString() {
	
	            var classString = 'climb__tile climb__tile--' + this.props.source_type;
	
	            if (this.props.image) {
	                classString += ' climb__tile--has-media climb__tile--has-image';
	            } else {
	                classString += ' climb__tile--has-no-image';
	            }
	
	            if (this.props.video_url) {
	                classString += ' climb__tile--has-media climb__tile--has-video';
	            } else {
	                classString += ' climb__tile--has-no-video';
	            }
	
	            return classString;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var image = this.createImage();
	            var message = this.createMessage();
	            var classString = this.createClassString();
	            var author = this.props.author;
	
	            return _react2['default'].createElement(
	                'div',
	                { className: classString,
	                    style: this.props.style },
	                _react2['default'].createElement(
	                    'a',
	                    { href: this.props.link },
	                    image
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'climb__tile__content' },
	                    message,
	                    _react2['default'].createElement(_Author2['default'], author)
	                )
	            );
	        }
	    }]);
	
	    return Tile;
	})(_react2['default'].Component);
	
	Tile.propTypes = {
	
	    // Required attrs
	    link: _react2['default'].PropTypes.string.isRequired,
	    source_type: _react2['default'].PropTypes.string.isRequired,
	    timestamp: _react2['default'].PropTypes.number.isRequired,
	    author: _react2['default'].PropTypes.shape({
	        username: _react2['default'].PropTypes.string.isRequired,
	        picture: _react2['default'].PropTypes.string.isRequired,
	        link: _react2['default'].PropTypes.string.isRequired
	    }),
	
	    // Optional attrs
	    message: _react2['default'].PropTypes.string,
	    video_src: _react2['default'].PropTypes.string,
	    image: _react2['default'].PropTypes.shape({
	        url: _react2['default'].PropTypes.string.isRequired,
	        width: _react2['default'].PropTypes.number.isRequired,
	        height: _react2['default'].PropTypes.number.isRequired
	    })
	
	};
	
	exports['default'] = Tile;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Image = (function (_React$Component) {
	    _inherits(Image, _React$Component);
	
	    function Image() {
	        _classCallCheck(this, Image);
	
	        _get(Object.getPrototypeOf(Image.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Image, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement("img", { className: "climb__tile__image",
	                src: this.props.src, "data-width": this.props.width, "data-height": this.props.height });
	        }
	    }]);
	
	    return Image;
	})(_react2["default"].Component);
	
	Image.propTypes = {
	    src: _react2["default"].PropTypes.string.isRequired,
	    width: _react2["default"].PropTypes.number,
	    height: _react2["default"].PropTypes.number
	};
	
	exports["default"] = Image;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Message = (function (_React$Component) {
	    _inherits(Message, _React$Component);
	
	    function Message() {
	        _classCallCheck(this, Message);
	
	        _get(Object.getPrototypeOf(Message.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Message, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement("div", { className: "climb__tile__message",
	                dangerouslySetInnerHTML: { __html: this.props.body } });
	        }
	    }]);
	
	    return Message;
	})(_react2["default"].Component);
	
	Message.propTypes = {
	    body: _react2["default"].PropTypes.string.isRequired
	};
	
	exports["default"] = Message;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Author = (function (_React$Component) {
	    _inherits(Author, _React$Component);
	
	    function Author() {
	        _classCallCheck(this, Author);
	
	        _get(Object.getPrototypeOf(Author.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Author, [{
	        key: "render",
	        value: function render() {
	
	            return _react2["default"].createElement(
	                "a",
	                { className: "climb__tile__author",
	                    href: this.props.link },
	                _react2["default"].createElement("img", { src: this.props.picture,
	                    alt: "Profile pic of " + this.props.name }),
	                _react2["default"].createElement(
	                    "h4",
	                    { className: "climb__tile__author__username" },
	                    this.props.username
	                )
	            );
	        }
	    }]);
	
	    return Author;
	})(_react2["default"].Component);
	
	Author.propTypes = {};
	
	exports["default"] = Author;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components2 = __webpack_require__(14);
	
	var _components3 = _interopRequireDefault(_components2);
	
	var _reorderKeys = __webpack_require__(26);
	
	var _reorderKeys2 = _interopRequireDefault(_reorderKeys);
	
	var _components = _components3['default'](_react2['default']);
	
	var Spring = _components.Spring;
	var TransitionSpring = _components.TransitionSpring;
	var Motion = _components.Motion;
	var StaggeredMotion = _components.StaggeredMotion;
	var TransitionMotion = _components.TransitionMotion;
	exports.Spring = Spring;
	exports.TransitionSpring = TransitionSpring;
	exports.Motion = Motion;
	exports.StaggeredMotion = StaggeredMotion;
	exports.TransitionMotion = TransitionMotion;
	
	var _spring2 = __webpack_require__(27);
	
	var _spring3 = _interopRequireDefault(_spring2);
	
	exports.spring = _spring3['default'];
	
	var _presets2 = __webpack_require__(28);
	
	var _presets3 = _interopRequireDefault(_presets2);
	
	exports.presets = _presets3['default'];
	var utils = {
	  reorderKeys: _reorderKeys2['default']
	};
	exports.utils = utils;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = components;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _noVelocity = __webpack_require__(15);
	
	var _noVelocity2 = _interopRequireDefault(_noVelocity);
	
	var _hasReachedStyle = __webpack_require__(16);
	
	var _hasReachedStyle2 = _interopRequireDefault(_hasReachedStyle);
	
	var _mergeDiff = __webpack_require__(17);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _animationLoop = __webpack_require__(18);
	
	var _animationLoop2 = _interopRequireDefault(_animationLoop);
	
	var _zero = __webpack_require__(21);
	
	var _zero2 = _interopRequireDefault(_zero);
	
	var _updateTree = __webpack_require__(22);
	
	var _deprecatedSprings2 = __webpack_require__(24);
	
	var _deprecatedSprings3 = _interopRequireDefault(_deprecatedSprings2);
	
	var _stripStyle = __webpack_require__(25);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var startAnimation = _animationLoop2['default']();
	
	function mapObject(f, obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = f(obj[key], key);
	  }
	  return ret;
	}
	
	function everyObj(f, obj) {
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    if (!f(obj[key], key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function components(React) {
	  var PropTypes = React.PropTypes;
	
	  var Motion = React.createClass({
	    displayName: 'Motion',
	
	    propTypes: {
	      // TOOD: warn against putting a config in here
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `defaultValue` has been changed to `defaultStyle`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `endValue` has been changed to `style`. Its format ' + 'received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: PropTypes.object,
	      style: PropTypes.object.isRequired,
	      children: PropTypes.func.isRequired
	    },
	
	    getInitialState: function getInitialState() {
	      var _props = this.props;
	      var defaultStyle = _props.defaultStyle;
	      var style = _props.style;
	
	      var currentStyle = defaultStyle || style;
	      return {
	        currentStyle: currentStyle,
	        currentVelocity: mapObject(_zero2['default'], currentStyle)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyle = state.currentStyle;
	      var currentVelocity = state.currentVelocity;
	      var style = this.props.style;
	
	      var newCurrentStyle = _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocity, style);
	      var newCurrentVelocity = _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocity, style);
	
	      // TOOD: this isn't necessary anymore. It was used only against endValue func
	      if (_noVelocity2['default'](currentVelocity, newCurrentStyle) && _noVelocity2['default'](newCurrentVelocity, newCurrentStyle)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }
	
	      return {
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      // Is smart enough to not start it twice
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // `this.hasUnmounted` might be true in the following condition:
	      // user does some checks in `style` and calls an owner handler
	      // owner sets state in the callback, triggering a re-render
	      // unmounts Motion
	      if (!this.hasUnmounted) {
	        this.setState({
	          currentStyle: _updateTree.interpolateValue(alpha, nextState.currentStyle, prevState.currentStyle),
	          currentVelocity: nextState.currentVelocity
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = _stripStyle2['default'](this.state.currentStyle);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var StaggeredMotion = React.createClass({
	    displayName: 'StaggeredMotion',
	
	    propTypes: {
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.arrayOf(PropTypes.object),
	      styles: PropTypes.func.isRequired,
	      children: PropTypes.func.isRequired
	    },
	
	    getInitialState: function getInitialState() {
	      var _props2 = this.props;
	      var styles = _props2.styles;
	      var defaultStyles = _props2.defaultStyles;
	
	      var currentStyles = defaultStyles ? defaultStyles : styles();
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: currentStyles.map(function (s) {
	          return mapObject(_zero2['default'], s);
	        })
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;
	
	      var styles = this.props.styles(currentStyles.map(_stripStyle2['default']));
	
	      var newCurrentStyles = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });
	      var newCurrentVelocities = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });
	
	      // TODO: is this right?
	      if (currentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }) && newCurrentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      })) {
	        this.stopAnimation();
	      }
	
	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = nextState.currentStyles.map(function (style, i) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[i]);
	        });
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = this.state.currentStyles.map(_stripStyle2['default']);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var TransitionMotion = React.createClass({
	    displayName: 'TransitionMotion',
	
	    propTypes: {
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `defaultValue` has been changed to ' + '`defaultStyles`. Its format received a few (easy to update!) ' + 'changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `endValue` has been changed to `styles`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.objectOf(PropTypes.any),
	      styles: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(PropTypes.any.isRequired)]).isRequired,
	      willLeave: PropTypes.oneOfType([PropTypes.func]),
	      // TOOD: warn against putting configs in here
	      willEnter: PropTypes.oneOfType([PropTypes.func]),
	      children: PropTypes.func.isRequired
	    },
	
	    getDefaultProps: function getDefaultProps() {
	      return {
	        willEnter: function willEnter(key, value) {
	          return value;
	        },
	        willLeave: function willLeave() {
	          return null;
	        }
	      };
	    },
	
	    getInitialState: function getInitialState() {
	      var _props3 = this.props;
	      var styles = _props3.styles;
	      var defaultStyles = _props3.defaultStyles;
	
	      var currentStyles = undefined;
	      if (defaultStyles == null) {
	        if (typeof styles === 'function') {
	          currentStyles = styles();
	        } else {
	          currentStyles = styles;
	        }
	      } else {
	        currentStyles = defaultStyles;
	      }
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: mapObject(function (s) {
	          return mapObject(_zero2['default'], s);
	        }, currentStyles)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;
	      var _props4 = this.props;
	      var styles = _props4.styles;
	      var willEnter = _props4.willEnter;
	      var willLeave = _props4.willLeave;
	
	      if (typeof styles === 'function') {
	        styles = styles(currentStyles);
	      }
	
	      // TODO: huh?
	      var mergedStyles = styles; // set mergedStyles to styles as the default
	      var hasNewKey = false;
	
	      mergedStyles = _mergeDiff2['default'](currentStyles, styles,
	      // TODO: stop allocating like crazy in this whole code path
	      function (key) {
	        var res = willLeave(key, currentStyles[key], styles, currentStyles, currentVelocities);
	        if (res == null) {
	          // For legacy reason. We won't allow returning null soon
	          // TODO: remove, after next release
	          return null;
	        }
	
	        if (_noVelocity2['default'](currentVelocities[key], currentStyles[key]) && _hasReachedStyle2['default'](currentStyles[key], res)) {
	          return null;
	        }
	        return res;
	      });
	
	      Object.keys(mergedStyles).filter(function (key) {
	        return !currentStyles.hasOwnProperty(key);
	      }).forEach(function (key) {
	        var _extends2, _extends3;
	
	        hasNewKey = true;
	        var enterStyle = willEnter(key, mergedStyles[key], styles, currentStyles, currentVelocities);
	
	        // We can mutate this here because mergeDiff returns a new Obj
	        mergedStyles[key] = enterStyle;
	
	        currentStyles = _extends({}, currentStyles, (_extends2 = {}, _extends2[key] = enterStyle, _extends2));
	        currentVelocities = _extends({}, currentVelocities, (_extends3 = {}, _extends3[key] = mapObject(_zero2['default'], enterStyle), _extends3));
	      });
	
	      var newCurrentStyles = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);
	      var newCurrentVelocities = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);
	
	      if (!hasNewKey && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }, currentVelocities) && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      }, newCurrentVelocities)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }
	
	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = mapObject(function (style, key) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[key]);
	        }, nextState.currentStyles);
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = mapObject(_stripStyle2['default'], this.state.currentStyles);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var _deprecatedSprings = _deprecatedSprings3['default'](React);
	
	  var Spring = _deprecatedSprings.Spring;
	  var TransitionSpring = _deprecatedSprings.TransitionSpring;
	
	  return { Spring: Spring, TransitionSpring: TransitionSpring, Motion: Motion, StaggeredMotion: StaggeredMotion, TransitionMotion: TransitionMotion };
	}
	
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	// currentStyle keeps the info about whether a prop is configured as a spring
	// or if it's just a random prop that happens to be present on the style
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = noVelocity;
	
	function noVelocity(currentVelocity, currentStyle) {
	  for (var key in currentVelocity) {
	    if (!currentVelocity.hasOwnProperty(key)) {
	      continue;
	    }
	    if (currentStyle[key].config && currentVelocity[key] !== 0) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = hasReachedStyle;
	
	function hasReachedStyle(currentStyle, style) {
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    var currentValue = currentStyle[key];
	    var destValue = style[key];
	    if (!destValue.config) {
	      // not a spring config
	      continue;
	    }
	    if (currentValue.config && currentValue.val !== destValue.val) {
	      return false;
	    }
	    if (!currentValue.config && currentValue !== destValue.val) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	// this function is allocation-less thanks to babel, which transforms the tail
	// calls into loops
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = mergeDiff;
	function mergeDiffArr(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
	  var _again = true;
	
	  _function: while (_again) {
	    var arrA = _x,
	        arrB = _x2,
	        collB = _x3,
	        indexA = _x4,
	        indexB = _x5,
	        onRemove = _x6,
	        accum = _x7;
	    endA = endB = keyA = keyB = fill = fill = undefined;
	    _again = false;
	
	    var endA = indexA === arrA.length;
	    var endB = indexB === arrB.length;
	    var keyA = arrA[indexA];
	    var keyB = arrB[indexB];
	    if (endA && endB) {
	      // returning null here, otherwise lint complains that we're not expecting
	      // a return value in subsequent calls. We know what we're doing.
	      return null;
	    }
	
	    if (endA) {
	      accum[keyB] = collB[keyB];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (endB) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (keyA === keyB) {
	      accum[keyA] = collB[keyA];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (!collB.hasOwnProperty(keyA)) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    _x = arrA;
	    _x2 = arrB;
	    _x3 = collB;
	    _x4 = indexA + 1;
	    _x5 = indexB;
	    _x6 = onRemove;
	    _x7 = accum;
	    _again = true;
	    continue _function;
	  }
	}
	
	function mergeDiff(a, b, onRemove) {
	  var ret = {};
	  // if anyone can make this work without allocating the arrays here, we'll
	  // give you a medal
	  mergeDiffArr(Object.keys(a), Object.keys(b), b, 0, 0, onRemove, ret);
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = configAnimation;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _performanceNow = __webpack_require__(19);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(20);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	function configAnimation() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _config$timeStep = config.timeStep;
	  var timeStep = _config$timeStep === undefined ? 1 / 60 * 1000 : _config$timeStep;
	  var _config$timeScale = config.timeScale;
	  var timeScale = _config$timeScale === undefined ? 1 : _config$timeScale;
	  var _config$maxSteps = config.maxSteps;
	  var maxSteps = _config$maxSteps === undefined ? 10 : _config$maxSteps;
	  var _config$raf = config.raf;
	  var raf = _config$raf === undefined ? _raf2['default'] : _config$raf;
	  var _config$now = config.now;
	  var now = _config$now === undefined ? _performanceNow2['default'] : _config$now;
	
	  var animRunning = [];
	  var running = false;
	  var prevTime = 0;
	  var accumulatedTime = 0;
	
	  function loop() {
	    var currentTime = now();
	    var frameTime = currentTime - prevTime; // delta
	
	    prevTime = currentTime;
	    accumulatedTime += frameTime * timeScale;
	
	    if (accumulatedTime > timeStep * maxSteps) {
	      accumulatedTime = 0;
	    }
	
	    var frameNumber = Math.ceil(accumulatedTime / timeStep);
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i = animRunning[i];
	      var active = _animRunning$i.active;
	      var animationStep = _animRunning$i.animationStep;
	      var prevPrevState = _animRunning$i.prevState;
	      var prevNextState = animRunning[i].nextState;
	
	      if (!active) {
	        continue;
	      }
	
	      // Seems like because the TS sets destVals as enterVals for the first
	      // tick, we might render that value twice. We render it once, currValue is
	      // enterVal and destVal is enterVal. The next tick is faster than 16ms,
	      // so accumulatedTime (which would be about -16ms from the previous tick)
	      // is negative (-16ms + any number less than 16ms < 0). So we just render
	      // part ways towards the nextState, but that's enterVal still. We render
	      // say 75% between currValue (=== enterVal) and destValue (=== enterVal).
	      // So we render the same value a second time.
	      // The solution below is to recalculate the destination state even when
	      // you're moving partially towards it.
	      if (accumulatedTime <= 0) {
	        animRunning[i].nextState = animationStep(timeStep / 1000, prevPrevState);
	      } else {
	        for (var j = 0; j < frameNumber; j++) {
	          animRunning[i].nextState = animationStep(timeStep / 1000, prevNextState);
	          var _ref = [prevNextState, animRunning[i].nextState];
	          animRunning[i].prevState = _ref[0];
	          prevNextState = _ref[1];
	        }
	      }
	    }
	
	    accumulatedTime = accumulatedTime - frameNumber * timeStep;
	
	    // Render and filter in one iteration.
	    var alpha = 1 + accumulatedTime / timeStep;
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i2 = animRunning[i];
	      var animationRender = _animRunning$i2.animationRender;
	      var nextState = _animRunning$i2.nextState;
	      var prevState = _animRunning$i2.prevState;
	
	      // Might mutate animRunning........
	      animationRender(alpha, nextState, prevState);
	    }
	
	    animRunning = animRunning.filter(function (_ref2) {
	      var active = _ref2.active;
	      return active;
	    });
	
	    if (animRunning.length === 0) {
	      running = false;
	    } else {
	      raf(loop);
	    }
	  }
	
	  function start() {
	    if (!running) {
	      running = true;
	      prevTime = now();
	      accumulatedTime = 0;
	      raf(loop);
	    }
	  }
	
	  return function startAnimation(state, animationStep, animationRender) {
	    for (var i = 0; i < animRunning.length; i++) {
	      var val = animRunning[i];
	      if (val.animationStep === animationStep) {
	        val.active = true;
	        val.prevState = state;
	        start();
	        return val.stop;
	      }
	    }
	
	    var newAnim = {
	      animationStep: animationStep,
	      animationRender: animationRender,
	      prevState: state,
	      nextState: state,
	      active: true
	    };
	
	    newAnim.stop = function () {
	      return newAnim.active = false;
	    };
	    animRunning.push(newAnim);
	
	    start();
	
	    return newAnim.stop;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(19)
	  , global = typeof window === 'undefined' ? {} : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = global['request' + suffix]
	  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
	
	for(var i = 0; i < vendors.length && !raf; i++) {
	  raf = global[vendors[i] + 'Request' + suffix]
	  caf = global[vendors[i] + 'Cancel' + suffix]
	      || global[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(global, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(global, arguments)
	}


/***/ },
/* 21 */
/***/ function(module, exports) {

	// used by the tree-walking updates and springs. Avoids some allocations
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = zero;
	
	function zero() {
	  return 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.interpolateValue = interpolateValue;
	exports.updateCurrentStyle = updateCurrentStyle;
	exports.updateCurrentVelocity = updateCurrentVelocity;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _stepper = __webpack_require__(23);
	
	var _stepper2 = _interopRequireDefault(_stepper);
	
	// TODO: refactor common logic with updateCurrValue and updateCurrVelocity
	
	function interpolateValue(alpha, nextStyle, prevStyle) {
	  // might be used by a TransitionMotion, where prevStyle might not exist anymore
	  if (!prevStyle) {
	    return nextStyle;
	  }
	
	  var ret = {};
	  for (var key in nextStyle) {
	    if (!nextStyle.hasOwnProperty(key)) {
	      continue;
	    }
	
	    if (!nextStyle[key].config) {
	      ret[key] = nextStyle[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var prevValue = prevStyle[key].config ? prevStyle[key].val : prevStyle[key];
	    ret[key] = {
	      val: nextStyle[key].val * alpha + prevValue * (1 - alpha),
	      config: nextStyle[key].config
	    };
	  }
	
	  return ret;
	}
	
	// TODO: refactor common logic with updateCurrentVelocity
	
	function updateCurrentStyle(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (!style[key].config) {
	      ret[key] = style[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var _style$key$config = style[key].config;
	    var k = _style$key$config[0];
	    var b = _style$key$config[1];
	
	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[0];
	    ret[key] = {
	      val: val,
	      config: style[key].config
	    };
	  }
	  return ret;
	}
	
	function updateCurrentVelocity(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (!style[key].config) {
	      // not a spring config, not something we want to interpolate
	      ret[key] = 0;
	      continue;
	    }
	    var _style$key$config2 = style[key].config;
	    var k = _style$key$config2[0];
	    var b = _style$key$config2[1];
	
	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[1];
	    ret[key] = val;
	  }
	  return ret;
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	var errorMargin = 0.0001;
	
	function stepper(frameRate, x, v, destX, k, b) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * frameRate;
	  var newX = x + newV * frameRate;
	
	  if (Math.abs(newV - v) < errorMargin && Math.abs(newX - x) < errorMargin) {
	    return [destX, 0];
	  }
	
	  return [newX, newV];
	}
	
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = deprecatedSprings;
	var hasWarnedForSpring = {};
	var hasWarnedForTransitionSpring = {};
	
	function deprecatedSprings(React) {
	  var Spring = React.createClass({
	    displayName: 'Spring',
	
	    componentWillMount: function componentWillMount() {
	      if (false) {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForSpring[ownerName]) {
	          hasWarnedForSpring[ownerName] = true;
	          console.error('Spring (used in %srender) has now been renamed to Motion. ' + 'Please see the release note for the upgrade path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },
	
	    render: function render() {
	      return null;
	    }
	  });
	
	  var TransitionSpring = React.createClass({
	    displayName: 'TransitionSpring',
	
	    componentWillMount: function componentWillMount() {
	      if (false) {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForTransitionSpring[ownerName]) {
	          hasWarnedForTransitionSpring[ownerName] = true;
	          console.error('TransitionSpring (used in %srender) has now been renamed to ' + 'TransitionMotion. Please see the release note for the upgrade ' + 'path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },
	
	    render: function render() {
	      return null;
	    }
	  });
	
	  return { Spring: Spring, TransitionSpring: TransitionSpring };
	}
	
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	// turn {x: {val: 1, config: [1, 2]}, y: 2} into {x: 1, y: 2}
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = style[key].val == null ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = reorderKeys;
	
	function reorderKeys(obj, f) {
	  var newKeys = f(Object.keys(obj));
	  var ret = {};
	  for (var i = 0; i < newKeys.length; i++) {
	    var key = newKeys[i];
	    ret[key] = obj[key];
	  }
	
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(28);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	// instead of exposing {val: bla, config: bla}, use a helper
	
	function spring(val) {
	  var config = arguments.length <= 1 || arguments[1] === undefined ? _presets2['default'].noWobble : arguments[1];
	
	  return { val: val, config: config };
	}
	
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	// [stiffness, damping]
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: [170, 26], // the default
	  gentle: [120, 14],
	  wobbly: [180, 12],
	  stiff: [210, 20]
	};
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, ".climb__wall {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  font-size: 100%; }\n\n.climb__tile {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  height: 425px;\n  box-sizing: border-box;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  outline: 1px solid transparent;\n  margin-bottom: 20px;\n  overflow: hidden;\n  text-align: left;\n  border-radius: 7px;\n  background-color: #f6f6f6;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.climb__tile__content {\n  z-index: 1;\n  padding: 26px;\n  background-color: #f6f6f6; }\n  .climb__tile--has-no-image .climb__tile__content {\n    height: 100%;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    box-sizing: border-box; }\n\n.climb__tile__image {\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px; }\n\n.climb__tile__message {\n  z-index: 1;\n  margin-bottom: 24px; }\n  .climb__tile__message > a {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 260px;\n    display: inline-block;\n    vertical-align: bottom; }\n  .climb__tile--has-no-image .climb__tile__message {\n    font-size: 185%; }\n\n.climb__tile__author {\n  display: block;\n  margin: -10px; }\n  .climb__tile__author img {\n    border-radius: 25px;\n    width: 34px; }\n  .climb__tile__author .climb__tile__author__username {\n    display: inline-block;\n    margin: 0 0 0 10px;\n    line-height: 34px;\n    vertical-align: top; }\n\n.climb-badge {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 9;\n  background: #A9CAE2 url(" + __webpack_require__(32) + ") center center no-repeat;\n  width: 200px;\n  height: 80px;\n  border-radius: 5px; }\n  .climb-badge > span {\n    position: absolute !important;\n    top: -9999px !important;\n    left: -9999px !important; }\n", ""]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ea94cbc37b70ee0fc232e6ab2fa00a02.png"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjQ4MDdhZTgxMDNmNGQ4YWNhYTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2FsbENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGltYi1zb2NpYWwvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsaW1iLXNvY2lhbC9+L3J4LWxpdGUvcngubGl0ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZldGNoLWpzb25wL2J1aWxkL2ZldGNoLWpzb25wLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dhbGwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRob3IuanN4Iiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9yZWFjdC1tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL25vVmVsb2NpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2hhc1JlYWNoZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbWVyZ2VEaWZmLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9hbmltYXRpb25Mb29wLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9yYWYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3plcm8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3VwZGF0ZVRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3N0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2RlcHJlY2F0ZWRTcHJpbmdzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zdHJpcFN0eWxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9yZW9yZGVyS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3ByaW5nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9wcmVzZXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9tYWluLnNjc3M/M2FkYiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jbGltYi5zb2NpYWxfbG9nby0tc21hbGwucG5nIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW1DLGdDQUFnQztBQUNuRSx3Q0FBdUMsb0NBQW9DO0FBQzNFLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUEsV0FBVTtBQUNWOztBQUVBLHFDOzs7Ozs7QUNyY0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDbkJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUM1R0E7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQzs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCx3QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUMvSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7Ozs7QUMvQkQ7QUFDQSxnREFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2Isc0NBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25FQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUNWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDM0ZBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUgsV0FBVTtBQUNWOztBQUVBLHFDOzs7Ozs7QUMvQ0EsVUFBUyxJQUFJLHVCQUF1QixPQUFPLE9BQU87QUFDbEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBLHlCQUF3QixzQkFBc0I7O0FBRTlDO0FBQ0E7O0FBRUEsV0FBVTtBQUNWOztBQUVBLHFDOzs7Ozs7QUNuQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7QUNWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EseUNBQXdDLDBCQUEwQix5QkFBeUIsa0JBQWtCLGdCQUFnQixlQUFlLGNBQWMsb0NBQW9DLDhCQUE4QixvQ0FBb0MsZ0NBQWdDLGdDQUFnQyxnQ0FBZ0MsNEJBQTRCLDRCQUE0Qiw0QkFBNEIsb0JBQW9CLEVBQUUsa0JBQWtCLDBCQUEwQix5QkFBeUIsa0JBQWtCLDJCQUEyQiw2QkFBNkIsMkJBQTJCLGtCQUFrQiwyQkFBMkIsc0NBQXNDLDJCQUEyQixzQ0FBc0MsbUNBQW1DLG1DQUFtQyxtQ0FBbUMsbUNBQW1DLHdCQUF3QixxQkFBcUIscUJBQXFCLHVCQUF1Qiw4QkFBOEIsd0NBQXdDLHdDQUF3QyxnQ0FBZ0MsZ0NBQWdDLEVBQUUsMkJBQTJCLGVBQWUsa0JBQWtCLDhCQUE4QixFQUFFLHNEQUFzRCxtQkFBbUIsNEJBQTRCLDJCQUEyQixvQkFBb0IscUNBQXFDLHFDQUFxQyxxQ0FBcUMsNkNBQTZDLGlDQUFpQyw2Q0FBNkMsNkJBQTZCLEVBQUUseUJBQXlCLG9CQUFvQix1QkFBdUIsV0FBVyxnQ0FBZ0MsaUNBQWlDLEVBQUUsMkJBQTJCLGVBQWUsd0JBQXdCLEVBQUUsK0JBQStCLDBCQUEwQix1QkFBdUIsOEJBQThCLHVCQUF1Qiw0QkFBNEIsNkJBQTZCLEVBQUUsc0RBQXNELHNCQUFzQixFQUFFLDBCQUEwQixtQkFBbUIsa0JBQWtCLEVBQUUsOEJBQThCLDBCQUEwQixrQkFBa0IsRUFBRSx5REFBeUQsNEJBQTRCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLEVBQUUsa0JBQWtCLG9CQUFvQixpQkFBaUIsZ0JBQWdCLGVBQWUscUZBQTRHLGlCQUFpQixpQkFBaUIsdUJBQXVCLEVBQUUseUJBQXlCLG9DQUFvQyw4QkFBOEIsK0JBQStCLEVBQUU7O0FBRWx5Rjs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREEsZ0Y7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBLG1CQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0EsU0FBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLGtCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQSxpQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDs7QUFFQSw4QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY3QtY2xpbWItc29jaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYjQ4MDdhZTgxMDNmNGQ4YWNhYTBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2FsbENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvV2FsbENvbnRhaW5lcic7XG5cbmltcG9ydCAnLi9zdHlsZS9tYWluLnNjc3MnO1xuXG5pZiAod2luZG93KSB7XG4gICAgd2luZG93LkNsaW1iID0gd2luZG93LkNsaW1iIHx8IHt9O1xuXG4gICAgY29uc3QgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xpbWItd2FsbCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkdGFyZ2V0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCAkaXRlbSA9ICR0YXJnZXRzW2ldO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uSWQgPSAkaXRlbS5kYXRhc2V0LmNvbGxlY3Rpb25JZDtcbiAgICAgICAgY29uc3QgbGltaXQgPSAkaXRlbS5kYXRhc2V0LmxpbWl0O1xuXG4gICAgICAgIFJlYWN0LnJlbmRlcihcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbENvbnRhaW5lciwge2NvbGxlY3Rpb25JZCwgbGltaXR9KSxcbiAgICAgICAgICAgICRpdGVtXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1dhbGxDb250YWluZXJ9O1xuZXhwb3J0IHtXYWxsfSBmcm9tICcuL2NvbXBvbmVudHMvV2FsbCc7XG5leHBvcnQge1RpbGV9IGZyb20gJy4vY29tcG9uZW50cy9UaWxlJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xpbWIgZnJvbSAnY2xpbWItc29jaWFsJztcbmltcG9ydCBXYWxsIGZyb20gJy4vV2FsbCc7XG5cblxuY2xhc3MgV2FsbENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGl0ZW1zOiB7fVxuICAgIH07XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjb2xsZWN0aW9uSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgbGltaXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICAgICAgXSlcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29sbGVjdGlvbklkOiAnNTYxYmE2MzQ0NTI4NGUxNzQwZTAxNmY3JyxcbiAgICAgICAgbGltaXQ6IDMwXG4gICAgfTtcblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNvbGxlY3Rpb25JZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xpbWJcbiAgICAgICAgICAgIC5nZXRTdHJlYW0odGhpcy5wcm9wcy5jb2xsZWN0aW9uSWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGl0ZW1zID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1heFNpemUgPSBwYXJzZUludCh0aGlzLnByb3BzLmxpbWl0LCAwKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZEl0ZW1zID0ge307XG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKDAsIG1heFNpemUpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkSXRlbXNbaXRlbS5pZF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBtYXBwZWRJdGVtc1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBsZXQgY2I7XG4gICAgICAgIGlmICh3aW5kb3cuQ2xpbWIgJiYgd2luZG93LkNsaW1iLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjYiA9IHdpbmRvdy5DbGltYi5vblVwZGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgICAgIGNiID0gKCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxXYWxsIGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfS8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsQ29udGFpbmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9XYWxsQ29udGFpbmVyLmpzeFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3J4TGl0ZSA9IHJlcXVpcmUoJ3J4LWxpdGUnKTtcblxudmFyIF9mZXRjaEpzb25wID0gcmVxdWlyZSgnZmV0Y2gtanNvbnAnKTtcblxudmFyIF9mZXRjaEpzb25wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZldGNoSnNvbnApO1xuXG52YXIgZ2V0U3RyZWFtID0gZnVuY3Rpb24gZ2V0U3RyZWFtKGNvbGxlY3Rpb25JZCkge1xuXG4gICAgdmFyIHBvbGxSYXRlID0gNSAqIDEwMDA7XG5cbiAgICB2YXIgcmVxdWVzdFN0cmVhbSA9IF9yeExpdGUuT2JzZXJ2YWJsZS5qdXN0KCdodHRwOi8vYXBwLmNsaW1iLnNvY2lhbC9hcGkvdjEvY29sbGVjdGlvbnMvJyArIGNvbGxlY3Rpb25JZCk7XG5cbiAgICB2YXIgdXBkYXRlU3RyZWFtID0gX3J4TGl0ZS5PYnNlcnZhYmxlLmludGVydmFsKHBvbGxSYXRlKS5zdGFydFdpdGgobnVsbCk7XG5cbiAgICB2YXIgcmVzcG9uc2VTdHJlYW0gPSB1cGRhdGVTdHJlYW0uY29tYmluZUxhdGVzdChyZXF1ZXN0U3RyZWFtLCBmdW5jdGlvbiAodGljaywgdXJsKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfSkuZmxhdE1hcChmdW5jdGlvbiAoYmFzZVVybCkge1xuXG4gICAgICAgIHZhciByZXF1ZXN0VXJsID0gJycgKyBiYXNlVXJsO1xuXG4gICAgICAgIHJldHVybiBfcnhMaXRlLk9ic2VydmFibGUuZnJvbVByb21pc2UoKDAsIF9mZXRjaEpzb25wMlsnZGVmYXVsdCddKShyZXF1ZXN0VXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZVN0cmVhbTtcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgICBnZXRTdHJlYW06IGdldFN0cmVhbVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xpbWItc29jaWFsL2Rpc3QvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCwgQWxsIHJpZ2h0cyByZXNlcnZlZC4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbjsoZnVuY3Rpb24gKHVuZGVmaW5lZCkge1xuXG4gIHZhciBvYmplY3RUeXBlcyA9IHtcbiAgICAnZnVuY3Rpb24nOiB0cnVlLFxuICAgICdvYmplY3QnOiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gY2hlY2tHbG9iYWwodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLk9iamVjdCA9PT0gT2JqZWN0KSA/IHZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIHZhciBmcmVlRXhwb3J0cyA9IChvYmplY3RUeXBlc1t0eXBlb2YgZXhwb3J0c10gJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSkgPyBleHBvcnRzIDogbnVsbDtcbiAgdmFyIGZyZWVNb2R1bGUgPSAob2JqZWN0VHlwZXNbdHlwZW9mIG1vZHVsZV0gJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUpID8gbW9kdWxlIDogbnVsbDtcbiAgdmFyIGZyZWVHbG9iYWwgPSBjaGVja0dsb2JhbChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlICYmIHR5cGVvZiBnbG9iYWwgPT09ICdvYmplY3QnICYmIGdsb2JhbCk7XG4gIHZhciBmcmVlU2VsZiA9IGNoZWNrR2xvYmFsKG9iamVjdFR5cGVzW3R5cGVvZiBzZWxmXSAmJiBzZWxmKTtcbiAgdmFyIGZyZWVXaW5kb3cgPSBjaGVja0dsb2JhbChvYmplY3RUeXBlc1t0eXBlb2Ygd2luZG93XSAmJiB3aW5kb3cpO1xuICB2YXIgbW9kdWxlRXhwb3J0cyA9IChmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHMpID8gZnJlZUV4cG9ydHMgOiBudWxsO1xuICB2YXIgdGhpc0dsb2JhbCA9IGNoZWNrR2xvYmFsKG9iamVjdFR5cGVzW3R5cGVvZiB0aGlzXSAmJiB0aGlzKTtcbiAgdmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8ICgoZnJlZVdpbmRvdyAhPT0gKHRoaXNHbG9iYWwgJiYgdGhpc0dsb2JhbC53aW5kb3cpKSAmJiBmcmVlV2luZG93KSB8fCBmcmVlU2VsZiB8fCB0aGlzR2xvYmFsIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbiAgdmFyIFJ4ID0ge1xuICAgIGludGVybmFsczoge30sXG4gICAgY29uZmlnOiB7XG4gICAgICBQcm9taXNlOiByb290LlByb21pc2VcbiAgICB9LFxuICAgIGhlbHBlcnM6IHsgfVxuICB9O1xuXG4gIC8vIERlZmF1bHRzXG4gIHZhciBub29wID0gUnguaGVscGVycy5ub29wID0gZnVuY3Rpb24gKCkgeyB9LFxuICAgIGlkZW50aXR5ID0gUnguaGVscGVycy5pZGVudGl0eSA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9LFxuICAgIGRlZmF1bHROb3cgPSBSeC5oZWxwZXJzLmRlZmF1bHROb3cgPSBEYXRlLm5vdyxcbiAgICBkZWZhdWx0Q29tcGFyZXIgPSBSeC5oZWxwZXJzLmRlZmF1bHRDb21wYXJlciA9IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBpc0VxdWFsKHgsIHkpOyB9LFxuICAgIGRlZmF1bHRTdWJDb21wYXJlciA9IFJ4LmhlbHBlcnMuZGVmYXVsdFN1YkNvbXBhcmVyID0gZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIHggPiB5ID8gMSA6ICh4IDwgeSA/IC0xIDogMCk7IH0sXG4gICAgZGVmYXVsdEtleVNlcmlhbGl6ZXIgPSBSeC5oZWxwZXJzLmRlZmF1bHRLZXlTZXJpYWxpemVyID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgudG9TdHJpbmcoKTsgfSxcbiAgICBkZWZhdWx0RXJyb3IgPSBSeC5oZWxwZXJzLmRlZmF1bHRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHsgdGhyb3cgZXJyOyB9LFxuICAgIGlzUHJvbWlzZSA9IFJ4LmhlbHBlcnMuaXNQcm9taXNlID0gZnVuY3Rpb24gKHApIHsgcmV0dXJuICEhcCAmJiB0eXBlb2YgcC5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHAudGhlbiA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgICBpc0Z1bmN0aW9uID0gUnguaGVscGVycy5pc0Z1bmN0aW9uID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIGlzRm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBmYWxsYmFjayBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmlcbiAgICAgIGlmIChpc0ZuKC94LykpIHtcbiAgICAgICAgaXNGbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwodmFsdWUpID09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc0ZuO1xuICAgIH0oKSk7XG5cbiAgICBmdW5jdGlvbiBjbG9uZUFycmF5KGFycikge1xuICAgICAgdmFyIGxlbiA9IGFyci5sZW5ndGgsIGEgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhW2ldID0gYXJyW2ldOyB9XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgdmFyIGVycm9yT2JqID0ge2U6IHt9fTtcbiAgXG4gIGZ1bmN0aW9uIHRyeUNhdGNoZXJHZW4odHJ5Q2F0Y2hUYXJnZXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gdHJ5Q2F0Y2hlcigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0cnlDYXRjaFRhcmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvck9iai5lID0gZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgdHJ5Q2F0Y2ggPSBSeC5pbnRlcm5hbHMudHJ5Q2F0Y2ggPSBmdW5jdGlvbiB0cnlDYXRjaChmbikge1xuICAgIGlmICghaXNGdW5jdGlvbihmbikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignZm4gbXVzdCBiZSBhIGZ1bmN0aW9uJyk7IH1cbiAgICByZXR1cm4gdHJ5Q2F0Y2hlckdlbihmbik7XG4gIH07XG5cbiAgZnVuY3Rpb24gdGhyb3dlcihlKSB7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIFJ4LmNvbmZpZy5sb25nU3RhY2tTdXBwb3J0ID0gZmFsc2U7XG4gIHZhciBoYXNTdGFja3MgPSBmYWxzZSwgc3RhY2tzID0gdHJ5Q2F0Y2goZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoKTsgfSkoKTtcbiAgaGFzU3RhY2tzID0gISFzdGFja3MuZSAmJiAhIXN0YWNrcy5lLnN0YWNrO1xuXG4gIC8vIEFsbCBjb2RlIGFmdGVyIHRoaXMgcG9pbnQgd2lsbCBiZSBmaWx0ZXJlZCBmcm9tIHN0YWNrIHRyYWNlcyByZXBvcnRlZCBieSBSeEpTXG4gIHZhciByU3RhcnRpbmdMaW5lID0gY2FwdHVyZUxpbmUoKSwgckZpbGVOYW1lO1xuXG4gIHZhciBTVEFDS19KVU1QX1NFUEFSQVRPUiA9ICdGcm9tIHByZXZpb3VzIGV2ZW50Oic7XG5cbiAgZnVuY3Rpb24gbWFrZVN0YWNrVHJhY2VMb25nKGVycm9yLCBvYnNlcnZhYmxlKSB7XG4gICAgLy8gSWYgcG9zc2libGUsIHRyYW5zZm9ybSB0aGUgZXJyb3Igc3RhY2sgdHJhY2UgYnkgcmVtb3ZpbmcgTm9kZSBhbmQgUnhKU1xuICAgIC8vIGNydWZ0LCB0aGVuIGNvbmNhdGVuYXRpbmcgd2l0aCB0aGUgc3RhY2sgdHJhY2Ugb2YgYG9ic2VydmFibGVgLlxuICAgIGlmIChoYXNTdGFja3MgJiZcbiAgICAgICAgb2JzZXJ2YWJsZS5zdGFjayAmJlxuICAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmXG4gICAgICAgIGVycm9yICE9PSBudWxsICYmXG4gICAgICAgIGVycm9yLnN0YWNrICYmXG4gICAgICAgIGVycm9yLnN0YWNrLmluZGV4T2YoU1RBQ0tfSlVNUF9TRVBBUkFUT1IpID09PSAtMVxuICAgICkge1xuICAgICAgdmFyIHN0YWNrcyA9IFtdO1xuICAgICAgZm9yICh2YXIgbyA9IG9ic2VydmFibGU7ICEhbzsgbyA9IG8uc291cmNlKSB7XG4gICAgICAgIGlmIChvLnN0YWNrKSB7XG4gICAgICAgICAgc3RhY2tzLnVuc2hpZnQoby5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YWNrcy51bnNoaWZ0KGVycm9yLnN0YWNrKTtcblxuICAgICAgdmFyIGNvbmNhdGVkU3RhY2tzID0gc3RhY2tzLmpvaW4oJ1xcbicgKyBTVEFDS19KVU1QX1NFUEFSQVRPUiArICdcXG4nKTtcbiAgICAgIGVycm9yLnN0YWNrID0gZmlsdGVyU3RhY2tTdHJpbmcoY29uY2F0ZWRTdGFja3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlclN0YWNrU3RyaW5nKHN0YWNrU3RyaW5nKSB7XG4gICAgdmFyIGxpbmVzID0gc3RhY2tTdHJpbmcuc3BsaXQoJ1xcbicpLCBkZXNpcmVkTGluZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBsaW5lID0gbGluZXNbaV07XG5cbiAgICAgIGlmICghaXNJbnRlcm5hbEZyYW1lKGxpbmUpICYmICFpc05vZGVGcmFtZShsaW5lKSAmJiBsaW5lKSB7XG4gICAgICAgIGRlc2lyZWRMaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVzaXJlZExpbmVzLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJbnRlcm5hbEZyYW1lKHN0YWNrTGluZSkge1xuICAgIHZhciBmaWxlTmFtZUFuZExpbmVOdW1iZXIgPSBnZXRGaWxlTmFtZUFuZExpbmVOdW1iZXIoc3RhY2tMaW5lKTtcbiAgICBpZiAoIWZpbGVOYW1lQW5kTGluZU51bWJlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZmlsZU5hbWUgPSBmaWxlTmFtZUFuZExpbmVOdW1iZXJbMF0sIGxpbmVOdW1iZXIgPSBmaWxlTmFtZUFuZExpbmVOdW1iZXJbMV07XG5cbiAgICByZXR1cm4gZmlsZU5hbWUgPT09IHJGaWxlTmFtZSAmJlxuICAgICAgbGluZU51bWJlciA+PSByU3RhcnRpbmdMaW5lICYmXG4gICAgICBsaW5lTnVtYmVyIDw9IHJFbmRpbmdMaW5lO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlRnJhbWUoc3RhY2tMaW5lKSB7XG4gICAgcmV0dXJuIHN0YWNrTGluZS5pbmRleE9mKCcobW9kdWxlLmpzOicpICE9PSAtMSB8fFxuICAgICAgc3RhY2tMaW5lLmluZGV4T2YoJyhub2RlLmpzOicpICE9PSAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhcHR1cmVMaW5lKCkge1xuICAgIGlmICghaGFzU3RhY2tzKSB7IHJldHVybjsgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZhciBsaW5lcyA9IGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGZpcnN0TGluZSA9IGxpbmVzWzBdLmluZGV4T2YoJ0AnKSA+IDAgPyBsaW5lc1sxXSA6IGxpbmVzWzJdO1xuICAgICAgdmFyIGZpbGVOYW1lQW5kTGluZU51bWJlciA9IGdldEZpbGVOYW1lQW5kTGluZU51bWJlcihmaXJzdExpbmUpO1xuICAgICAgaWYgKCFmaWxlTmFtZUFuZExpbmVOdW1iZXIpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHJGaWxlTmFtZSA9IGZpbGVOYW1lQW5kTGluZU51bWJlclswXTtcbiAgICAgIHJldHVybiBmaWxlTmFtZUFuZExpbmVOdW1iZXJbMV07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RmlsZU5hbWVBbmRMaW5lTnVtYmVyKHN0YWNrTGluZSkge1xuICAgIC8vIE5hbWVkIGZ1bmN0aW9uczogJ2F0IGZ1bmN0aW9uTmFtZSAoZmlsZW5hbWU6bGluZU51bWJlcjpjb2x1bW5OdW1iZXIpJ1xuICAgIHZhciBhdHRlbXB0MSA9IC9hdCAuKyBcXCgoLispOihcXGQrKTooPzpcXGQrKVxcKSQvLmV4ZWMoc3RhY2tMaW5lKTtcbiAgICBpZiAoYXR0ZW1wdDEpIHsgcmV0dXJuIFthdHRlbXB0MVsxXSwgTnVtYmVyKGF0dGVtcHQxWzJdKV07IH1cblxuICAgIC8vIEFub255bW91cyBmdW5jdGlvbnM6ICdhdCBmaWxlbmFtZTpsaW5lTnVtYmVyOmNvbHVtbk51bWJlcidcbiAgICB2YXIgYXR0ZW1wdDIgPSAvYXQgKFteIF0rKTooXFxkKyk6KD86XFxkKykkLy5leGVjKHN0YWNrTGluZSk7XG4gICAgaWYgKGF0dGVtcHQyKSB7IHJldHVybiBbYXR0ZW1wdDJbMV0sIE51bWJlcihhdHRlbXB0MlsyXSldOyB9XG5cbiAgICAvLyBGaXJlZm94IHN0eWxlOiAnZnVuY3Rpb25AZmlsZW5hbWU6bGluZU51bWJlciBvciBAZmlsZW5hbWU6bGluZU51bWJlcidcbiAgICB2YXIgYXR0ZW1wdDMgPSAvLipAKC4rKTooXFxkKykkLy5leGVjKHN0YWNrTGluZSk7XG4gICAgaWYgKGF0dGVtcHQzKSB7IHJldHVybiBbYXR0ZW1wdDNbMV0sIE51bWJlcihhdHRlbXB0M1syXSldOyB9XG4gIH1cblxuICB2YXIgRW1wdHlFcnJvciA9IFJ4LkVtcHR5RXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHMuJztcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICB9O1xuICBFbXB0eUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgRW1wdHlFcnJvci5wcm90b3R5cGUubmFtZSA9ICdFbXB0eUVycm9yJztcblxuICB2YXIgT2JqZWN0RGlzcG9zZWRFcnJvciA9IFJ4Lk9iamVjdERpc3Bvc2VkRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnT2JqZWN0IGhhcyBiZWVuIGRpc3Bvc2VkJztcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICB9O1xuICBPYmplY3REaXNwb3NlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgT2JqZWN0RGlzcG9zZWRFcnJvci5wcm90b3R5cGUubmFtZSA9ICdPYmplY3REaXNwb3NlZEVycm9yJztcblxuICB2YXIgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgPSBSeC5Bcmd1bWVudE91dE9mUmFuZ2VFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnQXJndW1lbnQgb3V0IG9mIHJhbmdlJztcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICB9O1xuICBBcmd1bWVudE91dE9mUmFuZ2VFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yJztcblxuICB2YXIgTm90U3VwcG9ydGVkRXJyb3IgPSBSeC5Ob3RTdXBwb3J0ZWRFcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnVGhpcyBvcGVyYXRpb24gaXMgbm90IHN1cHBvcnRlZCc7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgfTtcbiAgTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUubmFtZSA9ICdOb3RTdXBwb3J0ZWRFcnJvcic7XG5cbiAgdmFyIE5vdEltcGxlbWVudGVkRXJyb3IgPSBSeC5Ob3RJbXBsZW1lbnRlZEVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdUaGlzIG9wZXJhdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQnO1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gIH07XG4gIE5vdEltcGxlbWVudGVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBOb3RJbXBsZW1lbnRlZEVycm9yLnByb3RvdHlwZS5uYW1lID0gJ05vdEltcGxlbWVudGVkRXJyb3InO1xuXG4gIHZhciBub3RJbXBsZW1lbnRlZCA9IFJ4LmhlbHBlcnMubm90SW1wbGVtZW50ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoKTtcbiAgfTtcblxuICB2YXIgbm90U3VwcG9ydGVkID0gUnguaGVscGVycy5ub3RTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IE5vdFN1cHBvcnRlZEVycm9yKCk7XG4gIH07XG5cbiAgLy8gU2hpbSBpbiBpdGVyYXRvciBzdXBwb3J0XG4gIHZhciAkaXRlcmF0b3IkID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yKSB8fFxuICAgICdfZXM2c2hpbV9pdGVyYXRvcl8nO1xuICAvLyBCdWcgZm9yIG1vemlsbGEgdmVyc2lvblxuICBpZiAocm9vdC5TZXQgJiYgdHlwZW9mIG5ldyByb290LlNldCgpWydAQGl0ZXJhdG9yJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAkaXRlcmF0b3IkID0gJ0BAaXRlcmF0b3InO1xuICB9XG5cbiAgdmFyIGRvbmVFbnVtZXJhdG9yID0gUnguZG9uZUVudW1lcmF0b3IgPSB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfTtcblxuICB2YXIgaXNJdGVyYWJsZSA9IFJ4LmhlbHBlcnMuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgb1skaXRlcmF0b3IkXSAhPT0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIHZhciBpc0FycmF5TGlrZSA9IFJ4LmhlbHBlcnMuaXNBcnJheUxpa2UgPSBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIG8ubGVuZ3RoICE9PSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgUnguaGVscGVycy5pdGVyYXRvciA9ICRpdGVyYXRvciQ7XG5cbiAgdmFyIGJpbmRDYWxsYmFjayA9IFJ4LmludGVybmFscy5iaW5kQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXNBcmcgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmdW5jOyB9XG4gICAgc3dpdGNoKGFyZ0NvdW50KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpXG4gICAgICAgIH07XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZyk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgLyoqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIHZhbHVlcyBhcmUgb2YgdGhlIGxhbmd1YWdlIHR5cGUgT2JqZWN0ICovXG4gIHZhciBkb250RW51bXMgPSBbJ3RvU3RyaW5nJyxcbiAgICAndG9Mb2NhbGVTdHJpbmcnLFxuICAgICd2YWx1ZU9mJyxcbiAgICAnaGFzT3duUHJvcGVydHknLFxuICAgICdpc1Byb3RvdHlwZU9mJyxcbiAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAgICdjb25zdHJ1Y3RvciddLFxuICBkb250RW51bXNMZW5ndGggPSBkb250RW51bXMubGVuZ3RoO1xuXG4gIC8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgc2hvcnRjdXRzICovXG4gIHZhciBhcmdzQ2xhc3MgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheUNsYXNzID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sQ2xhc3MgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yQ2xhc3MgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNDbGFzcyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbnVtYmVyQ2xhc3MgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RDbGFzcyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc3RyaW5nQ2xhc3MgPSAnW29iamVjdCBTdHJpbmddJztcblxuICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICBzdXBwb3J0c0FyZ3NDbGFzcyA9IHRvU3RyaW5nLmNhbGwoYXJndW1lbnRzKSA9PSBhcmdzQ2xhc3MsIC8vIEZvciBsZXNzIDxJRTkgJiYgRkY8NFxuICAgIHN1cHBvcnROb2RlQ2xhc3MsXG4gICAgZXJyb3JQcm90byA9IEVycm9yLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgc3RyaW5nUHJvdG8gPSBTdHJpbmcucHJvdG90eXBlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbiAgdHJ5IHtcbiAgICBzdXBwb3J0Tm9kZUNsYXNzID0gISh0b1N0cmluZy5jYWxsKGRvY3VtZW50KSA9PSBvYmplY3RDbGFzcyAmJiAhKHsgJ3RvU3RyaW5nJzogMCB9ICsgJycpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHN1cHBvcnROb2RlQ2xhc3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIG5vbkVudW1Qcm9wcyA9IHt9O1xuICBub25FbnVtUHJvcHNbYXJyYXlDbGFzc10gPSBub25FbnVtUHJvcHNbZGF0ZUNsYXNzXSA9IG5vbkVudW1Qcm9wc1tudW1iZXJDbGFzc10gPSB7ICdjb25zdHJ1Y3Rvcic6IHRydWUsICd0b0xvY2FsZVN0cmluZyc6IHRydWUsICd0b1N0cmluZyc6IHRydWUsICd2YWx1ZU9mJzogdHJ1ZSB9O1xuICBub25FbnVtUHJvcHNbYm9vbENsYXNzXSA9IG5vbkVudW1Qcm9wc1tzdHJpbmdDbGFzc10gPSB7ICdjb25zdHJ1Y3Rvcic6IHRydWUsICd0b1N0cmluZyc6IHRydWUsICd2YWx1ZU9mJzogdHJ1ZSB9O1xuICBub25FbnVtUHJvcHNbZXJyb3JDbGFzc10gPSBub25FbnVtUHJvcHNbZnVuY0NsYXNzXSA9IG5vbkVudW1Qcm9wc1tyZWdleHBDbGFzc10gPSB7ICdjb25zdHJ1Y3Rvcic6IHRydWUsICd0b1N0cmluZyc6IHRydWUgfTtcbiAgbm9uRW51bVByb3BzW29iamVjdENsYXNzXSA9IHsgJ2NvbnN0cnVjdG9yJzogdHJ1ZSB9O1xuXG4gIHZhciBzdXBwb3J0ID0ge307XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN0b3IgPSBmdW5jdGlvbigpIHsgdGhpcy54ID0gMTsgfSxcbiAgICAgIHByb3BzID0gW107XG5cbiAgICBjdG9yLnByb3RvdHlwZSA9IHsgJ3ZhbHVlT2YnOiAxLCAneSc6IDEgfTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmV3IGN0b3IpIHsgcHJvcHMucHVzaChrZXkpOyB9XG4gICAgZm9yIChrZXkgaW4gYXJndW1lbnRzKSB7IH1cblxuICAgIC8vIERldGVjdCBpZiBgbmFtZWAgb3IgYG1lc3NhZ2VgIHByb3BlcnRpZXMgb2YgYEVycm9yLnByb3RvdHlwZWAgYXJlIGVudW1lcmFibGUgYnkgZGVmYXVsdC5cbiAgICBzdXBwb3J0LmVudW1FcnJvclByb3BzID0gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlcnJvclByb3RvLCAnbWVzc2FnZScpIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZXJyb3JQcm90bywgJ25hbWUnKTtcblxuICAgIC8vIERldGVjdCBpZiBgcHJvdG90eXBlYCBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhYmxlIGJ5IGRlZmF1bHQuXG4gICAgc3VwcG9ydC5lbnVtUHJvdG90eXBlcyA9IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoY3RvciwgJ3Byb3RvdHlwZScpO1xuXG4gICAgLy8gRGV0ZWN0IGlmIGBhcmd1bWVudHNgIG9iamVjdCBpbmRleGVzIGFyZSBub24tZW51bWVyYWJsZVxuICAgIHN1cHBvcnQubm9uRW51bUFyZ3MgPSBrZXkgIT0gMDtcblxuICAgIC8vIERldGVjdCBpZiBwcm9wZXJ0aWVzIHNoYWRvd2luZyB0aG9zZSBvbiBgT2JqZWN0LnByb3RvdHlwZWAgYXJlIG5vbi1lbnVtZXJhYmxlLlxuICAgIHN1cHBvcnQubm9uRW51bVNoYWRvd3MgPSAhL3ZhbHVlT2YvLnRlc3QocHJvcHMpO1xuICB9KDEpKTtcblxuICB2YXIgaXNPYmplY3QgPSBSeC5pbnRlcm5hbHMuaXNPYmplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSAmJiAodHlwZSA9PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT0gJ29iamVjdCcpIHx8IGZhbHNlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydC5ub25FbnVtQXJncyAmJiBvYmplY3QubGVuZ3RoICYmIGlzQXJndW1lbnRzKG9iamVjdCkpIHtcbiAgICAgIG9iamVjdCA9IHNsaWNlLmNhbGwob2JqZWN0KTtcbiAgICB9XG4gICAgdmFyIHNraXBQcm90byA9IHN1cHBvcnQuZW51bVByb3RvdHlwZXMgJiYgdHlwZW9mIG9iamVjdCA9PSAnZnVuY3Rpb24nLFxuICAgICAgICBza2lwRXJyb3JQcm9wcyA9IHN1cHBvcnQuZW51bUVycm9yUHJvcHMgJiYgKG9iamVjdCA9PT0gZXJyb3JQcm90byB8fCBvYmplY3QgaW5zdGFuY2VvZiBFcnJvcik7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBpZiAoIShza2lwUHJvdG8gJiYga2V5ID09ICdwcm90b3R5cGUnKSAmJlxuICAgICAgICAgICEoc2tpcEVycm9yUHJvcHMgJiYgKGtleSA9PSAnbWVzc2FnZScgfHwga2V5ID09ICduYW1lJykpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQubm9uRW51bVNoYWRvd3MgJiYgb2JqZWN0ICE9PSBvYmplY3RQcm90bykge1xuICAgICAgdmFyIGN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgICBsZW5ndGggPSBkb250RW51bXNMZW5ndGg7XG5cbiAgICAgIGlmIChvYmplY3QgPT09IChjdG9yICYmIGN0b3IucHJvdG90eXBlKSkge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gb2JqZWN0ID09PSBzdHJpbmdQcm90byA/IHN0cmluZ0NsYXNzIDogb2JqZWN0ID09PSBlcnJvclByb3RvID8gZXJyb3JDbGFzcyA6IHRvU3RyaW5nLmNhbGwob2JqZWN0KSxcbiAgICAgICAgICAgIG5vbkVudW0gPSBub25FbnVtUHJvcHNbY2xhc3NOYW1lXTtcbiAgICAgIH1cbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGtleSA9IGRvbnRFbnVtc1tpbmRleF07XG4gICAgICAgIGlmICghKG5vbkVudW0gJiYgbm9uRW51bVtrZXldKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVybmFsRm9yKG9iamVjdCwgY2FsbGJhY2ssIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgIGlmIChjYWxsYmFjayhvYmplY3Rba2V5XSwga2V5LCBvYmplY3QpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVybmFsRm9ySW4ob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBpbnRlcm5hbEZvcihvYmplY3QsIGNhbGxiYWNrLCBrZXlzSW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHZhbHVlKSB7XG4gICAgLy8gSUUgPCA5IHByZXNlbnRzIERPTSBub2RlcyBhcyBgT2JqZWN0YCBvYmplY3RzIGV4Y2VwdCB0aGV5IGhhdmUgYHRvU3RyaW5nYFxuICAgIC8vIG1ldGhvZHMgdGhhdCBhcmUgYHR5cGVvZmAgXCJzdHJpbmdcIiBhbmQgc3RpbGwgY2FuIGNvZXJjZSBub2RlcyB0byBzdHJpbmdzXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nICYmIHR5cGVvZiAodmFsdWUgKyAnJykgPT0gJ3N0cmluZyc7XG4gIH1cblxuICB2YXIgaXNBcmd1bWVudHMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NDbGFzcyA6IGZhbHNlO1xuICB9XG5cbiAgLy8gZmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgY2FuJ3QgZGV0ZWN0IGBhcmd1bWVudHNgIG9iamVjdHMgYnkgW1tDbGFzc11dXG4gIGlmICghc3VwcG9ydHNBcmdzQ2xhc3MpIHtcbiAgICBpc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JykgPyBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgOiBmYWxzZTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGlzRXF1YWwgPSBSeC5pbnRlcm5hbHMuaXNFcXVhbCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIGRlZXBFcXVhbHMoeCwgeSwgW10sIFtdKTtcbiAgfTtcblxuICAvKiogQHByaXZhdGVcbiAgICogVXNlZCBmb3IgZGVlcCBjb21wYXJpc29uXG4gICAqKi9cbiAgZnVuY3Rpb24gZGVlcEVxdWFscyhhLCBiLCBzdGFja0EsIHN0YWNrQikge1xuICAgIC8vIGV4aXQgZWFybHkgZm9yIGlkZW50aWNhbCB2YWx1ZXNcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgLy8gdHJlYXQgYCswYCB2cy4gYC0wYCBhcyBub3QgZXF1YWxcbiAgICAgIHJldHVybiBhICE9PSAwIHx8ICgxIC8gYSA9PSAxIC8gYik7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYSxcbiAgICAgICAgb3RoZXJUeXBlID0gdHlwZW9mIGI7XG5cbiAgICAvLyBleGl0IGVhcmx5IGZvciB1bmxpa2UgcHJpbWl0aXZlIHZhbHVlc1xuICAgIGlmIChhID09PSBhICYmIChhID09IG51bGwgfHwgYiA9PSBudWxsIHx8XG4gICAgICAgICh0eXBlICE9ICdmdW5jdGlvbicgJiYgdHlwZSAhPSAnb2JqZWN0JyAmJiBvdGhlclR5cGUgIT0gJ2Z1bmN0aW9uJyAmJiBvdGhlclR5cGUgIT0gJ29iamVjdCcpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgW1tDbGFzc11dIG5hbWVzXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSksXG4gICAgICAgIG90aGVyQ2xhc3MgPSB0b1N0cmluZy5jYWxsKGIpO1xuXG4gICAgaWYgKGNsYXNzTmFtZSA9PSBhcmdzQ2xhc3MpIHtcbiAgICAgIGNsYXNzTmFtZSA9IG9iamVjdENsYXNzO1xuICAgIH1cbiAgICBpZiAob3RoZXJDbGFzcyA9PSBhcmdzQ2xhc3MpIHtcbiAgICAgIG90aGVyQ2xhc3MgPSBvYmplY3RDbGFzcztcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSAhPSBvdGhlckNsYXNzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlIGJvb2xDbGFzczpcbiAgICAgIGNhc2UgZGF0ZUNsYXNzOlxuICAgICAgICAvLyBjb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWJlcnMsIGRhdGVzIHRvIG1pbGxpc2Vjb25kcyBhbmQgYm9vbGVhbnNcbiAgICAgICAgLy8gdG8gYDFgIG9yIGAwYCB0cmVhdGluZyBpbnZhbGlkIGRhdGVzIGNvZXJjZWQgdG8gYE5hTmAgYXMgbm90IGVxdWFsXG4gICAgICAgIHJldHVybiArYSA9PSArYjtcblxuICAgICAgY2FzZSBudW1iZXJDbGFzczpcbiAgICAgICAgLy8gdHJlYXQgYE5hTmAgdnMuIGBOYU5gIGFzIGVxdWFsXG4gICAgICAgIHJldHVybiAoYSAhPSArYSkgP1xuICAgICAgICAgIGIgIT0gK2IgOlxuICAgICAgICAgIC8vIGJ1dCB0cmVhdCBgLTBgIHZzLiBgKzBgIGFzIG5vdCBlcXVhbFxuICAgICAgICAgIChhID09IDAgPyAoMSAvIGEgPT0gMSAvIGIpIDogYSA9PSArYik7XG5cbiAgICAgIGNhc2UgcmVnZXhwQ2xhc3M6XG4gICAgICBjYXNlIHN0cmluZ0NsYXNzOlxuICAgICAgICAvLyBjb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIChodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjEwLjYuNClcbiAgICAgICAgLy8gdHJlYXQgc3RyaW5nIHByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IGluc3RhbmNlcyBhcyBlcXVhbFxuICAgICAgICByZXR1cm4gYSA9PSBTdHJpbmcoYik7XG4gICAgfVxuICAgIHZhciBpc0FyciA9IGNsYXNzTmFtZSA9PSBhcnJheUNsYXNzO1xuICAgIGlmICghaXNBcnIpIHtcblxuICAgICAgLy8gZXhpdCBmb3IgZnVuY3Rpb25zIGFuZCBET00gbm9kZXNcbiAgICAgIGlmIChjbGFzc05hbWUgIT0gb2JqZWN0Q2xhc3MgfHwgKCFzdXBwb3J0Lm5vZGVDbGFzcyAmJiAoaXNOb2RlKGEpIHx8IGlzTm9kZShiKSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIGluIG9sZGVyIHZlcnNpb25zIG9mIE9wZXJhLCBgYXJndW1lbnRzYCBvYmplY3RzIGhhdmUgYEFycmF5YCBjb25zdHJ1Y3RvcnNcbiAgICAgIHZhciBjdG9yQSA9ICFzdXBwb3J0LmFyZ3NPYmplY3QgJiYgaXNBcmd1bWVudHMoYSkgPyBPYmplY3QgOiBhLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGN0b3JCID0gIXN1cHBvcnQuYXJnc09iamVjdCAmJiBpc0FyZ3VtZW50cyhiKSA/IE9iamVjdCA6IGIuY29uc3RydWN0b3I7XG5cbiAgICAgIC8vIG5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsXG4gICAgICBpZiAoY3RvckEgIT0gY3RvckIgJiZcbiAgICAgICAgICAgICEoaGFzT3duUHJvcGVydHkuY2FsbChhLCAnY29uc3RydWN0b3InKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGIsICdjb25zdHJ1Y3RvcicpKSAmJlxuICAgICAgICAgICAgIShpc0Z1bmN0aW9uKGN0b3JBKSAmJiBjdG9yQSBpbnN0YW5jZW9mIGN0b3JBICYmIGlzRnVuY3Rpb24oY3RvckIpICYmIGN0b3JCIGluc3RhbmNlb2YgY3RvckIpICYmXG4gICAgICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYilcbiAgICAgICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhc3N1bWUgY3ljbGljIHN0cnVjdHVyZXMgYXJlIGVxdWFsXG4gICAgLy8gdGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpYyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjFcbiAgICAvLyBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gIChodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjEyLjMpXG4gICAgdmFyIGluaXRlZFN0YWNrID0gIXN0YWNrQTtcbiAgICBzdGFja0EgfHwgKHN0YWNrQSA9IFtdKTtcbiAgICBzdGFja0IgfHwgKHN0YWNrQiA9IFtdKTtcblxuICAgIHZhciBsZW5ndGggPSBzdGFja0EubGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgaWYgKHN0YWNrQVtsZW5ndGhdID09IGEpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrQltsZW5ndGhdID09IGI7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzaXplID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIC8vIGFkZCBgYWAgYW5kIGBiYCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHNcbiAgICBzdGFja0EucHVzaChhKTtcbiAgICBzdGFja0IucHVzaChiKTtcblxuICAgIC8vIHJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cylcbiAgICBpZiAoaXNBcnIpIHtcbiAgICAgIC8vIGNvbXBhcmUgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIHNpemUgPSBiLmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpemUgPT0gbGVuZ3RoO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vIGRlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXNcbiAgICAgICAgd2hpbGUgKHNpemUtLSkge1xuICAgICAgICAgIHZhciBpbmRleCA9IGxlbmd0aCxcbiAgICAgICAgICAgICAgdmFsdWUgPSBiW3NpemVdO1xuXG4gICAgICAgICAgaWYgKCEocmVzdWx0ID0gZGVlcEVxdWFscyhhW3NpemVdLCB2YWx1ZSwgc3RhY2tBLCBzdGFja0IpKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gZGVlcCBjb21wYXJlIG9iamVjdHMgdXNpbmcgYGZvckluYCwgaW5zdGVhZCBvZiBgZm9yT3duYCwgdG8gYXZvaWQgYE9iamVjdC5rZXlzYFxuICAgICAgLy8gd2hpY2gsIGluIHRoaXMgY2FzZSwgaXMgbW9yZSBjb3N0bHlcbiAgICAgIGludGVybmFsRm9ySW4oYiwgZnVuY3Rpb24odmFsdWUsIGtleSwgYikge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXkpKSB7XG4gICAgICAgICAgLy8gY291bnQgdGhlIG51bWJlciBvZiBwcm9wZXJ0aWVzLlxuICAgICAgICAgIHNpemUrKztcbiAgICAgICAgICAvLyBkZWVwIGNvbXBhcmUgZWFjaCBwcm9wZXJ0eSB2YWx1ZS5cbiAgICAgICAgICByZXR1cm4gKHJlc3VsdCA9IGhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KSAmJiBkZWVwRXF1YWxzKGFba2V5XSwgdmFsdWUsIHN0YWNrQSwgc3RhY2tCKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vIGVuc3VyZSBib3RoIG9iamVjdHMgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllc1xuICAgICAgICBpbnRlcm5hbEZvckluKGEsIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGEpIHtcbiAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChhLCBrZXkpKSB7XG4gICAgICAgICAgICAvLyBgc2l6ZWAgd2lsbCBiZSBgLTFgIGlmIGBhYCBoYXMgbW9yZSBwcm9wZXJ0aWVzIHRoYW4gYGJgXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdCA9IC0tc2l6ZSA+IC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGFja0EucG9wKCk7XG4gICAgc3RhY2tCLnBvcCgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgICBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICB2YXIgaW5oZXJpdHMgPSBSeC5pbnRlcm5hbHMuaW5oZXJpdHMgPSBmdW5jdGlvbiAoY2hpbGQsIHBhcmVudCkge1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH1cbiAgICBfXy5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICAgIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xuICB9O1xuXG4gIHZhciBhZGRQcm9wZXJ0aWVzID0gUnguaW50ZXJuYWxzLmFkZFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yKHZhciBzb3VyY2VzID0gW10sIGkgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHsgc291cmNlcy5wdXNoKGFyZ3VtZW50c1tpXSk7IH1cbiAgICBmb3IgKHZhciBpZHggPSAwLCBsbiA9IHNvdXJjZXMubGVuZ3RoOyBpZHggPCBsbjsgaWR4KyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2lkeF07XG4gICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFJ4IFV0aWxzXG4gIHZhciBhZGRSZWYgPSBSeC5pbnRlcm5hbHMuYWRkUmVmID0gZnVuY3Rpb24gKHhzLCByKSB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKHIuZ2V0RGlzcG9zYWJsZSgpLCB4cy5zdWJzY3JpYmUob2JzZXJ2ZXIpKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBhcnJheUluaXRpYWxpemUoY291bnQsIGZhY3RvcnkpIHtcbiAgICB2YXIgYSA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBhW2ldID0gZmFjdG9yeSgpO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgZ3JvdXAgb2YgZGlzcG9zYWJsZSByZXNvdXJjZXMgdGhhdCBhcmUgZGlzcG9zZWQgdG9nZXRoZXIuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgdmFyIENvbXBvc2l0ZURpc3Bvc2FibGUgPSBSeC5Db21wb3NpdGVEaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW10sIGksIGxlbjtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKSB7XG4gICAgICBhcmdzID0gYXJndW1lbnRzWzBdO1xuICAgICAgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgfVxuICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBhcmdzO1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMubGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIENvbXBvc2l0ZURpc3Bvc2FibGVQcm90b3R5cGUgPSBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogQWRkcyBhIGRpc3Bvc2FibGUgdG8gdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgb3IgZGlzcG9zZXMgdGhlIGRpc3Bvc2FibGUgaWYgdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgaXMgZGlzcG9zZWQuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGl0ZW0gRGlzcG9zYWJsZSB0byBhZGQuXG4gICAqL1xuICBDb21wb3NpdGVEaXNwb3NhYmxlUHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgaXRlbS5kaXNwb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcG9zYWJsZXMucHVzaChpdGVtKTtcbiAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuZCBkaXNwb3NlcyB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhIGRpc3Bvc2FibGUgZnJvbSB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZS5cbiAgICogQHBhcmFtIHtNaXhlZH0gaXRlbSBEaXNwb3NhYmxlIHRvIHJlbW92ZS5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgZm91bmQ7IGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIENvbXBvc2l0ZURpc3Bvc2FibGVQcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgc2hvdWxkRGlzcG9zZSA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB2YXIgaWR4ID0gdGhpcy5kaXNwb3NhYmxlcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgc2hvdWxkRGlzcG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzcG9zYWJsZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG4gICAgICAgIGl0ZW0uZGlzcG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hvdWxkRGlzcG9zZTtcbiAgfTtcblxuICAvKipcbiAgICogIERpc3Bvc2VzIGFsbCBkaXNwb3NhYmxlcyBpbiB0aGUgZ3JvdXAgYW5kIHJlbW92ZXMgdGhlbSBmcm9tIHRoZSBncm91cC5cbiAgICovXG4gIENvbXBvc2l0ZURpc3Bvc2FibGVQcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgIHZhciBsZW4gPSB0aGlzLmRpc3Bvc2FibGVzLmxlbmd0aCwgY3VycmVudERpc3Bvc2FibGVzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgY3VycmVudERpc3Bvc2FibGVzW2ldID0gdGhpcy5kaXNwb3NhYmxlc1tpXTsgfVxuICAgICAgdGhpcy5kaXNwb3NhYmxlcyA9IFtdO1xuICAgICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY3VycmVudERpc3Bvc2FibGVzW2ldLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIGEgc2V0IG9mIHN0YXRpYyBtZXRob2RzIGZvciBjcmVhdGluZyBEaXNwb3NhYmxlcy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcG9zZSBBY3Rpb24gdG8gcnVuIGR1cmluZyB0aGUgZmlyc3QgY2FsbCB0byBkaXNwb3NlLiBUaGUgYWN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gYmUgcnVuIGF0IG1vc3Qgb25jZS5cbiAgICovXG4gIHZhciBEaXNwb3NhYmxlID0gUnguRGlzcG9zYWJsZSA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbiB8fCBub29wO1xuICB9O1xuXG4gIC8qKiBQZXJmb3JtcyB0aGUgdGFzayBvZiBjbGVhbmluZyB1cCByZXNvdXJjZXMuICovXG4gIERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuYWN0aW9uKCk7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGRpc3Bvc2FibGUgb2JqZWN0IHRoYXQgaW52b2tlcyB0aGUgc3BlY2lmaWVkIGFjdGlvbiB3aGVuIGRpc3Bvc2VkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwb3NlIEFjdGlvbiB0byBydW4gZHVyaW5nIHRoZSBmaXJzdCBjYWxsIHRvIGRpc3Bvc2UuIFRoZSBhY3Rpb24gaXMgZ3VhcmFudGVlZCB0byBiZSBydW4gYXQgbW9zdCBvbmNlLlxuICAgKiBAcmV0dXJuIHtEaXNwb3NhYmxlfSBUaGUgZGlzcG9zYWJsZSBvYmplY3QgdGhhdCBydW5zIHRoZSBnaXZlbiBhY3Rpb24gdXBvbiBkaXNwb3NhbC5cbiAgICovXG4gIHZhciBkaXNwb3NhYmxlQ3JlYXRlID0gRGlzcG9zYWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBuZXcgRGlzcG9zYWJsZShhY3Rpb24pOyB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkaXNwb3NhYmxlIHRoYXQgZG9lcyBub3RoaW5nIHdoZW4gZGlzcG9zZWQuXG4gICAqL1xuICB2YXIgZGlzcG9zYWJsZUVtcHR5ID0gRGlzcG9zYWJsZS5lbXB0eSA9IHsgZGlzcG9zZTogbm9vcCB9O1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgZGlzcG9zYWJsZVxuICAgKiBAcGFyYW0ge09iamVjdH0gT2JqZWN0IHRvIHRlc3Qgd2hldGhlciBpdCBoYXMgYSBkaXNwb3NlIG1ldGhvZFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIGRpc3Bvc2FibGUgb2JqZWN0LCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgdmFyIGlzRGlzcG9zYWJsZSA9IERpc3Bvc2FibGUuaXNEaXNwb3NhYmxlID0gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZCAmJiBpc0Z1bmN0aW9uKGQuZGlzcG9zZSk7XG4gIH07XG5cbiAgdmFyIGNoZWNrRGlzcG9zZWQgPSBEaXNwb3NhYmxlLmNoZWNrRGlzcG9zZWQgPSBmdW5jdGlvbiAoZGlzcG9zYWJsZSkge1xuICAgIGlmIChkaXNwb3NhYmxlLmlzRGlzcG9zZWQpIHsgdGhyb3cgbmV3IE9iamVjdERpc3Bvc2VkRXJyb3IoKTsgfVxuICB9O1xuXG4gIHZhciBkaXNwb3NhYmxlRml4dXAgPSBEaXNwb3NhYmxlLl9maXh1cCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gaXNEaXNwb3NhYmxlKHJlc3VsdCkgPyByZXN1bHQgOiBkaXNwb3NhYmxlRW1wdHk7XG4gIH07XG5cbiAgLy8gU2luZ2xlIGFzc2lnbm1lbnRcbiAgdmFyIFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlID0gUnguU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgfTtcbiAgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUucHJvdG90eXBlLmdldERpc3Bvc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcbiAgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUucHJvdG90eXBlLnNldERpc3Bvc2FibGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50KSB7IHRocm93IG5ldyBFcnJvcignRGlzcG9zYWJsZSBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkJyk7IH1cbiAgICB2YXIgc2hvdWxkRGlzcG9zZSA9IHRoaXMuaXNEaXNwb3NlZDtcbiAgICAhc2hvdWxkRGlzcG9zZSAmJiAodGhpcy5jdXJyZW50ID0gdmFsdWUpO1xuICAgIHNob3VsZERpc3Bvc2UgJiYgdmFsdWUgJiYgdmFsdWUuZGlzcG9zZSgpO1xuICB9O1xuICBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgIHZhciBvbGQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICAgICAgb2xkICYmIG9sZC5kaXNwb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIE11bHRpcGxlIGFzc2lnbm1lbnQgZGlzcG9zYWJsZVxuICB2YXIgU2VyaWFsRGlzcG9zYWJsZSA9IFJ4LlNlcmlhbERpc3Bvc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgfTtcbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuZ2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHNob3VsZERpc3Bvc2UgPSB0aGlzLmlzRGlzcG9zZWQ7XG4gICAgaWYgKCFzaG91bGREaXNwb3NlKSB7XG4gICAgICB2YXIgb2xkID0gdGhpcy5jdXJyZW50O1xuICAgICAgdGhpcy5jdXJyZW50ID0gdmFsdWU7XG4gICAgfVxuICAgIG9sZCAmJiBvbGQuZGlzcG9zZSgpO1xuICAgIHNob3VsZERpc3Bvc2UgJiYgdmFsdWUgJiYgdmFsdWUuZGlzcG9zZSgpO1xuICB9O1xuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgdmFyIG9sZCA9IHRoaXMuY3VycmVudDtcbiAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICAgIG9sZCAmJiBvbGQuZGlzcG9zZSgpO1xuICB9O1xuXG4gIHZhciBCaW5hcnlEaXNwb3NhYmxlID0gUnguQmluYXJ5RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgdGhpcy5fZmlyc3QgPSBmaXJzdDtcbiAgICB0aGlzLl9zZWNvbmQgPSBzZWNvbmQ7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gIH07XG5cbiAgQmluYXJ5RGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgIHZhciBvbGQxID0gdGhpcy5fZmlyc3Q7XG4gICAgICB0aGlzLl9maXJzdCA9IG51bGw7XG4gICAgICBvbGQxICYmIG9sZDEuZGlzcG9zZSgpO1xuICAgICAgdmFyIG9sZDIgPSB0aGlzLl9zZWNvbmQ7XG4gICAgICB0aGlzLl9zZWNvbmQgPSBudWxsO1xuICAgICAgb2xkMiAmJiBvbGQyLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIE5BcnlEaXNwb3NhYmxlID0gUnguTkFyeURpc3Bvc2FibGUgPSBmdW5jdGlvbiAoZGlzcG9zYWJsZXMpIHtcbiAgICB0aGlzLl9kaXNwb3NhYmxlcyA9IGRpc3Bvc2FibGVzO1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICB9O1xuXG4gIE5BcnlEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuX2Rpc3Bvc2FibGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzW2ldLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgZGlzcG9zYWJsZSByZXNvdXJjZSB0aGF0IG9ubHkgZGlzcG9zZXMgaXRzIHVuZGVybHlpbmcgZGlzcG9zYWJsZSByZXNvdXJjZSB3aGVuIGFsbCBkZXBlbmRlbnQgZGlzcG9zYWJsZSBvYmplY3RzIGhhdmUgYmVlbiBkaXNwb3NlZC5cbiAgICovXG4gIHZhciBSZWZDb3VudERpc3Bvc2FibGUgPSBSeC5SZWZDb3VudERpc3Bvc2FibGUgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gSW5uZXJEaXNwb3NhYmxlKGRpc3Bvc2FibGUpIHtcbiAgICAgIHRoaXMuZGlzcG9zYWJsZSA9IGRpc3Bvc2FibGU7XG4gICAgICB0aGlzLmRpc3Bvc2FibGUuY291bnQrKztcbiAgICAgIHRoaXMuaXNJbm5lckRpc3Bvc2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgSW5uZXJEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmRpc3Bvc2FibGUuaXNEaXNwb3NlZCAmJiAhdGhpcy5pc0lubmVyRGlzcG9zZWQpIHtcbiAgICAgICAgdGhpcy5pc0lubmVyRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc3Bvc2FibGUuY291bnQtLTtcbiAgICAgICAgaWYgKHRoaXMuZGlzcG9zYWJsZS5jb3VudCA9PT0gMCAmJiB0aGlzLmRpc3Bvc2FibGUuaXNQcmltYXJ5RGlzcG9zZWQpIHtcbiAgICAgICAgICB0aGlzLmRpc3Bvc2FibGUuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5kaXNwb3NhYmxlLnVuZGVybHlpbmdEaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgUmVmQ291bnREaXNwb3NhYmxlIHdpdGggdGhlIHNwZWNpZmllZCBkaXNwb3NhYmxlLlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RGlzcG9zYWJsZX0gZGlzcG9zYWJsZSBVbmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAgICAqL1xuICAgIGZ1bmN0aW9uIFJlZkNvdW50RGlzcG9zYWJsZShkaXNwb3NhYmxlKSB7XG4gICAgICB0aGlzLnVuZGVybHlpbmdEaXNwb3NhYmxlID0gZGlzcG9zYWJsZTtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1ByaW1hcnlEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZXMgdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZSBvbmx5IHdoZW4gYWxsIGRlcGVuZGVudCBkaXNwb3NhYmxlcyBoYXZlIGJlZW4gZGlzcG9zZWRcbiAgICAgKi9cbiAgICBSZWZDb3VudERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCAmJiAhdGhpcy5pc1ByaW1hcnlEaXNwb3NlZCkge1xuICAgICAgICB0aGlzLmlzUHJpbWFyeURpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudW5kZXJseWluZ0Rpc3Bvc2FibGUuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBkZXBlbmRlbnQgZGlzcG9zYWJsZSB0aGF0IHdoZW4gZGlzcG9zZWQgZGVjcmVhc2VzIHRoZSByZWZjb3VudCBvbiB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgICAqIEByZXR1cm5zIHtEaXNwb3NhYmxlfSBBIGRlcGVuZGVudCBkaXNwb3NhYmxlIGNvbnRyaWJ1dGluZyB0byB0aGUgcmVmZXJlbmNlIGNvdW50IHRoYXQgbWFuYWdlcyB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlJ3MgbGlmZXRpbWUuXG4gICAgICovXG4gICAgUmVmQ291bnREaXNwb3NhYmxlLnByb3RvdHlwZS5nZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEaXNwb3NlZCA/IGRpc3Bvc2FibGVFbXB0eSA6IG5ldyBJbm5lckRpc3Bvc2FibGUodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBSZWZDb3VudERpc3Bvc2FibGU7XG4gIH0pKCk7XG5cbiAgdmFyIFNjaGVkdWxlZEl0ZW0gPSBSeC5pbnRlcm5hbHMuU2NoZWR1bGVkSXRlbSA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIHN0YXRlLCBhY3Rpb24sIGR1ZVRpbWUsIGNvbXBhcmVyKSB7XG4gICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgdGhpcy5jb21wYXJlciA9IGNvbXBhcmVyIHx8IGRlZmF1bHRTdWJDb21wYXJlcjtcbiAgICB0aGlzLmRpc3Bvc2FibGUgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgfVxuXG4gIFNjaGVkdWxlZEl0ZW0ucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRpc3Bvc2FibGUuc2V0RGlzcG9zYWJsZSh0aGlzLmludm9rZUNvcmUoKSk7XG4gIH07XG5cbiAgU2NoZWR1bGVkSXRlbS5wcm90b3R5cGUuY29tcGFyZVRvID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZXIodGhpcy5kdWVUaW1lLCBvdGhlci5kdWVUaW1lKTtcbiAgfTtcblxuICBTY2hlZHVsZWRJdGVtLnByb3RvdHlwZS5pc0NhbmNlbGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwb3NhYmxlLmlzRGlzcG9zZWQ7XG4gIH07XG5cbiAgU2NoZWR1bGVkSXRlbS5wcm90b3R5cGUuaW52b2tlQ29yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcG9zYWJsZUZpeHVwKHRoaXMuYWN0aW9uKHRoaXMuc2NoZWR1bGVyLCB0aGlzLnN0YXRlKSk7XG4gIH07XG5cbiAgLyoqIFByb3ZpZGVzIGEgc2V0IG9mIHN0YXRpYyBwcm9wZXJ0aWVzIHRvIGFjY2VzcyBjb21tb25seSB1c2VkIHNjaGVkdWxlcnMuICovXG4gIHZhciBTY2hlZHVsZXIgPSBSeC5TY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gU2NoZWR1bGVyKCkgeyB9XG5cbiAgICAvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBzY2hlZHVsZXIgKi9cbiAgICBTY2hlZHVsZXIuaXNTY2hlZHVsZXIgPSBmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIHMgaW5zdGFuY2VvZiBTY2hlZHVsZXI7XG4gICAgfTtcblxuICAgIHZhciBzY2hlZHVsZXJQcm90byA9IFNjaGVkdWxlci5wcm90b3R5cGU7XG5cbiAgICAvKipcbiAgICogU2NoZWR1bGVzIGFuIGFjdGlvbiB0byBiZSBleGVjdXRlZC5cbiAgICogQHBhcmFtIHN0YXRlIFN0YXRlIHBhc3NlZCB0byB0aGUgYWN0aW9uIHRvIGJlIGV4ZWN1dGVkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gQWN0aW9uIHRvIGJlIGV4ZWN1dGVkLlxuICAgKiBAcmV0dXJucyB7RGlzcG9zYWJsZX0gVGhlIGRpc3Bvc2FibGUgb2JqZWN0IHVzZWQgdG8gY2FuY2VsIHRoZSBzY2hlZHVsZWQgYWN0aW9uIChiZXN0IGVmZm9ydCkuXG4gICAqL1xuICAgIHNjaGVkdWxlclByb3RvLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCk7XG4gICAgfTtcblxuICAvKipcbiAgICogU2NoZWR1bGVzIGFuIGFjdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkdWVUaW1lLlxuICAgKiBAcGFyYW0gc3RhdGUgU3RhdGUgcGFzc2VkIHRvIHRoZSBhY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBBY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdWVUaW1lIFJlbGF0aXZlIHRpbWUgYWZ0ZXIgd2hpY2ggdG8gZXhlY3V0ZSB0aGUgYWN0aW9uLlxuICAgKiBAcmV0dXJucyB7RGlzcG9zYWJsZX0gVGhlIGRpc3Bvc2FibGUgb2JqZWN0IHVzZWQgdG8gY2FuY2VsIHRoZSBzY2hlZHVsZWQgYWN0aW9uIChiZXN0IGVmZm9ydCkuXG4gICAqL1xuICAgIHNjaGVkdWxlclByb3RvLnNjaGVkdWxlRnV0dXJlID0gZnVuY3Rpb24gKHN0YXRlLCBkdWVUaW1lLCBhY3Rpb24pIHtcbiAgICAgIHZhciBkdCA9IGR1ZVRpbWU7XG4gICAgICBkdCBpbnN0YW5jZW9mIERhdGUgJiYgKGR0ID0gZHQgLSB0aGlzLm5vdygpKTtcbiAgICAgIGR0ID0gU2NoZWR1bGVyLm5vcm1hbGl6ZShkdCk7XG5cbiAgICAgIGlmIChkdCA9PT0gMCkgeyByZXR1cm4gdGhpcy5zY2hlZHVsZShzdGF0ZSwgYWN0aW9uKTsgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGVGdXR1cmUoc3RhdGUsIGR0LCBhY3Rpb24pO1xuICAgIH07XG5cbiAgICBzY2hlZHVsZXJQcm90by5fc2NoZWR1bGVGdXR1cmUgPSBmdW5jdGlvbiAoc3RhdGUsIGR1ZVRpbWUsIGFjdGlvbikge1xuICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoKTtcbiAgICB9O1xuXG4gICAgLyoqIEdldHMgdGhlIGN1cnJlbnQgdGltZSBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIG1hY2hpbmUncyBzeXN0ZW0gY2xvY2suICovXG4gICAgU2NoZWR1bGVyLm5vdyA9IGRlZmF1bHROb3c7XG5cbiAgICAvKiogR2V0cyB0aGUgY3VycmVudCB0aW1lIGFjY29yZGluZyB0byB0aGUgbG9jYWwgbWFjaGluZSdzIHN5c3RlbSBjbG9jay4gKi9cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLm5vdyA9IGRlZmF1bHROb3c7XG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVzIHRoZSBzcGVjaWZpZWQgVGltZVNwYW4gdmFsdWUgdG8gYSBwb3NpdGl2ZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZVNwYW4gVGhlIHRpbWUgc3BhbiB2YWx1ZSB0byBub3JtYWxpemUuXG4gICAgICogQHJldHVybnMge051bWJlcn0gVGhlIHNwZWNpZmllZCBUaW1lU3BhbiB2YWx1ZSBpZiBpdCBpcyB6ZXJvIG9yIHBvc2l0aXZlOyBvdGhlcndpc2UsIDBcbiAgICAgKi9cbiAgICBTY2hlZHVsZXIubm9ybWFsaXplID0gZnVuY3Rpb24gKHRpbWVTcGFuKSB7XG4gICAgICB0aW1lU3BhbiA8IDAgJiYgKHRpbWVTcGFuID0gMCk7XG4gICAgICByZXR1cm4gdGltZVNwYW47XG4gICAgfTtcblxuICAgIHJldHVybiBTY2hlZHVsZXI7XG4gIH0oKSk7XG5cbiAgdmFyIG5vcm1hbGl6ZVRpbWUgPSBTY2hlZHVsZXIubm9ybWFsaXplLCBpc1NjaGVkdWxlciA9IFNjaGVkdWxlci5pc1NjaGVkdWxlcjtcblxuICAoZnVuY3Rpb24gKHNjaGVkdWxlclByb3RvKSB7XG5cbiAgICBmdW5jdGlvbiBpbnZva2VSZWNJbW1lZGlhdGUoc2NoZWR1bGVyLCBwYWlyKSB7XG4gICAgICB2YXIgc3RhdGUgPSBwYWlyWzBdLCBhY3Rpb24gPSBwYWlyWzFdLCBncm91cCA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCk7XG4gICAgICBhY3Rpb24oc3RhdGUsIGlubmVyQWN0aW9uKTtcbiAgICAgIHJldHVybiBncm91cDtcblxuICAgICAgZnVuY3Rpb24gaW5uZXJBY3Rpb24oc3RhdGUyKSB7XG4gICAgICAgIHZhciBpc0FkZGVkID0gZmFsc2UsIGlzRG9uZSA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBkID0gc2NoZWR1bGVyLnNjaGVkdWxlKHN0YXRlMiwgc2NoZWR1bGVXb3JrKTtcbiAgICAgICAgaWYgKCFpc0RvbmUpIHtcbiAgICAgICAgICBncm91cC5hZGQoZCk7XG4gICAgICAgICAgaXNBZGRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVdvcmsoXywgc3RhdGUzKSB7XG4gICAgICAgICAgaWYgKGlzQWRkZWQpIHtcbiAgICAgICAgICAgIGdyb3VwLnJlbW92ZShkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uKHN0YXRlMywgaW5uZXJBY3Rpb24pO1xuICAgICAgICAgIHJldHVybiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZva2VSZWNEYXRlKHNjaGVkdWxlciwgcGFpcikge1xuICAgICAgdmFyIHN0YXRlID0gcGFpclswXSwgYWN0aW9uID0gcGFpclsxXSwgZ3JvdXAgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpO1xuICAgICAgYWN0aW9uKHN0YXRlLCBpbm5lckFjdGlvbik7XG4gICAgICByZXR1cm4gZ3JvdXA7XG5cbiAgICAgIGZ1bmN0aW9uIGlubmVyQWN0aW9uKHN0YXRlMiwgZHVlVGltZTEpIHtcbiAgICAgICAgdmFyIGlzQWRkZWQgPSBmYWxzZSwgaXNEb25lID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGQgPSBzY2hlZHVsZXIuc2NoZWR1bGVGdXR1cmUoc3RhdGUyLCBkdWVUaW1lMSwgc2NoZWR1bGVXb3JrKTtcbiAgICAgICAgaWYgKCFpc0RvbmUpIHtcbiAgICAgICAgICBncm91cC5hZGQoZCk7XG4gICAgICAgICAgaXNBZGRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVdvcmsoXywgc3RhdGUzKSB7XG4gICAgICAgICAgaWYgKGlzQWRkZWQpIHtcbiAgICAgICAgICAgIGdyb3VwLnJlbW92ZShkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uKHN0YXRlMywgaW5uZXJBY3Rpb24pO1xuICAgICAgICAgIHJldHVybiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gYWN0aW9uIHRvIGJlIGV4ZWN1dGVkIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IHN0YXRlIFN0YXRlIHBhc3NlZCB0byB0aGUgYWN0aW9uIHRvIGJlIGV4ZWN1dGVkLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBBY3Rpb24gdG8gZXhlY3V0ZSByZWN1cnNpdmVseS4gVGhlIGxhc3QgcGFyYW1ldGVyIHBhc3NlZCB0byB0aGUgYWN0aW9uIGlzIHVzZWQgdG8gdHJpZ2dlciByZWN1cnNpdmUgc2NoZWR1bGluZyBvZiB0aGUgYWN0aW9uLCBwYXNzaW5nIGluIHJlY3Vyc2l2ZSBpbnZvY2F0aW9uIHN0YXRlLlxuICAgICAqIEByZXR1cm5zIHtEaXNwb3NhYmxlfSBUaGUgZGlzcG9zYWJsZSBvYmplY3QgdXNlZCB0byBjYW5jZWwgdGhlIHNjaGVkdWxlZCBhY3Rpb24gKGJlc3QgZWZmb3J0KS5cbiAgICAgKi9cbiAgICBzY2hlZHVsZXJQcm90by5zY2hlZHVsZVJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZShbc3RhdGUsIGFjdGlvbl0sIGludm9rZVJlY0ltbWVkaWF0ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNjaGVkdWxlcyBhbiBhY3Rpb24gdG8gYmUgZXhlY3V0ZWQgcmVjdXJzaXZlbHkgYWZ0ZXIgYSBzcGVjaWZpZWQgcmVsYXRpdmUgb3IgYWJzb2x1dGUgZHVlIHRpbWUuXG4gICAgICogQHBhcmFtIHtNaXhlZH0gc3RhdGUgU3RhdGUgcGFzc2VkIHRvIHRoZSBhY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIEFjdGlvbiB0byBleGVjdXRlIHJlY3Vyc2l2ZWx5LiBUaGUgbGFzdCBwYXJhbWV0ZXIgcGFzc2VkIHRvIHRoZSBhY3Rpb24gaXMgdXNlZCB0byB0cmlnZ2VyIHJlY3Vyc2l2ZSBzY2hlZHVsaW5nIG9mIHRoZSBhY3Rpb24sIHBhc3NpbmcgaW4gdGhlIHJlY3Vyc2l2ZSBkdWUgdGltZSBhbmQgaW52b2NhdGlvbiBzdGF0ZS5cbiAgICAgKiBAcGFyYW0ge051bWJlciB8IERhdGV9IGR1ZVRpbWUgUmVsYXRpdmUgb3IgYWJzb2x1dGUgdGltZSBhZnRlciB3aGljaCB0byBleGVjdXRlIHRoZSBhY3Rpb24gZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgICAqIEByZXR1cm5zIHtEaXNwb3NhYmxlfSBUaGUgZGlzcG9zYWJsZSBvYmplY3QgdXNlZCB0byBjYW5jZWwgdGhlIHNjaGVkdWxlZCBhY3Rpb24gKGJlc3QgZWZmb3J0KS5cbiAgICAgKi9cbiAgICBzY2hlZHVsZXJQcm90by5zY2hlZHVsZVJlY3Vyc2l2ZUZ1dHVyZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZHVlVGltZSwgYWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZUZ1dHVyZShbc3RhdGUsIGFjdGlvbl0sIGR1ZVRpbWUsIGludm9rZVJlY0RhdGUpO1xuICAgIH07XG5cbiAgfShTY2hlZHVsZXIucHJvdG90eXBlKSk7XG5cbiAgKGZ1bmN0aW9uIChzY2hlZHVsZXJQcm90bykge1xuXG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGEgcGVyaW9kaWMgcGllY2Ugb2Ygd29yayBieSBkeW5hbWljYWxseSBkaXNjb3ZlcmluZyB0aGUgc2NoZWR1bGVyJ3MgY2FwYWJpbGl0aWVzLiBUaGUgcGVyaW9kaWMgdGFzayB3aWxsIGJlIHNjaGVkdWxlZCB1c2luZyB3aW5kb3cuc2V0SW50ZXJ2YWwgZm9yIHRoZSBiYXNlIGltcGxlbWVudGF0aW9uLlxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IHN0YXRlIEluaXRpYWwgc3RhdGUgcGFzc2VkIHRvIHRoZSBhY3Rpb24gdXBvbiB0aGUgZmlyc3QgaXRlcmF0aW9uLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwZXJpb2QgUGVyaW9kIGZvciBydW5uaW5nIHRoZSB3b3JrIHBlcmlvZGljYWxseS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gQWN0aW9uIHRvIGJlIGV4ZWN1dGVkLCBwb3RlbnRpYWxseSB1cGRhdGluZyB0aGUgc3RhdGUuXG4gICAgICogQHJldHVybnMge0Rpc3Bvc2FibGV9IFRoZSBkaXNwb3NhYmxlIG9iamVjdCB1c2VkIHRvIGNhbmNlbCB0aGUgc2NoZWR1bGVkIHJlY3VycmluZyBhY3Rpb24gKGJlc3QgZWZmb3J0KS5cbiAgICAgKi9cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlUGVyaW9kaWMgPSBmdW5jdGlvbihzdGF0ZSwgcGVyaW9kLCBhY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2Ygcm9vdC5zZXRJbnRlcnZhbCA9PT0gJ3VuZGVmaW5lZCcpIHsgdGhyb3cgbmV3IE5vdFN1cHBvcnRlZEVycm9yKCk7IH1cbiAgICAgIHBlcmlvZCA9IG5vcm1hbGl6ZVRpbWUocGVyaW9kKTtcbiAgICAgIHZhciBzID0gc3RhdGUsIGlkID0gcm9vdC5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHMgPSBhY3Rpb24ocyk7IH0sIHBlcmlvZCk7XG4gICAgICByZXR1cm4gZGlzcG9zYWJsZUNyZWF0ZShmdW5jdGlvbiAoKSB7IHJvb3QuY2xlYXJJbnRlcnZhbChpZCk7IH0pO1xuICAgIH07XG5cbiAgfShTY2hlZHVsZXIucHJvdG90eXBlKSk7XG5cbiAgLyoqIEdldHMgYSBzY2hlZHVsZXIgdGhhdCBzY2hlZHVsZXMgd29yayBpbW1lZGlhdGVseSBvbiB0aGUgY3VycmVudCB0aHJlYWQuICovXG4gICB2YXIgSW1tZWRpYXRlU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhJbW1lZGlhdGVTY2hlZHVsZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gSW1tZWRpYXRlU2NoZWR1bGVyKCkge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgSW1tZWRpYXRlU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICByZXR1cm4gZGlzcG9zYWJsZUZpeHVwKGFjdGlvbih0aGlzLCBzdGF0ZSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gSW1tZWRpYXRlU2NoZWR1bGVyO1xuICB9KFNjaGVkdWxlcikpO1xuXG4gIHZhciBpbW1lZGlhdGVTY2hlZHVsZXIgPSBTY2hlZHVsZXIuaW1tZWRpYXRlID0gbmV3IEltbWVkaWF0ZVNjaGVkdWxlcigpO1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgc2NoZWR1bGVyIHRoYXQgc2NoZWR1bGVzIHdvcmsgYXMgc29vbiBhcyBwb3NzaWJsZSBvbiB0aGUgY3VycmVudCB0aHJlYWQuXG4gICAqL1xuICB2YXIgQ3VycmVudFRocmVhZFNjaGVkdWxlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgdmFyIHF1ZXVlO1xuXG4gICAgZnVuY3Rpb24gcnVuVHJhbXBvbGluZSAoKSB7XG4gICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlLmRlcXVldWUoKTtcbiAgICAgICAgIWl0ZW0uaXNDYW5jZWxsZWQoKSAmJiBpdGVtLmludm9rZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluaGVyaXRzKEN1cnJlbnRUaHJlYWRTY2hlZHVsZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ3VycmVudFRocmVhZFNjaGVkdWxlcigpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIEN1cnJlbnRUaHJlYWRTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHZhciBzaSA9IG5ldyBTY2hlZHVsZWRJdGVtKHRoaXMsIHN0YXRlLCBhY3Rpb24sIHRoaXMubm93KCkpO1xuXG4gICAgICBpZiAoIXF1ZXVlKSB7XG4gICAgICAgIHF1ZXVlID0gbmV3IFByaW9yaXR5UXVldWUoNCk7XG4gICAgICAgIHF1ZXVlLmVucXVldWUoc2kpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaChydW5UcmFtcG9saW5lKSgpO1xuICAgICAgICBxdWV1ZSA9IG51bGw7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7IHRocm93ZXIocmVzdWx0LmUpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZS5lbnF1ZXVlKHNpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaS5kaXNwb3NhYmxlO1xuICAgIH07XG5cbiAgICBDdXJyZW50VGhyZWFkU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZVJlcXVpcmVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gIXF1ZXVlOyB9O1xuXG4gICAgcmV0dXJuIEN1cnJlbnRUaHJlYWRTY2hlZHVsZXI7XG4gIH0oU2NoZWR1bGVyKSk7XG5cbiAgdmFyIGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIgPSBTY2hlZHVsZXIuY3VycmVudFRocmVhZCA9IG5ldyBDdXJyZW50VGhyZWFkU2NoZWR1bGVyKCk7XG5cbiAgdmFyIFNjaGVkdWxlUGVyaW9kaWNSZWN1cnNpdmUgPSBSeC5pbnRlcm5hbHMuU2NoZWR1bGVQZXJpb2RpY1JlY3Vyc2l2ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlVGljayhzZWxmKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdGljayhjb21tYW5kLCByZWN1cnNlKSB7XG4gICAgICAgIHJlY3Vyc2UoMCwgc2VsZi5fcGVyaW9kKTtcbiAgICAgICAgdmFyIHN0YXRlID0gdHJ5Q2F0Y2goc2VsZi5fYWN0aW9uKShzZWxmLl9zdGF0ZSk7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICBzZWxmLl9jYW5jZWwuZGlzcG9zZSgpO1xuICAgICAgICAgIHRocm93ZXIoc3RhdGUuZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2NoZWR1bGVQZXJpb2RpY1JlY3Vyc2l2ZShzY2hlZHVsZXIsIHN0YXRlLCBwZXJpb2QsIGFjdGlvbikge1xuICAgICAgdGhpcy5fc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgIHRoaXMuX3BlcmlvZCA9IHBlcmlvZDtcbiAgICAgIHRoaXMuX2FjdGlvbiA9IGFjdGlvbjtcbiAgICB9XG5cbiAgICBTY2hlZHVsZVBlcmlvZGljUmVjdXJzaXZlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLl9jYW5jZWwgPSBkO1xuICAgICAgZC5zZXREaXNwb3NhYmxlKHRoaXMuX3NjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZUZ1dHVyZSgwLCB0aGlzLl9wZXJpb2QsIGNyZWF0ZVRpY2sodGhpcykpKTtcblxuICAgICAgcmV0dXJuIGQ7XG4gICAgfTtcblxuICAgIHJldHVybiBTY2hlZHVsZVBlcmlvZGljUmVjdXJzaXZlO1xuICB9KCkpO1xuXG4gIHZhciBzY2hlZHVsZU1ldGhvZCwgY2xlYXJNZXRob2Q7XG5cbiAgdmFyIGxvY2FsVGltZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2NhbFNldFRpbWVvdXQsIGxvY2FsQ2xlYXJUaW1lb3V0ID0gbm9vcDtcbiAgICBpZiAoISFyb290LnNldFRpbWVvdXQpIHtcbiAgICAgIGxvY2FsU2V0VGltZW91dCA9IHJvb3Quc2V0VGltZW91dDtcbiAgICAgIGxvY2FsQ2xlYXJUaW1lb3V0ID0gcm9vdC5jbGVhclRpbWVvdXQ7XG4gICAgfSBlbHNlIGlmICghIXJvb3QuV1NjcmlwdCkge1xuICAgICAgbG9jYWxTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKGZuLCB0aW1lKSB7XG4gICAgICAgIHJvb3QuV1NjcmlwdC5TbGVlcCh0aW1lKTtcbiAgICAgICAgZm4oKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBOb3RTdXBwb3J0ZWRFcnJvcigpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXRUaW1lb3V0OiBsb2NhbFNldFRpbWVvdXQsXG4gICAgICBjbGVhclRpbWVvdXQ6IGxvY2FsQ2xlYXJUaW1lb3V0XG4gICAgfTtcbiAgfSgpKTtcbiAgdmFyIGxvY2FsU2V0VGltZW91dCA9IGxvY2FsVGltZXIuc2V0VGltZW91dCxcbiAgICBsb2NhbENsZWFyVGltZW91dCA9IGxvY2FsVGltZXIuY2xlYXJUaW1lb3V0O1xuXG4gIChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDEsIHRhc2tzQnlIYW5kbGUgPSB7fSwgY3VycmVudGx5UnVubmluZyA9IGZhbHNlO1xuXG4gICAgY2xlYXJNZXRob2QgPSBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBydW5UYXNrKGhhbmRsZSkge1xuICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmcpIHtcbiAgICAgICAgbG9jYWxTZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcnVuVGFzayhoYW5kbGUpOyB9LCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0YXNrKSgpO1xuICAgICAgICAgIGNsZWFyTWV0aG9kKGhhbmRsZSk7XG4gICAgICAgICAgY3VycmVudGx5UnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7IHRocm93ZXIocmVzdWx0LmUpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVOYXRpdmUgPSBuZXcgUmVnRXhwKCdeJyArXG4gICAgICBTdHJpbmcodG9TdHJpbmcpXG4gICAgICAgIC5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpXG4gICAgICAgIC5yZXBsYWNlKC90b1N0cmluZ3wgZm9yIFteXFxdXSsvZywgJy4qPycpICsgJyQnXG4gICAgKTtcblxuICAgIHZhciBzZXRJbW1lZGlhdGUgPSB0eXBlb2YgKHNldEltbWVkaWF0ZSA9IGZyZWVHbG9iYWwgJiYgbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnNldEltbWVkaWF0ZSkgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgIXJlTmF0aXZlLnRlc3Qoc2V0SW1tZWRpYXRlKSAmJiBzZXRJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZVN1cHBvcnRlZCAoKSB7XG4gICAgICAvLyBFbnN1cmUgbm90IGluIGEgd29ya2VyXG4gICAgICBpZiAoIXJvb3QucG9zdE1lc3NhZ2UgfHwgcm9vdC5pbXBvcnRTY3JpcHRzKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgdmFyIGlzQXN5bmMgPSBmYWxzZSwgb2xkSGFuZGxlciA9IHJvb3Qub25tZXNzYWdlO1xuICAgICAgLy8gVGVzdCBmb3IgYXN5bmNcbiAgICAgIHJvb3Qub25tZXNzYWdlID0gZnVuY3Rpb24gKCkgeyBpc0FzeW5jID0gdHJ1ZTsgfTtcbiAgICAgIHJvb3QucG9zdE1lc3NhZ2UoJycsICcqJyk7XG4gICAgICByb290Lm9ubWVzc2FnZSA9IG9sZEhhbmRsZXI7XG5cbiAgICAgIHJldHVybiBpc0FzeW5jO1xuICAgIH1cblxuICAgIC8vIFVzZSBpbiBvcmRlciwgc2V0SW1tZWRpYXRlLCBuZXh0VGljaywgcG9zdE1lc3NhZ2UsIE1lc3NhZ2VDaGFubmVsLCBzY3JpcHQgcmVhZHlzdGF0ZWNoYW5nZWQsIHNldFRpbWVvdXRcbiAgICBpZiAoaXNGdW5jdGlvbihzZXRJbW1lZGlhdGUpKSB7XG4gICAgICBzY2hlZHVsZU1ldGhvZCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGlkID0gbmV4dEhhbmRsZSsrO1xuICAgICAgICB0YXNrc0J5SGFuZGxlW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHsgcnVuVGFzayhpZCk7IH0pO1xuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgICBzY2hlZHVsZU1ldGhvZCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGlkID0gbmV4dEhhbmRsZSsrO1xuICAgICAgICB0YXNrc0J5SGFuZGxlW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1blRhc2soaWQpOyB9KTtcblxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAocG9zdE1lc3NhZ2VTdXBwb3J0ZWQoKSkge1xuICAgICAgdmFyIE1TR19QUkVGSVggPSAnbXMucnguc2NoZWR1bGUnICsgTWF0aC5yYW5kb20oKTtcblxuICAgICAgdmFyIG9uR2xvYmFsUG9zdE1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gT25seSBpZiB3ZSdyZSBhIG1hdGNoIHRvIGF2b2lkIGFueSBvdGhlciBnbG9iYWwgZXZlbnRzXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycgJiYgZXZlbnQuZGF0YS5zdWJzdHJpbmcoMCwgTVNHX1BSRUZJWC5sZW5ndGgpID09PSBNU0dfUFJFRklYKSB7XG4gICAgICAgICAgcnVuVGFzayhldmVudC5kYXRhLnN1YnN0cmluZyhNU0dfUFJFRklYLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbkdsb2JhbFBvc3RNZXNzYWdlLCBmYWxzZSk7XG5cbiAgICAgIHNjaGVkdWxlTWV0aG9kID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgaWQgPSBuZXh0SGFuZGxlKys7XG4gICAgICAgIHRhc2tzQnlIYW5kbGVbaWRdID0gYWN0aW9uO1xuICAgICAgICByb290LnBvc3RNZXNzYWdlKE1TR19QUkVGSVggKyBjdXJyZW50SWQsICcqJyk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghIXJvb3QuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgIHZhciBjaGFubmVsID0gbmV3IHJvb3QuTWVzc2FnZUNoYW5uZWwoKTtcblxuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkgeyBydW5UYXNrKGUuZGF0YSk7IH07XG5cbiAgICAgIHNjaGVkdWxlTWV0aG9kID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgaWQgPSBuZXh0SGFuZGxlKys7XG4gICAgICAgIHRhc2tzQnlIYW5kbGVbaWRdID0gYWN0aW9uO1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGlkKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCdkb2N1bWVudCcgaW4gcm9vdCAmJiAnb25yZWFkeXN0YXRlY2hhbmdlJyBpbiByb290LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG5cbiAgICAgIHNjaGVkdWxlTWV0aG9kID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgc2NyaXB0RWxlbWVudCA9IHJvb3QuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHZhciBpZCA9IG5leHRIYW5kbGUrKztcbiAgICAgICAgdGFza3NCeUhhbmRsZVtpZF0gPSBhY3Rpb247XG5cbiAgICAgICAgc2NyaXB0RWxlbWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcnVuVGFzayhpZCk7XG4gICAgICAgICAgc2NyaXB0RWxlbWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgIHNjcmlwdEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHRFbGVtZW50KTtcbiAgICAgICAgICBzY3JpcHRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgcm9vdC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVNZXRob2QgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpZCA9IG5leHRIYW5kbGUrKztcbiAgICAgICAgdGFza3NCeUhhbmRsZVtpZF0gPSBhY3Rpb247XG4gICAgICAgIGxvY2FsU2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcnVuVGFzayhpZCk7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG4gICAgfVxuICB9KCkpO1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgc2NoZWR1bGVyIHRoYXQgc2NoZWR1bGVzIHdvcmsgdmlhIGEgdGltZWQgY2FsbGJhY2sgYmFzZWQgdXBvbiBwbGF0Zm9ybS5cbiAgICovXG4gICB2YXIgRGVmYXVsdFNjaGVkdWxlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgIGluaGVyaXRzKERlZmF1bHRTY2hlZHVsZXIsIF9fc3VwZXJfXyk7XG4gICAgIGZ1bmN0aW9uIERlZmF1bHRTY2hlZHVsZXIoKSB7XG4gICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgIH1cblxuICAgICBmdW5jdGlvbiBzY2hlZHVsZUFjdGlvbihkaXNwb3NhYmxlLCBhY3Rpb24sIHNjaGVkdWxlciwgc3RhdGUpIHtcbiAgICAgICByZXR1cm4gZnVuY3Rpb24gc2NoZWR1bGUoKSB7XG4gICAgICAgICAhZGlzcG9zYWJsZS5pc0Rpc3Bvc2VkICYmIGRpc3Bvc2FibGUuc2V0RGlzcG9zYWJsZShEaXNwb3NhYmxlLl9maXh1cChhY3Rpb24oc2NoZWR1bGVyLCBzdGF0ZSkpKTtcbiAgICAgICB9O1xuICAgICB9XG5cbiAgICAgZnVuY3Rpb24gQ2xlYXJEaXNwb3NhYmxlKG1ldGhvZCwgaWQpIHtcbiAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgIHRoaXMuX21ldGhvZCA9IG1ldGhvZDtcbiAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgfVxuXG4gICAgIENsZWFyRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgIHRoaXMuX21ldGhvZC5jYWxsKG51bGwsIHRoaXMuX2lkKTtcbiAgICAgICB9XG4gICAgIH07XG5cbiAgICBEZWZhdWx0U2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICB2YXIgZGlzcG9zYWJsZSA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpLFxuICAgICAgICAgIGlkID0gc2NoZWR1bGVNZXRob2Qoc2NoZWR1bGVBY3Rpb24oZGlzcG9zYWJsZSwgYWN0aW9uLCB0aGlzLCBzdGF0ZSkpO1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKGRpc3Bvc2FibGUsIG5ldyBDbGVhckRpc3Bvc2FibGUoY2xlYXJNZXRob2QsIGlkKSk7XG4gICAgfTtcblxuICAgIERlZmF1bHRTY2hlZHVsZXIucHJvdG90eXBlLl9zY2hlZHVsZUZ1dHVyZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZHVlVGltZSwgYWN0aW9uKSB7XG4gICAgICBpZiAoZHVlVGltZSA9PT0gMCkgeyByZXR1cm4gdGhpcy5zY2hlZHVsZShzdGF0ZSwgYWN0aW9uKTsgfVxuICAgICAgdmFyIGRpc3Bvc2FibGUgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKSxcbiAgICAgICAgICBpZCA9IGxvY2FsU2V0VGltZW91dChzY2hlZHVsZUFjdGlvbihkaXNwb3NhYmxlLCBhY3Rpb24sIHRoaXMsIHN0YXRlKSwgZHVlVGltZSk7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoZGlzcG9zYWJsZSwgbmV3IENsZWFyRGlzcG9zYWJsZShsb2NhbENsZWFyVGltZW91dCwgaWQpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERlZmF1bHRTY2hlZHVsZXI7XG4gIH0oU2NoZWR1bGVyKSk7XG5cbiAgdmFyIGRlZmF1bHRTY2hlZHVsZXIgPSBTY2hlZHVsZXJbJ2RlZmF1bHQnXSA9IFNjaGVkdWxlci5hc3luYyA9IG5ldyBEZWZhdWx0U2NoZWR1bGVyKCk7XG5cbiAgZnVuY3Rpb24gSW5kZXhlZEl0ZW0oaWQsIHZhbHVlKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIEluZGV4ZWRJdGVtLnByb3RvdHlwZS5jb21wYXJlVG8gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICB2YXIgYyA9IHRoaXMudmFsdWUuY29tcGFyZVRvKG90aGVyLnZhbHVlKTtcbiAgICBjID09PSAwICYmIChjID0gdGhpcy5pZCAtIG90aGVyLmlkKTtcbiAgICByZXR1cm4gYztcbiAgfTtcblxuICB2YXIgUHJpb3JpdHlRdWV1ZSA9IFJ4LmludGVybmFscy5Qcmlvcml0eVF1ZXVlID0gZnVuY3Rpb24gKGNhcGFjaXR5KSB7XG4gICAgdGhpcy5pdGVtcyA9IG5ldyBBcnJheShjYXBhY2l0eSk7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIHZhciBwcmlvcml0eVByb3RvID0gUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGU7XG4gIHByaW9yaXR5UHJvdG8uaXNIaWdoZXJQcmlvcml0eSA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW2xlZnRdLmNvbXBhcmVUbyh0aGlzLml0ZW1zW3JpZ2h0XSkgPCAwO1xuICB9O1xuXG4gIHByaW9yaXR5UHJvdG8ucGVyY29sYXRlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoIHx8IGluZGV4IDwgMCkgeyByZXR1cm47IH1cbiAgICB2YXIgcGFyZW50ID0gaW5kZXggLSAxID4+IDE7XG4gICAgaWYgKHBhcmVudCA8IDAgfHwgcGFyZW50ID09PSBpbmRleCkgeyByZXR1cm47IH1cbiAgICBpZiAodGhpcy5pc0hpZ2hlclByaW9yaXR5KGluZGV4LCBwYXJlbnQpKSB7XG4gICAgICB2YXIgdGVtcCA9IHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSB0aGlzLml0ZW1zW3BhcmVudF07XG4gICAgICB0aGlzLml0ZW1zW3BhcmVudF0gPSB0ZW1wO1xuICAgICAgdGhpcy5wZXJjb2xhdGUocGFyZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcHJpb3JpdHlQcm90by5oZWFwaWZ5ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgK2luZGV4IHx8IChpbmRleCA9IDApO1xuICAgIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCB8fCBpbmRleCA8IDApIHsgcmV0dXJuOyB9XG4gICAgdmFyIGxlZnQgPSAyICogaW5kZXggKyAxLFxuICAgICAgICByaWdodCA9IDIgKiBpbmRleCArIDIsXG4gICAgICAgIGZpcnN0ID0gaW5kZXg7XG4gICAgaWYgKGxlZnQgPCB0aGlzLmxlbmd0aCAmJiB0aGlzLmlzSGlnaGVyUHJpb3JpdHkobGVmdCwgZmlyc3QpKSB7XG4gICAgICBmaXJzdCA9IGxlZnQ7XG4gICAgfVxuICAgIGlmIChyaWdodCA8IHRoaXMubGVuZ3RoICYmIHRoaXMuaXNIaWdoZXJQcmlvcml0eShyaWdodCwgZmlyc3QpKSB7XG4gICAgICBmaXJzdCA9IHJpZ2h0O1xuICAgIH1cbiAgICBpZiAoZmlyc3QgIT09IGluZGV4KSB7XG4gICAgICB2YXIgdGVtcCA9IHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSB0aGlzLml0ZW1zW2ZpcnN0XTtcbiAgICAgIHRoaXMuaXRlbXNbZmlyc3RdID0gdGVtcDtcbiAgICAgIHRoaXMuaGVhcGlmeShmaXJzdCk7XG4gICAgfVxuICB9O1xuXG4gIHByaW9yaXR5UHJvdG8ucGVlayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuaXRlbXNbMF0udmFsdWU7IH07XG5cbiAgcHJpb3JpdHlQcm90by5yZW1vdmVBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gdGhpcy5pdGVtc1stLXRoaXMubGVuZ3RoXTtcbiAgICB0aGlzLml0ZW1zW3RoaXMubGVuZ3RoXSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYXBpZnkoKTtcbiAgfTtcblxuICBwcmlvcml0eVByb3RvLmRlcXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMucGVlaygpO1xuICAgIHRoaXMucmVtb3ZlQXQoMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBwcmlvcml0eVByb3RvLmVucXVldWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpbmRleCA9IHRoaXMubGVuZ3RoKys7XG4gICAgdGhpcy5pdGVtc1tpbmRleF0gPSBuZXcgSW5kZXhlZEl0ZW0oUHJpb3JpdHlRdWV1ZS5jb3VudCsrLCBpdGVtKTtcbiAgICB0aGlzLnBlcmNvbGF0ZShpbmRleCk7XG4gIH07XG5cbiAgcHJpb3JpdHlQcm90by5yZW1vdmUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaXRlbXNbaV0udmFsdWUgPT09IGl0ZW0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdChpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgUHJpb3JpdHlRdWV1ZS5jb3VudCA9IDA7XG5cbiAgLyoqXG4gICAqICBSZXByZXNlbnRzIGEgbm90aWZpY2F0aW9uIHRvIGFuIG9ic2VydmVyLlxuICAgKi9cbiAgdmFyIE5vdGlmaWNhdGlvbiA9IFJ4Lk5vdGlmaWNhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm90aWZpY2F0aW9uKCkge1xuXG4gICAgfVxuXG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS5fYWNjZXB0ID0gZnVuY3Rpb24gKG9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCk7XG4gICAgfTtcblxuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuX2FjY2VwdE9ic2VydmFibGUgPSBmdW5jdGlvbiAob25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkge1xuICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlcyB0aGUgZGVsZWdhdGUgY29ycmVzcG9uZGluZyB0byB0aGUgbm90aWZpY2F0aW9uIG9yIHRoZSBvYnNlcnZlcidzIG1ldGhvZCBjb3JyZXNwb25kaW5nIHRvIHRoZSBub3RpZmljYXRpb24gYW5kIHJldHVybnMgdGhlIHByb2R1Y2VkIHJlc3VsdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBOb3RpZmljYXRpb25cbiAgICAgKiBAcGFyYW0ge0FueX0gb2JzZXJ2ZXJPck9uTmV4dCBEZWxlZ2F0ZSB0byBpbnZva2UgZm9yIGFuIE9uTmV4dCBub3RpZmljYXRpb24gb3IgT2JzZXJ2ZXIgdG8gaW52b2tlIHRoZSBub3RpZmljYXRpb24gb24uLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uRXJyb3IgRGVsZWdhdGUgdG8gaW52b2tlIGZvciBhbiBPbkVycm9yIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlZCBEZWxlZ2F0ZSB0byBpbnZva2UgZm9yIGFuIE9uQ29tcGxldGVkIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7QW55fSBSZXN1bHQgcHJvZHVjZWQgYnkgdGhlIG9ic2VydmF0aW9uLlxuICAgICAqL1xuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24gKG9ic2VydmVyT3JPbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXJPck9uTmV4dCAmJiB0eXBlb2Ygb2JzZXJ2ZXJPck9uTmV4dCA9PT0gJ29iamVjdCcgP1xuICAgICAgICB0aGlzLl9hY2NlcHRPYnNlcnZhYmxlKG9ic2VydmVyT3JPbk5leHQpIDpcbiAgICAgICAgdGhpcy5fYWNjZXB0KG9ic2VydmVyT3JPbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHdpdGggYSBzaW5nbGUgbm90aWZpY2F0aW9uLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIE5vdGlmaWNhdGlvbnNcbiAgICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gU2NoZWR1bGVyIHRvIHNlbmQgb3V0IHRoZSBub3RpZmljYXRpb24gY2FsbHMgb24uXG4gICAgICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgc3VyZmFjZXMgdGhlIGJlaGF2aW9yIG9mIHRoZSBub3RpZmljYXRpb24gdXBvbiBzdWJzY3JpcHRpb24uXG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS50b09ic2VydmFibGUgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBpbW1lZGlhdGVTY2hlZHVsZXIpO1xuICAgICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoc2VsZiwgZnVuY3Rpb24gKF8sIG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgIG5vdGlmaWNhdGlvbi5fYWNjZXB0T2JzZXJ2YWJsZShvKTtcbiAgICAgICAgICBub3RpZmljYXRpb24ua2luZCA9PT0gJ04nICYmIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE5vdGlmaWNhdGlvbjtcbiAgfSkoKTtcblxuICB2YXIgT25OZXh0Tm90aWZpY2F0aW9uID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhPbk5leHROb3RpZmljYXRpb24sIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gT25OZXh0Tm90aWZpY2F0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmtpbmQgPSAnTic7XG4gICAgfVxuXG4gICAgT25OZXh0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS5fYWNjZXB0ID0gZnVuY3Rpb24gKG9uTmV4dCkge1xuICAgICAgcmV0dXJuIG9uTmV4dCh0aGlzLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgT25OZXh0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS5fYWNjZXB0T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gby5vbk5leHQodGhpcy52YWx1ZSk7XG4gICAgfTtcblxuICAgIE9uTmV4dE5vdGlmaWNhdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ09uTmV4dCgnICsgdGhpcy52YWx1ZSArICcpJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9uTmV4dE5vdGlmaWNhdGlvbjtcbiAgfShOb3RpZmljYXRpb24pKTtcblxuICB2YXIgT25FcnJvck5vdGlmaWNhdGlvbiA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoT25FcnJvck5vdGlmaWNhdGlvbiwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBPbkVycm9yTm90aWZpY2F0aW9uKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICB0aGlzLmtpbmQgPSAnRSc7XG4gICAgfVxuXG4gICAgT25FcnJvck5vdGlmaWNhdGlvbi5wcm90b3R5cGUuX2FjY2VwdCA9IGZ1bmN0aW9uIChvbk5leHQsIG9uRXJyb3IpIHtcbiAgICAgIHJldHVybiBvbkVycm9yKHRoaXMuZXJyb3IpO1xuICAgIH07XG5cbiAgICBPbkVycm9yTm90aWZpY2F0aW9uLnByb3RvdHlwZS5fYWNjZXB0T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gby5vbkVycm9yKHRoaXMuZXJyb3IpO1xuICAgIH07XG5cbiAgICBPbkVycm9yTm90aWZpY2F0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnT25FcnJvcignICsgdGhpcy5lcnJvciArICcpJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9uRXJyb3JOb3RpZmljYXRpb247XG4gIH0oTm90aWZpY2F0aW9uKSk7XG5cbiAgdmFyIE9uQ29tcGxldGVkTm90aWZpY2F0aW9uID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhPbkNvbXBsZXRlZE5vdGlmaWNhdGlvbiwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBPbkNvbXBsZXRlZE5vdGlmaWNhdGlvbigpIHtcbiAgICAgIHRoaXMua2luZCA9ICdDJztcbiAgICB9XG5cbiAgICBPbkNvbXBsZXRlZE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuX2FjY2VwdCA9IGZ1bmN0aW9uIChvbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSB7XG4gICAgICByZXR1cm4gb25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgT25Db21wbGV0ZWROb3RpZmljYXRpb24ucHJvdG90eXBlLl9hY2NlcHRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBvLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIE9uQ29tcGxldGVkTm90aWZpY2F0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnT25Db21wbGV0ZWQoKSc7XG4gICAgfTtcblxuICAgIHJldHVybiBPbkNvbXBsZXRlZE5vdGlmaWNhdGlvbjtcbiAgfShOb3RpZmljYXRpb24pKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIGFuIE9uTmV4dCBub3RpZmljYXRpb24gdG8gYW4gb2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZSBUaGUgdmFsdWUgY29udGFpbmVkIGluIHRoZSBub3RpZmljYXRpb24uXG4gICAqIEByZXR1cm5zIHtOb3RpZmljYXRpb259IFRoZSBPbk5leHQgbm90aWZpY2F0aW9uIGNvbnRhaW5pbmcgdGhlIHZhbHVlLlxuICAgKi9cbiAgdmFyIG5vdGlmaWNhdGlvbkNyZWF0ZU9uTmV4dCA9IE5vdGlmaWNhdGlvbi5jcmVhdGVPbk5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IE9uTmV4dE5vdGlmaWNhdGlvbih2YWx1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhbiBPbkVycm9yIG5vdGlmaWNhdGlvbiB0byBhbiBvYnNlcnZlci5cbiAgICogQHBhcmFtIHtBbnl9IGVycm9yIFRoZSBleGNlcHRpb24gY29udGFpbmVkIGluIHRoZSBub3RpZmljYXRpb24uXG4gICAqIEByZXR1cm5zIHtOb3RpZmljYXRpb259IFRoZSBPbkVycm9yIG5vdGlmaWNhdGlvbiBjb250YWluaW5nIHRoZSBleGNlcHRpb24uXG4gICAqL1xuICB2YXIgbm90aWZpY2F0aW9uQ3JlYXRlT25FcnJvciA9IE5vdGlmaWNhdGlvbi5jcmVhdGVPbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBPbkVycm9yTm90aWZpY2F0aW9uKGVycm9yKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIGFuIE9uQ29tcGxldGVkIG5vdGlmaWNhdGlvbiB0byBhbiBvYnNlcnZlci5cbiAgICogQHJldHVybnMge05vdGlmaWNhdGlvbn0gVGhlIE9uQ29tcGxldGVkIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIHZhciBub3RpZmljYXRpb25DcmVhdGVPbkNvbXBsZXRlZCA9IE5vdGlmaWNhdGlvbi5jcmVhdGVPbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IE9uQ29tcGxldGVkTm90aWZpY2F0aW9uKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN1cHBvcnRzIHB1c2gtc3R5bGUgaXRlcmF0aW9uIG92ZXIgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICovXG4gIHZhciBPYnNlcnZlciA9IFJ4Lk9ic2VydmVyID0gZnVuY3Rpb24gKCkgeyB9O1xuXG4gIC8qKlxuICAgKiAgQ3JlYXRlcyBhbiBvYnNlcnZlciBmcm9tIHRoZSBzcGVjaWZpZWQgT25OZXh0LCBhbG9uZyB3aXRoIG9wdGlvbmFsIE9uRXJyb3IsIGFuZCBPbkNvbXBsZXRlZCBhY3Rpb25zLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25OZXh0XSBPYnNlcnZlcidzIE9uTmV4dCBhY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkVycm9yXSBPYnNlcnZlcidzIE9uRXJyb3IgYWN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25Db21wbGV0ZWRdIE9ic2VydmVyJ3MgT25Db21wbGV0ZWQgYWN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2ZXJ9IFRoZSBvYnNlcnZlciBvYmplY3QgaW1wbGVtZW50ZWQgdXNpbmcgdGhlIGdpdmVuIGFjdGlvbnMuXG4gICAqL1xuICB2YXIgb2JzZXJ2ZXJDcmVhdGUgPSBPYnNlcnZlci5jcmVhdGUgPSBmdW5jdGlvbiAob25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkge1xuICAgIG9uTmV4dCB8fCAob25OZXh0ID0gbm9vcCk7XG4gICAgb25FcnJvciB8fCAob25FcnJvciA9IGRlZmF1bHRFcnJvcik7XG4gICAgb25Db21wbGV0ZWQgfHwgKG9uQ29tcGxldGVkID0gbm9vcCk7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZlcihvbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKTtcbiAgfTtcblxuICAvKipcbiAgICogQWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50YXRpb25zIG9mIHRoZSBPYnNlcnZlciBjbGFzcy5cbiAgICogVGhpcyBiYXNlIGNsYXNzIGVuZm9yY2VzIHRoZSBncmFtbWFyIG9mIG9ic2VydmVycyB3aGVyZSBPbkVycm9yIGFuZCBPbkNvbXBsZXRlZCBhcmUgdGVybWluYWwgbWVzc2FnZXMuXG4gICAqL1xuICB2YXIgQWJzdHJhY3RPYnNlcnZlciA9IFJ4LmludGVybmFscy5BYnN0cmFjdE9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhBYnN0cmFjdE9ic2VydmVyLCBfX3N1cGVyX18pO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBvYnNlcnZlciBpbiBhIG5vbi1zdG9wcGVkIHN0YXRlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEFic3RyYWN0T2JzZXJ2ZXIoKSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE11c3QgYmUgaW1wbGVtZW50ZWQgYnkgb3RoZXIgb2JzZXJ2ZXJzXG4gICAgQWJzdHJhY3RPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IG5vdEltcGxlbWVudGVkO1xuICAgIEFic3RyYWN0T2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gbm90SW1wbGVtZW50ZWQ7XG4gICAgQWJzdHJhY3RPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gbm90SW1wbGVtZW50ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZmllcyB0aGUgb2JzZXJ2ZXIgb2YgYSBuZXcgZWxlbWVudCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICogQHBhcmFtIHtBbnl9IHZhbHVlIE5leHQgZWxlbWVudCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICovXG4gICAgQWJzdHJhY3RPYnNlcnZlci5wcm90b3R5cGUub25OZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAhdGhpcy5pc1N0b3BwZWQgJiYgdGhpcy5uZXh0KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgdGhlIG9ic2VydmVyIHRoYXQgYW4gZXhjZXB0aW9uIGhhcyBvY2N1cnJlZC5cbiAgICAgKiBAcGFyYW0ge0FueX0gZXJyb3IgVGhlIGVycm9yIHRoYXQgaGFzIG9jY3VycmVkLlxuICAgICAqL1xuICAgIEFic3RyYWN0T2JzZXJ2ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgdGhlIG9ic2VydmVyIG9mIHRoZSBlbmQgb2YgdGhlIHNlcXVlbmNlLlxuICAgICAqL1xuICAgIEFic3RyYWN0T2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2VzIHRoZSBvYnNlcnZlciwgY2F1c2luZyBpdCB0byB0cmFuc2l0aW9uIHRvIHRoZSBzdG9wcGVkIHN0YXRlLlxuICAgICAqL1xuICAgIEFic3RyYWN0T2JzZXJ2ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgfTtcblxuICAgIEFic3RyYWN0T2JzZXJ2ZXIucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3IoZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiBBYnN0cmFjdE9ic2VydmVyO1xuICB9KE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqIENsYXNzIHRvIGNyZWF0ZSBhbiBPYnNlcnZlciBpbnN0YW5jZSBmcm9tIGRlbGVnYXRlLWJhc2VkIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgb24qIG1ldGhvZHMuXG4gICAqL1xuICB2YXIgQW5vbnltb3VzT2JzZXJ2ZXIgPSBSeC5Bbm9ueW1vdXNPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQW5vbnltb3VzT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIG9ic2VydmVyIGZyb20gdGhlIHNwZWNpZmllZCBPbk5leHQsIE9uRXJyb3IsIGFuZCBPbkNvbXBsZXRlZCBhY3Rpb25zLlxuICAgICAqIEBwYXJhbSB7QW55fSBvbk5leHQgT2JzZXJ2ZXIncyBPbk5leHQgYWN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgICAqIEBwYXJhbSB7QW55fSBvbkVycm9yIE9ic2VydmVyJ3MgT25FcnJvciBhY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAgICogQHBhcmFtIHtBbnl9IG9uQ29tcGxldGVkIE9ic2VydmVyJ3MgT25Db21wbGV0ZWQgYWN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEFub255bW91c09ic2VydmVyKG9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5fb25OZXh0ID0gb25OZXh0O1xuICAgICAgdGhpcy5fb25FcnJvciA9IG9uRXJyb3I7XG4gICAgICB0aGlzLl9vbkNvbXBsZXRlZCA9IG9uQ29tcGxldGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBvbk5leHQgYWN0aW9uLlxuICAgICAqIEBwYXJhbSB7QW55fSB2YWx1ZSBOZXh0IGVsZW1lbnQgaW4gdGhlIHNlcXVlbmNlLlxuICAgICAqL1xuICAgIEFub255bW91c09ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB0aGlzLl9vbk5leHQodmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyB0aGUgb25FcnJvciBhY3Rpb24uXG4gICAgICogQHBhcmFtIHtBbnl9IGVycm9yIFRoZSBlcnJvciB0aGF0IGhhcyBvY2N1cnJlZC5cbiAgICAgKi9cbiAgICBBbm9ueW1vdXNPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX29uRXJyb3IoZXJyb3IpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQ2FsbHMgdGhlIG9uQ29tcGxldGVkIGFjdGlvbi5cbiAgICAgKi9cbiAgICBBbm9ueW1vdXNPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fb25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFub255bW91c09ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICB2YXIgb2JzZXJ2YWJsZVByb3RvO1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgcHVzaC1zdHlsZSBjb2xsZWN0aW9uLlxuICAgKi9cbiAgdmFyIE9ic2VydmFibGUgPSBSeC5PYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIG1ha2VTdWJzY3JpYmUoc2VsZiwgc3Vic2NyaWJlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdmFyIG9sZE9uRXJyb3IgPSBvLm9uRXJyb3I7XG4gICAgICAgIG8ub25FcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgbWFrZVN0YWNrVHJhY2VMb25nKGUsIHNlbGYpO1xuICAgICAgICAgIG9sZE9uRXJyb3IuY2FsbChvLCBlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlLmNhbGwoc2VsZiwgbyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoKSB7XG4gICAgICBpZiAoUnguY29uZmlnLmxvbmdTdGFja1N1cHBvcnQgJiYgaGFzU3RhY2tzKSB7XG4gICAgICAgIHZhciBvbGRTdWJzY3JpYmUgPSB0aGlzLl9zdWJzY3JpYmU7XG4gICAgICAgIHZhciBlID0gdHJ5Q2F0Y2godGhyb3dlcikobmV3IEVycm9yKCkpLmU7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBlLnN0YWNrLnN1YnN0cmluZyhlLnN0YWNrLmluZGV4T2YoJ1xcbicpICsgMSk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZSA9IG1ha2VTdWJzY3JpYmUodGhpcywgb2xkU3Vic2NyaWJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvYnNlcnZhYmxlUHJvdG8gPSBPYnNlcnZhYmxlLnByb3RvdHlwZTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gT2JzZXJ2YWJsZVxuICAgICogQHBhcmFtIHtBbnl9IEFuIG9iamVjdCB0byBkZXRlcm1pbmUgd2hldGhlciBpdCBpcyBhbiBPYnNlcnZhYmxlXG4gICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBhbiBPYnNlcnZhYmxlLCBlbHNlIGZhbHNlLlxuICAgICovXG4gICAgT2JzZXJ2YWJsZS5pc09ic2VydmFibGUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIG8gJiYgaXNGdW5jdGlvbihvLnN1YnNjcmliZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBTdWJzY3JpYmVzIGFuIG8gdG8gdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAgICogIEBwYXJhbSB7TWl4ZWR9IFtvT3JPbk5leHRdIFRoZSBvYmplY3QgdGhhdCBpcyB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb3IgYW4gYWN0aW9uIHRvIGludm9rZSBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgICAqICBAcGFyYW0ge0Z1bmN0aW9ufSBbb25FcnJvcl0gQWN0aW9uIHRvIGludm9rZSB1cG9uIGV4Y2VwdGlvbmFsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgICAqICBAcGFyYW0ge0Z1bmN0aW9ufSBbb25Db21wbGV0ZWRdIEFjdGlvbiB0byBpbnZva2UgdXBvbiBncmFjZWZ1bCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICAgKiAgQHJldHVybnMge0RpcG9zYWJsZX0gQSBkaXNwb3NhYmxlIGhhbmRsaW5nIHRoZSBzdWJzY3JpcHRpb25zIGFuZCB1bnN1YnNjcmlwdGlvbnMuXG4gICAgICovXG4gICAgb2JzZXJ2YWJsZVByb3RvLnN1YnNjcmliZSA9IG9ic2VydmFibGVQcm90by5mb3JFYWNoID0gZnVuY3Rpb24gKG9Pck9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUodHlwZW9mIG9Pck9uTmV4dCA9PT0gJ29iamVjdCcgP1xuICAgICAgICBvT3JPbk5leHQgOlxuICAgICAgICBvYnNlcnZlckNyZWF0ZShvT3JPbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdG8gdGhlIG5leHQgdmFsdWUgaW4gdGhlIHNlcXVlbmNlIHdpdGggYW4gb3B0aW9uYWwgXCJ0aGlzXCIgYXJndW1lbnQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25OZXh0IFRoZSBmdW5jdGlvbiB0byBpbnZva2Ugb24gZWFjaCBlbGVtZW50IGluIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm5zIHtEaXNwb3NhYmxlfSBBIGRpc3Bvc2FibGUgaGFuZGxpbmcgdGhlIHN1YnNjcmlwdGlvbnMgYW5kIHVuc3Vic2NyaXB0aW9ucy5cbiAgICAgKi9cbiAgICBvYnNlcnZhYmxlUHJvdG8uc3Vic2NyaWJlT25OZXh0ID0gZnVuY3Rpb24gKG9uTmV4dCwgdGhpc0FyZykge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShvYnNlcnZlckNyZWF0ZSh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbih4KSB7IG9uTmV4dC5jYWxsKHRoaXNBcmcsIHgpOyB9IDogb25OZXh0KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdG8gYW4gZXhjZXB0aW9uYWwgY29uZGl0aW9uIGluIHRoZSBzZXF1ZW5jZSB3aXRoIGFuIG9wdGlvbmFsIFwidGhpc1wiIGFyZ3VtZW50LlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uRXJyb3IgVGhlIGZ1bmN0aW9uIHRvIGludm9rZSB1cG9uIGV4Y2VwdGlvbmFsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm5zIHtEaXNwb3NhYmxlfSBBIGRpc3Bvc2FibGUgaGFuZGxpbmcgdGhlIHN1YnNjcmlwdGlvbnMgYW5kIHVuc3Vic2NyaXB0aW9ucy5cbiAgICAgKi9cbiAgICBvYnNlcnZhYmxlUHJvdG8uc3Vic2NyaWJlT25FcnJvciA9IGZ1bmN0aW9uIChvbkVycm9yLCB0aGlzQXJnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKG9ic2VydmVyQ3JlYXRlKG51bGwsIHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uKGUpIHsgb25FcnJvci5jYWxsKHRoaXNBcmcsIGUpOyB9IDogb25FcnJvcikpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRvIHRoZSBuZXh0IHZhbHVlIGluIHRoZSBzZXF1ZW5jZSB3aXRoIGFuIG9wdGlvbmFsIFwidGhpc1wiIGFyZ3VtZW50LlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVkIFRoZSBmdW5jdGlvbiB0byBpbnZva2UgdXBvbiBncmFjZWZ1bCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJucyB7RGlzcG9zYWJsZX0gQSBkaXNwb3NhYmxlIGhhbmRsaW5nIHRoZSBzdWJzY3JpcHRpb25zIGFuZCB1bnN1YnNjcmlwdGlvbnMuXG4gICAgICovXG4gICAgb2JzZXJ2YWJsZVByb3RvLnN1YnNjcmliZU9uQ29tcGxldGVkID0gZnVuY3Rpb24gKG9uQ29tcGxldGVkLCB0aGlzQXJnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKG9ic2VydmVyQ3JlYXRlKG51bGwsIG51bGwsIHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uKCkgeyBvbkNvbXBsZXRlZC5jYWxsKHRoaXNBcmcpOyB9IDogb25Db21wbGV0ZWQpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGU7XG4gIH0pKCk7XG5cbiAgdmFyIFNjaGVkdWxlZE9ic2VydmVyID0gUnguaW50ZXJuYWxzLlNjaGVkdWxlZE9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTY2hlZHVsZWRPYnNlcnZlciwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIFNjaGVkdWxlZE9ic2VydmVyKHNjaGVkdWxlciwgb2JzZXJ2ZXIpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICB0aGlzLmlzQWNxdWlyZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzRmF1bHRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgdGhpcy5kaXNwb3NhYmxlID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICB9XG5cbiAgICBTY2hlZHVsZWRPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHsgc2VsZi5vYnNlcnZlci5vbk5leHQodmFsdWUpOyB9KTtcbiAgICB9O1xuXG4gICAgU2NoZWR1bGVkT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMucXVldWUucHVzaChmdW5jdGlvbiAoKSB7IHNlbGYub2JzZXJ2ZXIub25FcnJvcihlKTsgfSk7XG4gICAgfTtcblxuICAgIFNjaGVkdWxlZE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goZnVuY3Rpb24gKCkgeyBzZWxmLm9ic2VydmVyLm9uQ29tcGxldGVkKCk7IH0pO1xuICAgIH07XG5cbiAgICBTY2hlZHVsZWRPYnNlcnZlci5wcm90b3R5cGUuZW5zdXJlQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlzT3duZXIgPSBmYWxzZTtcbiAgICAgIGlmICghdGhpcy5oYXNGYXVsdGVkICYmIHRoaXMucXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICBpc093bmVyID0gIXRoaXMuaXNBY3F1aXJlZDtcbiAgICAgICAgdGhpcy5pc0FjcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgIHRoaXMuZGlzcG9zYWJsZS5zZXREaXNwb3NhYmxlKHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKHRoaXMsIGZ1bmN0aW9uIChwYXJlbnQsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgd29yaztcbiAgICAgICAgICBpZiAocGFyZW50LnF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHdvcmsgPSBwYXJlbnQucXVldWUuc2hpZnQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmlzQWNxdWlyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHdvcmspKCk7XG4gICAgICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgIHBhcmVudC5xdWV1ZSA9IFtdO1xuICAgICAgICAgICAgcGFyZW50Lmhhc0ZhdWx0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRocm93ZXIocmVzLmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmKHBhcmVudCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgU2NoZWR1bGVkT2JzZXJ2ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfX3N1cGVyX18ucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuZGlzcG9zYWJsZS5kaXNwb3NlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTY2hlZHVsZWRPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgdmFyIE9ic2VydmFibGVCYXNlID0gUnguT2JzZXJ2YWJsZUJhc2UgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE9ic2VydmFibGVCYXNlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gZml4U3Vic2NyaWJlcihzdWJzY3JpYmVyKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaWJlciAmJiBpc0Z1bmN0aW9uKHN1YnNjcmliZXIuZGlzcG9zZSkgPyBzdWJzY3JpYmVyIDpcbiAgICAgICAgaXNGdW5jdGlvbihzdWJzY3JpYmVyKSA/IGRpc3Bvc2FibGVDcmVhdGUoc3Vic2NyaWJlcikgOiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGlzcG9zYWJsZShzLCBzdGF0ZSkge1xuICAgICAgdmFyIGFkbyA9IHN0YXRlWzBdLCBzZWxmID0gc3RhdGVbMV07XG4gICAgICB2YXIgc3ViID0gdHJ5Q2F0Y2goc2VsZi5zdWJzY3JpYmVDb3JlKS5jYWxsKHNlbGYsIGFkbyk7XG4gICAgICBpZiAoc3ViID09PSBlcnJvck9iaiAmJiAhYWRvLmZhaWwoZXJyb3JPYmouZSkpIHsgdGhyb3dlcihlcnJvck9iai5lKTsgfVxuICAgICAgYWRvLnNldERpc3Bvc2FibGUoZml4U3Vic2NyaWJlcihzdWIpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlQmFzZSgpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIE9ic2VydmFibGVCYXNlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBhZG8gPSBuZXcgQXV0b0RldGFjaE9ic2VydmVyKG8pLCBzdGF0ZSA9IFthZG8sIHRoaXNdO1xuXG4gICAgICBpZiAoY3VycmVudFRocmVhZFNjaGVkdWxlci5zY2hlZHVsZVJlcXVpcmVkKCkpIHtcbiAgICAgICAgY3VycmVudFRocmVhZFNjaGVkdWxlci5zY2hlZHVsZShzdGF0ZSwgc2V0RGlzcG9zYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXNwb3NhYmxlKG51bGwsIHN0YXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhZG87XG4gICAgfTtcblxuICAgIE9ic2VydmFibGVCYXNlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gbm90SW1wbGVtZW50ZWQ7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZUJhc2U7XG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG52YXIgRmxhdE1hcE9ic2VydmFibGUgPSBSeC5GbGF0TWFwT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcblxuICAgIGluaGVyaXRzKEZsYXRNYXBPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gRmxhdE1hcE9ic2VydmFibGUoc291cmNlLCBzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgICAgIHRoaXMucmVzdWx0U2VsZWN0b3IgPSBpc0Z1bmN0aW9uKHJlc3VsdFNlbGVjdG9yKSA/IHJlc3VsdFNlbGVjdG9yIDogbnVsbDtcbiAgICAgIHRoaXMuc2VsZWN0b3IgPSBiaW5kQ2FsbGJhY2soaXNGdW5jdGlvbihzZWxlY3RvcikgPyBzZWxlY3RvciA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZWN0b3I7IH0sIHRoaXNBcmcsIDMpO1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBGbGF0TWFwT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobywgdGhpcy5zZWxlY3RvciwgdGhpcy5yZXN1bHRTZWxlY3RvciwgdGhpcykpO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhJbm5lck9ic2VydmVyLCBBYnN0cmFjdE9ic2VydmVyKTtcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG9ic2VydmVyLCBzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHNvdXJjZSkge1xuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgIHRoaXMucmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3RvcjtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5vID0gb2JzZXJ2ZXI7XG4gICAgICBBYnN0cmFjdE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuX3dyYXBSZXN1bHQgPSBmdW5jdGlvbihyZXN1bHQsIHgsIGkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdFNlbGVjdG9yID9cbiAgICAgICAgcmVzdWx0Lm1hcChmdW5jdGlvbih5LCBpMikgeyByZXR1cm4gdGhpcy5yZXN1bHRTZWxlY3Rvcih4LCB5LCBpLCBpMik7IH0sIHRoaXMpIDpcbiAgICAgICAgcmVzdWx0O1xuICAgIH07XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgdmFyIGkgPSB0aGlzLmkrKztcbiAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLnNlbGVjdG9yKSh4LCBpLCB0aGlzLnNvdXJjZSk7XG4gICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5vLm9uRXJyb3IocmVzdWx0LmUpOyB9XG5cbiAgICAgIGlzUHJvbWlzZShyZXN1bHQpICYmIChyZXN1bHQgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UocmVzdWx0KSk7XG4gICAgICAoaXNBcnJheUxpa2UocmVzdWx0KSB8fCBpc0l0ZXJhYmxlKHJlc3VsdCkpICYmIChyZXN1bHQgPSBPYnNlcnZhYmxlLmZyb20ocmVzdWx0KSk7XG4gICAgICB0aGlzLm8ub25OZXh0KHRoaXMuX3dyYXBSZXN1bHQocmVzdWx0LCB4LCBpKSk7XG4gICAgfTtcblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24oZSkgeyB0aGlzLm8ub25FcnJvcihlKTsgfTtcblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24oKSB7IHRoaXMuby5vbkNvbXBsZXRlZCgpOyB9O1xuXG4gICAgcmV0dXJuIEZsYXRNYXBPYnNlcnZhYmxlO1xuXG59KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIEVudW1lcmFibGUgPSBSeC5pbnRlcm5hbHMuRW51bWVyYWJsZSA9IGZ1bmN0aW9uICgpIHsgfTtcblxuICBmdW5jdGlvbiBJc0Rpc3Bvc2VkRGlzcG9zYWJsZShzdGF0ZSkge1xuICAgIHRoaXMuX3MgPSBzdGF0ZTtcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfVxuXG4gIElzRGlzcG9zZWREaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIENvbmNhdEVudW1lcmFibGVPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENvbmNhdEVudW1lcmFibGVPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENvbmNhdEVudW1lcmFibGVPYnNlcnZhYmxlKHNvdXJjZXMpIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IHNvdXJjZXM7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBDb25jYXRFbnVtZXJhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgc3RhdGUgPSB7IGlzRGlzcG9zZWQ6IGZhbHNlIH0sIHN1YnNjcmlwdGlvbiA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgICB2YXIgY2FuY2VsYWJsZSA9IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUodGhpcy5zb3VyY2VzWyRpdGVyYXRvciRdKCksIGZ1bmN0aW9uIChlLCBzZWxmKSB7XG4gICAgICAgIGlmIChzdGF0ZS5pc0Rpc3Bvc2VkKSB7IHJldHVybjsgfVxuICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSB0cnlDYXRjaChlLm5leHQpLmNhbGwoZSk7XG4gICAgICAgIGlmIChjdXJyZW50SXRlbSA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihjdXJyZW50SXRlbS5lKTsgfVxuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHByb21pc2VcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRJdGVtLnZhbHVlO1xuICAgICAgICBpc1Byb21pc2UoY3VycmVudFZhbHVlKSAmJiAoY3VycmVudFZhbHVlID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKGN1cnJlbnRWYWx1ZSkpO1xuXG4gICAgICAgIHZhciBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKGQpO1xuICAgICAgICBkLnNldERpc3Bvc2FibGUoY3VycmVudFZhbHVlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvLCBzZWxmLCBlKSkpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXcgTkFyeURpc3Bvc2FibGUoW3N1YnNjcmlwdGlvbiwgY2FuY2VsYWJsZSwgbmV3IElzRGlzcG9zZWREaXNwb3NhYmxlKHN0YXRlKV0pO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhJbm5lck9ic2VydmVyLCBBYnN0cmFjdE9ic2VydmVyKTtcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG8sIHMsIGUpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fcyA9IHM7XG4gICAgICB0aGlzLl9lID0gZTtcbiAgICAgIEFic3RyYWN0T2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25OZXh0ID0gZnVuY3Rpb24gKHgpIHsgdGhpcy5fby5vbk5leHQoeCk7IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlKSB7IHRoaXMuX28ub25FcnJvcihlKTsgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fcyh0aGlzLl9lKTsgfTtcblxuICAgIHJldHVybiBDb25jYXRFbnVtZXJhYmxlT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIEVudW1lcmFibGUucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IENvbmNhdEVudW1lcmFibGVPYnNlcnZhYmxlKHRoaXMpO1xuICB9O1xuXG4gIHZhciBDYXRjaEVycm9yT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDYXRjaEVycm9yT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDYXRjaEVycm9yT2JzZXJ2YWJsZShzb3VyY2VzKSB7XG4gICAgICB0aGlzLnNvdXJjZXMgPSBzb3VyY2VzO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgQ2F0Y2hFcnJvck9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGUgPSB0aGlzLnNvdXJjZXNbJGl0ZXJhdG9yJF0oKTtcblxuICAgICAgdmFyIHN0YXRlID0geyBpc0Rpc3Bvc2VkOiBmYWxzZSB9LCBzdWJzY3JpcHRpb24gPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgdmFyIGNhbmNlbGFibGUgPSBjdXJyZW50VGhyZWFkU2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKG51bGwsIGZ1bmN0aW9uIChsYXN0RXhjZXB0aW9uLCBzZWxmKSB7XG4gICAgICAgIGlmIChzdGF0ZS5pc0Rpc3Bvc2VkKSB7IHJldHVybjsgfVxuICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSB0cnlDYXRjaChlLm5leHQpLmNhbGwoZSk7XG4gICAgICAgIGlmIChjdXJyZW50SXRlbSA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihjdXJyZW50SXRlbS5lKTsgfVxuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIGxhc3RFeGNlcHRpb24gIT09IG51bGwgPyBvLm9uRXJyb3IobGFzdEV4Y2VwdGlvbikgOiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBwcm9taXNlXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50SXRlbS52YWx1ZTtcbiAgICAgICAgaXNQcm9taXNlKGN1cnJlbnRWYWx1ZSkgJiYgKGN1cnJlbnRWYWx1ZSA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShjdXJyZW50VmFsdWUpKTtcblxuICAgICAgICB2YXIgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShkKTtcbiAgICAgICAgZC5zZXREaXNwb3NhYmxlKGN1cnJlbnRWYWx1ZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobywgc2VsZikpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBOQXJ5RGlzcG9zYWJsZShbc3Vic2NyaXB0aW9uLCBjYW5jZWxhYmxlLCBuZXcgSXNEaXNwb3NlZERpc3Bvc2FibGUoc3RhdGUpXSk7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKElubmVyT2JzZXJ2ZXIsIEFic3RyYWN0T2JzZXJ2ZXIpO1xuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIobywgcmVjdXJzZSkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9yZWN1cnNlID0gcmVjdXJzZTtcbiAgICAgIEFic3RyYWN0T2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHsgdGhpcy5fby5vbk5leHQoeCk7IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkgeyB0aGlzLl9yZWN1cnNlKGUpOyB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fby5vbkNvbXBsZXRlZCgpOyB9O1xuXG4gICAgcmV0dXJuIENhdGNoRXJyb3JPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgRW51bWVyYWJsZS5wcm90b3R5cGUuY2F0Y2hFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IENhdGNoRXJyb3JPYnNlcnZhYmxlKHRoaXMpO1xuICB9O1xuXG4gIEVudW1lcmFibGUucHJvdG90eXBlLmNhdGNoRXJyb3JXaGVuID0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbkhhbmRsZXIpIHtcbiAgICB2YXIgc291cmNlcyA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgZXhjZXB0aW9ucyA9IG5ldyBTdWJqZWN0KCksXG4gICAgICAgIG5vdGlmaWVyID0gbmV3IFN1YmplY3QoKSxcbiAgICAgICAgaGFuZGxlZCA9IG5vdGlmaWNhdGlvbkhhbmRsZXIoZXhjZXB0aW9ucyksXG4gICAgICAgIG5vdGlmaWNhdGlvbkRpc3Bvc2FibGUgPSBoYW5kbGVkLnN1YnNjcmliZShub3RpZmllcik7XG5cbiAgICAgIHZhciBlID0gc291cmNlc1skaXRlcmF0b3IkXSgpO1xuXG4gICAgICB2YXIgc3RhdGUgPSB7IGlzRGlzcG9zZWQ6IGZhbHNlIH0sXG4gICAgICAgIGxhc3RFeGNlcHRpb24sXG4gICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgICB2YXIgY2FuY2VsYWJsZSA9IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUobnVsbCwgZnVuY3Rpb24gKF8sIHNlbGYpIHtcbiAgICAgICAgaWYgKHN0YXRlLmlzRGlzcG9zZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHZhciBjdXJyZW50SXRlbSA9IHRyeUNhdGNoKGUubmV4dCkuY2FsbChlKTtcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKGN1cnJlbnRJdGVtLmUpOyB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmRvbmUpIHtcbiAgICAgICAgICBpZiAobGFzdEV4Y2VwdGlvbikge1xuICAgICAgICAgICAgby5vbkVycm9yKGxhc3RFeGNlcHRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHByb21pc2VcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRJdGVtLnZhbHVlO1xuICAgICAgICBpc1Byb21pc2UoY3VycmVudFZhbHVlKSAmJiAoY3VycmVudFZhbHVlID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKGN1cnJlbnRWYWx1ZSkpO1xuXG4gICAgICAgIHZhciBvdXRlciA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICB2YXIgaW5uZXIgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUobmV3IEJpbmFyeURpc3Bvc2FibGUoaW5uZXIsIG91dGVyKSk7XG4gICAgICAgIG91dGVyLnNldERpc3Bvc2FibGUoY3VycmVudFZhbHVlLnN1YnNjcmliZShcbiAgICAgICAgICBmdW5jdGlvbih4KSB7IG8ub25OZXh0KHgpOyB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChleG4pIHtcbiAgICAgICAgICAgIGlubmVyLnNldERpc3Bvc2FibGUobm90aWZpZXIuc3Vic2NyaWJlKHNlbGYsIGZ1bmN0aW9uKGV4KSB7XG4gICAgICAgICAgICAgIG8ub25FcnJvcihleCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBleGNlcHRpb25zLm9uTmV4dChleG4pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24oKSB7IG8ub25Db21wbGV0ZWQoKTsgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXcgTkFyeURpc3Bvc2FibGUoW25vdGlmaWNhdGlvbkRpc3Bvc2FibGUsIHN1YnNjcmlwdGlvbiwgY2FuY2VsYWJsZSwgbmV3IElzRGlzcG9zZWREaXNwb3NhYmxlKHN0YXRlKV0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBSZXBlYXRFbnVtZXJhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhSZXBlYXRFbnVtZXJhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gUmVwZWF0RW51bWVyYWJsZSh2LCBjKSB7XG4gICAgICB0aGlzLnYgPSB2O1xuICAgICAgdGhpcy5jID0gYyA9PSBudWxsID8gLTEgOiBjO1xuICAgIH1cbiAgICBSZXBlYXRFbnVtZXJhYmxlLnByb3RvdHlwZVskaXRlcmF0b3IkXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgUmVwZWF0RW51bWVyYXRvcih0aGlzKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gUmVwZWF0RW51bWVyYXRvcihwKSB7XG4gICAgICB0aGlzLnYgPSBwLnY7XG4gICAgICB0aGlzLmwgPSBwLmM7XG4gICAgfVxuICAgIFJlcGVhdEVudW1lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5sID09PSAwKSB7IHJldHVybiBkb25lRW51bWVyYXRvcjsgfVxuICAgICAgaWYgKHRoaXMubCA+IDApIHsgdGhpcy5sLS07IH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGhpcy52IH07XG4gICAgfTtcblxuICAgIHJldHVybiBSZXBlYXRFbnVtZXJhYmxlO1xuICB9KEVudW1lcmFibGUpKTtcblxuICB2YXIgZW51bWVyYWJsZVJlcGVhdCA9IEVudW1lcmFibGUucmVwZWF0ID0gZnVuY3Rpb24gKHZhbHVlLCByZXBlYXRDb3VudCkge1xuICAgIHJldHVybiBuZXcgUmVwZWF0RW51bWVyYWJsZSh2YWx1ZSwgcmVwZWF0Q291bnQpO1xuICB9O1xuXG4gIHZhciBPZkVudW1lcmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoT2ZFbnVtZXJhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIE9mRW51bWVyYWJsZShzLCBmbiwgdGhpc0FyZykge1xuICAgICAgdGhpcy5zID0gcztcbiAgICAgIHRoaXMuZm4gPSBmbiA/IGJpbmRDYWxsYmFjayhmbiwgdGhpc0FyZywgMykgOiBudWxsO1xuICAgIH1cbiAgICBPZkVudW1lcmFibGUucHJvdG90eXBlWyRpdGVyYXRvciRdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBPZkVudW1lcmF0b3IodGhpcyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIE9mRW51bWVyYXRvcihwKSB7XG4gICAgICB0aGlzLmkgPSAtMTtcbiAgICAgIHRoaXMucyA9IHAucztcbiAgICAgIHRoaXMubCA9IHRoaXMucy5sZW5ndGg7XG4gICAgICB0aGlzLmZuID0gcC5mbjtcbiAgICB9XG4gICAgT2ZFbnVtZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICByZXR1cm4gKyt0aGlzLmkgPCB0aGlzLmwgP1xuICAgICAgIHsgZG9uZTogZmFsc2UsIHZhbHVlOiAhdGhpcy5mbiA/IHRoaXMuc1t0aGlzLmldIDogdGhpcy5mbih0aGlzLnNbdGhpcy5pXSwgdGhpcy5pLCB0aGlzLnMpIH0gOlxuICAgICAgIGRvbmVFbnVtZXJhdG9yO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2ZFbnVtZXJhYmxlO1xuICB9KEVudW1lcmFibGUpKTtcblxuICB2YXIgZW51bWVyYWJsZU9mID0gRW51bWVyYWJsZS5vZiA9IGZ1bmN0aW9uIChzb3VyY2UsIHNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIG5ldyBPZkVudW1lcmFibGUoc291cmNlLCBzZWxlY3RvciwgdGhpc0FyZyk7XG4gIH07XG5cbiAgdmFyIFRvQXJyYXlPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRvQXJyYXlPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRvQXJyYXlPYnNlcnZhYmxlKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUb0FycmF5T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobykpO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhJbm5lck9ic2VydmVyLCBBYnN0cmFjdE9ic2VydmVyKTtcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG8pIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLmEgPSBbXTtcbiAgICAgIEFic3RyYWN0T2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7IHRoaXMuYS5wdXNoKHgpOyB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHsgdGhpcy5vLm9uRXJyb3IoZSk7ICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5vLm9uTmV4dCh0aGlzLmEpOyB0aGlzLm8ub25Db21wbGV0ZWQoKTsgfTtcblxuICAgIHJldHVybiBUb0FycmF5T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAqIENyZWF0ZXMgYW4gYXJyYXkgZnJvbSBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgYSBzaW5nbGUgZWxlbWVudCB3aXRoIGEgbGlzdCBjb250YWluaW5nIGFsbCB0aGUgZWxlbWVudHMgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBUb0FycmF5T2JzZXJ2YWJsZSh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBmcm9tIGEgc3BlY2lmaWVkIHN1YnNjcmliZSBtZXRob2QgaW1wbGVtZW50YXRpb24uXG4gICAqIEBleGFtcGxlXG4gICAqICB2YXIgcmVzID0gUnguT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IH0gKTtcbiAgICogIHZhciByZXMgPSBSeC5PYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIFJ4LkRpc3Bvc2FibGUuZW1wdHk7IH0gKTtcbiAgICogIHZhciByZXMgPSBSeC5PYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgfSApO1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJzY3JpYmUgSW1wbGVtZW50YXRpb24gb2YgdGhlIHJlc3VsdGluZyBvYnNlcnZhYmxlIHNlcXVlbmNlJ3Mgc3Vic2NyaWJlIG1ldGhvZCwgcmV0dXJuaW5nIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHdyYXBwZWQgaW4gYSBEaXNwb3NhYmxlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2l0aCB0aGUgc3BlY2lmaWVkIGltcGxlbWVudGF0aW9uIGZvciB0aGUgU3Vic2NyaWJlIG1ldGhvZC5cbiAgICovXG4gIE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHN1YnNjcmliZSwgcGFyZW50KSB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKHN1YnNjcmliZSwgcGFyZW50KTtcbiAgfTtcblxuICB2YXIgRGVmZXIgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRGVmZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRGVmZXIoZmFjdG9yeSkge1xuICAgICAgdGhpcy5fZiA9IGZhY3Rvcnk7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBEZWZlci5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5fZikoKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7IHJldHVybiBvYnNlcnZhYmxlVGhyb3cocmVzdWx0LmUpLnN1YnNjcmliZShvKTt9XG4gICAgICBpc1Byb21pc2UocmVzdWx0KSAmJiAocmVzdWx0ID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHJlc3VsdCkpO1xuICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzY3JpYmUobyk7XG4gICAgfTtcblxuICAgIHJldHVybiBEZWZlcjtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgaW52b2tlcyB0aGUgc3BlY2lmaWVkIGZhY3RvcnkgZnVuY3Rpb24gd2hlbmV2ZXIgYSBuZXcgb2JzZXJ2ZXIgc3Vic2NyaWJlcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogIHZhciByZXMgPSBSeC5PYnNlcnZhYmxlLmRlZmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJ4Lk9ic2VydmFibGUuZnJvbUFycmF5KFsxLDIsM10pOyB9KTtcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb2JzZXJ2YWJsZUZhY3RvcnkgT2JzZXJ2YWJsZSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGludm9rZSBmb3IgZWFjaCBvYnNlcnZlciB0aGF0IHN1YnNjcmliZXMgdG8gdGhlIHJlc3VsdGluZyBzZXF1ZW5jZSBvciBQcm9taXNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aG9zZSBvYnNlcnZlcnMgdHJpZ2dlciBhbiBpbnZvY2F0aW9uIG9mIHRoZSBnaXZlbiBvYnNlcnZhYmxlIGZhY3RvcnkgZnVuY3Rpb24uXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZURlZmVyID0gT2JzZXJ2YWJsZS5kZWZlciA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlRmFjdG9yeSkge1xuICAgIHJldHVybiBuZXcgRGVmZXIob2JzZXJ2YWJsZUZhY3RvcnkpO1xuICB9O1xuXG4gIHZhciBFbXB0eU9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRW1wdHlPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEVtcHR5T2JzZXJ2YWJsZShzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRW1wdHlPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgc2luayA9IG5ldyBFbXB0eVNpbmsob2JzZXJ2ZXIsIHRoaXMuc2NoZWR1bGVyKTtcbiAgICAgIHJldHVybiBzaW5rLnJ1bigpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBFbXB0eVNpbmsob2JzZXJ2ZXIsIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NoZWR1bGVJdGVtKHMsIHN0YXRlKSB7XG4gICAgICBzdGF0ZS5vbkNvbXBsZXRlZCgpO1xuICAgICAgcmV0dXJuIGRpc3Bvc2FibGVFbXB0eTtcbiAgICB9XG5cbiAgICBFbXB0eVNpbmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMub2JzZXJ2ZXI7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZXIgPT09IGltbWVkaWF0ZVNjaGVkdWxlciA/XG4gICAgICAgIHNjaGVkdWxlSXRlbShudWxsLCBzdGF0ZSkgOlxuICAgICAgICB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShzdGF0ZSwgc2NoZWR1bGVJdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEVtcHR5T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBFTVBUWV9PQlNFUlZBQkxFID0gbmV3IEVtcHR5T2JzZXJ2YWJsZShpbW1lZGlhdGVTY2hlZHVsZXIpO1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhbiBlbXB0eSBvYnNlcnZhYmxlIHNlcXVlbmNlLCB1c2luZyB0aGUgc3BlY2lmaWVkIHNjaGVkdWxlciB0byBzZW5kIG91dCB0aGUgc2luZ2xlIE9uQ29tcGxldGVkIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICB2YXIgcmVzID0gUnguT2JzZXJ2YWJsZS5lbXB0eSgpO1xuICAgKiAgdmFyIHJlcyA9IFJ4Lk9ic2VydmFibGUuZW1wdHkoUnguU2NoZWR1bGVyLnRpbWVvdXQpO1xuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gU2NoZWR1bGVyIHRvIHNlbmQgdGhlIHRlcm1pbmF0aW9uIGNhbGwgb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHdpdGggbm8gZWxlbWVudHMuXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZUVtcHR5ID0gT2JzZXJ2YWJsZS5lbXB0eSA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBpbW1lZGlhdGVTY2hlZHVsZXIpO1xuICAgIHJldHVybiBzY2hlZHVsZXIgPT09IGltbWVkaWF0ZVNjaGVkdWxlciA/IEVNUFRZX09CU0VSVkFCTEUgOiBuZXcgRW1wdHlPYnNlcnZhYmxlKHNjaGVkdWxlcik7XG4gIH07XG5cbiAgdmFyIEZyb21PYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEZyb21PYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEZyb21PYnNlcnZhYmxlKGl0ZXJhYmxlLCBtYXBwZXIsIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuICAgICAgdGhpcy5tYXBwZXIgPSBtYXBwZXI7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIEZyb21PYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBzaW5rID0gbmV3IEZyb21TaW5rKG8sIHRoaXMpO1xuICAgICAgcmV0dXJuIHNpbmsucnVuKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBGcm9tT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBGcm9tU2luayA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRnJvbVNpbmsobywgcGFyZW50KSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgRnJvbVNpbmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsaXN0ID0gT2JqZWN0KHRoaXMucGFyZW50Lml0ZXJhYmxlKSxcbiAgICAgICAgICBpdCA9IGdldEl0ZXJhYmxlKGxpc3QpLFxuICAgICAgICAgIG8gPSB0aGlzLm8sXG4gICAgICAgICAgbWFwcGVyID0gdGhpcy5wYXJlbnQubWFwcGVyO1xuXG4gICAgICBmdW5jdGlvbiBsb29wUmVjdXJzaXZlKGksIHJlY3Vyc2UpIHtcbiAgICAgICAgdmFyIG5leHQgPSB0cnlDYXRjaChpdC5uZXh0KS5jYWxsKGl0KTtcbiAgICAgICAgaWYgKG5leHQgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IobmV4dC5lKTsgfVxuICAgICAgICBpZiAobmV4dC5kb25lKSB7IHJldHVybiBvLm9uQ29tcGxldGVkKCk7IH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV4dC52YWx1ZTtcblxuICAgICAgICBpZiAoaXNGdW5jdGlvbihtYXBwZXIpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdHJ5Q2F0Y2gobWFwcGVyKShyZXN1bHQsIGkpO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IocmVzdWx0LmUpOyB9XG4gICAgICAgIH1cblxuICAgICAgICBvLm9uTmV4dChyZXN1bHQpO1xuICAgICAgICByZWN1cnNlKGkgKyAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucGFyZW50LnNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZSgwLCBsb29wUmVjdXJzaXZlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEZyb21TaW5rO1xuICB9KCkpO1xuXG4gIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbiAgZnVuY3Rpb24gU3RyaW5nSXRlcmFibGUocykge1xuICAgIHRoaXMuX3MgPSBzO1xuICB9XG5cbiAgU3RyaW5nSXRlcmFibGUucHJvdG90eXBlWyRpdGVyYXRvciRdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgU3RyaW5nSXRlcmF0b3IodGhpcy5fcyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gU3RyaW5nSXRlcmF0b3Iocykge1xuICAgIHRoaXMuX3MgPSBzO1xuICAgIHRoaXMuX2wgPSBzLmxlbmd0aDtcbiAgICB0aGlzLl9pID0gMDtcbiAgfVxuXG4gIFN0cmluZ0l0ZXJhdG9yLnByb3RvdHlwZVskaXRlcmF0b3IkXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBTdHJpbmdJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faSA8IHRoaXMuX2wgPyB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGhpcy5fcy5jaGFyQXQodGhpcy5faSsrKSB9IDogZG9uZUVudW1lcmF0b3I7XG4gIH07XG5cbiAgZnVuY3Rpb24gQXJyYXlJdGVyYWJsZShhKSB7XG4gICAgdGhpcy5fYSA9IGE7XG4gIH1cblxuICBBcnJheUl0ZXJhYmxlLnByb3RvdHlwZVskaXRlcmF0b3IkXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5SXRlcmF0b3IodGhpcy5fYSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gQXJyYXlJdGVyYXRvcihhKSB7XG4gICAgdGhpcy5fYSA9IGE7XG4gICAgdGhpcy5fbCA9IHRvTGVuZ3RoKGEpO1xuICAgIHRoaXMuX2kgPSAwO1xuICB9XG5cbiAgQXJyYXlJdGVyYXRvci5wcm90b3R5cGVbJGl0ZXJhdG9yJF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQXJyYXlJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faSA8IHRoaXMuX2wgPyB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGhpcy5fYVt0aGlzLl9pKytdIH0gOiBkb25lRW51bWVyYXRvcjtcbiAgfTtcblxuICBmdW5jdGlvbiBudW1iZXJJc0Zpbml0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHJvb3QuaXNGaW5pdGUodmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOYW4obikge1xuICAgIHJldHVybiBuICE9PSBuO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXRlcmFibGUobykge1xuICAgIHZhciBpID0gb1skaXRlcmF0b3IkXSwgaXQ7XG4gICAgaWYgKCFpICYmIHR5cGVvZiBvID09PSAnc3RyaW5nJykge1xuICAgICAgaXQgPSBuZXcgU3RyaW5nSXRlcmFibGUobyk7XG4gICAgICByZXR1cm4gaXRbJGl0ZXJhdG9yJF0oKTtcbiAgICB9XG4gICAgaWYgKCFpICYmIG8ubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGl0ID0gbmV3IEFycmF5SXRlcmFibGUobyk7XG4gICAgICByZXR1cm4gaXRbJGl0ZXJhdG9yJF0oKTtcbiAgICB9XG4gICAgaWYgKCFpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdCBpcyBub3QgaXRlcmFibGUnKTsgfVxuICAgIHJldHVybiBvWyRpdGVyYXRvciRdKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzaWduKHZhbHVlKSB7XG4gICAgdmFyIG51bWJlciA9ICt2YWx1ZTtcbiAgICBpZiAobnVtYmVyID09PSAwKSB7IHJldHVybiBudW1iZXI7IH1cbiAgICBpZiAoaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XG4gICAgcmV0dXJuIG51bWJlciA8IDAgPyAtMSA6IDE7XG4gIH1cblxuICBmdW5jdGlvbiB0b0xlbmd0aChvKSB7XG4gICAgdmFyIGxlbiA9ICtvLmxlbmd0aDtcbiAgICBpZiAoaXNOYU4obGVuKSkgeyByZXR1cm4gMDsgfVxuICAgIGlmIChsZW4gPT09IDAgfHwgIW51bWJlcklzRmluaXRlKGxlbikpIHsgcmV0dXJuIGxlbjsgfVxuICAgIGxlbiA9IHNpZ24obGVuKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobGVuKSk7XG4gICAgaWYgKGxlbiA8PSAwKSB7IHJldHVybiAwOyB9XG4gICAgaWYgKGxlbiA+IG1heFNhZmVJbnRlZ2VyKSB7IHJldHVybiBtYXhTYWZlSW50ZWdlcjsgfVxuICAgIHJldHVybiBsZW47XG4gIH1cblxuICAvKipcbiAgKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgc2VxdWVuY2UgZnJvbSBhbiBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdC5cbiAgKiBAcGFyYW0ge0FueX0gYXJyYXlMaWtlIEFuIGFycmF5LWxpa2Ugb3IgaXRlcmFibGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gYW4gT2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbbWFwRm5dIE1hcCBmdW5jdGlvbiB0byBjYWxsIG9uIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGFycmF5LlxuICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gVGhlIGNvbnRleHQgdG8gdXNlIGNhbGxpbmcgdGhlIG1hcEZuIGlmIHByb3ZpZGVkLlxuICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBPcHRpb25hbCBzY2hlZHVsZXIgdG8gdXNlIGZvciBzY2hlZHVsaW5nLiAgSWYgbm90IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBTY2hlZHVsZXIuY3VycmVudFRocmVhZC5cbiAgKi9cbiAgdmFyIG9ic2VydmFibGVGcm9tID0gT2JzZXJ2YWJsZS5mcm9tID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBtYXBGbiwgdGhpc0FyZywgc2NoZWR1bGVyKSB7XG4gICAgaWYgKGl0ZXJhYmxlID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaXRlcmFibGUgY2Fubm90IGJlIG51bGwuJylcbiAgICB9XG4gICAgaWYgKG1hcEZuICYmICFpc0Z1bmN0aW9uKG1hcEZuKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXBGbiB3aGVuIHByb3ZpZGVkIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICBpZiAobWFwRm4pIHtcbiAgICAgIHZhciBtYXBwZXIgPSBiaW5kQ2FsbGJhY2sobWFwRm4sIHRoaXNBcmcsIDIpO1xuICAgIH1cbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBjdXJyZW50VGhyZWFkU2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IEZyb21PYnNlcnZhYmxlKGl0ZXJhYmxlLCBtYXBwZXIsIHNjaGVkdWxlcik7XG4gIH1cblxuICB2YXIgRnJvbUFycmF5T2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhGcm9tQXJyYXlPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEZyb21BcnJheU9ic2VydmFibGUoYXJncywgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBGcm9tQXJyYXlPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgc2luayA9IG5ldyBGcm9tQXJyYXlTaW5rKG9ic2VydmVyLCB0aGlzKTtcbiAgICAgIHJldHVybiBzaW5rLnJ1bigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRnJvbUFycmF5T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIGZ1bmN0aW9uIEZyb21BcnJheVNpbmsob2JzZXJ2ZXIsIHBhcmVudCkge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3BSZWN1cnNpdmUoYXJncywgb2JzZXJ2ZXIpIHtcbiAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGxvb3AgKGksIHJlY3Vyc2UpIHtcbiAgICAgIGlmIChpIDwgbGVuKSB7XG4gICAgICAgIG9ic2VydmVyLm9uTmV4dChhcmdzW2ldKTtcbiAgICAgICAgcmVjdXJzZShpICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBGcm9tQXJyYXlTaW5rLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZSgwLCBsb29wUmVjdXJzaXZlKHRoaXMucGFyZW50LmFyZ3MsIHRoaXMub2JzZXJ2ZXIpKTtcbiAgfTtcblxuICAvKipcbiAgKiAgQ29udmVydHMgYW4gYXJyYXkgdG8gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSwgdXNpbmcgYW4gb3B0aW9uYWwgc2NoZWR1bGVyIHRvIGVudW1lcmF0ZSB0aGUgYXJyYXkuXG4gICogQGRlcHJlY2F0ZWQgdXNlIE9ic2VydmFibGUuZnJvbSBvciBPYnNlcnZhYmxlLm9mXG4gICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIFNjaGVkdWxlciB0byBydW4gdGhlIGVudW1lcmF0aW9uIG9mIHRoZSBpbnB1dCBzZXF1ZW5jZSBvbi5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hvc2UgZWxlbWVudHMgYXJlIHB1bGxlZCBmcm9tIHRoZSBnaXZlbiBlbnVtZXJhYmxlIHNlcXVlbmNlLlxuICAqL1xuICB2YXIgb2JzZXJ2YWJsZUZyb21BcnJheSA9IE9ic2VydmFibGUuZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycmF5LCBzY2hlZHVsZXIpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBjdXJyZW50VGhyZWFkU2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IEZyb21BcnJheU9ic2VydmFibGUoYXJyYXksIHNjaGVkdWxlcilcbiAgfTtcblxuICB2YXIgTmV2ZXJPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE5ldmVyT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBOZXZlck9ic2VydmFibGUoKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBOZXZlck9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgfTtcblxuICAgIHJldHVybiBOZXZlck9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgTkVWRVJfT0JTRVJWQUJMRSA9IG5ldyBOZXZlck9ic2VydmFibGUoKTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIG5vbi10ZXJtaW5hdGluZyBvYnNlcnZhYmxlIHNlcXVlbmNlLCB3aGljaCBjYW4gYmUgdXNlZCB0byBkZW5vdGUgYW4gaW5maW5pdGUgZHVyYXRpb24gKGUuZy4gd2hlbiB1c2luZyByZWFjdGl2ZSBqb2lucykuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHdob3NlIG9ic2VydmVycyB3aWxsIG5ldmVyIGdldCBjYWxsZWQuXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZU5ldmVyID0gT2JzZXJ2YWJsZS5uZXZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTkVWRVJfT0JTRVJWQUJMRTtcbiAgfTtcblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlT2YgKHNjaGVkdWxlciwgYXJyYXkpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBjdXJyZW50VGhyZWFkU2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IEZyb21BcnJheU9ic2VydmFibGUoYXJyYXksIHNjaGVkdWxlcik7XG4gIH1cblxuICAvKipcbiAgKiAgVGhpcyBtZXRob2QgY3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlIGluc3RhbmNlIHdpdGggYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLCByZWdhcmRsZXNzIG9mIG51bWJlciBvciB0eXBlIG9mIHRoZSBhcmd1bWVudHMuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdob3NlIGVsZW1lbnRzIGFyZSBwdWxsZWQgZnJvbSB0aGUgZ2l2ZW4gYXJndW1lbnRzLlxuICAqL1xuICBPYnNlcnZhYmxlLm9mID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICByZXR1cm4gbmV3IEZyb21BcnJheU9ic2VydmFibGUoYXJncywgY3VycmVudFRocmVhZFNjaGVkdWxlcik7XG4gIH07XG5cbiAgLyoqXG4gICogIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSBpbnN0YW5jZSB3aXRoIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cywgcmVnYXJkbGVzcyBvZiBudW1iZXIgb3IgdHlwZSBvZiB0aGUgYXJndW1lbnRzLlxuICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBzY2hlZHVsZXIgQSBzY2hlZHVsZXIgdG8gdXNlIGZvciBzY2hlZHVsaW5nIHRoZSBhcmd1bWVudHMuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdob3NlIGVsZW1lbnRzIGFyZSBwdWxsZWQgZnJvbSB0aGUgZ2l2ZW4gYXJndW1lbnRzLlxuICAqL1xuICBPYnNlcnZhYmxlLm9mV2l0aFNjaGVkdWxlciA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICByZXR1cm4gbmV3IEZyb21BcnJheU9ic2VydmFibGUoYXJncywgc2NoZWR1bGVyKTtcbiAgfTtcblxuICB2YXIgUGFpcnNPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFBhaXJzT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBQYWlyc09ic2VydmFibGUob2JqLCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMub2JqID0gb2JqO1xuICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgUGFpcnNPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgc2luayA9IG5ldyBQYWlyc1Npbmsob2JzZXJ2ZXIsIHRoaXMpO1xuICAgICAgcmV0dXJuIHNpbmsucnVuKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBQYWlyc09ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICBmdW5jdGlvbiBQYWlyc1Npbmsob2JzZXJ2ZXIsIHBhcmVudCkge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIFBhaXJzU2luay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXIsIG9iaiA9IHRoaXMucGFyZW50Lm9iaiwga2V5cyA9IHRoaXMucGFyZW50LmtleXMsIGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGxvb3BSZWN1cnNpdmUoaSwgcmVjdXJzZSkge1xuICAgICAgaWYgKGkgPCBsZW4pIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIG9ic2VydmVyLm9uTmV4dChba2V5LCBvYmpba2V5XV0pO1xuICAgICAgICByZWN1cnNlKGkgKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZSgwLCBsb29wUmVjdXJzaXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBvYmplY3QgaW50byBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIG9mIFtrZXksIHZhbHVlXSBwYWlycy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBTY2hlZHVsZXIgdG8gcnVuIHRoZSBlbnVtZXJhdGlvbiBvZiB0aGUgaW5wdXQgc2VxdWVuY2Ugb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIG9mIFtrZXksIHZhbHVlXSBwYWlycyBmcm9tIHRoZSBvYmplY3QuXG4gICAqL1xuICBPYnNlcnZhYmxlLnBhaXJzID0gZnVuY3Rpb24gKG9iaiwgc2NoZWR1bGVyKSB7XG4gICAgc2NoZWR1bGVyIHx8IChzY2hlZHVsZXIgPSBjdXJyZW50VGhyZWFkU2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IFBhaXJzT2JzZXJ2YWJsZShvYmosIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgICB2YXIgUmFuZ2VPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFJhbmdlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBSYW5nZU9ic2VydmFibGUoc3RhcnQsIGNvdW50LCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgIHRoaXMucmFuZ2VDb3VudCA9IGNvdW50O1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBSYW5nZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBzaW5rID0gbmV3IFJhbmdlU2luayhvYnNlcnZlciwgdGhpcyk7XG4gICAgICByZXR1cm4gc2luay5ydW4oKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJhbmdlT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBSYW5nZVNpbmsgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJhbmdlU2luayhvYnNlcnZlciwgcGFyZW50KSB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb29wUmVjdXJzaXZlKHN0YXJ0LCBjb3VudCwgb2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBsb29wIChpLCByZWN1cnNlKSB7XG4gICAgICAgIGlmIChpIDwgY291bnQpIHtcbiAgICAgICAgICBvYnNlcnZlci5vbk5leHQoc3RhcnQgKyBpKTtcbiAgICAgICAgICByZWN1cnNlKGkgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIFJhbmdlU2luay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50LnNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZShcbiAgICAgICAgMCxcbiAgICAgICAgbG9vcFJlY3Vyc2l2ZSh0aGlzLnBhcmVudC5zdGFydCwgdGhpcy5wYXJlbnQucmFuZ2VDb3VudCwgdGhpcy5vYnNlcnZlcilcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBSYW5nZVNpbms7XG4gIH0oKSk7XG5cbiAgLyoqXG4gICogIEdlbmVyYXRlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIG9mIGludGVncmFsIG51bWJlcnMgd2l0aGluIGEgc3BlY2lmaWVkIHJhbmdlLCB1c2luZyB0aGUgc3BlY2lmaWVkIHNjaGVkdWxlciB0byBzZW5kIG91dCBvYnNlcnZlciBtZXNzYWdlcy5cbiAgKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgVGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBpbnRlZ2VyIGluIHRoZSBzZXF1ZW5jZS5cbiAgKiBAcGFyYW0ge051bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBzZXF1ZW50aWFsIGludGVnZXJzIHRvIGdlbmVyYXRlLlxuICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBTY2hlZHVsZXIgdG8gcnVuIHRoZSBnZW5lcmF0b3IgbG9vcCBvbi4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gU2NoZWR1bGVyLmN1cnJlbnRUaHJlYWQuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyBhIHJhbmdlIG9mIHNlcXVlbnRpYWwgaW50ZWdyYWwgbnVtYmVycy5cbiAgKi9cbiAgT2JzZXJ2YWJsZS5yYW5nZSA9IGZ1bmN0aW9uIChzdGFydCwgY291bnQsIHNjaGVkdWxlcikge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgUmFuZ2VPYnNlcnZhYmxlKHN0YXJ0LCBjb3VudCwgc2NoZWR1bGVyKTtcbiAgfTtcblxuICB2YXIgUmVwZWF0T2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhSZXBlYXRPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFJlcGVhdE9ic2VydmFibGUodmFsdWUsIHJlcGVhdENvdW50LCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMucmVwZWF0Q291bnQgPSByZXBlYXRDb3VudCA9PSBudWxsID8gLTEgOiByZXBlYXRDb3VudDtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgUmVwZWF0T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIHNpbmsgPSBuZXcgUmVwZWF0U2luayhvYnNlcnZlciwgdGhpcyk7XG4gICAgICByZXR1cm4gc2luay5ydW4oKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlcGVhdE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICBmdW5jdGlvbiBSZXBlYXRTaW5rKG9ic2VydmVyLCBwYXJlbnQpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cblxuICBSZXBlYXRTaW5rLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlciwgdmFsdWUgPSB0aGlzLnBhcmVudC52YWx1ZTtcbiAgICBmdW5jdGlvbiBsb29wUmVjdXJzaXZlKGksIHJlY3Vyc2UpIHtcbiAgICAgIGlmIChpID09PSAtMSB8fCBpID4gMCkge1xuICAgICAgICBvYnNlcnZlci5vbk5leHQodmFsdWUpO1xuICAgICAgICBpID4gMCAmJiBpLS07XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gMCkgeyByZXR1cm4gb2JzZXJ2ZXIub25Db21wbGV0ZWQoKTsgfVxuICAgICAgcmVjdXJzZShpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKHRoaXMucGFyZW50LnJlcGVhdENvdW50LCBsb29wUmVjdXJzaXZlKTtcbiAgfTtcblxuICAvKipcbiAgICogIEdlbmVyYXRlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgcmVwZWF0cyB0aGUgZ2l2ZW4gZWxlbWVudCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB0aW1lcywgdXNpbmcgdGhlIHNwZWNpZmllZCBzY2hlZHVsZXIgdG8gc2VuZCBvdXQgb2JzZXJ2ZXIgbWVzc2FnZXMuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIEVsZW1lbnQgdG8gcmVwZWF0LlxuICAgKiBAcGFyYW0ge051bWJlcn0gcmVwZWF0Q291bnQgW09wdGlvbmFdIE51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIGVsZW1lbnQuIElmIG5vdCBzcGVjaWZpZWQsIHJlcGVhdHMgaW5kZWZpbml0ZWx5LlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gc2NoZWR1bGVyIFNjaGVkdWxlciB0byBydW4gdGhlIHByb2R1Y2VyIGxvb3Agb24uIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFNjaGVkdWxlci5pbW1lZGlhdGUuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgcmVwZWF0cyB0aGUgZ2l2ZW4gZWxlbWVudCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB0aW1lcy5cbiAgICovXG4gIE9ic2VydmFibGUucmVwZWF0ID0gZnVuY3Rpb24gKHZhbHVlLCByZXBlYXRDb3VudCwgc2NoZWR1bGVyKSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gY3VycmVudFRocmVhZFNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBSZXBlYXRPYnNlcnZhYmxlKHZhbHVlLCByZXBlYXRDb3VudCwgc2NoZWR1bGVyKTtcbiAgfTtcblxuICB2YXIgSnVzdE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoSnVzdE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gSnVzdE9ic2VydmFibGUodmFsdWUsIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBKdXN0T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIHNpbmsgPSBuZXcgSnVzdFNpbmsob2JzZXJ2ZXIsIHRoaXMudmFsdWUsIHRoaXMuc2NoZWR1bGVyKTtcbiAgICAgIHJldHVybiBzaW5rLnJ1bigpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBKdXN0U2luayhvYnNlcnZlciwgdmFsdWUsIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NoZWR1bGVJdGVtKHMsIHN0YXRlKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVswXSwgb2JzZXJ2ZXIgPSBzdGF0ZVsxXTtcbiAgICAgIG9ic2VydmVyLm9uTmV4dCh2YWx1ZSk7XG4gICAgICBvYnNlcnZlci5vbkNvbXBsZXRlZCgpO1xuICAgICAgcmV0dXJuIGRpc3Bvc2FibGVFbXB0eTtcbiAgICB9XG5cbiAgICBKdXN0U2luay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gW3RoaXMudmFsdWUsIHRoaXMub2JzZXJ2ZXJdO1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVyID09PSBpbW1lZGlhdGVTY2hlZHVsZXIgP1xuICAgICAgICBzY2hlZHVsZUl0ZW0obnVsbCwgc3RhdGUpIDpcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoc3RhdGUsIHNjaGVkdWxlSXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBKdXN0T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgYSBzaW5nbGUgZWxlbWVudCwgdXNpbmcgdGhlIHNwZWNpZmllZCBzY2hlZHVsZXIgdG8gc2VuZCBvdXQgb2JzZXJ2ZXIgbWVzc2FnZXMuXG4gICAqICBUaGVyZSBpcyBhbiBhbGlhcyBjYWxsZWQgJ2p1c3QnIG9yIGJyb3dzZXJzIDxJRTkuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIFNpbmdsZSBlbGVtZW50IGluIHRoZSByZXN1bHRpbmcgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IHNjaGVkdWxlciBTY2hlZHVsZXIgdG8gc2VuZCB0aGUgc2luZ2xlIGVsZW1lbnQgb24uIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFNjaGVkdWxlci5pbW1lZGlhdGUuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlUmV0dXJuID0gT2JzZXJ2YWJsZVsncmV0dXJuJ10gPSBPYnNlcnZhYmxlLmp1c3QgPSBmdW5jdGlvbiAodmFsdWUsIHNjaGVkdWxlcikge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGltbWVkaWF0ZVNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBKdXN0T2JzZXJ2YWJsZSh2YWx1ZSwgc2NoZWR1bGVyKTtcbiAgfTtcblxuICB2YXIgVGhyb3dPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRocm93T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUaHJvd09ic2VydmFibGUoZXJyb3IsIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUaHJvd09ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIHNpbmsgPSBuZXcgVGhyb3dTaW5rKG8sIHRoaXMpO1xuICAgICAgcmV0dXJuIHNpbmsucnVuKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIFRocm93U2luayhvLCBwKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5wID0gcDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZUl0ZW0ocywgc3RhdGUpIHtcbiAgICAgIHZhciBlID0gc3RhdGVbMF0sIG8gPSBzdGF0ZVsxXTtcbiAgICAgIG8ub25FcnJvcihlKTtcbiAgICB9XG5cbiAgICBUaHJvd1NpbmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnAuc2NoZWR1bGVyLnNjaGVkdWxlKFt0aGlzLnAuZXJyb3IsIHRoaXMub10sIHNjaGVkdWxlSXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUaHJvd09ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgICogIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHRlcm1pbmF0ZXMgd2l0aCBhbiBleGNlcHRpb24sIHVzaW5nIHRoZSBzcGVjaWZpZWQgc2NoZWR1bGVyIHRvIHNlbmQgb3V0IHRoZSBzaW5nbGUgb25FcnJvciBtZXNzYWdlLlxuICAgKiAgVGhlcmUgaXMgYW4gYWxpYXMgdG8gdGhpcyBtZXRob2QgY2FsbGVkICd0aHJvd0Vycm9yJyBmb3IgYnJvd3NlcnMgPElFOS5cbiAgICogQHBhcmFtIHtNaXhlZH0gZXJyb3IgQW4gb2JqZWN0IHVzZWQgZm9yIHRoZSBzZXF1ZW5jZSdzIHRlcm1pbmF0aW9uLlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gc2NoZWR1bGVyIFNjaGVkdWxlciB0byBzZW5kIHRoZSBleGNlcHRpb25hbCB0ZXJtaW5hdGlvbiBjYWxsIG9uLiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBTY2hlZHVsZXIuaW1tZWRpYXRlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCB0ZXJtaW5hdGVzIGV4Y2VwdGlvbmFsbHkgd2l0aCB0aGUgc3BlY2lmaWVkIGV4Y2VwdGlvbiBvYmplY3QuXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZVRocm93ID0gT2JzZXJ2YWJsZVsndGhyb3cnXSA9IGZ1bmN0aW9uIChlcnJvciwgc2NoZWR1bGVyKSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gaW1tZWRpYXRlU2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IFRocm93T2JzZXJ2YWJsZShlcnJvciwgc2NoZWR1bGVyKTtcbiAgfTtcblxuICB2YXIgQ2F0Y2hPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDYXRjaE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ2F0Y2hPYnNlcnZhYmxlKHNvdXJjZSwgZm4pIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fZm4gPSBmbjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIENhdGNoT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgZDEgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKSwgc3Vic2NyaXB0aW9uID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKGQxKTtcbiAgICAgIGQxLnNldERpc3Bvc2FibGUodGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBDYXRjaE9ic2VydmVyKG8sIHN1YnNjcmlwdGlvbiwgdGhpcy5fZm4pKSk7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ2F0Y2hPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIENhdGNoT2JzZXJ2ZXIgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ2F0Y2hPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDYXRjaE9ic2VydmVyKG8sIHMsIGZuKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3MgPSBzO1xuICAgICAgdGhpcy5fZm4gPSBmbjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIENhdGNoT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkgeyB0aGlzLl9vLm9uTmV4dCh4KTsgfTtcbiAgICBDYXRjaE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9vLm9uQ29tcGxldGVkKCk7IH07XG4gICAgQ2F0Y2hPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMuX2ZuKShlKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLl9vLm9uRXJyb3IocmVzdWx0LmUpOyB9XG4gICAgICBpc1Byb21pc2UocmVzdWx0KSAmJiAocmVzdWx0ID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHJlc3VsdCkpO1xuXG4gICAgICB2YXIgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5fcy5zZXREaXNwb3NhYmxlKGQpO1xuICAgICAgZC5zZXREaXNwb3NhYmxlKHJlc3VsdC5zdWJzY3JpYmUodGhpcy5fbykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ2F0Y2hPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqIENvbnRpbnVlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgaXMgdGVybWluYXRlZCBieSBhbiBleGNlcHRpb24gd2l0aCB0aGUgbmV4dCBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0ge01peGVkfSBoYW5kbGVyT3JTZWNvbmQgRXhjZXB0aW9uIGhhbmRsZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgZ2l2ZW4gdGhlIGVycm9yIHRoYXQgb2NjdXJyZWQgaW4gdGhlIGZpcnN0IHNlcXVlbmNlLCBvciBhIHNlY29uZCBvYnNlcnZhYmxlIHNlcXVlbmNlIHVzZWQgdG8gcHJvZHVjZSByZXN1bHRzIHdoZW4gYW4gZXJyb3Igb2NjdXJyZWQgaW4gdGhlIGZpcnN0IHNlcXVlbmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSBmaXJzdCBzZXF1ZW5jZSdzIGVsZW1lbnRzLCBmb2xsb3dlZCBieSB0aGUgZWxlbWVudHMgb2YgdGhlIGhhbmRsZXIgc2VxdWVuY2UgaW4gY2FzZSBhbiBleGNlcHRpb24gb2NjdXJyZWQuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG9bJ2NhdGNoJ10gPSBmdW5jdGlvbiAoaGFuZGxlck9yU2Vjb25kKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oaGFuZGxlck9yU2Vjb25kKSA/IG5ldyBDYXRjaE9ic2VydmFibGUodGhpcywgaGFuZGxlck9yU2Vjb25kKSA6IG9ic2VydmFibGVDYXRjaChbdGhpcywgaGFuZGxlck9yU2Vjb25kXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnRpbnVlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgaXMgdGVybWluYXRlZCBieSBhbiBleGNlcHRpb24gd2l0aCB0aGUgbmV4dCBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0ge0FycmF5IHwgQXJndW1lbnRzfSBhcmdzIEFyZ3VtZW50cyBvciBhbiBhcnJheSB0byB1c2UgYXMgdGhlIG5leHQgc2VxdWVuY2UgaWYgYW4gZXJyb3Igb2NjdXJzLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIGVsZW1lbnRzIGZyb20gY29uc2VjdXRpdmUgc291cmNlIHNlcXVlbmNlcyB1bnRpbCBhIHNvdXJjZSBzZXF1ZW5jZSB0ZXJtaW5hdGVzIHN1Y2Nlc3NmdWxseS5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlQ2F0Y2ggPSBPYnNlcnZhYmxlWydjYXRjaCddID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpdGVtcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKSB7XG4gICAgICBpdGVtcyA9IGFyZ3VtZW50c1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpdGVtcyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGl0ZW1zW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgfVxuICAgIHJldHVybiBlbnVtZXJhYmxlT2YoaXRlbXMpLmNhdGNoRXJyb3IoKTtcbiAgfTtcblxuICAvKipcbiAgICogTWVyZ2VzIHRoZSBzcGVjaWZpZWQgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBvbmUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBieSB1c2luZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gd2hlbmV2ZXIgYW55IG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlcyBvciBQcm9taXNlcyBwcm9kdWNlcyBhbiBlbGVtZW50LlxuICAgKiBUaGlzIGNhbiBiZSBpbiB0aGUgZm9ybSBvZiBhbiBhcmd1bWVudCBsaXN0IG9mIG9ic2VydmFibGVzIG9yIGFuIGFycmF5LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAxIC0gb2JzID0gb2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KG9iczEsIG9iczIsIG9iczMsIGZ1bmN0aW9uIChvMSwgbzIsIG8zKSB7IHJldHVybiBvMSArIG8yICsgbzM7IH0pO1xuICAgKiAyIC0gb2JzID0gb2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KFtvYnMxLCBvYnMyLCBvYnMzXSwgZnVuY3Rpb24gKG8xLCBvMiwgbzMpIHsgcmV0dXJuIG8xICsgbzIgKyBvMzsgfSk7XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHJlc3VsdCBvZiBjb21iaW5pbmcgZWxlbWVudHMgb2YgdGhlIHNvdXJjZXMgdXNpbmcgdGhlIHNwZWNpZmllZCByZXN1bHQgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uY29tYmluZUxhdGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGFyZ3NbMF0udW5zaGlmdCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBmdW5jdGlvbiBmYWxzZUZhY3RvcnkoKSB7IHJldHVybiBmYWxzZTsgfVxuICBmdW5jdGlvbiBhcmd1bWVudHNUb0FycmF5KCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICByZXR1cm4gYXJncztcbiAgfVxuXG4gIHZhciBDb21iaW5lTGF0ZXN0T2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDb21iaW5lTGF0ZXN0T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0T2JzZXJ2YWJsZShwYXJhbXMsIGNiKSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgICB0aGlzLl9jYiA9IGNiO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgQ29tYmluZUxhdGVzdE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvYnNlcnZlcikge1xuICAgICAgdmFyIGxlbiA9IHRoaXMuX3BhcmFtcy5sZW5ndGgsXG4gICAgICAgICAgc3Vic2NyaXB0aW9ucyA9IG5ldyBBcnJheShsZW4pO1xuXG4gICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgIGhhc1ZhbHVlOiBhcnJheUluaXRpYWxpemUobGVuLCBmYWxzZUZhY3RvcnkpLFxuICAgICAgICBoYXNWYWx1ZUFsbDogZmFsc2UsXG4gICAgICAgIGlzRG9uZTogYXJyYXlJbml0aWFsaXplKGxlbiwgZmFsc2VGYWN0b3J5KSxcbiAgICAgICAgdmFsdWVzOiBuZXcgQXJyYXkobGVuKVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gdGhpcy5fcGFyYW1zW2ldLCBzYWQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uc1tpXSA9IHNhZDtcbiAgICAgICAgaXNQcm9taXNlKHNvdXJjZSkgJiYgKHNvdXJjZSA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShzb3VyY2UpKTtcbiAgICAgICAgc2FkLnNldERpc3Bvc2FibGUoc291cmNlLnN1YnNjcmliZShuZXcgQ29tYmluZUxhdGVzdE9ic2VydmVyKG9ic2VydmVyLCBpLCB0aGlzLl9jYiwgc3RhdGUpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgTkFyeURpc3Bvc2FibGUoc3Vic2NyaXB0aW9ucyk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb21iaW5lTGF0ZXN0T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBDb21iaW5lTGF0ZXN0T2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENvbWJpbmVMYXRlc3RPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0T2JzZXJ2ZXIobywgaSwgY2IsIHN0YXRlKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX2kgPSBpO1xuICAgICAgdGhpcy5fY2IgPSBjYjtcbiAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3RUaGVTYW1lKGkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoeCwgaikge1xuICAgICAgICByZXR1cm4gaiAhPT0gaTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgQ29tYmluZUxhdGVzdE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX3N0YXRlLnZhbHVlc1t0aGlzLl9pXSA9IHg7XG4gICAgICB0aGlzLl9zdGF0ZS5oYXNWYWx1ZVt0aGlzLl9pXSA9IHRydWU7XG4gICAgICBpZiAodGhpcy5fc3RhdGUuaGFzVmFsdWVBbGwgfHwgKHRoaXMuX3N0YXRlLmhhc1ZhbHVlQWxsID0gdGhpcy5fc3RhdGUuaGFzVmFsdWUuZXZlcnkoaWRlbnRpdHkpKSkge1xuICAgICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2godGhpcy5fY2IpLmFwcGx5KG51bGwsIHRoaXMuX3N0YXRlLnZhbHVlcyk7XG4gICAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLl9vLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgICAgIHRoaXMuX28ub25OZXh0KHJlcyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlLmlzRG9uZS5maWx0ZXIobm90VGhlU2FtZSh0aGlzLl9pKSkuZXZlcnkoaWRlbnRpdHkpKSB7XG4gICAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29tYmluZUxhdGVzdE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIENvbWJpbmVMYXRlc3RPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fc3RhdGUuaXNEb25lW3RoaXMuX2ldID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3N0YXRlLmlzRG9uZS5ldmVyeShpZGVudGl0eSkgJiYgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29tYmluZUxhdGVzdE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgKiBNZXJnZXMgdGhlIHNwZWNpZmllZCBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIG9uZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGJ5IHVzaW5nIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB3aGVuZXZlciBhbnkgb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2VzIG9yIFByb21pc2VzIHByb2R1Y2VzIGFuIGVsZW1lbnQuXG4gICpcbiAgKiBAZXhhbXBsZVxuICAqIDEgLSBvYnMgPSBSeC5PYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3Qob2JzMSwgb2JzMiwgb2JzMywgZnVuY3Rpb24gKG8xLCBvMiwgbzMpIHsgcmV0dXJuIG8xICsgbzIgKyBvMzsgfSk7XG4gICogMiAtIG9icyA9IFJ4Lk9ic2VydmFibGUuY29tYmluZUxhdGVzdChbb2JzMSwgb2JzMiwgb2JzM10sIGZ1bmN0aW9uIChvMSwgbzIsIG8zKSB7IHJldHVybiBvMSArIG8yICsgbzM7IH0pO1xuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHJlc3VsdCBvZiBjb21iaW5pbmcgZWxlbWVudHMgb2YgdGhlIHNvdXJjZXMgdXNpbmcgdGhlIHNwZWNpZmllZCByZXN1bHQgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICovXG4gIHZhciBjb21iaW5lTGF0ZXN0ID0gT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBpc0Z1bmN0aW9uKGFyZ3NbbGVuIC0gMV0pID8gYXJncy5wb3AoKSA6IGFyZ3VtZW50c1RvQXJyYXk7XG4gICAgQXJyYXkuaXNBcnJheShhcmdzWzBdKSAmJiAoYXJncyA9IGFyZ3NbMF0pO1xuICAgIHJldHVybiBuZXcgQ29tYmluZUxhdGVzdE9ic2VydmFibGUoYXJncywgcmVzdWx0U2VsZWN0b3IpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZXMgYWxsIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlcy4gIFRoaXMgdGFrZXMgaW4gZWl0aGVyIGFuIGFycmF5IG9yIHZhcmlhYmxlIGFyZ3VtZW50cyB0byBjb25jYXRlbmF0ZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgZWFjaCBnaXZlbiBzZXF1ZW5jZSwgaW4gc2VxdWVudGlhbCBvcmRlci5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5jb25jYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yKHZhciBhcmdzID0gW10sIGkgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHsgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7IH1cbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgcmV0dXJuIG9ic2VydmFibGVDb25jYXQuYXBwbHkobnVsbCwgYXJncyk7XG4gIH07XG5cbiAgdmFyIENvbmNhdE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ29uY2F0T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDb25jYXRPYnNlcnZhYmxlKHNvdXJjZXMpIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IHNvdXJjZXM7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBDb25jYXRPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24obykge1xuICAgICAgdmFyIHNpbmsgPSBuZXcgQ29uY2F0U2luayh0aGlzLnNvdXJjZXMsIG8pO1xuICAgICAgcmV0dXJuIHNpbmsucnVuKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENvbmNhdFNpbmsoc291cmNlcywgbykge1xuICAgICAgdGhpcy5zb3VyY2VzID0gc291cmNlcztcbiAgICAgIHRoaXMubyA9IG87XG4gICAgfVxuICAgIENvbmNhdFNpbmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpc0Rpc3Bvc2VkLCBzdWJzY3JpcHRpb24gPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpLCBzb3VyY2VzID0gdGhpcy5zb3VyY2VzLCBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCwgbyA9IHRoaXMubztcbiAgICAgIHZhciBjYW5jZWxhYmxlID0gaW1tZWRpYXRlU2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKDAsIGZ1bmN0aW9uIChpLCBzZWxmKSB7XG4gICAgICAgIGlmIChpc0Rpc3Bvc2VkKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoaSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHByb21pc2VcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHNvdXJjZXNbaV07XG4gICAgICAgIGlzUHJvbWlzZShjdXJyZW50VmFsdWUpICYmIChjdXJyZW50VmFsdWUgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UoY3VycmVudFZhbHVlKSk7XG5cbiAgICAgICAgdmFyIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUoZCk7XG4gICAgICAgIGQuc2V0RGlzcG9zYWJsZShjdXJyZW50VmFsdWUuc3Vic2NyaWJlKFxuICAgICAgICAgIGZ1bmN0aW9uICh4KSB7IG8ub25OZXh0KHgpOyB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7IHNlbGYoaSArIDEpOyB9XG4gICAgICAgICkpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZShzdWJzY3JpcHRpb24sIGNhbmNlbGFibGUsIGRpc3Bvc2FibGVDcmVhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBpc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgIH0pKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gQ29uY2F0T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZXMgYWxsIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlcy5cbiAgICogQHBhcmFtIHtBcnJheSB8IEFyZ3VtZW50c30gYXJncyBBcmd1bWVudHMgb3IgYW4gYXJyYXkgdG8gY29uY2F0IHRvIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBlYWNoIGdpdmVuIHNlcXVlbmNlLCBpbiBzZXF1ZW50aWFsIG9yZGVyLlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVDb25jYXQgPSBPYnNlcnZhYmxlLmNvbmNhdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKSB7XG4gICAgICBhcmdzID0gYXJndW1lbnRzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDb25jYXRPYnNlcnZhYmxlKGFyZ3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvZiBvYnNlcnZhYmxlIHNlcXVlbmNlcy5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgZWFjaCBvYnNlcnZlZCBpbm5lciBzZXF1ZW5jZSwgaW4gc2VxdWVudGlhbCBvcmRlci5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5jb25jYXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVyZ2UoMSk7XG4gIH07XG5cbiAgdmFyIE1lcmdlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoTWVyZ2VPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gTWVyZ2VPYnNlcnZhYmxlKHNvdXJjZSwgbWF4Q29uY3VycmVudCkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSBtYXhDb25jdXJyZW50O1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTWVyZ2VPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBnID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcbiAgICAgIGcuYWRkKHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgTWVyZ2VPYnNlcnZlcihvYnNlcnZlciwgdGhpcy5tYXhDb25jdXJyZW50LCBnKSkpO1xuICAgICAgcmV0dXJuIGc7XG4gICAgfTtcblxuICAgIHJldHVybiBNZXJnZU9ic2VydmFibGU7XG5cbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBNZXJnZU9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZXJnZU9ic2VydmVyKG8sIG1heCwgZykge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgdGhpcy5nID0gZztcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5xID0gW107XG4gICAgICB0aGlzLmFjdGl2ZUNvdW50ID0gMDtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgfVxuICAgIE1lcmdlT2JzZXJ2ZXIucHJvdG90eXBlLmhhbmRsZVN1YnNjcmliZSA9IGZ1bmN0aW9uICh4cykge1xuICAgICAgdmFyIHNhZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5nLmFkZChzYWQpO1xuICAgICAgaXNQcm9taXNlKHhzKSAmJiAoeHMgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UoeHMpKTtcbiAgICAgIHNhZC5zZXREaXNwb3NhYmxlKHhzLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcih0aGlzLCBzYWQpKSk7XG4gICAgfTtcbiAgICBNZXJnZU9ic2VydmVyLnByb3RvdHlwZS5vbk5leHQgPSBmdW5jdGlvbiAoaW5uZXJTb3VyY2UpIHtcbiAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgICAgaWYodGhpcy5hY3RpdmVDb3VudCA8IHRoaXMubWF4KSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVDb3VudCsrO1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaWJlKGlubmVyU291cmNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnEucHVzaChpbm5lclNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBNZXJnZU9ic2VydmVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIE1lcmdlT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5hY3RpdmVDb3VudCA9PT0gMCAmJiB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIE1lcmdlT2JzZXJ2ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB9O1xuICAgICAgTWVyZ2VPYnNlcnZlci5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKHBhcmVudCwgc2FkKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnNhZCA9IHNhZDtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uTmV4dCA9IGZ1bmN0aW9uICh4KSB7IGlmKCF0aGlzLmlzU3RvcHBlZCkgeyB0aGlzLnBhcmVudC5vLm9uTmV4dCh4KTsgfSB9O1xuICAgICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuby5vbkVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgcGFyZW50LmcucmVtb3ZlKHRoaXMuc2FkKTtcbiAgICAgICAgICBpZiAocGFyZW50LnEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGFyZW50LmhhbmRsZVN1YnNjcmliZShwYXJlbnQucS5zaGlmdCgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmFjdGl2ZUNvdW50LS07XG4gICAgICAgICAgICBwYXJlbnQuZG9uZSAmJiBwYXJlbnQuYWN0aXZlQ291bnQgPT09IDAgJiYgcGFyZW50Lm8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgfTtcbiAgICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucGFyZW50Lm8ub25FcnJvcihlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBNZXJnZU9ic2VydmVyO1xuICB9KCkpO1xuXG5cblxuXG5cbiAgLyoqXG4gICogTWVyZ2VzIGFuIG9ic2VydmFibGUgc2VxdWVuY2Ugb2Ygb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLCBsaW1pdGluZyB0aGUgbnVtYmVyIG9mIGNvbmN1cnJlbnQgc3Vic2NyaXB0aW9ucyB0byBpbm5lciBzZXF1ZW5jZXMuXG4gICogT3IgbWVyZ2VzIHR3byBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIGEgc2luZ2xlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICpcbiAgKiBAZXhhbXBsZVxuICAqIDEgLSBtZXJnZWQgPSBzb3VyY2VzLm1lcmdlKDEpO1xuICAqIDIgLSBtZXJnZWQgPSBzb3VyY2UubWVyZ2Uob3RoZXJTb3VyY2UpO1xuICAqIEBwYXJhbSB7TWl4ZWR9IFttYXhDb25jdXJyZW50T3JPdGhlcl0gTWF4aW11bSBudW1iZXIgb2YgaW5uZXIgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgYmVpbmcgc3Vic2NyaWJlZCB0byBjb25jdXJyZW50bHkgb3IgdGhlIHNlY29uZCBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IG1lcmdlcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlubmVyIHNlcXVlbmNlcy5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLm1lcmdlID0gZnVuY3Rpb24gKG1heENvbmN1cnJlbnRPck90aGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBtYXhDb25jdXJyZW50T3JPdGhlciAhPT0gJ251bWJlcicgP1xuICAgICAgb2JzZXJ2YWJsZU1lcmdlKHRoaXMsIG1heENvbmN1cnJlbnRPck90aGVyKSA6XG4gICAgICBuZXcgTWVyZ2VPYnNlcnZhYmxlKHRoaXMsIG1heENvbmN1cnJlbnRPck90aGVyKTtcbiAgfTtcblxuICAvKipcbiAgICogTWVyZ2VzIGFsbCB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBhIHNpbmdsZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBUaGUgc2NoZWR1bGVyIGlzIG9wdGlvbmFsIGFuZCBpZiBub3Qgc3BlY2lmaWVkLCB0aGUgaW1tZWRpYXRlIHNjaGVkdWxlciBpcyB1c2VkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBtZXJnZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlcy5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlTWVyZ2UgPSBPYnNlcnZhYmxlLm1lcmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzY2hlZHVsZXIsIHNvdXJjZXMgPSBbXSwgaSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoIWFyZ3VtZW50c1swXSkge1xuICAgICAgc2NoZWR1bGVyID0gaW1tZWRpYXRlU2NoZWR1bGVyO1xuICAgICAgZm9yKGkgPSAxOyBpIDwgbGVuOyBpKyspIHsgc291cmNlcy5wdXNoKGFyZ3VtZW50c1tpXSk7IH1cbiAgICB9IGVsc2UgaWYgKGlzU2NoZWR1bGVyKGFyZ3VtZW50c1swXSkpIHtcbiAgICAgIHNjaGVkdWxlciA9IGFyZ3VtZW50c1swXTtcbiAgICAgIGZvcihpID0gMTsgaSA8IGxlbjsgaSsrKSB7IHNvdXJjZXMucHVzaChhcmd1bWVudHNbaV0pOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlciA9IGltbWVkaWF0ZVNjaGVkdWxlcjtcbiAgICAgIGZvcihpID0gMDsgaSA8IGxlbjsgaSsrKSB7IHNvdXJjZXMucHVzaChhcmd1bWVudHNbaV0pOyB9XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZXNbMF0pKSB7XG4gICAgICBzb3VyY2VzID0gc291cmNlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZihzY2hlZHVsZXIsIHNvdXJjZXMpLm1lcmdlQWxsKCk7XG4gIH07XG5cbiAgdmFyIENvbXBvc2l0ZUVycm9yID0gUnguQ29tcG9zaXRlRXJyb3IgPSBmdW5jdGlvbihlcnJvcnMpIHtcbiAgICB0aGlzLmlubmVyRXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMubWVzc2FnZSA9ICdUaGlzIGNvbnRhaW5zIG11bHRpcGxlIGVycm9ycy4gQ2hlY2sgdGhlIGlubmVyRXJyb3JzJztcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICB9O1xuICBDb21wb3NpdGVFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gIENvbXBvc2l0ZUVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0NvbXBvc2l0ZUVycm9yJztcblxuICB2YXIgTWVyZ2VEZWxheUVycm9yT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhNZXJnZURlbGF5RXJyb3JPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIE1lcmdlRGVsYXlFcnJvck9ic2VydmFibGUoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIE1lcmdlRGVsYXlFcnJvck9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGdyb3VwID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKSxcbiAgICAgICAgbSA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpLFxuICAgICAgICBzdGF0ZSA9IHsgaXNTdG9wcGVkOiBmYWxzZSwgZXJyb3JzOiBbXSwgbzogbyB9O1xuXG4gICAgICBncm91cC5hZGQobSk7XG4gICAgICBtLnNldERpc3Bvc2FibGUodGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBNZXJnZURlbGF5RXJyb3JPYnNlcnZlcihncm91cCwgc3RhdGUpKSk7XG5cbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE1lcmdlRGVsYXlFcnJvck9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgTWVyZ2VEZWxheUVycm9yT2JzZXJ2ZXIgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoTWVyZ2VEZWxheUVycm9yT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gTWVyZ2VEZWxheUVycm9yT2JzZXJ2ZXIoZ3JvdXAsIHN0YXRlKSB7XG4gICAgICB0aGlzLl9ncm91cCA9IGdyb3VwO1xuICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENvbXBsZXRpb24obywgZXJyb3JzKSB7XG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICB9IGVsc2UgaWYgKGVycm9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgby5vbkVycm9yKGVycm9yc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvLm9uRXJyb3IobmV3IENvbXBvc2l0ZUVycm9yKGVycm9ycykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1lcmdlRGVsYXlFcnJvck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHZhciBpbm5lciA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5fZ3JvdXAuYWRkKGlubmVyKTtcblxuICAgICAgLy8gQ2hlY2sgZm9yIHByb21pc2VzIHN1cHBvcnRcbiAgICAgIGlzUHJvbWlzZSh4KSAmJiAoeCA9IG9ic2VydmFibGVGcm9tUHJvbWlzZSh4KSk7XG4gICAgICBpbm5lci5zZXREaXNwb3NhYmxlKHguc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKGlubmVyLCB0aGlzLl9ncm91cCwgdGhpcy5fc3RhdGUpKSk7XG4gICAgfTtcblxuICAgIE1lcmdlRGVsYXlFcnJvck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5lcnJvcnMucHVzaChlKTtcbiAgICAgIHRoaXMuX3N0YXRlLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICB0aGlzLl9ncm91cC5sZW5ndGggPT09IDEgJiYgc2V0Q29tcGxldGlvbih0aGlzLl9zdGF0ZS5vLCB0aGlzLl9zdGF0ZS5lcnJvcnMpO1xuICAgIH07XG5cbiAgICBNZXJnZURlbGF5RXJyb3JPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fc3RhdGUuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2dyb3VwLmxlbmd0aCA9PT0gMSAmJiBzZXRDb21wbGV0aW9uKHRoaXMuX3N0YXRlLm8sIHRoaXMuX3N0YXRlLmVycm9ycyk7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKElubmVyT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihpbm5lciwgZ3JvdXAsIHN0YXRlKSB7XG4gICAgICB0aGlzLl9pbm5lciA9IGlubmVyO1xuICAgICAgdGhpcy5fZ3JvdXAgPSBncm91cDtcbiAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHsgdGhpcy5fc3RhdGUuby5vbk5leHQoeCk7IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fc3RhdGUuZXJyb3JzLnB1c2goZSk7XG4gICAgICB0aGlzLl9ncm91cC5yZW1vdmUodGhpcy5faW5uZXIpO1xuICAgICAgdGhpcy5fc3RhdGUuaXNTdG9wcGVkICYmIHRoaXMuX2dyb3VwLmxlbmd0aCA9PT0gMSAmJiBzZXRDb21wbGV0aW9uKHRoaXMuX3N0YXRlLm8sIHRoaXMuX3N0YXRlLmVycm9ycyk7XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9ncm91cC5yZW1vdmUodGhpcy5faW5uZXIpO1xuICAgICAgdGhpcy5fc3RhdGUuaXNTdG9wcGVkICYmIHRoaXMuX2dyb3VwLmxlbmd0aCA9PT0gMSAmJiBzZXRDb21wbGV0aW9uKHRoaXMuX3N0YXRlLm8sIHRoaXMuX3N0YXRlLmVycm9ycyk7XG4gICAgfTtcblxuICAgIHJldHVybiBNZXJnZURlbGF5RXJyb3JPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICogRmxhdHRlbnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIE9ic2VydmFibGVzIGludG8gb25lIE9ic2VydmFibGUsIGluIGEgd2F5IHRoYXQgYWxsb3dzIGFuIE9ic2VydmVyIHRvXG4gICogcmVjZWl2ZSBhbGwgc3VjY2Vzc2Z1bGx5IGVtaXR0ZWQgaXRlbXMgZnJvbSBhbGwgb2YgdGhlIHNvdXJjZSBPYnNlcnZhYmxlcyB3aXRob3V0IGJlaW5nIGludGVycnVwdGVkIGJ5XG4gICogYW4gZXJyb3Igbm90aWZpY2F0aW9uIGZyb20gb25lIG9mIHRoZW0uXG4gICpcbiAgKiBUaGlzIGJlaGF2ZXMgbGlrZSBPYnNlcnZhYmxlLnByb3RvdHlwZS5tZXJnZUFsbCBleGNlcHQgdGhhdCBpZiBhbnkgb2YgdGhlIG1lcmdlZCBPYnNlcnZhYmxlcyBub3RpZnkgb2YgYW5cbiAgKiBlcnJvciB2aWEgdGhlIE9ic2VydmVyJ3Mgb25FcnJvciwgbWVyZ2VEZWxheUVycm9yIHdpbGwgcmVmcmFpbiBmcm9tIHByb3BhZ2F0aW5nIHRoYXRcbiAgKiBlcnJvciBub3RpZmljYXRpb24gdW50aWwgYWxsIG9mIHRoZSBtZXJnZWQgT2JzZXJ2YWJsZXMgaGF2ZSBmaW5pc2hlZCBlbWl0dGluZyBpdGVtcy5cbiAgKiBAcGFyYW0ge0FycmF5IHwgQXJndW1lbnRzfSBhcmdzIEFyZ3VtZW50cyBvciBhbiBhcnJheSB0byBtZXJnZS5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGFsbCBvZiB0aGUgaXRlbXMgZW1pdHRlZCBieSB0aGUgT2JzZXJ2YWJsZXMgZW1pdHRlZCBieSB0aGUgT2JzZXJ2YWJsZVxuICAqL1xuICBPYnNlcnZhYmxlLm1lcmdlRGVsYXlFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICB9XG4gICAgdmFyIHNvdXJjZSA9IG9ic2VydmFibGVPZihudWxsLCBhcmdzKTtcbiAgICByZXR1cm4gbmV3IE1lcmdlRGVsYXlFcnJvck9ic2VydmFibGUoc291cmNlKTtcbiAgfTtcblxuICB2YXIgTWVyZ2VBbGxPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhNZXJnZUFsbE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBNZXJnZUFsbE9ic2VydmFibGUoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIE1lcmdlQWxsT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIGcgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpLCBtID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICBnLmFkZChtKTtcbiAgICAgIG0uc2V0RGlzcG9zYWJsZSh0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IE1lcmdlQWxsT2JzZXJ2ZXIob2JzZXJ2ZXIsIGcpKSk7XG4gICAgICByZXR1cm4gZztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTWVyZ2VBbGxPYnNlcnZlcihvLCBnKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5nID0gZztcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB9XG4gICAgTWVyZ2VBbGxPYnNlcnZlci5wcm90b3R5cGUub25OZXh0ID0gZnVuY3Rpb24oaW5uZXJTb3VyY2UpIHtcbiAgICAgIGlmKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNhZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5nLmFkZChzYWQpO1xuXG4gICAgICBpc1Byb21pc2UoaW5uZXJTb3VyY2UpICYmIChpbm5lclNvdXJjZSA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShpbm5lclNvdXJjZSkpO1xuXG4gICAgICBzYWQuc2V0RGlzcG9zYWJsZShpbm5lclNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIodGhpcywgc2FkKSkpO1xuICAgIH07XG4gICAgTWVyZ2VBbGxPYnNlcnZlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZighdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIE1lcmdlQWxsT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nLmxlbmd0aCA9PT0gMSAmJiB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIE1lcmdlQWxsT2JzZXJ2ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB9O1xuICAgIE1lcmdlQWxsT2JzZXJ2ZXIucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKHBhcmVudCwgc2FkKSB7XG4gICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgIHRoaXMuc2FkID0gc2FkO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25OZXh0ID0gZnVuY3Rpb24gKHgpIHsgaWYgKCF0aGlzLmlzU3RvcHBlZCkgeyB0aGlzLnBhcmVudC5vLm9uTmV4dCh4KTsgfSB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXJlbnQuby5vbkVycm9yKGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZighdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHBhcmVudC5nLnJlbW92ZSh0aGlzLnNhZCk7XG4gICAgICAgIHBhcmVudC5kb25lICYmIHBhcmVudC5nLmxlbmd0aCA9PT0gMSAmJiBwYXJlbnQuby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXJlbnQuby5vbkVycm9yKGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gTWVyZ2VBbGxPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICogTWVyZ2VzIGFuIG9ic2VydmFibGUgc2VxdWVuY2Ugb2Ygb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IG1lcmdlcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlubmVyIHNlcXVlbmNlcy5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLm1lcmdlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgTWVyZ2VBbGxPYnNlcnZhYmxlKHRoaXMpO1xuICB9O1xuXG4gIHZhciBTa2lwVW50aWxPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNraXBVbnRpbE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBTa2lwVW50aWxPYnNlcnZhYmxlKHNvdXJjZSwgb3RoZXIpIHtcbiAgICAgIHRoaXMuX3MgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9vID0gaXNQcm9taXNlKG90aGVyKSA/IG9ic2VydmFibGVGcm9tUHJvbWlzZShvdGhlcikgOiBvdGhlcjtcbiAgICAgIHRoaXMuX29wZW4gPSBmYWxzZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFNraXBVbnRpbE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvKSB7XG4gICAgICB2YXIgbGVmdFN1YnNjcmlwdGlvbiA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgbGVmdFN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKHRoaXMuX3Muc3Vic2NyaWJlKG5ldyBTa2lwVW50aWxTb3VyY2VPYnNlcnZlcihvLCB0aGlzKSkpO1xuXG4gICAgICBpc1Byb21pc2UodGhpcy5fbykgJiYgKHRoaXMuX28gPSBvYnNlcnZhYmxlRnJvbVByb21pc2UodGhpcy5fbykpO1xuXG4gICAgICB2YXIgcmlnaHRTdWJzY3JpcHRpb24gPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIHJpZ2h0U3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUodGhpcy5fby5zdWJzY3JpYmUobmV3IFNraXBVbnRpbE90aGVyT2JzZXJ2ZXIobywgdGhpcywgcmlnaHRTdWJzY3JpcHRpb24pKSk7XG5cbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShsZWZ0U3Vic2NyaXB0aW9uLCByaWdodFN1YnNjcmlwdGlvbik7XG4gICAgfTtcblxuICAgIHJldHVybiBTa2lwVW50aWxPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFNraXBVbnRpbFNvdXJjZU9ic2VydmVyID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNraXBVbnRpbFNvdXJjZU9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFNraXBVbnRpbFNvdXJjZU9ic2VydmVyKG8sIHApIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fcCA9IHA7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTa2lwVW50aWxTb3VyY2VPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9wLl9vcGVuICYmIHRoaXMuX28ub25OZXh0KHgpO1xuICAgIH07XG5cbiAgICBTa2lwVW50aWxTb3VyY2VPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZXJyKTtcbiAgICB9O1xuXG4gICAgU2tpcFVudGlsU291cmNlT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fcC5fb3BlbiAmJiB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTa2lwVW50aWxTb3VyY2VPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgdmFyIFNraXBVbnRpbE90aGVyT2JzZXJ2ZXIgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2tpcFVudGlsT3RoZXJPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTa2lwVW50aWxPdGhlck9ic2VydmVyKG8sIHAsIHIpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fcCA9IHA7XG4gICAgICB0aGlzLl9yID0gcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFNraXBVbnRpbE90aGVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9wLl9vcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3IuZGlzcG9zZSgpO1xuICAgIH07XG5cbiAgICBTa2lwVW50aWxPdGhlck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlcnIpO1xuICAgIH07XG5cbiAgICBTa2lwVW50aWxPdGhlck9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3IuZGlzcG9zZSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2tpcFVudGlsT3RoZXJPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvbmx5IGFmdGVyIHRoZSBvdGhlciBvYnNlcnZhYmxlIHNlcXVlbmNlIHByb2R1Y2VzIGEgdmFsdWUuXG4gICAqIEBwYXJhbSB7T2JzZXJ2YWJsZSB8IFByb21pc2V9IG90aGVyIFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIG9yIFByb21pc2UgdGhhdCB0cmlnZ2VycyBwcm9wYWdhdGlvbiBvZiBlbGVtZW50cyBvZiB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgc291cmNlIHNlcXVlbmNlIHN0YXJ0aW5nIGZyb20gdGhlIHBvaW50IHRoZSBvdGhlciBzZXF1ZW5jZSB0cmlnZ2VyZWQgcHJvcGFnYXRpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc2tpcFVudGlsID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIG5ldyBTa2lwVW50aWxPYnNlcnZhYmxlKHRoaXMsIG90aGVyKTtcbiAgfTtcblxuICB2YXIgU3dpdGNoT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTd2l0Y2hPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFN3aXRjaE9ic2VydmFibGUoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFN3aXRjaE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGlubmVyID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKSwgcyA9IHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgU3dpdGNoT2JzZXJ2ZXIobywgaW5uZXIpKTtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShzLCBpbm5lcik7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKFN3aXRjaE9ic2VydmVyLCBBYnN0cmFjdE9ic2VydmVyKTtcbiAgICBmdW5jdGlvbiBTd2l0Y2hPYnNlcnZlcihvLCBpbm5lcikge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMuaW5uZXIgPSBpbm5lcjtcbiAgICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5sYXRlc3QgPSAwO1xuICAgICAgdGhpcy5oYXNMYXRlc3QgPSBmYWxzZTtcbiAgICAgIEFic3RyYWN0T2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTd2l0Y2hPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChpbm5lclNvdXJjZSkge1xuICAgICAgdmFyIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKSwgaWQgPSArK3RoaXMubGF0ZXN0O1xuICAgICAgdGhpcy5oYXNMYXRlc3QgPSB0cnVlO1xuICAgICAgdGhpcy5pbm5lci5zZXREaXNwb3NhYmxlKGQpO1xuICAgICAgaXNQcm9taXNlKGlubmVyU291cmNlKSAmJiAoaW5uZXJTb3VyY2UgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UoaW5uZXJTb3VyY2UpKTtcbiAgICAgIGQuc2V0RGlzcG9zYWJsZShpbm5lclNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIodGhpcywgaWQpKSk7XG4gICAgfTtcblxuICAgIFN3aXRjaE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgU3dpdGNoT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gICAgICAhdGhpcy5oYXNMYXRlc3QgJiYgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKElubmVyT2JzZXJ2ZXIsIEFic3RyYWN0T2JzZXJ2ZXIpO1xuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIocGFyZW50LCBpZCkge1xuICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICBBYnN0cmFjdE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5wYXJlbnQubGF0ZXN0ID09PSB0aGlzLmlkICYmIHRoaXMucGFyZW50Lm8ub25OZXh0KHgpO1xuICAgIH07XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLnBhcmVudC5sYXRlc3QgPT09IHRoaXMuaWQgJiYgdGhpcy5wYXJlbnQuby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQubGF0ZXN0ID09PSB0aGlzLmlkKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lmhhc0xhdGVzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcmVudC5pc1N0b3BwZWQgJiYgdGhpcy5wYXJlbnQuby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gU3dpdGNoT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAqIFRyYW5zZm9ybXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvZiBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgcHJvZHVjaW5nIHZhbHVlcyBvbmx5IGZyb20gdGhlIG1vc3QgcmVjZW50IG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgYXQgYW55IHBvaW50IGluIHRpbWUgcHJvZHVjZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBtb3N0IHJlY2VudCBpbm5lciBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgaGFzIGJlZW4gcmVjZWl2ZWQuXG4gICovXG4gIG9ic2VydmFibGVQcm90b1snc3dpdGNoJ10gPSBvYnNlcnZhYmxlUHJvdG8uc3dpdGNoTGF0ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgU3dpdGNoT2JzZXJ2YWJsZSh0aGlzKTtcbiAgfTtcblxuICB2YXIgVGFrZVVudGlsT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUYWtlVW50aWxPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gVGFrZVVudGlsT2JzZXJ2YWJsZShzb3VyY2UsIG90aGVyKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMub3RoZXIgPSBpc1Byb21pc2Uob3RoZXIpID8gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKG90aGVyKSA6IG90aGVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGFrZVVudGlsT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG8pLFxuICAgICAgICB0aGlzLm90aGVyLnN1YnNjcmliZShuZXcgVGFrZVVudGlsT2JzZXJ2ZXIobykpXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGFrZVVudGlsT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBUYWtlVW50aWxPYnNlcnZlciA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUYWtlVW50aWxPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUYWtlVW50aWxPYnNlcnZlcihvKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRha2VVbnRpbE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICBUYWtlVW50aWxPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZXJyKTtcbiAgICB9O1xuXG4gICAgVGFrZVVudGlsT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gbm9vcDtcblxuICAgIHJldHVybiBUYWtlVW50aWxPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSBzZXF1ZW5jZSB1bnRpbCB0aGUgb3RoZXIgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBwcm9kdWNlcyBhIHZhbHVlLlxuICAgKiBAcGFyYW0ge09ic2VydmFibGUgfCBQcm9taXNlfSBvdGhlciBPYnNlcnZhYmxlIHNlcXVlbmNlIG9yIFByb21pc2UgdGhhdCB0ZXJtaW5hdGVzIHByb3BhZ2F0aW9uIG9mIGVsZW1lbnRzIG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2UgdXAgdG8gdGhlIHBvaW50IHRoZSBvdGhlciBzZXF1ZW5jZSBpbnRlcnJ1cHRlZCBmdXJ0aGVyIHByb3BhZ2F0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnRha2VVbnRpbCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBuZXcgVGFrZVVudGlsT2JzZXJ2YWJsZSh0aGlzLCBvdGhlcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gZmFsc2VGYWN0b3J5KCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgZnVuY3Rpb24gYXJndW1lbnRzVG9BcnJheSgpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgcmV0dXJuIGFyZ3M7XG4gIH1cblxuICB2YXIgV2l0aExhdGVzdEZyb21PYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFdpdGhMYXRlc3RGcm9tT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBXaXRoTGF0ZXN0RnJvbU9ic2VydmFibGUoc291cmNlLCBzb3VyY2VzLCByZXN1bHRTZWxlY3Rvcikge1xuICAgICAgdGhpcy5fcyA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX3NzID0gc291cmNlcztcbiAgICAgIHRoaXMuX2NiID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBXaXRoTGF0ZXN0RnJvbU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGxlbiA9IHRoaXMuX3NzLmxlbmd0aDtcbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgaGFzVmFsdWU6IGFycmF5SW5pdGlhbGl6ZShsZW4sIGZhbHNlRmFjdG9yeSksXG4gICAgICAgIGhhc1ZhbHVlQWxsOiBmYWxzZSxcbiAgICAgICAgdmFsdWVzOiBuZXcgQXJyYXkobGVuKVxuICAgICAgfTtcblxuICAgICAgdmFyIG4gPSB0aGlzLl9zcy5sZW5ndGgsIHN1YnNjcmlwdGlvbnMgPSBuZXcgQXJyYXkobiArIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFyIG90aGVyID0gdGhpcy5fc3NbaV0sIHNhZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICBpc1Byb21pc2Uob3RoZXIpICYmIChvdGhlciA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShvdGhlcikpO1xuICAgICAgICBzYWQuc2V0RGlzcG9zYWJsZShvdGhlci5zdWJzY3JpYmUobmV3IFdpdGhMYXRlc3RGcm9tT3RoZXJPYnNlcnZlcihvLCBpLCBzdGF0ZSkpKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uc1tpXSA9IHNhZDtcbiAgICAgIH1cblxuICAgICAgdmFyIHNhZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgc2FkLnNldERpc3Bvc2FibGUodGhpcy5fcy5zdWJzY3JpYmUobmV3IFdpdGhMYXRlc3RGcm9tU291cmNlT2JzZXJ2ZXIobywgdGhpcy5fY2IsIHN0YXRlKSkpO1xuICAgICAgc3Vic2NyaXB0aW9uc1tuXSA9IHNhZDtcblxuICAgICAgcmV0dXJuIG5ldyBOQXJ5RGlzcG9zYWJsZShzdWJzY3JpcHRpb25zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFdpdGhMYXRlc3RGcm9tT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBXaXRoTGF0ZXN0RnJvbU90aGVyT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFdpdGhMYXRlc3RGcm9tT3RoZXJPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBXaXRoTGF0ZXN0RnJvbU90aGVyT2JzZXJ2ZXIobywgaSwgc3RhdGUpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5faSA9IGk7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgV2l0aExhdGVzdEZyb21PdGhlck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX3N0YXRlLnZhbHVlc1t0aGlzLl9pXSA9IHg7XG4gICAgICB0aGlzLl9zdGF0ZS5oYXNWYWx1ZVt0aGlzLl9pXSA9IHRydWU7XG4gICAgICB0aGlzLl9zdGF0ZS5oYXNWYWx1ZUFsbCA9IHRoaXMuX3N0YXRlLmhhc1ZhbHVlLmV2ZXJ5KGlkZW50aXR5KTtcbiAgICB9O1xuXG4gICAgV2l0aExhdGVzdEZyb21PdGhlck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIFdpdGhMYXRlc3RGcm9tT3RoZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gbm9vcDtcblxuICAgIHJldHVybiBXaXRoTGF0ZXN0RnJvbU90aGVyT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIHZhciBXaXRoTGF0ZXN0RnJvbVNvdXJjZU9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhXaXRoTGF0ZXN0RnJvbVNvdXJjZU9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFdpdGhMYXRlc3RGcm9tU291cmNlT2JzZXJ2ZXIobywgY2IsIHN0YXRlKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX2NiID0gY2I7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgV2l0aExhdGVzdEZyb21Tb3VyY2VPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB2YXIgYWxsVmFsdWVzID0gW3hdLmNvbmNhdCh0aGlzLl9zdGF0ZS52YWx1ZXMpO1xuICAgICAgaWYgKCF0aGlzLl9zdGF0ZS5oYXNWYWx1ZUFsbCkgeyByZXR1cm47IH1cbiAgICAgIHZhciByZXMgPSB0cnlDYXRjaCh0aGlzLl9jYikuYXBwbHkobnVsbCwgYWxsVmFsdWVzKTtcbiAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLl9vLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgICB0aGlzLl9vLm9uTmV4dChyZXMpO1xuICAgIH07XG5cbiAgICBXaXRoTGF0ZXN0RnJvbVNvdXJjZU9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIFdpdGhMYXRlc3RGcm9tU291cmNlT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFdpdGhMYXRlc3RGcm9tU291cmNlT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiBNZXJnZXMgdGhlIHNwZWNpZmllZCBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIG9uZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGJ5IHVzaW5nIHRoZSBzZWxlY3RvciBmdW5jdGlvbiBvbmx5IHdoZW4gdGhlIChmaXJzdCkgc291cmNlIG9ic2VydmFibGUgc2VxdWVuY2UgcHJvZHVjZXMgYW4gZWxlbWVudC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgcmVzdWx0IG9mIGNvbWJpbmluZyBlbGVtZW50cyBvZiB0aGUgc291cmNlcyB1c2luZyB0aGUgc3BlY2lmaWVkIHJlc3VsdCBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by53aXRoTGF0ZXN0RnJvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXJndW1lbnRzJyk7IH1cblxuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBpc0Z1bmN0aW9uKGFyZ3NbbGVuIC0gMV0pID8gYXJncy5wb3AoKSA6IGFyZ3VtZW50c1RvQXJyYXk7XG4gICAgQXJyYXkuaXNBcnJheShhcmdzWzBdKSAmJiAoYXJncyA9IGFyZ3NbMF0pO1xuXG4gICAgcmV0dXJuIG5ldyBXaXRoTGF0ZXN0RnJvbU9ic2VydmFibGUodGhpcywgYXJncywgcmVzdWx0U2VsZWN0b3IpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZhbHNlRmFjdG9yeSgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGZ1bmN0aW9uIGVtcHR5QXJyYXlGYWN0b3J5KCkgeyByZXR1cm4gW107IH1cblxuICB2YXIgWmlwT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhaaXBPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFppcE9ic2VydmFibGUoc291cmNlcywgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX3MgPSBzb3VyY2VzO1xuICAgICAgdGhpcy5fY2IgPSByZXN1bHRTZWxlY3RvcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFppcE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvYnNlcnZlcikge1xuICAgICAgdmFyIG4gPSB0aGlzLl9zLmxlbmd0aCxcbiAgICAgICAgICBzdWJzY3JpcHRpb25zID0gbmV3IEFycmF5KG4pO1xuICAgICAgICAgIGRvbmUgPSBhcnJheUluaXRpYWxpemUobiwgZmFsc2VGYWN0b3J5KSxcbiAgICAgICAgICBxID0gYXJyYXlJbml0aWFsaXplKG4sIGVtcHR5QXJyYXlGYWN0b3J5KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuX3NbaV0sIHNhZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICBzdWJzY3JpcHRpb25zW2ldID0gc2FkO1xuICAgICAgICBpc1Byb21pc2Uoc291cmNlKSAmJiAoc291cmNlID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHNvdXJjZSkpO1xuICAgICAgICBzYWQuc2V0RGlzcG9zYWJsZShzb3VyY2Uuc3Vic2NyaWJlKG5ldyBaaXBPYnNlcnZlcihvYnNlcnZlciwgaSwgdGhpcywgcSwgZG9uZSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBOQXJ5RGlzcG9zYWJsZShzdWJzY3JpcHRpb25zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFppcE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgWmlwT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFppcE9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFppcE9ic2VydmVyKG8sIGksIHAsIHEsIGQpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5faSA9IGk7XG4gICAgICB0aGlzLl9wID0gcDtcbiAgICAgIHRoaXMuX3EgPSBxO1xuICAgICAgdGhpcy5fZCA9IGQ7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3RFbXB0eSh4KSB7IHJldHVybiB4Lmxlbmd0aCA+IDA7IH1cbiAgICBmdW5jdGlvbiBzaGlmdEVhY2goeCkgeyByZXR1cm4geC5zaGlmdCgpOyB9XG4gICAgZnVuY3Rpb24gbm90VGhlU2FtZShpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHgsIGopIHtcbiAgICAgICAgcmV0dXJuIGogIT09IGk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIFppcE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX3FbdGhpcy5faV0ucHVzaCh4KTtcbiAgICAgIGlmICh0aGlzLl9xLmV2ZXJ5KG5vdEVtcHR5KSkge1xuICAgICAgICB2YXIgcXVldWVkVmFsdWVzID0gdGhpcy5fcS5tYXAoc2hpZnRFYWNoKTtcbiAgICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHRoaXMuX3AuX2NiKS5hcHBseShudWxsLCBxdWV1ZWRWYWx1ZXMpO1xuICAgICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5fby5vbkVycm9yKHJlcy5lKTsgfVxuICAgICAgICB0aGlzLl9vLm9uTmV4dChyZXMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9kLmZpbHRlcihub3RUaGVTYW1lKHRoaXMuX2kpKS5ldmVyeShpZGVudGl0eSkpIHtcbiAgICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBaaXBPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBaaXBPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fZFt0aGlzLl9pXSA9IHRydWU7XG4gICAgICB0aGlzLl9kLmV2ZXJ5KGlkZW50aXR5KSAmJiB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBaaXBPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqIE1lcmdlcyB0aGUgc3BlY2lmaWVkIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gb25lIG9ic2VydmFibGUgc2VxdWVuY2UgYnkgdXNpbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHdoZW5ldmVyIGFsbCBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgb3IgYW4gYXJyYXkgaGF2ZSBwcm9kdWNlZCBhbiBlbGVtZW50IGF0IGEgY29ycmVzcG9uZGluZyBpbmRleC5cbiAgICogVGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgYXJndW1lbnRzIG11c3QgYmUgYSBmdW5jdGlvbiB0byBpbnZva2UgZm9yIGVhY2ggc2VyaWVzIG9mIGVsZW1lbnRzIGF0IGNvcnJlc3BvbmRpbmcgaW5kZXhlcyBpbiB0aGUgYXJncy5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgcmVzdWx0IG9mIGNvbWJpbmluZyBlbGVtZW50cyBvZiB0aGUgYXJncyB1c2luZyB0aGUgc3BlY2lmaWVkIHJlc3VsdCBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by56aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFyZ3VtZW50cycpOyB9XG5cbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgdmFyIHJlc3VsdFNlbGVjdG9yID0gaXNGdW5jdGlvbihhcmdzW2xlbiAtIDFdKSA/IGFyZ3MucG9wKCkgOiBhcmd1bWVudHNUb0FycmF5O1xuICAgIEFycmF5LmlzQXJyYXkoYXJnc1swXSkgJiYgKGFyZ3MgPSBhcmdzWzBdKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzO1xuICAgIGFyZ3MudW5zaGlmdChwYXJlbnQpO1xuXG4gICAgcmV0dXJuIG5ldyBaaXBPYnNlcnZhYmxlKGFyZ3MsIHJlc3VsdFNlbGVjdG9yKTtcbiAgfTtcblxuICAvKipcbiAgICogTWVyZ2VzIHRoZSBzcGVjaWZpZWQgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBvbmUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBieSB1c2luZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gd2hlbmV2ZXIgYWxsIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlcyBoYXZlIHByb2R1Y2VkIGFuIGVsZW1lbnQgYXQgYSBjb3JyZXNwb25kaW5nIGluZGV4LlxuICAgKiBAcGFyYW0gYXJndW1lbnRzIE9ic2VydmFibGUgc291cmNlcy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzdWx0U2VsZWN0b3IgRnVuY3Rpb24gdG8gaW52b2tlIGZvciBlYWNoIHNlcmllcyBvZiBlbGVtZW50cyBhdCBjb3JyZXNwb25kaW5nIGluZGV4ZXMgaW4gdGhlIHNvdXJjZXMuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHJlc3VsdCBvZiBjb21iaW5pbmcgZWxlbWVudHMgb2YgdGhlIHNvdXJjZXMgdXNpbmcgdGhlIHNwZWNpZmllZCByZXN1bHQgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqL1xuICBPYnNlcnZhYmxlLnppcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGFyZ3MgPSBpc0Z1bmN0aW9uKGFyZ3NbMV0pID8gYXJnc1swXS5jb25jYXQoYXJnc1sxXSkgOiBhcmdzWzBdO1xuICAgIH1cbiAgICB2YXIgZmlyc3QgPSBhcmdzLnNoaWZ0KCk7XG4gICAgcmV0dXJuIGZpcnN0LnppcC5hcHBseShmaXJzdCwgYXJncyk7XG4gIH07XG5cbmZ1bmN0aW9uIGZhbHNlRmFjdG9yeSgpIHsgcmV0dXJuIGZhbHNlOyB9XG5mdW5jdGlvbiBlbXB0eUFycmF5RmFjdG9yeSgpIHsgcmV0dXJuIFtdOyB9XG5mdW5jdGlvbiBhcmd1bWVudHNUb0FycmF5KCkge1xuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICByZXR1cm4gYXJncztcbn1cblxuLyoqXG4gKiBNZXJnZXMgdGhlIHNwZWNpZmllZCBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIG9uZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGJ5IHVzaW5nIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB3aGVuZXZlciBhbGwgb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2VzIG9yIGFuIGFycmF5IGhhdmUgcHJvZHVjZWQgYW4gZWxlbWVudCBhdCBhIGNvcnJlc3BvbmRpbmcgaW5kZXguXG4gKiBUaGUgbGFzdCBlbGVtZW50IGluIHRoZSBhcmd1bWVudHMgbXVzdCBiZSBhIGZ1bmN0aW9uIHRvIGludm9rZSBmb3IgZWFjaCBzZXJpZXMgb2YgZWxlbWVudHMgYXQgY29ycmVzcG9uZGluZyBpbmRleGVzIGluIHRoZSBhcmdzLlxuICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgcmVzdWx0IG9mIGNvbWJpbmluZyBlbGVtZW50cyBvZiB0aGUgYXJncyB1c2luZyB0aGUgc3BlY2lmaWVkIHJlc3VsdCBzZWxlY3RvciBmdW5jdGlvbi5cbiAqL1xub2JzZXJ2YWJsZVByb3RvLnppcEl0ZXJhYmxlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXJndW1lbnRzJyk7IH1cblxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBpc0Z1bmN0aW9uKGFyZ3NbbGVuIC0gMV0pID8gYXJncy5wb3AoKSA6IGFyZ3VtZW50c1RvQXJyYXk7XG5cbiAgdmFyIHBhcmVudCA9IHRoaXM7XG4gIGFyZ3MudW5zaGlmdChwYXJlbnQpO1xuICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICB2YXIgbiA9IGFyZ3MubGVuZ3RoLFxuICAgICAgcXVldWVzID0gYXJyYXlJbml0aWFsaXplKG4sIGVtcHR5QXJyYXlGYWN0b3J5KSxcbiAgICAgIGlzRG9uZSA9IGFycmF5SW5pdGlhbGl6ZShuLCBmYWxzZUZhY3RvcnkpO1xuXG4gICAgdmFyIHN1YnNjcmlwdGlvbnMgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbjsgaWR4KyspIHtcbiAgICAgIChmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgc291cmNlID0gYXJnc1tpXSwgc2FkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG5cbiAgICAgICAgKGlzQXJyYXlMaWtlKHNvdXJjZSkgfHwgaXNJdGVyYWJsZShzb3VyY2UpKSAmJiAoc291cmNlID0gb2JzZXJ2YWJsZUZyb20oc291cmNlKSk7XG5cbiAgICAgICAgc2FkLnNldERpc3Bvc2FibGUoc291cmNlLnN1YnNjcmliZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHF1ZXVlc1tpXS5wdXNoKHgpO1xuICAgICAgICAgIGlmIChxdWV1ZXMuZXZlcnkoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubGVuZ3RoID4gMDsgfSkpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZWRWYWx1ZXMgPSBxdWV1ZXMubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnNoaWZ0KCk7IH0pLFxuICAgICAgICAgICAgICAgIHJlcyA9IHRyeUNhdGNoKHJlc3VsdFNlbGVjdG9yKS5hcHBseShwYXJlbnQsIHF1ZXVlZFZhbHVlcyk7XG4gICAgICAgICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKHJlcy5lKTsgfVxuICAgICAgICAgICAgby5vbk5leHQocmVzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRG9uZS5maWx0ZXIoZnVuY3Rpb24gKHgsIGopIHsgcmV0dXJuIGogIT09IGk7IH0pLmV2ZXJ5KGlkZW50aXR5KSkge1xuICAgICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXNEb25lW2ldID0gdHJ1ZTtcbiAgICAgICAgICBpc0RvbmUuZXZlcnkoaWRlbnRpdHkpICYmIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBzdWJzY3JpcHRpb25zW2ldID0gc2FkO1xuICAgICAgfSkoaWR4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoc3Vic2NyaXB0aW9ucyk7XG4gIH0sIHBhcmVudCk7XG59O1xuXG4gIGZ1bmN0aW9uIGFzT2JzZXJ2YWJsZShzb3VyY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gc3Vic2NyaWJlKG8pIHsgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobyk7IH07XG4gIH1cblxuICAvKipcbiAgICogIEhpZGVzIHRoZSBpZGVudGl0eSBvZiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGhpZGVzIHRoZSBpZGVudGl0eSBvZiB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmFzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoYXNPYnNlcnZhYmxlKHRoaXMpLCB0aGlzKTtcbiAgfTtcblxuICB2YXIgRGVtYXRlcmlhbGl6ZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKERlbWF0ZXJpYWxpemVPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIERlbWF0ZXJpYWxpemVPYnNlcnZhYmxlKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBEZW1hdGVyaWFsaXplT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBEZW1hdGVyaWFsaXplT2JzZXJ2ZXIobykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGVtYXRlcmlhbGl6ZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgRGVtYXRlcmlhbGl6ZU9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhEZW1hdGVyaWFsaXplT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBEZW1hdGVyaWFsaXplT2JzZXJ2ZXIobykge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBEZW1hdGVyaWFsaXplT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkgeyB4LmFjY2VwdCh0aGlzLl9vKTsgfTtcbiAgICBEZW1hdGVyaWFsaXplT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHsgdGhpcy5fby5vbkVycm9yKGUpOyB9O1xuICAgIERlbWF0ZXJpYWxpemVPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9vLm9uQ29tcGxldGVkKCk7IH07XG5cbiAgICByZXR1cm4gRGVtYXRlcmlhbGl6ZU9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogRGVtYXRlcmlhbGl6ZXMgdGhlIGV4cGxpY2l0IG5vdGlmaWNhdGlvbiB2YWx1ZXMgb2YgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhcyBpbXBsaWNpdCBub3RpZmljYXRpb25zLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBleGhpYml0aW5nIHRoZSBiZWhhdmlvciBjb3JyZXNwb25kaW5nIHRvIHRoZSBzb3VyY2Ugc2VxdWVuY2UncyBub3RpZmljYXRpb24gdmFsdWVzLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmRlbWF0ZXJpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEZW1hdGVyaWFsaXplT2JzZXJ2YWJsZSh0aGlzKTtcbiAgfTtcblxuICB2YXIgRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmFibGUoc291cmNlLCBrZXlGbiwgY29tcGFyZXIpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5rZXlGbiA9IGtleUZuO1xuICAgICAgdGhpcy5jb21wYXJlciA9IGNvbXBhcmVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2ZXIobywgdGhpcy5rZXlGbiwgdGhpcy5jb21wYXJlcikpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2ZXIgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmVyKG8sIGtleUZuLCBjb21wYXJlcikge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMua2V5Rm4gPSBrZXlGbjtcbiAgICAgIHRoaXMuY29tcGFyZXIgPSBjb21wYXJlcjtcbiAgICAgIHRoaXMuaGFzQ3VycmVudEtleSA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXJyZW50S2V5ID0gbnVsbDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdmFyIGtleSA9IHgsIGNvbXBhcmVyRXF1YWxzO1xuICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5rZXlGbikpIHtcbiAgICAgICAga2V5ID0gdHJ5Q2F0Y2godGhpcy5rZXlGbikoeCk7XG4gICAgICAgIGlmIChrZXkgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLm8ub25FcnJvcihrZXkuZSk7IH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhhc0N1cnJlbnRLZXkpIHtcbiAgICAgICAgY29tcGFyZXJFcXVhbHMgPSB0cnlDYXRjaCh0aGlzLmNvbXBhcmVyKSh0aGlzLmN1cnJlbnRLZXksIGtleSk7XG4gICAgICAgIGlmIChjb21wYXJlckVxdWFscyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuby5vbkVycm9yKGNvbXBhcmVyRXF1YWxzLmUpOyB9XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaGFzQ3VycmVudEtleSB8fCAhY29tcGFyZXJFcXVhbHMpIHtcbiAgICAgICAgdGhpcy5oYXNDdXJyZW50S2V5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50S2V5ID0ga2V5O1xuICAgICAgICB0aGlzLm8ub25OZXh0KHgpO1xuICAgICAgfVxuICAgIH07XG4gICAgRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICB9O1xuICAgIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICogIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIG9ubHkgZGlzdGluY3QgY29udGlndW91cyBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlIGtleUZuIGFuZCB0aGUgY29tcGFyZXIuXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gW2tleUZuXSBBIGZ1bmN0aW9uIHRvIGNvbXB1dGUgdGhlIGNvbXBhcmlzb24ga2V5IGZvciBlYWNoIGVsZW1lbnQuIElmIG5vdCBwcm92aWRlZCwgaXQgcHJvamVjdHMgdGhlIHZhbHVlLlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJlcl0gRXF1YWxpdHkgY29tcGFyZXIgZm9yIGNvbXB1dGVkIGtleSB2YWx1ZXMuIElmIG5vdCBwcm92aWRlZCwgZGVmYXVsdHMgdG8gYW4gZXF1YWxpdHkgY29tcGFyZXIgZnVuY3Rpb24uXG4gICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2Ugb25seSBjb250YWluaW5nIHRoZSBkaXN0aW5jdCBjb250aWd1b3VzIGVsZW1lbnRzLCBiYXNlZCBvbiBhIGNvbXB1dGVkIGtleSB2YWx1ZSwgZnJvbSB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uZGlzdGluY3RVbnRpbENoYW5nZWQgPSBmdW5jdGlvbiAoa2V5Rm4sIGNvbXBhcmVyKSB7XG4gICAgY29tcGFyZXIgfHwgKGNvbXBhcmVyID0gZGVmYXVsdENvbXBhcmVyKTtcbiAgICByZXR1cm4gbmV3IERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2YWJsZSh0aGlzLCBrZXlGbiwgY29tcGFyZXIpO1xuICB9O1xuXG4gIHZhciBUYXBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRhcE9ic2VydmFibGUsX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUYXBPYnNlcnZhYmxlKHNvdXJjZSwgb2JzZXJ2ZXJPck9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fb04gPSBvYnNlcnZlck9yT25OZXh0O1xuICAgICAgdGhpcy5fb0UgPSBvbkVycm9yO1xuICAgICAgdGhpcy5fb0MgPSBvbkNvbXBsZXRlZDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRhcE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8sIHRoaXMpKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoSW5uZXJPYnNlcnZlciwgQWJzdHJhY3RPYnNlcnZlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvLCBwKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy50ID0gIXAuX29OIHx8IGlzRnVuY3Rpb24ocC5fb04pID9cbiAgICAgICAgb2JzZXJ2ZXJDcmVhdGUocC5fb04gfHwgbm9vcCwgcC5fb0UgfHwgbm9vcCwgcC5fb0MgfHwgbm9vcCkgOlxuICAgICAgICBwLl9vTjtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICBBYnN0cmFjdE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih4KSB7XG4gICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2godGhpcy50Lm9uTmV4dCkuY2FsbCh0aGlzLnQsIHgpO1xuICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgdGhpcy5vLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgICB0aGlzLm8ub25OZXh0KHgpO1xuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIHZhciByZXMgPSB0cnlDYXRjaCh0aGlzLnQub25FcnJvcikuY2FsbCh0aGlzLnQsIGVycik7XG4gICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5vLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgICB0aGlzLm8ub25FcnJvcihlcnIpO1xuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2godGhpcy50Lm9uQ29tcGxldGVkKS5jYWxsKHRoaXMudCk7XG4gICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5vLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgICB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRhcE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgKiAgSW52b2tlcyBhbiBhY3Rpb24gZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhbmQgaW52b2tlcyBhbiBhY3Rpb24gdXBvbiBncmFjZWZ1bCBvciBleGNlcHRpb25hbCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiAgVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgZm9yIGRlYnVnZ2luZywgbG9nZ2luZywgZXRjLiBvZiBxdWVyeSBiZWhhdmlvciBieSBpbnRlcmNlcHRpbmcgdGhlIG1lc3NhZ2Ugc3RyZWFtIHRvIHJ1biBhcmJpdHJhcnkgYWN0aW9ucyBmb3IgbWVzc2FnZXMgb24gdGhlIHBpcGVsaW5lLlxuICAqIEBwYXJhbSB7RnVuY3Rpb24gfCBPYnNlcnZlcn0gb2JzZXJ2ZXJPck9uTmV4dCBBY3Rpb24gdG8gaW52b2tlIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugb3IgYW4gby5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25FcnJvcl0gIEFjdGlvbiB0byBpbnZva2UgdXBvbiBleGNlcHRpb25hbCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS4gVXNlZCBpZiBvbmx5IHRoZSBvYnNlcnZlck9yT25OZXh0IHBhcmFtZXRlciBpcyBhbHNvIGEgZnVuY3Rpb24uXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gW29uQ29tcGxldGVkXSAgQWN0aW9uIHRvIGludm9rZSB1cG9uIGdyYWNlZnVsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLiBVc2VkIGlmIG9ubHkgdGhlIG9ic2VydmVyT3JPbk5leHQgcGFyYW1ldGVyIGlzIGFsc28gYSBmdW5jdGlvbi5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIHNvdXJjZSBzZXF1ZW5jZSB3aXRoIHRoZSBzaWRlLWVmZmVjdGluZyBiZWhhdmlvciBhcHBsaWVkLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG9bJ2RvJ10gPSBvYnNlcnZhYmxlUHJvdG8udGFwID0gb2JzZXJ2YWJsZVByb3RvLmRvQWN0aW9uID0gZnVuY3Rpb24gKG9ic2VydmVyT3JPbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSB7XG4gICAgcmV0dXJuIG5ldyBUYXBPYnNlcnZhYmxlKHRoaXMsIG9ic2VydmVyT3JPbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKTtcbiAgfTtcblxuICAvKipcbiAgKiAgSW52b2tlcyBhbiBhY3Rpb24gZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiAgVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgZm9yIGRlYnVnZ2luZywgbG9nZ2luZywgZXRjLiBvZiBxdWVyeSBiZWhhdmlvciBieSBpbnRlcmNlcHRpbmcgdGhlIG1lc3NhZ2Ugc3RyZWFtIHRvIHJ1biBhcmJpdHJhcnkgYWN0aW9ucyBmb3IgbWVzc2FnZXMgb24gdGhlIHBpcGVsaW5lLlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uTmV4dCBBY3Rpb24gdG8gaW52b2tlIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBzb3VyY2Ugc2VxdWVuY2Ugd2l0aCB0aGUgc2lkZS1lZmZlY3RpbmcgYmVoYXZpb3IgYXBwbGllZC5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmRvT25OZXh0ID0gb2JzZXJ2YWJsZVByb3RvLnRhcE9uTmV4dCA9IGZ1bmN0aW9uIChvbk5leHQsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gdGhpcy50YXAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24gKHgpIHsgb25OZXh0LmNhbGwodGhpc0FyZywgeCk7IH0gOiBvbk5leHQpO1xuICB9O1xuXG4gIC8qKlxuICAqICBJbnZva2VzIGFuIGFjdGlvbiB1cG9uIGV4Y2VwdGlvbmFsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqICBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCBmb3IgZGVidWdnaW5nLCBsb2dnaW5nLCBldGMuIG9mIHF1ZXJ5IGJlaGF2aW9yIGJ5IGludGVyY2VwdGluZyB0aGUgbWVzc2FnZSBzdHJlYW0gdG8gcnVuIGFyYml0cmFyeSBhY3Rpb25zIGZvciBtZXNzYWdlcyBvbiB0aGUgcGlwZWxpbmUuXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gb25FcnJvciBBY3Rpb24gdG8gaW52b2tlIHVwb24gZXhjZXB0aW9uYWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBzb3VyY2Ugc2VxdWVuY2Ugd2l0aCB0aGUgc2lkZS1lZmZlY3RpbmcgYmVoYXZpb3IgYXBwbGllZC5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmRvT25FcnJvciA9IG9ic2VydmFibGVQcm90by50YXBPbkVycm9yID0gZnVuY3Rpb24gKG9uRXJyb3IsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gdGhpcy50YXAobm9vcCwgdHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24gKGUpIHsgb25FcnJvci5jYWxsKHRoaXNBcmcsIGUpOyB9IDogb25FcnJvcik7XG4gIH07XG5cbiAgLyoqXG4gICogIEludm9rZXMgYW4gYWN0aW9uIHVwb24gZ3JhY2VmdWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIGZvciBkZWJ1Z2dpbmcsIGxvZ2dpbmcsIGV0Yy4gb2YgcXVlcnkgYmVoYXZpb3IgYnkgaW50ZXJjZXB0aW5nIHRoZSBtZXNzYWdlIHN0cmVhbSB0byBydW4gYXJiaXRyYXJ5IGFjdGlvbnMgZm9yIG1lc3NhZ2VzIG9uIHRoZSBwaXBlbGluZS5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlZCBBY3Rpb24gdG8gaW52b2tlIHVwb24gZ3JhY2VmdWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBzb3VyY2Ugc2VxdWVuY2Ugd2l0aCB0aGUgc2lkZS1lZmZlY3RpbmcgYmVoYXZpb3IgYXBwbGllZC5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmRvT25Db21wbGV0ZWQgPSBvYnNlcnZhYmxlUHJvdG8udGFwT25Db21wbGV0ZWQgPSBmdW5jdGlvbiAob25Db21wbGV0ZWQsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gdGhpcy50YXAobm9vcCwgbnVsbCwgdHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24gKCkgeyBvbkNvbXBsZXRlZC5jYWxsKHRoaXNBcmcpOyB9IDogb25Db21wbGV0ZWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgSW52b2tlcyBhIHNwZWNpZmllZCBhY3Rpb24gYWZ0ZXIgdGhlIHNvdXJjZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRlcm1pbmF0ZXMgZ3JhY2VmdWxseSBvciBleGNlcHRpb25hbGx5LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaW5hbGx5QWN0aW9uIEFjdGlvbiB0byBpbnZva2UgYWZ0ZXIgdGhlIHNvdXJjZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRlcm1pbmF0ZXMuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBTb3VyY2Ugc2VxdWVuY2Ugd2l0aCB0aGUgYWN0aW9uLWludm9raW5nIHRlcm1pbmF0aW9uIGJlaGF2aW9yIGFwcGxpZWQuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG9bJ2ZpbmFsbHknXSA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICB2YXIgc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdHJ5Q2F0Y2goc291cmNlLnN1YnNjcmliZSkuY2FsbChzb3VyY2UsIG9ic2VydmVyKTtcbiAgICAgIGlmIChzdWJzY3JpcHRpb24gPT09IGVycm9yT2JqKSB7XG4gICAgICAgIGFjdGlvbigpO1xuICAgICAgICByZXR1cm4gdGhyb3dlcihzdWJzY3JpcHRpb24uZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlzcG9zYWJsZUNyZWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gdHJ5Q2F0Y2goc3Vic2NyaXB0aW9uLmRpc3Bvc2UpLmNhbGwoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgIHIgPT09IGVycm9yT2JqICYmIHRocm93ZXIoci5lKTtcbiAgICAgIH0pO1xuICAgIH0sIHRoaXMpO1xuICB9O1xuXG4gIHZhciBJZ25vcmVFbGVtZW50c09ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoSWdub3JlRWxlbWVudHNPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gSWdub3JlRWxlbWVudHNPYnNlcnZhYmxlKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBJZ25vcmVFbGVtZW50c09ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIobykge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgfVxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uTmV4dCA9IG5vb3A7XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuby5vbkVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vbkVycm9yKGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gSWdub3JlRWxlbWVudHNPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICAqICBJZ25vcmVzIGFsbCBlbGVtZW50cyBpbiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGxlYXZpbmcgb25seSB0aGUgdGVybWluYXRpb24gbWVzc2FnZXMuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBlbXB0eSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgc2lnbmFscyB0ZXJtaW5hdGlvbiwgc3VjY2Vzc2Z1bCBvciBleGNlcHRpb25hbCwgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5pZ25vcmVFbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IElnbm9yZUVsZW1lbnRzT2JzZXJ2YWJsZSh0aGlzKTtcbiAgfTtcblxuICB2YXIgTWF0ZXJpYWxpemVPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhNYXRlcmlhbGl6ZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gTWF0ZXJpYWxpemVPYnNlcnZhYmxlKHNvdXJjZSwgZm4pIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTWF0ZXJpYWxpemVPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IE1hdGVyaWFsaXplT2JzZXJ2ZXIobykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTWF0ZXJpYWxpemVPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIE1hdGVyaWFsaXplT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE1hdGVyaWFsaXplT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBNYXRlcmlhbGl6ZU9ic2VydmVyKG8pIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTWF0ZXJpYWxpemVPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7IHRoaXMuX28ub25OZXh0KG5vdGlmaWNhdGlvbkNyZWF0ZU9uTmV4dCh4KSkgfTtcbiAgICBNYXRlcmlhbGl6ZU9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHRoaXMuX28ub25OZXh0KG5vdGlmaWNhdGlvbkNyZWF0ZU9uRXJyb3IoZSkpOyB0aGlzLl9vLm9uQ29tcGxldGVkKCk7IH07XG4gICAgTWF0ZXJpYWxpemVPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9vLm9uTmV4dChub3RpZmljYXRpb25DcmVhdGVPbkNvbXBsZXRlZCgpKTsgdGhpcy5fby5vbkNvbXBsZXRlZCgpOyB9O1xuXG4gICAgcmV0dXJuIE1hdGVyaWFsaXplT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiAgTWF0ZXJpYWxpemVzIHRoZSBpbXBsaWNpdCBub3RpZmljYXRpb25zIG9mIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYXMgZXhwbGljaXQgbm90aWZpY2F0aW9uIHZhbHVlcy5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgbWF0ZXJpYWxpemVkIG5vdGlmaWNhdGlvbiB2YWx1ZXMgZnJvbSB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLm1hdGVyaWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgTWF0ZXJpYWxpemVPYnNlcnZhYmxlKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgUmVwZWF0cyB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMuIElmIHRoZSByZXBlYXQgY291bnQgaXMgbm90IHNwZWNpZmllZCwgdGhlIHNlcXVlbmNlIHJlcGVhdHMgaW5kZWZpbml0ZWx5LlxuICAgKiBAcGFyYW0ge051bWJlcn0gW3JlcGVhdENvdW50XSAgTnVtYmVyIG9mIHRpbWVzIHRvIHJlcGVhdCB0aGUgc2VxdWVuY2UuIElmIG5vdCBwcm92aWRlZCwgcmVwZWF0cyB0aGUgc2VxdWVuY2UgaW5kZWZpbml0ZWx5LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2UgcHJvZHVjaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gc2VxdWVuY2UgcmVwZWF0ZWRseS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5yZXBlYXQgPSBmdW5jdGlvbiAocmVwZWF0Q291bnQpIHtcbiAgICByZXR1cm4gZW51bWVyYWJsZVJlcGVhdCh0aGlzLCByZXBlYXRDb3VudCkuY29uY2F0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICBSZXBlYXRzIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB0aW1lcyBvciB1bnRpbCBpdCBzdWNjZXNzZnVsbHkgdGVybWluYXRlcy4gSWYgdGhlIHJldHJ5IGNvdW50IGlzIG5vdCBzcGVjaWZpZWQsIGl0IHJldHJpZXMgaW5kZWZpbml0ZWx5LlxuICAgKiAgTm90ZSBpZiB5b3UgZW5jb3VudGVyIGFuIGVycm9yIGFuZCB3YW50IGl0IHRvIHJldHJ5IG9uY2UsIHRoZW4geW91IG11c3QgdXNlIC5yZXRyeSgyKTtcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogIHZhciByZXMgPSByZXRyaWVkID0gcmV0cnkucmVwZWF0KCk7XG4gICAqICB2YXIgcmVzID0gcmV0cmllZCA9IHJldHJ5LnJlcGVhdCgyKTtcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtyZXRyeUNvdW50XSAgTnVtYmVyIG9mIHRpbWVzIHRvIHJldHJ5IHRoZSBzZXF1ZW5jZS4gSWYgbm90IHByb3ZpZGVkLCByZXRyeSB0aGUgc2VxdWVuY2UgaW5kZWZpbml0ZWx5LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBwcm9kdWNpbmcgdGhlIGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBzZXF1ZW5jZSByZXBlYXRlZGx5IHVudGlsIGl0IHRlcm1pbmF0ZXMgc3VjY2Vzc2Z1bGx5LlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnJldHJ5ID0gZnVuY3Rpb24gKHJldHJ5Q291bnQpIHtcbiAgICByZXR1cm4gZW51bWVyYWJsZVJlcGVhdCh0aGlzLCByZXRyeUNvdW50KS5jYXRjaEVycm9yKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICBSZXBlYXRzIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSBzZXF1ZW5jZSB1cG9uIGVycm9yIGVhY2ggdGltZSB0aGUgbm90aWZpZXIgZW1pdHMgb3IgdW50aWwgaXQgc3VjY2Vzc2Z1bGx5IHRlcm1pbmF0ZXMuIFxuICAgKiAgaWYgdGhlIG5vdGlmaWVyIGNvbXBsZXRlcywgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UgY29tcGxldGVzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgdmFyIHRpbWVyID0gT2JzZXJ2YWJsZS50aW1lcig1MDApO1xuICAgKiAgdmFyIHNvdXJjZSA9IG9ic2VydmFibGUucmV0cnlXaGVuKHRpbWVyKTtcbiAgICogQHBhcmFtIHtPYnNlcnZhYmxlfSBbbm90aWZpZXJdIEFuIG9ic2VydmFibGUgdGhhdCB0cmlnZ2VycyB0aGUgcmV0cmllcyBvciBjb21wbGV0ZXMgdGhlIG9ic2VydmFibGUgd2l0aCBvbk5leHQgb3Igb25Db21wbGV0ZWQgcmVzcGVjdGl2ZWx5LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBwcm9kdWNpbmcgdGhlIGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBzZXF1ZW5jZSByZXBlYXRlZGx5IHVudGlsIGl0IHRlcm1pbmF0ZXMgc3VjY2Vzc2Z1bGx5LlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnJldHJ5V2hlbiA9IGZ1bmN0aW9uIChub3RpZmllcikge1xuICAgIHJldHVybiBlbnVtZXJhYmxlUmVwZWF0KHRoaXMpLmNhdGNoRXJyb3JXaGVuKG5vdGlmaWVyKTtcbiAgfTtcbiAgdmFyIFNjYW5PYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNjYW5PYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFNjYW5PYnNlcnZhYmxlKHNvdXJjZSwgYWNjdW11bGF0b3IsIGhhc1NlZWQsIHNlZWQpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yO1xuICAgICAgdGhpcy5oYXNTZWVkID0gaGFzU2VlZDtcbiAgICAgIHRoaXMuc2VlZCA9IHNlZWQ7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTY2FuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IFNjYW5PYnNlcnZlcihvLHRoaXMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNjYW5PYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFNjYW5PYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2Nhbk9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFNjYW5PYnNlcnZlcihvLCBwYXJlbnQpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fcCA9IHBhcmVudDtcbiAgICAgIHRoaXMuX2ZuID0gcGFyZW50LmFjY3VtdWxhdG9yO1xuICAgICAgdGhpcy5faHMgPSBwYXJlbnQuaGFzU2VlZDtcbiAgICAgIHRoaXMuX3MgPSBwYXJlbnQuc2VlZDtcbiAgICAgIHRoaXMuX2hhID0gZmFsc2U7XG4gICAgICB0aGlzLl9hID0gbnVsbDtcbiAgICAgIHRoaXMuX2h2ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pID0gMDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFNjYW5PYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAhdGhpcy5faHYgJiYgKHRoaXMuX2h2ID0gdHJ1ZSk7XG4gICAgICBpZiAodGhpcy5faGEpIHtcbiAgICAgICAgdGhpcy5fYSA9IHRyeUNhdGNoKHRoaXMuX2ZuKSh0aGlzLl9hLCB4LCB0aGlzLl9pLCB0aGlzLl9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2EgPSB0aGlzLl9ocyA/IHRyeUNhdGNoKHRoaXMuX2ZuKSh0aGlzLl9zLCB4LCB0aGlzLl9pLCB0aGlzLl9wKSA6IHg7XG4gICAgICAgIHRoaXMuX2hhID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9hID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5fby5vbkVycm9yKHRoaXMuX2EuZSk7IH1cbiAgICAgIHRoaXMuX28ub25OZXh0KHRoaXMuX2EpO1xuICAgICAgdGhpcy5faSsrO1xuICAgIH07XG5cbiAgICBTY2FuT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgU2Nhbk9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAhdGhpcy5faHYgJiYgdGhpcy5faHMgJiYgdGhpcy5fby5vbk5leHQodGhpcy5fcyk7XG4gICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTY2FuT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAqICBBcHBsaWVzIGFuIGFjY3VtdWxhdG9yIGZ1bmN0aW9uIG92ZXIgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhbmQgcmV0dXJucyBlYWNoIGludGVybWVkaWF0ZSByZXN1bHQuIFRoZSBvcHRpb25hbCBzZWVkIHZhbHVlIGlzIHVzZWQgYXMgdGhlIGluaXRpYWwgYWNjdW11bGF0b3IgdmFsdWUuXG4gICogIEZvciBhZ2dyZWdhdGlvbiBiZWhhdmlvciB3aXRoIG5vIGludGVybWVkaWF0ZSByZXN1bHRzLCBzZWUgT2JzZXJ2YWJsZS5hZ2dyZWdhdGUuXG4gICogQHBhcmFtIHtNaXhlZH0gW3NlZWRdIFRoZSBpbml0aWFsIGFjY3VtdWxhdG9yIHZhbHVlLlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IGFjY3VtdWxhdG9yIEFuIGFjY3VtdWxhdG9yIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb24gZWFjaCBlbGVtZW50LlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIGFjY3VtdWxhdGVkIHZhbHVlcy5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnNjYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhc1NlZWQgPSBmYWxzZSwgc2VlZCwgYWNjdW11bGF0b3IgPSBhcmd1bWVudHNbMF07XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGhhc1NlZWQgPSB0cnVlO1xuICAgICAgc2VlZCA9IGFyZ3VtZW50c1sxXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTY2FuT2JzZXJ2YWJsZSh0aGlzLCBhY2N1bXVsYXRvciwgaGFzU2VlZCwgc2VlZCk7XG4gIH07XG5cbiAgdmFyIFNraXBMYXN0T2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2tpcExhc3RPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFNraXBMYXN0T2JzZXJ2YWJsZShzb3VyY2UsIGMpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fYyA9IGM7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTa2lwTGFzdE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgU2tpcExhc3RPYnNlcnZlcihvLCB0aGlzLl9jKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBTa2lwTGFzdE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgU2tpcExhc3RPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2tpcExhc3RPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTa2lwTGFzdE9ic2VydmVyKG8sIGMpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fYyA9IGM7XG4gICAgICB0aGlzLl9xID0gW107XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTa2lwTGFzdE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX3EucHVzaCh4KTtcbiAgICAgIHRoaXMuX3EubGVuZ3RoID4gdGhpcy5fYyAmJiB0aGlzLl9vLm9uTmV4dCh0aGlzLl9xLnNoaWZ0KCkpO1xuICAgIH07XG5cbiAgICBTa2lwTGFzdE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIFNraXBMYXN0T2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNraXBMYXN0T2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiAgQnlwYXNzZXMgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGVsZW1lbnRzIGF0IHRoZSBlbmQgb2YgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBUaGlzIG9wZXJhdG9yIGFjY3VtdWxhdGVzIGEgcXVldWUgd2l0aCBhIGxlbmd0aCBlbm91Z2ggdG8gc3RvcmUgdGhlIGZpcnN0IGBjb3VudGAgZWxlbWVudHMuIEFzIG1vcmUgZWxlbWVudHMgYXJlXG4gICAqICByZWNlaXZlZCwgZWxlbWVudHMgYXJlIHRha2VuIGZyb20gdGhlIGZyb250IG9mIHRoZSBxdWV1ZSBhbmQgcHJvZHVjZWQgb24gdGhlIHJlc3VsdCBzZXF1ZW5jZS4gVGhpcyBjYXVzZXMgZWxlbWVudHMgdG8gYmUgZGVsYXllZC5cbiAgICogQHBhcmFtIGNvdW50IE51bWJlciBvZiBlbGVtZW50cyB0byBieXBhc3MgYXQgdGhlIGVuZCBvZiB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSBzb3VyY2Ugc2VxdWVuY2UgZWxlbWVudHMgZXhjZXB0IGZvciB0aGUgYnlwYXNzZWQgb25lcyBhdCB0aGUgZW5kLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnNraXBMYXN0ID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgaWYgKGNvdW50IDwgMCkgeyB0aHJvdyBuZXcgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IoKTsgfVxuICAgIHJldHVybiBuZXcgU2tpcExhc3RPYnNlcnZhYmxlKHRoaXMsIGNvdW50KTtcbiAgfTtcblxuICAvKipcbiAgICogIFByZXBlbmRzIGEgc2VxdWVuY2Ugb2YgdmFsdWVzIHRvIGFuIG9ic2VydmFibGUgc2VxdWVuY2Ugd2l0aCBhbiBvcHRpb25hbCBzY2hlZHVsZXIgYW5kIGFuIGFyZ3VtZW50IGxpc3Qgb2YgdmFsdWVzIHRvIHByZXBlbmQuXG4gICAqICBAZXhhbXBsZVxuICAgKiAgdmFyIHJlcyA9IHNvdXJjZS5zdGFydFdpdGgoMSwgMiwgMyk7XG4gICAqICB2YXIgcmVzID0gc291cmNlLnN0YXJ0V2l0aChSeC5TY2hlZHVsZXIudGltZW91dCwgMSwgMiwgMyk7XG4gICAqIEBwYXJhbSB7QXJndW1lbnRzfSBhcmdzIFRoZSBzcGVjaWZpZWQgdmFsdWVzIHRvIHByZXBlbmQgdG8gdGhlIG9ic2VydmFibGUgc2VxdWVuY2VcbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBzb3VyY2Ugc2VxdWVuY2UgcHJlcGVuZGVkIHdpdGggdGhlIHNwZWNpZmllZCB2YWx1ZXMuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc3RhcnRXaXRoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZXMsIHNjaGVkdWxlciwgc3RhcnQgPSAwO1xuICAgIGlmICghIWFyZ3VtZW50cy5sZW5ndGggJiYgaXNTY2hlZHVsZXIoYXJndW1lbnRzWzBdKSkge1xuICAgICAgc2NoZWR1bGVyID0gYXJndW1lbnRzWzBdO1xuICAgICAgc3RhcnQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZXIgPSBpbW1lZGlhdGVTY2hlZHVsZXI7XG4gICAgfVxuICAgIGZvcih2YXIgYXJncyA9IFtdLCBpID0gc3RhcnQsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykgeyBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTsgfVxuICAgIHJldHVybiBlbnVtZXJhYmxlT2YoW29ic2VydmFibGVGcm9tQXJyYXkoYXJncywgc2NoZWR1bGVyKSwgdGhpc10pLmNvbmNhdCgpO1xuICB9O1xuXG4gIHZhciBUYWtlTGFzdE9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUYWtlTGFzdE9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRha2VMYXN0T2JzZXJ2ZXIobywgYykge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9jID0gYztcbiAgICAgIHRoaXMuX3EgPSBbXTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRha2VMYXN0T2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fcS5wdXNoKHgpO1xuICAgICAgdGhpcy5fcS5sZW5ndGggPiB0aGlzLl9jICYmIHRoaXMuX3Euc2hpZnQoKTtcbiAgICB9O1xuXG4gICAgVGFrZUxhc3RPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBUYWtlTGFzdE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aGlsZSAodGhpcy5fcS5sZW5ndGggPiAwKSB7IHRoaXMuX28ub25OZXh0KHRoaXMuX3Euc2hpZnQoKSk7IH1cbiAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRha2VMYXN0T2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhIHNwZWNpZmllZCBudW1iZXIgb2YgY29udGlndW91cyBlbGVtZW50cyBmcm9tIHRoZSBlbmQgb2YgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBUaGlzIG9wZXJhdG9yIGFjY3VtdWxhdGVzIGEgYnVmZmVyIHdpdGggYSBsZW5ndGggZW5vdWdoIHRvIHN0b3JlIGVsZW1lbnRzIGNvdW50IGVsZW1lbnRzLiBVcG9uIGNvbXBsZXRpb24gb2ZcbiAgICogIHRoZSBzb3VyY2Ugc2VxdWVuY2UsIHRoaXMgYnVmZmVyIGlzIGRyYWluZWQgb24gdGhlIHJlc3VsdCBzZXF1ZW5jZS4gVGhpcyBjYXVzZXMgdGhlIGVsZW1lbnRzIHRvIGJlIGRlbGF5ZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gdGFrZSBmcm9tIHRoZSBlbmQgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBlbmQgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by50YWtlTGFzdCA9IGZ1bmN0aW9uIChjb3VudCkge1xuICAgIGlmIChjb3VudCA8IDApIHsgdGhyb3cgbmV3IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yKCk7IH1cbiAgICB2YXIgc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBUYWtlTGFzdE9ic2VydmVyKG8sIGNvdW50KSk7XG4gICAgfSwgc291cmNlKTtcbiAgfTtcblxub2JzZXJ2YWJsZVByb3RvLmZsYXRNYXBDb25jYXQgPSBvYnNlcnZhYmxlUHJvdG8uY29uY2F0TWFwID0gZnVuY3Rpb24oc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIG5ldyBGbGF0TWFwT2JzZXJ2YWJsZSh0aGlzLCBzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHRoaXNBcmcpLm1lcmdlKDEpO1xufTtcbiAgdmFyIE1hcE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE1hcE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBNYXBPYnNlcnZhYmxlKHNvdXJjZSwgc2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5zZWxlY3RvciA9IGJpbmRDYWxsYmFjayhzZWxlY3RvciwgdGhpc0FyZywgMyk7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbm5lck1hcChzZWxlY3Rvciwgc2VsZikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh4LCBpLCBvKSB7IHJldHVybiBzZWxlY3Rvci5jYWxsKHRoaXMsIHNlbGYuc2VsZWN0b3IoeCwgaSwgbyksIGksIG8pOyB9XG4gICAgfVxuXG4gICAgTWFwT2JzZXJ2YWJsZS5wcm90b3R5cGUuaW50ZXJuYWxNYXAgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgICAgIHJldHVybiBuZXcgTWFwT2JzZXJ2YWJsZSh0aGlzLnNvdXJjZSwgaW5uZXJNYXAoc2VsZWN0b3IsIHRoaXMpLCB0aGlzQXJnKTtcbiAgICB9O1xuXG4gICAgTWFwT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8sIHRoaXMuc2VsZWN0b3IsIHRoaXMpKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoSW5uZXJPYnNlcnZlciwgQWJzdHJhY3RPYnNlcnZlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvLCBzZWxlY3Rvciwgc291cmNlKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLmkgPSAwO1xuICAgICAgQWJzdHJhY3RPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih4KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5zZWxlY3RvcikoeCwgdGhpcy5pKyssIHRoaXMuc291cmNlKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLm8ub25FcnJvcihyZXN1bHQuZSk7IH1cbiAgICAgIHRoaXMuby5vbk5leHQocmVzdWx0KTtcbiAgICB9O1xuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTWFwT2JzZXJ2YWJsZTtcblxuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICogUHJvamVjdHMgZWFjaCBlbGVtZW50IG9mIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgaW50byBhIG5ldyBmb3JtIGJ5IGluY29ycG9yYXRpbmcgdGhlIGVsZW1lbnQncyBpbmRleC5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZWxlY3RvciBBIHRyYW5zZm9ybSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIHNvdXJjZSBlbGVtZW50OyB0aGUgc2Vjb25kIHBhcmFtZXRlciBvZiB0aGUgZnVuY3Rpb24gcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgdGhlIHNvdXJjZSBlbGVtZW50LlxuICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHdob3NlIGVsZW1lbnRzIGFyZSB0aGUgcmVzdWx0IG9mIGludm9raW5nIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50IG9mIHNvdXJjZS5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLm1hcCA9IG9ic2VydmFibGVQcm90by5zZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgICB2YXIgc2VsZWN0b3JGbiA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJyA/IHNlbGVjdG9yIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZWN0b3I7IH07XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBNYXBPYnNlcnZhYmxlID9cbiAgICAgIHRoaXMuaW50ZXJuYWxNYXAoc2VsZWN0b3JGbiwgdGhpc0FyZykgOlxuICAgICAgbmV3IE1hcE9ic2VydmFibGUodGhpcywgc2VsZWN0b3JGbiwgdGhpc0FyZyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGx1Y2tlcihhcmdzLCBsZW4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWFwcGVyKHgpIHtcbiAgICAgIHZhciBjdXJyZW50UHJvcCA9IHg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBwID0gY3VycmVudFByb3BbYXJnc1tpXV07XG4gICAgICAgIGlmICh0eXBlb2YgcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjdXJyZW50UHJvcCA9IHA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnRQcm9wO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIGEgc3BlY2lmaWVkIG5lc3RlZCBwcm9wZXJ0eSBmcm9tIGFsbCBlbGVtZW50cyBpblxuICAgKiB0aGUgT2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIHtBcmd1bWVudHN9IGFyZ3VtZW50cyBUaGUgbmVzdGVkIHByb3BlcnRpZXMgdG8gcGx1Y2suXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBSZXR1cm5zIGEgbmV3IE9ic2VydmFibGUgc2VxdWVuY2Ugb2YgcHJvcGVydHkgdmFsdWVzLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnBsdWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgaWYgKGxlbiA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ0xpc3Qgb2YgcHJvcGVydGllcyBjYW5ub3QgYmUgZW1wdHkuJyk7IH1cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHJldHVybiB0aGlzLm1hcChwbHVja2VyKGFyZ3MsIGxlbikpO1xuICB9O1xuXG5vYnNlcnZhYmxlUHJvdG8uZmxhdE1hcCA9IG9ic2VydmFibGVQcm90by5zZWxlY3RNYW55ID0gZnVuY3Rpb24oc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIG5ldyBGbGF0TWFwT2JzZXJ2YWJsZSh0aGlzLCBzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHRoaXNBcmcpLm1lcmdlQWxsKCk7XG59O1xuXG5cbi8vXG4vL1J4Lk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBXaXRoTWF4Q29uY3VycmVudCA9IGZ1bmN0aW9uKGxpbWl0LCBzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHRoaXNBcmcpIHtcbi8vICAgIHJldHVybiBuZXcgRmxhdE1hcE9ic2VydmFibGUodGhpcywgc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCB0aGlzQXJnKS5tZXJnZShsaW1pdCk7XG4vL307XG4vL1xuXG5SeC5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwTGF0ZXN0ID0gZnVuY3Rpb24oc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIG5ldyBGbGF0TWFwT2JzZXJ2YWJsZSh0aGlzLCBzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHRoaXNBcmcpLnN3aXRjaExhdGVzdCgpO1xufTtcbiAgdmFyIFNraXBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNraXBPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFNraXBPYnNlcnZhYmxlKHNvdXJjZSwgY291bnQpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5za2lwQ291bnQgPSBjb3VudDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBTa2lwT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8sIHRoaXMuc2tpcENvdW50KSk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG8sIGMpIHtcbiAgICAgIHRoaXMuYyA9IGM7XG4gICAgICB0aGlzLnIgPSBjO1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgfVxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uTmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAodGhpcy5yIDw9IDApIHsgXG4gICAgICAgIHRoaXMuby5vbk5leHQoeCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnItLTtcbiAgICAgIH1cbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgdGhpcy5vLm9uRXJyb3IoZSk7IH1cbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgdGhpcy5vLm9uQ29tcGxldGVkKCk7IH1cbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIFNraXBPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7ICBcbiAgXG4gIC8qKlxuICAgKiBCeXBhc3NlcyBhIHNwZWNpZmllZCBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm5zIHRoZSByZW1haW5pbmcgZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYmVmb3JlIHJldHVybmluZyB0aGUgcmVtYWluaW5nIGVsZW1lbnRzLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyB0aGF0IG9jY3VyIGFmdGVyIHRoZSBzcGVjaWZpZWQgaW5kZXggaW4gdGhlIGlucHV0IHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnNraXAgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICBpZiAoY291bnQgPCAwKSB7IHRocm93IG5ldyBBcmd1bWVudE91dE9mUmFuZ2VFcnJvcigpOyB9XG4gICAgcmV0dXJuIG5ldyBTa2lwT2JzZXJ2YWJsZSh0aGlzLCBjb3VudCk7XG4gIH07XG4gIHZhciBTa2lwV2hpbGVPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTa2lwV2hpbGVPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFNraXBXaGlsZU9ic2VydmFibGUoc291cmNlLCBmbikge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU2tpcFdoaWxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBTa2lwV2hpbGVPYnNlcnZlcihvLCB0aGlzKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBTa2lwV2hpbGVPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFNraXBXaGlsZU9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTa2lwV2hpbGVPYnNlcnZlciwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIFNraXBXaGlsZU9ic2VydmVyKG8sIHApIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fcCA9IHA7XG4gICAgICB0aGlzLl9pID0gMDtcbiAgICAgIHRoaXMuX3IgPSBmYWxzZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFNraXBXaGlsZU9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIGlmICghdGhpcy5fcikge1xuICAgICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2godGhpcy5fcC5fZm4pKHgsIHRoaXMuX2krKywgdGhpcy5fcCk7XG4gICAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLl9vLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgICAgIHRoaXMuX3IgPSAhcmVzO1xuICAgICAgfVxuICAgICAgdGhpcy5fciAmJiB0aGlzLl9vLm9uTmV4dCh4KTtcbiAgICB9O1xuICAgIFNraXBXaGlsZU9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHRoaXMuX28ub25FcnJvcihlKTsgfTtcbiAgICBTa2lwV2hpbGVPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9vLm9uQ29tcGxldGVkKCk7IH07XG5cbiAgICByZXR1cm4gU2tpcFdoaWxlT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiAgQnlwYXNzZXMgZWxlbWVudHMgaW4gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhcyBsb25nIGFzIGEgc3BlY2lmaWVkIGNvbmRpdGlvbiBpcyB0cnVlIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlbWFpbmluZyBlbGVtZW50cy5cbiAgICogIFRoZSBlbGVtZW50J3MgaW5kZXggaXMgdXNlZCBpbiB0aGUgbG9naWMgb2YgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAgICpcbiAgICogIHZhciByZXMgPSBzb3VyY2Uuc2tpcFdoaWxlKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgPCAxMDsgfSk7XG4gICAqICB2YXIgcmVzID0gc291cmNlLnNraXBXaGlsZShmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7IHJldHVybiB2YWx1ZSA8IDEwIHx8IGluZGV4IDwgMTA7IH0pO1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgQSBmdW5jdGlvbiB0byB0ZXN0IGVhY2ggZWxlbWVudCBmb3IgYSBjb25kaXRpb247IHRoZSBzZWNvbmQgcGFyYW1ldGVyIG9mIHRoZSBmdW5jdGlvbiByZXByZXNlbnRzIHRoZSBpbmRleCBvZiB0aGUgc291cmNlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBpbnB1dCBzZXF1ZW5jZSBzdGFydGluZyBhdCB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGluZWFyIHNlcmllcyB0aGF0IGRvZXMgbm90IHBhc3MgdGhlIHRlc3Qgc3BlY2lmaWVkIGJ5IHByZWRpY2F0ZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5za2lwV2hpbGUgPSBmdW5jdGlvbiAocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgdmFyIGZuID0gYmluZENhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gICAgcmV0dXJuIG5ldyBTa2lwV2hpbGVPYnNlcnZhYmxlKHRoaXMsIGZuKTtcbiAgfTtcblxuICB2YXIgVGFrZU9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGFrZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgXG4gICAgZnVuY3Rpb24gVGFrZU9ic2VydmFibGUoc291cmNlLCBjb3VudCkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLnRha2VDb3VudCA9IGNvdW50O1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIFRha2VPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobywgdGhpcy50YWtlQ291bnQpKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIobywgYykge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMuYyA9IGM7XG4gICAgICB0aGlzLnIgPSBjO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUgPSB7XG4gICAgICBvbk5leHQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKHRoaXMuci0tID4gMCkge1xuICAgICAgICAgIHRoaXMuby5vbk5leHQoeCk7XG4gICAgICAgICAgdGhpcy5yIDw9IDAgJiYgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5vLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uQ29tcGxldGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIFRha2VPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7ICBcbiAgXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhIHNwZWNpZmllZCBudW1iZXIgb2YgY29udGlndW91cyBlbGVtZW50cyBmcm9tIHRoZSBzdGFydCBvZiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLCB1c2luZyB0aGUgc3BlY2lmaWVkIHNjaGVkdWxlciBmb3IgdGhlIGVkZ2UgY2FzZSBvZiB0YWtlKDApLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byByZXR1cm4uXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBTY2hlZHVsZXIgdXNlZCB0byBwcm9kdWNlIGFuIE9uQ29tcGxldGVkIG1lc3NhZ2UgaW4gY2FzZSA8cGFyYW1yZWYgbmFtZT1cImNvdW50IGNvdW50PC9wYXJhbXJlZj4gaXMgc2V0IHRvIDAuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGlucHV0IHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnRha2UgPSBmdW5jdGlvbiAoY291bnQsIHNjaGVkdWxlcikge1xuICAgIGlmIChjb3VudCA8IDApIHsgdGhyb3cgbmV3IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yKCk7IH1cbiAgICBpZiAoY291bnQgPT09IDApIHsgcmV0dXJuIG9ic2VydmFibGVFbXB0eShzY2hlZHVsZXIpOyB9XG4gICAgcmV0dXJuIG5ldyBUYWtlT2JzZXJ2YWJsZSh0aGlzLCBjb3VudCk7XG4gIH07XG5cbiAgdmFyIFRha2VXaGlsZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRha2VXaGlsZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVGFrZVdoaWxlT2JzZXJ2YWJsZShzb3VyY2UsIGZuKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUYWtlV2hpbGVPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IFRha2VXaGlsZU9ic2VydmVyKG8sIHRoaXMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRha2VXaGlsZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgVGFrZVdoaWxlT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRha2VXaGlsZU9ic2VydmVyLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gVGFrZVdoaWxlT2JzZXJ2ZXIobywgcCkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9wID0gcDtcbiAgICAgIHRoaXMuX2kgPSAwO1xuICAgICAgdGhpcy5fciA9IHRydWU7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUYWtlV2hpbGVPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAodGhpcy5fcikge1xuICAgICAgICB0aGlzLl9yID0gdHJ5Q2F0Y2godGhpcy5fcC5fZm4pKHgsIHRoaXMuX2krKywgdGhpcy5fcCk7XG4gICAgICAgIGlmICh0aGlzLl9yID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5fby5vbkVycm9yKHRoaXMuX3IuZSk7IH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9yKSB7XG4gICAgICAgIHRoaXMuX28ub25OZXh0KHgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgVGFrZVdoaWxlT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHsgdGhpcy5fby5vbkVycm9yKGUpOyB9O1xuICAgIFRha2VXaGlsZU9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX28ub25Db21wbGV0ZWQoKTsgfTtcblxuICAgIHJldHVybiBUYWtlV2hpbGVPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGVsZW1lbnRzIGZyb20gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhcyBsb25nIGFzIGEgc3BlY2lmaWVkIGNvbmRpdGlvbiBpcyB0cnVlLlxuICAgKiAgVGhlIGVsZW1lbnQncyBpbmRleCBpcyB1c2VkIGluIHRoZSBsb2dpYyBvZiB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgQSBmdW5jdGlvbiB0byB0ZXN0IGVhY2ggZWxlbWVudCBmb3IgYSBjb25kaXRpb247IHRoZSBzZWNvbmQgcGFyYW1ldGVyIG9mIHRoZSBmdW5jdGlvbiByZXByZXNlbnRzIHRoZSBpbmRleCBvZiB0aGUgc291cmNlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBpbnB1dCBzZXF1ZW5jZSB0aGF0IG9jY3VyIGJlZm9yZSB0aGUgZWxlbWVudCBhdCB3aGljaCB0aGUgdGVzdCBubyBsb25nZXIgcGFzc2VzLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnRha2VXaGlsZSA9IGZ1bmN0aW9uIChwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICB2YXIgZm4gPSBiaW5kQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgICByZXR1cm4gbmV3IFRha2VXaGlsZU9ic2VydmFibGUodGhpcywgZm4pO1xuICB9O1xuXG4gIHZhciBGaWx0ZXJPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhGaWx0ZXJPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gRmlsdGVyT2JzZXJ2YWJsZShzb3VyY2UsIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLnByZWRpY2F0ZSA9IGJpbmRDYWxsYmFjayhwcmVkaWNhdGUsIHRoaXNBcmcsIDMpO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRmlsdGVyT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8sIHRoaXMucHJlZGljYXRlLCB0aGlzKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlubmVyUHJlZGljYXRlKHByZWRpY2F0ZSwgc2VsZikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHgsIGksIG8pIHsgcmV0dXJuIHNlbGYucHJlZGljYXRlKHgsIGksIG8pICYmIHByZWRpY2F0ZS5jYWxsKHRoaXMsIHgsIGksIG8pOyB9XG4gICAgfVxuXG4gICAgRmlsdGVyT2JzZXJ2YWJsZS5wcm90b3R5cGUuaW50ZXJuYWxGaWx0ZXIgPSBmdW5jdGlvbihwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICAgIHJldHVybiBuZXcgRmlsdGVyT2JzZXJ2YWJsZSh0aGlzLnNvdXJjZSwgaW5uZXJQcmVkaWNhdGUocHJlZGljYXRlLCB0aGlzKSwgdGhpc0FyZyk7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKElubmVyT2JzZXJ2ZXIsIEFic3RyYWN0T2JzZXJ2ZXIpO1xuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIobywgcHJlZGljYXRlLCBzb3VyY2UpIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIEFic3RyYWN0T2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgdmFyIHNob3VsZFlpZWxkID0gdHJ5Q2F0Y2godGhpcy5wcmVkaWNhdGUpKHgsIHRoaXMuaSsrLCB0aGlzLnNvdXJjZSk7XG4gICAgICBpZiAoc2hvdWxkWWllbGQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm8ub25FcnJvcihzaG91bGRZaWVsZC5lKTtcbiAgICAgIH1cbiAgICAgIHNob3VsZFlpZWxkICYmIHRoaXMuby5vbk5leHQoeCk7XG4gICAgfTtcblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEZpbHRlck9ic2VydmFibGU7XG5cbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAqICBGaWx0ZXJzIHRoZSBlbGVtZW50cyBvZiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGJhc2VkIG9uIGEgcHJlZGljYXRlIGJ5IGluY29ycG9yYXRpbmcgdGhlIGVsZW1lbnQncyBpbmRleC5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgQSBmdW5jdGlvbiB0byB0ZXN0IGVhY2ggc291cmNlIGVsZW1lbnQgZm9yIGEgY29uZGl0aW9uOyB0aGUgc2Vjb25kIHBhcmFtZXRlciBvZiB0aGUgZnVuY3Rpb24gcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgdGhlIHNvdXJjZSBlbGVtZW50LlxuICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgZWxlbWVudHMgZnJvbSB0aGUgaW5wdXQgc2VxdWVuY2UgdGhhdCBzYXRpc2Z5IHRoZSBjb25kaXRpb24uXG4gICovXG4gIG9ic2VydmFibGVQcm90by5maWx0ZXIgPSBvYnNlcnZhYmxlUHJvdG8ud2hlcmUgPSBmdW5jdGlvbiAocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBGaWx0ZXJPYnNlcnZhYmxlID8gdGhpcy5pbnRlcm5hbEZpbHRlcihwcmVkaWNhdGUsIHRoaXNBcmcpIDpcbiAgICAgIG5ldyBGaWx0ZXJPYnNlcnZhYmxlKHRoaXMsIHByZWRpY2F0ZSwgdGhpc0FyZyk7XG4gIH07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNiT2JzZXJ2YWJsZShmbiwgY3R4LCBzZWxlY3RvciwgYXJncykge1xuICB2YXIgbyA9IG5ldyBBc3luY1N1YmplY3QoKTtcblxuICBhcmdzLnB1c2goY3JlYXRlQ2JIYW5kbGVyKG8sIGN0eCwgc2VsZWN0b3IpKTtcbiAgZm4uYXBwbHkoY3R4LCBhcmdzKTtcblxuICByZXR1cm4gby5hc09ic2VydmFibGUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2JIYW5kbGVyKG8sIGN0eCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN1bHRzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IHJlc3VsdHNbaV0gPSBhcmd1bWVudHNbaV07IH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgcmVzdWx0cyA9IHRyeUNhdGNoKHNlbGVjdG9yKS5hcHBseShjdHgsIHJlc3VsdHMpO1xuICAgICAgaWYgKHJlc3VsdHMgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IocmVzdWx0cy5lKTsgfVxuICAgICAgby5vbk5leHQocmVzdWx0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIG8ub25OZXh0KHJlc3VsdHNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgby5vbk5leHQocmVzdWx0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgby5vbkNvbXBsZXRlZCgpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB3aXRoIGEgY2FsbGJhY2sgYXMgdGhlIGxhc3QgcGFyYW1ldGVyIHRvIGNvbnZlcnQgdG8gYW4gT2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjdHhdIFRoZSBjb250ZXh0IGZvciB0aGUgZnVuYyBwYXJhbWV0ZXIgdG8gYmUgZXhlY3V0ZWQuICBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byB1bmRlZmluZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbc2VsZWN0b3JdIEEgc2VsZWN0b3Igd2hpY2ggdGFrZXMgdGhlIGFyZ3VtZW50cyBmcm9tIHRoZSBjYWxsYmFjayB0byBwcm9kdWNlIGEgc2luZ2xlIGl0ZW0gdG8geWllbGQgb24gbmV4dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiwgd2hlbiBleGVjdXRlZCB3aXRoIHRoZSByZXF1aXJlZCBwYXJhbWV0ZXJzIG1pbnVzIHRoZSBjYWxsYmFjaywgcHJvZHVjZXMgYW4gT2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aXRoIGEgc2luZ2xlIHZhbHVlIG9mIHRoZSBhcmd1bWVudHMgdG8gdGhlIGNhbGxiYWNrIGFzIGFuIGFycmF5LlxuICovXG5PYnNlcnZhYmxlLmZyb21DYWxsYmFjayA9IGZ1bmN0aW9uIChmbiwgY3R4LCBzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHR5cGVvZiBjdHggPT09ICd1bmRlZmluZWQnICYmIChjdHggPSB0aGlzKTsgXG5cbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICByZXR1cm4gY3JlYXRlQ2JPYnNlcnZhYmxlKGZuLCBjdHgsIHNlbGVjdG9yLCBhcmdzKTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGVPYnNlcnZhYmxlKGZuLCBjdHgsIHNlbGVjdG9yLCBhcmdzKSB7XG4gIHZhciBvID0gbmV3IEFzeW5jU3ViamVjdCgpO1xuXG4gIGFyZ3MucHVzaChjcmVhdGVOb2RlSGFuZGxlcihvLCBjdHgsIHNlbGVjdG9yKSk7XG4gIGZuLmFwcGx5KGN0eCwgYXJncyk7XG5cbiAgcmV0dXJuIG8uYXNPYnNlcnZhYmxlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGVIYW5kbGVyKG8sIGN0eCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICAgIHZhciBlcnIgPSBhcmd1bWVudHNbMF07XG4gICAgaWYgKGVycikgeyByZXR1cm4gby5vbkVycm9yKGVycik7IH1cblxuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN1bHRzID0gW107XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGxlbjsgaSsrKSB7IHJlc3VsdHNbaSAtIDFdID0gYXJndW1lbnRzW2ldOyB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgIHZhciByZXN1bHRzID0gdHJ5Q2F0Y2goc2VsZWN0b3IpLmFwcGx5KGN0eCwgcmVzdWx0cyk7XG4gICAgICBpZiAocmVzdWx0cyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihyZXN1bHRzLmUpOyB9XG4gICAgICBvLm9uTmV4dChyZXN1bHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgby5vbk5leHQocmVzdWx0c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvLm9uTmV4dChyZXN1bHRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvLm9uQ29tcGxldGVkKCk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBOb2RlLmpzIGNhbGxiYWNrIHN0eWxlIGZ1bmN0aW9uIHRvIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuICBUaGlzIG11c3QgYmUgaW4gZnVuY3Rpb24gKGVyciwgLi4uKSBmb3JtYXQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbFxuICogQHBhcmFtIHtNaXhlZH0gW2N0eF0gVGhlIGNvbnRleHQgZm9yIHRoZSBmdW5jIHBhcmFtZXRlciB0byBiZSBleGVjdXRlZC4gIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtzZWxlY3Rvcl0gQSBzZWxlY3RvciB3aGljaCB0YWtlcyB0aGUgYXJndW1lbnRzIGZyb20gdGhlIGNhbGxiYWNrIG1pbnVzIHRoZSBlcnJvciB0byBwcm9kdWNlIGEgc2luZ2xlIGl0ZW0gdG8geWllbGQgb24gbmV4dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQW4gYXN5bmMgZnVuY3Rpb24gd2hpY2ggd2hlbiBhcHBsaWVkLCByZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2Ugd2l0aCB0aGUgY2FsbGJhY2sgYXJndW1lbnRzIGFzIGFuIGFycmF5LlxuICovXG5PYnNlcnZhYmxlLmZyb21Ob2RlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZm4sIGN0eCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB0eXBlb2YgY3R4ID09PSAndW5kZWZpbmVkJyAmJiAoY3R4ID0gdGhpcyk7IFxuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICByZXR1cm4gY3JlYXRlTm9kZU9ic2VydmFibGUoZm4sIGN0eCwgc2VsZWN0b3IsIGFyZ3MpO1xuICB9O1xufTtcblxuICBmdW5jdGlvbiBpc05vZGVMaXN0KGVsKSB7XG4gICAgaWYgKHJvb3QuU3RhdGljTm9kZUxpc3QpIHtcbiAgICAgIC8vIElFOCBTcGVjaWZpY1xuICAgICAgLy8gaW5zdGFuY2VvZiBpcyBzbG93ZXIgdGhhbiBPYmplY3QjdG9TdHJpbmcsIGJ1dCBPYmplY3QjdG9TdHJpbmcgd2lsbCBub3Qgd29yayBhcyBpbnRlbmRlZCBpbiBJRThcbiAgICAgIHJldHVybiBlbCBpbnN0YW5jZW9mIHJvb3QuU3RhdGljTm9kZUxpc3QgfHwgZWwgaW5zdGFuY2VvZiByb290Lk5vZGVMaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsKSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBMaXN0ZW5EaXNwb3NhYmxlKGUsIG4sIGZuKSB7XG4gICAgdGhpcy5fZSA9IGU7XG4gICAgdGhpcy5fbiA9IG47XG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9lLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fbiwgdGhpcy5fZm4sIGZhbHNlKTtcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfVxuICBMaXN0ZW5EaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLl9lLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fbiwgdGhpcy5fZm4sIGZhbHNlKTtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIgKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgZGlzcG9zYWJsZXMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpO1xuXG4gICAgLy8gQXN1bWUgTm9kZUxpc3Qgb3IgSFRNTENvbGxlY3Rpb25cbiAgICB2YXIgZWxlbVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsKTtcbiAgICBpZiAoaXNOb2RlTGlzdChlbCkgfHwgZWxlbVRvU3RyaW5nID09PSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWwubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZGlzcG9zYWJsZXMuYWRkKGNyZWF0ZUV2ZW50TGlzdGVuZXIoZWwuaXRlbShpKSwgZXZlbnROYW1lLCBoYW5kbGVyKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbCkge1xuICAgICAgZGlzcG9zYWJsZXMuYWRkKG5ldyBMaXN0ZW5EaXNwb3NhYmxlKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzcG9zYWJsZXM7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBvcHRpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gdXNlIG5hdGl2ZSBldmVudHMgb25seVxuICAgKi9cbiAgUnguY29uZmlnLnVzZU5hdGl2ZUV2ZW50cyA9IGZhbHNlO1xuXG4gIHZhciBFdmVudE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRXZlbnRPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEV2ZW50T2JzZXJ2YWJsZShlbCwgbmFtZSwgZm4pIHtcbiAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICB0aGlzLl9uID0gbmFtZTtcbiAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIYW5kbGVyKG8sIGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gYXJndW1lbnRzWzBdO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICByZXN1bHRzID0gdHJ5Q2F0Y2goZm4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgaWYgKHJlc3VsdHMgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IocmVzdWx0cy5lKTsgfVxuICAgICAgICB9XG4gICAgICAgIG8ub25OZXh0KHJlc3VsdHMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBFdmVudE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIGNyZWF0ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgIHRoaXMuX2VsLFxuICAgICAgICB0aGlzLl9uLFxuICAgICAgICBjcmVhdGVIYW5kbGVyKG8sIHRoaXMuX2ZuKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBFdmVudE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGJ5IGFkZGluZyBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgbWF0Y2hpbmcgRE9NRWxlbWVudCBvciBlYWNoIGl0ZW0gaW4gdGhlIE5vZGVMaXN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBUaGUgRE9NRWxlbWVudCBvciBOb2RlTGlzdCB0byBhdHRhY2ggYSBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBUaGUgZXZlbnQgbmFtZSB0byBhdHRhY2ggdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtzZWxlY3Rvcl0gQSBzZWxlY3RvciB3aGljaCB0YWtlcyB0aGUgYXJndW1lbnRzIGZyb20gdGhlIGV2ZW50IGhhbmRsZXIgdG8gcHJvZHVjZSBhIHNpbmdsZSBpdGVtIHRvIHlpZWxkIG9uIG5leHQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIG9mIGV2ZW50cyBmcm9tIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBhbmQgdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICovXG4gIE9ic2VydmFibGUuZnJvbUV2ZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgc2VsZWN0b3IpIHtcbiAgICAvLyBOb2RlLmpzIHNwZWNpZmljXG4gICAgaWYgKGVsZW1lbnQuYWRkTGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBmcm9tRXZlbnRQYXR0ZXJuKFxuICAgICAgICBmdW5jdGlvbiAoaCkgeyBlbGVtZW50LmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgaCk7IH0sXG4gICAgICAgIGZ1bmN0aW9uIChoKSB7IGVsZW1lbnQucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBoKTsgfSxcbiAgICAgICAgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIC8vIFVzZSBvbmx5IGlmIG5vbi1uYXRpdmUgZXZlbnRzIGFyZSBhbGxvd2VkXG4gICAgaWYgKCFSeC5jb25maWcudXNlTmF0aXZlRXZlbnRzKSB7XG4gICAgICAvLyBIYW5kbGVzIGpxLCBBbmd1bGFyLmpzLCBaZXB0bywgTWFyaW9uZXR0ZSwgRW1iZXIuanNcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZWxlbWVudC5vZmYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZyb21FdmVudFBhdHRlcm4oXG4gICAgICAgICAgZnVuY3Rpb24gKGgpIHsgZWxlbWVudC5vbihldmVudE5hbWUsIGgpOyB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChoKSB7IGVsZW1lbnQub2ZmKGV2ZW50TmFtZSwgaCk7IH0sXG4gICAgICAgICAgc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRXZlbnRPYnNlcnZhYmxlKGVsZW1lbnQsIGV2ZW50TmFtZSwgc2VsZWN0b3IpLnB1Ymxpc2goKS5yZWZDb3VudCgpO1xuICB9O1xuXG4gIHZhciBFdmVudFBhdHRlcm5PYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEV2ZW50UGF0dGVybk9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRXZlbnRQYXR0ZXJuT2JzZXJ2YWJsZShhZGQsIGRlbCwgZm4pIHtcbiAgICAgIHRoaXMuX2FkZCA9IGFkZDtcbiAgICAgIHRoaXMuX2RlbCA9IGRlbDtcbiAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIYW5kbGVyKG8sIGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gYXJndW1lbnRzWzBdO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICByZXN1bHRzID0gdHJ5Q2F0Y2goZm4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgaWYgKHJlc3VsdHMgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IocmVzdWx0cy5lKTsgfVxuICAgICAgICB9XG4gICAgICAgIG8ub25OZXh0KHJlc3VsdHMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBFdmVudFBhdHRlcm5PYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBmbiA9IGNyZWF0ZUhhbmRsZXIobywgdGhpcy5fZm4pO1xuICAgICAgdmFyIHJldHVyblZhbHVlID0gdGhpcy5fYWRkKGZuKTtcbiAgICAgIHJldHVybiBuZXcgRXZlbnRQYXR0ZXJuRGlzcG9zYWJsZSh0aGlzLl9kZWwsIGZuLCByZXR1cm5WYWx1ZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIEV2ZW50UGF0dGVybkRpc3Bvc2FibGUoZGVsLCBmbiwgcmV0KSB7XG4gICAgICB0aGlzLl9kZWwgPSBkZWw7XG4gICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgdGhpcy5fcmV0ID0gcmV0O1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgRXZlbnRQYXR0ZXJuRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgaXNGdW5jdGlvbih0aGlzLl9kZWwpICYmIHRoaXMuX2RlbCh0aGlzLl9mbiwgdGhpcy5fcmV0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIEV2ZW50UGF0dGVybk9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGZyb20gYW4gZXZlbnQgZW1pdHRlciB2aWEgYW4gYWRkSGFuZGxlci9yZW1vdmVIYW5kbGVyIHBhaXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGFkZEhhbmRsZXIgVGhlIGZ1bmN0aW9uIHRvIGFkZCBhIGhhbmRsZXIgdG8gdGhlIGVtaXR0ZXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZW1vdmVIYW5kbGVyXSBUaGUgb3B0aW9uYWwgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgaGFuZGxlciBmcm9tIGFuIGVtaXR0ZXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtzZWxlY3Rvcl0gQSBzZWxlY3RvciB3aGljaCB0YWtlcyB0aGUgYXJndW1lbnRzIGZyb20gdGhlIGV2ZW50IGhhbmRsZXIgdG8gcHJvZHVjZSBhIHNpbmdsZSBpdGVtIHRvIHlpZWxkIG9uIG5leHQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHdoaWNoIHdyYXBzIGFuIGV2ZW50IGZyb20gYW4gZXZlbnQgZW1pdHRlclxuICAgKi9cbiAgdmFyIGZyb21FdmVudFBhdHRlcm4gPSBPYnNlcnZhYmxlLmZyb21FdmVudFBhdHRlcm4gPSBmdW5jdGlvbiAoYWRkSGFuZGxlciwgcmVtb3ZlSGFuZGxlciwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50UGF0dGVybk9ic2VydmFibGUoYWRkSGFuZGxlciwgcmVtb3ZlSGFuZGxlciwgc2VsZWN0b3IpLnB1Ymxpc2goKS5yZWZDb3VudCgpO1xuICB9O1xuXG4gIHZhciBGcm9tUHJvbWlzZU9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRnJvbVByb21pc2VPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEZyb21Qcm9taXNlT2JzZXJ2YWJsZShwLCBzKSB7XG4gICAgICB0aGlzLl9wID0gcDtcbiAgICAgIHRoaXMuX3MgPSBzO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NoZWR1bGVOZXh0KHMsIHN0YXRlKSB7XG4gICAgICB2YXIgbyA9IHN0YXRlWzBdLCBkYXRhID0gc3RhdGVbMV07XG4gICAgICBvLm9uTmV4dChkYXRhKTtcbiAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZUVycm9yKHMsIHN0YXRlKSB7XG4gICAgICB2YXIgbyA9IHN0YXRlWzBdLCBlcnIgPSBzdGF0ZVsxXTtcbiAgICAgIG8ub25FcnJvcihlcnIpO1xuICAgIH1cblxuICAgIEZyb21Qcm9taXNlT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHZhciBzYWQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKSwgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX3BcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBzYWQuc2V0RGlzcG9zYWJsZShzZWxmLl9zLnNjaGVkdWxlKFtvLCBkYXRhXSwgc2NoZWR1bGVOZXh0KSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBzYWQuc2V0RGlzcG9zYWJsZShzZWxmLl9zLnNjaGVkdWxlKFtvLCBlcnJdLCBzY2hlZHVsZUVycm9yKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2FkO1xuICAgIH07XG5cbiAgICByZXR1cm4gRnJvbVByb21pc2VPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICogQ29udmVydHMgYSBQcm9taXNlIHRvIGFuIE9ic2VydmFibGUgc2VxdWVuY2VcbiAgKiBAcGFyYW0ge1Byb21pc2V9IEFuIEVTNiBDb21wbGlhbnQgcHJvbWlzZS5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aGljaCB3cmFwcyB0aGUgZXhpc3RpbmcgcHJvbWlzZSBzdWNjZXNzIGFuZCBmYWlsdXJlLlxuICAqL1xuICB2YXIgb2JzZXJ2YWJsZUZyb21Qcm9taXNlID0gT2JzZXJ2YWJsZS5mcm9tUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlLCBzY2hlZHVsZXIpIHtcbiAgICBzY2hlZHVsZXIgfHwgKHNjaGVkdWxlciA9IGRlZmF1bHRTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgRnJvbVByb21pc2VPYnNlcnZhYmxlKHByb21pc2UsIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgLypcbiAgICogQ29udmVydHMgYW4gZXhpc3Rpbmcgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0byBhbiBFUzYgQ29tcGF0aWJsZSBQcm9taXNlXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBwcm9taXNlID0gUnguT2JzZXJ2YWJsZS5yZXR1cm4oNDIpLnRvUHJvbWlzZShSU1ZQLlByb21pc2UpO1xuICAgKlxuICAgKiAvLyBXaXRoIGNvbmZpZ1xuICAgKiBSeC5jb25maWcuUHJvbWlzZSA9IFJTVlAuUHJvbWlzZTtcbiAgICogdmFyIHByb21pc2UgPSBSeC5PYnNlcnZhYmxlLnJldHVybig0MikudG9Qcm9taXNlKCk7XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9taXNlQ3Rvcl0gVGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBwcm9taXNlLiBJZiBub3QgcHJvdmlkZWQsIGl0IGxvb2tzIGZvciBpdCBpbiBSeC5jb25maWcuUHJvbWlzZS5cbiAgICogQHJldHVybnMge1Byb21pc2V9IEFuIEVTNiBjb21wYXRpYmxlIHByb21pc2Ugd2l0aCB0aGUgbGFzdCB2YWx1ZSBmcm9tIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlQ3Rvcikge1xuICAgIHByb21pc2VDdG9yIHx8IChwcm9taXNlQ3RvciA9IFJ4LmNvbmZpZy5Qcm9taXNlKTtcbiAgICBpZiAoIXByb21pc2VDdG9yKSB7IHRocm93IG5ldyBOb3RTdXBwb3J0ZWRFcnJvcignUHJvbWlzZSB0eXBlIG5vdCBwcm92aWRlZCBub3IgaW4gUnguY29uZmlnLlByb21pc2UnKTsgfVxuICAgIHZhciBzb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gTm8gY2FuY2VsbGF0aW9uIGNhbiBiZSBkb25lXG4gICAgICB2YXIgdmFsdWU7XG4gICAgICBzb3VyY2Uuc3Vic2NyaWJlKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhbHVlID0gdjtcbiAgICAgIH0sIHJlamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VzIHRoZSBhc3luY2hyb25vdXMgZnVuY3Rpb24sIHN1cmZhY2luZyB0aGUgcmVzdWx0IHRocm91Z2ggYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb25Bc3luYyBBc3luY2hyb25vdXMgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIFByb21pc2UgdG8gcnVuLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBleHBvc2luZyB0aGUgZnVuY3Rpb24ncyByZXN1bHQgdmFsdWUsIG9yIGFuIGV4Y2VwdGlvbi5cbiAgICovXG4gIE9ic2VydmFibGUuc3RhcnRBc3luYyA9IGZ1bmN0aW9uIChmdW5jdGlvbkFzeW5jKSB7XG4gICAgdmFyIHByb21pc2UgPSB0cnlDYXRjaChmdW5jdGlvbkFzeW5jKSgpO1xuICAgIGlmIChwcm9taXNlID09PSBlcnJvck9iaikgeyByZXR1cm4gb2JzZXJ2YWJsZVRocm93KHByb21pc2UuZSk7IH1cbiAgICByZXR1cm4gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHByb21pc2UpO1xuICB9O1xuXG4gIHZhciBNdWx0aWNhc3RPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhNdWx0aWNhc3RPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIE11bHRpY2FzdE9ic2VydmFibGUoc291cmNlLCBmbjEsIGZuMikge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9mbjEgPSBmbjE7XG4gICAgICB0aGlzLl9mbjIgPSBmbjI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBNdWx0aWNhc3RPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuc291cmNlLm11bHRpY2FzdCh0aGlzLl9mbjEoKSk7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUodGhpcy5fZm4yKGNvbm5lY3RhYmxlKS5zdWJzY3JpYmUobyksIGNvbm5lY3RhYmxlLmNvbm5lY3QoKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBNdWx0aWNhc3RPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICAqIE11bHRpY2FzdHMgdGhlIHNvdXJjZSBzZXF1ZW5jZSBub3RpZmljYXRpb25zIHRocm91Z2ggYW4gaW5zdGFudGlhdGVkIHN1YmplY3QgaW50byBhbGwgdXNlcyBvZiB0aGUgc2VxdWVuY2Ugd2l0aGluIGEgc2VsZWN0b3IgZnVuY3Rpb24uIEVhY2hcbiAgICogc3Vic2NyaXB0aW9uIHRvIHRoZSByZXN1bHRpbmcgc2VxdWVuY2UgY2F1c2VzIGEgc2VwYXJhdGUgbXVsdGljYXN0IGludm9jYXRpb24sIGV4cG9zaW5nIHRoZSBzZXF1ZW5jZSByZXN1bHRpbmcgZnJvbSB0aGUgc2VsZWN0b3IgZnVuY3Rpb24nc1xuICAgKiBpbnZvY2F0aW9uLiBGb3Igc3BlY2lhbGl6YXRpb25zIHdpdGggZml4ZWQgc3ViamVjdCB0eXBlcywgc2VlIFB1Ymxpc2gsIFB1Ymxpc2hMYXN0LCBhbmQgUmVwbGF5LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAxIC0gcmVzID0gc291cmNlLm11bHRpY2FzdChvYnNlcnZhYmxlKTtcbiAgICogMiAtIHJlcyA9IHNvdXJjZS5tdWx0aWNhc3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFN1YmplY3QoKTsgfSwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0pO1xuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufFN1YmplY3R9IHN1YmplY3RPclN1YmplY3RTZWxlY3RvclxuICAgKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBpbnRlcm1lZGlhdGUgc3ViamVjdCB0aHJvdWdoIHdoaWNoIHRoZSBzb3VyY2Ugc2VxdWVuY2UncyBlbGVtZW50cyB3aWxsIGJlIG11bHRpY2FzdCB0byB0aGUgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqIE9yOlxuICAgKiBTdWJqZWN0IHRvIHB1c2ggc291cmNlIGVsZW1lbnRzIGludG8uXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtzZWxlY3Rvcl0gT3B0aW9uYWwgc2VsZWN0b3IgZnVuY3Rpb24gd2hpY2ggY2FuIHVzZSB0aGUgbXVsdGljYXN0ZWQgc291cmNlIHNlcXVlbmNlIHN1YmplY3QgdG8gdGhlIHBvbGljaWVzIGVuZm9yY2VkIGJ5IHRoZSBjcmVhdGVkIHN1YmplY3QuIFNwZWNpZmllZCBvbmx5IGlmIDxwYXJhbXJlZiBuYW1lPVwic3ViamVjdE9yU3ViamVjdFNlbGVjdG9yXCIgaXMgYSBmYWN0b3J5IGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHByb2R1Y2VkIGJ5IG11bHRpY2FzdGluZyB0aGUgc291cmNlIHNlcXVlbmNlIHdpdGhpbiBhIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLm11bHRpY2FzdCA9IGZ1bmN0aW9uIChzdWJqZWN0T3JTdWJqZWN0U2VsZWN0b3IsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oc3ViamVjdE9yU3ViamVjdFNlbGVjdG9yKSA/XG4gICAgICBuZXcgTXVsdGljYXN0T2JzZXJ2YWJsZSh0aGlzLCBzdWJqZWN0T3JTdWJqZWN0U2VsZWN0b3IsIHNlbGVjdG9yKSA6XG4gICAgICBuZXcgQ29ubmVjdGFibGVPYnNlcnZhYmxlKHRoaXMsIHN1YmplY3RPclN1YmplY3RTZWxlY3Rvcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGlzIHRoZSByZXN1bHQgb2YgaW52b2tpbmcgdGhlIHNlbGVjdG9yIG9uIGEgY29ubmVjdGFibGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHNoYXJlcyBhIHNpbmdsZSBzdWJzY3JpcHRpb24gdG8gdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UuXG4gICAqIFRoaXMgb3BlcmF0b3IgaXMgYSBzcGVjaWFsaXphdGlvbiBvZiBNdWx0aWNhc3QgdXNpbmcgYSByZWd1bGFyIFN1YmplY3QuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciByZXNyZXMgPSBzb3VyY2UucHVibGlzaCgpO1xuICAgKiB2YXIgcmVzID0gc291cmNlLnB1Ymxpc2goZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0pO1xuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbc2VsZWN0b3JdIFNlbGVjdG9yIGZ1bmN0aW9uIHdoaWNoIGNhbiB1c2UgdGhlIG11bHRpY2FzdGVkIHNvdXJjZSBzZXF1ZW5jZSBhcyBtYW55IHRpbWVzIGFzIG5lZWRlZCwgd2l0aG91dCBjYXVzaW5nIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMgdG8gdGhlIHNvdXJjZSBzZXF1ZW5jZS4gU3Vic2NyaWJlcnMgdG8gdGhlIGdpdmVuIHNvdXJjZSB3aWxsIHJlY2VpdmUgYWxsIG5vdGlmaWNhdGlvbnMgb2YgdGhlIHNvdXJjZSBmcm9tIHRoZSB0aW1lIG9mIHRoZSBzdWJzY3JpcHRpb24gb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgcHJvZHVjZWQgYnkgbXVsdGljYXN0aW5nIHRoZSBzb3VyY2Ugc2VxdWVuY2Ugd2l0aGluIGEgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucHVibGlzaCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHJldHVybiBzZWxlY3RvciAmJiBpc0Z1bmN0aW9uKHNlbGVjdG9yKSA/XG4gICAgICB0aGlzLm11bHRpY2FzdChmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgU3ViamVjdCgpOyB9LCBzZWxlY3RvcikgOlxuICAgICAgdGhpcy5tdWx0aWNhc3QobmV3IFN1YmplY3QoKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHNoYXJlcyBhIHNpbmdsZSBzdWJzY3JpcHRpb24gdG8gdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UuXG4gICAqIFRoaXMgb3BlcmF0b3IgaXMgYSBzcGVjaWFsaXphdGlvbiBvZiBwdWJsaXNoIHdoaWNoIGNyZWF0ZXMgYSBzdWJzY3JpcHRpb24gd2hlbiB0aGUgbnVtYmVyIG9mIG9ic2VydmVycyBnb2VzIGZyb20gemVybyB0byBvbmUsIHRoZW4gc2hhcmVzIHRoYXQgc3Vic2NyaXB0aW9uIHdpdGggYWxsIHN1YnNlcXVlbnQgb2JzZXJ2ZXJzIHVudGlsIHRoZSBudW1iZXIgb2Ygb2JzZXJ2ZXJzIHJldHVybnMgdG8gemVybywgYXQgd2hpY2ggcG9pbnQgdGhlIHN1YnNjcmlwdGlvbiBpcyBkaXNwb3NlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBwcm9kdWNlZCBieSBtdWx0aWNhc3RpbmcgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5zaGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5wdWJsaXNoKCkucmVmQ291bnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBpbnZva2luZyB0aGUgc2VsZWN0b3Igb24gYSBjb25uZWN0YWJsZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0byB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZSBjb250YWluaW5nIG9ubHkgdGhlIGxhc3Qgbm90aWZpY2F0aW9uLlxuICAgKiBUaGlzIG9wZXJhdG9yIGlzIGEgc3BlY2lhbGl6YXRpb24gb2YgTXVsdGljYXN0IHVzaW5nIGEgQXN5bmNTdWJqZWN0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcmVzID0gc291cmNlLnB1Ymxpc2hMYXN0KCk7XG4gICAqIHZhciByZXMgPSBzb3VyY2UucHVibGlzaExhc3QoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0pO1xuICAgKlxuICAgKiBAcGFyYW0gc2VsZWN0b3IgW09wdGlvbmFsXSBTZWxlY3RvciBmdW5jdGlvbiB3aGljaCBjYW4gdXNlIHRoZSBtdWx0aWNhc3RlZCBzb3VyY2Ugc2VxdWVuY2UgYXMgbWFueSB0aW1lcyBhcyBuZWVkZWQsIHdpdGhvdXQgY2F1c2luZyBtdWx0aXBsZSBzdWJzY3JpcHRpb25zIHRvIHRoZSBzb3VyY2Ugc2VxdWVuY2UuIFN1YnNjcmliZXJzIHRvIHRoZSBnaXZlbiBzb3VyY2Ugd2lsbCBvbmx5IHJlY2VpdmUgdGhlIGxhc3Qgbm90aWZpY2F0aW9uIG9mIHRoZSBzb3VyY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgcHJvZHVjZWQgYnkgbXVsdGljYXN0aW5nIHRoZSBzb3VyY2Ugc2VxdWVuY2Ugd2l0aGluIGEgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucHVibGlzaExhc3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc2VsZWN0b3IgJiYgaXNGdW5jdGlvbihzZWxlY3RvcikgP1xuICAgICAgdGhpcy5tdWx0aWNhc3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEFzeW5jU3ViamVjdCgpOyB9LCBzZWxlY3RvcikgOlxuICAgICAgdGhpcy5tdWx0aWNhc3QobmV3IEFzeW5jU3ViamVjdCgpKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBpbnZva2luZyB0aGUgc2VsZWN0b3Igb24gYSBjb25uZWN0YWJsZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0byB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZSBhbmQgc3RhcnRzIHdpdGggaW5pdGlhbFZhbHVlLlxuICAgKiBUaGlzIG9wZXJhdG9yIGlzIGEgc3BlY2lhbGl6YXRpb24gb2YgTXVsdGljYXN0IHVzaW5nIGEgQmVoYXZpb3JTdWJqZWN0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcmVzID0gc291cmNlLnB1Ymxpc2hWYWx1ZSg0Mik7XG4gICAqIHZhciByZXMgPSBzb3VyY2UucHVibGlzaFZhbHVlKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnNlbGVjdChmdW5jdGlvbiAoeSkgeyByZXR1cm4geSAqIHk7IH0pIH0sIDQyKTtcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3NlbGVjdG9yXSBPcHRpb25hbCBzZWxlY3RvciBmdW5jdGlvbiB3aGljaCBjYW4gdXNlIHRoZSBtdWx0aWNhc3RlZCBzb3VyY2Ugc2VxdWVuY2UgYXMgbWFueSB0aW1lcyBhcyBuZWVkZWQsIHdpdGhvdXQgY2F1c2luZyBtdWx0aXBsZSBzdWJzY3JpcHRpb25zIHRvIHRoZSBzb3VyY2Ugc2VxdWVuY2UuIFN1YnNjcmliZXJzIHRvIHRoZSBnaXZlbiBzb3VyY2Ugd2lsbCByZWNlaXZlIGltbWVkaWF0ZWx5IHJlY2VpdmUgdGhlIGluaXRpYWwgdmFsdWUsIGZvbGxvd2VkIGJ5IGFsbCBub3RpZmljYXRpb25zIG9mIHRoZSBzb3VyY2UgZnJvbSB0aGUgdGltZSBvZiB0aGUgc3Vic2NyaXB0aW9uIG9uLlxuICAgKiBAcGFyYW0ge01peGVkfSBpbml0aWFsVmFsdWUgSW5pdGlhbCB2YWx1ZSByZWNlaXZlZCBieSBvYnNlcnZlcnMgdXBvbiBzdWJzY3JpcHRpb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgcHJvZHVjZWQgYnkgbXVsdGljYXN0aW5nIHRoZSBzb3VyY2Ugc2VxdWVuY2Ugd2l0aGluIGEgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucHVibGlzaFZhbHVlID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZU9yU2VsZWN0b3IsIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAyID9cbiAgICAgIHRoaXMubXVsdGljYXN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoaW5pdGlhbFZhbHVlKTtcbiAgICAgIH0sIGluaXRpYWxWYWx1ZU9yU2VsZWN0b3IpIDpcbiAgICAgIHRoaXMubXVsdGljYXN0KG5ldyBCZWhhdmlvclN1YmplY3QoaW5pdGlhbFZhbHVlT3JTZWxlY3RvcikpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBzaGFyZXMgYSBzaW5nbGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlIGFuZCBzdGFydHMgd2l0aCBhbiBpbml0aWFsVmFsdWUuXG4gICAqIFRoaXMgb3BlcmF0b3IgaXMgYSBzcGVjaWFsaXphdGlvbiBvZiBwdWJsaXNoVmFsdWUgd2hpY2ggY3JlYXRlcyBhIHN1YnNjcmlwdGlvbiB3aGVuIHRoZSBudW1iZXIgb2Ygb2JzZXJ2ZXJzIGdvZXMgZnJvbSB6ZXJvIHRvIG9uZSwgdGhlbiBzaGFyZXMgdGhhdCBzdWJzY3JpcHRpb24gd2l0aCBhbGwgc3Vic2VxdWVudCBvYnNlcnZlcnMgdW50aWwgdGhlIG51bWJlciBvZiBvYnNlcnZlcnMgcmV0dXJucyB0byB6ZXJvLCBhdCB3aGljaCBwb2ludCB0aGUgc3Vic2NyaXB0aW9uIGlzIGRpc3Bvc2VkLlxuICAgKiBAcGFyYW0ge01peGVkfSBpbml0aWFsVmFsdWUgSW5pdGlhbCB2YWx1ZSByZWNlaXZlZCBieSBvYnNlcnZlcnMgdXBvbiBzdWJzY3JpcHRpb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgcHJvZHVjZWQgYnkgbXVsdGljYXN0aW5nIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc2hhcmVWYWx1ZSA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wdWJsaXNoVmFsdWUoaW5pdGlhbFZhbHVlKS5yZWZDb3VudCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGludm9raW5nIHRoZSBzZWxlY3RvciBvbiBhIGNvbm5lY3RhYmxlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBzaGFyZXMgYSBzaW5nbGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlIHJlcGxheWluZyBub3RpZmljYXRpb25zIHN1YmplY3QgdG8gYSBtYXhpbXVtIHRpbWUgbGVuZ3RoIGZvciB0aGUgcmVwbGF5IGJ1ZmZlci5cbiAgICogVGhpcyBvcGVyYXRvciBpcyBhIHNwZWNpYWxpemF0aW9uIG9mIE11bHRpY2FzdCB1c2luZyBhIFJlcGxheVN1YmplY3QuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciByZXMgPSBzb3VyY2UucmVwbGF5KG51bGwsIDMpO1xuICAgKiB2YXIgcmVzID0gc291cmNlLnJlcGxheShudWxsLCAzLCA1MDApO1xuICAgKiB2YXIgcmVzID0gc291cmNlLnJlcGxheShudWxsLCAzLCA1MDAsIHNjaGVkdWxlcik7XG4gICAqIHZhciByZXMgPSBzb3VyY2UucmVwbGF5KGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnRha2UoNikucmVwZWF0KCk7IH0sIDMsIDUwMCwgc2NoZWR1bGVyKTtcbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdG9yIFtPcHRpb25hbF0gU2VsZWN0b3IgZnVuY3Rpb24gd2hpY2ggY2FuIHVzZSB0aGUgbXVsdGljYXN0ZWQgc291cmNlIHNlcXVlbmNlIGFzIG1hbnkgdGltZXMgYXMgbmVlZGVkLCB3aXRob3V0IGNhdXNpbmcgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucyB0byB0aGUgc291cmNlIHNlcXVlbmNlLiBTdWJzY3JpYmVycyB0byB0aGUgZ2l2ZW4gc291cmNlIHdpbGwgcmVjZWl2ZSBhbGwgdGhlIG5vdGlmaWNhdGlvbnMgb2YgdGhlIHNvdXJjZSBzdWJqZWN0IHRvIHRoZSBzcGVjaWZpZWQgcmVwbGF5IGJ1ZmZlciB0cmltbWluZyBwb2xpY3kuXG4gICAqIEBwYXJhbSBidWZmZXJTaXplIFtPcHRpb25hbF0gTWF4aW11bSBlbGVtZW50IGNvdW50IG9mIHRoZSByZXBsYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0gd2luZG93U2l6ZSBbT3B0aW9uYWxdIE1heGltdW0gdGltZSBsZW5ndGggb2YgdGhlIHJlcGxheSBidWZmZXIuXG4gICAqIEBwYXJhbSBzY2hlZHVsZXIgW09wdGlvbmFsXSBTY2hlZHVsZXIgd2hlcmUgY29ubmVjdGVkIG9ic2VydmVycyB3aXRoaW4gdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCBvbi5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBwcm9kdWNlZCBieSBtdWx0aWNhc3RpbmcgdGhlIHNvdXJjZSBzZXF1ZW5jZSB3aXRoaW4gYSBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5yZXBsYXkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGJ1ZmZlclNpemUsIHdpbmRvd1NpemUsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBzZWxlY3RvciAmJiBpc0Z1bmN0aW9uKHNlbGVjdG9yKSA/XG4gICAgICB0aGlzLm11bHRpY2FzdChmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUmVwbGF5U3ViamVjdChidWZmZXJTaXplLCB3aW5kb3dTaXplLCBzY2hlZHVsZXIpOyB9LCBzZWxlY3RvcikgOlxuICAgICAgdGhpcy5tdWx0aWNhc3QobmV3IFJlcGxheVN1YmplY3QoYnVmZmVyU2l6ZSwgd2luZG93U2l6ZSwgc2NoZWR1bGVyKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHNoYXJlcyBhIHNpbmdsZSBzdWJzY3JpcHRpb24gdG8gdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UgcmVwbGF5aW5nIG5vdGlmaWNhdGlvbnMgc3ViamVjdCB0byBhIG1heGltdW0gdGltZSBsZW5ndGggZm9yIHRoZSByZXBsYXkgYnVmZmVyLlxuICAgKiBUaGlzIG9wZXJhdG9yIGlzIGEgc3BlY2lhbGl6YXRpb24gb2YgcmVwbGF5IHdoaWNoIGNyZWF0ZXMgYSBzdWJzY3JpcHRpb24gd2hlbiB0aGUgbnVtYmVyIG9mIG9ic2VydmVycyBnb2VzIGZyb20gemVybyB0byBvbmUsIHRoZW4gc2hhcmVzIHRoYXQgc3Vic2NyaXB0aW9uIHdpdGggYWxsIHN1YnNlcXVlbnQgb2JzZXJ2ZXJzIHVudGlsIHRoZSBudW1iZXIgb2Ygb2JzZXJ2ZXJzIHJldHVybnMgdG8gemVybywgYXQgd2hpY2ggcG9pbnQgdGhlIHN1YnNjcmlwdGlvbiBpcyBkaXNwb3NlZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5zaGFyZVJlcGxheSgzKTtcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5zaGFyZVJlcGxheSgzLCA1MDApO1xuICAgKiB2YXIgcmVzID0gc291cmNlLnNoYXJlUmVwbGF5KDMsIDUwMCwgc2NoZWR1bGVyKTtcbiAgICpcblxuICAgKiBAcGFyYW0gYnVmZmVyU2l6ZSBbT3B0aW9uYWxdIE1heGltdW0gZWxlbWVudCBjb3VudCBvZiB0aGUgcmVwbGF5IGJ1ZmZlci5cbiAgICogQHBhcmFtIHdpbmRvdyBbT3B0aW9uYWxdIE1heGltdW0gdGltZSBsZW5ndGggb2YgdGhlIHJlcGxheSBidWZmZXIuXG4gICAqIEBwYXJhbSBzY2hlZHVsZXIgW09wdGlvbmFsXSBTY2hlZHVsZXIgd2hlcmUgY29ubmVjdGVkIG9ic2VydmVycyB3aXRoaW4gdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCBvbi5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBwcm9kdWNlZCBieSBtdWx0aWNhc3RpbmcgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5zaGFyZVJlcGxheSA9IGZ1bmN0aW9uIChidWZmZXJTaXplLCB3aW5kb3dTaXplLCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYXkobnVsbCwgYnVmZmVyU2l6ZSwgd2luZG93U2l6ZSwgc2NoZWR1bGVyKS5yZWZDb3VudCgpO1xuICB9O1xuXG4gIHZhciBSZWZDb3VudE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFJlZkNvdW50T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBSZWZDb3VudE9ic2VydmFibGUoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICAgIHRoaXMuX2Nvbm5lY3RhYmxlU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFJlZkNvdW50T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgc2hvdWxkQ29ubmVjdCA9ICsrdGhpcy5fY291bnQgPT09IDEsIHN1YnNjcmlwdGlvbiA9IHRoaXMuc291cmNlLnN1YnNjcmliZShvKTtcbiAgICAgIHNob3VsZENvbm5lY3QgJiYgKHRoaXMuX2Nvbm5lY3RhYmxlU3Vic2NyaXB0aW9uID0gdGhpcy5zb3VyY2UuY29ubmVjdCgpKTtcbiAgICAgIHJldHVybiBuZXcgUmVmQ291bnREaXNwb3NhYmxlKHRoaXMsIHN1YnNjcmlwdGlvbik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIFJlZkNvdW50RGlzcG9zYWJsZShwLCBzKSB7XG4gICAgICB0aGlzLl9wID0gcDtcbiAgICAgIHRoaXMuX3MgPSBzO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgUmVmQ291bnREaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcy5kaXNwb3NlKCk7XG4gICAgICAgIC0tdGhpcy5fcC5fY291bnQgPT09IDAgJiYgdGhpcy5fcC5fY29ubmVjdGFibGVTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gUmVmQ291bnRPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIENvbm5lY3RhYmxlT2JzZXJ2YWJsZSA9IFJ4LkNvbm5lY3RhYmxlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ29ubmVjdGFibGVPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENvbm5lY3RhYmxlT2JzZXJ2YWJsZShzb3VyY2UsIHN1YmplY3QpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5faGFzU3Vic2NyaXB0aW9uICA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuX3NvdXJjZU9ic2VydmFibGUgPSBzb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLl9zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIENvbm5lY3REaXNwb3NhYmxlKHBhcmVudCkge1xuICAgICAgdGhpcy5fcCA9IHBhcmVudDtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIENvbm5lY3REaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcC5faGFzU3Vic2NyaXB0aW9uID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5faGFzU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuX2hhc1N1YnNjcmlwdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IG5ldyBCaW5hcnlEaXNwb3NhYmxlKFxuICAgICAgICAgIHRoaXMuX3NvdXJjZU9ic2VydmFibGUuc3Vic2NyaWJlKHRoaXMuX3N1YmplY3QpLFxuICAgICAgICAgIG5ldyBDb25uZWN0RGlzcG9zYWJsZSh0aGlzKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmlwdGlvbjtcbiAgICB9O1xuXG4gICAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJqZWN0LnN1YnNjcmliZShvKTtcbiAgICB9O1xuXG4gICAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5yZWZDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgUmVmQ291bnRPYnNlcnZhYmxlKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29ubmVjdGFibGVPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGUpKTtcblxuICB2YXIgVGltZXJPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRpbWVyT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUaW1lck9ic2VydmFibGUoZHQsIHMpIHtcbiAgICAgIHRoaXMuX2R0ID0gZHQ7XG4gICAgICB0aGlzLl9zID0gcztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRpbWVyT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcy5zY2hlZHVsZUZ1dHVyZShvLCB0aGlzLl9kdCwgc2NoZWR1bGVNZXRob2QpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZU1ldGhvZChzLCBvKSB7XG4gICAgICBvLm9uTmV4dCgwKTtcbiAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gVGltZXJPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgZnVuY3Rpb24gX29ic2VydmFibGVUaW1lcihkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IFRpbWVyT2JzZXJ2YWJsZShkdWVUaW1lLCBzY2hlZHVsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZVRpbWVyRGF0ZUFuZFBlcmlvZChkdWVUaW1lLCBwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBkID0gZHVlVGltZSwgcCA9IG5vcm1hbGl6ZVRpbWUocGVyaW9kKTtcbiAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmVGdXR1cmUoMCwgZCwgZnVuY3Rpb24gKGNvdW50LCBzZWxmKSB7XG4gICAgICAgIGlmIChwID4gMCkge1xuICAgICAgICAgIHZhciBub3cgPSBzY2hlZHVsZXIubm93KCk7XG4gICAgICAgICAgZCA9IG5ldyBEYXRlKGQuZ2V0VGltZSgpICsgcCk7XG4gICAgICAgICAgZC5nZXRUaW1lKCkgPD0gbm93ICYmIChkID0gbmV3IERhdGUobm93ICsgcCkpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLm9uTmV4dChjb3VudCk7XG4gICAgICAgIHNlbGYoY291bnQgKyAxLCBuZXcgRGF0ZShkKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGVUaW1lclRpbWVTcGFuQW5kUGVyaW9kKGR1ZVRpbWUsIHBlcmlvZCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIGR1ZVRpbWUgPT09IHBlcmlvZCA/XG4gICAgICBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZVBlcmlvZGljKDAsIHBlcmlvZCwgZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIub25OZXh0KGNvdW50KTtcbiAgICAgICAgICByZXR1cm4gY291bnQgKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH0pIDpcbiAgICAgIG9ic2VydmFibGVEZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGltZXJEYXRlQW5kUGVyaW9kKG5ldyBEYXRlKHNjaGVkdWxlci5ub3coKSArIGR1ZVRpbWUpLCBwZXJpb2QsIHNjaGVkdWxlcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgcHJvZHVjZXMgYSB2YWx1ZSBhZnRlciBlYWNoIHBlcmlvZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogIDEgLSByZXMgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICAgKiAgMiAtIHJlcyA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCwgUnguU2NoZWR1bGVyLnRpbWVvdXQpO1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGVyaW9kIFBlcmlvZCBmb3IgcHJvZHVjaW5nIHRoZSB2YWx1ZXMgaW4gdGhlIHJlc3VsdGluZyBzZXF1ZW5jZSAoc3BlY2lmaWVkIGFzIGFuIGludGVnZXIgZGVub3RpbmcgbWlsbGlzZWNvbmRzKS5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIFNjaGVkdWxlciB0byBydW4gdGhlIHRpbWVyIG9uLiBJZiBub3Qgc3BlY2lmaWVkLCBSeC5TY2hlZHVsZXIudGltZW91dCBpcyB1c2VkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHByb2R1Y2VzIGEgdmFsdWUgYWZ0ZXIgZWFjaCBwZXJpb2QuXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZWludGVydmFsID0gT2JzZXJ2YWJsZS5pbnRlcnZhbCA9IGZ1bmN0aW9uIChwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBvYnNlcnZhYmxlVGltZXJUaW1lU3BhbkFuZFBlcmlvZChwZXJpb2QsIHBlcmlvZCwgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSA/IHNjaGVkdWxlciA6IGRlZmF1bHRTY2hlZHVsZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgcHJvZHVjZXMgYSB2YWx1ZSBhZnRlciBkdWVUaW1lIGhhcyBlbGFwc2VkIGFuZCB0aGVuIGFmdGVyIGVhY2ggcGVyaW9kLlxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVlVGltZSBBYnNvbHV0ZSAoc3BlY2lmaWVkIGFzIGEgRGF0ZSBvYmplY3QpIG9yIHJlbGF0aXZlIHRpbWUgKHNwZWNpZmllZCBhcyBhbiBpbnRlZ2VyIGRlbm90aW5nIG1pbGxpc2Vjb25kcykgYXQgd2hpY2ggdG8gcHJvZHVjZSB0aGUgZmlyc3QgdmFsdWUuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IFtwZXJpb2RPclNjaGVkdWxlcl0gIFBlcmlvZCB0byBwcm9kdWNlIHN1YnNlcXVlbnQgdmFsdWVzIChzcGVjaWZpZWQgYXMgYW4gaW50ZWdlciBkZW5vdGluZyBtaWxsaXNlY29uZHMpLCBvciB0aGUgc2NoZWR1bGVyIHRvIHJ1biB0aGUgdGltZXIgb24uIElmIG5vdCBzcGVjaWZpZWQsIHRoZSByZXN1bHRpbmcgdGltZXIgaXMgbm90IHJlY3VycmluZy5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdICBTY2hlZHVsZXIgdG8gcnVuIHRoZSB0aW1lciBvbi4gSWYgbm90IHNwZWNpZmllZCwgdGhlIHRpbWVvdXQgc2NoZWR1bGVyIGlzIHVzZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgcHJvZHVjZXMgYSB2YWx1ZSBhZnRlciBkdWUgdGltZSBoYXMgZWxhcHNlZCBhbmQgdGhlbiBlYWNoIHBlcmlvZC5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlVGltZXIgPSBPYnNlcnZhYmxlLnRpbWVyID0gZnVuY3Rpb24gKGR1ZVRpbWUsIHBlcmlvZE9yU2NoZWR1bGVyLCBzY2hlZHVsZXIpIHtcbiAgICB2YXIgcGVyaW9kO1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGRlZmF1bHRTY2hlZHVsZXIpO1xuICAgIGlmIChwZXJpb2RPclNjaGVkdWxlciAhPSBudWxsICYmIHR5cGVvZiBwZXJpb2RPclNjaGVkdWxlciA9PT0gJ251bWJlcicpIHtcbiAgICAgIHBlcmlvZCA9IHBlcmlvZE9yU2NoZWR1bGVyO1xuICAgIH0gZWxzZSBpZiAoaXNTY2hlZHVsZXIocGVyaW9kT3JTY2hlZHVsZXIpKSB7XG4gICAgICBzY2hlZHVsZXIgPSBwZXJpb2RPclNjaGVkdWxlcjtcbiAgICB9XG4gICAgaWYgKChkdWVUaW1lIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgZHVlVGltZSA9PT0gJ251bWJlcicpICYmIHBlcmlvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX29ic2VydmFibGVUaW1lcihkdWVUaW1lLCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoZHVlVGltZSBpbnN0YW5jZW9mIERhdGUgJiYgcGVyaW9kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlVGltZXJEYXRlQW5kUGVyaW9kKGR1ZVRpbWUuZ2V0VGltZSgpLCBwZXJpb2RPclNjaGVkdWxlciwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG9ic2VydmFibGVUaW1lclRpbWVTcGFuQW5kUGVyaW9kKGR1ZVRpbWUsIHBlcmlvZCwgc2NoZWR1bGVyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlRGVsYXlSZWxhdGl2ZShzb3VyY2UsIGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGFjdGl2ZSA9IGZhbHNlLFxuICAgICAgICBjYW5jZWxhYmxlID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKSxcbiAgICAgICAgZXhjZXB0aW9uID0gbnVsbCxcbiAgICAgICAgcSA9IFtdLFxuICAgICAgICBydW5uaW5nID0gZmFsc2UsXG4gICAgICAgIHN1YnNjcmlwdGlvbjtcbiAgICAgIHN1YnNjcmlwdGlvbiA9IHNvdXJjZS5tYXRlcmlhbGl6ZSgpLnRpbWVzdGFtcChzY2hlZHVsZXIpLnN1YnNjcmliZShmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgIHZhciBkLCBzaG91bGRSdW47XG4gICAgICAgIGlmIChub3RpZmljYXRpb24udmFsdWUua2luZCA9PT0gJ0UnKSB7XG4gICAgICAgICAgcSA9IFtdO1xuICAgICAgICAgIHEucHVzaChub3RpZmljYXRpb24pO1xuICAgICAgICAgIGV4Y2VwdGlvbiA9IG5vdGlmaWNhdGlvbi52YWx1ZS5lcnJvcjtcbiAgICAgICAgICBzaG91bGRSdW4gPSAhcnVubmluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxLnB1c2goeyB2YWx1ZTogbm90aWZpY2F0aW9uLnZhbHVlLCB0aW1lc3RhbXA6IG5vdGlmaWNhdGlvbi50aW1lc3RhbXAgKyBkdWVUaW1lIH0pO1xuICAgICAgICAgIHNob3VsZFJ1biA9ICFhY3RpdmU7XG4gICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkUnVuKSB7XG4gICAgICAgICAgaWYgKGV4Y2VwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgby5vbkVycm9yKGV4Y2VwdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgICAgIGNhbmNlbGFibGUuc2V0RGlzcG9zYWJsZShkKTtcbiAgICAgICAgICAgIGQuc2V0RGlzcG9zYWJsZShzY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmVGdXR1cmUobnVsbCwgZHVlVGltZSwgZnVuY3Rpb24gKF8sIHNlbGYpIHtcbiAgICAgICAgICAgICAgdmFyIGUsIHJlY3Vyc2VEdWVUaW1lLCByZXN1bHQsIHNob3VsZFJlY3Vyc2U7XG4gICAgICAgICAgICAgIGlmIChleGNlcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChxLmxlbmd0aCA+IDAgJiYgcVswXS50aW1lc3RhbXAgLSBzY2hlZHVsZXIubm93KCkgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcS5zaGlmdCgpLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQuYWNjZXB0KG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSB3aGlsZSAocmVzdWx0ICE9PSBudWxsKTtcbiAgICAgICAgICAgICAgc2hvdWxkUmVjdXJzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZWN1cnNlRHVlVGltZSA9IDA7XG4gICAgICAgICAgICAgIGlmIChxLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzaG91bGRSZWN1cnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZWN1cnNlRHVlVGltZSA9IE1hdGgubWF4KDAsIHFbMF0udGltZXN0YW1wIC0gc2NoZWR1bGVyLm5vdygpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlID0gZXhjZXB0aW9uO1xuICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgby5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZFJlY3Vyc2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmKG51bGwsIHJlY3Vyc2VEdWVUaW1lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoc3Vic2NyaXB0aW9uLCBjYW5jZWxhYmxlKTtcbiAgICB9LCBzb3VyY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZURlbGF5QWJzb2x1dGUoc291cmNlLCBkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZURlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlRGVsYXlSZWxhdGl2ZShzb3VyY2UsIGR1ZVRpbWUgLSBzY2hlZHVsZXIubm93KCksIHNjaGVkdWxlcik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxheVdpdGhTZWxlY3Rvcihzb3VyY2UsIHN1YnNjcmlwdGlvbkRlbGF5LCBkZWxheUR1cmF0aW9uU2VsZWN0b3IpIHtcbiAgICB2YXIgc3ViRGVsYXksIHNlbGVjdG9yO1xuICAgIGlmIChpc0Z1bmN0aW9uKHN1YnNjcmlwdGlvbkRlbGF5KSkge1xuICAgICAgc2VsZWN0b3IgPSBzdWJzY3JpcHRpb25EZWxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViRGVsYXkgPSBzdWJzY3JpcHRpb25EZWxheTtcbiAgICAgIHNlbGVjdG9yID0gZGVsYXlEdXJhdGlvblNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBkZWxheXMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpLCBhdEVuZCA9IGZhbHNlLCBzdWJzY3JpcHRpb24gPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpO1xuXG4gICAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUoc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgICBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdmFyIGRlbGF5ID0gdHJ5Q2F0Y2goc2VsZWN0b3IpKHgpO1xuICAgICAgICAgICAgaWYgKGRlbGF5ID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKGRlbGF5LmUpOyB9XG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICAgICAgZGVsYXlzLmFkZChkKTtcbiAgICAgICAgICAgIGQuc2V0RGlzcG9zYWJsZShkZWxheS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvLm9uTmV4dCh4KTtcbiAgICAgICAgICAgICAgICBkZWxheXMucmVtb3ZlKGQpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgby5vbk5leHQoeCk7XG4gICAgICAgICAgICAgICAgZGVsYXlzLnJlbW92ZShkKTtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGF0RW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICApKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZG9uZSAoKSB7XG4gICAgICAgIGF0RW5kICYmIGRlbGF5cy5sZW5ndGggPT09IDAgJiYgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN1YkRlbGF5KSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShzdWJEZWxheS5zdWJzY3JpYmUoc3RhcnQsIGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSwgc3RhcnQpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbiwgZGVsYXlzKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgVGltZSBzaGlmdHMgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UgYnkgZHVlVGltZS5cbiAgICogIFRoZSByZWxhdGl2ZSB0aW1lIGludGVydmFscyBiZXR3ZWVuIHRoZSB2YWx1ZXMgYXJlIHByZXNlcnZlZC5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1ZVRpbWUgQWJzb2x1dGUgKHNwZWNpZmllZCBhcyBhIERhdGUgb2JqZWN0KSBvciByZWxhdGl2ZSB0aW1lIChzcGVjaWZpZWQgYXMgYW4gaW50ZWdlciBkZW5vdGluZyBtaWxsaXNlY29uZHMpIGJ5IHdoaWNoIHRvIHNoaWZ0IHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gU2NoZWR1bGVyIHRvIHJ1biB0aGUgZGVsYXkgdGltZXJzIG9uLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgdGltZW91dCBzY2hlZHVsZXIgaXMgdXNlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFRpbWUtc2hpZnRlZCBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5kZWxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlyc3RBcmcgPSBhcmd1bWVudHNbMF07XG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ251bWJlcicgfHwgZmlyc3RBcmcgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB2YXIgZHVlVGltZSA9IGZpcnN0QXJnLCBzY2hlZHVsZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBkZWZhdWx0U2NoZWR1bGVyKTtcbiAgICAgIHJldHVybiBkdWVUaW1lIGluc3RhbmNlb2YgRGF0ZSA/XG4gICAgICAgIG9ic2VydmFibGVEZWxheUFic29sdXRlKHRoaXMsIGR1ZVRpbWUsIHNjaGVkdWxlcikgOlxuICAgICAgICBvYnNlcnZhYmxlRGVsYXlSZWxhdGl2ZSh0aGlzLCBkdWVUaW1lLCBzY2hlZHVsZXIpO1xuICAgIH0gZWxzZSBpZiAoT2JzZXJ2YWJsZS5pc09ic2VydmFibGUoZmlyc3RBcmcpIHx8IGlzRnVuY3Rpb24oZmlyc3RBcmcpKSB7XG4gICAgICByZXR1cm4gZGVsYXlXaXRoU2VsZWN0b3IodGhpcywgZmlyc3RBcmcsIGFyZ3VtZW50c1sxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIERlYm91bmNlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRGVib3VuY2VPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIERlYm91bmNlT2JzZXJ2YWJsZShzb3VyY2UsIGR0LCBzKSB7XG4gICAgICBpc1NjaGVkdWxlcihzKSB8fCAocyA9IGRlZmF1bHRTY2hlZHVsZXIpO1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9kdCA9IGR0O1xuICAgICAgdGhpcy5fcyA9IHM7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBEZWJvdW5jZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGNhbmNlbGFibGUgPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKFxuICAgICAgICB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IERlYm91bmNlT2JzZXJ2ZXIobywgdGhpcy5zb3VyY2UsIHRoaXMuX2R0LCB0aGlzLl9zLCBjYW5jZWxhYmxlKSksXG4gICAgICAgIGNhbmNlbGFibGUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGVib3VuY2VPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIERlYm91bmNlT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKERlYm91bmNlT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRGVib3VuY2VPYnNlcnZlcihvYnNlcnZlciwgc291cmNlLCBkdWVUaW1lLCBzY2hlZHVsZXIsIGNhbmNlbGFibGUpIHtcbiAgICAgIHRoaXMuX28gPSBvYnNlcnZlcjtcbiAgICAgIHRoaXMuX3MgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9kID0gZHVlVGltZTtcbiAgICAgIHRoaXMuX3NjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIHRoaXMuX2MgPSBjYW5jZWxhYmxlO1xuICAgICAgdGhpcy5fdiA9IG51bGw7XG4gICAgICB0aGlzLl9odiA9IGZhbHNlO1xuICAgICAgdGhpcy5faWQgPSAwO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRGVib3VuY2VPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9odiA9IHRydWU7XG4gICAgICB0aGlzLl92ID0geDtcbiAgICAgIHZhciBjdXJyZW50SWQgPSArK3RoaXMuX2lkLCBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLl9jLnNldERpc3Bvc2FibGUoZCk7XG4gICAgICBkLnNldERpc3Bvc2FibGUodGhpcy5fc2NoZWR1bGVyLnNjaGVkdWxlRnV0dXJlKHRoaXMsIHRoaXMuX2QsIGZ1bmN0aW9uIChfLCBzZWxmKSB7XG4gICAgICAgIHNlbGYuX2h2ICYmIHNlbGYuX2lkID09PSBjdXJyZW50SWQgJiYgc2VsZi5fby5vbk5leHQoeCk7XG4gICAgICAgIHNlbGYuX2h2ID0gZmFsc2U7XG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIERlYm91bmNlT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX2MuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fby5vbkVycm9yKGUpO1xuICAgICAgdGhpcy5faHYgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lkKys7XG4gICAgfTtcblxuICAgIERlYm91bmNlT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2MuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5faHYgJiYgdGhpcy5fby5vbk5leHQodGhpcy5fdik7XG4gICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgICB0aGlzLl9odiA9IGZhbHNlO1xuICAgICAgdGhpcy5faWQrKztcbiAgICB9O1xuXG4gICAgcmV0dXJuIERlYm91bmNlT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIGZ1bmN0aW9uIGRlYm91bmNlV2l0aFNlbGVjdG9yKHNvdXJjZSwgZHVyYXRpb25TZWxlY3Rvcikge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIHZhbHVlLCBoYXNWYWx1ZSA9IGZhbHNlLCBjYW5jZWxhYmxlID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKSwgaWQgPSAwO1xuICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAgIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgdmFyIHRocm90dGxlID0gdHJ5Q2F0Y2goZHVyYXRpb25TZWxlY3RvcikoeCk7XG4gICAgICAgICAgaWYgKHRocm90dGxlID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKHRocm90dGxlLmUpOyB9XG5cbiAgICAgICAgICBpc1Byb21pc2UodGhyb3R0bGUpICYmICh0aHJvdHRsZSA9IG9ic2VydmFibGVGcm9tUHJvbWlzZSh0aHJvdHRsZSkpO1xuXG4gICAgICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlID0geDtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICAgIHZhciBjdXJyZW50aWQgPSBpZCwgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICAgIGNhbmNlbGFibGUuc2V0RGlzcG9zYWJsZShkKTtcbiAgICAgICAgICBkLnNldERpc3Bvc2FibGUodGhyb3R0bGUuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBoYXNWYWx1ZSAmJiBpZCA9PT0gY3VycmVudGlkICYmIG8ub25OZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBoYXNWYWx1ZSAmJiBpZCA9PT0gY3VycmVudGlkICYmIG8ub25OZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY2FuY2VsYWJsZS5kaXNwb3NlKCk7XG4gICAgICAgICAgby5vbkVycm9yKGUpO1xuICAgICAgICAgIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgaWQrKztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbmNlbGFibGUuZGlzcG9zZSgpO1xuICAgICAgICAgIGhhc1ZhbHVlICYmIG8ub25OZXh0KHZhbHVlKTtcbiAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbiwgY2FuY2VsYWJsZSk7XG4gICAgfSwgc291cmNlKTtcbiAgfVxuXG4gIG9ic2VydmFibGVQcm90by5kZWJvdW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNGdW5jdGlvbiAoYXJndW1lbnRzWzBdKSkge1xuICAgICAgcmV0dXJuIGRlYm91bmNlV2l0aFNlbGVjdG9yKHRoaXMsIGFyZ3VtZW50c1swXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIG5ldyBEZWJvdW5jZU9ic2VydmFibGUodGhpcywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBUaW1lc3RhbXBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUaW1lc3RhbXBPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRpbWVzdGFtcE9ic2VydmFibGUoc291cmNlLCBzKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX3MgPSBzO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGltZXN0YW1wT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBUaW1lc3RhbXBPYnNlcnZlcihvLCB0aGlzLl9zKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUaW1lc3RhbXBPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFRpbWVzdGFtcE9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUaW1lc3RhbXBPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUaW1lc3RhbXBPYnNlcnZlcihvLCBzKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3MgPSBzO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGltZXN0YW1wT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fby5vbk5leHQoeyB2YWx1ZTogeCwgdGltZXN0YW1wOiB0aGlzLl9zLm5vdygpIH0pO1xuICAgIH07XG5cbiAgICBUaW1lc3RhbXBPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBUaW1lc3RhbXBPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGltZXN0YW1wT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiAgUmVjb3JkcyB0aGUgdGltZXN0YW1wIGZvciBlYWNoIHZhbHVlIGluIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAxIC0gcmVzID0gc291cmNlLnRpbWVzdGFtcCgpOyAvLyBwcm9kdWNlcyB7IHZhbHVlOiB4LCB0aW1lc3RhbXA6IHRzIH1cbiAgICogIDIgLSByZXMgPSBzb3VyY2UudGltZXN0YW1wKFJ4LlNjaGVkdWxlci5kZWZhdWx0KTtcbiAgICpcbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdICBTY2hlZHVsZXIgdXNlZCB0byBjb21wdXRlIHRpbWVzdGFtcHMuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBkZWZhdWx0IHNjaGVkdWxlciBpcyB1c2VkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aXRoIHRpbWVzdGFtcCBpbmZvcm1hdGlvbiBvbiB2YWx1ZXMuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8udGltZXN0YW1wID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGRlZmF1bHRTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgVGltZXN0YW1wT2JzZXJ2YWJsZSh0aGlzLCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNhbXBsZU9ic2VydmFibGUoc291cmNlLCBzYW1wbGVyKSB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgYXRFbmQgPSBmYWxzZSwgdmFsdWUsIGhhc1ZhbHVlID0gZmFsc2U7XG5cbiAgICAgIGZ1bmN0aW9uIHNhbXBsZVN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKGhhc1ZhbHVlKSB7XG4gICAgICAgICAgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICBvLm9uTmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXRFbmQgJiYgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlU3Vic2NyaXB0aW9uID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICBzb3VyY2VTdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgICBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICBoYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXRFbmQgPSB0cnVlO1xuICAgICAgICAgIHNvdXJjZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICkpO1xuXG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoXG4gICAgICAgIHNvdXJjZVN1YnNjcmlwdGlvbixcbiAgICAgICAgc2FtcGxlci5zdWJzY3JpYmUoc2FtcGxlU3Vic2NyaWJlLCBmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sIHNhbXBsZVN1YnNjcmliZSlcbiAgICAgICk7XG4gICAgfSwgc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgU2FtcGxlcyB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhdCBlYWNoIGludGVydmFsLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgMSAtIHJlcyA9IHNvdXJjZS5zYW1wbGUoc2FtcGxlT2JzZXJ2YWJsZSk7IC8vIFNhbXBsZXIgdGljayBzZXF1ZW5jZVxuICAgKiAgMiAtIHJlcyA9IHNvdXJjZS5zYW1wbGUoNTAwMCk7IC8vIDUgc2Vjb25kc1xuICAgKiAgMiAtIHJlcyA9IHNvdXJjZS5zYW1wbGUoNTAwMCwgUnguU2NoZWR1bGVyLnRpbWVvdXQpOyAvLyA1IHNlY29uZHNcbiAgICpcbiAgICogQHBhcmFtIHtNaXhlZH0gaW50ZXJ2YWxPclNhbXBsZXIgSW50ZXJ2YWwgYXQgd2hpY2ggdG8gc2FtcGxlIChzcGVjaWZpZWQgYXMgYW4gaW50ZWdlciBkZW5vdGluZyBtaWxsaXNlY29uZHMpIG9yIFNhbXBsZXIgT2JzZXJ2YWJsZS5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdICBTY2hlZHVsZXIgdG8gcnVuIHRoZSBzYW1wbGluZyB0aW1lciBvbi4gSWYgbm90IHNwZWNpZmllZCwgdGhlIHRpbWVvdXQgc2NoZWR1bGVyIGlzIHVzZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBTYW1wbGVkIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc2FtcGxlID0gb2JzZXJ2YWJsZVByb3RvLnRocm90dGxlTGF0ZXN0ID0gZnVuY3Rpb24gKGludGVydmFsT3JTYW1wbGVyLCBzY2hlZHVsZXIpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBkZWZhdWx0U2NoZWR1bGVyKTtcbiAgICByZXR1cm4gdHlwZW9mIGludGVydmFsT3JTYW1wbGVyID09PSAnbnVtYmVyJyA/XG4gICAgICBzYW1wbGVPYnNlcnZhYmxlKHRoaXMsIG9ic2VydmFibGVpbnRlcnZhbChpbnRlcnZhbE9yU2FtcGxlciwgc2NoZWR1bGVyKSkgOlxuICAgICAgc2FtcGxlT2JzZXJ2YWJsZSh0aGlzLCBpbnRlcnZhbE9yU2FtcGxlcik7XG4gIH07XG5cbiAgdmFyIFRpbWVvdXRFcnJvciA9IFJ4LlRpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdUaW1lb3V0IGhhcyBvY2N1cnJlZCc7XG4gICAgdGhpcy5uYW1lID0gJ1RpbWVvdXRFcnJvcic7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgfTtcbiAgVGltZW91dEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcblxuICBmdW5jdGlvbiB0aW1lb3V0V2l0aFNlbGVjdG9yKHNvdXJjZSwgZmlyc3RUaW1lb3V0LCB0aW1lb3V0RHVyYXRpb25TZWxlY3Rvciwgb3RoZXIpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihmaXJzdFRpbWVvdXQpKSB7XG4gICAgICBvdGhlciA9IHRpbWVvdXREdXJhdGlvblNlbGVjdG9yO1xuICAgICAgdGltZW91dER1cmF0aW9uU2VsZWN0b3IgPSBmaXJzdFRpbWVvdXQ7XG4gICAgICBmaXJzdFRpbWVvdXQgPSBvYnNlcnZhYmxlTmV2ZXIoKTtcbiAgICB9XG4gICAgb3RoZXIgfHwgKG90aGVyID0gb2JzZXJ2YWJsZVRocm93KG5ldyBUaW1lb3V0RXJyb3IoKSkpO1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCksXG4gICAgICAgIHRpbWVyID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKSxcbiAgICAgICAgb3JpZ2luYWwgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcblxuICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUob3JpZ2luYWwpO1xuXG4gICAgICB2YXIgaWQgPSAwLCBzd2l0Y2hlZCA9IGZhbHNlO1xuXG4gICAgICBmdW5jdGlvbiBzZXRUaW1lcih0aW1lb3V0KSB7XG4gICAgICAgIHZhciBteUlkID0gaWQsIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcblxuICAgICAgICBmdW5jdGlvbiB0aW1lcldpbnMoKSB7XG4gICAgICAgICAgc3dpdGNoZWQgPSAobXlJZCA9PT0gaWQpO1xuICAgICAgICAgIHJldHVybiBzd2l0Y2hlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyLnNldERpc3Bvc2FibGUoZCk7XG4gICAgICAgIGQuc2V0RGlzcG9zYWJsZSh0aW1lb3V0LnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGltZXJXaW5zKCkgJiYgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUob3RoZXIuc3Vic2NyaWJlKG8pKTtcbiAgICAgICAgICBkLmRpc3Bvc2UoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0aW1lcldpbnMoKSAmJiBvLm9uRXJyb3IoZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aW1lcldpbnMoKSAmJiBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShvdGhlci5zdWJzY3JpYmUobykpO1xuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICBzZXRUaW1lcihmaXJzdFRpbWVvdXQpO1xuXG4gICAgICBmdW5jdGlvbiBvV2lucygpIHtcbiAgICAgICAgdmFyIHJlcyA9ICFzd2l0Y2hlZDtcbiAgICAgICAgaWYgKHJlcykgeyBpZCsrOyB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIG9yaWdpbmFsLnNldERpc3Bvc2FibGUoc291cmNlLnN1YnNjcmliZShmdW5jdGlvbiAoeCkge1xuICAgICAgICBpZiAob1dpbnMoKSkge1xuICAgICAgICAgIG8ub25OZXh0KHgpO1xuICAgICAgICAgIHZhciB0aW1lb3V0ID0gdHJ5Q2F0Y2godGltZW91dER1cmF0aW9uU2VsZWN0b3IpKHgpO1xuICAgICAgICAgIGlmICh0aW1lb3V0ID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKHRpbWVvdXQuZSk7IH1cbiAgICAgICAgICBzZXRUaW1lcihpc1Byb21pc2UodGltZW91dCkgPyBvYnNlcnZhYmxlRnJvbVByb21pc2UodGltZW91dCkgOiB0aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgb1dpbnMoKSAmJiBvLm9uRXJyb3IoZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9XaW5zKCkgJiYgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbiwgdGltZXIpO1xuICAgIH0sIHNvdXJjZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lb3V0KHNvdXJjZSwgZHVlVGltZSwgb3RoZXIsIHNjaGVkdWxlcikge1xuICAgIGlmIChpc1NjaGVkdWxlcihvdGhlcikpIHtcbiAgICAgIHNjaGVkdWxlciA9IG90aGVyO1xuICAgICAgb3RoZXIgPSBvYnNlcnZhYmxlVGhyb3cobmV3IFRpbWVvdXRFcnJvcigpKTtcbiAgICB9XG4gICAgaWYgKG90aGVyIGluc3RhbmNlb2YgRXJyb3IpIHsgb3RoZXIgPSBvYnNlcnZhYmxlVGhyb3cob3RoZXIpOyB9XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gZGVmYXVsdFNjaGVkdWxlcik7XG5cbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBpZCA9IDAsXG4gICAgICAgIG9yaWdpbmFsID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCksXG4gICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCksXG4gICAgICAgIHN3aXRjaGVkID0gZmFsc2UsXG4gICAgICAgIHRpbWVyID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKTtcblxuICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUob3JpZ2luYWwpO1xuXG4gICAgICBmdW5jdGlvbiBjcmVhdGVUaW1lcigpIHtcbiAgICAgICAgdmFyIG15SWQgPSBpZDtcbiAgICAgICAgdGltZXIuc2V0RGlzcG9zYWJsZShzY2hlZHVsZXIuc2NoZWR1bGVGdXR1cmUobnVsbCwgZHVlVGltZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN3aXRjaGVkID0gaWQgPT09IG15SWQ7XG4gICAgICAgICAgaWYgKHN3aXRjaGVkKSB7XG4gICAgICAgICAgICBpc1Byb21pc2Uob3RoZXIpICYmIChvdGhlciA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShvdGhlcikpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUob3RoZXIuc3Vic2NyaWJlKG8pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgY3JlYXRlVGltZXIoKTtcblxuICAgICAgb3JpZ2luYWwuc2V0RGlzcG9zYWJsZShzb3VyY2Uuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGlmICghc3dpdGNoZWQpIHtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICAgIG8ub25OZXh0KHgpO1xuICAgICAgICAgIGNyZWF0ZVRpbWVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghc3dpdGNoZWQpIHtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICAgIG8ub25FcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXN3aXRjaGVkKSB7XG4gICAgICAgICAgaWQrKztcbiAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShzdWJzY3JpcHRpb24sIHRpbWVyKTtcbiAgICB9LCBzb3VyY2UpO1xuICB9XG5cbiAgb2JzZXJ2YWJsZVByb3RvLnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpcnN0QXJnID0gYXJndW1lbnRzWzBdO1xuICAgIGlmIChmaXJzdEFyZyBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGZpcnN0QXJnID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRpbWVvdXQodGhpcywgZmlyc3RBcmcsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICB9IGVsc2UgaWYgKE9ic2VydmFibGUuaXNPYnNlcnZhYmxlKGZpcnN0QXJnKSB8fCBpc0Z1bmN0aW9uKGZpcnN0QXJnKSkge1xuICAgICAgcmV0dXJuIHRpbWVvdXRXaXRoU2VsZWN0b3IodGhpcywgZmlyc3RBcmcsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgb25seSB0aGUgZmlyc3QgaXRlbSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBkdXJpbmcgc2VxdWVudGlhbCB0aW1lIHdpbmRvd3Mgb2YgYSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aW5kb3dEdXJhdGlvbiB0aW1lIHRvIHdhaXQgYmVmb3JlIGVtaXR0aW5nIGFub3RoZXIgaXRlbSBhZnRlciBlbWl0dGluZyB0aGUgbGFzdCBpdGVtXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSB0aGUgU2NoZWR1bGVyIHRvIHVzZSBpbnRlcm5hbGx5IHRvIG1hbmFnZSB0aGUgdGltZXJzIHRoYXQgaGFuZGxlIHRpbWVvdXQgZm9yIGVhY2ggaXRlbS4gSWYgbm90IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBTY2hlZHVsZXIudGltZW91dC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgdGhhdCBwZXJmb3JtcyB0aGUgdGhyb3R0bGUgb3BlcmF0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnRocm90dGxlID0gZnVuY3Rpb24gKHdpbmRvd0R1cmF0aW9uLCBzY2hlZHVsZXIpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBkZWZhdWx0U2NoZWR1bGVyKTtcbiAgICB2YXIgZHVyYXRpb24gPSArd2luZG93RHVyYXRpb24gfHwgMDtcbiAgICBpZiAoZHVyYXRpb24gPD0gMCkgeyB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2luZG93RHVyYXRpb24gY2Fubm90IGJlIGxlc3Mgb3IgZXF1YWwgemVyby4nKTsgfVxuICAgIHZhciBzb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGxhc3RPbk5leHQgPSAwO1xuICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAgIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgdmFyIG5vdyA9IHNjaGVkdWxlci5ub3coKTtcbiAgICAgICAgICBpZiAobGFzdE9uTmV4dCA9PT0gMCB8fCBub3cgLSBsYXN0T25OZXh0ID49IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICBsYXN0T25OZXh0ID0gbm93O1xuICAgICAgICAgICAgby5vbk5leHQoeCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSwgZnVuY3Rpb24gKCkgeyBvLm9uQ29tcGxldGVkKCk7IH1cbiAgICAgICk7XG4gICAgfSwgc291cmNlKTtcbiAgfTtcblxuICB2YXIgUGF1c2FibGVPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhQYXVzYWJsZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gUGF1c2FibGVPYnNlcnZhYmxlKHNvdXJjZSwgcGF1c2VyKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICAgIGlmIChwYXVzZXIgJiYgcGF1c2VyLnN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLnBhdXNlciA9IHRoaXMuY29udHJvbGxlci5tZXJnZShwYXVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXVzZXIgPSB0aGlzLmNvbnRyb2xsZXI7XG4gICAgICB9XG5cbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFBhdXNhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgY29ubiA9IHRoaXMuc291cmNlLnB1Ymxpc2goKSxcbiAgICAgICAgc3Vic2NyaXB0aW9uID0gY29ubi5zdWJzY3JpYmUobyksXG4gICAgICAgIGNvbm5lY3Rpb24gPSBkaXNwb3NhYmxlRW1wdHk7XG5cbiAgICAgIHZhciBwYXVzYWJsZSA9IHRoaXMucGF1c2VyLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgY29ubmVjdGlvbiA9IGNvbm4uY29ubmVjdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbm5lY3Rpb24uZGlzcG9zZSgpO1xuICAgICAgICAgIGNvbm5lY3Rpb24gPSBkaXNwb3NhYmxlRW1wdHk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IE5BcnlEaXNwb3NhYmxlKFtzdWJzY3JpcHRpb24sIGNvbm5lY3Rpb24sIHBhdXNhYmxlXSk7XG4gICAgfTtcblxuICAgIFBhdXNhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIub25OZXh0KGZhbHNlKTtcbiAgICB9O1xuXG4gICAgUGF1c2FibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIub25OZXh0KHRydWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUGF1c2FibGVPYnNlcnZhYmxlO1xuXG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIC8qKlxuICAgKiBQYXVzZXMgdGhlIHVuZGVybHlpbmcgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBiYXNlZCB1cG9uIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdoaWNoIHlpZWxkcyB0cnVlL2ZhbHNlLlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcGF1c2VyID0gbmV3IFJ4LlN1YmplY3QoKTtcbiAgICogdmFyIHNvdXJjZSA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwKS5wYXVzYWJsZShwYXVzZXIpO1xuICAgKiBAcGFyYW0ge09ic2VydmFibGV9IHBhdXNlciBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB1c2VkIHRvIHBhdXNlIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hpY2ggaXMgcGF1c2VkIGJhc2VkIHVwb24gdGhlIHBhdXNlci5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5wYXVzYWJsZSA9IGZ1bmN0aW9uIChwYXVzZXIpIHtcbiAgICByZXR1cm4gbmV3IFBhdXNhYmxlT2JzZXJ2YWJsZSh0aGlzLCBwYXVzZXIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3RTb3VyY2Uoc291cmNlLCBzdWJqZWN0LCByZXN1bHRTZWxlY3Rvcikge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGhhc1ZhbHVlID0gW2ZhbHNlLCBmYWxzZV0sXG4gICAgICAgIGhhc1ZhbHVlQWxsID0gZmFsc2UsXG4gICAgICAgIGlzRG9uZSA9IGZhbHNlLFxuICAgICAgICB2YWx1ZXMgPSBuZXcgQXJyYXkoMiksXG4gICAgICAgIGVycjtcblxuICAgICAgZnVuY3Rpb24gbmV4dCh4LCBpKSB7XG4gICAgICAgIHZhbHVlc1tpXSA9IHg7XG4gICAgICAgIGhhc1ZhbHVlW2ldID0gdHJ1ZTtcbiAgICAgICAgaWYgKGhhc1ZhbHVlQWxsIHx8IChoYXNWYWx1ZUFsbCA9IGhhc1ZhbHVlLmV2ZXJ5KGlkZW50aXR5KSkpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBvLm9uRXJyb3IoZXJyKTsgfVxuICAgICAgICAgIHZhciByZXMgPSB0cnlDYXRjaChyZXN1bHRTZWxlY3RvcikuYXBwbHkobnVsbCwgdmFsdWVzKTtcbiAgICAgICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKHJlcy5lKTsgfVxuICAgICAgICAgIG8ub25OZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaXNEb25lICYmIHZhbHVlc1sxXSAmJiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShcbiAgICAgICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgICBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgbmV4dCh4LCAwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzWzFdKSB7XG4gICAgICAgICAgICAgIG8ub25FcnJvcihlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVyciA9IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgICAgICAgdmFsdWVzWzFdICYmIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgc3ViamVjdC5zdWJzY3JpYmUoXG4gICAgICAgICAgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIG5leHQoeCwgMSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIG5leHQodHJ1ZSwgMSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9LCBzb3VyY2UpO1xuICB9XG5cbiAgdmFyIFBhdXNhYmxlQnVmZmVyZWRPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhQYXVzYWJsZUJ1ZmZlcmVkT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBQYXVzYWJsZUJ1ZmZlcmVkT2JzZXJ2YWJsZShzb3VyY2UsIHBhdXNlcikge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgICBpZiAocGF1c2VyICYmIHBhdXNlci5zdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5wYXVzZXIgPSB0aGlzLmNvbnRyb2xsZXIubWVyZ2UocGF1c2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGF1c2VyID0gdGhpcy5jb250cm9sbGVyO1xuICAgICAgfVxuXG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBQYXVzYWJsZUJ1ZmZlcmVkT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgcSA9IFtdLCBwcmV2aW91c1Nob3VsZEZpcmU7XG5cbiAgICAgIGZ1bmN0aW9uIGRyYWluUXVldWUoKSB7IHdoaWxlIChxLmxlbmd0aCA+IDApIHsgby5vbk5leHQocS5zaGlmdCgpKTsgfSB9XG5cbiAgICAgIHZhciBzdWJzY3JpcHRpb24gPVxuICAgICAgICBjb21iaW5lTGF0ZXN0U291cmNlKFxuICAgICAgICAgIHRoaXMuc291cmNlLFxuICAgICAgICAgIHRoaXMucGF1c2VyLnN0YXJ0V2l0aChmYWxzZSkuZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICBmdW5jdGlvbiAoZGF0YSwgc2hvdWxkRmlyZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogZGF0YSwgc2hvdWxkRmlyZTogc2hvdWxkRmlyZSB9O1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICAgIGlmIChwcmV2aW91c1Nob3VsZEZpcmUgIT09IHVuZGVmaW5lZCAmJiByZXN1bHRzLnNob3VsZEZpcmUgIT09IHByZXZpb3VzU2hvdWxkRmlyZSkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzU2hvdWxkRmlyZSA9IHJlc3VsdHMuc2hvdWxkRmlyZTtcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgaW4gc2hvdWxkRmlyZVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLnNob3VsZEZpcmUpIHsgZHJhaW5RdWV1ZSgpOyB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNTaG91bGRGaXJlID0gcmVzdWx0cy5zaG91bGRGaXJlO1xuICAgICAgICAgICAgICAgIC8vIG5ldyBkYXRhXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMuc2hvdWxkRmlyZSkge1xuICAgICAgICAgICAgICAgICAgby5vbk5leHQocmVzdWx0cy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcS5wdXNoKHJlc3VsdHMuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgICAgICAgICAgIG8ub25FcnJvcihlcnIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgICAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIHJldHVybiBzdWJzY3JpcHRpb247ICAgICAgXG4gICAgfTtcblxuICAgIFBhdXNhYmxlQnVmZmVyZWRPYnNlcnZhYmxlLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlci5vbk5leHQoZmFsc2UpO1xuICAgIH07XG5cbiAgICBQYXVzYWJsZUJ1ZmZlcmVkT2JzZXJ2YWJsZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jb250cm9sbGVyLm9uTmV4dCh0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBhdXNhYmxlQnVmZmVyZWRPYnNlcnZhYmxlO1xuXG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIC8qKlxuICAgKiBQYXVzZXMgdGhlIHVuZGVybHlpbmcgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBiYXNlZCB1cG9uIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdoaWNoIHlpZWxkcyB0cnVlL2ZhbHNlLFxuICAgKiBhbmQgeWllbGRzIHRoZSB2YWx1ZXMgdGhhdCB3ZXJlIGJ1ZmZlcmVkIHdoaWxlIHBhdXNlZC5cbiAgICogQGV4YW1wbGVcbiAgICogdmFyIHBhdXNlciA9IG5ldyBSeC5TdWJqZWN0KCk7XG4gICAqIHZhciBzb3VyY2UgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMCkucGF1c2FibGVCdWZmZXJlZChwYXVzZXIpO1xuICAgKiBAcGFyYW0ge09ic2VydmFibGV9IHBhdXNlciBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB1c2VkIHRvIHBhdXNlIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hpY2ggaXMgcGF1c2VkIGJhc2VkIHVwb24gdGhlIHBhdXNlci5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5wYXVzYWJsZUJ1ZmZlcmVkID0gZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gbmV3IFBhdXNhYmxlQnVmZmVyZWRPYnNlcnZhYmxlKHRoaXMsIHN1YmplY3QpO1xuICB9O1xuXG4gIHZhciBDb250cm9sbGVkT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ29udHJvbGxlZE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlZE9ic2VydmFibGUgKHNvdXJjZSwgZW5hYmxlUXVldWUsIHNjaGVkdWxlcikge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLnN1YmplY3QgPSBuZXcgQ29udHJvbGxlZFN1YmplY3QoZW5hYmxlUXVldWUsIHNjaGVkdWxlcik7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZS5tdWx0aWNhc3QodGhpcy5zdWJqZWN0KS5yZWZDb3VudCgpO1xuICAgIH1cblxuICAgIENvbnRyb2xsZWRPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobyk7XG4gICAgfTtcblxuICAgIENvbnRyb2xsZWRPYnNlcnZhYmxlLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG51bWJlck9mSXRlbXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1YmplY3QucmVxdWVzdChudW1iZXJPZkl0ZW1zID09IG51bGwgPyAtMSA6IG51bWJlck9mSXRlbXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29udHJvbGxlZE9ic2VydmFibGU7XG5cbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgdmFyIENvbnRyb2xsZWRTdWJqZWN0ID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDb250cm9sbGVkU3ViamVjdCwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDb250cm9sbGVkU3ViamVjdChlbmFibGVRdWV1ZSwgc2NoZWR1bGVyKSB7XG4gICAgICBlbmFibGVRdWV1ZSA9PSBudWxsICYmIChlbmFibGVRdWV1ZSA9IHRydWUpO1xuXG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICB0aGlzLmVuYWJsZVF1ZXVlID0gZW5hYmxlUXVldWU7XG4gICAgICB0aGlzLnF1ZXVlID0gZW5hYmxlUXVldWUgPyBbXSA6IG51bGw7XG4gICAgICB0aGlzLnJlcXVlc3RlZENvdW50ID0gMDtcbiAgICAgIHRoaXMucmVxdWVzdGVkRGlzcG9zYWJsZSA9IG51bGw7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgIHRoaXMuaGFzRmFpbGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXIgfHwgY3VycmVudFRocmVhZFNjaGVkdWxlcjtcbiAgICB9XG5cbiAgICBhZGRQcm9wZXJ0aWVzKENvbnRyb2xsZWRTdWJqZWN0LnByb3RvdHlwZSwgT2JzZXJ2ZXIsIHtcbiAgICAgIF9zdWJzY3JpYmU6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKG8pO1xuICAgICAgfSxcbiAgICAgIG9uQ29tcGxldGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZVF1ZXVlIHx8IHRoaXMucXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdWJqZWN0Lm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgdGhpcy5kaXNwb3NlQ3VycmVudFJlcXVlc3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnF1ZXVlLnB1c2goTm90aWZpY2F0aW9uLmNyZWF0ZU9uQ29tcGxldGVkKCkpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMuaGFzRmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlUXVldWUgfHwgdGhpcy5xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnN1YmplY3Qub25FcnJvcihlcnJvcik7XG4gICAgICAgICAgdGhpcy5kaXNwb3NlQ3VycmVudFJlcXVlc3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnF1ZXVlLnB1c2goTm90aWZpY2F0aW9uLmNyZWF0ZU9uRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RlZENvdW50IDw9IDApIHtcbiAgICAgICAgICB0aGlzLmVuYWJsZVF1ZXVlICYmIHRoaXMucXVldWUucHVzaChOb3RpZmljYXRpb24uY3JlYXRlT25OZXh0KHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKHRoaXMucmVxdWVzdGVkQ291bnQtLSA9PT0gMCkgJiYgdGhpcy5kaXNwb3NlQ3VycmVudFJlcXVlc3QoKTtcbiAgICAgICAgICB0aGlzLnN1YmplY3Qub25OZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9wcm9jZXNzUmVxdWVzdDogZnVuY3Rpb24gKG51bWJlck9mSXRlbXMpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlUXVldWUpIHtcbiAgICAgICAgICB3aGlsZSAodGhpcy5xdWV1ZS5sZW5ndGggPiAwICYmIChudW1iZXJPZkl0ZW1zID4gMCB8fCB0aGlzLnF1ZXVlWzBdLmtpbmQgIT09ICdOJykpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdCA9IHRoaXMucXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGZpcnN0LmFjY2VwdCh0aGlzLnN1YmplY3QpO1xuICAgICAgICAgICAgaWYgKGZpcnN0LmtpbmQgPT09ICdOJykge1xuICAgICAgICAgICAgICBudW1iZXJPZkl0ZW1zLS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VDdXJyZW50UmVxdWVzdCgpO1xuICAgICAgICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bWJlck9mSXRlbXM7XG4gICAgICB9LFxuICAgICAgcmVxdWVzdDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICB0aGlzLmRpc3Bvc2VDdXJyZW50UmVxdWVzdCgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXF1ZXN0ZWREaXNwb3NhYmxlID0gdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUobnVtYmVyLFxuICAgICAgICBmdW5jdGlvbihzLCBpKSB7XG4gICAgICAgICAgdmFyIHJlbWFpbmluZyA9IHNlbGYuX3Byb2Nlc3NSZXF1ZXN0KGkpO1xuICAgICAgICAgIHZhciBzdG9wcGVkID0gc2VsZi5oYXNDb21wbGV0ZWQgfHwgc2VsZi5oYXNGYWlsZWQ7XG4gICAgICAgICAgaWYgKCFzdG9wcGVkICYmIHJlbWFpbmluZyA+IDApIHtcbiAgICAgICAgICAgIHNlbGYucmVxdWVzdGVkQ291bnQgPSByZW1haW5pbmc7XG5cbiAgICAgICAgICAgIHJldHVybiBkaXNwb3NhYmxlQ3JlYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5yZXF1ZXN0ZWRDb3VudCA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgLy8gU2NoZWR1bGVkIGl0ZW0gaXMgc3RpbGwgaW4gcHJvZ3Jlc3MuIFJldHVybiBhIG5ld1xuICAgICAgICAgICAgICAvLyBkaXNwb3NhYmxlIHRvIGFsbG93IHRoZSByZXF1ZXN0IHRvIGJlIGludGVycnVwdGVkXG4gICAgICAgICAgICAgIC8vIHZpYSBkaXNwb3NlLlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdGVkRGlzcG9zYWJsZTtcbiAgICAgIH0sXG4gICAgICBkaXNwb3NlQ3VycmVudFJlcXVlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdGVkRGlzcG9zYWJsZSkge1xuICAgICAgICAgIHRoaXMucmVxdWVzdGVkRGlzcG9zYWJsZS5kaXNwb3NlKCk7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0ZWREaXNwb3NhYmxlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENvbnRyb2xsZWRTdWJqZWN0O1xuICB9KE9ic2VydmFibGUpKTtcblxuICAvKipcbiAgICogQXR0YWNoZXMgYSBjb250cm9sbGVyIHRvIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdpdGggdGhlIGFiaWxpdHkgdG8gcXVldWUuXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBzb3VyY2UgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMCkuY29udHJvbGxlZCgpO1xuICAgKiBzb3VyY2UucmVxdWVzdCgzKTsgLy8gUmVhZHMgMyB2YWx1ZXNcbiAgICogQHBhcmFtIHtib29sfSBlbmFibGVRdWV1ZSB0cnV0aHkgdmFsdWUgdG8gZGV0ZXJtaW5lIGlmIHZhbHVlcyBzaG91bGQgYmUgcXVldWVkIHBlbmRpbmcgdGhlIG5leHQgcmVxdWVzdFxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gc2NoZWR1bGVyIGRldGVybWluZXMgaG93IHRoZSByZXF1ZXN0cyB3aWxsIGJlIHNjaGVkdWxlZFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hpY2ggb25seSBwcm9wYWdhdGVzIHZhbHVlcyBvbiByZXF1ZXN0LlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmNvbnRyb2xsZWQgPSBmdW5jdGlvbiAoZW5hYmxlUXVldWUsIHNjaGVkdWxlcikge1xuXG4gICAgaWYgKGVuYWJsZVF1ZXVlICYmIGlzU2NoZWR1bGVyKGVuYWJsZVF1ZXVlKSkge1xuICAgICAgc2NoZWR1bGVyID0gZW5hYmxlUXVldWU7XG4gICAgICBlbmFibGVRdWV1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGVuYWJsZVF1ZXVlID09IG51bGwpIHsgIGVuYWJsZVF1ZXVlID0gdHJ1ZTsgfVxuICAgIHJldHVybiBuZXcgQ29udHJvbGxlZE9ic2VydmFibGUodGhpcywgZW5hYmxlUXVldWUsIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBpcGVzIHRoZSBleGlzdGluZyBPYnNlcnZhYmxlIHNlcXVlbmNlIGludG8gYSBOb2RlLmpzIFN0cmVhbS5cbiAgICogQHBhcmFtIHtTdHJlYW19IGRlc3QgVGhlIGRlc3RpbmF0aW9uIE5vZGUuanMgc3RyZWFtLlxuICAgKiBAcmV0dXJucyB7U3RyZWFtfSBUaGUgZGVzdGluYXRpb24gc3RyZWFtLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnBpcGUgPSBmdW5jdGlvbiAoZGVzdCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnBhdXNhYmxlQnVmZmVyZWQoKTtcblxuICAgIGZ1bmN0aW9uIG9uRHJhaW4oKSB7XG4gICAgICBzb3VyY2UucmVzdW1lKCk7XG4gICAgfVxuXG4gICAgZGVzdC5hZGRMaXN0ZW5lcignZHJhaW4nLCBvbkRyYWluKTtcblxuICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICBmdW5jdGlvbiAoeCkge1xuICAgICAgICAhZGVzdC53cml0ZShTdHJpbmcoeCkpICYmIHNvdXJjZS5wYXVzZSgpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgZGVzdC5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBIYWNrIGNoZWNrIGJlY2F1c2UgU1RESU8gaXMgbm90IGNsb3NhYmxlXG4gICAgICAgICFkZXN0Ll9pc1N0ZGlvICYmIGRlc3QuZW5kKCk7XG4gICAgICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2RyYWluJywgb25EcmFpbik7XG4gICAgICB9KTtcblxuICAgIHNvdXJjZS5yZXN1bWUoKTtcblxuICAgIHJldHVybiBkZXN0O1xuICB9O1xuXG4gIHZhciBUcmFuc2R1Y2VPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVHJhbnNkdWNlT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVHJhbnNkdWNlT2JzZXJ2ZXIobywgeGZvcm0pIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5feGZvcm0gPSB4Zm9ybTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRyYW5zZHVjZU9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHZhciByZXMgPSB0cnlDYXRjaCh0aGlzLl94Zm9ybVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSkuY2FsbCh0aGlzLl94Zm9ybSwgdGhpcy5fbywgeCk7XG4gICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyB0aGlzLl9vLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgfTtcblxuICAgIFRyYW5zZHVjZU9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHRoaXMuX28ub25FcnJvcihlKTsgfTtcblxuICAgIFRyYW5zZHVjZU9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl94Zm9ybVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHRoaXMuX28pO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHJhbnNkdWNlT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUZvck9ic2VydmVyKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0BAdHJhbnNkdWNlci9pbml0JzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSxcbiAgICAgICdAQHRyYW5zZHVjZXIvc3RlcCc6IGZ1bmN0aW9uKG9icywgaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIG9icy5vbk5leHQoaW5wdXQpO1xuICAgICAgfSxcbiAgICAgICdAQHRyYW5zZHVjZXIvcmVzdWx0JzogZnVuY3Rpb24ob2JzKSB7XG4gICAgICAgIHJldHVybiBvYnMub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIGEgdHJhbnNkdWNlciB0byB0cmFuc2Zvcm0gdGhlIG9ic2VydmFibGUgc2VxdWVuY2VcbiAgICogQHBhcmFtIHtUcmFuc2R1Y2VyfSB0cmFuc2R1Y2VyIEEgdHJhbnNkdWNlciB0byBleGVjdXRlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHJlc3VsdHMgZnJvbSB0aGUgdHJhbnNkdWNlci5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by50cmFuc2R1Y2UgPSBmdW5jdGlvbih0cmFuc2R1Y2VyKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uKG8pIHtcbiAgICAgIHZhciB4Zm9ybSA9IHRyYW5zZHVjZXIodHJhbnNmb3JtRm9yT2JzZXJ2ZXIobykpO1xuICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFRyYW5zZHVjZU9ic2VydmVyKG8sIHhmb3JtKSk7XG4gICAgfSwgc291cmNlKTtcbiAgfTtcblxuICB2YXIgQW5vbnltb3VzT2JzZXJ2YWJsZSA9IFJ4LkFub255bW91c09ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEFub255bW91c09ic2VydmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICAvLyBGaXggc3Vic2NyaWJlciB0byBjaGVjayBmb3IgdW5kZWZpbmVkIG9yIGZ1bmN0aW9uIHJldHVybmVkIHRvIGRlY29yYXRlIGFzIERpc3Bvc2FibGVcbiAgICBmdW5jdGlvbiBmaXhTdWJzY3JpYmVyKHN1YnNjcmliZXIpIHtcbiAgICAgIHJldHVybiBzdWJzY3JpYmVyICYmIGlzRnVuY3Rpb24oc3Vic2NyaWJlci5kaXNwb3NlKSA/IHN1YnNjcmliZXIgOlxuICAgICAgICBpc0Z1bmN0aW9uKHN1YnNjcmliZXIpID8gZGlzcG9zYWJsZUNyZWF0ZShzdWJzY3JpYmVyKSA6IGRpc3Bvc2FibGVFbXB0eTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREaXNwb3NhYmxlKHMsIHN0YXRlKSB7XG4gICAgICB2YXIgYWRvID0gc3RhdGVbMF0sIHNlbGYgPSBzdGF0ZVsxXTtcbiAgICAgIHZhciBzdWIgPSB0cnlDYXRjaChzZWxmLl9fc3Vic2NyaWJlKS5jYWxsKHNlbGYsIGFkbyk7XG4gICAgICBpZiAoc3ViID09PSBlcnJvck9iaiAmJiAhYWRvLmZhaWwoZXJyb3JPYmouZSkpIHsgdGhyb3dlcihlcnJvck9iai5lKTsgfVxuICAgICAgYWRvLnNldERpc3Bvc2FibGUoZml4U3Vic2NyaWJlcihzdWIpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBBbm9ueW1vdXNPYnNlcnZhYmxlKHN1YnNjcmliZSwgcGFyZW50KSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHBhcmVudDtcbiAgICAgIHRoaXMuX19zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBBbm9ueW1vdXNPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBhZG8gPSBuZXcgQXV0b0RldGFjaE9ic2VydmVyKG8pLCBzdGF0ZSA9IFthZG8sIHRoaXNdO1xuXG4gICAgICBpZiAoY3VycmVudFRocmVhZFNjaGVkdWxlci5zY2hlZHVsZVJlcXVpcmVkKCkpIHtcbiAgICAgICAgY3VycmVudFRocmVhZFNjaGVkdWxlci5zY2hlZHVsZShzdGF0ZSwgc2V0RGlzcG9zYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXNwb3NhYmxlKG51bGwsIHN0YXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhZG87XG4gICAgfTtcblxuICAgIHJldHVybiBBbm9ueW1vdXNPYnNlcnZhYmxlO1xuXG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIHZhciBBdXRvRGV0YWNoT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEF1dG9EZXRhY2hPYnNlcnZlciwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIEF1dG9EZXRhY2hPYnNlcnZlcihvYnNlcnZlcikge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICB0aGlzLm0gPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICB9XG5cbiAgICB2YXIgQXV0b0RldGFjaE9ic2VydmVyUHJvdG90eXBlID0gQXV0b0RldGFjaE9ic2VydmVyLnByb3RvdHlwZTtcblxuICAgIEF1dG9EZXRhY2hPYnNlcnZlclByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5vYnNlcnZlci5vbk5leHQpLmNhbGwodGhpcy5vYnNlcnZlciwgdmFsdWUpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIHRocm93ZXIocmVzdWx0LmUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBBdXRvRGV0YWNoT2JzZXJ2ZXJQcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5vYnNlcnZlci5vbkVycm9yKS5jYWxsKHRoaXMub2JzZXJ2ZXIsIGVycik7XG4gICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgIHJlc3VsdCA9PT0gZXJyb3JPYmogJiYgdGhyb3dlcihyZXN1bHQuZSk7XG4gICAgfTtcblxuICAgIEF1dG9EZXRhY2hPYnNlcnZlclByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5vYnNlcnZlci5vbkNvbXBsZXRlZCkuY2FsbCh0aGlzLm9ic2VydmVyKTtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgcmVzdWx0ID09PSBlcnJvck9iaiAmJiB0aHJvd2VyKHJlc3VsdC5lKTtcbiAgICB9O1xuXG4gICAgQXV0b0RldGFjaE9ic2VydmVyUHJvdG90eXBlLnNldERpc3Bvc2FibGUgPSBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5tLnNldERpc3Bvc2FibGUodmFsdWUpOyB9O1xuICAgIEF1dG9EZXRhY2hPYnNlcnZlclByb3RvdHlwZS5nZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5tLmdldERpc3Bvc2FibGUoKTsgfTtcblxuICAgIEF1dG9EZXRhY2hPYnNlcnZlclByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX19zdXBlcl9fLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLm0uZGlzcG9zZSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQXV0b0RldGFjaE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICB2YXIgSW5uZXJTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAocywgbykge1xuICAgIHRoaXMuX3MgPSBzO1xuICAgIHRoaXMuX28gPSBvO1xuICB9O1xuXG4gIElubmVyU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fcy5pc0Rpc3Bvc2VkICYmIHRoaXMuX28gIT09IG51bGwpIHtcbiAgICAgIHZhciBpZHggPSB0aGlzLl9zLm9ic2VydmVycy5pbmRleE9mKHRoaXMuX28pO1xuICAgICAgdGhpcy5fcy5vYnNlcnZlcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB0aGlzLl9vID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqICBSZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIGJvdGggYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhcyB3ZWxsIGFzIGFuIG9ic2VydmVyLlxuICAgKiAgRWFjaCBub3RpZmljYXRpb24gaXMgYnJvYWRjYXN0ZWQgdG8gYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzLlxuICAgKi9cbiAgdmFyIFN1YmplY3QgPSBSeC5TdWJqZWN0ID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTdWJqZWN0LCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkUHJvcGVydGllcyhTdWJqZWN0LnByb3RvdHlwZSwgT2JzZXJ2ZXIucHJvdG90eXBlLCB7XG4gICAgICBfc3Vic2NyaWJlOiBmdW5jdGlvbiAobykge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvKTtcbiAgICAgICAgICByZXR1cm4gbmV3IElubmVyU3Vic2NyaXB0aW9uKHRoaXMsIG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgby5vbkVycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICAgIHJldHVybiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgICAgIH1cbiAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICByZXR1cm4gZGlzcG9zYWJsZUVtcHR5O1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1YmplY3QgaGFzIG9ic2VydmVycyBzdWJzY3JpYmVkIHRvIGl0LlxuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59IEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWJqZWN0IGhhcyBvYnNlcnZlcnMgc3Vic2NyaWJlZCB0byBpdC5cbiAgICAgICAqL1xuICAgICAgaGFzT2JzZXJ2ZXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLm9ic2VydmVycy5sZW5ndGggPiAwOyB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2UuXG4gICAgICAgKi9cbiAgICAgIG9uQ29tcGxldGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBvc1tpXS5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtNaXhlZH0gZXJyb3IgVGhlIGV4Y2VwdGlvbiB0byBzZW5kIHRvIGFsbCBvYnNlcnZlcnMuXG4gICAgICAgKi9cbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIG9zW2ldLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgYXJyaXZhbCBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgaW4gdGhlIHNlcXVlbmNlLlxuICAgICAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlbmQgdG8gYWxsIG9ic2VydmVycy5cbiAgICAgICAqL1xuICAgICAgb25OZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgb3NbaV0ub25OZXh0KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFVuc3Vic2NyaWJlIGFsbCBvYnNlcnZlcnMgYW5kIHJlbGVhc2UgcmVzb3VyY2VzLlxuICAgICAgICovXG4gICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzdWJqZWN0IGZyb20gdGhlIHNwZWNpZmllZCBvYnNlcnZlciBhbmQgb2JzZXJ2YWJsZS5cbiAgICAgKiBAcGFyYW0ge09ic2VydmVyfSBvYnNlcnZlciBUaGUgb2JzZXJ2ZXIgdXNlZCB0byBzZW5kIG1lc3NhZ2VzIHRvIHRoZSBzdWJqZWN0LlxuICAgICAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gb2JzZXJ2YWJsZSBUaGUgb2JzZXJ2YWJsZSB1c2VkIHRvIHN1YnNjcmliZSB0byBtZXNzYWdlcyBzZW50IGZyb20gdGhlIHN1YmplY3QuXG4gICAgICogQHJldHVybnMge1N1YmplY3R9IFN1YmplY3QgaW1wbGVtZW50ZWQgdXNpbmcgdGhlIGdpdmVuIG9ic2VydmVyIGFuZCBvYnNlcnZhYmxlLlxuICAgICAqL1xuICAgIFN1YmplY3QuY3JlYXRlID0gZnVuY3Rpb24gKG9ic2VydmVyLCBvYnNlcnZhYmxlKSB7XG4gICAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3Qob2JzZXJ2ZXIsIG9ic2VydmFibGUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU3ViamVjdDtcbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgLyoqXG4gICAqICBSZXByZXNlbnRzIHRoZSByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi5cbiAgICogIFRoZSBsYXN0IHZhbHVlIGJlZm9yZSB0aGUgT25Db21wbGV0ZWQgbm90aWZpY2F0aW9uLCBvciB0aGUgZXJyb3IgcmVjZWl2ZWQgdGhyb3VnaCBPbkVycm9yLCBpcyBzZW50IHRvIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycy5cbiAgICovXG4gIHZhciBBc3luY1N1YmplY3QgPSBSeC5Bc3luY1N1YmplY3QgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEFzeW5jU3ViamVjdCwgX19zdXBlcl9fKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzdWJqZWN0IHRoYXQgY2FuIG9ubHkgcmVjZWl2ZSBvbmUgdmFsdWUgYW5kIHRoYXQgdmFsdWUgaXMgY2FjaGVkIGZvciBhbGwgZnV0dXJlIG9ic2VydmF0aW9ucy5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBc3luY1N1YmplY3QoKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkUHJvcGVydGllcyhBc3luY1N1YmplY3QucHJvdG90eXBlLCBPYnNlcnZlci5wcm90b3R5cGUsIHtcbiAgICAgIF9zdWJzY3JpYmU6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gobyk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBJbm5lclN1YnNjcmlwdGlvbih0aGlzLCBvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgby5vbkVycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICBvLm9uTmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpc3Bvc2FibGVFbXB0eTtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWJqZWN0IGhhcyBvYnNlcnZlcnMgc3Vic2NyaWJlZCB0byBpdC5cbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3ViamVjdCBoYXMgb2JzZXJ2ZXJzIHN1YnNjcmliZWQgdG8gaXQuXG4gICAgICAgKi9cbiAgICAgIGhhc09ic2VydmVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgZW5kIG9mIHRoZSBzZXF1ZW5jZSwgYWxzbyBjYXVzaW5nIHRoZSBsYXN0IHJlY2VpdmVkIHZhbHVlIHRvIGJlIHNlbnQgb3V0IChpZiBhbnkpLlxuICAgICAgICovXG4gICAgICBvbkNvbXBsZXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaSwgbGVuO1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHZhciBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBvID0gb3NbaV07XG4gICAgICAgICAgICAgIG8ub25OZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICBvc1tpXS5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgZXJyb3IuXG4gICAgICAgKiBAcGFyYW0ge01peGVkfSBlcnJvciBUaGUgRXJyb3IgdG8gc2VuZCB0byBhbGwgb2JzZXJ2ZXJzLlxuICAgICAgICovXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIG9zW2ldLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFNlbmRzIGEgdmFsdWUgdG8gdGhlIHN1YmplY3QuIFRoZSBsYXN0IHZhbHVlIHJlY2VpdmVkIGJlZm9yZSBzdWNjZXNzZnVsIHRlcm1pbmF0aW9uIHdpbGwgYmUgc2VudCB0byBhbGwgc3Vic2NyaWJlZCBhbmQgZnV0dXJlIG9ic2VydmVycy5cbiAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIFRoZSB2YWx1ZSB0byBzdG9yZSBpbiB0aGUgc3ViamVjdC5cbiAgICAgICAqL1xuICAgICAgb25OZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogVW5zdWJzY3JpYmUgYWxsIG9ic2VydmVycyBhbmQgcmVsZWFzZSByZXNvdXJjZXMuXG4gICAgICAgKi9cbiAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQXN5bmNTdWJqZWN0O1xuICB9KE9ic2VydmFibGUpKTtcblxuICB2YXIgQW5vbnltb3VzU3ViamVjdCA9IFJ4LkFub255bW91c1N1YmplY3QgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEFub255bW91c1N1YmplY3QsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzU3ViamVjdChvYnNlcnZlciwgb2JzZXJ2YWJsZSkge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgdGhpcy5vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGFkZFByb3BlcnRpZXMoQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUsIE9ic2VydmVyLnByb3RvdHlwZSwge1xuICAgICAgX3N1YnNjcmliZTogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2YWJsZS5zdWJzY3JpYmUobyk7XG4gICAgICB9LFxuICAgICAgb25Db21wbGV0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vbkNvbXBsZXRlZCgpO1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgfSxcbiAgICAgIG9uTmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25OZXh0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBBbm9ueW1vdXNTdWJqZWN0O1xuICB9KE9ic2VydmFibGUpKTtcblxuICAvKipcbiAgICogIFJlcHJlc2VudHMgYSB2YWx1ZSB0aGF0IGNoYW5nZXMgb3ZlciB0aW1lLlxuICAgKiAgT2JzZXJ2ZXJzIGNhbiBzdWJzY3JpYmUgdG8gdGhlIHN1YmplY3QgdG8gcmVjZWl2ZSB0aGUgbGFzdCAob3IgaW5pdGlhbCkgdmFsdWUgYW5kIGFsbCBzdWJzZXF1ZW50IG5vdGlmaWNhdGlvbnMuXG4gICAqL1xuICB2YXIgQmVoYXZpb3JTdWJqZWN0ID0gUnguQmVoYXZpb3JTdWJqZWN0ID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhCZWhhdmlvclN1YmplY3QsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQmVoYXZpb3JTdWJqZWN0KHZhbHVlKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkUHJvcGVydGllcyhCZWhhdmlvclN1YmplY3QucHJvdG90eXBlLCBPYnNlcnZlci5wcm90b3R5cGUsIHtcbiAgICAgIF9zdWJzY3JpYmU6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG8pO1xuICAgICAgICAgIG8ub25OZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgIHJldHVybiBuZXcgSW5uZXJTdWJzY3JpcHRpb24odGhpcywgbyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICBvLm9uRXJyb3IodGhpcy5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHZhbHVlIG9yIHRocm93cyBhbiBleGNlcHRpb24uXG4gICAgICAgKiBWYWx1ZSBpcyBmcm96ZW4gYWZ0ZXIgb25Db21wbGV0ZWQgaXMgY2FsbGVkLlxuICAgICAgICogQWZ0ZXIgb25FcnJvciBpcyBjYWxsZWQgYWx3YXlzIHRocm93cyB0aGUgc3BlY2lmaWVkIGV4Y2VwdGlvbi5cbiAgICAgICAqIEFuIGV4Y2VwdGlvbiBpcyBhbHdheXMgdGhyb3duIGFmdGVyIGRpc3Bvc2UgaXMgY2FsbGVkLlxuICAgICAgICogQHJldHVybnMge01peGVkfSBUaGUgaW5pdGlhbCB2YWx1ZSBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yIHVudGlsIG9uTmV4dCBpcyBjYWxsZWQ7IGFmdGVyIHdoaWNoLCB0aGUgbGFzdCB2YWx1ZSBwYXNzZWQgdG8gb25OZXh0LlxuICAgICAgICovXG4gICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgdGhpcy5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3ViamVjdCBoYXMgb2JzZXJ2ZXJzIHN1YnNjcmliZWQgdG8gaXQuXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1YmplY3QgaGFzIG9ic2VydmVycyBzdWJzY3JpYmVkIHRvIGl0LlxuICAgICAgICovXG4gICAgICBoYXNPYnNlcnZlcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7IH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgZW5kIG9mIHRoZSBzZXF1ZW5jZS5cbiAgICAgICAqL1xuICAgICAgb25Db21wbGV0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIG9zW2ldLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge01peGVkfSBlcnJvciBUaGUgZXhjZXB0aW9uIHRvIHNlbmQgdG8gYWxsIG9ic2VydmVycy5cbiAgICAgICAqL1xuICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIG9zW2ldLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgYXJyaXZhbCBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgaW4gdGhlIHNlcXVlbmNlLlxuICAgICAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlbmQgdG8gYWxsIG9ic2VydmVycy5cbiAgICAgICAqL1xuICAgICAgb25OZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIG9zW2ldLm9uTmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFVuc3Vic2NyaWJlIGFsbCBvYnNlcnZlcnMgYW5kIHJlbGVhc2UgcmVzb3VyY2VzLlxuICAgICAgICovXG4gICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEJlaGF2aW9yU3ViamVjdDtcbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgYm90aCBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGFzIHdlbGwgYXMgYW4gb2JzZXJ2ZXIuXG4gICAqIEVhY2ggbm90aWZpY2F0aW9uIGlzIGJyb2FkY2FzdGVkIHRvIGFsbCBzdWJzY3JpYmVkIGFuZCBmdXR1cmUgb2JzZXJ2ZXJzLCBzdWJqZWN0IHRvIGJ1ZmZlciB0cmltbWluZyBwb2xpY2llcy5cbiAgICovXG4gIHZhciBSZXBsYXlTdWJqZWN0ID0gUnguUmVwbGF5U3ViamVjdCA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG5cbiAgICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVtb3ZhYmxlRGlzcG9zYWJsZShzdWJqZWN0LCBvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIGRpc3Bvc2FibGVDcmVhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBvYnNlcnZlci5kaXNwb3NlKCk7XG4gICAgICAgICFzdWJqZWN0LmlzRGlzcG9zZWQgJiYgc3ViamVjdC5vYnNlcnZlcnMuc3BsaWNlKHN1YmplY3Qub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpLCAxKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaGVyaXRzKFJlcGxheVN1YmplY3QsIF9fc3VwZXJfXyk7XG5cbiAgICAvKipcbiAgICAgKiAgSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFJlcGxheVN1YmplY3QgY2xhc3Mgd2l0aCB0aGUgc3BlY2lmaWVkIGJ1ZmZlciBzaXplLCB3aW5kb3cgc2l6ZSBhbmQgc2NoZWR1bGVyLlxuICAgICAqICBAcGFyYW0ge051bWJlcn0gW2J1ZmZlclNpemVdIE1heGltdW0gZWxlbWVudCBjb3VudCBvZiB0aGUgcmVwbGF5IGJ1ZmZlci5cbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IFt3aW5kb3dTaXplXSBNYXhpbXVtIHRpbWUgbGVuZ3RoIG9mIHRoZSByZXBsYXkgYnVmZmVyLlxuICAgICAqICBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gU2NoZWR1bGVyIHRoZSBvYnNlcnZlcnMgYXJlIGludm9rZWQgb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gUmVwbGF5U3ViamVjdChidWZmZXJTaXplLCB3aW5kb3dTaXplLCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyU2l6ZSA9IGJ1ZmZlclNpemUgPT0gbnVsbCA/IG1heFNhZmVJbnRlZ2VyIDogYnVmZmVyU2l6ZTtcbiAgICAgIHRoaXMud2luZG93U2l6ZSA9IHdpbmRvd1NpemUgPT0gbnVsbCA/IG1heFNhZmVJbnRlZ2VyIDogd2luZG93U2l6ZTtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyIHx8IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXI7XG4gICAgICB0aGlzLnEgPSBbXTtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGFkZFByb3BlcnRpZXMoUmVwbGF5U3ViamVjdC5wcm90b3R5cGUsIE9ic2VydmVyLnByb3RvdHlwZSwge1xuICAgICAgX3N1YnNjcmliZTogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgdmFyIHNvID0gbmV3IFNjaGVkdWxlZE9ic2VydmVyKHRoaXMuc2NoZWR1bGVyLCBvKSwgc3Vic2NyaXB0aW9uID0gY3JlYXRlUmVtb3ZhYmxlRGlzcG9zYWJsZSh0aGlzLCBzbyk7XG5cbiAgICAgICAgdGhpcy5fdHJpbSh0aGlzLnNjaGVkdWxlci5ub3coKSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goc28pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLnEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBzby5vbk5leHQodGhpcy5xW2ldLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgc28ub25FcnJvcih0aGlzLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHNvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzby5lbnN1cmVBY3RpdmUoKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWJqZWN0IGhhcyBvYnNlcnZlcnMgc3Vic2NyaWJlZCB0byBpdC5cbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3ViamVjdCBoYXMgb2JzZXJ2ZXJzIHN1YnNjcmliZWQgdG8gaXQuXG4gICAgICAgKi9cbiAgICAgIGhhc09ic2VydmVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgICAgIH0sXG4gICAgICBfdHJpbTogZnVuY3Rpb24gKG5vdykge1xuICAgICAgICB3aGlsZSAodGhpcy5xLmxlbmd0aCA+IHRoaXMuYnVmZmVyU2l6ZSkge1xuICAgICAgICAgIHRoaXMucS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0aGlzLnEubGVuZ3RoID4gMCAmJiAobm93IC0gdGhpcy5xWzBdLmludGVydmFsKSA+IHRoaXMud2luZG93U2l6ZSkge1xuICAgICAgICAgIHRoaXMucS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGFycml2YWwgb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50IGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZW5kIHRvIGFsbCBvYnNlcnZlcnMuXG4gICAgICAgKi9cbiAgICAgIG9uTmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdmFyIG5vdyA9IHRoaXMuc2NoZWR1bGVyLm5vdygpO1xuICAgICAgICB0aGlzLnEucHVzaCh7IGludGVydmFsOiBub3csIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgdGhpcy5fdHJpbShub3cpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBvYnNlcnZlciA9IG9zW2ldO1xuICAgICAgICAgIG9ic2VydmVyLm9uTmV4dCh2YWx1ZSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuZW5zdXJlQWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtNaXhlZH0gZXJyb3IgVGhlIGV4Y2VwdGlvbiB0byBzZW5kIHRvIGFsbCBvYnNlcnZlcnMuXG4gICAgICAgKi9cbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdmFyIG5vdyA9IHRoaXMuc2NoZWR1bGVyLm5vdygpO1xuICAgICAgICB0aGlzLl90cmltKG5vdyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBvYnNlcnZlciA9IG9zW2ldO1xuICAgICAgICAgIG9ic2VydmVyLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgIG9ic2VydmVyLmVuc3VyZUFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2UuXG4gICAgICAgKi9cbiAgICAgIG9uQ29tcGxldGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB2YXIgbm93ID0gdGhpcy5zY2hlZHVsZXIubm93KCk7XG4gICAgICAgIHRoaXMuX3RyaW0obm93KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIG9ic2VydmVyID0gb3NbaV07XG4gICAgICAgICAgb2JzZXJ2ZXIub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICBvYnNlcnZlci5lbnN1cmVBY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogVW5zdWJzY3JpYmUgYWxsIG9ic2VydmVycyBhbmQgcmVsZWFzZSByZXNvdXJjZXMuXG4gICAgICAgKi9cbiAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFJlcGxheVN1YmplY3Q7XG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIC8qKlxuICAqIFVzZWQgdG8gcGF1c2UgYW5kIHJlc3VtZSBzdHJlYW1zLlxuICAqL1xuICBSeC5QYXVzZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFBhdXNlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBQYXVzZXIoKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXVzZXMgdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UuXG4gICAgICovXG4gICAgUGF1c2VyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5vbk5leHQoZmFsc2UpOyB9O1xuXG4gICAgLyoqXG4gICAgKiBSZXN1bWVzIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlLlxuICAgICovXG4gICAgUGF1c2VyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7IHRoaXMub25OZXh0KHRydWUpOyB9O1xuXG4gICAgcmV0dXJuIFBhdXNlcjtcbiAgfShTdWJqZWN0KSk7XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgcm9vdC5SeCA9IFJ4O1xuXG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFJ4O1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGZyZWVFeHBvcnRzICYmIGZyZWVNb2R1bGUpIHtcbiAgICAvLyBpbiBOb2RlLmpzIG9yIFJpbmdvSlNcbiAgICBpZiAobW9kdWxlRXhwb3J0cykge1xuICAgICAgKGZyZWVNb2R1bGUuZXhwb3J0cyA9IFJ4KS5SeCA9IFJ4O1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmVlRXhwb3J0cy5SeCA9IFJ4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpbiBhIGJyb3dzZXIgb3IgUmhpbm9cbiAgICByb290LlJ4ID0gUng7XG4gIH1cblxuICAvLyBBbGwgY29kZSBiZWZvcmUgdGhpcyBwb2ludCB3aWxsIGJlIGZpbHRlcmVkIGZyb20gc3RhY2sgdHJhY2VzLlxuICB2YXIgckVuZGluZ0xpbmUgPSBjYXB0dXJlTGluZSgpO1xuXG59LmNhbGwodGhpcykpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xpbWItc29jaWFsL34vcngtbGl0ZS9yeC5saXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydleHBvcnRzJywgJ21vZHVsZSddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBtb2QpO1xuICAgIGdsb2JhbC5mZXRjaEpzb25wID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBtb2R1bGUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0OiA1MDAwLFxuICAgIGpzb25wQ2FsbGJhY2s6ICdjYWxsYmFjaydcbiAgfTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNhbGxiYWNrRnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICdqc29ucF8nICsgRGF0ZS5ub3coKSArICdfJyArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcbiAgfVxuXG4gIC8vIEtub3duIGlzc3VlOiBXaWxsIHRocm93ICdVbmNhdWdodCBSZWZlcmVuY2VFcnJvcjogY2FsbGJhY2tfKioqIGlzIG5vdCBkZWZpbmVkJyBlcnJvciBpZiByZXF1ZXN0IHRpbWVvdXRcbiAgZnVuY3Rpb24gY2xlYXJGdW5jdGlvbihmdW5jdGlvbk5hbWUpIHtcbiAgICAvLyBJRTggdGhyb3dzIGFuIGV4Y2VwdGlvbiB3aGVuIHlvdSB0cnkgdG8gZGVsZXRlIGEgcHJvcGVydHkgb24gd2luZG93XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgyNDIyOC83NTEwODlcbiAgICB0cnkge1xuICAgICAgZGVsZXRlIHdpbmRvd1tmdW5jdGlvbk5hbWVdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHdpbmRvd1tmdW5jdGlvbk5hbWVdID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVNjcmlwdChzY3JpcHRJZCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JpcHRJZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gIH1cblxuICB2YXIgZmV0Y2hKc29ucCA9IGZ1bmN0aW9uIGZldGNoSnNvbnAodXJsKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciB0aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0ICE9IG51bGwgPyBvcHRpb25zLnRpbWVvdXQgOiBkZWZhdWx0T3B0aW9ucy50aW1lb3V0O1xuICAgIHZhciBqc29ucENhbGxiYWNrID0gb3B0aW9ucy5qc29ucENhbGxiYWNrICE9IG51bGwgPyBvcHRpb25zLmpzb25wQ2FsbGJhY2sgOiBkZWZhdWx0T3B0aW9ucy5qc29ucENhbGxiYWNrO1xuXG4gICAgdmFyIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IGdlbmVyYXRlQ2FsbGJhY2tGdW5jdGlvbigpO1xuXG4gICAgICB3aW5kb3dbY2FsbGJhY2tGdW5jdGlvbl0gPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgb2s6IHRydWUsXG4gICAgICAgICAgLy8ga2VlcCBjb25zaXN0ZW50IHdpdGggZmV0Y2ggQVBJXG4gICAgICAgICAganNvbjogZnVuY3Rpb24ganNvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG5cbiAgICAgICAgcmVtb3ZlU2NyaXB0KGpzb25wQ2FsbGJhY2sgKyAnXycgKyBjYWxsYmFja0Z1bmN0aW9uKTtcblxuICAgICAgICBjbGVhckZ1bmN0aW9uKGNhbGxiYWNrRnVuY3Rpb24pO1xuICAgICAgfTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgc2V0IHRoZWlyIG93biBwYXJhbXMsIGFuZCBpZiBub3QgYWRkIGEgPyB0byBzdGFydCBhIGxpc3Qgb2YgcGFyYW1zXG4gICAgICB1cmwgKz0gdXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJic7XG5cbiAgICAgIHZhciBqc29ucFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAganNvbnBTY3JpcHQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHVybCArIGpzb25wQ2FsbGJhY2sgKyAnPScgKyBjYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgIGpzb25wU2NyaXB0LmlkID0ganNvbnBDYWxsYmFjayArICdfJyArIGNhbGxiYWNrRnVuY3Rpb247XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoanNvbnBTY3JpcHQpO1xuXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSlNPTlAgcmVxdWVzdCB0byAnICsgdXJsICsgJyB0aW1lZCBvdXQnKSk7XG5cbiAgICAgICAgY2xlYXJGdW5jdGlvbihjYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgICAgcmVtb3ZlU2NyaXB0KGpzb25wQ2FsbGJhY2sgKyAnXycgKyBjYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGV4cG9ydCBhcyBnbG9iYWwgZnVuY3Rpb25cbiAgLypcbiAgbGV0IGxvY2FsO1xuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbCA9IHNlbGY7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgIH1cbiAgfVxuICBcbiAgbG9jYWwuZmV0Y2hKc29ucCA9IGZldGNoSnNvbnA7XG4gICovXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmZXRjaEpzb25wO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmV0Y2gtanNvbnAvYnVpbGQvZmV0Y2gtanNvbnAuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbGUgZnJvbSAnLi9UaWxlJztcbmltcG9ydCB7VHJhbnNpdGlvbk1vdGlvbiwgc3ByaW5nfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xuXG5cbmNsYXNzIFdhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaXRlbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBnZXRTdHlsZXMoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ3MgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5pdGVtcykubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBjb25maWdzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogc3ByaW5nKDEpLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBzcHJpbmcoMzc1KSxcbiAgICAgICAgICAgICAgICBtYXJnaW46IHNwcmluZygxMCksXG4gICAgICAgICAgICAgICAgaXRlbTogdGhpcy5wcm9wcy5pdGVtc1trZXldXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XG4gICAgfVxuXG4gICAgd2lsbEVudGVyKGtleSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BhY2l0eTogc3ByaW5nKDApLFxuICAgICAgICAgICAgd2lkdGg6IHNwcmluZygwKSxcbiAgICAgICAgICAgIG1hcmdpbjogc3ByaW5nKDApLFxuICAgICAgICAgICAgaXRlbTogdGhpcy5wcm9wcy5pdGVtc1trZXldXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2lsbExlYXZlKGtleSwgc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHNwcmluZygwKSxcbiAgICAgICAgICAgIHdpZHRoOiBzcHJpbmcoMCksXG4gICAgICAgICAgICBtYXJnaW46IHNwcmluZygwKSxcbiAgICAgICAgICAgIGl0ZW06IHN0eWxlLml0ZW1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXJUaWxlKGtleSwgaXRlbVZhbHVlcykge1xuXG4gICAgICAgIGNvbnN0IHtpdGVtLCAuLi5zdHlsZUNvbmZpZ30gPSBpdGVtVmFsdWVzO1xuICAgICAgICBjb25zdCB7Li4uaXRlbVByb3BzfSA9IGl0ZW07XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBvcGFjaXR5OiBzdHlsZUNvbmZpZy5vcGFjaXR5LFxuICAgICAgICAgICAgd2lkdGg6IGAke3N0eWxlQ29uZmlnLndpZHRofXB4YCxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHN0eWxlQ29uZmlnLm1hcmdpbixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBzdHlsZUNvbmZpZy5tYXJnaW5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRpbGUga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgey4uLml0ZW1Qcm9wcyB9IC8+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VHJhbnNpdGlvbk1vdGlvblxuICAgICAgICAgICAgICAgIHN0eWxlcz17dGhpcy5nZXRTdHlsZXMuYmluZCh0aGlzKSgpfVxuICAgICAgICAgICAgICAgIHdpbGxFbnRlcj17dGhpcy53aWxsRW50ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICB3aWxsTGVhdmU9e3RoaXMud2lsbExlYXZlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIHt2YWx1ZXMgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGltYl9fd2FsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHZhbHVlcykubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlcyA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRpbGUoa2V5LCBpdGVtVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1RyYW5zaXRpb25Nb3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9XYWxsLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL01lc3NhZ2UnO1xuaW1wb3J0IEF1dGhvciBmcm9tICcuL0F1dGhvcic7XG5cblxuY2xhc3MgVGlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlSW1hZ2UoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW1hZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHt1cmw6IHNyYywgd2lkdGgsIGhlaWdodH0gPSB0aGlzLnByb3BzLmltYWdlO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXsgc3JjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyB3aWR0aCB9XG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17IGhlaWdodCB9Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY3JlYXRlTWVzc2FnZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGJvZHk9eyB0aGlzLnByb3BzLm1lc3NhZ2UgfS8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzU3RyaW5nKCkge1xuXG4gICAgICAgIGxldCBjbGFzc1N0cmluZyA9IGBjbGltYl9fdGlsZSBjbGltYl9fdGlsZS0tJHt0aGlzLnByb3BzLnNvdXJjZV90eXBlfWA7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW1hZ2UpIHtcbiAgICAgICAgICAgIGNsYXNzU3RyaW5nICs9ICcgY2xpbWJfX3RpbGUtLWhhcy1tZWRpYSBjbGltYl9fdGlsZS0taGFzLWltYWdlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzU3RyaW5nICs9ICcgY2xpbWJfX3RpbGUtLWhhcy1uby1pbWFnZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aWRlb191cmwpIHtcbiAgICAgICAgICAgIGNsYXNzU3RyaW5nICs9ICcgY2xpbWJfX3RpbGUtLWhhcy1tZWRpYSBjbGltYl9fdGlsZS0taGFzLXZpZGVvJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzU3RyaW5nICs9ICcgY2xpbWJfX3RpbGUtLWhhcy1uby12aWRlbyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NTdHJpbmc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5jcmVhdGVJbWFnZSgpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5jcmVhdGVNZXNzYWdlKCk7XG4gICAgICAgIGNvbnN0IGNsYXNzU3RyaW5nID0gdGhpcy5jcmVhdGVDbGFzc1N0cmluZygpO1xuICAgICAgICBjb25zdCB7YXV0aG9yfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NTdHJpbmcgfVxuICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXsgdGhpcy5wcm9wcy5saW5rIH0+XG4gICAgICAgICAgICAgICAgICAgIHsgaW1hZ2UgfVxuICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpbWJfX3RpbGVfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgeyBtZXNzYWdlIH1cblxuICAgICAgICAgICAgICAgICAgICA8QXV0aG9yIHsuLi5hdXRob3J9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuVGlsZS5wcm9wVHlwZXMgPSB7XG5cbiAgICAvLyBSZXF1aXJlZCBhdHRyc1xuICAgIGxpbms6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzb3VyY2VfdHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpbWVzdGFtcDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGF1dGhvcjogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgdXNlcm5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgcGljdHVyZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBsaW5rOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9KSxcblxuICAgIC8vIE9wdGlvbmFsIGF0dHJzXG4gICAgbWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2aWRlb19zcmM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW1hZ2U6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICAgIH0pXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL1RpbGUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNsaW1iX190aWxlX19pbWFnZVwiXG4gICAgICAgICAgICAgICAgIHNyYz17IHRoaXMucHJvcHMuc3JjIH0gZGF0YS13aWR0aD17IHRoaXMucHJvcHMud2lkdGggfSBkYXRhLWhlaWdodD17IHRoaXMucHJvcHMuaGVpZ2h0IH0vPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuSW1hZ2UucHJvcFR5cGVzID0ge1xuICAgIHNyYzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL0ltYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaW1iX190aWxlX19tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuYm9keX19PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5NZXNzYWdlLnByb3BUeXBlcyA9IHtcbiAgICBib2R5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL01lc3NhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBBdXRob3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbGltYl9fdGlsZV9fYXV0aG9yXCJcbiAgICAgICAgICAgICAgIGhyZWY9eyB0aGlzLnByb3BzLmxpbmsgfT5cblxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgdGhpcy5wcm9wcy5waWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgYWx0PXsgYFByb2ZpbGUgcGljIG9mICR7dGhpcy5wcm9wcy5uYW1lfWAgfS8+XG5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2xpbWJfX3RpbGVfX2F1dGhvcl9fdXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnVzZXJuYW1lIH1cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXV0aG9yLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRob3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL0F1dGhvci5qc3hcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NvbXBvbmVudHMyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzJyk7XG5cbnZhciBfY29tcG9uZW50czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnRzMik7XG5cbnZhciBfcmVvcmRlcktleXMgPSByZXF1aXJlKCcuL3Jlb3JkZXJLZXlzJyk7XG5cbnZhciBfcmVvcmRlcktleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVvcmRlcktleXMpO1xuXG52YXIgX2NvbXBvbmVudHMgPSBfY29tcG9uZW50czNbJ2RlZmF1bHQnXShfcmVhY3QyWydkZWZhdWx0J10pO1xuXG52YXIgU3ByaW5nID0gX2NvbXBvbmVudHMuU3ByaW5nO1xudmFyIFRyYW5zaXRpb25TcHJpbmcgPSBfY29tcG9uZW50cy5UcmFuc2l0aW9uU3ByaW5nO1xudmFyIE1vdGlvbiA9IF9jb21wb25lbnRzLk1vdGlvbjtcbnZhciBTdGFnZ2VyZWRNb3Rpb24gPSBfY29tcG9uZW50cy5TdGFnZ2VyZWRNb3Rpb247XG52YXIgVHJhbnNpdGlvbk1vdGlvbiA9IF9jb21wb25lbnRzLlRyYW5zaXRpb25Nb3Rpb247XG5leHBvcnRzLlNwcmluZyA9IFNwcmluZztcbmV4cG9ydHMuVHJhbnNpdGlvblNwcmluZyA9IFRyYW5zaXRpb25TcHJpbmc7XG5leHBvcnRzLk1vdGlvbiA9IE1vdGlvbjtcbmV4cG9ydHMuU3RhZ2dlcmVkTW90aW9uID0gU3RhZ2dlcmVkTW90aW9uO1xuZXhwb3J0cy5UcmFuc2l0aW9uTW90aW9uID0gVHJhbnNpdGlvbk1vdGlvbjtcblxudmFyIF9zcHJpbmcyID0gcmVxdWlyZSgnLi9zcHJpbmcnKTtcblxudmFyIF9zcHJpbmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ByaW5nMik7XG5cbmV4cG9ydHMuc3ByaW5nID0gX3NwcmluZzNbJ2RlZmF1bHQnXTtcblxudmFyIF9wcmVzZXRzMiA9IHJlcXVpcmUoJy4vcHJlc2V0cycpO1xuXG52YXIgX3ByZXNldHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0czIpO1xuXG5leHBvcnRzLnByZXNldHMgPSBfcHJlc2V0czNbJ2RlZmF1bHQnXTtcbnZhciB1dGlscyA9IHtcbiAgcmVvcmRlcktleXM6IF9yZW9yZGVyS2V5czJbJ2RlZmF1bHQnXVxufTtcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3JlYWN0LW1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9ub1ZlbG9jaXR5ID0gcmVxdWlyZSgnLi9ub1ZlbG9jaXR5Jyk7XG5cbnZhciBfbm9WZWxvY2l0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub1ZlbG9jaXR5KTtcblxudmFyIF9oYXNSZWFjaGVkU3R5bGUgPSByZXF1aXJlKCcuL2hhc1JlYWNoZWRTdHlsZScpO1xuXG52YXIgX2hhc1JlYWNoZWRTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNSZWFjaGVkU3R5bGUpO1xuXG52YXIgX21lcmdlRGlmZiA9IHJlcXVpcmUoJy4vbWVyZ2VEaWZmJyk7XG5cbnZhciBfbWVyZ2VEaWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlRGlmZik7XG5cbnZhciBfYW5pbWF0aW9uTG9vcCA9IHJlcXVpcmUoJy4vYW5pbWF0aW9uTG9vcCcpO1xuXG52YXIgX2FuaW1hdGlvbkxvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0aW9uTG9vcCk7XG5cbnZhciBfemVybyA9IHJlcXVpcmUoJy4vemVybycpO1xuXG52YXIgX3plcm8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfemVybyk7XG5cbnZhciBfdXBkYXRlVHJlZSA9IHJlcXVpcmUoJy4vdXBkYXRlVHJlZScpO1xuXG52YXIgX2RlcHJlY2F0ZWRTcHJpbmdzMiA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlZFNwcmluZ3MnKTtcblxudmFyIF9kZXByZWNhdGVkU3ByaW5nczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGVkU3ByaW5nczIpO1xuXG52YXIgX3N0cmlwU3R5bGUgPSByZXF1aXJlKCcuL3N0cmlwU3R5bGUnKTtcblxudmFyIF9zdHJpcFN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmlwU3R5bGUpO1xuXG52YXIgc3RhcnRBbmltYXRpb24gPSBfYW5pbWF0aW9uTG9vcDJbJ2RlZmF1bHQnXSgpO1xuXG5mdW5jdGlvbiBtYXBPYmplY3QoZiwgb2JqKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXRba2V5XSA9IGYob2JqW2tleV0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZXZlcnlPYmooZiwgb2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFmKG9ialtrZXldLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRzKFJlYWN0KSB7XG4gIHZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbiAgdmFyIE1vdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ01vdGlvbicsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGEgY29uZmlnIGluIGhlcmVcbiAgICAgIGRlZmF1bHRWYWx1ZTogZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1NwcmluZ1xcJ3MgYGRlZmF1bHRWYWx1ZWAgaGFzIGJlZW4gY2hhbmdlZCB0byBgZGVmYXVsdFN0eWxlYC4gJyArICdJdHMgZm9ybWF0IHJlY2VpdmVkIGEgZmV3IChlYXN5IHRvIHVwZGF0ZSEpIGNoYW5nZXMgYXMgd2VsbC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVuZFZhbHVlOiBmdW5jdGlvbiBlbmRWYWx1ZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTcHJpbmdcXCdzIGBlbmRWYWx1ZWAgaGFzIGJlZW4gY2hhbmdlZCB0byBgc3R5bGVgLiBJdHMgZm9ybWF0ICcgKyAncmVjZWl2ZWQgYSBmZXcgKGVhc3kgdG8gdXBkYXRlISkgY2hhbmdlcyBhcyB3ZWxsLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVmYXVsdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgZGVmYXVsdFN0eWxlID0gX3Byb3BzLmRlZmF1bHRTdHlsZTtcbiAgICAgIHZhciBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuICAgICAgdmFyIGN1cnJlbnRTdHlsZSA9IGRlZmF1bHRTdHlsZSB8fCBzdHlsZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZTogY3VycmVudFN0eWxlLFxuICAgICAgICBjdXJyZW50VmVsb2NpdHk6IG1hcE9iamVjdChfemVybzJbJ2RlZmF1bHQnXSwgY3VycmVudFN0eWxlKVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25TdGVwOiBmdW5jdGlvbiBhbmltYXRpb25TdGVwKHRpbWVzdGVwLCBzdGF0ZSkge1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZSA9IHN0YXRlLmN1cnJlbnRTdHlsZTtcbiAgICAgIHZhciBjdXJyZW50VmVsb2NpdHkgPSBzdGF0ZS5jdXJyZW50VmVsb2NpdHk7XG4gICAgICB2YXIgc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuXG4gICAgICB2YXIgbmV3Q3VycmVudFN0eWxlID0gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFN0eWxlKHRpbWVzdGVwLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0eSwgc3R5bGUpO1xuICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0eSA9IF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRWZWxvY2l0eSh0aW1lc3RlcCwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdHksIHN0eWxlKTtcblxuICAgICAgLy8gVE9PRDogdGhpcyBpc24ndCBuZWNlc3NhcnkgYW55bW9yZS4gSXQgd2FzIHVzZWQgb25seSBhZ2FpbnN0IGVuZFZhbHVlIGZ1bmNcbiAgICAgIGlmIChfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXShjdXJyZW50VmVsb2NpdHksIG5ld0N1cnJlbnRTdHlsZSkgJiYgX25vVmVsb2NpdHkyWydkZWZhdWx0J10obmV3Q3VycmVudFZlbG9jaXR5LCBuZXdDdXJyZW50U3R5bGUpKSB7XG4gICAgICAgIC8vIGNoZWNrIGV4cGxhbmF0aW9uIGluIGBNb3Rpb24uYW5pbWF0aW9uUmVuZGVyYFxuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTsgLy8gTmFzdHkgc2lkZSBlZmZlY3RzLi4uLlxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGU6IG5ld0N1cnJlbnRTdHlsZSxcbiAgICAgICAgY3VycmVudFZlbG9jaXR5OiBuZXdDdXJyZW50VmVsb2NpdHlcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHN0b3BBbmltYXRpb246IG51bGwsXG5cbiAgICAvLyB1c2VkIGluIGFuaW1hdGlvblJlbmRlclxuICAgIGhhc1VubW91bnRlZDogZmFsc2UsXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuaGFzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgc3RhcnRBbmltYXRpbmc6IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW5nKCkge1xuICAgICAgLy8gSXMgc21hcnQgZW5vdWdoIHRvIG5vdCBzdGFydCBpdCB0d2ljZVxuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uID0gc3RhcnRBbmltYXRpb24odGhpcy5zdGF0ZSwgdGhpcy5hbmltYXRpb25TdGVwLCB0aGlzLmFuaW1hdGlvblJlbmRlcik7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblJlbmRlcjogZnVuY3Rpb24gYW5pbWF0aW9uUmVuZGVyKGFscGhhLCBuZXh0U3RhdGUsIHByZXZTdGF0ZSkge1xuICAgICAgLy8gYHRoaXMuaGFzVW5tb3VudGVkYCBtaWdodCBiZSB0cnVlIGluIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uOlxuICAgICAgLy8gdXNlciBkb2VzIHNvbWUgY2hlY2tzIGluIGBzdHlsZWAgYW5kIGNhbGxzIGFuIG93bmVyIGhhbmRsZXJcbiAgICAgIC8vIG93bmVyIHNldHMgc3RhdGUgaW4gdGhlIGNhbGxiYWNrLCB0cmlnZ2VyaW5nIGEgcmUtcmVuZGVyXG4gICAgICAvLyB1bm1vdW50cyBNb3Rpb25cbiAgICAgIGlmICghdGhpcy5oYXNVbm1vdW50ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFN0eWxlOiBfdXBkYXRlVHJlZS5pbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBuZXh0U3RhdGUuY3VycmVudFN0eWxlLCBwcmV2U3RhdGUuY3VycmVudFN0eWxlKSxcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdHk6IG5leHRTdGF0ZS5jdXJyZW50VmVsb2NpdHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHN0cmlwcGVkU3R5bGUgPSBfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXSh0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZSk7XG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4oc3RyaXBwZWRTdHlsZSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIFN0YWdnZXJlZE1vdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1N0YWdnZXJlZE1vdGlvbicsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIGRlZmF1bHRTdHlsZTogZnVuY3Rpb24gZGVmYXVsdFN0eWxlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBmb3Jnb3QgdGhlIFwic1wiIGZvciBgU3RhZ2dlcmVkTW90aW9uYFxcJ3MgYGRlZmF1bHRTdHlsZXNgLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3R5bGU6IGZ1bmN0aW9uIHN0eWxlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBmb3Jnb3QgdGhlIFwic1wiIGZvciBgU3RhZ2dlcmVkTW90aW9uYFxcJ3MgYHN0eWxlc2AuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBjb25maWdzIGluIGhlcmVcbiAgICAgIGRlZmF1bHRTdHlsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgICAgc3R5bGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc3R5bGVzID0gX3Byb3BzMi5zdHlsZXM7XG4gICAgICB2YXIgZGVmYXVsdFN0eWxlcyA9IF9wcm9wczIuZGVmYXVsdFN0eWxlcztcblxuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBkZWZhdWx0U3R5bGVzID8gZGVmYXVsdFN0eWxlcyA6IHN0eWxlcygpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IGN1cnJlbnRTdHlsZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcE9iamVjdChfemVybzJbJ2RlZmF1bHQnXSwgcyk7XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblN0ZXA6IGZ1bmN0aW9uIGFuaW1hdGlvblN0ZXAodGltZXN0ZXAsIHN0YXRlKSB7XG4gICAgICB2YXIgY3VycmVudFN0eWxlcyA9IHN0YXRlLmN1cnJlbnRTdHlsZXM7XG4gICAgICB2YXIgY3VycmVudFZlbG9jaXRpZXMgPSBzdGF0ZS5jdXJyZW50VmVsb2NpdGllcztcblxuICAgICAgdmFyIHN0eWxlcyA9IHRoaXMucHJvcHMuc3R5bGVzKGN1cnJlbnRTdHlsZXMubWFwKF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKSk7XG5cbiAgICAgIHZhciBuZXdDdXJyZW50U3R5bGVzID0gY3VycmVudFN0eWxlcy5tYXAoZnVuY3Rpb24gKGN1cnJlbnRTdHlsZSwgaSkge1xuICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFN0eWxlKHRpbWVzdGVwLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0aWVzW2ldLCBzdHlsZXNbaV0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXRpZXMgPSBjdXJyZW50U3R5bGVzLm1hcChmdW5jdGlvbiAoY3VycmVudFN0eWxlLCBpKSB7XG4gICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS51cGRhdGVDdXJyZW50VmVsb2NpdHkodGltZXN0ZXAsIGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXRpZXNbaV0sIHN0eWxlc1tpXSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVE9ETzogaXMgdGhpcyByaWdodD9cbiAgICAgIGlmIChjdXJyZW50VmVsb2NpdGllcy5ldmVyeShmdW5jdGlvbiAodiwgaykge1xuICAgICAgICByZXR1cm4gX25vVmVsb2NpdHkyWydkZWZhdWx0J10odiwgY3VycmVudFN0eWxlc1trXSk7XG4gICAgICB9KSAmJiBuZXdDdXJyZW50VmVsb2NpdGllcy5ldmVyeShmdW5jdGlvbiAodiwgaykge1xuICAgICAgICByZXR1cm4gX25vVmVsb2NpdHkyWydkZWZhdWx0J10odiwgbmV3Q3VycmVudFN0eWxlc1trXSk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlczogbmV3Q3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG5ld0N1cnJlbnRWZWxvY2l0aWVzXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBzdG9wQW5pbWF0aW9uOiBudWxsLFxuXG4gICAgLy8gdXNlZCBpbiBhbmltYXRpb25SZW5kZXJcbiAgICBoYXNVbm1vdW50ZWQ6IGZhbHNlLFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLmhhc1VubW91bnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0YXJ0QW5pbWF0aW5nOiBmdW5jdGlvbiBzdGFydEFuaW1hdGluZygpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbiA9IHN0YXJ0QW5pbWF0aW9uKHRoaXMuc3RhdGUsIHRoaXMuYW5pbWF0aW9uU3RlcCwgdGhpcy5hbmltYXRpb25SZW5kZXIpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25SZW5kZXI6IGZ1bmN0aW9uIGFuaW1hdGlvblJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpIHtcbiAgICAgIC8vIFNlZSBjb21tZW50IGluIE1vdGlvbi5cbiAgICAgIGlmICghdGhpcy5oYXNVbm1vdW50ZWQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBuZXh0U3RhdGUuY3VycmVudFN0eWxlcy5tYXAoZnVuY3Rpb24gKHN0eWxlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLmludGVycG9sYXRlVmFsdWUoYWxwaGEsIHN0eWxlLCBwcmV2U3RhdGUuY3VycmVudFN0eWxlc1tpXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXh0U3RhdGUuY3VycmVudFZlbG9jaXRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHN0cmlwcGVkU3R5bGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMubWFwKF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKTtcbiAgICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbihzdHJpcHBlZFN0eWxlKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIFJlYWN0LkNoaWxkcmVuLm9ubHkocmVuZGVyZWRDaGlsZHJlbik7XG4gICAgfVxuICB9KTtcblxuICB2YXIgVHJhbnNpdGlvbk1vdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25Nb3Rpb24nLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdUcmFuc2l0aW9uU3ByaW5nXFwncyBgZGVmYXVsdFZhbHVlYCBoYXMgYmVlbiBjaGFuZ2VkIHRvICcgKyAnYGRlZmF1bHRTdHlsZXNgLiBJdHMgZm9ybWF0IHJlY2VpdmVkIGEgZmV3IChlYXN5IHRvIHVwZGF0ZSEpICcgKyAnY2hhbmdlcyBhcyB3ZWxsLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW5kVmFsdWU6IGZ1bmN0aW9uIGVuZFZhbHVlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RyYW5zaXRpb25TcHJpbmdcXCdzIGBlbmRWYWx1ZWAgaGFzIGJlZW4gY2hhbmdlZCB0byBgc3R5bGVzYC4gJyArICdJdHMgZm9ybWF0IHJlY2VpdmVkIGEgZmV3IChlYXN5IHRvIHVwZGF0ZSEpIGNoYW5nZXMgYXMgd2VsbC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRTdHlsZTogZnVuY3Rpb24gZGVmYXVsdFN0eWxlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBmb3Jnb3QgdGhlIFwic1wiIGZvciBgVHJhbnNpdGlvbk1vdGlvbmBcXCdzIGBkZWZhdWx0U3R5bGVzYC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0eWxlOiBmdW5jdGlvbiBzdHlsZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgZm9yZ290IHRoZSBcInNcIiBmb3IgYFRyYW5zaXRpb25Nb3Rpb25gXFwncyBgc3R5bGVzYC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGNvbmZpZ3MgaW4gaGVyZVxuICAgICAgZGVmYXVsdFN0eWxlczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkpLFxuICAgICAgc3R5bGVzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCldKS5pc1JlcXVpcmVkLFxuICAgICAgd2lsbExlYXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgLy8gVE9PRDogd2FybiBhZ2FpbnN0IHB1dHRpbmcgY29uZmlncyBpbiBoZXJlXG4gICAgICB3aWxsRW50ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jXSksXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpbGxFbnRlcjogZnVuY3Rpb24gd2lsbEVudGVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHdpbGxMZWF2ZTogZnVuY3Rpb24gd2lsbExlYXZlKCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdHlsZXMgPSBfcHJvcHMzLnN0eWxlcztcbiAgICAgIHZhciBkZWZhdWx0U3R5bGVzID0gX3Byb3BzMy5kZWZhdWx0U3R5bGVzO1xuXG4gICAgICB2YXIgY3VycmVudFN0eWxlcyA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChkZWZhdWx0U3R5bGVzID09IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVzID0gc3R5bGVzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFN0eWxlcyA9IHN0eWxlcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFN0eWxlcyA9IGRlZmF1bHRTdHlsZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbWFwT2JqZWN0KGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcE9iamVjdChfemVybzJbJ2RlZmF1bHQnXSwgcyk7XG4gICAgICAgIH0sIGN1cnJlbnRTdHlsZXMpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblN0ZXA6IGZ1bmN0aW9uIGFuaW1hdGlvblN0ZXAodGltZXN0ZXAsIHN0YXRlKSB7XG4gICAgICB2YXIgY3VycmVudFN0eWxlcyA9IHN0YXRlLmN1cnJlbnRTdHlsZXM7XG4gICAgICB2YXIgY3VycmVudFZlbG9jaXRpZXMgPSBzdGF0ZS5jdXJyZW50VmVsb2NpdGllcztcbiAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdHlsZXMgPSBfcHJvcHM0LnN0eWxlcztcbiAgICAgIHZhciB3aWxsRW50ZXIgPSBfcHJvcHM0LndpbGxFbnRlcjtcbiAgICAgIHZhciB3aWxsTGVhdmUgPSBfcHJvcHM0LndpbGxMZWF2ZTtcblxuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3R5bGVzID0gc3R5bGVzKGN1cnJlbnRTdHlsZXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBodWg/XG4gICAgICB2YXIgbWVyZ2VkU3R5bGVzID0gc3R5bGVzOyAvLyBzZXQgbWVyZ2VkU3R5bGVzIHRvIHN0eWxlcyBhcyB0aGUgZGVmYXVsdFxuICAgICAgdmFyIGhhc05ld0tleSA9IGZhbHNlO1xuXG4gICAgICBtZXJnZWRTdHlsZXMgPSBfbWVyZ2VEaWZmMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZXMsIHN0eWxlcyxcbiAgICAgIC8vIFRPRE86IHN0b3AgYWxsb2NhdGluZyBsaWtlIGNyYXp5IGluIHRoaXMgd2hvbGUgY29kZSBwYXRoXG4gICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciByZXMgPSB3aWxsTGVhdmUoa2V5LCBjdXJyZW50U3R5bGVzW2tleV0sIHN0eWxlcywgY3VycmVudFN0eWxlcywgY3VycmVudFZlbG9jaXRpZXMpO1xuICAgICAgICBpZiAocmVzID09IG51bGwpIHtcbiAgICAgICAgICAvLyBGb3IgbGVnYWN5IHJlYXNvbi4gV2Ugd29uJ3QgYWxsb3cgcmV0dXJuaW5nIG51bGwgc29vblxuICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSwgYWZ0ZXIgbmV4dCByZWxlYXNlXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX25vVmVsb2NpdHkyWydkZWZhdWx0J10oY3VycmVudFZlbG9jaXRpZXNba2V5XSwgY3VycmVudFN0eWxlc1trZXldKSAmJiBfaGFzUmVhY2hlZFN0eWxlMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZXNba2V5XSwgcmVzKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmtleXMobWVyZ2VkU3R5bGVzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gIWN1cnJlbnRTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX2V4dGVuZHMyLCBfZXh0ZW5kczM7XG5cbiAgICAgICAgaGFzTmV3S2V5ID0gdHJ1ZTtcbiAgICAgICAgdmFyIGVudGVyU3R5bGUgPSB3aWxsRW50ZXIoa2V5LCBtZXJnZWRTdHlsZXNba2V5XSwgc3R5bGVzLCBjdXJyZW50U3R5bGVzLCBjdXJyZW50VmVsb2NpdGllcyk7XG5cbiAgICAgICAgLy8gV2UgY2FuIG11dGF0ZSB0aGlzIGhlcmUgYmVjYXVzZSBtZXJnZURpZmYgcmV0dXJucyBhIG5ldyBPYmpcbiAgICAgICAgbWVyZ2VkU3R5bGVzW2tleV0gPSBlbnRlclN0eWxlO1xuXG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlcywgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJba2V5XSA9IGVudGVyU3R5bGUsIF9leHRlbmRzMikpO1xuICAgICAgICBjdXJyZW50VmVsb2NpdGllcyA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdGllcywgKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNba2V5XSA9IG1hcE9iamVjdChfemVybzJbJ2RlZmF1bHQnXSwgZW50ZXJTdHlsZSksIF9leHRlbmRzMykpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBuZXdDdXJyZW50U3R5bGVzID0gbWFwT2JqZWN0KGZ1bmN0aW9uIChtZXJnZWRTdHlsZSwga2V5KSB7XG4gICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS51cGRhdGVDdXJyZW50U3R5bGUodGltZXN0ZXAsIGN1cnJlbnRTdHlsZXNba2V5XSwgY3VycmVudFZlbG9jaXRpZXNba2V5XSwgbWVyZ2VkU3R5bGUpO1xuICAgICAgfSwgbWVyZ2VkU3R5bGVzKTtcbiAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdGllcyA9IG1hcE9iamVjdChmdW5jdGlvbiAobWVyZ2VkU3R5bGUsIGtleSkge1xuICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFZlbG9jaXR5KHRpbWVzdGVwLCBjdXJyZW50U3R5bGVzW2tleV0sIGN1cnJlbnRWZWxvY2l0aWVzW2tleV0sIG1lcmdlZFN0eWxlKTtcbiAgICAgIH0sIG1lcmdlZFN0eWxlcyk7XG5cbiAgICAgIGlmICghaGFzTmV3S2V5ICYmIGV2ZXJ5T2JqKGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgIHJldHVybiBfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXSh2LCBjdXJyZW50U3R5bGVzW2tdKTtcbiAgICAgIH0sIGN1cnJlbnRWZWxvY2l0aWVzKSAmJiBldmVyeU9iaihmdW5jdGlvbiAodiwgaykge1xuICAgICAgICByZXR1cm4gX25vVmVsb2NpdHkyWydkZWZhdWx0J10odiwgbmV3Q3VycmVudFN0eWxlc1trXSk7XG4gICAgICB9LCBuZXdDdXJyZW50VmVsb2NpdGllcykpIHtcbiAgICAgICAgLy8gY2hlY2sgZXhwbGFuYXRpb24gaW4gYE1vdGlvbi5hbmltYXRpb25SZW5kZXJgXG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpOyAvLyBOYXN0eSBzaWRlIGVmZmVjdHMuLi4uXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IG5ld0N1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXdDdXJyZW50VmVsb2NpdGllc1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgc3RvcEFuaW1hdGlvbjogbnVsbCxcblxuICAgIC8vIHVzZWQgaW4gYW5pbWF0aW9uUmVuZGVyXG4gICAgaGFzVW5tb3VudGVkOiBmYWxzZSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5oYXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydEFuaW1hdGluZzogZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSBzdGFydEFuaW1hdGlvbih0aGlzLnN0YXRlLCB0aGlzLmFuaW1hdGlvblN0ZXAsIHRoaXMuYW5pbWF0aW9uUmVuZGVyKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uUmVuZGVyOiBmdW5jdGlvbiBhbmltYXRpb25SZW5kZXIoYWxwaGEsIG5leHRTdGF0ZSwgcHJldlN0YXRlKSB7XG4gICAgICAvLyBTZWUgY29tbWVudCBpbiBNb3Rpb24uXG4gICAgICBpZiAoIXRoaXMuaGFzVW5tb3VudGVkKSB7XG4gICAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gbWFwT2JqZWN0KGZ1bmN0aW9uIChzdHlsZSwga2V5KSB7XG4gICAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLmludGVycG9sYXRlVmFsdWUoYWxwaGEsIHN0eWxlLCBwcmV2U3RhdGUuY3VycmVudFN0eWxlc1trZXldKTtcbiAgICAgICAgfSwgbmV4dFN0YXRlLmN1cnJlbnRTdHlsZXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXh0U3RhdGUuY3VycmVudFZlbG9jaXRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHN0cmlwcGVkU3R5bGUgPSBtYXBPYmplY3QoX3N0cmlwU3R5bGUyWydkZWZhdWx0J10sIHRoaXMuc3RhdGUuY3VycmVudFN0eWxlcyk7XG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4oc3RyaXBwZWRTdHlsZSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIF9kZXByZWNhdGVkU3ByaW5ncyA9IF9kZXByZWNhdGVkU3ByaW5nczNbJ2RlZmF1bHQnXShSZWFjdCk7XG5cbiAgdmFyIFNwcmluZyA9IF9kZXByZWNhdGVkU3ByaW5ncy5TcHJpbmc7XG4gIHZhciBUcmFuc2l0aW9uU3ByaW5nID0gX2RlcHJlY2F0ZWRTcHJpbmdzLlRyYW5zaXRpb25TcHJpbmc7XG5cbiAgcmV0dXJuIHsgU3ByaW5nOiBTcHJpbmcsIFRyYW5zaXRpb25TcHJpbmc6IFRyYW5zaXRpb25TcHJpbmcsIE1vdGlvbjogTW90aW9uLCBTdGFnZ2VyZWRNb3Rpb246IFN0YWdnZXJlZE1vdGlvbiwgVHJhbnNpdGlvbk1vdGlvbjogVHJhbnNpdGlvbk1vdGlvbiB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2NvbXBvbmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gY3VycmVudFN0eWxlIGtlZXBzIHRoZSBpbmZvIGFib3V0IHdoZXRoZXIgYSBwcm9wIGlzIGNvbmZpZ3VyZWQgYXMgYSBzcHJpbmdcbi8vIG9yIGlmIGl0J3MganVzdCBhIHJhbmRvbSBwcm9wIHRoYXQgaGFwcGVucyB0byBiZSBwcmVzZW50IG9uIHRoZSBzdHlsZVxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG5vVmVsb2NpdHk7XG5cbmZ1bmN0aW9uIG5vVmVsb2NpdHkoY3VycmVudFZlbG9jaXR5LCBjdXJyZW50U3R5bGUpIHtcbiAgZm9yICh2YXIga2V5IGluIGN1cnJlbnRWZWxvY2l0eSkge1xuICAgIGlmICghY3VycmVudFZlbG9jaXR5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFN0eWxlW2tleV0uY29uZmlnICYmIGN1cnJlbnRWZWxvY2l0eVtrZXldICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvbm9WZWxvY2l0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gaGFzUmVhY2hlZFN0eWxlO1xuXG5mdW5jdGlvbiBoYXNSZWFjaGVkU3R5bGUoY3VycmVudFN0eWxlLCBzdHlsZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudFN0eWxlW2tleV07XG4gICAgdmFyIGRlc3RWYWx1ZSA9IHN0eWxlW2tleV07XG4gICAgaWYgKCFkZXN0VmFsdWUuY29uZmlnKSB7XG4gICAgICAvLyBub3QgYSBzcHJpbmcgY29uZmlnXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRWYWx1ZS5jb25maWcgJiYgY3VycmVudFZhbHVlLnZhbCAhPT0gZGVzdFZhbHVlLnZhbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnRWYWx1ZS5jb25maWcgJiYgY3VycmVudFZhbHVlICE9PSBkZXN0VmFsdWUudmFsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9oYXNSZWFjaGVkU3R5bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdGhpcyBmdW5jdGlvbiBpcyBhbGxvY2F0aW9uLWxlc3MgdGhhbmtzIHRvIGJhYmVsLCB3aGljaCB0cmFuc2Zvcm1zIHRoZSB0YWlsXG4vLyBjYWxscyBpbnRvIGxvb3BzXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbWVyZ2VEaWZmO1xuZnVuY3Rpb24gbWVyZ2VEaWZmQXJyKF94LCBfeDIsIF94MywgX3g0LCBfeDUsIF94NiwgX3g3KSB7XG4gIHZhciBfYWdhaW4gPSB0cnVlO1xuXG4gIF9mdW5jdGlvbjogd2hpbGUgKF9hZ2Fpbikge1xuICAgIHZhciBhcnJBID0gX3gsXG4gICAgICAgIGFyckIgPSBfeDIsXG4gICAgICAgIGNvbGxCID0gX3gzLFxuICAgICAgICBpbmRleEEgPSBfeDQsXG4gICAgICAgIGluZGV4QiA9IF94NSxcbiAgICAgICAgb25SZW1vdmUgPSBfeDYsXG4gICAgICAgIGFjY3VtID0gX3g3O1xuICAgIGVuZEEgPSBlbmRCID0ga2V5QSA9IGtleUIgPSBmaWxsID0gZmlsbCA9IHVuZGVmaW5lZDtcbiAgICBfYWdhaW4gPSBmYWxzZTtcblxuICAgIHZhciBlbmRBID0gaW5kZXhBID09PSBhcnJBLmxlbmd0aDtcbiAgICB2YXIgZW5kQiA9IGluZGV4QiA9PT0gYXJyQi5sZW5ndGg7XG4gICAgdmFyIGtleUEgPSBhcnJBW2luZGV4QV07XG4gICAgdmFyIGtleUIgPSBhcnJCW2luZGV4Ql07XG4gICAgaWYgKGVuZEEgJiYgZW5kQikge1xuICAgICAgLy8gcmV0dXJuaW5nIG51bGwgaGVyZSwgb3RoZXJ3aXNlIGxpbnQgY29tcGxhaW5zIHRoYXQgd2UncmUgbm90IGV4cGVjdGluZ1xuICAgICAgLy8gYSByZXR1cm4gdmFsdWUgaW4gc3Vic2VxdWVudCBjYWxscy4gV2Uga25vdyB3aGF0IHdlJ3JlIGRvaW5nLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGVuZEEpIHtcbiAgICAgIGFjY3VtW2tleUJdID0gY29sbEJba2V5Ql07XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEE7XG4gICAgICBfeDUgPSBpbmRleEIgKyAxO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKGVuZEIpIHtcbiAgICAgIHZhciBmaWxsID0gb25SZW1vdmUoa2V5QSk7XG4gICAgICBpZiAoZmlsbCAhPSBudWxsKSB7XG4gICAgICAgIGFjY3VtW2tleUFdID0gZmlsbDtcbiAgICAgIH1cbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgICBfeDUgPSBpbmRleEI7XG4gICAgICBfeDYgPSBvblJlbW92ZTtcbiAgICAgIF94NyA9IGFjY3VtO1xuICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoa2V5QSA9PT0ga2V5Qikge1xuICAgICAgYWNjdW1ba2V5QV0gPSBjb2xsQltrZXlBXTtcbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgICBfeDUgPSBpbmRleEIgKyAxO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFjb2xsQi5oYXNPd25Qcm9wZXJ0eShrZXlBKSkge1xuICAgICAgdmFyIGZpbGwgPSBvblJlbW92ZShrZXlBKTtcbiAgICAgIGlmIChmaWxsICE9IG51bGwpIHtcbiAgICAgICAgYWNjdW1ba2V5QV0gPSBmaWxsO1xuICAgICAgfVxuICAgICAgX3ggPSBhcnJBO1xuICAgICAgX3gyID0gYXJyQjtcbiAgICAgIF94MyA9IGNvbGxCO1xuICAgICAgX3g0ID0gaW5kZXhBICsgMTtcbiAgICAgIF94NSA9IGluZGV4QjtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIF94ID0gYXJyQTtcbiAgICBfeDIgPSBhcnJCO1xuICAgIF94MyA9IGNvbGxCO1xuICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgX3g1ID0gaW5kZXhCO1xuICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgIF94NyA9IGFjY3VtO1xuICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgY29udGludWUgX2Z1bmN0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlRGlmZihhLCBiLCBvblJlbW92ZSkge1xuICB2YXIgcmV0ID0ge307XG4gIC8vIGlmIGFueW9uZSBjYW4gbWFrZSB0aGlzIHdvcmsgd2l0aG91dCBhbGxvY2F0aW5nIHRoZSBhcnJheXMgaGVyZSwgd2UnbGxcbiAgLy8gZ2l2ZSB5b3UgYSBtZWRhbFxuICBtZXJnZURpZmZBcnIoT2JqZWN0LmtleXMoYSksIE9iamVjdC5rZXlzKGIpLCBiLCAwLCAwLCBvblJlbW92ZSwgcmV0KTtcbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL21lcmdlRGlmZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjb25maWdBbmltYXRpb247XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxuZnVuY3Rpb24gY29uZmlnQW5pbWF0aW9uKCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBfY29uZmlnJHRpbWVTdGVwID0gY29uZmlnLnRpbWVTdGVwO1xuICB2YXIgdGltZVN0ZXAgPSBfY29uZmlnJHRpbWVTdGVwID09PSB1bmRlZmluZWQgPyAxIC8gNjAgKiAxMDAwIDogX2NvbmZpZyR0aW1lU3RlcDtcbiAgdmFyIF9jb25maWckdGltZVNjYWxlID0gY29uZmlnLnRpbWVTY2FsZTtcbiAgdmFyIHRpbWVTY2FsZSA9IF9jb25maWckdGltZVNjYWxlID09PSB1bmRlZmluZWQgPyAxIDogX2NvbmZpZyR0aW1lU2NhbGU7XG4gIHZhciBfY29uZmlnJG1heFN0ZXBzID0gY29uZmlnLm1heFN0ZXBzO1xuICB2YXIgbWF4U3RlcHMgPSBfY29uZmlnJG1heFN0ZXBzID09PSB1bmRlZmluZWQgPyAxMCA6IF9jb25maWckbWF4U3RlcHM7XG4gIHZhciBfY29uZmlnJHJhZiA9IGNvbmZpZy5yYWY7XG4gIHZhciByYWYgPSBfY29uZmlnJHJhZiA9PT0gdW5kZWZpbmVkID8gX3JhZjJbJ2RlZmF1bHQnXSA6IF9jb25maWckcmFmO1xuICB2YXIgX2NvbmZpZyRub3cgPSBjb25maWcubm93O1xuICB2YXIgbm93ID0gX2NvbmZpZyRub3cgPT09IHVuZGVmaW5lZCA/IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSA6IF9jb25maWckbm93O1xuXG4gIHZhciBhbmltUnVubmluZyA9IFtdO1xuICB2YXIgcnVubmluZyA9IGZhbHNlO1xuICB2YXIgcHJldlRpbWUgPSAwO1xuICB2YXIgYWNjdW11bGF0ZWRUaW1lID0gMDtcblxuICBmdW5jdGlvbiBsb29wKCkge1xuICAgIHZhciBjdXJyZW50VGltZSA9IG5vdygpO1xuICAgIHZhciBmcmFtZVRpbWUgPSBjdXJyZW50VGltZSAtIHByZXZUaW1lOyAvLyBkZWx0YVxuXG4gICAgcHJldlRpbWUgPSBjdXJyZW50VGltZTtcbiAgICBhY2N1bXVsYXRlZFRpbWUgKz0gZnJhbWVUaW1lICogdGltZVNjYWxlO1xuXG4gICAgaWYgKGFjY3VtdWxhdGVkVGltZSA+IHRpbWVTdGVwICogbWF4U3RlcHMpIHtcbiAgICAgIGFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGZyYW1lTnVtYmVyID0gTWF0aC5jZWlsKGFjY3VtdWxhdGVkVGltZSAvIHRpbWVTdGVwKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1SdW5uaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgX2FuaW1SdW5uaW5nJGkgPSBhbmltUnVubmluZ1tpXTtcbiAgICAgIHZhciBhY3RpdmUgPSBfYW5pbVJ1bm5pbmckaS5hY3RpdmU7XG4gICAgICB2YXIgYW5pbWF0aW9uU3RlcCA9IF9hbmltUnVubmluZyRpLmFuaW1hdGlvblN0ZXA7XG4gICAgICB2YXIgcHJldlByZXZTdGF0ZSA9IF9hbmltUnVubmluZyRpLnByZXZTdGF0ZTtcbiAgICAgIHZhciBwcmV2TmV4dFN0YXRlID0gYW5pbVJ1bm5pbmdbaV0ubmV4dFN0YXRlO1xuXG4gICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VlbXMgbGlrZSBiZWNhdXNlIHRoZSBUUyBzZXRzIGRlc3RWYWxzIGFzIGVudGVyVmFscyBmb3IgdGhlIGZpcnN0XG4gICAgICAvLyB0aWNrLCB3ZSBtaWdodCByZW5kZXIgdGhhdCB2YWx1ZSB0d2ljZS4gV2UgcmVuZGVyIGl0IG9uY2UsIGN1cnJWYWx1ZSBpc1xuICAgICAgLy8gZW50ZXJWYWwgYW5kIGRlc3RWYWwgaXMgZW50ZXJWYWwuIFRoZSBuZXh0IHRpY2sgaXMgZmFzdGVyIHRoYW4gMTZtcyxcbiAgICAgIC8vIHNvIGFjY3VtdWxhdGVkVGltZSAod2hpY2ggd291bGQgYmUgYWJvdXQgLTE2bXMgZnJvbSB0aGUgcHJldmlvdXMgdGljaylcbiAgICAgIC8vIGlzIG5lZ2F0aXZlICgtMTZtcyArIGFueSBudW1iZXIgbGVzcyB0aGFuIDE2bXMgPCAwKS4gU28gd2UganVzdCByZW5kZXJcbiAgICAgIC8vIHBhcnQgd2F5cyB0b3dhcmRzIHRoZSBuZXh0U3RhdGUsIGJ1dCB0aGF0J3MgZW50ZXJWYWwgc3RpbGwuIFdlIHJlbmRlclxuICAgICAgLy8gc2F5IDc1JSBiZXR3ZWVuIGN1cnJWYWx1ZSAoPT09IGVudGVyVmFsKSBhbmQgZGVzdFZhbHVlICg9PT0gZW50ZXJWYWwpLlxuICAgICAgLy8gU28gd2UgcmVuZGVyIHRoZSBzYW1lIHZhbHVlIGEgc2Vjb25kIHRpbWUuXG4gICAgICAvLyBUaGUgc29sdXRpb24gYmVsb3cgaXMgdG8gcmVjYWxjdWxhdGUgdGhlIGRlc3RpbmF0aW9uIHN0YXRlIGV2ZW4gd2hlblxuICAgICAgLy8geW91J3JlIG1vdmluZyBwYXJ0aWFsbHkgdG93YXJkcyBpdC5cbiAgICAgIGlmIChhY2N1bXVsYXRlZFRpbWUgPD0gMCkge1xuICAgICAgICBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGUgPSBhbmltYXRpb25TdGVwKHRpbWVTdGVwIC8gMTAwMCwgcHJldlByZXZTdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZyYW1lTnVtYmVyOyBqKyspIHtcbiAgICAgICAgICBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGUgPSBhbmltYXRpb25TdGVwKHRpbWVTdGVwIC8gMTAwMCwgcHJldk5leHRTdGF0ZSk7XG4gICAgICAgICAgdmFyIF9yZWYgPSBbcHJldk5leHRTdGF0ZSwgYW5pbVJ1bm5pbmdbaV0ubmV4dFN0YXRlXTtcbiAgICAgICAgICBhbmltUnVubmluZ1tpXS5wcmV2U3RhdGUgPSBfcmVmWzBdO1xuICAgICAgICAgIHByZXZOZXh0U3RhdGUgPSBfcmVmWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWNjdW11bGF0ZWRUaW1lID0gYWNjdW11bGF0ZWRUaW1lIC0gZnJhbWVOdW1iZXIgKiB0aW1lU3RlcDtcblxuICAgIC8vIFJlbmRlciBhbmQgZmlsdGVyIGluIG9uZSBpdGVyYXRpb24uXG4gICAgdmFyIGFscGhhID0gMSArIGFjY3VtdWxhdGVkVGltZSAvIHRpbWVTdGVwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbVJ1bm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBfYW5pbVJ1bm5pbmckaTIgPSBhbmltUnVubmluZ1tpXTtcbiAgICAgIHZhciBhbmltYXRpb25SZW5kZXIgPSBfYW5pbVJ1bm5pbmckaTIuYW5pbWF0aW9uUmVuZGVyO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IF9hbmltUnVubmluZyRpMi5uZXh0U3RhdGU7XG4gICAgICB2YXIgcHJldlN0YXRlID0gX2FuaW1SdW5uaW5nJGkyLnByZXZTdGF0ZTtcblxuICAgICAgLy8gTWlnaHQgbXV0YXRlIGFuaW1SdW5uaW5nLi4uLi4uLi5cbiAgICAgIGFuaW1hdGlvblJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpO1xuICAgIH1cblxuICAgIGFuaW1SdW5uaW5nID0gYW5pbVJ1bm5pbmcuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGFjdGl2ZSA9IF9yZWYyLmFjdGl2ZTtcbiAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgfSk7XG5cbiAgICBpZiAoYW5pbVJ1bm5pbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhZihsb29wKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgcHJldlRpbWUgPSBub3coKTtcbiAgICAgIGFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICByYWYobG9vcCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKHN0YXRlLCBhbmltYXRpb25TdGVwLCBhbmltYXRpb25SZW5kZXIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1SdW5uaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsID0gYW5pbVJ1bm5pbmdbaV07XG4gICAgICBpZiAodmFsLmFuaW1hdGlvblN0ZXAgPT09IGFuaW1hdGlvblN0ZXApIHtcbiAgICAgICAgdmFsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHZhbC5wcmV2U3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHZhbC5zdG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuZXdBbmltID0ge1xuICAgICAgYW5pbWF0aW9uU3RlcDogYW5pbWF0aW9uU3RlcCxcbiAgICAgIGFuaW1hdGlvblJlbmRlcjogYW5pbWF0aW9uUmVuZGVyLFxuICAgICAgcHJldlN0YXRlOiBzdGF0ZSxcbiAgICAgIG5leHRTdGF0ZTogc3RhdGUsXG4gICAgICBhY3RpdmU6IHRydWVcbiAgICB9O1xuXG4gICAgbmV3QW5pbS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ld0FuaW0uYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcbiAgICBhbmltUnVubmluZy5wdXNoKG5ld0FuaW0pO1xuXG4gICAgc3RhcnQoKTtcblxuICAgIHJldHVybiBuZXdBbmltLnN0b3A7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvYW5pbWF0aW9uTG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNy4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBsb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSBnbG9iYWxbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IGdsb2JhbFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgZ2xvYmFsWydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICFyYWY7IGkrKykge1xuICByYWYgPSBnbG9iYWxbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChnbG9iYWwsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShnbG9iYWwsIGFyZ3VtZW50cylcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9+L3JhZi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB1c2VkIGJ5IHRoZSB0cmVlLXdhbGtpbmcgdXBkYXRlcyBhbmQgc3ByaW5ncy4gQXZvaWRzIHNvbWUgYWxsb2NhdGlvbnNcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB6ZXJvO1xuXG5mdW5jdGlvbiB6ZXJvKCkge1xuICByZXR1cm4gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3plcm8uanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZVZhbHVlID0gaW50ZXJwb2xhdGVWYWx1ZTtcbmV4cG9ydHMudXBkYXRlQ3VycmVudFN0eWxlID0gdXBkYXRlQ3VycmVudFN0eWxlO1xuZXhwb3J0cy51cGRhdGVDdXJyZW50VmVsb2NpdHkgPSB1cGRhdGVDdXJyZW50VmVsb2NpdHk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9zdGVwcGVyID0gcmVxdWlyZSgnLi9zdGVwcGVyJyk7XG5cbnZhciBfc3RlcHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGVwcGVyKTtcblxuLy8gVE9ETzogcmVmYWN0b3IgY29tbW9uIGxvZ2ljIHdpdGggdXBkYXRlQ3VyclZhbHVlIGFuZCB1cGRhdGVDdXJyVmVsb2NpdHlcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgbmV4dFN0eWxlLCBwcmV2U3R5bGUpIHtcbiAgLy8gbWlnaHQgYmUgdXNlZCBieSBhIFRyYW5zaXRpb25Nb3Rpb24sIHdoZXJlIHByZXZTdHlsZSBtaWdodCBub3QgZXhpc3QgYW55bW9yZVxuICBpZiAoIXByZXZTdHlsZSkge1xuICAgIHJldHVybiBuZXh0U3R5bGU7XG4gIH1cblxuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBuZXh0U3R5bGUpIHtcbiAgICBpZiAoIW5leHRTdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIW5leHRTdHlsZVtrZXldLmNvbmZpZykge1xuICAgICAgcmV0W2tleV0gPSBuZXh0U3R5bGVba2V5XTtcbiAgICAgIC8vIG5vdCBhIHNwcmluZyBjb25maWcsIG5vdCBzb21ldGhpbmcgd2Ugd2FudCB0byBpbnRlcnBvbGF0ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBwcmV2VmFsdWUgPSBwcmV2U3R5bGVba2V5XS5jb25maWcgPyBwcmV2U3R5bGVba2V5XS52YWwgOiBwcmV2U3R5bGVba2V5XTtcbiAgICByZXRba2V5XSA9IHtcbiAgICAgIHZhbDogbmV4dFN0eWxlW2tleV0udmFsICogYWxwaGEgKyBwcmV2VmFsdWUgKiAoMSAtIGFscGhhKSxcbiAgICAgIGNvbmZpZzogbmV4dFN0eWxlW2tleV0uY29uZmlnXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8vIFRPRE86IHJlZmFjdG9yIGNvbW1vbiBsb2dpYyB3aXRoIHVwZGF0ZUN1cnJlbnRWZWxvY2l0eVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50U3R5bGUoZnJhbWVSYXRlLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0eSwgc3R5bGUpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIXN0eWxlW2tleV0uY29uZmlnKSB7XG4gICAgICByZXRba2V5XSA9IHN0eWxlW2tleV07XG4gICAgICAvLyBub3QgYSBzcHJpbmcgY29uZmlnLCBub3Qgc29tZXRoaW5nIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgX3N0eWxlJGtleSRjb25maWcgPSBzdHlsZVtrZXldLmNvbmZpZztcbiAgICB2YXIgayA9IF9zdHlsZSRrZXkkY29uZmlnWzBdO1xuICAgIHZhciBiID0gX3N0eWxlJGtleSRjb25maWdbMV07XG5cbiAgICB2YXIgdmFsID0gX3N0ZXBwZXIyWydkZWZhdWx0J10oZnJhbWVSYXRlLFxuICAgIC8vIG1pZ2h0IGhhdmUgYmVlbiBhIG5vbi1zcHJpbmdlZCBwcm9wIHRoYXQganVzdCBiZWNhbWUgb25lXG4gICAgY3VycmVudFN0eWxlW2tleV0udmFsID09IG51bGwgPyBjdXJyZW50U3R5bGVba2V5XSA6IGN1cnJlbnRTdHlsZVtrZXldLnZhbCwgY3VycmVudFZlbG9jaXR5W2tleV0sIHN0eWxlW2tleV0udmFsLCBrLCBiKVswXTtcbiAgICByZXRba2V5XSA9IHtcbiAgICAgIHZhbDogdmFsLFxuICAgICAgY29uZmlnOiBzdHlsZVtrZXldLmNvbmZpZ1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFZlbG9jaXR5KGZyYW1lUmF0ZSwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdHksIHN0eWxlKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFzdHlsZVtrZXldLmNvbmZpZykge1xuICAgICAgLy8gbm90IGEgc3ByaW5nIGNvbmZpZywgbm90IHNvbWV0aGluZyB3ZSB3YW50IHRvIGludGVycG9sYXRlXG4gICAgICByZXRba2V5XSA9IDA7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIF9zdHlsZSRrZXkkY29uZmlnMiA9IHN0eWxlW2tleV0uY29uZmlnO1xuICAgIHZhciBrID0gX3N0eWxlJGtleSRjb25maWcyWzBdO1xuICAgIHZhciBiID0gX3N0eWxlJGtleSRjb25maWcyWzFdO1xuXG4gICAgdmFyIHZhbCA9IF9zdGVwcGVyMlsnZGVmYXVsdCddKGZyYW1lUmF0ZSxcbiAgICAvLyBtaWdodCBoYXZlIGJlZW4gYSBub24tc3ByaW5nZWQgcHJvcCB0aGF0IGp1c3QgYmVjYW1lIG9uZVxuICAgIGN1cnJlbnRTdHlsZVtrZXldLnZhbCA9PSBudWxsID8gY3VycmVudFN0eWxlW2tleV0gOiBjdXJyZW50U3R5bGVba2V5XS52YWwsIGN1cnJlbnRWZWxvY2l0eVtrZXldLCBzdHlsZVtrZXldLnZhbCwgaywgYilbMV07XG4gICAgcmV0W2tleV0gPSB2YWw7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3VwZGF0ZVRyZWUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHN0ZXBwZXI7XG52YXIgZXJyb3JNYXJnaW4gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIHN0ZXBwZXIoZnJhbWVSYXRlLCB4LCB2LCBkZXN0WCwgaywgYikge1xuICAvLyBTcHJpbmcgc3RpZmZuZXNzLCBpbiBrZyAvIHNeMlxuXG4gIC8vIGZvciBhbmltYXRpb25zLCBkZXN0WCBpcyByZWFsbHkgc3ByaW5nIGxlbmd0aCAoc3ByaW5nIGF0IHJlc3QpLiBpbml0aWFsXG4gIC8vIHBvc2l0aW9uIGlzIGNvbnNpZGVyZWQgYXMgdGhlIHN0cmV0Y2hlZC9jb21wcmVzc2VkIHBvc2l0aW9uIG9mIGEgc3ByaW5nXG4gIHZhciBGc3ByaW5nID0gLWsgKiAoeCAtIGRlc3RYKTtcblxuICAvLyBEYW1waW5nLCBpbiBrZyAvIHNcbiAgdmFyIEZkYW1wZXIgPSAtYiAqIHY7XG5cbiAgLy8gdXN1YWxseSB3ZSBwdXQgbWFzcyBoZXJlLCBidXQgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcywgc3BlY2lmeWluZyBtYXNzIGlzIGFcbiAgLy8gYml0IHJlZHVuZGFudC4geW91IGNvdWxkIHNpbXBseSBhZGp1c3QgayBhbmQgYiBhY2NvcmRpbmdseVxuICAvLyBsZXQgYSA9IChGc3ByaW5nICsgRmRhbXBlcikgLyBtYXNzO1xuICB2YXIgYSA9IEZzcHJpbmcgKyBGZGFtcGVyO1xuXG4gIHZhciBuZXdWID0gdiArIGEgKiBmcmFtZVJhdGU7XG4gIHZhciBuZXdYID0geCArIG5ld1YgKiBmcmFtZVJhdGU7XG5cbiAgaWYgKE1hdGguYWJzKG5ld1YgLSB2KSA8IGVycm9yTWFyZ2luICYmIE1hdGguYWJzKG5ld1ggLSB4KSA8IGVycm9yTWFyZ2luKSB7XG4gICAgcmV0dXJuIFtkZXN0WCwgMF07XG4gIH1cblxuICByZXR1cm4gW25ld1gsIG5ld1ZdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBkZXByZWNhdGVkU3ByaW5ncztcbnZhciBoYXNXYXJuZWRGb3JTcHJpbmcgPSB7fTtcbnZhciBoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nID0ge307XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWRTcHJpbmdzKFJlYWN0KSB7XG4gIHZhciBTcHJpbmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTcHJpbmcnLFxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyICYmIHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyLmdldE5hbWUoKTtcbiAgICAgICAgaWYgKCFoYXNXYXJuZWRGb3JTcHJpbmdbb3duZXJOYW1lXSkge1xuICAgICAgICAgIGhhc1dhcm5lZEZvclNwcmluZ1tvd25lck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdTcHJpbmcgKHVzZWQgaW4gJXNyZW5kZXIpIGhhcyBub3cgYmVlbiByZW5hbWVkIHRvIE1vdGlvbi4gJyArICdQbGVhc2Ugc2VlIHRoZSByZWxlYXNlIG5vdGUgZm9yIHRoZSB1cGdyYWRlIHBhdGguIFRoYW5rIHlvdSEnLCBvd25lck5hbWUgPyBvd25lck5hbWUgKyAnXFwncyAnIDogJ1JlYWN0LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICB2YXIgVHJhbnNpdGlvblNwcmluZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25TcHJpbmcnLFxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyICYmIHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyLmdldE5hbWUoKTtcbiAgICAgICAgaWYgKCFoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nW293bmVyTmFtZV0pIHtcbiAgICAgICAgICBoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nW293bmVyTmFtZV0gPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zaXRpb25TcHJpbmcgKHVzZWQgaW4gJXNyZW5kZXIpIGhhcyBub3cgYmVlbiByZW5hbWVkIHRvICcgKyAnVHJhbnNpdGlvbk1vdGlvbi4gUGxlYXNlIHNlZSB0aGUgcmVsZWFzZSBub3RlIGZvciB0aGUgdXBncmFkZSAnICsgJ3BhdGguIFRoYW5rIHlvdSEnLCBvd25lck5hbWUgPyBvd25lck5hbWUgKyAnXFwncyAnIDogJ1JlYWN0LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4geyBTcHJpbmc6IFNwcmluZywgVHJhbnNpdGlvblNwcmluZzogVHJhbnNpdGlvblNwcmluZyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2RlcHJlY2F0ZWRTcHJpbmdzLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHR1cm4ge3g6IHt2YWw6IDEsIGNvbmZpZzogWzEsIDJdfSwgeTogMn0gaW50byB7eDogMSwgeTogMn1cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzdHJpcFN0eWxlO1xuXG5mdW5jdGlvbiBzdHJpcFN0eWxlKHN0eWxlKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0W2tleV0gPSBzdHlsZVtrZXldLnZhbCA9PSBudWxsID8gc3R5bGVba2V5XSA6IHN0eWxlW2tleV0udmFsO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9zdHJpcFN0eWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZW9yZGVyS2V5cztcblxuZnVuY3Rpb24gcmVvcmRlcktleXMob2JqLCBmKSB7XG4gIHZhciBuZXdLZXlzID0gZihPYmplY3Qua2V5cyhvYmopKTtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gbmV3S2V5c1tpXTtcbiAgICByZXRba2V5XSA9IG9ialtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNwcmluZztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3ByZXNldHMgPSByZXF1aXJlKCcuL3ByZXNldHMnKTtcblxudmFyIF9wcmVzZXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldHMpO1xuXG4vLyBpbnN0ZWFkIG9mIGV4cG9zaW5nIHt2YWw6IGJsYSwgY29uZmlnOiBibGF9LCB1c2UgYSBoZWxwZXJcblxuZnVuY3Rpb24gc3ByaW5nKHZhbCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gX3ByZXNldHMyWydkZWZhdWx0J10ubm9Xb2JibGUgOiBhcmd1bWVudHNbMV07XG5cbiAgcmV0dXJuIHsgdmFsOiB2YWwsIGNvbmZpZzogY29uZmlnIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvc3ByaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFtzdGlmZm5lc3MsIGRhbXBpbmddXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBub1dvYmJsZTogWzE3MCwgMjZdLCAvLyB0aGUgZGVmYXVsdFxuICBnZW50bGU6IFsxMjAsIDE0XSxcbiAgd29iYmx5OiBbMTgwLCAxMl0sXG4gIHN0aWZmOiBbMjEwLCAyMF1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcHJlc2V0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9uIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9uIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanM/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb24hLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGUvbWFpbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNsaW1iX193YWxsIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTAwJTsgfVxcblxcbi5jbGltYl9fdGlsZSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gIGhlaWdodDogNDI1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4OyB9XFxuXFxuLmNsaW1iX190aWxlX19jb250ZW50IHtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAyNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjsgfVxcbiAgLmNsaW1iX190aWxlLS1oYXMtbm8taW1hZ2UgLmNsaW1iX190aWxlX19jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLmNsaW1iX190aWxlX19pbWFnZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4OyB9XFxuXFxuLmNsaW1iX190aWxlX19tZXNzYWdlIHtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XFxuICAuY2xpbWJfX3RpbGVfX21lc3NhZ2UgPiBhIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1heC13aWR0aDogMjYwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxcbiAgLmNsaW1iX190aWxlLS1oYXMtbm8taW1hZ2UgLmNsaW1iX190aWxlX19tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAxODUlOyB9XFxuXFxuLmNsaW1iX190aWxlX19hdXRob3Ige1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IC0xMHB4OyB9XFxuICAuY2xpbWJfX3RpbGVfX2F1dGhvciBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICB3aWR0aDogMzRweDsgfVxcbiAgLmNsaW1iX190aWxlX19hdXRob3IgLmNsaW1iX190aWxlX19hdXRob3JfX3VzZXJuYW1lIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XFxuXFxuLmNsaW1iLWJhZGdlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgei1pbmRleDogOTtcXG4gIGJhY2tncm91bmQ6ICNBOUNBRTIgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9jbGltYi5zb2NpYWxfbG9nby0tc21hbGwucG5nXCIpICsgXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAuY2xpbWItYmFkZ2UgPiBzcGFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxuICAgIHRvcDogLTk5OTlweCAhaW1wb3J0YW50O1xcbiAgICBsZWZ0OiAtOTk5OXB4ICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9hdXRvcHJlZml4ZXItbG9hZGVyP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9uIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZS9tYWluLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhOTRjYmMzN2I3MGVlMGZjMjMyZTZhYjJmYTAwYTAyLnBuZ1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbWcvY2xpbWIuc29jaWFsX2xvZ28tLXNtYWxsLnBuZ1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KCkge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=