import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorsField } from "..";
import { render, screen } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
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
    render(usingUniformsContext(_jsx(ErrorsField, { name: "x" }), { x: { type: String }, y: { type: String }, z: { type: String } }, { error }));
    expect(screen.getByTestId("errors-field")).toBeInTheDocument();
    expect(screen.getByText("X is required")).toBeInTheDocument();
    expect(screen.getByText("Y is required")).toBeInTheDocument();
    expect(screen.getByText("Z is required")).toBeInTheDocument();
});
test("<ErrorsField> - renders children (specified)", () => {
    render(usingUniformsContext(_jsx(ErrorsField, Object.assign({ name: "x" }, { children: "Error message list" })), { x: { type: String }, y: { type: String }, z: { type: String } }, { error }));
    expect(screen.getByText("Error message list")).toBeInTheDocument();
});
//# sourceMappingURL=ErrorsField.test.js.map