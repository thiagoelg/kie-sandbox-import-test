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
import { jsx as _jsx } from "react/jsx-runtime";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { filterDOMProps } from "uniforms";
filterDOMProps.register("decimal", "minCount", "autoValue", "isDisabled", "exclusiveMaximum", "exclusiveMinimum", "menuAppendTo");
export default function wrapField(_a, children) {
    var { id, label, type, disabled, error, errorMessage, showInlineError, help, required } = _a, props = __rest(_a, ["id", "label", "type", "disabled", "error", "errorMessage", "showInlineError", "help", "required"]);
    return (_jsx(FormGroup, Object.assign({ "data-testid": "wrapper-field", fieldId: id, label: label, isRequired: required, validated: error ? "error" : "default", type: type, helperText: help, helperTextInvalid: errorMessage }, filterDOMProps(props), { children: children })));
}
//# sourceMappingURL=wrapField.js.map