import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useMemo } from "react";
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox";
import { Radio } from "@patternfly/react-core/dist/js/components/Radio";
import { filterDOMProps } from "uniforms";
function xor(item, array) {
    const index = array.indexOf(item);
    if (index === -1) {
        return array.concat([item]);
    }
    return array.slice(0, index).concat(array.slice(index + 1));
}
filterDOMProps.register("autoValue");
function SelectCheckboxField(props) {
    const Group = useMemo(() => (props.fieldType === Array ? Checkbox : Radio), [props]);
    return (_jsxs("div", Object.assign({ "data-testid": "select-checkbox-field" }, filterDOMProps(props), { children: [props.label && _jsx("label", { children: props.label }), props.allowedValues.map((item, index) => {
                return (_jsxs(React.Fragment, { children: [_jsx("label", Object.assign({ htmlFor: props.id }, { children: props.transform ? props.transform(item) : item })), _jsx(Group, { id: `${props.id}-${item}`, isDisabled: props.disabled, name: props.name, "aria-label": props.name, value: props.value, isChecked: props.fieldType === Array && Array.isArray(props.value)
                                ? props.value.includes(item)
                                : props.value === item, onChange: () => {
                                props.onChange(props.fieldType === Array && Array.isArray(props.value) ? xor(item, props.value) : item);
                            } })] }, index));
            })] })));
}
export default SelectCheckboxField;
//# sourceMappingURL=SelectCheckboxField.js.map