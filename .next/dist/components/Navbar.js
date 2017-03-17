'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _facebook = require('react-icons/lib/fa/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _instagram = require('react-icons/lib/fa/instagram');

var _instagram2 = _interopRequireDefault(_instagram);

var _envelopeO = require('react-icons/lib/fa/envelope-o');

var _envelopeO2 = _interopRequireDefault(_envelopeO);

var _bars = require('react-icons/lib/fa/bars');

var _bars2 = _interopRequireDefault(_bars);

var _reactScroll = require('react-scroll');

var _reactClickOutside = require('react-click-outside');

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = [{
  title: 'Home',
  id: 'home'
}, {
  title: 'A Pousada',
  id: 'about'
}, {
  title: 'Serviços',
  id: 'services'
}, {
  title: 'Fotos',
  id: 'pictures'
}, {
  title: 'Contatos',
  id: 'contact'
}];

exports.default = function (_ref) {
  var open = _ref.open,
      toggle = _ref.toggle;
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 2176883585
  }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 2176883585
  }, _react2.default.createElement('div', { className: 'pic', 'data-jsx': 2176883585
  }, _react2.default.createElement('img', { src: '/static/logo.png', 'data-jsx': 2176883585
  })), _react2.default.createElement('div', { className: 'items', 'data-jsx': 2176883585
  }, list.map(function (item, key) {
    return _react2.default.createElement(_reactScroll.Link, {
      key: key,
      to: item.id,
      activeClass: 'active',
      spy: true,
      smooth: true,
      offset: 0,
      duration: 800,
      className: 'link pulse'
    }, item.title);
  })), _react2.default.createElement('div', { className: 'social', 'data-jsx': 2176883585
  }, _react2.default.createElement('div', { className: 'socialItem', 'data-jsx': 2176883585
  }, _react2.default.createElement('a', { href: 'https://www.facebook.com/pousadacanindesaojorge/', target: '_blank', 'data-jsx': 2176883585
  }, _react2.default.createElement(_facebook2.default, null))), _react2.default.createElement('div', { className: 'socialItem', 'data-jsx': 2176883585
  }, _react2.default.createElement('a', { href: 'https://www.instagram.com/pousadacaninde/', target: '_blank', 'data-jsx': 2176883585
  }, _react2.default.createElement(_instagram2.default, null))), _react2.default.createElement('div', { className: 'socialItem', 'data-jsx': 2176883585
  }, _react2.default.createElement('a', { href: 'mailto:pousadacaninde@gmail.com', 'data-jsx': 2176883585
  }, _react2.default.createElement(_envelopeO2.default, null)))), _react2.default.createElement('div', { className: 'mobileMenuBtn', onClick: toggle, 'data-jsx': 2176883585
  }, _react2.default.createElement(_bars2.default, { size: '28' }))), _react2.default.createElement(_reactClickOutside2.default, { onClickOutside: function onClickOutside() {
      return open && toggle();
    } }, _react2.default.createElement('div', { className: open ? "popup open" : "popup closed", 'data-jsx': 2176883585
  }, list.map(function (item, key) {
    return _react2.default.createElement(_reactScroll.Link, {
      key: key,
      to: item.id,
      activeClass: 'active',
      spy: true,
      smooth: true,
      offset: -50,
      duration: 800,
      className: 'link-small'
    }, item.title);
  }))), _react2.default.createElement(_style2.default, {
    styleId: 2176883585,
    css: '.wrapper[data-jsx="2176883585"] {color: #fff;text-transform: uppercase;height: 60px;top: 0;width: 100%;margin: 0 auto;background: url(/static/fundo-menu.png);display:-webkit-flex; display:flex;align-items: center;position: fixed;z-index: 1000;}.container[data-jsx="2176883585"],.social[data-jsx="2176883585"] {margin: 0 auto;display:-webkit-flex; display:flex;-webkit-flex-flow: row nowrap;-moz-flex-flow: row nowrap;flex-flow: row nowrap;justify-content: space-between;align-items: center;}.pic[data-jsx="2176883585"] {margin-top: 86px;}.items[data-jsx="2176883585"] {width: 80%;display:-webkit-flex; display:flex;-webkit-flex-flow: row nowrap;-moz-flex-flow: row nowrap;flex-flow: row nowrap;justify-content: space-around;align-items: center;}.social[data-jsx="2176883585"] {width: 10%;}.socialItem[data-jsx="2176883585"] a[data-jsx="2176883585"] {display: block;background: #fff;color: rgba(0, 85, 185, 0.8);text-align: center;width: 20px;height: 20px;border-radius: 50%;padding: 5px;}.mobileMenuBtn[data-jsx="2176883585"] {display: none;margin-right: 23px;}.popup[data-jsx="2176883585"] {display:-webkit-flex; display:flex;-webkit-flex-flow: column;-moz-flex-flow: column;flex-flow: column;justify-content: space-around;background: white;height: 200px;position: absolute;top: 35px;right: 35px;padding: 20px;-webkit-transition: all ease-in-out 0.2s;-moz-transition: all ease-in-out 0.2s;-ms-transition: all ease-in-out 0.2s;transition: all ease-in-out 0.2s;}.popup.closed[data-jsx="2176883585"] {-webkit-transform: translateY(-300px);-moz-transform: translateY(-300px);-ms-transform: translateY(-300px);transform: translateY(-300px);}.popup.open[data-jsx="2176883585"] {-webkit-transform: translateY(0px);-moz-transform: translateY(0px);-ms-transform: translateY(0px);transform: translateY(0px);}@media(max-width: 1200px) {.items[data-jsx="2176883585"] {width: 70%;}}@media(max-width: 768px) {.mobileMenuBtn[data-jsx="2176883585"] {display: block;}.social[data-jsx="2176883585"],.items[data-jsx="2176883585"] {display: none;}}@-webkit-keyframes pulse {from[data-jsx="2176883585"] {-webkit-transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}50%[data-jsx="2176883585"] {-webkit-transform: scale3d(1.05, 1.05, 1.05);-webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);}to[data-jsx="2176883585"] {-webkit-transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}}@-webkit-keyframes a2176883585pulse {from {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}50% {-webkit--webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);-webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);}to {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}}@-moz-keyframes a2176883585pulse {from {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}50% {-webkit--webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);-webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);}to {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}}@keyframes a2176883585pulse {from {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}50% {-webkit--webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);-webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);}to {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}}.pulse[data-jsx="2176883585"] {-webkit-animation-name: pulse;-webkit-animation-name:a2176883585pulse;-moz-animation-name:a2176883585pulse;animation-name:a2176883585pulse;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFZ0IsQUFFQSxpQ0FDSSxZQUNjLDBCQUNiLGFBQ04sT0FDSyxZQUNHLGVBQ3lCLHdDQUMxQixtQ0FDTSxvQkFDSixnQkFDRixjQUNmLENBQ29CLGtFQUNKLGVBQ0QsbUNBQ1EsK0VBQ1MsK0JBQ1gsb0JBQ3JCLENBQ0ssNkJBQ2EsaUJBQ2xCLENBQ08sK0JBQ0ssV0FDRyxtQ0FDUSwrRUFDUSw4QkFDVixvQkFDckIsQ0FDUSxnQ0FDSSxXQUNaLENBQ2MsNkRBQ0UsZUFDRSxpQkFDWSw2QkFDVixtQkFDUCxZQUNDLGFBQ00sbUJBQ04sYUFDZCxDQUNlLHVDQUNBLGNBQ0ssbUJBQ3BCLENBQ08sK0JBQ1EsbUNBQ0ksbUVBQ1ksOEJBQ1osa0JBQ0osY0FDSyxtQkFDVCxVQUNFLFlBQ0UsY0FDbUIscUpBQ2xDLENBQ2Msc0NBQ2lCLHlJQUMvQixDQUNZLG9DQUNnQiw2SEFDNUIsQ0FDMEIsMkJBQ2pCLCtCQUNLLFdBQ1osQ0FDRixDQUN5QiwwQkFDUix1Q0FDQyxlQUNoQixDQUNnQiw4REFDRCxjQUNmLENBQ0YsQ0FDeUIsMEJBQ2xCLDZCQUNnQyxvQ0FDUixpSUFDN0IsQ0FFSSw0QkFDMEMsNkNBQ1IscUtBQ3RDLENBRUcsMkJBQ2tDLG9DQUNSLGlJQUM3QixDQUNGLENBaUJBLCtzRkFDTywrQkFDd0IsOEJBQ1IsNkdBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kaWVnb21yODYvbXR4L3BvdXNhZGEtY2FuaW5kZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGYUZhY2Vib29rIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9mYWNlYm9vaydcbmltcG9ydCBGYUluc3RhZ3JhbSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvaW5zdGFncmFtJ1xuaW1wb3J0IEZhRW52ZWxvcGVPIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9lbnZlbG9wZS1vJ1xuaW1wb3J0IEZhQmFycyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvYmFycydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnXG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LWNsaWNrLW91dHNpZGUnXG5cbmNvbnN0IGxpc3QgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0hvbWUnLFxuICAgIGlkOiAnaG9tZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0EgUG91c2FkYScsXG4gICAgaWQ6ICdhYm91dCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NlcnZpw6dvcycsXG4gICAgaWQ6ICdzZXJ2aWNlcycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0ZvdG9zJyxcbiAgICBpZDogJ3BpY3R1cmVzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ29udGF0b3MnLFxuICAgIGlkOiAnY29udGFjdCcsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0ICh7IG9wZW4sIHRvZ2dsZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiIC8+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XG4gICAgICAgIHtsaXN0Lm1hcCgoaXRlbSwga2V5KSA9PiA8TGlua1xuICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgIHRvPXtpdGVtLmlkfVxuICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICBzcHlcbiAgICAgICAgICBzbW9vdGhcbiAgICAgICAgICBvZmZzZXQ9ezB9XG4gICAgICAgICAgZHVyYXRpb249ezgwMH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIHB1bHNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsSXRlbVwiPjxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcG91c2FkYWNhbmluZGVzYW9qb3JnZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48RmFGYWNlYm9vayAvPjwvYT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxJdGVtXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcG91c2FkYWNhbmluZGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEZhSW5zdGFncmFtIC8+PC9hPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbEl0ZW1cIj48YSBocmVmPVwibWFpbHRvOnBvdXNhZGFjYW5pbmRlQGdtYWlsLmNvbVwiPjxGYUVudmVsb3BlTyAvPjwvYT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGVNZW51QnRuXCIgb25DbGljaz17dG9nZ2xlfT48RmFCYXJzIHNpemU9XCIyOFwiIC8+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPENsaWNrT3V0c2lkZSBvbkNsaWNrT3V0c2lkZT17KCkgPT4gb3BlbiAmJiB0b2dnbGUoKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17b3BlbiA/IFwicG9wdXAgb3BlblwiIDogXCJwb3B1cCBjbG9zZWRcIn0+XG4gICAgICAgICAge2xpc3QubWFwKChpdGVtLCBrZXkpID0+IDxMaW5rXG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIHRvPXtpdGVtLmlkfVxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgc3B5XG4gICAgICAgICAgICBzbW9vdGhcbiAgICAgICAgICAgIG9mZnNldD17LTUwfVxuICAgICAgICAgICAgZHVyYXRpb249ezgwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmstc21hbGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9DbGlja091dHNpZGU+XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9mdW5kby1tZW51LnBuZyk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXIsIC5zb2NpYWwge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcbiAgICAgIH1cbiAgICAgIC5waWMge1xuICAgICAgICBtYXJnaW4tdG9wOiA4NnB4O1xuICAgICAgfVxuICAgICAgLml0ZW1zIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgICB9XG4gICAgICAuc29jaWFsIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIH1cbiAgICAgIC5zb2NpYWxJdGVtIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgODUsIDE4NSwgMC44KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGVNZW51QnRuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xuICAgICAgfVxuICAgICAgLnBvcHVwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcbiAgICAgIH1cbiAgICAgIC5wb3B1cC5jbG9zZWQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KTtcbiAgICAgIH1cbiAgICAgIC5wb3B1cC5vcGVuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgLml0ZW1zIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAubW9iaWxlTWVudUJ0biB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbCwgLml0ZW1zIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICA1MCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG8ge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucHVsc2Uge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=components/Navbar.js */'
  }));
};