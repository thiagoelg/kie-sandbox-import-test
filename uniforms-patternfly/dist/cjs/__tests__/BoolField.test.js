"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<BoolField> - renders an input", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
});
test("<BoolField> - renders a input with correct id (inherited)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("bool-field").getAttribute("id")).toEqual("uniforms-0000-0001");
});
test("<BoolField> - renders a input with correct id (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x", id: "y" }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("bool-field").getAttribute("id")).toBe("y");
});
test("<BoolField> - renders a input with correct name", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("bool-field").getAttribute("name")).toBe("x");
});
test("<BoolField> - renders an input with correct type", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("bool-field").getAttribute("type")).toBe("checkbox");
});
test("<BoolField> - renders an input with correct disabled state", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x", disabled: true }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("bool-field")).toBeDisabled();
});
test("<BoolField> - renders a input with correct label (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x", label: "BoolFieldLabel" }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByText("BoolFieldLabel")).toBeInTheDocument();
});
test("<BoolField> - renders a input with correct value (default)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("bool-field")).not.toHaveAttribute("checked");
});
test("<BoolField> - renders a input with correct value (model)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x" }), { x: { type: Boolean } }, { model: { x: true } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("bool-field")).toHaveAttribute("checked");
});
test("<BoolField> - renders a input with correct value (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x", value: true }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("bool-field")).toHaveAttribute("checked");
});
test("<BoolField> - renders a input which correctly reacts on change", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x" }), { x: { type: Boolean } }, { onChange }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    react_1.fireEvent.click(react_1.screen.getByTestId("bool-field"));
    expect(onChange).toHaveBeenLastCalledWith("x", true);
});
test("<BoolField> - renders a wrapper with unknown props", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.BoolField, { name: "x", "data-x": "x", "data-y": "y", "data-z": "z" }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getAttribute("data-x")).toBe("x");
    expect(react_1.screen.getByTestId("wrapper-field").getAttribute("data-y")).toBe("y");
    expect(react_1.screen.getByTestId("wrapper-field").getAttribute("data-z")).toBe("z");
});
//# sourceMappingURL=BoolField.test.js.map