"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<ListItemField> - works", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListItemField, { name: "x.1" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(react_1.screen.getByTestId("list-item-field")).toBeInTheDocument();
});
test("<ListItemField> - renders AutoField", () => {
    const element = (0, jsx_runtime_1.jsx)(__1.ListItemField, { name: "x.1" });
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)(element, { x: { type: Array }, "x.$": { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<ListItemField> - renders children if specified", () => {
    const Child = jest.fn(() => null);
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListItemField, Object.assign({ name: "x.1" }, { children: (0, jsx_runtime_1.jsx)(Child, {}) })), { x: { type: Array }, "x.$": { type: String } }));
    expect(Child).toHaveBeenCalledTimes(1);
});
test("<ListItemField> - renders ListDelField", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListItemField, { name: "x.1" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(react_1.screen.getByTestId("list-del-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("name")).toBe("x.1");
});
//# sourceMappingURL=ListItemField.test.js.map