import { jsx as _jsx } from "react/jsx-runtime";
import { NumField } from "..";
import { render, screen, fireEvent } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<NumField> - renders an input", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x" }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
});
test("<NumField> - renders an input with correct disabled state", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x", disabled: true }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field")).toBeDisabled();
});
test("<NumField> - renders an input with correct id (inherited)", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x" }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("id")).toBeTruthy();
});
test("<NumField> - renders an input with correct id (specified)", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x", id: "y" }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("id")).toBe("y");
});
test("<NumField> - renders an input with correct max", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x", max: 10 }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("max")).toBe("10");
});
test("<NumField> - renders an input with correct min", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x", min: 10 }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("min")).toBe("10");
});
test("<NumField> - renders an input with correct name", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x" }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("name")).toBe("x");
});
test("<NumField> - renders an input with correct placeholder", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x", placeholder: "y" }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("placeholder")).toBe("y");
});
test("<NumField> - renders an input with correct step (decimal)", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x", decimal: true }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("step")).toBe("0.01");
});
test("<NumField> - renders an input with correct step (integer)", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x", decimal: false }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("step")).toBe("1");
});
test("<NumField> - renders an input with correct step (set)", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x", step: 3 }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("step")).toBe("3");
});
test("<NumField> - renders an input with correct type", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x" }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("type")).toBe("number");
});
test("<NumField> - renders an input with correct value (default)", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x" }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("value")).toBe("");
});
test("<NumField> - renders an input with correct value (decimal)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(NumField, { name: "x", decimal: true }), { x: { type: Number } }, { onChange }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    const spy = jest.spyOn(global.console, "error").mockImplementation(() => { });
    [
        { value: "0.1", expected: 0.1 },
        { value: "2", expected: 2 },
        { value: "-1", expected: -1 },
    ].forEach(({ value, expected }) => {
        fireEvent.change(screen.getByTestId("num-field"), { target: { value } });
        expect(onChange).toHaveBeenLastCalledWith("x", expected);
    });
    spy.mockRestore();
});
test("<NumField> - renders an input with correct value (not decimal)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(NumField, { name: "x", decimal: false }), { x: { type: Number } }, { onChange }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    const spy = jest.spyOn(global.console, "error").mockImplementation(() => { });
    [
        { value: "0.1", expected: 0 },
        { value: "2", expected: 2 },
        { value: "-1", expected: -1 },
    ].forEach(({ value, expected }) => {
        fireEvent.change(screen.getByTestId("num-field"), { target: { value } });
        expect(onChange).toHaveBeenLastCalledWith("x", expected);
    });
    spy.mockRestore();
});
test("<NumField> - renders an input with correct value (specified)", () => {
    render(usingUniformsContext(_jsx(NumField, { name: "x", value: 2 }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    expect(screen.getByTestId("num-field").getAttribute("value")).toBe("2");
});
test("<NumField> - renders an input which correctly reacts on change", () => {
    const onChange = jest.fn();
    const value = "1";
    render(usingUniformsContext(_jsx(NumField, { name: "x" }), { x: { type: Number } }, { onChange }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).toHaveBeenLastCalledWith("x", 1);
});
test("<NumField> - renders an input which correctly reacts on change (decimal on decimal)", () => {
    const onChange = jest.fn();
    const value = "2.5";
    render(usingUniformsContext(_jsx(NumField, { name: "x", decimal: true }), { x: { type: Number } }, { onChange }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).toHaveBeenLastCalledWith("x", 2.5);
});
test("<NumField> - renders an input which correctly reacts on change (decimal on integer)", () => {
    const onChange = jest.fn();
    const value = "2.5";
    render(usingUniformsContext(_jsx(NumField, { name: "x", decimal: false }), { x: { type: Number } }, { onChange }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).toHaveBeenLastCalledWith("x", 2);
});
test("<NumField> - renders an input which correctly reacts on change (empty)", () => {
    const onChange = jest.fn();
    const value = "";
    render(usingUniformsContext(_jsx(NumField, { name: "x" }), { x: { type: Number } }, { onChange }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<NumField> - renders an input which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    const value = "1";
    render(usingUniformsContext(_jsx(NumField, { name: "x" }), { x: { type: Number } }, { model: { x: 1 }, onChange }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<NumField> - renders an input which correctly reacts on change (zero)", () => {
    const onChange = jest.fn();
    const value = "0";
    render(usingUniformsContext(_jsx(NumField, { name: "x" }), { x: { type: Number } }, { onChange }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("num-field"), { target: { value } });
    expect(onChange).toHaveBeenLastCalledWith("x", 0);
});
test("<NumField> - renders a label", () => {
    render(usingUniformsContext(_jsx(NumField, { required: false, name: "x", label: "y" }), { x: { type: Number } }));
    expect(screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y");
    const id = screen.getByTestId("num-field").getAttribute("id");
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].getAttribute("for")).toBe(id);
});
test("<NumField> - renders a label", () => {
    render(usingUniformsContext(_jsx(NumField, { required: true, name: "x", label: "y" }), { x: { type: Number } }));
    expect(screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    const id = screen.getByTestId("num-field").getAttribute("id");
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].getAttribute("for")).toBe(id);
});
//# sourceMappingURL=NumField.test.js.map