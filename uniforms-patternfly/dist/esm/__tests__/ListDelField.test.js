import { jsx as _jsx } from "react/jsx-runtime";
import { ListDelField } from "../";
import { render, screen, fireEvent } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
const onChange = jest.fn();
const context = { onChange, model: { x: ["x", "y", "z"] } };
const schema = { x: { type: Array, maxCount: 3 }, "x.$": String };
beforeEach(() => {
    onChange.mockClear();
});
test("<ListDelField> - works", () => {
    render(usingUniformsContext(_jsx(ListDelField, { name: "x.1" }), schema, context));
    expect(screen.getByTestId("list-del-field")).toBeInTheDocument();
});
test("<ListDelField> - prevents onClick when disabled", () => {
    render(usingUniformsContext(_jsx(ListDelField, { name: "x.1", disabled: true }), schema, context));
    fireEvent.click(screen.getByTestId("list-del-field"));
    expect(onChange).not.toHaveBeenCalled();
});
test("<ListDelField> - prevents onClick when limit reached", () => {
    render(usingUniformsContext(_jsx(ListDelField, { name: "x.1" }), Object.assign(Object.assign({}, schema), { x: Object.assign(Object.assign({}, schema.x), { minCount: 3 }) }), context));
    fireEvent.click(screen.getByTestId("list-del-field"));
    expect(onChange).not.toHaveBeenCalled();
});
test("<ListDelField> - correctly reacts on click", () => {
    render(usingUniformsContext(_jsx(ListDelField, { name: "x.1" }), schema, context));
    fireEvent.click(screen.getByTestId("list-del-field"));
    expect(onChange).toHaveBeenLastCalledWith("x", ["x", "z"]);
});
//# sourceMappingURL=ListDelField.test.js.map