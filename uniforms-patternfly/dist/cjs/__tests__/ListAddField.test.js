"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
const onChange = jest.fn();
const context = { onChange, model: { x: [] } };
const schema = { x: { type: Array, maxCount: 3 }, "x.$": String };
beforeEach(() => {
    onChange.mockClear();
});
test("<ListAddField> - works", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListAddField, { name: "x.$" }), schema, context));
    expect(react_1.screen.getByTestId("list-add-field")).toBeInTheDocument();
});
test("<ListAddField> - prevents onClick when disabled", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListAddField, { name: "x.1", disabled: true }), schema, context));
    react_1.fireEvent.click(react_1.screen.getByTestId("list-add-field"));
    expect(onChange).not.toHaveBeenCalled();
});
test("<ListAddField> - prevents onClick when limit reached", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListAddField, { name: "x.1" }), Object.assign(Object.assign({}, schema), { x: Object.assign(Object.assign({}, schema.x), { maxCount: 0 }) }), context));
    react_1.fireEvent.click(react_1.screen.getByTestId("list-add-field"));
    expect(onChange).not.toHaveBeenCalled();
});
test("<ListAddField> - correctly reacts on click", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListAddField, { name: "x.1", value: "y" }), schema, context));
    react_1.fireEvent.click(react_1.screen.getByTestId("list-add-field"));
    expect(onChange).toHaveBeenLastCalledWith("x", ["y"]);
});
//# sourceMappingURL=ListAddField.test.js.map