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
import { useForm, filterDOMProps } from "uniforms";
function ErrorsField(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { error, schema } = useForm();
    return !error && !children ? null : (_jsxs("div", Object.assign({ "data-testid": "errors-field" }, filterDOMProps(props), { children: [children, _jsx("ul", { children: schema.getErrorMessages(error).map((message, index) => (_jsx("li", Object.assign({ style: { margin: "3px" } }, { children: message }), index))) })] })));
}
ErrorsField.defaultProps = {
    style: {
        backgroundColor: "rgba(255, 85, 0, 0.2)",
        border: "1px solid rgb(255, 85, 0)",
        borderRadius: "7px",
        margin: "20px 0px",
        padding: "10px",
    },
};
export default ErrorsField;
//# sourceMappingURL=ErrorsField.js.map