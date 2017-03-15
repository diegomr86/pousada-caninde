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
  image: '/static/area-de-convivencia.png',
  title: 'Área de Convivência'
}, {
  image: '/static/cafe-da-manha.png',
  title: 'Café da manhã'
}, {
  image: '/static/dicas-de-passeios.png',
  title: 'Dicas de passeios'
}, {
  image: '/static/fogueira.png',
  title: 'Fogueira'
}, {
  image: '/static/guia-local.png',
  title: 'Guia local'
}, {
  image: '/static/rede-wifi.png',
  title: 'Rede WIFI'
}];

exports.default = function () {
  return _react2.default.createElement('div', { className: 'wrapper', id: 'services', 'data-jsx': 2347837742
  }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 2347837742
  }, _react2.default.createElement('h2', {
    'data-jsx': 2347837742
  }, 'SERVI\xC7OS'), _react2.default.createElement('div', { className: 'items ', 'data-jsx': 2347837742
  }, list.map(function (item, key) {
    return _react2.default.createElement('div', { key: key, style: { backgroundImage: 'url(' + item.image + ')' }, 'data-jsx': 2347837742
    }, _react2.default.createElement('div', { className: 'legend', 'data-jsx': 2347837742
    }, item.title));
  })), _react2.default.createElement('br', {
    'data-jsx': 2347837742
  }), _react2.default.createElement('br', {
    'data-jsx': 2347837742
  })), _react2.default.createElement(_style2.default, {
    styleId: 2347837742,
    css: '.wrapper[data-jsx="2347837742"] {text-align: center;font-size: 20px;font-weight: 200;line-height: 1.5;display:-webkit-flex; display:flex;align-items: center;}.items[data-jsx="2347837742"] {display:-webkit-flex; display:flex;-webkit-flex-flow: row wrap;-moz-flex-flow: row wrap;flex-flow: row wrap;justify-content: space-around;align-items: center;}.items[data-jsx="2347837742"] > div[data-jsx="2347837742"] {height: 260px;width: 32%;background-size: cover;margin-bottom: 15px;}.legend[data-jsx="2347837742"] {width: 100%;padding: 4px 0;background: url(\'/static/fundo-servicos.png\');color: #fff;margin-top: 222px;}@media(max-width: 768px) {.items[data-jsx="2347837742"] > div[data-jsx="2347837742"] {width: 48%;}}@media (max-width: 470px) {.items[data-jsx="2347837742"] > div[data-jsx="2347837742"] {width: 98%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNnQixBQUNBLGlDQUNXLG1CQUNILGdCQUNDLGlCQUNBLGlCQUNILG1DQUNNLG9CQUNyQixDQUNPLCtCQUNRLG1DQUNNLHlFQUNVLDhCQUNWLG9CQUNyQixDQUNhLDREQUNFLGNBQ0gsV0FDWSx1QkFDSCxvQkFDckIsQ0FDUSxnQ0FDSyxZQUNHLGVBQytCLDhDQUNsQyxZQUNNLGtCQUNuQixDQUN5QiwwQkFDViw0REFDRCxXQUNaLENBQ0YsQ0FDMEIsMkJBQ1gsNERBQ0QsV0FDWixDQUNGIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RpZWdvbXI4Ni9tdHgvcG91c2FkYS1jYW5pbmRlIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdCA9IFtcbiAge1xuICAgIGltYWdlOiAnL3N0YXRpYy9hcmVhLWRlLWNvbnZpdmVuY2lhLnBuZycsXG4gICAgdGl0bGU6ICfDgXJlYSBkZSBDb252aXbDqm5jaWEnXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9zdGF0aWMvY2FmZS1kYS1tYW5oYS5wbmcnLFxuICAgIHRpdGxlOiAnQ2Fmw6kgZGEgbWFuaMOjJ1xuICB9LFxuICB7XG4gICAgaW1hZ2U6ICcvc3RhdGljL2RpY2FzLWRlLXBhc3NlaW9zLnBuZycsXG4gICAgdGl0bGU6ICdEaWNhcyBkZSBwYXNzZWlvcydcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL3N0YXRpYy9mb2d1ZWlyYS5wbmcnLFxuICAgIHRpdGxlOiAnRm9ndWVpcmEnXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9zdGF0aWMvZ3VpYS1sb2NhbC5wbmcnLFxuICAgIHRpdGxlOiAnR3VpYSBsb2NhbCdcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL3N0YXRpYy9yZWRlLXdpZmkucG5nJyxcbiAgICB0aXRsZTogJ1JlZGUgV0lGSSdcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiBpZD1cInNlcnZpY2VzXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMj5TRVJWScOHT1M8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcyBcIj5cbiAgICAgICAge2xpc3QubWFwKChpdGVtLCBrZXkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17a2V5fSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uaW1hZ2V9KWAgfX0+PGRpdiBjbGFzc05hbWU9XCJsZWdlbmRcIj57aXRlbS50aXRsZX08L2Rpdj48L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfSBcbiAgICAgIC5pdGVtcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICAgIH1cbiAgICAgIC5pdGVtcyA+IGRpdiB7XG4gICAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICB9XG4gICAgICAubGVnZW5kIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvZnVuZG8tc2Vydmljb3MucG5nJyk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMjJweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5pdGVtcyA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG4gICAgICAgIC5pdGVtcyA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikgIl19 */\n/*@ sourceURL=components/Services.js */'
  }));
};