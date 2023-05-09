"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const uniforms_1 = require("uniforms");
const Card_1 = require("@patternfly/react-core/dist/js/components/Card");
const AutoField_1 = __importDefault(require("./AutoField"));
function NestField(_a) {
    var { children, error, errorMessage, fields, itemProps, label, name, showInlineError, disabled } = _a, props = __rest(_a, ["children", "error", "errorMessage", "fields", "itemProps", "label", "name", "showInlineError", "disabled"]);
    return ((0, jsx_runtime_1.jsx)(Card_1.Card, Object.assign({ "data-testid": "nest-field" }, (0, uniforms_1.filterDOMProps)(props), { children: (0, jsx_runtime_1.jsxs)(Card_1.CardBody, Object.assign({ className: "pf-c-form" }, { children: [label && ((0, jsx_runtime_1.jsx)("label", { children: (0, jsx_runtime_1.jsx)("b", { children: label }) })), children || (fields === null || fields === void 0 ? void 0 : fields.map((field) => (0, jsx_runtime_1.jsx)(AutoField_1.default, Object.assign({ disabled: disabled, name: field }, itemProps), field)))] })) })));
}
exports.default = (0, uniforms_1.connectField)(NestField);
//# sourceMappingURL=NestField.js.map