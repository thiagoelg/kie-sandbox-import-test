import { jsx as _jsx } from "react/jsx-runtime";
import { ValidatedForm } from "..";
import { createSimpleSchema, usingUniformsContext } from "./test-utils";
import { render, screen } from "@testing-library/react";
test("<ValidatedForm> - works", () => {
    render(usingUniformsContext(_jsx(ValidatedForm, { schema: createSimpleSchema() })));
    expect(screen.getByTestId("base-form")).toBeInTheDocument();
});
//# sourceMappingURL=ValidatedForm.test.js.map