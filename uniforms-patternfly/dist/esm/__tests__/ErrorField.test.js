import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorField } from "..";
import { render, screen } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
const error = {
    error: "validation-error",
    reason: "X is required",
    details: [{ name: "x", type: "required", details: { value: null } }],
    message: "X is required [validation-error]",
};
test("<ErrorField> - works", () => {
    render(usingUniformsContext(_jsx(ErrorField, { name: "x", error: true }), { x: { type: String } }));
    expect(screen.getByTestId("error-field")).toBeInTheDocument();
});
test("<ErrorField> - renders correct error message (context)", () => {
    render(usingUniformsContext(_jsx(ErrorField, { name: "x" }), { x: { type: String } }, { error }));
    expect(screen.getByTestId("error-field")).toBeInTheDocument();
    expect(screen.getByText(error.reason)).toBeInTheDocument();
});
test("<ErrorField> - renders correct error message (specified)", () => {
    render(usingUniformsContext(_jsx(ErrorField, { name: "x", error: error.details[0], errorMessage: error.reason }), {
        x: { type: String },
    }));
    expect(screen.getByTestId("error-field")).toBeInTheDocument();
    expect(screen.getByText(error.reason)).toBeInTheDocument();
});
//# sourceMappingURL=ErrorField.test.js.map