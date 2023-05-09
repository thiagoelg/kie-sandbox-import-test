import { jsx as _jsx } from "react/jsx-runtime";
import { ListItemField } from "../";
import { render, screen } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<ListItemField> - works", () => {
    render(usingUniformsContext(_jsx(ListItemField, { name: "x.1" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(screen.getByTestId("list-item-field")).toBeInTheDocument();
});
test("<ListItemField> - renders AutoField", () => {
    const element = _jsx(ListItemField, { name: "x.1" });
    render(usingUniformsContext(element, { x: { type: Array }, "x.$": { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<ListItemField> - renders children if specified", () => {
    const Child = jest.fn(() => null);
    render(usingUniformsContext(_jsx(ListItemField, Object.assign({ name: "x.1" }, { children: _jsx(Child, {}) })), { x: { type: Array }, "x.$": { type: String } }));
    expect(Child).toHaveBeenCalledTimes(1);
});
test("<ListItemField> - renders ListDelField", () => {
    render(usingUniformsContext(_jsx(ListItemField, { name: "x.1" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(screen.getByTestId("list-del-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("name")).toBe("x.1");
});
//# sourceMappingURL=ListItemField.test.js.map