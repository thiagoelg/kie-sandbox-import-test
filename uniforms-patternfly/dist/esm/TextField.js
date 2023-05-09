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
import { useCallback, useMemo } from "react";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import { connectField, filterDOMProps } from "uniforms";
import wrapField from "./wrapField";
const timeRgx = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?/;
function TextField(_a) {
    var _b;
    var { onChange } = _a, props = __rest(_a, ["onChange"]);
    const isDateInvalid = useMemo(() => {
        var _a;
        if (typeof props.value !== "string") {
            return false;
        }
        if (props.type !== "date" && ((_a = props.field) === null || _a === void 0 ? void 0 : _a.format) !== "date") {
            return false;
        }
        const date = new Date(props.value);
        if (typeof props.min === "string") {
            const minDate = new Date(props.min);
            if (minDate.toString() === "Invalid Date") {
                return false;
            }
            else if (date.toISOString() < minDate.toISOString()) {
                return props.errorMessage && props.errorMessage.trim().length > 0
                    ? props.errorMessage
                    : `Should be after ${props.min}`;
            }
        }
        if (typeof props.max === "string") {
            const maxDate = new Date(props.max);
            if (maxDate.toString() === "Invalid Date") {
                return false;
            }
            else if (date.toISOString() > maxDate.toISOString()) {
                return props.errorMessage && props.errorMessage.trim().length > 0
                    ? props.errorMessage
                    : `Should be before ${props.max}`;
            }
        }
        return false;
    }, [props.value, props.max, props.min, props.errorMessage, props.type, props.field]);
    const parseTime = useCallback((time) => {
        const parsedTime = timeRgx.exec(time);
        const date = new Date();
        if (!parsedTime) {
            return undefined;
        }
        date.setUTCHours(Number(parsedTime[1]), Number(parsedTime[2]));
        return date;
    }, []);
    const isTimeInvalid = useMemo(() => {
        var _a, _b;
        if (typeof props.value !== "string") {
            return false;
        }
        if (props.type !== "time" && ((_a = props.field) === null || _a === void 0 ? void 0 : _a.format) !== "time") {
            return false;
        }
        const parsedTime = parseTime((_b = props.value) !== null && _b !== void 0 ? _b : "");
        if (parsedTime && typeof props.min === "string" && timeRgx.exec(props.min)) {
            const parsedMin = parseTime(props.min);
            if (parsedTime < parsedMin) {
                if (parsedMin.getUTCMinutes() < 10) {
                    return `Should be after ${parsedMin.getUTCHours()}:0${parsedMin.getUTCMinutes()}`;
                }
                return `Should be after ${parsedMin.getUTCHours()}:${parsedMin.getUTCMinutes()}`;
            }
        }
        if (parsedTime && typeof props.max === "string" && timeRgx.exec(props.max)) {
            const parsedMax = parseTime(props.max);
            if (parsedTime > parsedMax) {
                if (parsedMax.getUTCMinutes() < 10) {
                    return `Should be before ${parsedMax.getUTCHours()}:0${parsedMax.getUTCMinutes()}`;
                }
                return `Should be before ${parsedMax.getUTCHours()}:${parsedMax.getUTCMinutes()}`;
            }
        }
    }, [props.type, props.field, props.value, props.max, props.min, parseTime]);
    const fieldType = useMemo(() => {
        var _a, _b;
        if (((_a = props.field) === null || _a === void 0 ? void 0 : _a.format) === "date" || props.type === "date") {
            return "date";
        }
        if (((_b = props.field) === null || _b === void 0 ? void 0 : _b.format) === "time" || props.type === "time") {
            return "time";
        }
        return "text";
    }, [(_b = props.field) === null || _b === void 0 ? void 0 : _b.format, props.type]);
    const onTextInputChange = useCallback((value, event) => {
        var _a;
        if (fieldType !== "time" || value === "") {
            onChange((_a = event.target) === null || _a === void 0 ? void 0 : _a.value);
            return;
        }
        onChange(`${value}:00`);
    }, [fieldType, onChange]);
    const value = useMemo(() => {
        var _a, _b, _c, _d;
        if (fieldType === "time" && props.value !== "") {
            const splitedTime = (_a = props.value) === null || _a === void 0 ? void 0 : _a.split(":");
            if (((_b = splitedTime === null || splitedTime === void 0 ? void 0 : splitedTime.length) !== null && _b !== void 0 ? _b : 0) > 2) {
                return (_c = splitedTime === null || splitedTime === void 0 ? void 0 : splitedTime.slice(0, 2)) === null || _c === void 0 ? void 0 : _c.join(":");
            }
        }
        return (_d = props.value) !== null && _d !== void 0 ? _d : "";
    }, [fieldType, props.value]);
    return wrapField(props, _jsxs(_Fragment, { children: [_jsx(TextInput, Object.assign({ "aria-label": "uniforms text field", "data-testid": "text-field", name: props.name, isDisabled: props.disabled, validated: props.error ? "error" : "default", onChange: onTextInputChange, placeholder: props.placeholder, ref: props.inputRef, type: fieldType, value: value }, filterDOMProps(props))), fieldType === "time" && isTimeInvalid && (_jsx("div", Object.assign({ style: {
                    fontSize: "0.875rem",
                    color: "#c9190b",
                    marginTop: "0.25rem",
                } }, { children: isTimeInvalid }))), fieldType === "date" && isDateInvalid && (_jsx("div", Object.assign({ style: {
                    fontSize: "0.875rem",
                    color: "#c9190b",
                    marginTop: "0.25rem",
                } }, { children: isDateInvalid })))] }));
}
export default connectField(TextField);
//# sourceMappingURL=TextField.js.map