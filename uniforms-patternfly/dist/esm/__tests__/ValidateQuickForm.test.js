import { jsx as _jsx } from "react/jsx-runtime";
import { ValidatedQuickForm } from "..";
import { render, screen } from "@testing-library/react";
import { createSimpleSchema, usingUniformsContext } from "./test-utils";
test("<ValidatedQuickForm> - works", () => {
    render(usingUniformsContext(_jsx(ValidatedQuickForm, { schema: createSimpleSchema() })));
    expect(screen.getByTestId("base-form")).toBeInTheDocument();
});
//# sourceMappingURL=ValidateQuickForm.test.js.map