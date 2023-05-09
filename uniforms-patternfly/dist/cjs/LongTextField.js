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
const TextArea_1 = require("@patternfly/react-core/dist/js/components/TextArea");
const uniforms_1 = require("uniforms");
function LongTextField(_a) {
    var { disabled, id, inputRef, label, name, onChange, placeholder, value } = _a, props = __rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "value"]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ "data-testid": "long-text-field" }, (0, uniforms_1.filterDOMProps)(props), { children: [label && (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: id }, { children: label })), (0, jsx_runtime_1.jsx)(TextArea_1.TextArea, { id: id, disabled: disabled, name: name, "aria-label": name, onChange: (value, event) => onChange(event.target.value), placeholder: placeholder, ref: inputRef, value: value !== null && value !== void 0 ? value : "" })] })));
}
exports.default = (0, uniforms_1.connectField)(LongTextField);
//# sourceMappingURL=LongTextField.js.map