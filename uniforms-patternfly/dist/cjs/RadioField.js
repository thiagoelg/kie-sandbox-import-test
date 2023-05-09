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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const Radio_1 = require("@patternfly/react-core/dist/js/components/Radio");
const uniforms_1 = require("uniforms");
const wrapField_1 = __importDefault(require("./wrapField"));
function RadioField(props) {
    var _a;
    uniforms_1.filterDOMProps.register("checkboxes", "decimal");
    return (0, wrapField_1.default)(props, (0, jsx_runtime_1.jsx)("div", Object.assign({ "data-testid": "radio-field" }, (0, uniforms_1.filterDOMProps)(props), { children: (_a = props.allowedValues) === null || _a === void 0 ? void 0 : _a.map((item) => ((0, jsx_runtime_1.jsx)(React.Fragment, { children: (0, jsx_runtime_1.jsx)(Radio_1.Radio, { isChecked: item === props.value, isDisabled: props.disabled, id: `${props.id}`, name: props.name, label: props.transform ? props.transform(item) : item, "aria-label": props.name, onChange: () => props.onChange(item) }) }, item))) })));
}
exports.default = (0, uniforms_1.connectField)(RadioField);
//# sourceMappingURL=RadioField.js.map