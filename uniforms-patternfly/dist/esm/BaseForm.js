import { jsx as _jsx } from "react/jsx-runtime";
import { Form } from "@patternfly/react-core/dist/js/components/Form";
import { BaseForm, context } from "uniforms";
function Patternfly(parent) {
    class _ extends parent {
        render() {
            return (_jsx(context.Provider, Object.assign({ value: this.getContext() }, { children: _jsx(Form, Object.assign({ "data-testid": "base-form" }, this.getNativeFormProps())) })));
        }
    }
    _.Patternfly = Patternfly;
    _.displayName = `Patternfly${parent.displayName}`;
    return _;
}
export default Patternfly(BaseForm);
//# sourceMappingURL=BaseForm.js.map