'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Slider from 'react-slick'

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

var list = [{
    image: '/static/banner.png',
    message: 'NO CORAÇÃO DA CHAPADA DOS VEADEIROS, <br/>SEU REFÚGIO ESTÁ DE PORTAS ABERTAS'
}];

exports.default = function () {
    return _react2.default.createElement('div', { className: 'wrapper', id: 'home', 'data-jsx': 985399024
    }, list.map(function (item, key) {
        return _react2.default.createElement('div', { key: key, className: 'item', style: { backgroundImage: 'url(' + item.image + ')', display: 'flex' }, 'data-jsx': 985399024
        }, _react2.default.createElement('h2', {
            'data-jsx': 985399024
        }, 'NO CORA\xC7\xC3O DA CHAPADA DOS VEADEIROS, ', _react2.default.createElement('br', {
            'data-jsx': 985399024
        }), 'SEU REF\xDAGIO EST\xC1 DE PORTAS ABERTAS'));
    }), _react2.default.createElement(_style2.default, {
        styleId: 985399024,
        css: '.wrapper[data-jsx="985399024"] {height: 100vh;width: 100%;}.container[data-jsx="985399024"] {height: 100%;width: 100%;}.item[data-jsx="985399024"] {width: 100%;background-size: cover;height: 100%;align-items: center;-webkit-flex-flow: column;-moz-flex-flow: column;flex-flow: column;justify-content: center;}.item[data-jsx="985399024"] h2[data-jsx="985399024"] {font-size: 80px;text-transform: uppercase;color: #fff;max-width: 95%;text-align: center;margin: 0 auto;}@media(max-width: 992px) {.item[data-jsx="985399024"] h2[data-jsx="985399024"] {font-size: 60px;}}@media(max-width: 768px) {.item[data-jsx="985399024"] h2[data-jsx="985399024"] {font-size: 50px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVyby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9CLEFBQ0UsZ0NBQ1EsY0FDRixZQUNmLENBQ1csa0NBQ0ssYUFDRCxZQUNmLENBQ00sNkJBQ1MsWUFDVyx1QkFDVixhQUNPLG9CQUNGLG1FQUNNLHdCQUMzQixDQUNTLHNEQUNVLGdCQUNVLDBCQUNkLFlBQ0csZUFDSSxtQkFDSixlQUNsQixDQUN5QiwwQkFDWixzREFDVSxnQkFDbkIsQ0FDSixDQUN5QiwwQkFDWixzREFDVSxnQkFDbkIsQ0FDSiIsImZpbGUiOiJjb21wb25lbnRzL0hlcm8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RpZWdvbXI4Ni9tdHgvcG91c2FkYS1jYW5pbmRlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljaydcblxuLy8gY29uc3Qgc2V0dGluZ3MgPSB7XG4vLyAgICAgZG90czogdHJ1ZSxcbi8vICAgICBpbmZpbml0ZTogdHJ1ZSxcbi8vICAgICBzcGVlZDogNTAwLFxuLy8gICAgIHNsaWRlc1RvU2hvdzogMSxcbi8vICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbi8vIH07XG5cbmNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgICBpbWFnZTogJy9zdGF0aWMvYmFubmVyLnBuZycsXG4gICAgICAgIG1lc3NhZ2U6ICdOTyBDT1JBw4fDg08gREEgQ0hBUEFEQSBET1MgVkVBREVJUk9TLCA8YnIvPlNFVSBSRUbDmkdJTyBFU1TDgSBERSBQT1JUQVMgQUJFUlRBUycsXG4gICAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgaWQ9XCJob21lXCI+XG4gICAgICAgIHsvKjxTbGlkZXIgey4uLnNldHRpbmdzfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj4qL31cbiAgICAgICAgICAgIHtsaXN0Lm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uaW1hZ2V9KWAsIGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPk5PIENPUkHDh8ODTyBEQSBDSEFQQURBIERPUyBWRUFERUlST1MsIDxici8+U0VVIFJFRsOaR0lPIEVTVMOBIERFIFBPUlRBUyBBQkVSVEFTPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICB7Lyo8L1NsaWRlcj4qL31cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVtIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgICAgIC5pdGVtIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgLml0ZW0gaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=components/Hero.js */'
    }));
};