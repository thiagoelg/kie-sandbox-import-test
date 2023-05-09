import { jsx as _jsx } from "react/jsx-runtime";
import { HiddenField } from "..";
import { render, screen, fireEvent } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<HiddenField> - renders an input", () => {
    render(usingUniformsContext(_jsx(HiddenField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("hidden-field")).toBeInTheDocument();
});
test("<HiddenField> - renders an input with correct id (inherited)", () => {
    render(usingUniformsContext(_jsx(HiddenField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(screen.getByTestId("hidden-field").getAttribute("id")).toBeTruthy();
});
test("<HiddenField> - renders an input with correct id (specified)", () => {
    render(usingUniformsContext(_jsx(HiddenField, { name: "x", id: "y" }), { x: { type: String } }));
    expect(screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(screen.getByTestId("hidden-field").getAttribute("id")).toBe("y");
});
test("<HiddenField> - renders an input with correct name", () => {
    render(usingUniformsContext(_jsx(HiddenField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(screen.getByTestId("hidden-field").getAttribute("name")).toBe("x");
});
test("<HiddenField> - renders an input with correct type", () => {
    render(usingUniformsContext(_jsx(HiddenField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(screen.getByTestId("hidden-field").getAttribute("type")).toBe("hidden");
});
test("<HiddenField> - renders an input with correct value (default)", () => {
    render(usingUniformsContext(_jsx(HiddenField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(screen.getByTestId("hidden-field").getAttribute("value")).toBe("");
});
test("<HiddenField> - renders an input with correct value (model)", () => {
    render(usingUniformsContext(_jsx(HiddenField, { name: "x" }), { x: { type: String } }, { model: { x: "y" } }));
    expect(screen.getByTestId("hidden-field")).toBeInTheDocument();
    expect(screen.getByTestId("hidden-field").getAttribute("value")).toBe("y");
});
test("<HiddenField> - renders an input which correctly reacts on model change", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(HiddenField, { name: "x" }), { x: { type: String } }, { onChange }));
    fireEvent.change(screen.getByTestId("hidden-field"), { target: { value: "y" } });
    expect(screen.getByTestId("hidden-field").getAttribute("value")).toBe("y");
});
test("<HiddenField> - renders an input which correctly reacts on model change (empty)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(HiddenField, { name: "x" }), { x: { type: String } }, { onChange }));
    fireEvent.change(screen.getByTestId("hidden-field"), { target: { value: undefined } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<HiddenField> - renders an input which correctly reacts on model change (same value)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(HiddenField, { name: "x" }), { x: { type: String } }, { model: { x: "y" }, onChange }));
    fireEvent.change(screen.getByTestId("hidden-field"), { target: { value: "y" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<HiddenField noDOM> - renders nothing", () => {
    render(usingUniformsContext(_jsx(HiddenField, { noDOM: true, name: "x" }), { x: { type: String } }));
    expect(screen.queryByTestId("hidden-field")).toBeNull();
});
test("<HiddenField noDOM> - renders nothing which correctly reacts on model change", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(HiddenField, { noDOM: true, name: "x" }), { x: { type: String } }, { onChange }));
    expect(screen.queryByTestId("hidden-field")).toBeNull();
    expect(onChange).not.toHaveBeenCalled();
});
test("<HiddenField noDOM> - renders nothing which correctly reacts on model change (empty)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(HiddenField, { noDOM: true, name: "x" }), { x: { type: String } }, { onChange }));
    expect(screen.queryByTestId("hidden-field")).toBeNull();
    expect(onChange).not.toHaveBeenCalled();
});
test("<HiddenField noDOM> - renders nothing which correctly reacts on model change (same value)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(HiddenField, { noDOM: true, name: "x" }), { x: { type: String } }, { model: { x: "y" }, onChange }));
    expect(screen.queryByTestId("hidden-field")).toBeNull();
    expect(onChange).not.toHaveBeenCalled();
});
//# sourceMappingURL=HiddenField.test.js.map