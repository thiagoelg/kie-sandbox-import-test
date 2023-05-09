import { jsx as _jsx } from "react/jsx-runtime";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import { connectField } from "uniforms";
import wrapField from "./wrapField";
function NumField(props) {
    var _a, _b;
    const onChange = (value, event) => {
        var _a, _b;
        const parse = props.decimal ? parseFloat : parseInt;
        const v = parse((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "");
        props.onChange(isNaN(v) ? undefined : v);
    };
    return wrapField(props, _jsx(TextInput, { "aria-label": "uniforms num field", "data-testid": "num-field", name: props.name, isDisabled: props.disabled, id: props.id, max: props.max, min: props.min, onChange: onChange, placeholder: props.placeholder, ref: props.inputRef, step: (_a = props.step) !== null && _a !== void 0 ? _a : (props.decimal ? 0.01 : 1), type: "number", value: `${(_b = props.value) !== null && _b !== void 0 ? _b : ""}`, validated: props.error ? "error" : "default" }));
}
export default connectField(NumField);
//# sourceMappingURL=NumField.js.map