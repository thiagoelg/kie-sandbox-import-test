import { jsx as _jsx } from "react/jsx-runtime";
import { AutoField } from "..";
import { usingUniformsContext } from "./test-utils";
import { render, screen } from "@testing-library/react";
test("<AutoField> - works - default field", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<AutoField> - renders RadioField", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), {
        x: {
            type: String,
            allowedValues: ["x", "y"],
            uniforms: { checkboxes: true },
        },
    }));
    expect(screen.getByTestId("radio-field")).toBeInTheDocument();
});
test("<AutoField> - renders SelectField - input", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), {
        x: { type: Array, allowedValues: ["x", "y"] },
        "x.$": { type: String },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
});
test("<AutoField> - renders SelectField - checkbox", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x", checkboxes: true }), {
        x: { type: Array, allowedValues: ["x", "y"] },
        "x.$": { type: String },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
});
test("<AutoField> - renders DateField", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), { x: { type: Date } }));
    expect(screen.getByTestId("date-field")).toBeInTheDocument();
});
test("<AutoField> - renders ListField", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(screen.getByTestId("list-field")).toBeInTheDocument();
});
test("<AutoField> - renders NumField", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), { x: { type: Number } }));
    expect(screen.getByTestId("num-field")).toBeInTheDocument();
});
test("<AutoField> - renders NestField", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), { x: { type: Object } }));
    expect(screen.getByTestId("nest-field")).toBeInTheDocument();
});
test("<AutoField> - renders TextField", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<AutoField> - renders BoolField", () => {
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), { x: { type: Boolean } }));
    expect(screen.getByTestId("bool-field")).toBeInTheDocument();
});
test("<AutoField> - renders Component (model)", () => {
    const Component = jest.fn(() => null);
    render(usingUniformsContext(_jsx(AutoField, { name: "x" }), { x: { type: String, uniforms: { component: Component } } }));
    expect(Component).toHaveBeenCalledTimes(1);
});
test("<AutoField> - renders Component (specified)", () => {
    const Component = jest.fn(() => null);
    render(usingUniformsContext(_jsx(AutoField, { name: "x", component: Component }), { x: { type: String } }));
    expect(Component).toHaveBeenCalledTimes(1);
});
//# sourceMappingURL=AutoField.test.js.map