"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
const error = {
    error: "validation-error",
    reason: "X is required",
    details: [
        { name: "x", type: "required", details: { value: null } },
        { name: "y", type: "required", details: { value: null } },
        { name: "z", type: "required", details: { value: null } },
    ],
    message: "X is required [validation-error]",
};
test("<ErrorsField> - renders list of correct error messages (context)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ErrorsField, { name: "x" }), { x: { type: String }, y: { type: String }, z: { type: String } }, { error }));
    expect(react_1.screen.getByTestId("errors-field")).toBeInTheDocument();
    expect(react_1.screen.getByText("X is required")).toBeInTheDocument();
    expect(react_1.screen.getByText("Y is required")).toBeInTheDocument();
    expect(react_1.screen.getByText("Z is required")).toBeInTheDocument();
});
test("<ErrorsField> - renders children (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ErrorsField, Object.assign({ name: "x" }, { children: "Error message list" })), { x: { type: String }, y: { type: String }, z: { type: String } }, { error }));
    expect(react_1.screen.getByText("Error message list")).toBeInTheDocument();
});
//# sourceMappingURL=ErrorsField.test.js.map