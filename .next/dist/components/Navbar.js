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
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 636090722
  }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 636090722
  }, _react2.default.createElement('div', { className: 'pic', 'data-jsx': 636090722
  }, _react2.default.createElement('img', { src: '/static/logo.png', 'data-jsx': 636090722
  })), _react2.default.createElement('div', { className: 'items', 'data-jsx': 636090722
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
  })), _react2.default.createElement('div', { className: 'social', 'data-jsx': 636090722
  }, _react2.default.createElement('div', { className: 'socialItem', 'data-jsx': 636090722
  }, _react2.default.createElement('a', { href: 'https://www.facebook.com/pousadacanindesaojorge/', target: '_blank', 'data-jsx': 636090722
  }, _react2.default.createElement(_facebook2.default, null))), _react2.default.createElement('div', { className: 'socialItem', 'data-jsx': 636090722
  }, _react2.default.createElement('a', { href: 'https://www.instagram.com/pousadacaninde/', target: '_blank', 'data-jsx': 636090722
  }, _react2.default.createElement(_instagram2.default, null))), _react2.default.createElement('div', { className: 'socialItem', 'data-jsx': 636090722
  }, _react2.default.createElement('a', { href: 'mailto:pousadacaninde@gmail.com', 'data-jsx': 636090722
  }, _react2.default.createElement(_envelopeO2.default, null)))), _react2.default.createElement('div', { className: 'mobileMenuBtn', onClick: toggle, 'data-jsx': 636090722
  }, _react2.default.createElement(_bars2.default, { size: '28' }))), _react2.default.createElement(_reactClickOutside2.default, { onClickOutside: function onClickOutside() {
      return open && toggle();
    } }, _react2.default.createElement('div', { className: open ? "popup open" : "popup closed", 'data-jsx': 636090722
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
    styleId: 636090722,
    css: '.wrapper[data-jsx="636090722"] {color: #fff;text-transform: uppercase;height: 60px;top: 0;width: 100%;margin: 0 auto;background: url(/static/fundo-menu.png);display:-webkit-flex; display:flex;align-items: center;position: fixed;}.container[data-jsx="636090722"],.social[data-jsx="636090722"] {margin: 0 auto;display:-webkit-flex; display:flex;-webkit-flex-flow: row nowrap;-moz-flex-flow: row nowrap;flex-flow: row nowrap;justify-content: space-between;align-items: center;}.pic[data-jsx="636090722"] {margin-top: 86px;}.items[data-jsx="636090722"] {width: 80%;display:-webkit-flex; display:flex;-webkit-flex-flow: row nowrap;-moz-flex-flow: row nowrap;flex-flow: row nowrap;justify-content: space-around;align-items: center;}.social[data-jsx="636090722"] {width: 10%;}.socialItem[data-jsx="636090722"] a[data-jsx="636090722"] {display: block;background: #fff;color: rgba(0, 85, 185, 0.8);text-align: center;width: 20px;height: 20px;border-radius: 50%;padding: 5px;}.mobileMenuBtn[data-jsx="636090722"] {display: none;margin-right: 23px;}.popup[data-jsx="636090722"] {display:-webkit-flex; display:flex;-webkit-flex-flow: column;-moz-flex-flow: column;flex-flow: column;justify-content: space-around;background: white;height: 200px;position: absolute;top: 35px;right: 35px;padding: 20px;-webkit-transition: all ease-in-out 0.2s;-moz-transition: all ease-in-out 0.2s;-ms-transition: all ease-in-out 0.2s;transition: all ease-in-out 0.2s;}.popup.closed[data-jsx="636090722"] {-webkit-transform: translateY(-300px);-moz-transform: translateY(-300px);-ms-transform: translateY(-300px);transform: translateY(-300px);}.popup.open[data-jsx="636090722"] {-webkit-transform: translateY(0px);-moz-transform: translateY(0px);-ms-transform: translateY(0px);transform: translateY(0px);}@media(max-width: 1200px) {.items[data-jsx="636090722"] {width: 70%;}}@media(max-width: 768px) {.mobileMenuBtn[data-jsx="636090722"] {display: block;}.social[data-jsx="636090722"],.items[data-jsx="636090722"] {display: none;}}@-webkit-keyframes pulse {from[data-jsx="636090722"] {-webkit-transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}50%[data-jsx="636090722"] {-webkit-transform: scale3d(1.05, 1.05, 1.05);-webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);}to[data-jsx="636090722"] {-webkit-transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}}@-webkit-keyframes a636090722pulse {from {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}50% {-webkit--webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);-webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);}to {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}}@-moz-keyframes a636090722pulse {from {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}50% {-webkit--webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);-webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);}to {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}}@keyframes a636090722pulse {from {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}50% {-webkit--webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);-webkit-transform: scale3d(1.05, 1.05, 1.05);-moz-transform: scale3d(1.05, 1.05, 1.05);-ms-transform: scale3d(1.05, 1.05, 1.05);transform: scale3d(1.05, 1.05, 1.05);}to {-webkit--webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);-webkit-transform: scale3d(1, 1, 1);-moz-transform: scale3d(1, 1, 1);-ms-transform: scale3d(1, 1, 1);transform: scale3d(1, 1, 1);}}.pulse[data-jsx="636090722"] {-webkit-animation-name: pulse;-webkit-animation-name:a636090722pulse;-moz-animation-name:a636090722pulse;animation-name:a636090722pulse;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFZ0IsQUFFQSxnQ0FDSSxZQUNjLDBCQUNiLGFBQ04sT0FDSyxZQUNHLGVBQ3lCLHdDQUMxQixtQ0FDTSxvQkFDSixnQkFDakIsQ0FDb0IsZ0VBQ0osZUFDRCxtQ0FDUSwrRUFDUywrQkFDWCxvQkFDckIsQ0FDSyw0QkFDYSxpQkFDbEIsQ0FDTyw4QkFDSyxXQUNHLG1DQUNRLCtFQUNRLDhCQUNWLG9CQUNyQixDQUNRLCtCQUNJLFdBQ1osQ0FDYywyREFDRSxlQUNFLGlCQUNZLDZCQUNWLG1CQUNQLFlBQ0MsYUFDTSxtQkFDTixhQUNkLENBQ2Usc0NBQ0EsY0FDSyxtQkFDcEIsQ0FDTyw4QkFDUSxtQ0FDSSxtRUFDWSw4QkFDWixrQkFDSixjQUNLLG1CQUNULFVBQ0UsWUFDRSxjQUNtQixxSkFDbEMsQ0FDYyxxQ0FDaUIseUlBQy9CLENBQ1ksbUNBQ2dCLDZIQUM1QixDQUMwQiwyQkFDakIsOEJBQ0ssV0FDWixDQUNGLENBQ3lCLDBCQUNSLHNDQUNDLGVBQ2hCLENBQ2dCLDREQUNELGNBQ2YsQ0FDRixDQUN5QiwwQkFDbEIsNEJBQ2dDLG9DQUNSLGlJQUM3QixDQUVJLDJCQUMwQyw2Q0FDUixxS0FDdEMsQ0FFRywwQkFDa0Msb0NBQ1IsaUlBQzdCLENBQ0YsQ0FpQkEsNHNGQUNPLDhCQUN3Qiw4QkFDUiwwR0FDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RpZWdvbXI4Ni9tdHgvcG91c2FkYS1jYW5pbmRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhRmFjZWJvb2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2ZhY2Vib29rJ1xuaW1wb3J0IEZhSW5zdGFncmFtIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9pbnN0YWdyYW0nXG5pbXBvcnQgRmFFbnZlbG9wZU8gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2VudmVsb3BlLW8nXG5pbXBvcnQgRmFCYXJzIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9iYXJzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAncmVhY3QtY2xpY2stb3V0c2lkZSdcblxuY29uc3QgbGlzdCA9IFtcbiAge1xuICAgIHRpdGxlOiAnSG9tZScsXG4gICAgaWQ6ICdob21lJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQSBQb3VzYWRhJyxcbiAgICBpZDogJ2Fib3V0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2VydmnDp29zJyxcbiAgICBpZDogJ3NlcnZpY2VzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRm90b3MnLFxuICAgIGlkOiAncGljdHVyZXMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDb250YXRvcycsXG4gICAgaWQ6ICdjb250YWN0JyxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgKHsgb3BlbiwgdG9nZ2xlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljXCI+PGltZyBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCIgLz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cbiAgICAgICAge2xpc3QubWFwKChpdGVtLCBrZXkpID0+IDxMaW5rXG4gICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgdG89e2l0ZW0uaWR9XG4gICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgIHNweVxuICAgICAgICAgIHNtb290aFxuICAgICAgICAgIG9mZnNldD17MH1cbiAgICAgICAgICBkdXJhdGlvbj17ODAwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgcHVsc2VcIlxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxJdGVtXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wb3VzYWRhY2FuaW5kZXNhb2pvcmdlL1wiIHRhcmdldD1cIl9ibGFua1wiPjxGYUZhY2Vib29rIC8+PC9hPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbEl0ZW1cIj48YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wb3VzYWRhY2FuaW5kZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48RmFJbnN0YWdyYW0gLz48L2E+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsSXRlbVwiPjxhIGhyZWY9XCJtYWlsdG86cG91c2FkYWNhbmluZGVAZ21haWwuY29tXCI+PEZhRW52ZWxvcGVPIC8+PC9hPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZU1lbnVCdG5cIiBvbkNsaWNrPXt0b2dnbGV9PjxGYUJhcnMgc2l6ZT1cIjI4XCIgLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Q2xpY2tPdXRzaWRlIG9uQ2xpY2tPdXRzaWRlPXsoKSA9PiBvcGVuICYmIHRvZ2dsZSgpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtvcGVuID8gXCJwb3B1cCBvcGVuXCIgOiBcInBvcHVwIGNsb3NlZFwifT5cbiAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGtleSkgPT4gPExpbmtcbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgdG89e2l0ZW0uaWR9XG4gICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICBzcHlcbiAgICAgICAgICAgIHNtb290aFxuICAgICAgICAgICAgb2Zmc2V0PXstNTB9XG4gICAgICAgICAgICBkdXJhdGlvbj17ODAwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluay1zbWFsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0NsaWNrT3V0c2lkZT5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2Z1bmRvLW1lbnUucG5nKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lciwgLnNvY2lhbCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxuICAgICAgfVxuICAgICAgLnBpYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDg2cHg7XG4gICAgICB9XG4gICAgICAuaXRlbXMge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICAgIH1cbiAgICAgIC5zb2NpYWwge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgfVxuICAgICAgLnNvY2lhbEl0ZW0gYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCA4NSwgMTg1LCAwLjgpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgfVxuICAgICAgLm1vYmlsZU1lbnVCdG4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgICB9XG4gICAgICAucG9wdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xuICAgICAgfVxuICAgICAgLnBvcHVwLmNsb3NlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xuICAgICAgfVxuICAgICAgLnBvcHVwLm9wZW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAuaXRlbXMge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5tb2JpbGVNZW51QnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLCAuaXRlbXMge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG8ge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XG4gICAgICAgIH1cblxuICAgICAgICB0byB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wdWxzZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogcHVsc2U7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=components/Navbar.js */'
  }));
};