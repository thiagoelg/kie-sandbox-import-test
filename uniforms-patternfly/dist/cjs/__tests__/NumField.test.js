"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<NumField> - renders an input", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
});
test("<NumField> - renders an input with correct disabled state", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", disabled: true }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field")).toBeDisabled();
});
test("<NumField> - renders an input with correct id (inherited)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("id")).toBeTruthy();
});
test("<NumField> - renders an input with correct id (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", id: "y" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("id")).toBe("y");
});
test("<NumField> - renders an input with correct max", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", max: 10 }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("max")).toBe("10");
});
test("<NumField> - renders an input with correct min", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", min: 10 }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("min")).toBe("10");
});
test("<NumField> - renders an input with correct name", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("name")).toBe("x");
});
test("<NumField> - renders an input with correct placeholder", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", placeholder: "y" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("placeholder")).toBe("y");
});
test("<NumField> - renders an input with correct step (decimal)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", decimal: true }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("step")).toBe("0.01");
});
test("<NumField> - renders an input with correct step (integer)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", decimal: false }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("step")).toBe("1");
});
test("<NumField> - renders an input with correct step (set)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", step: 3 }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("step")).toBe("3");
});
test("<NumField> - renders an input with correct type", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("type")).toBe("number");
});
test("<NumField> - renders an input with correct value (default)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("value")).toBe("");
});
test("<NumField> - renders an input with correct value (decimal)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", decimal: true }), { x: { type: Number } }, { onChange }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    const spy = jest.spyOn(global.console, "error").mockImplementation(() => { });
    [
        { value: "0.1", expected: 0.1 },
        { value: "2", expected: 2 },
        { value: "-1", expected: -1 },
    ].forEach(({ value, expected }) => {
        react_1.fireEvent.change(react_1.screen.getByTestId("num-field"), { target: { value } });
        expect(onChange).toHaveBeenLastCalledWith("x", expected);
    });
    spy.mockRestore();
});
test("<NumField> - renders an input with correct value (not decimal)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", decimal: false }), { x: { type: Number } }, { onChange }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    const spy = jest.spyOn(global.console, "error").mockImplementation(() => { });
    [
        { value: "0.1", expected: 0 },
        { value: "2", expected: 2 },
        { value: "-1", expected: -1 },
    ].forEach(({ value, expected }) => {
        react_1.fireEvent.change(react_1.screen.getByTestId("num-field"), { target: { value } });
        expect(onChange).toHaveBeenLastCalledWith("x", expected);
    });
    spy.mockRestore();
});
test("<NumField> - renders an input with correct value (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", value: 2 }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("num-field").getAttribute("value")).toBe("2");
});
test("<NumField> - renders an input which correctly reacts on change", () => {
    const onChange = jest.fn();
    const value = "1";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x" }), { x: { type: Number } }, { onChange }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    react_1.fireEvent.change(react_1.screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).toHaveBeenLastCalledWith("x", 1);
});
test("<NumField> - renders an input which correctly reacts on change (decimal on decimal)", () => {
    const onChange = jest.fn();
    const value = "2.5";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", decimal: true }), { x: { type: Number } }, { onChange }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    react_1.fireEvent.change(react_1.screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).toHaveBeenLastCalledWith("x", 2.5);
});
test("<NumField> - renders an input which correctly reacts on change (decimal on integer)", () => {
    const onChange = jest.fn();
    const value = "2.5";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x", decimal: false }), { x: { type: Number } }, { onChange }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    react_1.fireEvent.change(react_1.screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).toHaveBeenLastCalledWith("x", 2);
});
test("<NumField> - renders an input which correctly reacts on change (empty)", () => {
    const onChange = jest.fn();
    const value = "";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x" }), { x: { type: Number } }, { onChange }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    react_1.fireEvent.change(react_1.screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<NumField> - renders an input which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    const value = "1";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x" }), { x: { type: Number } }, { model: { x: 1 }, onChange }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    react_1.fireEvent.change(react_1.screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<NumField> - renders an input which correctly reacts on change (zero)", () => {
    const onChange = jest.fn();
    const value = "0";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { name: "x" }), { x: { type: Number } }, { onChange }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
    react_1.fireEvent.change(react_1.screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).toHaveBeenLastCalledWith("x", 0);
});
test("<NumField> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { required: false, name: "x", label: "y" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y");
    const id = react_1.screen.getByTestId("num-field").getAttribute("id");
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].getAttribute("for")).toBe(id);
});
test("<NumField> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NumField, { required: true, name: "x", label: "y" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    const id = react_1.screen.getByTestId("num-field").getAttribute("id");
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].getAttribute("for")).toBe(id);
});
//# sourceMappingURL=NumField.test.js.map