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
const uniforms_1 = require("uniforms");
const TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
const wrapField_1 = __importDefault(require("./wrapField"));
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
    const isInvalid = (0, react_1.useMemo)(() => {
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
    return (0, wrapField_1.default)(props, (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { id: props.id, "aria-label": "uniforms date field", "data-testid": "date-field", isDisabled: props.disabled, name: props.name, placeholder: props.placeholder, ref: props.inputRef, type: "datetime-local", onChange: (value) => {
                    props.disabled || dateParse(value, onChange);
                }, value: (_b = dateFormat(props.value, props.type)) !== null && _b !== void 0 ? _b : "" }), isInvalid && ((0, jsx_runtime_1.jsx)("div", Object.assign({ id: `${props.id}-invalid-date-time`, style: {
                    fontSize: "0.875rem",
                    color: "#c9190b",
                    marginTop: "0.25rem",
                } }, { children: isInvalid })))] }));
}
exports.default = (0, uniforms_1.connectField)(DateField);
//# sourceMappingURL=DateField.js.map