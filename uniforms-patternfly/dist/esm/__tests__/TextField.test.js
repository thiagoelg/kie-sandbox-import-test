import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from "../";
import { render, screen, fireEvent } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<TextField> - renders an input", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<TextField> - renders an input with correct disabled state", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x", disabled: true }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field")).toBeDisabled();
});
test("<TextField> - renders an input with correct id (inherited)", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("id")).toBeTruthy();
});
test("<TextField> - renders an input with correct id (specified)", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x", id: "y" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("id")).toBe("y");
});
test("<TextField> - renders an input with correct name", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("name")).toBe("x");
});
test("<TextField> - renders an input with correct placeholder", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x", placeholder: "y" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("placeholder")).toBe("y");
});
test("<TextField> - renders an input with correct type", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("type")).toBe("text");
});
test("<TextField> - renders an input with correct value (default)", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("value")).toBe("");
});
test("<TextField> - renders an input with correct value (model)", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x" }), { x: { type: String } }, { model: { x: "y" } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("value")).toBe("y");
});
test("<TextField> - renders an input with correct value (specified)", () => {
    render(usingUniformsContext(_jsx(TextField, { name: "x", value: "y" }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("value")).toBe("y");
});
test("<TextField> - renders an input which correctly reacts on change", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(TextField, { name: "x" }), { x: { type: String } }, { onChange }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("text-field"), { target: { value: "y" } });
    expect(onChange).toHaveBeenLastCalledWith("x", "y");
});
test("<TextField> - renders an input which correctly reacts on change (empty)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(TextField, { name: "x" }), { x: { type: String } }, { onChange }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("text-field"), { target: { value: "" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<TextField> - renders an input which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(TextField, { name: "x" }), { x: { type: String } }, { model: { x: "y" }, onChange }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("text-field"), { target: { value: "y" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<TextField> - renders a label", () => {
    render(usingUniformsContext(_jsx(TextField, { required: false, name: "x", label: "y" }), { x: { type: String } }));
    expect(screen.getByText("y")).toBeInTheDocument();
});
test("<TextField> - renders a label", () => {
    render(usingUniformsContext(_jsx(TextField, { required: true, name: "x", label: "y" }), { x: { type: String } }));
    expect(screen.getByText("y")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
});
test("<TextField> - renders a help", () => {
    var _a;
    render(usingUniformsContext(_jsx(TextField, { required: false, name: "x", helperText: "y" }), { x: { type: String } }));
    expect(screen.getByTestId("wrapper-field").querySelector(".pf-c-form__helper-text")).toBeInTheDocument();
    expect((_a = screen.getByTestId("wrapper-field").querySelector(".pf-c-form__helper-text")) === null || _a === void 0 ? void 0 : _a.textContent).toBe("y");
});
test("<TextField> - renders a initial value on date field (type = date)", () => {
    const date = "2000-04-04";
    render(usingUniformsContext(_jsx(TextField, { required: true, name: "x", label: "y", type: "date" }), { x: { type: String } }, { model: { x: date } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").value).toBe(date);
});
test("<TextField> - renders a disabled date field (type = date)", () => {
    render(usingUniformsContext(_jsx(TextField, { required: true, name: "x", label: "y", type: "date", disabled: true }), {
        x: { type: String },
    }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field")).toBeDisabled();
});
test("<TextField> - renders a input which correctly reacts on change (type = date)", () => {
    const onChange = jest.fn();
    const date = "2000-04-04";
    render(usingUniformsContext(_jsx(TextField, { required: true, name: "x", label: "y", type: "date" }), { x: { type: String } }, { onChange }));
    const input = screen.getByTestId("text-field");
    fireEvent.change(input, { target: { value: date } });
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    expect(onChange).toHaveBeenLastCalledWith("x", date);
});
test("<TextField> - renders a input which correctly reacts on change (type = date - empty)", () => {
    const onChange = jest.fn();
    const date = "";
    render(usingUniformsContext(_jsx(TextField, { required: true, name: "x", label: "y", type: "date" }), { x: { type: String } }, { onChange }));
    const input = screen.getByTestId("text-field");
    fireEvent.change(input, { target: { value: date } });
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    expect(onChange).not.toHaveBeenCalled();
});
test("<TextField> - renders a initial value on time field (type = time)", () => {
    const time = "10:00";
    render(usingUniformsContext(_jsx(TextField, { required: true, name: "x", label: "y", type: "time" }), { x: { type: String } }, { model: { x: time } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field").getAttribute("value")).toBe(time);
});
test("<TextField> - renders a disabled date field (type = time)", () => {
    render(usingUniformsContext(_jsx(TextField, { required: true, name: "x", label: "y", type: "time", disabled: true }), {
        x: { type: String },
    }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("text-field")).toBeDisabled();
});
test("<TextField> - renders a input which correctly reacts on change (type = time)", () => {
    const onChange = jest.fn();
    const time = "10:10";
    render(usingUniformsContext(_jsx(TextField, { required: true, name: "x", label: "y", type: "time" }), { x: { type: String } }, { onChange }));
    const input = screen.getByTestId("text-field");
    fireEvent.change(input, { target: { value: time } });
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    expect(onChange).toHaveBeenLastCalledWith("x", "10:10:00");
});
test("<TextField> - renders a input which correctly reacts on change (type = time - empty)", () => {
    const onChange = jest.fn();
    const time = "";
    render(usingUniformsContext(_jsx(TextField, { required: true, name: "x", label: "y", type: "time" }), { x: { type: String } }, { onChange }));
    const input = screen.getByTestId("text-field");
    fireEvent.change(input, { target: { value: time } });
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    expect(onChange).not.toHaveBeenCalled();
});
test("<TextField> - test max property (type = time - valid)", () => {
    const time = "10:00";
    const max = "12:00";
    render(usingUniformsContext(_jsx(TextField, { name: "x", label: "y", max: max, type: "time", value: time }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.queryByText("Should be before")).not.toBeInTheDocument();
});
test("<TextField> - test max property (type = time - invalid)", () => {
    const time = "13:00";
    const max = "12:00";
    render(usingUniformsContext(_jsx(TextField, { name: "x", label: "y", max: max, type: "time", value: time }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.queryByText("Should be before 12:00")).toBeInTheDocument();
});
test("<TextField> - test min property (type = time - valid)", () => {
    const time = "13:00";
    const min = "12:00";
    render(usingUniformsContext(_jsx(TextField, { name: "x", label: "y", min: min, type: "time", value: time }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.queryByText("Should be after")).not.toBeInTheDocument();
});
test("<TextField> - test min property (type = time - invalid)", () => {
    const time = "10:00";
    const min = "12:00";
    render(usingUniformsContext(_jsx(TextField, { name: "x", label: "y", min: min, type: "time", value: time }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.queryByText("Should be after 12:00")).toBeInTheDocument();
});
test("<TextField> - test max property (type = date - valid)", () => {
    const date = "2000-01-01";
    const max = "2000-01-02";
    render(usingUniformsContext(_jsx(TextField, { name: "x", label: "y", max: max, type: "date", value: date }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.queryByText("Should be before")).not.toBeInTheDocument();
});
test("<TextField> - test max property (type = date - invalid)", () => {
    const date = "2000-01-02";
    const max = "2000-01-01";
    render(usingUniformsContext(_jsx(TextField, { name: "x", label: "y", max: max, type: "date", value: date }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.queryByText("Should be before 2000-01-01")).toBeInTheDocument();
});
test("<TextField> - test min property (type = date - valid)", () => {
    const date = "2000-01-02";
    const min = "2000-01-01";
    render(usingUniformsContext(_jsx(TextField, { name: "x", label: "y", min: min, type: "date", value: date }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.queryByText("Should be after")).not.toBeInTheDocument();
});
test("<TextField> - test min property (type = date - invalid)", () => {
    const date = "2000-01-01";
    const min = "2000-01-02";
    render(usingUniformsContext(_jsx(TextField, { name: "x", label: "y", min: min, type: "date", value: date }), { x: { type: String } }));
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
    expect(screen.queryByText("Should be after 2000-01-02")).toBeInTheDocument();
});
//# sourceMappingURL=TextField.test.js.map