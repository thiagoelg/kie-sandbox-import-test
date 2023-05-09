"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
const uniforms_1 = require("uniforms");
const wrapField_1 = __importDefault(require("./wrapField"));
function NumField(props) {
    var _a, _b;
    const onChange = (value, event) => {
        var _a, _b;
        const parse = props.decimal ? parseFloat : parseInt;
        const v = parse((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "");
        props.onChange(isNaN(v) ? undefined : v);
    };
    return (0, wrapField_1.default)(props, (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { "aria-label": "uniforms num field", "data-testid": "num-field", name: props.name, isDisabled: props.disabled, id: props.id, max: props.max, min: props.min, onChange: onChange, placeholder: props.placeholder, ref: props.inputRef, step: (_a = props.step) !== null && _a !== void 0 ? _a : (props.decimal ? 0.01 : 1), type: "number", value: `${(_b = props.value) !== null && _b !== void 0 ? _b : ""}`, validated: props.error ? "error" : "default" }));
}
exports.default = (0, uniforms_1.connectField)(NumField);
//# sourceMappingURL=NumField.js.map