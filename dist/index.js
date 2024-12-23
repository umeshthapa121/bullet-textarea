"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BulletTextarea = _ref => {
  let {
    defaultValue = '',
    onChange
  } = _ref;
  const [value, setValue] = (0, _react.useState)(defaultValue || '❖ ');
  const handleInputChange = event => {
    setValue(event.target.value);
    onChange && onChange(event.target.value);
  };
  const handleKeyPress = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      setValue(prevValue => prevValue + '\n❖ ');
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("textarea", {
    value: value,
    onChange: handleInputChange,
    onKeyDown: handleKeyPress,
    style: {
      width: '400px',
      height: '200px'
    }
  }));
};
var _default = exports.default = BulletTextarea;