import { jsx as _jsx } from "react/jsx-runtime";
import { ListAddField } from "../";
import { render, screen, fireEvent } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
const onChange = jest.fn();
const context = { onChange, model: { x: [] } };
const schema = { x: { type: Array, maxCount: 3 }, "x.$": String };
beforeEach(() => {
    onChange.mockClear();
});
test("<ListAddField> - works", () => {
    render(usingUniformsContext(_jsx(ListAddField, { name: "x.$" }), schema, context));
    expect(screen.getByTestId("list-add-field")).toBeInTheDocument();
});
test("<ListAddField> - prevents onClick when disabled", () => {
    render(usingUniformsContext(_jsx(ListAddField, { name: "x.1", disabled: true }), schema, context));
    fireEvent.click(screen.getByTestId("list-add-field"));
    expect(onChange).not.toHaveBeenCalled();
});
test("<ListAddField> - prevents onClick when limit reached", () => {
    render(usingUniformsContext(_jsx(ListAddField, { name: "x.1" }), Object.assign(Object.assign({}, schema), { x: Object.assign(Object.assign({}, schema.x), { maxCount: 0 }) }), context));
    fireEvent.click(screen.getByTestId("list-add-field"));
    expect(onChange).not.toHaveBeenCalled();
});
test("<ListAddField> - correctly reacts on click", () => {
    render(usingUniformsContext(_jsx(ListAddField, { name: "x.1", value: "y" }), schema, context));
    fireEvent.click(screen.getByTestId("list-add-field"));
    expect(onChange).toHaveBeenLastCalledWith("x", ["y"]);
});
//# sourceMappingURL=ListAddField.test.js.map