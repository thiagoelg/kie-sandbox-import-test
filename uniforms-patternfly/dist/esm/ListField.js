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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, cloneElement, isValidElement } from "react";
import { Tooltip } from "@patternfly/react-core/dist/js/components/Tooltip";
import { Split, SplitItem } from "@patternfly/react-core/dist/js/layouts/Split";
import { OutlinedQuestionCircleIcon } from "@patternfly/react-icons/dist/js/icons/outlined-question-circle-icon";
import { connectField, filterDOMProps } from "uniforms";
import ListItemField from "./ListItemField";
import ListAddField from "./ListAddField";
filterDOMProps.register("minCount", "wrapperCol", "labelCol");
function ListField(_a) {
    var { children = _jsx(ListItemField, { name: "$" }), error, errorMessage, info, initialCount, itemProps, label, name, value, showInlineError } = _a, props = __rest(_a, ["children", "error", "errorMessage", "info", "initialCount", "itemProps", "label", "name", "value", "showInlineError"]);
    return (_jsxs("div", Object.assign({ "data-testid": "list-field" }, filterDOMProps(props), { children: [_jsxs(Split, Object.assign({ hasGutter: true }, { children: [_jsx(SplitItem, { children: label && (_jsxs("label", { children: [label, !!info && (_jsxs("span", { children: ["\u00A0", _jsx(Tooltip, Object.assign({ content: info }, { children: _jsx(OutlinedQuestionCircleIcon, {}) }))] }))] })) }), _jsx(SplitItem, { isFilled: true }), _jsx(SplitItem, { children: _jsx(ListAddField, { name: "$", initialCount: initialCount }) })] })), _jsx("div", { children: value === null || value === void 0 ? void 0 : value.map((item, itemIndex) => Children.map(children, (child, childIndex) => {
                    var _a;
                    return isValidElement(child)
                        ? cloneElement(child, Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.split(/\$(.*)/s).slice(0, -1).join(`${itemIndex}`) }, itemProps))
                        : child;
                })) })] })));
}
export default connectField(ListField);
//# sourceMappingURL=ListField.js.map