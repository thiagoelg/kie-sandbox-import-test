"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
const onChange = jest.fn();
const context = { onChange, model: { x: ["x", "y", "z"] } };
const schema = { x: { type: Array, maxCount: 3 }, "x.$": String };
beforeEach(() => {
    onChange.mockClear();
});
test("<ListDelField> - works", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListDelField, { name: "x.1" }), schema, context));
    expect(react_1.screen.getByTestId("list-del-field")).toBeInTheDocument();
});
test("<ListDelField> - prevents onClick when disabled", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListDelField, { name: "x.1", disabled: true }), schema, context));
    react_1.fireEvent.click(react_1.screen.getByTestId("list-del-field"));
    expect(onChange).not.toHaveBeenCalled();
});
test("<ListDelField> - prevents onClick when limit reached", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListDelField, { name: "x.1" }), Object.assign(Object.assign({}, schema), { x: Object.assign(Object.assign({}, schema.x), { minCount: 3 }) }), context));
    react_1.fireEvent.click(react_1.screen.getByTestId("list-del-field"));
    expect(onChange).not.toHaveBeenCalled();
});
test("<ListDelField> - correctly reacts on click", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListDelField, { name: "x.1" }), schema, context));
    react_1.fireEvent.click(react_1.screen.getByTestId("list-del-field"));
    expect(onChange).toHaveBeenLastCalledWith("x", ["x", "z"]);
});
//# sourceMappingURL=ListDelField.test.js.map