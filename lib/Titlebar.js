'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable class-methods-use-this */

var KEY_ALT = 18;

var Titlebar = function (_React$Component) {
  _inherits(Titlebar, _React$Component);

  function Titlebar(props, defaultProps) {
    _classCallCheck(this, Titlebar);

    var _this = _possibleConstructorReturn(this, (Titlebar.__proto__ || Object.getPrototypeOf(Titlebar)).call(this, props, defaultProps));

    _this.state = {
      keyAltDown: false
    };

    _this.handleMaximize = _this.handleMaximize.bind(_this);
    return _this;
  }

  _createClass(Titlebar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setStyleHeader();

      document.body.addEventListener('keydown', this.handleKeyDown.bind(this)); // eslint-disable-line no-undef
      document.body.addEventListener('keyup', this.handleKeyUp.bind(this)); // eslint-disable-line no-undef
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      document.body.removeEventListener('keydown', this.handleKeyDown); // eslint-disable-line no-undef
      document.body.removeEventListener('keyup', this.handleKeyUp); // eslint-disable-line no-undef
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode === KEY_ALT) {
        this.setState({
          keyAltDown: true
        });
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.keyCode === KEY_ALT) {
        this.setState({
          keyAltDown: false
        });
      }
    }
  }, {
    key: 'handleMaximize',
    value: function handleMaximize() {
      var _props = this.props,
          onMaximize = _props.onMaximize,
          onFullscreen = _props.onFullscreen;
      var keyAltDown = this.state.keyAltDown;


      if (keyAltDown) {
        onMaximize();
      } else {
        onFullscreen();
      }
    }

    /**
     * Set style tag in header
     * in this way we can insert default css
     */

  }, {
    key: 'setStyleHeader',
    value: function setStyleHeader() {
      if (!document.getElementsByTagName('head')[0].querySelector('style[id="react-titlebar-osx"]')) {
        // eslint-disable-line no-undef
        var tag = document.createElement('style'); // eslint-disable-line no-undef
        tag.id = 'react-titlebar-osx';
        tag.innerHTML = this.styles();
        document.getElementsByTagName('head')[0].appendChild(tag); // eslint-disable-line no-undef
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          draggable = _props2.draggable,
          title = _props2.title,
          transparent = _props2.transparent,
          padding = _props2.padding,
          onClose = _props2.onClose,
          onMinimize = _props2.onMinimize;
      var keyAltDown = this.state.keyAltDown;


      var clazz = (0, _classnames2.default)({
        titlebar: true,
        'webkit-draggable': draggable,
        transparent: transparent,
        alt: keyAltDown
      });

      var ztyle = {
        paddingTop: padding,
        paddingBottom: padding
      };

      return _react2.default.createElement(
        'div',
        { className: clazz, style: ztyle },
        _react2.default.createElement(
          'div',
          { className: 'titlebar-stoplight' },
          _react2.default.createElement(
            'div',
            { className: 'titlebar-close', onClick: onClose },
            _react2.default.createElement(
              'svg',
              { x: '0px', y: '0px', viewBox: '0 0 6.4 6.4' },
              _react2.default.createElement('polygon', { fill: '#4d0000', points: '6.4,0.8 5.6,0 3.2,2.4 0.8,0 0,0.8 2.4,3.2 0,5.6 0.8,6.4 3.2,4 5.6,6.4 6.4,5.6 4,3.2' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'titlebar-minimize', onClick: onMinimize },
            _react2.default.createElement(
              'svg',
              { x: '0px', y: '0px', viewBox: '0 0 8 1.1' },
              _react2.default.createElement('rect', { fill: '#995700', width: '8', height: '1.1' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'titlebar-fullscreen', onClick: this.handleMaximize },
            _react2.default.createElement(
              'svg',
              { className: 'fullscreen-svg', x: '0px', y: '0px', viewBox: '0 0 6 5.9' },
              _react2.default.createElement('path', { fill: '#006400', d: 'M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z' }),
              _react2.default.createElement('path', { fill: '#006400', d: 'M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z' })
            ),
            _react2.default.createElement(
              'svg',
              { className: 'maximize-svg', x: '0px', y: '0px', viewBox: '0 0 7.9 7.9' },
              _react2.default.createElement('polygon', { fill: '#006400', points: '7.9,4.5 7.9,3.4 4.5,3.4 4.5,0 3.4,0 3.4,3.4 0,3.4 0,4.5 3.4,4.5 3.4,7.9 4.5,7.9 4.5,4.5' })
            )
          )
        ),
        title && _react2.default.createElement(
          'div',
          { className: 'titlebar-text' },
          title
        )
      );
    }

    // TODO ugly way to fix the styles

  }, {
    key: 'styles',
    value: function styles() {
      return '.titlebar {\n      padding: 0 3px;\n      display: flex;\n      background-color: #f6f6f6; }\n      .titlebar.transparent {\n        background-color: transparent; }\n      .titlebar.webkit-draggable {\n        -webkit-app-region: drag; }\n      .titlebar.alt svg.fullscreen-svg {\n        display: none; }\n      .titlebar.alt svg.maximize-svg {\n        display: block !important; }\n      .titlebar.webkit-draggable .titlebar-close, .titlebar.webkit-draggable .titlebar-minimize, .titlebar.webkit-draggable .titlebar-fullscreen {\n        -webkit-app-region: no-drag; }\n\n    .titlebar-text {\n      flex-grow: 1;\n      text-align: center;\n      font-family: \'Helvetica Neue\', Helvetica;\n      font-size: 14px;\n      line-height: 24px;\n      -webkit-touch-callout: none;\n      -webkit-user-select: none;\n      user-select: none;\n      cursor: default; }\n\n    .titlebar-stoplight {\n      flex-grow: 0;\n      display: flex; }\n      .titlebar-stoplight .titlebar-close,\n      .titlebar-stoplight .titlebar-minimize,\n      .titlebar-stoplight .titlebar-fullscreen {\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        margin: 6px 4px;\n        line-height: 0; }\n      .titlebar-stoplight .titlebar-close {\n        border: 1px solid #e2463f;\n        background-color: #ff5f57;\n        margin-left: 6px; }\n        .titlebar-stoplight .titlebar-close:active {\n          border-color: #ad3934;\n          background-color: #bf4943; }\n        .titlebar-stoplight .titlebar-close svg {\n          width: 6px;\n          height: 6px;\n          margin-top: 2px;\n          margin-left: 2px;\n          opacity: 0; }\n      .titlebar-stoplight .titlebar-minimize {\n        border: 1px solid #e1a116;\n        background-color: #ffbd2e; }\n        .titlebar-stoplight .titlebar-minimize:active {\n          border-color: #ad7d15;\n          background-color: #bf9123; }\n        .titlebar-stoplight .titlebar-minimize svg {\n          width: 8px;\n          height: 8px;\n          margin-top: 1px;\n          margin-left: 1px;\n          opacity: 0; }\n      .titlebar-stoplight .titlebar-fullscreen,\n      .titlebar-stoplight .titlebar-maximize {\n        border: 1px solid #12ac28;\n        background-color: #28c940; }\n      .titlebar-stoplight .titlebar-fullscreen:active {\n        border-color: #128622;\n        background-color: #1f9a31; }\n      .titlebar-stoplight .titlebar-fullscreen svg.fullscreen-svg {\n        width: 6px;\n        height: 6px;\n        margin-top: 2px;\n        margin-left: 2px;\n        opacity: 0; }\n      .titlebar-stoplight .titlebar-fullscreen svg.maximize-svg {\n        width: 8px;\n        height: 8px;\n        margin-top: 1px;\n        margin-left: 1px;\n        opacity: 0;\n        display: none; }\n      .titlebar-stoplight:hover svg, .titlebar-stoplight:hover svg.fullscreen-svg, .titlebar-stoplight:hover svg.maximize-svg {\n        opacity: 1; }\n\n    .titlebar:after,\n    .titlebar-stoplight:after {\n      content: \' \';\n      display: table;\n      clear: both; }\n';
    }
  }]);

  return Titlebar;
}(_react2.default.Component);

Titlebar.defaultProps = {
  draggable: false,
  title: null,
  transparent: false,
  padding: 3
};


Titlebar.propTypes = {
  padding: _react.PropTypes.number,
  title: _react.PropTypes.string,
  transparent: _react.PropTypes.bool,
  draggable: _react.PropTypes.bool,
  onClose: _react.PropTypes.func.isRequired,
  onMinimize: _react.PropTypes.func.isRequired,
  onMaximize: _react.PropTypes.func.isRequired,
  onFullscreen: _react.PropTypes.func.isRequired
};

exports.default = Titlebar;