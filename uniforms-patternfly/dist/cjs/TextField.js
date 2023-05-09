"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
const uniforms_1 = require("uniforms");
const wrapField_1 = __importDefault(require("./wrapField"));
const timeRgx = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?/;
function TextField(_a) {
    var _b;
    var { onChange } = _a, props = __rest(_a, ["onChange"]);
    const isDateInvalid = (0, react_1.useMemo)(() => {
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
    const parseTime = (0, react_1.useCallback)((time) => {
        const parsedTime = timeRgx.exec(time);
        const date = new Date();
        if (!parsedTime) {
            return undefined;
        }
        date.setUTCHours(Number(parsedTime[1]), Number(parsedTime[2]));
        return date;
    }, []);
    const isTimeInvalid = (0, react_1.useMemo)(() => {
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
    const fieldType = (0, react_1.useMemo)(() => {
        var _a, _b;
        if (((_a = props.field) === null || _a === void 0 ? void 0 : _a.format) === "date" || props.type === "date") {
            return "date";
        }
        if (((_b = props.field) === null || _b === void 0 ? void 0 : _b.format) === "time" || props.type === "time") {
            return "time";
        }
        return "text";
    }, [(_b = props.field) === null || _b === void 0 ? void 0 : _b.format, props.type]);
    const onTextInputChange = (0, react_1.useCallback)((value, event) => {
        var _a;
        if (fieldType !== "time" || value === "") {
            onChange((_a = event.target) === null || _a === void 0 ? void 0 : _a.value);
            return;
        }
        onChange(`${value}:00`);
    }, [fieldType, onChange]);
    const value = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d;
        if (fieldType === "time" && props.value !== "") {
            const splitedTime = (_a = props.value) === null || _a === void 0 ? void 0 : _a.split(":");
            if (((_b = splitedTime === null || splitedTime === void 0 ? void 0 : splitedTime.length) !== null && _b !== void 0 ? _b : 0) > 2) {
                return (_c = splitedTime === null || splitedTime === void 0 ? void 0 : splitedTime.slice(0, 2)) === null || _c === void 0 ? void 0 : _c.join(":");
            }
        }
        return (_d = props.value) !== null && _d !== void 0 ? _d : "";
    }, [fieldType, props.value]);
    return (0, wrapField_1.default)(props, (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TextInput_1.TextInput, Object.assign({ "aria-label": "uniforms text field", "data-testid": "text-field", name: props.name, isDisabled: props.disabled, validated: props.error ? "error" : "default", onChange: onTextInputChange, placeholder: props.placeholder, ref: props.inputRef, type: fieldType, value: value }, (0, uniforms_1.filterDOMProps)(props))), fieldType === "time" && isTimeInvalid && ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    fontSize: "0.875rem",
                    color: "#c9190b",
                    marginTop: "0.25rem",
                } }, { children: isTimeInvalid }))), fieldType === "date" && isDateInvalid && ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    fontSize: "0.875rem",
                    color: "#c9190b",
                    marginTop: "0.25rem",
                } }, { children: isDateInvalid })))] }));
}
exports.default = (0, uniforms_1.connectField)(TextField);
//# sourceMappingURL=TextField.js.map