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
const react_1 = require("react");
const Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
const Split_1 = require("@patternfly/react-core/dist/js/layouts/Split");
const outlined_question_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/outlined-question-circle-icon");
const uniforms_1 = require("uniforms");
const ListItemField_1 = __importDefault(require("./ListItemField"));
const ListAddField_1 = __importDefault(require("./ListAddField"));
uniforms_1.filterDOMProps.register("minCount", "wrapperCol", "labelCol");
function ListField(_a) {
    var { children = (0, jsx_runtime_1.jsx)(ListItemField_1.default, { name: "$" }), error, errorMessage, info, initialCount, itemProps, label, name, value, showInlineError } = _a, props = __rest(_a, ["children", "error", "errorMessage", "info", "initialCount", "itemProps", "label", "name", "value", "showInlineError"]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ "data-testid": "list-field" }, (0, uniforms_1.filterDOMProps)(props), { children: [(0, jsx_runtime_1.jsxs)(Split_1.Split, Object.assign({ hasGutter: true }, { children: [(0, jsx_runtime_1.jsx)(Split_1.SplitItem, { children: label && ((0, jsx_runtime_1.jsxs)("label", { children: [label, !!info && ((0, jsx_runtime_1.jsxs)("span", { children: ["\u00A0", (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ content: info }, { children: (0, jsx_runtime_1.jsx)(outlined_question_circle_icon_1.OutlinedQuestionCircleIcon, {}) }))] }))] })) }), (0, jsx_runtime_1.jsx)(Split_1.SplitItem, { isFilled: true }), (0, jsx_runtime_1.jsx)(Split_1.SplitItem, { children: (0, jsx_runtime_1.jsx)(ListAddField_1.default, { name: "$", initialCount: initialCount }) })] })), (0, jsx_runtime_1.jsx)("div", { children: value === null || value === void 0 ? void 0 : value.map((item, itemIndex) => react_1.Children.map(children, (child, childIndex) => {
                    var _a;
                    return (0, react_1.isValidElement)(child)
                        ? (0, react_1.cloneElement)(child, Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.split(/\$(.*)/s).slice(0, -1).join(`${itemIndex}`) }, itemProps))
                        : child;
                })) })] })));
}
exports.default = (0, uniforms_1.connectField)(ListField);
//# sourceMappingURL=ListField.js.map