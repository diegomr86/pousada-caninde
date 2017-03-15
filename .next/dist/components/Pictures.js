'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = [{
  image: '/static/foto1.png'
}, {
  image: '/static/foto2.png'
}, {
  image: '/static/foto3.png'
}, {
  image: '/static/foto4.png'
}, {
  image: '/static/foto5.png'
}, {
  image: '/static/foto6.png'
}];

exports.default = function () {
  return _react2.default.createElement('div', { className: 'wrapper', id: 'pictures', 'data-jsx': 4243716314
  }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 4243716314
  }, _react2.default.createElement('h2', {
    'data-jsx': 4243716314
  }, 'GALERIA DE FOTOS'), _react2.default.createElement('div', { className: 'items ', 'data-jsx': 4243716314
  }, list.map(function (item, key) {
    return _react2.default.createElement('div', { key: key, style: { backgroundImage: 'url(' + item.image + ')' }, 'data-jsx': 4243716314
    });
  }))), _react2.default.createElement(_style2.default, {
    styleId: 4243716314,
    css: '.wrapper[data-jsx="4243716314"] {text-align: center;font-size: 20px;font-weight: 200;line-height: 1.5;display:-webkit-flex; display:flex;align-items: center;background: #E9E9E9;padding: 20px 0 50px;}.items[data-jsx="4243716314"] {display:-webkit-flex; display:flex;-webkit-flex-flow: row wrap;-moz-flex-flow: row wrap;flex-flow: row wrap;justify-content: space-around;align-items: center;}.items[data-jsx="4243716314"] > div[data-jsx="4243716314"] {height: 260px;width: 32%;background-size: cover;margin-bottom: 15px;}@media(max-width: 768px) {.items[data-jsx="4243716314"] > div[data-jsx="4243716314"] {width: 48%;}}@media (max-width: 470px) {.items[data-jsx="4243716314"] > div[data-jsx="4243716314"] {width: 98%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGljdHVyZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JnQixBQUNBLGlDQUNXLG1CQUNILGdCQUNDLGlCQUNBLGlCQUNILG1DQUNNLG9CQUNBLG9CQUNDLHFCQUN0QixDQUNPLCtCQUNRLG1DQUNNLHlFQUNVLDhCQUNWLG9CQUNyQixDQUNhLDREQUNFLGNBQ0gsV0FDWSx1QkFDSCxvQkFDckIsQ0FDeUIsMEJBQ1YsNERBQ0QsV0FDWixDQUNGLENBQzBCLDJCQUNYLDREQUNELFdBQ1osQ0FDRiIsImZpbGUiOiJjb21wb25lbnRzL1BpY3R1cmVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kaWVnb21yODYvbXR4L3BvdXNhZGEtY2FuaW5kZSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpc3QgPSBbXG4gIHtcbiAgICBpbWFnZTogJy9zdGF0aWMvZm90bzEucG5nJ1xuICB9LFxuICB7XG4gICAgaW1hZ2U6ICcvc3RhdGljL2ZvdG8yLnBuZydcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL3N0YXRpYy9mb3RvMy5wbmcnXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9zdGF0aWMvZm90bzQucG5nJ1xuICB9LFxuICB7XG4gICAgaW1hZ2U6ICcvc3RhdGljL2ZvdG81LnBuZydcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL3N0YXRpYy9mb3RvNi5wbmcnXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgaWQ9XCJwaWN0dXJlc1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDI+R0FMRVJJQSBERSBGT1RPUzwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zIFwiPlxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtrZXl9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aXRlbS5pbWFnZX0pYCB9fT48L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgIFxuICAgICAgLndyYXBwZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogI0U5RTlFOTtcbiAgICAgICAgcGFkZGluZzogMjBweCAwIDUwcHg7XG4gICAgICB9IFxuICAgICAgLml0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgICAgfVxuICAgICAgLml0ZW1zID4gZGl2IHtcbiAgICAgICAgaGVpZ2h0OiAyNjBweDtcbiAgICAgICAgd2lkdGg6IDMyJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5pdGVtcyA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG4gICAgICAgIC5pdGVtcyA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikgIl19 */\n/*@ sourceURL=components/Pictures.js */'
  }));
};