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
import { connectField, filterDOMProps } from "uniforms";
import { Card, CardBody } from "@patternfly/react-core/dist/js/components/Card";
import AutoField from "./AutoField";
function NestField(_a) {
    var { children, error, errorMessage, fields, itemProps, label, name, showInlineError, disabled } = _a, props = __rest(_a, ["children", "error", "errorMessage", "fields", "itemProps", "label", "name", "showInlineError", "disabled"]);
    return (_jsx(Card, Object.assign({ "data-testid": "nest-field" }, filterDOMProps(props), { children: _jsxs(CardBody, Object.assign({ className: "pf-c-form" }, { children: [label && (_jsx("label", { children: _jsx("b", { children: label }) })), children || (fields === null || fields === void 0 ? void 0 : fields.map((field) => _jsx(AutoField, Object.assign({ disabled: disabled, name: field }, itemProps), field)))] })) })));
}
export default connectField(NestField);
//# sourceMappingURL=NestField.js.map