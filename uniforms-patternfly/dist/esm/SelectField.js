import { jsx as _jsx } from "react/jsx-runtime";
import { connectField } from "uniforms";
import SelectCheckboxField from "./SelectCheckboxField";
import SelectInputsField from "./SelectInputsField";
function isSelectCheckboxProps(toBeDetermined) {
    return toBeDetermined.checkboxes === true;
}
function SelectField(props) {
    if (isSelectCheckboxProps(props)) {
        return _jsx(SelectCheckboxField, Object.assign({}, props));
    }
    return _jsx(SelectInputsField, Object.assign({}, props));
}
export default connectField(SelectField);
//# sourceMappingURL=SelectField.js.map