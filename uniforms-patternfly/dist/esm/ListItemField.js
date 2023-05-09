import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { connectField } from "uniforms";
import AutoField from "./AutoField";
import ListDelField from "./ListDelField";
function ListItemField({ children = _jsx(AutoField, { label: null, name: "" }) }) {
    return (_jsxs("div", Object.assign({ "data-testid": "list-item-field", style: {
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
        } }, { children: [_jsx("div", Object.assign({ style: { width: "100%", marginRight: "10px" } }, { children: children })), _jsx("div", { children: _jsx(ListDelField, { name: "" }) })] })));
}
export default connectField(ListItemField, {
    initialValue: false,
});
//# sourceMappingURL=ListItemField.js.map