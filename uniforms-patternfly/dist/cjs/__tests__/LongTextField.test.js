"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<LongTextField> - renders a textarea", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
});
test("<LongTextField> - renders a textarea with correct disabled state", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x", disabled: true }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = react_1.screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea).toBeDisabled();
});
test("<LongTextField> - renders a textarea with correct id (inherited)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = react_1.screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("id")).toBeTruthy();
});
test("<LongTextField> - renders a textarea with correct id (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x", id: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = react_1.screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("id")).toBe("y");
});
test("<LongTextField> - renders a textarea with correct name", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = react_1.screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("name")).toBe("x");
});
test("<LongTextField> - renders a textarea with correct placeholder", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x", placeholder: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = react_1.screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("placeholder")).toBe("y");
});
test("<LongTextField> - renders a textarea with correct value (default)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = react_1.screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("value")).toBe(null);
});
test("<LongTextField> - renders a textarea with correct value (model)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x" }), { x: { type: String } }, { model: { x: "y" } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    expect(react_1.screen.getByText("y")).toBeInTheDocument();
});
test("<LongTextField> - renders a textarea with correct value (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x", value: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    expect(react_1.screen.getByText("y")).toBeInTheDocument();
});
test("<LongTextField> - renders a textarea which correctly reacts on change", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x" }), { x: { type: String } }, { onChange }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = react_1.screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    react_1.fireEvent.change(textarea, { target: { value: "y" } });
    expect(onChange).toHaveBeenLastCalledWith("x", "y");
});
test("<LongTextField> - renders a textarea which correctly reacts on change (empty)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x" }), { x: { type: String } }, { onChange }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = react_1.screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    react_1.fireEvent.change(textarea, { target: { value: "" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<LongTextField> - renders a textarea which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x" }), { x: { type: String } }, { model: { x: "y" }, onChange }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = react_1.screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    react_1.fireEvent.change(textarea, { target: { value: "y" } });
    expect(react_1.screen.getByText("y")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
});
test("<LongTextField> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.LongTextField, { name: "x", label: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("long-text-field")).toBeInTheDocument();
    expect(react_1.screen.getByText("y")).toBeInTheDocument();
});
//# sourceMappingURL=LongTextField.test.js.map