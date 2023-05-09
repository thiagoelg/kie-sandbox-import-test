"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
const error = {
    error: "validation-error",
    reason: "X is required",
    details: [{ name: "x", type: "required", details: { value: null } }],
    message: "X is required [validation-error]",
};
test("<ErrorField> - works", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ErrorField, { name: "x", error: true }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("error-field")).toBeInTheDocument();
});
test("<ErrorField> - renders correct error message (context)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ErrorField, { name: "x" }), { x: { type: String } }, { error }));
    expect(react_1.screen.getByTestId("error-field")).toBeInTheDocument();
    expect(react_1.screen.getByText(error.reason)).toBeInTheDocument();
});
test("<ErrorField> - renders correct error message (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.ErrorField, { name: "x", error: error.details[0], errorMessage: error.reason }), {
        x: { type: String },
    }));
    expect(react_1.screen.getByTestId("error-field")).toBeInTheDocument();
    expect(react_1.screen.getByText(error.reason)).toBeInTheDocument();
});
//# sourceMappingURL=ErrorField.test.js.map