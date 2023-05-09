import { jsx as _jsx } from "react/jsx-runtime";
import { DateField } from "../";
import { render, screen, fireEvent } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<DateField> - renders an input", () => {
    render(usingUniformsContext(_jsx(DateField, { name: "x" }), { x: { type: Date } }));
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
});
test("<DateField> - renders a input with correct id (inherited)", () => {
    render(usingUniformsContext(_jsx(DateField, { name: "x" }), { x: { type: Date } }));
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
});
test("<DateField> - renders a input with correct id (specified)", () => {
    render(usingUniformsContext(_jsx(DateField, { name: "x", id: "y" }), { x: { type: Date } }));
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
    expect(screen.getByTestId("date-field").getAttribute("id")).toBe("y");
});
test("<DateField> - renders a input with correct name", () => {
    render(usingUniformsContext(_jsx(DateField, { name: "x" }), { x: { type: Date } }));
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
    expect(screen.getByTestId("date-field").getAttribute("name")).toBe("x");
});
test("<DateField> - renders an input with correct disabled state", () => {
    render(usingUniformsContext(_jsx(DateField, { name: "x", disabled: true }), { x: { type: Date } }));
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
    expect(screen.getByTestId("date-field")).toBeDisabled();
});
test("<DateField> - renders a input with correct label (specified)", () => {
    render(usingUniformsContext(_jsx(DateField, { required: false, name: "x", label: "DateFieldLabel" }), { x: { type: Date } }));
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
    expect(screen.getByText("DateFieldLabel")).toBeInTheDocument();
});
test("<DateField> - renders a input with correct label (specified)", () => {
    render(usingUniformsContext(_jsx(DateField, { required: true, name: "x", label: "DateFieldLabel" }), { x: { type: Date } }));
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
    expect(screen.getByText("DateFieldLabel")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
});
test("<DateField> - renders a input with correct value (default)", () => {
    render(usingUniformsContext(_jsx(DateField, { name: "x" }), { x: { type: Date } }));
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
    expect(screen.getByTestId("date-field").value).toBe("");
});
test("<DateField> - renders a input with correct value (model)", () => {
    const now = new Date();
    render(usingUniformsContext(_jsx(DateField, { name: "x" }), { x: { type: Date } }, { model: { x: now } }));
    const stringfyDate = now.toISOString().split(":").slice(0, 2).join(":");
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
    expect(screen.getByTestId("date-field").value).toEqual(`${stringfyDate}`);
});
test("<DateField> - renders a input which correctly reacts on change", () => {
    const onChange = jest.fn();
    const now = "2000-04-04";
    render(usingUniformsContext(_jsx(DateField, { name: "x" }), { x: { type: Date } }, { onChange }));
    const input = screen.getByTestId("date-field");
    fireEvent.change(input, { target: { value: "2000-04-04T10:20" } });
    expect(onChange).toHaveBeenLastCalledWith("x", new Date("2000-04-04T10:20:00.000Z"));
});
test("<DateField> - renders a input which correctly reacts on change (empty value)", () => {
    const onChange = jest.fn();
    const dateValue = new Date("2000-04-04");
    render(usingUniformsContext(_jsx(DateField, { name: "x", value: dateValue }), { x: { type: Date } }, { onChange }));
    const input = screen.getByTestId("date-field");
    fireEvent.change(input, { target: { value: "" } });
    expect(onChange).toHaveBeenLastCalledWith("x", undefined);
});
test("<DateField> - renders a input which correctly reacts on change (empty)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(DateField, { name: "x", onChange: onChange }), { x: { type: Date } }));
    const input = screen.getByTestId("date-field");
    fireEvent.change(input, { target: { value: "" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<DateField> - renders a input which correctly reacts on change (invalid)", () => {
    const onChange = jest.fn();
    const now = "10:00";
    render(usingUniformsContext(_jsx(DateField, { name: "x" }), { x: { type: Date } }, { onChange }));
    const input = screen.getByTestId("date-field");
    fireEvent.change(input, { target: { value: now } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<DateField> - renders a input which correctly reacts on change (valid)", () => {
    const onChange = jest.fn();
    const date = "2000-04-04";
    const time = "10:30";
    const dateValue = new Date(`${date}T00:00:00Z`);
    render(usingUniformsContext(_jsx(DateField, { name: "x", value: dateValue }), { x: { type: Date } }, { onChange }));
    const input = screen.getByTestId("date-field");
    fireEvent.change(input, { target: { value: `${date}T${time}` } });
    expect(onChange).toHaveBeenLastCalledWith("x", new Date(`${date}T${time}:00.000Z`));
});
test("<DateField> - renders a input which correctly reacts on change (year bigger than 9999)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(DateField, { name: "x" }), { x: { type: Date } }, { onChange }));
    const input = screen.getByTestId("date-field");
    fireEvent.change(input, { target: { value: "121212-12-12T12:12" } });
    expect(onChange).toHaveBeenLastCalledWith("x", new Date("9999-12-12T12:12:00.000Z"));
});
test("<DateField> - test max property - valid", () => {
    const dateValue = new Date("1998-12-31");
    const maxValue = new Date("1999-01-01T00:00:00Z");
    render(usingUniformsContext(_jsx(DateField, { name: "x", max: maxValue, value: dateValue }), { x: { type: Date } }));
    expect(screen.queryByTestId("Should be before")).toBeNull();
});
test("<DateField> - test max property - invalid", () => {
    const date = "1999-01-02";
    const max = "1999-01-01T00:00:00.000Z";
    const dateValue = new Date(date);
    const maxValue = new Date(max);
    render(usingUniformsContext(_jsx(DateField, { name: "x", max: maxValue, value: dateValue }), { x: { type: Date } }));
    expect(screen.getByText(`Should be before ${max}`)).toBeInTheDocument();
});
test("<DateField> - test min property - valid", () => {
    const dateValue = new Date("1999-01-02");
    const minValue = new Date("1999-01-01T00:00:00Z");
    render(usingUniformsContext(_jsx(DateField, { name: "x", min: dateValue, value: minValue }), { x: { type: Date } }));
    expect(screen.queryByTestId("Should be after")).toBeNull();
});
test("<DateField> - test min property - invalid", () => {
    const date = "1998-12-31";
    const min = "1999-01-01T00:00:00.000Z";
    const dateValue = new Date(date);
    const minValue = new Date(min);
    render(usingUniformsContext(_jsx(DateField, { name: "x", min: minValue, value: dateValue }), { x: { type: Date } }));
    expect(screen.getByText(`Should be after ${min}`)).toBeInTheDocument();
});
//# sourceMappingURL=DateField.test.js.map