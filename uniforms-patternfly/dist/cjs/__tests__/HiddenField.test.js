"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<HiddenField> - renders an input", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("hidden-field")).toBeInTheDocument();
});
test("<HiddenField> - renders an input with correct id (inherited)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("hidden-field").getAttribute("id")).toBeTruthy();
});
test("<HiddenField> - renders an input with correct id (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x", id: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("hidden-field").getAttribute("id")).toBe("y");
});
test("<HiddenField> - renders an input with correct name", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("hidden-field").getAttribute("name")).toBe("x");
});
test("<HiddenField> - renders an input with correct type", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("hidden-field").getAttribute("type")).toBe("hidden");
});
test("<HiddenField> - renders an input with correct value (default)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("hidden-field").getAttribute("value")).toBe("");
});
test("<HiddenField> - renders an input with correct value (model)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x" }), { x: { type: String } }, { model: { x: "y" } }));
    expect(react_1.screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("hidden-field").getAttribute("value")).toBe("y");
});
test("<HiddenField> - renders an input which correctly reacts on model change", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x" }), { x: { type: String } }, { onChange }));
    react_1.fireEvent.change(react_1.screen.getByTestId("hidden-field"), { target: { value: "y" } });
    expect(react_1.screen.getByTestId("hidden-field").getAttribute("value")).toBe("y");
});
test("<HiddenField> - renders an input which correctly reacts on model change (empty)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x" }), { x: { type: String } }, { onChange }));
    react_1.fireEvent.change(react_1.screen.getByTestId("hidden-field"), { target: { value: undefined } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<HiddenField> - renders an input which correctly reacts on model change (same value)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { name: "x" }), { x: { type: String } }, { model: { x: "y" }, onChange }));
    react_1.fireEvent.change(react_1.screen.getByTestId("hidden-field"), { target: { value: "y" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<HiddenField noDOM> - renders nothing", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { noDOM: true, name: "x" }), { x: { type: String } }));
    expect(react_1.screen.queryByTestId("hidden-field")).toBeNull();
});
test("<HiddenField noDOM> - renders nothing which correctly reacts on model change", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { noDOM: true, name: "x" }), { x: { type: String } }, { onChange }));
    expect(react_1.screen.queryByTestId("hidden-field")).toBeNull();
    expect(onChange).not.toHaveBeenCalled();
});
test("<HiddenField noDOM> - renders nothing which correctly reacts on model change (empty)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { noDOM: true, name: "x" }), { x: { type: String } }, { onChange }));
    expect(react_1.screen.queryByTestId("hidden-field")).toBeNull();
    expect(onChange).not.toHaveBeenCalled();
});
test("<HiddenField noDOM> - renders nothing which correctly reacts on model change (same value)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.HiddenField, { noDOM: true, name: "x" }), { x: { type: String } }, { model: { x: "y" }, onChange }));
    expect(react_1.screen.queryByTestId("hidden-field")).toBeNull();
    expect(onChange).not.toHaveBeenCalled();
});
//# sourceMappingURL=HiddenField.test.js.map