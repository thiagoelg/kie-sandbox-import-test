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
const Button_1 = require("@patternfly/react-core/dist/js/components/Button");
const minus_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/minus-circle-icon");
const uniforms_1 = require("uniforms");
function ListDelField(_a) {
    var { name, disabled } = _a, props = __rest(_a, ["name", "disabled"]);
    const nameParts = (0, uniforms_1.joinName)(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = (0, uniforms_1.joinName)(nameParts.slice(0, -1));
    const parent = (0, uniforms_1.useField)(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ "data-testid": "list-del-field", disabled: !limitNotReached || disabled, variant: "plain", style: { paddingLeft: "0", paddingRight: "0" }, onClick: () => {
            const value = parent.value.slice();
            value.splice(nameIndex, 1);
            !disabled && limitNotReached && parent.onChange(value);
        } }, (0, uniforms_1.filterDOMProps)(props), { children: (0, jsx_runtime_1.jsx)(minus_circle_icon_1.MinusCircleIcon, { color: "#cc0000" }) })));
}
exports.default = (0, uniforms_1.connectField)(ListDelField, {
    initialValue: false,
    kind: "leaf",
});
//# sourceMappingURL=ListDelField.js.map