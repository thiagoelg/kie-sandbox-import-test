import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Radio } from "@patternfly/react-core/dist/js/components/Radio";
import { connectField, filterDOMProps } from "uniforms";
import wrapField from "./wrapField";
function RadioField(props) {
    var _a;
    filterDOMProps.register("checkboxes", "decimal");
    return wrapField(props, _jsx("div", Object.assign({ "data-testid": "radio-field" }, filterDOMProps(props), { children: (_a = props.allowedValues) === null || _a === void 0 ? void 0 : _a.map((item) => (_jsx(React.Fragment, { children: _jsx(Radio, { isChecked: item === props.value, isDisabled: props.disabled, id: `${props.id}`, name: props.name, label: props.transform ? props.transform(item) : item, "aria-label": props.name, onChange: () => props.onChange(item) }) }, item))) })));
}
export default connectField(RadioField);
//# sourceMappingURL=RadioField.js.map