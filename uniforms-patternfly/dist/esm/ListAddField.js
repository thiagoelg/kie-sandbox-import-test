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
import cloneDeep from "lodash/cloneDeep";
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { connectField, filterDOMProps, joinName, useField } from "uniforms";
function ListAddField(_a) {
    var { disabled = false, name, value } = _a, props = __rest(_a, ["disabled", "name", "value"]);
    const nameParts = joinName(null, name);
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    return (_jsx(Button, Object.assign({ "data-testid": "list-add-field", variant: "plain", style: { paddingLeft: "0", paddingRight: "0" }, disabled: !limitNotReached, onClick: () => {
            !disabled && limitNotReached && parent.onChange(parent.value.concat([cloneDeep(value)]));
        } }, filterDOMProps(props), { children: _jsx(PlusCircleIcon, { color: "#0088ce" }) })));
}
export default connectField(ListAddField, {
    initialValue: false,
    kind: "leaf",
});
//# sourceMappingURL=ListAddField.js.map