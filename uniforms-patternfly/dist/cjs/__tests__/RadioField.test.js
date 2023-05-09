"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<RadioField> - renders a set of checkboxes", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", allowedValues: [] }), { x: { type: String, allowedValues: [] } }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")).toHaveLength(0);
});
test("<RadioField> - renders a set of checkboxes", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")).toHaveLength(2);
});
test("<RadioField> - renders a set of checkboxes with correct disabled state", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", disabled: true, allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[0]).toBeDisabled();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[1]).toBeDisabled();
});
test("<RadioField> - renders a set of checkboxes with correct id (inherited)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[0].getAttribute("id")).toBeTruthy();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[1].getAttribute("id")).toBeTruthy();
});
test("<RadioField> - renders a set of checkboxes with correct id (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", id: "y", allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[0].getAttribute("id")).toBe("y");
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[1].getAttribute("id")).toBe("y");
});
test("<RadioField> - renders a set of checkboxes with correct name", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[0].getAttribute("name")).toBe("x");
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[1].getAttribute("name")).toBe("x");
});
test("<RadioField> - renders a set of checkboxes with correct options", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(2);
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("label")[0].textContent).toBe("a");
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("label")[1].textContent).toBe("b");
});
test("<RadioField> - renders a set of checkboxes with correct options (transform)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", transform: (x) => x.toUpperCase(), allowedValues: ["a", "b"] }), { x: { type: String, allowedValues: ["a", "b"] } }));
    expect(react_1.screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(2);
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("label")[0].textContent).toBe("A");
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("label")[1].textContent).toBe("B");
});
test("<RadioField> - renders a set of checkboxes with correct value (default)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[0]).not.toBeChecked();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[1]).not.toBeChecked();
});
test("<RadioField> - renders a set of checkboxes with correct value (model)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", allowedValues: ["a", "b"] }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" } }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[0]).not.toBeChecked();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[1]).toBeChecked();
});
test("<RadioField> - renders a set of checkboxes with correct value (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", value: "b", allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[0]).not.toBeChecked();
    expect(react_1.screen.getByTestId("radio-field").getElementsByTagName("input")[1]).toBeChecked();
});
test("<RadioField> - renders a set of checkboxes which correctly reacts on change", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", allowedValues: ["a", "b"] }), { x: { type: String, allowedValues: ["a", "b"] } }, { onChange }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    const inputs = react_1.screen.getByTestId("radio-field").getElementsByTagName("input");
    expect(inputs).toHaveLength(2);
    react_1.fireEvent.click(inputs[1]);
    expect(onChange).toHaveBeenLastCalledWith("x", "b");
});
test("<RadioField> - renders a set of checkboxes which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { name: "x", allowedValues: ["a", "b"] }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" }, onChange }));
    expect(react_1.screen.getByTestId("radio-field")).toBeInTheDocument();
    const inputs = react_1.screen.getByTestId("radio-field").getElementsByTagName("input");
    expect(inputs).toHaveLength(2);
    react_1.fireEvent.click(inputs[0]);
    expect(onChange).toHaveBeenLastCalledWith("x", "a");
});
test("<RadioField> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { required: false, name: "x", label: "y", allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(3);
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y");
});
test("<RadioField> - renders a label (required)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.RadioField, { required: true, name: "x", label: "y", allowedValues: ["a", "b"] }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(3);
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
});
//# sourceMappingURL=RadioField.test.js.map