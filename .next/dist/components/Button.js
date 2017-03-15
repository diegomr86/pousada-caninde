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
        }, "data-jsx": 1722302131
    }, children, _react2.default.createElement(_style2.default, {
        styleId: 1722302131,
        css: "button[data-jsx=\"1722302131\"] {width: 100%;background: #005FB6;color: #fff;text-align: center;padding: 15px 0;text-transform: uppercase;width: 104%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUNBLCtCQUNRLFlBQ1Esb0JBQ1IsWUFDTyxtQkFDSCxnQkFDVSwwQkFDZCxZQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kaWVnb21yODYvbXR4L3BvdXNhZGEtY2FuaW5kZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IG9uQ2xpY2ssIGNoaWxkcmVuIH0pID0+IChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gb25DbGljayhlKX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDVGQjY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB3aWR0aDogMTA0JTtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbikiXX0= */\n/*@ sourceURL=components/Button.js */"
    }));
};