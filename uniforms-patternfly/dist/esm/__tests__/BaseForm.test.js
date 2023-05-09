import { jsx as _jsx } from "react/jsx-runtime";
import { BaseForm } from "../";
import { usingUniformsContext, createSimpleSchema } from "./test-utils";
import { render, screen } from "@testing-library/react";
test("<BaseForm> - works", () => {
    render(usingUniformsContext(_jsx(BaseForm, { schema: createSimpleSchema() })));
    expect(screen.getByTestId("base-form")).toBeInTheDocument();
});
//# sourceMappingURL=BaseForm.test.js.map