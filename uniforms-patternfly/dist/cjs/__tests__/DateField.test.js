"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<DateField> - renders an input", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x" }), { x: { type: Date } }));
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
});
test("<DateField> - renders a input with correct id (inherited)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x" }), { x: { type: Date } }));
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
});
test("<DateField> - renders a input with correct id (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x", id: "y" }), { x: { type: Date } }));
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("date-field").getAttribute("id")).toBe("y");
});
test("<DateField> - renders a input with correct name", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x" }), { x: { type: Date } }));
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("date-field").getAttribute("name")).toBe("x");
});
test("<DateField> - renders an input with correct disabled state", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x", disabled: true }), { x: { type: Date } }));
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("date-field")).toBeDisabled();
});
test("<DateField> - renders a input with correct label (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { required: false, name: "x", label: "DateFieldLabel" }), { x: { type: Date } }));
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
    expect(react_1.screen.getByText("DateFieldLabel")).toBeInTheDocument();
});
test("<DateField> - renders a input with correct label (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { required: true, name: "x", label: "DateFieldLabel" }), { x: { type: Date } }));
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
    expect(react_1.screen.getByText("DateFieldLabel")).toBeInTheDocument();
    expect(react_1.screen.getByText("*")).toBeInTheDocument();
});
test("<DateField> - renders a input with correct value (default)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x" }), { x: { type: Date } }));
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("date-field").value).toBe("");
});
test("<DateField> - renders a input with correct value (model)", () => {
    const now = new Date();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x" }), { x: { type: Date } }, { model: { x: now } }));
    const stringfyDate = now.toISOString().split(":").slice(0, 2).join(":");
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("date-field").value).toEqual(`${stringfyDate}`);
});
test("<DateField> - renders a input which correctly reacts on change", () => {
    const onChange = jest.fn();
    const now = "2000-04-04";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x" }), { x: { type: Date } }, { onChange }));
    const input = react_1.screen.getByTestId("date-field");
    react_1.fireEvent.change(input, { target: { value: "2000-04-04T10:20" } });
    expect(onChange).toHaveBeenLastCalledWith("x", new Date("2000-04-04T10:20:00.000Z"));
});
test("<DateField> - renders a input which correctly reacts on change (empty value)", () => {
    const onChange = jest.fn();
    const dateValue = new Date("2000-04-04");
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x", value: dateValue }), { x: { type: Date } }, { onChange }));
    const input = react_1.screen.getByTestId("date-field");
    react_1.fireEvent.change(input, { target: { value: "" } });
    expect(onChange).toHaveBeenLastCalledWith("x", undefined);
});
test("<DateField> - renders a input which correctly reacts on change (empty)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x", onChange: onChange }), { x: { type: Date } }));
    const input = react_1.screen.getByTestId("date-field");
    react_1.fireEvent.change(input, { target: { value: "" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<DateField> - renders a input which correctly reacts on change (invalid)", () => {
    const onChange = jest.fn();
    const now = "10:00";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x" }), { x: { type: Date } }, { onChange }));
    const input = react_1.screen.getByTestId("date-field");
    react_1.fireEvent.change(input, { target: { value: now } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<DateField> - renders a input which correctly reacts on change (valid)", () => {
    const onChange = jest.fn();
    const date = "2000-04-04";
    const time = "10:30";
    const dateValue = new Date(`${date}T00:00:00Z`);
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x", value: dateValue }), { x: { type: Date } }, { onChange }));
    const input = react_1.screen.getByTestId("date-field");
    react_1.fireEvent.change(input, { target: { value: `${date}T${time}` } });
    expect(onChange).toHaveBeenLastCalledWith("x", new Date(`${date}T${time}:00.000Z`));
});
test("<DateField> - renders a input which correctly reacts on change (year bigger than 9999)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x" }), { x: { type: Date } }, { onChange }));
    const input = react_1.screen.getByTestId("date-field");
    react_1.fireEvent.change(input, { target: { value: "121212-12-12T12:12" } });
    expect(onChange).toHaveBeenLastCalledWith("x", new Date("9999-12-12T12:12:00.000Z"));
});
test("<DateField> - test max property - valid", () => {
    const dateValue = new Date("1998-12-31");
    const maxValue = new Date("1999-01-01T00:00:00Z");
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x", max: maxValue, value: dateValue }), { x: { type: Date } }));
    expect(react_1.screen.queryByTestId("Should be before")).toBeNull();
});
test("<DateField> - test max property - invalid", () => {
    const date = "1999-01-02";
    const max = "1999-01-01T00:00:00.000Z";
    const dateValue = new Date(date);
    const maxValue = new Date(max);
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x", max: maxValue, value: dateValue }), { x: { type: Date } }));
    expect(react_1.screen.getByText(`Should be before ${max}`)).toBeInTheDocument();
});
test("<DateField> - test min property - valid", () => {
    const dateValue = new Date("1999-01-02");
    const minValue = new Date("1999-01-01T00:00:00Z");
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x", min: dateValue, value: minValue }), { x: { type: Date } }));
    expect(react_1.screen.queryByTestId("Should be after")).toBeNull();
});
test("<DateField> - test min property - invalid", () => {
    const date = "1998-12-31";
    const min = "1999-01-01T00:00:00.000Z";
    const dateValue = new Date(date);
    const minValue = new Date(min);
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.DateField, { name: "x", min: minValue, value: dateValue }), { x: { type: Date } }));
    expect(react_1.screen.getByText(`Should be after ${min}`)).toBeInTheDocument();
});
//# sourceMappingURL=DateField.test.js.map