import { jsx as _jsx } from "react/jsx-runtime";
import { LongTextField } from "../";
import { render, screen, fireEvent } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<LongTextField> - renders a textarea", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
});
test("<LongTextField> - renders a textarea with correct disabled state", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x", disabled: true }), { x: { type: String } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea).toBeDisabled();
});
test("<LongTextField> - renders a textarea with correct id (inherited)", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("id")).toBeTruthy();
});
test("<LongTextField> - renders a textarea with correct id (specified)", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x", id: "y" }), { x: { type: String } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("id")).toBe("y");
});
test("<LongTextField> - renders a textarea with correct name", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("name")).toBe("x");
});
test("<LongTextField> - renders a textarea with correct placeholder", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x", placeholder: "y" }), { x: { type: String } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("placeholder")).toBe("y");
});
test("<LongTextField> - renders a textarea with correct value (default)", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    expect(textarea.getAttribute("value")).toBe(null);
});
test("<LongTextField> - renders a textarea with correct value (model)", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x" }), { x: { type: String } }, { model: { x: "y" } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    expect(screen.getByText("y")).toBeInTheDocument();
});
test("<LongTextField> - renders a textarea with correct value (specified)", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x", value: "y" }), { x: { type: String } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    expect(screen.getByText("y")).toBeInTheDocument();
});
test("<LongTextField> - renders a textarea which correctly reacts on change", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(LongTextField, { name: "x" }), { x: { type: String } }, { onChange }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    fireEvent.change(textarea, { target: { value: "y" } });
    expect(onChange).toHaveBeenLastCalledWith("x", "y");
});
test("<LongTextField> - renders a textarea which correctly reacts on change (empty)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(LongTextField, { name: "x" }), { x: { type: String } }, { onChange }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    fireEvent.change(textarea, { target: { value: "" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<LongTextField> - renders a textarea which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(LongTextField, { name: "x" }), { x: { type: String } }, { model: { x: "y" }, onChange }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    const textarea = screen.getByTestId("long-text-field").getElementsByTagName("textarea")[0];
    fireEvent.change(textarea, { target: { value: "y" } });
    expect(screen.getByText("y")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
});
test("<LongTextField> - renders a label", () => {
    render(usingUniformsContext(_jsx(LongTextField, { name: "x", label: "y" }), { x: { type: String } }));
    expect(screen.getByTestId("long-text-field")).toBeInTheDocument();
    expect(screen.getByText("y")).toBeInTheDocument();
});
//# sourceMappingURL=LongTextField.test.js.map