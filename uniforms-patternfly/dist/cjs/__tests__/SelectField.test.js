"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<SelectField checkboxes> - renders a set of checkboxes", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct disabled state", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", disabled: true, checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]).toBeDisabled();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]).toBeDisabled();
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct id (inherited)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0].getAttribute("id")).toBeTruthy();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1].getAttribute("id")).toBeTruthy();
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct id (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", id: "y", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0].getAttribute("id")).toBe("y-a");
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1].getAttribute("id")).toBe("y-b");
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct name", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0].getAttribute("name")).toBe("x");
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1].getAttribute("name")).toBe("x");
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct options", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("label")).toHaveLength(2);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[0].textContent).toBe("a");
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[1].textContent).toBe("b");
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct options (transform)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", transform: (x) => x.toUpperCase(), checkboxes: true }), { x: { type: String, allowedValues: ["a", "b"] } }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("label")).toHaveLength(2);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[0].textContent).toBe("A");
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[1].textContent).toBe("B");
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct value (default)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]).not.toBeChecked();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]).not.toBeChecked();
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct value (model)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" } }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]).not.toBeChecked();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]).toBeChecked();
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct value (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", value: "b", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]).not.toBeChecked();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]).toBeChecked();
});
test("<SelectField checkboxes> - renders a set of checkboxes which correctly reacts on change", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), { x: { type: String, allowedValues: ["a", "b"] } }, { onChange }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]);
    expect(onChange).toHaveBeenLastCalledWith("x", "b");
});
test("<SelectField checkboxes> - renders a set of checkboxes which correctly reacts on change (array check)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: Array },
        "x.$": { type: String, allowedValues: ["a", "b"] },
    }, { onChange }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]);
    expect(onChange).toHaveBeenLastCalledWith("x", ["b"]);
});
test("<SelectField checkboxes> - renders a set of checkboxes which correctly reacts on change (array uncheck)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", value: ["b"], checkboxes: true }), {
        x: { type: Array },
        "x.$": { type: String, allowedValues: ["a", "b"] },
    }, { onChange }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]);
    expect(onChange).toHaveBeenLastCalledWith("x", []);
});
test("<SelectField checkboxes> - renders a set of checkboxes which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" }, onChange }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]);
    expect(onChange).toHaveBeenLastCalledWith("x", "a");
});
test("<SelectField checkboxes> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", label: "y", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("label")).toHaveLength(3);
    expect(react_1.screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[1].textContent).toBe("a");
});
test("<SelectField> - renders a select", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
});
test("<SelectField> - renders a select with correct disabled state", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", disabled: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]).toBeDisabled();
});
test("<SelectField> - renders a select with correct id (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", id: "y" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(react_1.screen.getByTestId("select-inputs-field").getAttribute("id")).toBe("y");
});
test("<SelectField> - renders a select with correct name", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
});
test("<SelectField> - renders a select with correct options", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[1].textContent).toBe("a");
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2].textContent).toBe("b");
});
test("<SelectField> - renders a select with correct options (transform)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", transform: (x) => x.toUpperCase() }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[1].textContent).toBe("A");
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2].textContent).toBe("B");
});
test("<SelectField> - renders a select with correct options (numbers)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x" }), { x: { type: String, allowedValues: [1, 2] } }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[1].textContent).toBe("1");
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2].textContent).toBe("2");
});
test("<SelectField> - renders a select with correct placeholder (implicit)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", placeholder: "y" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("span")[0].textContent).toBe("y");
    expect(react_1.screen.getByTestId("select-inputs-field").getAttribute("value")).toBe(null);
});
test("<SelectField> - renders a select with correct value (default)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(react_1.screen.getByTestId("select-inputs-field").getAttribute("value")).toBe(null);
});
test("<SelectField> - renders a select with correct value (model)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x" }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" } }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(react_1.screen.getByTestId("select-inputs-field").textContent).toBe("b");
});
test("<SelectField> - renders a select with correct value (specified)", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", value: "b" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("span")[0].textContent).toBe("b");
});
test("<SelectField> - renders a select which correctly reacts on change", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x" }), { x: { type: String, allowedValues: ["a", "b"] } }, { onChange }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2]);
    expect(onChange).toHaveBeenLastCalledWith("x", "b");
});
test("<SelectField> - renders a select which correctly reacts on change (array)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", value: undefined }), {
        x: { type: Array },
        "x.$": { type: String, allowedValues: ["a", "b"] },
    }, { onChange }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2]);
    expect(onChange).toHaveBeenLastCalledWith("x", ["b"]);
});
test("<SelectField> - renders a select which correctly reacts on change (placeholder)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x", placeholder: "test" }), { x: { type: String, allowedValues: ["a", "b"] } }, { onChange }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(4);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[1]);
    expect(onChange).toHaveBeenCalled();
});
test("<SelectField> - renders a select which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, name: "x" }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" }, onChange }));
    expect(react_1.screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    react_1.fireEvent.click(react_1.screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2]);
    expect(onChange).toHaveBeenLastCalledWith("x", "b");
});
test("<SelectField> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, required: false, name: "x", label: "y" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(1);
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y");
});
test("<SelectField> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, required: true, name: "x", label: "y" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(react_1.screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(1);
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
});
test("<SelectField> - renders a number label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SelectField, { onToggle: () => { }, required: true, name: "x", label: 1 }), {
        x: { type: Number, allowedValues: [1, 2] },
    }));
    expect(react_1.screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(1);
    expect(react_1.screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("1 *");
});
//# sourceMappingURL=SelectField.test.js.map