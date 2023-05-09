import { jsx as _jsx } from "react/jsx-runtime";
import { AutoForm } from "../";
import { createSimpleSchema, usingUniformsContext } from "./test-utils";
import { render, screen } from "@testing-library/react";
test("<AutoForm> - works", () => {
    render(usingUniformsContext(_jsx(AutoForm, { schema: createSimpleSchema() })));
    expect(screen.getByTestId("base-form")).toBeInTheDocument();
});
//# sourceMappingURL=AutoForm.test.js.map