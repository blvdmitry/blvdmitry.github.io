/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Perspective = function () {
	function Perspective(el, options) {
		_classCallCheck(this, Perspective);

		this._options = options;

		this._state = {
			xHalf: null,
			yHalf: null,
			xCenter: null,
			yCenter: null
		};

		this._elems = {
			parent: el,
			move: el.querySelectorAll('.js-perspective__move')
		};

		this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this.mouseOutHandler = this.mouseOutHandler.bind(this);
		this.setStyles = this.setStyles.bind(this);

		this.init.call(this);
	}

	_createClass(Perspective, [{
		key: 'setState',
		value: function setState(nextState) {
			this._state = _extends({}, this._state, nextState);
		}
	}, {
		key: 'setStyles',
		value: function setStyles(x, y) {
			var _elems = this._elems,
			    parent = _elems.parent,
			    move = _elems.move;


			parent.style.transform = 'rotateY(' + x / 60 + 'deg) rotateX(' + -y / 60 + 'deg)';
			move.forEach(function (el) {
				el.style.transform = 'translateX(' + -x / 200 + '%) translateY(' + -y / 200 + '%)';
			});
		}
	}, {
		key: 'mouseMoveHandler',
		value: function mouseMoveHandler(e) {
			var _state = this._state,
			    xHalf = _state.xHalf,
			    xStart = _state.xStart,
			    yHalf = _state.yHalf,
			    yStart = _state.yStart;

			var x = e.clientX - (xHalf + xStart);
			var y = e.clientY - (yHalf + yStart);

			this.setStyles(x, y);
		}
	}, {
		key: 'mouseOutHandler',
		value: function mouseOutHandler() {
			// this.setStyles(0, 0);
		}
	}, {
		key: 'init',
		value: function init() {
			var elParent = this._elems.parent;
			var rect = elParent.getBoundingClientRect();
			var xHalf = rect.width / 2;
			var yHalf = rect.height / 2;

			this.setState({
				xHalf: xHalf, yHalf: yHalf,
				xStart: rect.left,
				yStart: rect.top
			});

			elParent.addEventListener('mousemove', this.mouseMoveHandler);
			elParent.addEventListener('mouseout', this.mouseOutHandler);
		}
	}]);

	return Perspective;
}();

exports.default = Perspective;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _perspective = __webpack_require__(0);

var _perspective2 = _interopRequireDefault(_perspective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var perspective = new _perspective2.default(document.querySelector('.js-perspective'));

/***/ })
/******/ ]);