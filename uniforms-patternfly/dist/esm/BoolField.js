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
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox";
import { Switch } from "@patternfly/react-core/dist/js/components/Switch";
import { connectField } from "uniforms";
import wrapField from "./wrapField";
var ComponentType;
(function (ComponentType) {
    ComponentType["checkbox"] = "checkbox";
    ComponentType["switch"] = "switch";
})(ComponentType || (ComponentType = {}));
function BoolField(_a) {
    var { appearance, disabled, id, inputRef, label, name, onChange, value } = _a, props = __rest(_a, ["appearance", "disabled", "id", "inputRef", "label", "name", "onChange", "value"]);
    const Component = appearance === ComponentType.switch ? Switch : Checkbox;
    return wrapField(Object.assign({ id }, props), _jsx(Component, { "data-testid": "bool-field", isChecked: value !== null && value !== void 0 ? value : false, isDisabled: disabled, id: id, name: name, onChange: () => disabled || onChange(!value), ref: inputRef, label: label }));
}
BoolField.defaultProps = { appearance: ComponentType.checkbox };
export default connectField(BoolField);
//# sourceMappingURL=BoolField.js.map