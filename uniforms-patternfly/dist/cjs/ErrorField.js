"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const uniforms_1 = require("uniforms");
function ErrorField(_a) {
    var { children, error, errorMessage } = _a, props = __rest(_a, ["children", "error", "errorMessage"]);
    return !error ? null : ((0, jsx_runtime_1.jsx)("div", Object.assign({ "data-testid": "error-field" }, (0, uniforms_1.filterDOMProps)(props), { children: children ? children : (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { margin: "3px" } }, { children: errorMessage })) })));
}
ErrorField.defaultProps = {
    style: {
        backgroundColor: "rgba(255, 85, 0, 0.2)",
        border: "1px solid rgb(255, 85, 0)",
        borderRadius: "7px",
        margin: "20px 0px",
        padding: "10px",
    },
};
exports.default = (0, uniforms_1.connectField)(ErrorField, { initialValue: false });
//# sourceMappingURL=ErrorField.js.map