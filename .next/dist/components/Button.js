"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var _onClick = _ref.onClick,
        children = _ref.children;
    return _react2.default.createElement("button", { onClick: function onClick(e) {
            return _onClick(e);
        }, "data-jsx": 622772553
    }, children, _react2.default.createElement(_style2.default, {
        styleId: 622772553,
        css: "button[data-jsx=\"622772553\"] {width: 100%;background: #005FB6;color: #fff;text-align: center;padding: 15px 0;text-transform: uppercase;width: 104%;cursor: pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUNBLDhCQUNRLFlBQ1Esb0JBQ1IsWUFDTyxtQkFDSCxnQkFDVSwwQkFDZCxZQUNJLGdCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL0J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGllZ29tcjg2L210eC9wb3VzYWRhLWNhbmluZGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBvbkNsaWNrLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtlID0+IG9uQ2xpY2soZSl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1RkI2O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgd2lkdGg6IDEwNCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9idXR0b24+XG4pIl19 */\n/*@ sourceURL=components/Button.js */"
    }));
};