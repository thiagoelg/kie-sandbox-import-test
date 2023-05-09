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
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import { useForm } from "uniforms";
function SubmitField(_a) {
    var { disabled, inputRef, value } = _a, props = __rest(_a, ["disabled", "inputRef", "value"]);
    const { error, state } = useForm();
    return (_jsx(Button, Object.assign({ "data-testid": "submit-field", isDisabled: disabled === undefined ? !!(error || state.disabled) : disabled, type: "submit", ref: inputRef, variant: "primary" }, { children: value })));
}
SubmitField.defaultProps = { value: "Submit" };
export default SubmitField;
//# sourceMappingURL=SubmitField.js.map