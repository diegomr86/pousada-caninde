'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _place = require('react-icons/lib/md/place');

var _place2 = _interopRequireDefault(_place);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Marker = function Marker() {
    return _react2.default.createElement(_place2.default, { size: 85, color: '#005FB6' });
};

var Map = function Map(_ref) {
    var center = _ref.center,
        zoom = _ref.zoom;
    return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 581682596
    }, _react2.default.createElement(_googleMapReact2.default, {
        defaultCenter: center,
        defaultZoom: zoom
    }, _react2.default.createElement(Marker, { lat: -14.1754559, lng: -47.8153361 })), _react2.default.createElement(_style2.default, {
        styleId: 581682596,
        css: '.wrapper[data-jsx="581682596"] {height: 500px;width: 100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUNFLGdDQUNRLGNBQ0YsWUFDZiIsImZpbGUiOiJjb21wb25lbnRzL01hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGllZ29tcjg2L210eC9wb3VzYWRhLWNhbmluZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9wbGFjZSdcblxuY29uc3QgTWFya2VyID0gKCkgPT4gPEljb24gc2l6ZT17ODV9IGNvbG9yPXsnIzAwNUZCNid9IC8+XG5cbmNvbnN0IE1hcCA9ICh7IGNlbnRlciwgem9vbSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxHb29nbGVNYXBSZWFjdFxuICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17Y2VudGVyfVxuICAgICAgICAgICAgZGVmYXVsdFpvb209e3pvb219XG4gICAgICAgID5cbiAgICAgICAgICAgIDxNYXJrZXIgbGF0PXstMTQuMTc1NDU1OX0gbG5nPXstNDcuODE1MzM2MX0gLz5cbiAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHtsYXQ6IC0xNC4xNzY5MTc3LCBsbmc6IC00Ny44MTQzOTc5fSxcbiAgICB6b29tOiAxNVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iXX0= */\n/*@ sourceURL=components/Map.js */'
    }));
};

Map.defaultProps = {
    center: { lat: -14.1769177, lng: -47.8143979 },
    zoom: 15
};

exports.default = Map;