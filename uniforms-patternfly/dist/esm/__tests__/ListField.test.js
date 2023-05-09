import { jsx as _jsx } from "react/jsx-runtime";
import { ListField } from "../";
import { render, screen } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<ListField> - works", () => {
    render(usingUniformsContext(_jsx(ListField, { name: "x" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(screen.getByTestId("list-field")).toBeInTheDocument();
});
test("<ListField> - renders ListAddField", () => {
    render(usingUniformsContext(_jsx(ListField, { name: "x", label: "ListFieldLabel" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(screen.getByTestId("list-add-field")).toBeInTheDocument();
    expect(screen.getByText("ListFieldLabel")).toBeInTheDocument();
});
test("<ListField> - renders correct label (specified)", () => {
    render(usingUniformsContext(_jsx(ListField, { name: "x", label: "ListFieldLabel" }), { x: { type: Array }, "x.$": { type: String } }));
    expect(screen.getByText("ListFieldLabel")).toBeInTheDocument();
});
test("<ListField> - renders correct numer of items with initialCount (specified)", () => {
    render(usingUniformsContext(_jsx(ListField, { name: "x", initialCount: 3 }), { x: { type: Array }, "x.$": { type: String } }));
    expect(screen.getAllByTestId("text-field")).toHaveLength(3);
});
test("<ListField> - renders children (specified)", () => {
    const Child = jest.fn(() => null);
    render(usingUniformsContext(_jsx(ListField, Object.assign({ name: "x", initialCount: 2 }, { children: _jsx(Child, {}) })), { x: { type: Array }, "x.$": { type: String } }));
    expect(Child).toHaveBeenCalledTimes(2);
});
test("<ListField> - renders children with correct name (children)", () => {
    const Child = jest.fn((props) => _jsx("div", Object.assign({}, props, { "data-testid": "child-div" })));
    render(usingUniformsContext(_jsx(ListField, Object.assign({ name: "x", initialCount: 2 }, { children: _jsx(Child, { name: "$" }) })), { x: { type: Array }, "x.$": { type: String } }));
    const childDivs = screen.getAllByTestId("child-div");
    expect(childDivs[0].getAttribute("name")).toBe("0");
    expect(childDivs[1].getAttribute("name")).toBe("1");
});
test("<ListField> - renders children with correct name (value)", () => {
    render(usingUniformsContext(_jsx(ListField, { name: "x", initialCount: 2 }), { x: { type: Array }, "x.$": { type: String } }));
    const textFields = screen.getAllByTestId("text-field");
    expect(textFields[0].getAttribute("name")).toBe("x.0");
    expect(textFields[1].getAttribute("name")).toBe("x.1");
});
//# sourceMappingURL=ListField.test.js.map