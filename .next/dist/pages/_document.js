'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ./pages/_document.js
var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('meta', { content: 'Pousada Canind\xE9 - Chapada dos Veadeiros', name: 'description' }), _react2.default.createElement('meta', { content: 'Pousada Canind\xE9, Vila de s\xE3o jorge, Chapada dos Veadeiros, Pousdas Alto Para\xEDso, Pousadas Chapada dos Veadeiros, Cerrado', name: 'keywords' }), _react2.default.createElement('meta', { content: '!', name: 'fragment' }), _react2.default.createElement('meta', { content: 'pt_BR', property: 'og:locale' }), _react2.default.createElement('meta', { content: 'Pousada Canind\xE9', property: 'og:site_name' }), _react2.default.createElement('meta', { content: 'Pousada Canind\xE9 | Vila de S\xE3o Jorge - Chapada dos Veadeiros', property: 'og:title' }), _react2.default.createElement('meta', { content: 'No cora\xE7\xE3o da Chapada dos Veadeiros, seu ref\xFAgio est\xE1 de portas abertas!', property: 'og:description' }), _react2.default.createElement('meta', { content: 'http://pousadacaninde.com.br/', property: 'og:url' }), _react2.default.createElement('meta', { content: 'http://pousadacaninde.com.br/static/cover.png', property: 'og:image' }), _react2.default.createElement('meta', { content: 'website', property: 'og:type' }), _react2.default.createElement('meta', { content: 'summary_large_image', name: 'twitter:card' }), _react2.default.createElement('meta', { content: 'Pousada Canind\xE9 | Alto Para\xEDso - Chapada dos Veadeiros', itemprop: 'name' }), _react2.default.createElement('meta', { content: 'No cora\xE7\xE3o da Chapada dos Veadeiros, seu ref\xFAgio est\xE1 de portas abertas!', itemprop: 'description' }), _react2.default.createElement('meta', { content: 'http://pousadacaninde.com.br/static/cover.png', property: 'image' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Mouse+Memoirs', rel: 'stylesheet' }), _react2.default.createElement('link', { href: '/static/effects.css', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico' }), _react2.default.createElement('meta', { name: 'theme-color', content: '#005FB6' }), _react2.default.createElement('link', { rel: 'manifest', href: 'static/manifest.json' }), _react2.default.createElement('script', { type: 'text/javascript', src: 'https://maps.google.com/maps/api/js?key=AIzaSyBsr3RFIuUoYkvrarEThfbq_beHu97AgXI&sensor=false' }), _react2.default.createElement('style', null, '\n          body, html {\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n            margin: 0; \n          }\n          h2 {\n            font-size: 60px;\n            font-family: Mouse Memoirs, sans-serif;\n            color: #005FB6;\n            font-weight: 400;\n            margin: 30px;\n          }\n          .container {\n            margin: auto;\n            width: 1170px;\n          }\n          h3 {\n            font-family: Mouse Memoirs, sans-serif;\n            color: #005FB6;\n            font-weight: 400;\n            font-size: 38px;\n          }\n          button {\n            border: none;\n            shadow-box: none;\n          }\n          a {\n            text-decoration: none;\n            color: #000;\n            cursor: pointer;\n          }\n          .link {\n            color: #fff;\n            font-family: Mouse Memoirs, sans-serif;\n            font-size: 30px;\n            font-weight: 400;\n            color: #fff;\n          }\n          .link-small {\n            color: #000;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n          }\n          .slick-slide {\n            font-weight: 300;\n          }\n          @media(max-width: 1200px) {\n            .container {\n              width: 992px;\n              margin: auto;\n            }\n          }\n          @media(max-width: 1024px) {\n            .container {\n              width: 100%;\n              margin: auto;\n            }\n          }\n          @media(max-width: 768px) {\n            .pic img {\n              width: 130px;\n              margin-top: -34px;\n            }\n          }\n          ')), _react2.default.createElement('body', { className: 'custom_class' }, this.props.customValue, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head;

      var styles = (0, _server2.default)();
      return { html: html, head: head, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;