"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Form_1 = require("@patternfly/react-core/dist/js/components/Form");
const uniforms_1 = require("uniforms");
function Patternfly(parent) {
    class _ extends parent {
        render() {
            return ((0, jsx_runtime_1.jsx)(uniforms_1.context.Provider, Object.assign({ value: this.getContext() }, { children: (0, jsx_runtime_1.jsx)(Form_1.Form, Object.assign({ "data-testid": "base-form" }, this.getNativeFormProps())) })));
        }
    }
    _.Patternfly = Patternfly;
    _.displayName = `Patternfly${parent.displayName}`;
    return _;
}
exports.default = Patternfly(uniforms_1.BaseForm);
//# sourceMappingURL=BaseForm.js.map