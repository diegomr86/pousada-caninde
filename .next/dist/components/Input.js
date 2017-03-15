'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseStyle = (0, _defineProperty3.default)({
    padding: '15px 0',
    border: '1px solid #d0d0d0',
    width: '100%',
    borderRadius: 3
}, 'padding', 10);

exports.default = function (_ref) {
    var type = _ref.type,
        value = _ref.value,
        name = _ref.name,
        _onChange = _ref.onChange,
        placeholder = _ref.placeholder;

    if (type === 'textarea') {
        return _react2.default.createElement('textarea', {
            style: (0, _extends3.default)({}, baseStyle, { height: '150px' }),
            value: value,
            name: name,
            onChange: function onChange(e) {
                return _onChange(e.target.name, e.target.value);
            },
            placeholder: placeholder
        });
    } else {
        return _react2.default.createElement('input', {
            style: (0, _extends3.default)({}, baseStyle),
            value: value,
            name: name,
            onChange: function onChange(e) {
                return _onChange(e.target.name, e.target.value);
            },
            placeholder: placeholder
        });
    }
};