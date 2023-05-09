"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<TextField> - renders an input", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<TextField> - renders an input with correct disabled state", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", disabled: true }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field")).toBeDisabled();
});
test("<TextField> - renders an input with correct id (inherited)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("id")).toBeTruthy();
});
test("<TextField> - renders an input with correct id (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", id: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("id")).toBe("y");
});
test("<TextField> - renders an input with correct name", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("name")).toBe("x");
});
test("<TextField> - renders an input with correct placeholder", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", placeholder: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("placeholder")).toBe("y");
});
test("<TextField> - renders an input with correct type", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("type")).toBe("text");
});
test("<TextField> - renders an input with correct value (default)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("value")).toBe("");
});
test("<TextField> - renders an input with correct value (model)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x" }), { x: { type: String } }, { model: { x: "y" } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("value")).toBe("y");
});
test("<TextField> - renders an input with correct value (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", value: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("value")).toBe("y");
});
test("<TextField> - renders an input which correctly reacts on change", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x" }), { x: { type: String } }, { onChange }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    react_1.fireEvent.change(react_1.screen.getByTestId("text-field"), { target: { value: "y" } });
    expect(onChange).toHaveBeenLastCalledWith("x", "y");
});
test("<TextField> - renders an input which correctly reacts on change (empty)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x" }), { x: { type: String } }, { onChange }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    react_1.fireEvent.change(react_1.screen.getByTestId("text-field"), { target: { value: "" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<TextField> - renders an input which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x" }), { x: { type: String } }, { model: { x: "y" }, onChange }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    react_1.fireEvent.change(react_1.screen.getByTestId("text-field"), { target: { value: "y" } });
    expect(onChange).not.toHaveBeenCalled();
});
test("<TextField> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: false, name: "x", label: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByText("y")).toBeInTheDocument();
});
test("<TextField> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: true, name: "x", label: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByText("y")).toBeInTheDocument();
    expect(react_1.screen.getByText("*")).toBeInTheDocument();
});
test("<TextField> - renders a help", () => {
    var _a;
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: false, name: "x", helperText: "y" }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("wrapper-field").querySelector(".pf-c-form__helper-text")).toBeInTheDocument();
    expect((_a = react_1.screen.getByTestId("wrapper-field").querySelector(".pf-c-form__helper-text")) === null || _a === void 0 ? void 0 : _a.textContent).toBe("y");
});
test("<TextField> - renders a initial value on date field (type = date)", () => {
    const date = "2000-04-04";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: true, name: "x", label: "y", type: "date" }), { x: { type: String } }, { model: { x: date } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").value).toBe(date);
});
test("<TextField> - renders a disabled date field (type = date)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: true, name: "x", label: "y", type: "date", disabled: true }), {
        x: { type: String },
    }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field")).toBeDisabled();
});
test("<TextField> - renders a input which correctly reacts on change (type = date)", () => {
    const onChange = jest.fn();
    const date = "2000-04-04";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: true, name: "x", label: "y", type: "date" }), { x: { type: String } }, { onChange }));
    const input = react_1.screen.getByTestId("text-field");
    react_1.fireEvent.change(input, { target: { value: date } });
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    expect(onChange).toHaveBeenLastCalledWith("x", date);
});
test("<TextField> - renders a input which correctly reacts on change (type = date - empty)", () => {
    const onChange = jest.fn();
    const date = "";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: true, name: "x", label: "y", type: "date" }), { x: { type: String } }, { onChange }));
    const input = react_1.screen.getByTestId("text-field");
    react_1.fireEvent.change(input, { target: { value: date } });
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    expect(onChange).not.toHaveBeenCalled();
});
test("<TextField> - renders a initial value on time field (type = time)", () => {
    const time = "10:00";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: true, name: "x", label: "y", type: "time" }), { x: { type: String } }, { model: { x: time } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field").getAttribute("value")).toBe(time);
});
test("<TextField> - renders a disabled date field (type = time)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: true, name: "x", label: "y", type: "time", disabled: true }), {
        x: { type: String },
    }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("text-field")).toBeDisabled();
});
test("<TextField> - renders a input which correctly reacts on change (type = time)", () => {
    const onChange = jest.fn();
    const time = "10:10";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: true, name: "x", label: "y", type: "time" }), { x: { type: String } }, { onChange }));
    const input = react_1.screen.getByTestId("text-field");
    react_1.fireEvent.change(input, { target: { value: time } });
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    expect(onChange).toHaveBeenLastCalledWith("x", "10:10:00");
});
test("<TextField> - renders a input which correctly reacts on change (type = time - empty)", () => {
    const onChange = jest.fn();
    const time = "";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { required: true, name: "x", label: "y", type: "time" }), { x: { type: String } }, { onChange }));
    const input = react_1.screen.getByTestId("text-field");
    react_1.fireEvent.change(input, { target: { value: time } });
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
    expect(onChange).not.toHaveBeenCalled();
});
test("<TextField> - test max property (type = time - valid)", () => {
    const time = "10:00";
    const max = "12:00";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", label: "y", max: max, type: "time", value: time }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.queryByText("Should be before")).not.toBeInTheDocument();
});
test("<TextField> - test max property (type = time - invalid)", () => {
    const time = "13:00";
    const max = "12:00";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", label: "y", max: max, type: "time", value: time }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.queryByText("Should be before 12:00")).toBeInTheDocument();
});
test("<TextField> - test min property (type = time - valid)", () => {
    const time = "13:00";
    const min = "12:00";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", label: "y", min: min, type: "time", value: time }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.queryByText("Should be after")).not.toBeInTheDocument();
});
test("<TextField> - test min property (type = time - invalid)", () => {
    const time = "10:00";
    const min = "12:00";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", label: "y", min: min, type: "time", value: time }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.queryByText("Should be after 12:00")).toBeInTheDocument();
});
test("<TextField> - test max property (type = date - valid)", () => {
    const date = "2000-01-01";
    const max = "2000-01-02";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", label: "y", max: max, type: "date", value: date }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.queryByText("Should be before")).not.toBeInTheDocument();
});
test("<TextField> - test max property (type = date - invalid)", () => {
    const date = "2000-01-02";
    const max = "2000-01-01";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", label: "y", max: max, type: "date", value: date }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.queryByText("Should be before 2000-01-01")).toBeInTheDocument();
});
test("<TextField> - test min property (type = date - valid)", () => {
    const date = "2000-01-02";
    const min = "2000-01-01";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", label: "y", min: min, type: "date", value: date }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.queryByText("Should be after")).not.toBeInTheDocument();
});
test("<TextField> - test min property (type = date - invalid)", () => {
    const date = "2000-01-01";
    const min = "2000-01-02";
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.TextField, { name: "x", label: "y", min: min, type: "date", value: date }), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
    expect(react_1.screen.queryByText("Should be after 2000-01-02")).toBeInTheDocument();
});
//# sourceMappingURL=TextField.test.js.map