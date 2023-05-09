"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const uniforms_1 = require("uniforms");
const AutoField_1 = __importDefault(require("./AutoField"));
const ListDelField_1 = __importDefault(require("./ListDelField"));
function ListItemField({ children = (0, jsx_runtime_1.jsx)(AutoField_1.default, { label: null, name: "" }) }) {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ "data-testid": "list-item-field", style: {
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
        } }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { width: "100%", marginRight: "10px" } }, { children: children })), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ListDelField_1.default, { name: "" }) })] })));
}
exports.default = (0, uniforms_1.connectField)(ListItemField, {
    initialValue: false,
});
//# sourceMappingURL=ListItemField.js.map