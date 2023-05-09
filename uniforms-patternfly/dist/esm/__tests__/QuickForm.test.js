import { jsx as _jsx } from "react/jsx-runtime";
import { QuickForm } from "..";
import { usingUniformsContext, createSimpleSchema } from "./test-utils";
import { render, screen } from "@testing-library/react";
test("<QuickForm> - works", () => {
    render(usingUniformsContext(_jsx(QuickForm, { schema: createSimpleSchema() })));
    expect(screen.getByTestId("base-form")).toBeInTheDocument();
});
//# sourceMappingURL=QuickForm.test.js.map