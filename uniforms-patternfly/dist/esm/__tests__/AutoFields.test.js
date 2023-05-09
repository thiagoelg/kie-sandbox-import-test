import { jsx as _jsx } from "react/jsx-runtime";
import { AutoFields } from "..";
import { usingUniformsContext } from "./test-utils";
import { render, screen } from "@testing-library/react";
test("<AutoFields> - works", () => {
    render(usingUniformsContext(_jsx(AutoFields, {}), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<AutoFields> - render all fields by default", () => {
    render(usingUniformsContext(_jsx(AutoFields, {}), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(screen.getAllByTestId("text-field")).toHaveLength(3);
});
test("<AutoFields> - renders only specified fields", () => {
    render(usingUniformsContext(_jsx(AutoFields, { fields: ["x", "y"] }), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(screen.getAllByTestId("text-field")).toHaveLength(2);
    expect(screen.queryByLabelText("z")).toBeNull();
});
test("<AutoFields> - does not render ommited fields", () => {
    render(usingUniformsContext(_jsx(AutoFields, { omitFields: ["x"] }), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(screen.getAllByTestId("text-field")).toHaveLength(2);
    expect(screen.queryByLabelText("x")).toBeNull();
});
test("<AutoFields> - works with custom component", () => {
    const Component = jest.fn(() => null);
    render(usingUniformsContext(_jsx(AutoFields, { autoField: Component }), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(Component).toHaveBeenCalledTimes(3);
});
test("<AutoFields> - wraps fields in specified element", () => {
    render(usingUniformsContext(_jsx(AutoFields, { element: "section" }), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(screen.getAllByTestId("text-field")).toHaveLength(3);
});
//# sourceMappingURL=AutoFields.test.js.map