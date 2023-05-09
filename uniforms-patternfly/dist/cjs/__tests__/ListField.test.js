"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<ListField> - works", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListField, { name: "x" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(react_1.screen.getByTestId("list-field")).toBeInTheDocument();
});
test("<ListField> - renders ListAddField", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListField, { name: "x", label: "ListFieldLabel" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(react_1.screen.getByTestId("list-add-field")).toBeInTheDocument();
    expect(react_1.screen.getByText("ListFieldLabel")).toBeInTheDocument();
});
test("<ListField> - renders correct label (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListField, { name: "x", label: "ListFieldLabel" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(react_1.screen.getByText("ListFieldLabel")).toBeInTheDocument();
});
test("<ListField> - renders correct numer of items with initialCount (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListField, { name: "x", initialCount: 3 }), { x: { type: Array }, "x.$": { type: String } }));
    expect(react_1.screen.getAllByTestId("text-field")).toHaveLength(3);
});
test("<ListField> - renders children (specified)", () => {
    const Child = jest.fn(() => null);
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListField, Object.assign({ name: "x", initialCount: 2 }, { children: (0, jsx_runtime_1.jsx)(Child, {}) })), { x: { type: Array }, "x.$": { type: String } }));
    expect(Child).toHaveBeenCalledTimes(2);
});
test("<ListField> - renders children with correct name (children)", () => {
    const Child = jest.fn((props) => (0, jsx_runtime_1.jsx)("div", Object.assign({}, props, { "data-testid": "child-div" })));
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListField, Object.assign({ name: "x", initialCount: 2 }, { children: (0, jsx_runtime_1.jsx)(Child, { name: "$" }) })), { x: { type: Array }, "x.$": { type: String } }));
    const childDivs = react_1.screen.getAllByTestId("child-div");
    expect(childDivs[0].getAttribute("name")).toBe("0");
    expect(childDivs[1].getAttribute("name")).toBe("1");
});
test("<ListField> - renders children with correct name (value)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ListField, { name: "x", initialCount: 2 }), { x: { type: Array }, "x.$": { type: String } }));
    const textFields = react_1.screen.getAllByTestId("text-field");
    expect(textFields[0].getAttribute("name")).toBe("x.0");
    expect(textFields[1].getAttribute("name")).toBe("x.1");
});
//# sourceMappingURL=ListField.test.js.map