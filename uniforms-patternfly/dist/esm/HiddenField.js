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
import { useEffect } from "react";
import { useField, filterDOMProps } from "uniforms";
export default function HiddenField(_a) {
    var _b;
    var { value } = _a, rawProps = __rest(_a, ["value"]);
    const props = useField(rawProps.name, rawProps, { initialValue: false })[0];
    useEffect(() => {
        if (value !== undefined && value !== props.value)
            props.onChange(value);
    });
    return props.noDOM ? null : (_jsx("input", Object.assign({ "data-testid": "hidden-field", disabled: props.disabled, name: props.name, ref: props.inputRef, type: "hidden", value: (_b = value !== null && value !== void 0 ? value : props.value) !== null && _b !== void 0 ? _b : "" }, filterDOMProps(props))));
}
//# sourceMappingURL=HiddenField.js.map