"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniforms_1 = require("uniforms");
const invariant_1 = __importDefault(require("invariant"));
const BoolField_1 = __importDefault(require("./BoolField"));
const DateField_1 = __importDefault(require("./DateField"));
const ListField_1 = __importDefault(require("./ListField"));
const NestField_1 = __importDefault(require("./NestField"));
const NumField_1 = __importDefault(require("./NumField"));
const RadioField_1 = __importDefault(require("./RadioField"));
const SelectField_1 = __importDefault(require("./SelectField"));
const TextField_1 = __importDefault(require("./TextField"));
const AutoField = (0, uniforms_1.createAutoField)((props) => {
    if (props.allowedValues) {
        return props.checkboxes && props.fieldType !== Array ? RadioField_1.default : SelectField_1.default;
    }
    switch (props.fieldType) {
        case Array:
            return ListField_1.default;
        case Boolean:
            return BoolField_1.default;
        case Date:
            return DateField_1.default;
        case Number:
            return NumField_1.default;
        case Object:
            return NestField_1.default;
        case String:
            return TextField_1.default;
    }
    return (0, invariant_1.default)(false, "Unsupported field type: %s", props.fieldType);
});
exports.default = AutoField;
//# sourceMappingURL=AutoField.js.map