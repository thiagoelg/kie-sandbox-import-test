"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const Checkbox_1 = require("@patternfly/react-core/dist/js/components/Checkbox");
const Radio_1 = require("@patternfly/react-core/dist/js/components/Radio");
const uniforms_1 = require("uniforms");
function xor(item, array) {
    const index = array.indexOf(item);
    if (index === -1) {
        return array.concat([item]);
    }
    return array.slice(0, index).concat(array.slice(index + 1));
}
uniforms_1.filterDOMProps.register("autoValue");
function SelectCheckboxField(props) {
    const Group = (0, react_1.useMemo)(() => (props.fieldType === Array ? Checkbox_1.Checkbox : Radio_1.Radio), [props]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ "data-testid": "select-checkbox-field" }, (0, uniforms_1.filterDOMProps)(props), { children: [props.label && (0, jsx_runtime_1.jsx)("label", { children: props.label }), props.allowedValues.map((item, index) => {
                return ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: props.id }, { children: props.transform ? props.transform(item) : item })), (0, jsx_runtime_1.jsx)(Group, { id: `${props.id}-${item}`, isDisabled: props.disabled, name: props.name, "aria-label": props.name, value: props.value, isChecked: props.fieldType === Array && Array.isArray(props.value)
                                ? props.value.includes(item)
                                : props.value === item, onChange: () => {
                                props.onChange(props.fieldType === Array && Array.isArray(props.value) ? xor(item, props.value) : item);
                            } })] }, index));
            })] })));
}
exports.default = SelectCheckboxField;
//# sourceMappingURL=SelectCheckboxField.js.map