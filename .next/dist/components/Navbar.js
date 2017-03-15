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
  return _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 3674805524
  }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 3674805524
  }, _react2.default.createElement('div', { className: 'pic', 'data-jsx': 3674805524
  }, _react2.default.createElement('img', { src: '/static/logo.png', 'data-jsx': 3674805524
  })), _react2.default.createElement('div', { className: 'items', 'data-jsx': 3674805524
  }, list.map(function (item, key) {
    return _react2.default.createElement(_reactScroll.Link, {
      key: key,
      to: item.id,
      activeClass: 'active',
      spy: true,
      smooth: true,
      offset: 0,
      duration: 800,
      className: 'link'
    }, item.title);
  })), _react2.default.createElement('div', { className: 'social', 'data-jsx': 3674805524
  }, _react2.default.createElement('div', { className: 'socialItem', 'data-jsx': 3674805524
  }, _react2.default.createElement('a', { href: 'https://www.facebook.com/pousadacanindesaojorge/', target: '_blank', 'data-jsx': 3674805524
  }, _react2.default.createElement(_facebook2.default, null))), _react2.default.createElement('div', { className: 'socialItem', 'data-jsx': 3674805524
  }, _react2.default.createElement('a', { href: 'https://www.instagram.com/pousadacaninde/', target: '_blank', 'data-jsx': 3674805524
  }, _react2.default.createElement(_instagram2.default, null))), _react2.default.createElement('div', { className: 'socialItem', 'data-jsx': 3674805524
  }, _react2.default.createElement('a', { href: 'mailto:pousadacaninde@gmail.com', 'data-jsx': 3674805524
  }, _react2.default.createElement(_envelopeO2.default, null)))), _react2.default.createElement('div', { className: 'mobileMenuBtn', onClick: toggle, 'data-jsx': 3674805524
  }, _react2.default.createElement(_bars2.default, { size: '28' }))), _react2.default.createElement(_reactClickOutside2.default, { onClickOutside: function onClickOutside() {
      return open && toggle();
    } }, _react2.default.createElement('div', { className: open ? "popup open" : "popup closed", 'data-jsx': 3674805524
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
    styleId: 3674805524,
    css: '.wrapper[data-jsx="3674805524"] {color: #fff;text-transform: uppercase;height: 60px;top: 0;width: 100%;margin: 0 auto;background: url(/static/fundo-menu.png);display:-webkit-flex; display:flex;align-items: center;position: absolute;}.container[data-jsx="3674805524"],.social[data-jsx="3674805524"] {margin: 0 auto;display:-webkit-flex; display:flex;-webkit-flex-flow: row nowrap;-moz-flex-flow: row nowrap;flex-flow: row nowrap;justify-content: space-between;align-items: center;}.pic[data-jsx="3674805524"] {margin-top: 86px;}.items[data-jsx="3674805524"] {width: 80%;display:-webkit-flex; display:flex;-webkit-flex-flow: row nowrap;-moz-flex-flow: row nowrap;flex-flow: row nowrap;justify-content: space-around;align-items: center;}.social[data-jsx="3674805524"] {width: 10%;}.socialItem[data-jsx="3674805524"] a[data-jsx="3674805524"] {display: block;background: #fff;color: rgba(0, 85, 185, 0.8);text-align: center;width: 20px;height: 20px;border-radius: 50%;padding: 5px;}.mobileMenuBtn[data-jsx="3674805524"] {display: none;margin-right: 23px;}.popup[data-jsx="3674805524"] {display:-webkit-flex; display:flex;-webkit-flex-flow: column;-moz-flex-flow: column;flex-flow: column;justify-content: space-around;background: white;height: 200px;position: absolute;top: 35px;right: 35px;padding: 20px;-webkit-transition: all ease-in-out 0.2s;-moz-transition: all ease-in-out 0.2s;-ms-transition: all ease-in-out 0.2s;transition: all ease-in-out 0.2s;}.popup.closed[data-jsx="3674805524"] {-webkit-transform: translateY(-300px);-moz-transform: translateY(-300px);-ms-transform: translateY(-300px);transform: translateY(-300px);}.popup.open[data-jsx="3674805524"] {-webkit-transform: translateY(0px);-moz-transform: translateY(0px);-ms-transform: translateY(0px);transform: translateY(0px);}@media(max-width: 1200px) {.items[data-jsx="3674805524"] {width: 70%;}}@media(max-width: 768px) {.mobileMenuBtn[data-jsx="3674805524"] {display: block;}.social[data-jsx="3674805524"],.items[data-jsx="3674805524"] {display: none;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFZ0IsQUFDQSxpQ0FDSSxZQUNjLDBCQUNiLGFBQ04sT0FDSyxZQUNHLGVBQ3lCLHdDQUMxQixtQ0FDTSxvQkFDRCxtQkFDcEIsQ0FDb0Isa0VBQ0osZUFDRCxtQ0FDUSwrRUFDUywrQkFDWCxvQkFDckIsQ0FDSyw2QkFDYSxpQkFDbEIsQ0FDTywrQkFDSyxXQUNHLG1DQUNRLCtFQUNRLDhCQUNWLG9CQUNyQixDQUNRLGdDQUNJLFdBQ1osQ0FDYyw2REFDRSxlQUNFLGlCQUNZLDZCQUNWLG1CQUNQLFlBQ0MsYUFDTSxtQkFDTixhQUNkLENBQ2UsdUNBQ0EsY0FDSyxtQkFDcEIsQ0FDTywrQkFDUSxtQ0FDSSxtRUFDWSw4QkFDWixrQkFDSixjQUNLLG1CQUNULFVBQ0UsWUFDRSxjQUNtQixxSkFDbEMsQ0FDYyxzQ0FDaUIseUlBQy9CLENBQ1ksb0NBQ2dCLDZIQUM1QixDQUMwQiwyQkFDakIsK0JBQ0ssV0FDWixDQUNGLENBQ3lCLDBCQUNSLHVDQUNDLGVBQ2hCLENBQ2dCLDhEQUNELGNBQ2YsQ0FDRiIsImZpbGUiOiJjb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGllZ29tcjg2L210eC9wb3VzYWRhLWNhbmluZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFGYWNlYm9vayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvZmFjZWJvb2snXG5pbXBvcnQgRmFJbnN0YWdyYW0gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2luc3RhZ3JhbSdcbmltcG9ydCBGYUVudmVsb3BlTyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvZW52ZWxvcGUtbydcbmltcG9ydCBGYUJhcnMgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2JhcnMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1jbGljay1vdXRzaWRlJ1xuXG5jb25zdCBsaXN0ID0gW1xuICB7XG4gICAgdGl0bGU6ICdIb21lJyxcbiAgICBpZDogJ2hvbWUnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBIFBvdXNhZGEnLFxuICAgIGlkOiAnYWJvdXQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTZXJ2acOnb3MnLFxuICAgIGlkOiAnc2VydmljZXMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGb3RvcycsXG4gICAgaWQ6ICdwaWN0dXJlcycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0NvbnRhdG9zJyxcbiAgICBpZDogJ2NvbnRhY3QnLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCAoeyBvcGVuLCB0b2dnbGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNcIj48aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIiAvPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGtleSkgPT4gPExpbmtcbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICB0bz17aXRlbS5pZH1cbiAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgc3B5XG4gICAgICAgICAgc21vb3RoXG4gICAgICAgICAgb2Zmc2V0PXswfVxuICAgICAgICAgIGR1cmF0aW9uPXs4MDB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbEl0ZW1cIj48YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BvdXNhZGFjYW5pbmRlc2Fvam9yZ2UvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEZhRmFjZWJvb2sgLz48L2E+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsSXRlbVwiPjxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3BvdXNhZGFjYW5pbmRlL1wiIHRhcmdldD1cIl9ibGFua1wiPjxGYUluc3RhZ3JhbSAvPjwvYT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxJdGVtXCI+PGEgaHJlZj1cIm1haWx0bzpwb3VzYWRhY2FuaW5kZUBnbWFpbC5jb21cIj48RmFFbnZlbG9wZU8gLz48L2E+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlTWVudUJ0blwiIG9uQ2xpY2s9e3RvZ2dsZX0+PEZhQmFycyBzaXplPVwiMjhcIiAvPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxDbGlja091dHNpZGUgb25DbGlja091dHNpZGU9eygpID0+IG9wZW4gJiYgdG9nZ2xlKCl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e29wZW4gPyBcInBvcHVwIG9wZW5cIiA6IFwicG9wdXAgY2xvc2VkXCJ9PlxuICAgICAgICAgIHtsaXN0Lm1hcCgoaXRlbSwga2V5KSA9PiA8TGlua1xuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICB0bz17aXRlbS5pZH1cbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgIHNweVxuICAgICAgICAgICAgc21vb3RoXG4gICAgICAgICAgICBvZmZzZXQ9ey01MH1cbiAgICAgICAgICAgIGR1cmF0aW9uPXs4MDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLXNtYWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2xpY2tPdXRzaWRlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2Z1bmRvLW1lbnUucG5nKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lciwgLnNvY2lhbCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxuICAgICAgfVxuICAgICAgLnBpYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDg2cHg7XG4gICAgICB9XG4gICAgICAuaXRlbXMge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICAgIH1cbiAgICAgIC5zb2NpYWwge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgfVxuICAgICAgLnNvY2lhbEl0ZW0gYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCA4NSwgMTg1LCAwLjgpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgfVxuICAgICAgLm1vYmlsZU1lbnVCdG4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgICB9XG4gICAgICAucG9wdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xuICAgICAgfVxuICAgICAgLnBvcHVwLmNsb3NlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xuICAgICAgfVxuICAgICAgLnBvcHVwLm9wZW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAuaXRlbXMge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5tb2JpbGVNZW51QnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLCAuaXRlbXMge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=components/Navbar.js */'
  }));
};