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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Checkbox_1 = require("@patternfly/react-core/dist/js/components/Checkbox");
const Switch_1 = require("@patternfly/react-core/dist/js/components/Switch");
const uniforms_1 = require("uniforms");
const wrapField_1 = __importDefault(require("./wrapField"));
var ComponentType;
(function (ComponentType) {
    ComponentType["checkbox"] = "checkbox";
    ComponentType["switch"] = "switch";
})(ComponentType || (ComponentType = {}));
function BoolField(_a) {
    var { appearance, disabled, id, inputRef, label, name, onChange, value } = _a, props = __rest(_a, ["appearance", "disabled", "id", "inputRef", "label", "name", "onChange", "value"]);
    const Component = appearance === ComponentType.switch ? Switch_1.Switch : Checkbox_1.Checkbox;
    return (0, wrapField_1.default)(Object.assign({ id }, props), (0, jsx_runtime_1.jsx)(Component, { "data-testid": "bool-field", isChecked: value !== null && value !== void 0 ? value : false, isDisabled: disabled, id: id, name: name, onChange: () => disabled || onChange(!value), ref: inputRef, label: label }));
}
BoolField.defaultProps = { appearance: ComponentType.checkbox };
exports.default = (0, uniforms_1.connectField)(BoolField);
//# sourceMappingURL=BoolField.js.map