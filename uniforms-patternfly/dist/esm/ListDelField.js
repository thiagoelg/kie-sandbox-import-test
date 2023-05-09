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
import { MinusCircleIcon } from "@patternfly/react-icons/dist/js/icons/minus-circle-icon";
import { connectField, filterDOMProps, joinName, useField } from "uniforms";
function ListDelField(_a) {
    var { name, disabled } = _a, props = __rest(_a, ["name", "disabled"]);
    const nameParts = joinName(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
    return (_jsx(Button, Object.assign({ "data-testid": "list-del-field", disabled: !limitNotReached || disabled, variant: "plain", style: { paddingLeft: "0", paddingRight: "0" }, onClick: () => {
            const value = parent.value.slice();
            value.splice(nameIndex, 1);
            !disabled && limitNotReached && parent.onChange(value);
        } }, filterDOMProps(props), { children: _jsx(MinusCircleIcon, { color: "#cc0000" }) })));
}
export default connectField(ListDelField, {
    initialValue: false,
    kind: "leaf",
});
//# sourceMappingURL=ListDelField.js.map