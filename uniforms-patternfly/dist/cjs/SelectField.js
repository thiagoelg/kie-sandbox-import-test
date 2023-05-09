"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const uniforms_1 = require("uniforms");
const SelectCheckboxField_1 = __importDefault(require("./SelectCheckboxField"));
const SelectInputsField_1 = __importDefault(require("./SelectInputsField"));
function isSelectCheckboxProps(toBeDetermined) {
    return toBeDetermined.checkboxes === true;
}
function SelectField(props) {
    if (isSelectCheckboxProps(props)) {
        return (0, jsx_runtime_1.jsx)(SelectCheckboxField_1.default, Object.assign({}, props));
    }
    return (0, jsx_runtime_1.jsx)(SelectInputsField_1.default, Object.assign({}, props));
}
exports.default = (0, uniforms_1.connectField)(SelectField);
//# sourceMappingURL=SelectField.js.map