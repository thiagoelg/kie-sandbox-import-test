import { jsx as _jsx } from "react/jsx-runtime";
import { BoolField } from "..";
import { render, screen, fireEvent } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<BoolField> - renders an input", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
});
test("<BoolField> - renders a input with correct id (inherited)", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByTestId("bool-field").getAttribute("id")).toEqual("uniforms-0000-0001");
});
test("<BoolField> - renders a input with correct id (specified)", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x", id: "y" }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByTestId("bool-field").getAttribute("id")).toBe("y");
});
test("<BoolField> - renders a input with correct name", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByTestId("bool-field").getAttribute("name")).toBe("x");
});
test("<BoolField> - renders an input with correct type", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByTestId("bool-field").getAttribute("type")).toBe("checkbox");
});
test("<BoolField> - renders an input with correct disabled state", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x", disabled: true }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByTestId("bool-field")).toBeDisabled();
});
test("<BoolField> - renders a input with correct label (specified)", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x", label: "BoolFieldLabel" }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByText("BoolFieldLabel")).toBeInTheDocument();
});
test("<BoolField> - renders a input with correct value (default)", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x" }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByTestId("bool-field")).not.toHaveAttribute("checked");
});
test("<BoolField> - renders a input with correct value (model)", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x" }), { x: { type: Boolean } }, { model: { x: true } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByTestId("bool-field")).toHaveAttribute("checked");
});
test("<BoolField> - renders a input with correct value (specified)", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x", value: true }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByTestId("bool-field")).toHaveAttribute("checked");
});
test("<BoolField> - renders a input which correctly reacts on change", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(BoolField, { name: "x" }), { x: { type: Boolean } }, { onChange }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("bool-field"));
    expect(onChange).toHaveBeenLastCalledWith("x", true);
});
test("<BoolField> - renders a wrapper with unknown props", () => {
    render(usingUniformsContext(_jsx(BoolField, { name: "x", "data-x": "x", "data-y": "y", "data-z": "z" }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getAttribute("data-x")).toBe("x");
    expect(screen.getByTestId("wrapper-field").getAttribute("data-y")).toBe("y");
    expect(screen.getByTestId("wrapper-field").getAttribute("data-z")).toBe("z");
});
//# sourceMappingURL=BoolField.test.js.map