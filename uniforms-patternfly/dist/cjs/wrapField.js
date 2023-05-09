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
const Form_1 = require("@patternfly/react-core/dist/js/components/Form");
const uniforms_1 = require("uniforms");
uniforms_1.filterDOMProps.register("decimal", "minCount", "autoValue", "isDisabled", "exclusiveMaximum", "exclusiveMinimum", "menuAppendTo");
function wrapField(_a, children) {
    var { id, label, type, disabled, error, errorMessage, showInlineError, help, required } = _a, props = __rest(_a, ["id", "label", "type", "disabled", "error", "errorMessage", "showInlineError", "help", "required"]);
    return ((0, jsx_runtime_1.jsx)(Form_1.FormGroup, Object.assign({ "data-testid": "wrapper-field", fieldId: id, label: label, isRequired: required, validated: error ? "error" : "default", type: type, helperText: help, helperTextInvalid: errorMessage }, (0, uniforms_1.filterDOMProps)(props), { children: children })));
}
exports.default = wrapField;
//# sourceMappingURL=wrapField.js.map