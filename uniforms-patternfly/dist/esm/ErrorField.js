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
import { jsx as _jsx } from "react/jsx-runtime";
import { connectField, filterDOMProps } from "uniforms";
function ErrorField(_a) {
    var { children, error, errorMessage } = _a, props = __rest(_a, ["children", "error", "errorMessage"]);
    return !error ? null : (_jsx("div", Object.assign({ "data-testid": "error-field" }, filterDOMProps(props), { children: children ? children : _jsx("div", Object.assign({ style: { margin: "3px" } }, { children: errorMessage })) })));
}
ErrorField.defaultProps = {
    style: {
        backgroundColor: "rgba(255, 85, 0, 0.2)",
        border: "1px solid rgb(255, 85, 0)",
        borderRadius: "7px",
        margin: "20px 0px",
        padding: "10px",
    },
};
export default connectField(ErrorField, { initialValue: false });
//# sourceMappingURL=ErrorField.js.map