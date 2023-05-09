"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const test_utils_1 = require("./test-utils");
const react_1 = require("@testing-library/react");
test("<AutoField> - works - default field", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<AutoField> - renders RadioField", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), {
        x: {
            type: String,
            allowedValues: ["x", "y"],
            uniforms: { checkboxes: true },
        },
    }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
});
test("<AutoField> - renders SelectField - input", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), {
        x: { type: Array, allowedValues: ["x", "y"] },
        "x.$": { type: String },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
});
test("<AutoField> - renders SelectField - checkbox", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x", checkboxes: true }), {
        x: { type: Array, allowedValues: ["x", "y"] },
        "x.$": { type: String },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
});
test("<AutoField> - renders DateField", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), { x: { type: Date } }));
    expect(react_1.screen.getByTestId("date-field")).toBeInTheDocument();
});
test("<AutoField> - renders ListField", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(react_1.screen.getByTestId("list-field")).toBeInTheDocument();
});
test("<AutoField> - renders NumField", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), { x: { type: Number } }));
    expect(react_1.screen.getByTestId("num-field")).toBeInTheDocument();
});
test("<AutoField> - renders NestField", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), { x: { type: Object } }));
    expect(react_1.screen.getByTestId("nest-field")).toBeInTheDocument();
});
test("<AutoField> - renders TextField", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<AutoField> - renders BoolField", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), { x: { type: Boolean } }));
    expect(react_1.screen.getByTestId("bool-field")).toBeInTheDocument();
});
test("<AutoField> - renders Component (model)", () => {
    const Component = jest.fn(() => null);
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x" }), { x: { type: String, uniforms: { component: Component } } }));
    expect(Component).toHaveBeenCalledTimes(1);
});
test("<AutoField> - renders Component (specified)", () => {
    const Component = jest.fn(() => null);
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoField, { name: "x", component: Component }), { x: { type: String } }));
    expect(Component).toHaveBeenCalledTimes(1);
});
//# sourceMappingURL=AutoField.test.js.map