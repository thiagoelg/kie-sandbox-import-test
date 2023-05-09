import { jsx as _jsx } from "react/jsx-runtime";
import { SubmitField } from "..";
import { render, screen } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<SubmitField> - renders", () => {
    render(usingUniformsContext(_jsx(SubmitField, {})));
    expect(screen.getByTestId("submit-field")).toBeInTheDocument();
});
test("<SubmitField> - renders disabled if error", () => {
    render(usingUniformsContext(_jsx(SubmitField, {}), undefined, { error: {} }));
    expect(screen.getByTestId("submit-field")).toBeInTheDocument();
    expect(screen.getByTestId("submit-field")).toBeDisabled();
});
test("<SubmitField> - renders enabled if error and enabled", () => {
    render(usingUniformsContext(_jsx(SubmitField, { disabled: false }), undefined, { error: {} }));
    expect(screen.getByTestId("submit-field")).toBeInTheDocument();
    expect(screen.getByTestId("submit-field")).toBeEnabled();
});
//# sourceMappingURL=SubmitField.test.js.map