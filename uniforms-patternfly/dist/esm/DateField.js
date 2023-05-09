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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { connectField } from "uniforms";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import wrapField from "./wrapField";
const DateConstructor = (typeof global === "object" ? global : window).Date;
const dateFormat = (value, type = "datetime-local") => {
    if (typeof value === "string") {
        return value === null || value === void 0 ? void 0 : value.slice(0, type === "datetime-local" ? -8 : -14);
    }
    return value === null || value === void 0 ? void 0 : value.toISOString().slice(0, type === "datetime-local" ? -8 : -14);
};
const dateParse = (value, onChange) => {
    const valueAsNumber = DateConstructor.parse(value);
    if (isNaN(valueAsNumber)) {
        const splitedValue = value.split("-");
        if (splitedValue.length > 1) {
            splitedValue[0] = parseInt(splitedValue[0]) > 9999 ? "9999" : splitedValue[0];
            onChange(new DateConstructor(`${splitedValue.join("-")}Z`));
            return;
        }
        onChange(undefined);
    }
    else {
        const date = new DateConstructor(`${value}Z`);
        if (date.getFullYear() < 10000) {
            onChange(date);
        }
        else {
            onChange(date);
        }
    }
};
function DateField(_a) {
    var _b;
    var { onChange } = _a, props = __rest(_a, ["onChange"]);
    const isInvalid = useMemo(() => {
        if (!props.value) {
            return false;
        }
        if (props.min) {
            const minDate = new Date(props.min);
            if (minDate.toString() === "Invalid Date") {
                return false;
            }
            else if (props.value < minDate) {
                return `Should be after ${minDate.toISOString()}`;
            }
        }
        if (props.max) {
            const maxDate = new Date(props.max);
            if (maxDate.toString() === "Invalid Date") {
                return false;
            }
            else if (props.value > maxDate) {
                return `Should be before ${maxDate.toISOString()}`;
            }
        }
        return false;
    }, [props.value, props.min, props.max]);
    return wrapField(props, _jsxs(_Fragment, { children: [_jsx(TextInput, { id: props.id, "aria-label": "uniforms date field", "data-testid": "date-field", isDisabled: props.disabled, name: props.name, placeholder: props.placeholder, ref: props.inputRef, type: "datetime-local", onChange: (value) => {
                    props.disabled || dateParse(value, onChange);
                }, value: (_b = dateFormat(props.value, props.type)) !== null && _b !== void 0 ? _b : "" }), isInvalid && (_jsx("div", Object.assign({ id: `${props.id}-invalid-date-time`, style: {
                    fontSize: "0.875rem",
                    color: "#c9190b",
                    marginTop: "0.25rem",
                } }, { children: isInvalid })))] }));
}
export default connectField(DateField);
//# sourceMappingURL=DateField.js.map