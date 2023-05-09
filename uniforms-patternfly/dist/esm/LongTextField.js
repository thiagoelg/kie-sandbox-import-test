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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea";
import { connectField, filterDOMProps } from "uniforms";
function LongTextField(_a) {
    var { disabled, id, inputRef, label, name, onChange, placeholder, value } = _a, props = __rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "value"]);
    return (_jsxs("div", Object.assign({ "data-testid": "long-text-field" }, filterDOMProps(props), { children: [label && _jsx("label", Object.assign({ htmlFor: id }, { children: label })), _jsx(TextArea, { id: id, disabled: disabled, name: name, "aria-label": name, onChange: (value, event) => onChange(event.target.value), placeholder: placeholder, ref: inputRef, value: value !== null && value !== void 0 ? value : "" })] })));
}
export default connectField(LongTextField);
//# sourceMappingURL=LongTextField.js.map