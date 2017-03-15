'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('../components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Hero = require('../components/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _About = require('../components/About');

var _About2 = _interopRequireDefault(_About);

var _Services = require('../components/Services');

var _Services2 = _interopRequireDefault(_Services);

var _Pictures = require('../components/Pictures');

var _Pictures2 = _interopRequireDefault(_Pictures);

var _Contact = require('../components/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _Map = require('../components/Map');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      status: 'available',
      name: 'Nome',
      email: 'E-mail',
      comment: 'Deixe seu comentário.',
      menu: false
    }, _this.handleChange = function (name, value) {
      var change = {};
      change[name] = value;
      _this.setState(change);
    }, _this.handleSubmit = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var _this$state, name, email, comment, response, responseJson;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _this$state = _this.state, name = _this$state.name, email = _this$state.email, comment = _this$state.comment;

              _this.setState({ status: 'pending' });

              _context.prev = 3;
              _context.next = 6;
              return fetch('/contact', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: (0, _stringify2.default)({
                  name: name,
                  email: email,
                  comment: comment
                }) });

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              responseJson = _context.sent;

              console.log(responseJson);
              if (responseJson == 'success') {
                alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
              } else {
                alert(responseJson);
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](3);

              // console.log(error);
              alert(_context.t0);

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[3, 14]]);
    })), _this.toggleMenu = function () {
      _this.setState({
        menu: !_this.state.menu
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // static getInitialProps ({}) {
  // }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      var menu = this.state.menu;

      return _react2.default.createElement('div', null, _react2.default.createElement(_Navbar2.default, { toggle: this.toggleMenu, open: menu }), _react2.default.createElement(_Hero2.default, null), _react2.default.createElement(_About2.default, null), _react2.default.createElement(_Services2.default, null), _react2.default.createElement(_Pictures2.default, null), _react2.default.createElement(_Contact2.default, (0, _extends3.default)({ handleChange: this.handleChange, handleSubmit: this.handleSubmit }, this.state)), _react2.default.createElement(_Map2.default, null));
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;