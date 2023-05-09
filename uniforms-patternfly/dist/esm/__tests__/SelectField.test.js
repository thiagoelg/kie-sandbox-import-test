import { jsx as _jsx } from "react/jsx-runtime";
import { SelectField } from "..";
import { render, screen, fireEvent } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<SelectField checkboxes> - renders a set of checkboxes", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct disabled state", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", disabled: true, checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]).toBeDisabled();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]).toBeDisabled();
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct id (inherited)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0].getAttribute("id")).toBeTruthy();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1].getAttribute("id")).toBeTruthy();
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct id (specified)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", id: "y", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0].getAttribute("id")).toBe("y-a");
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1].getAttribute("id")).toBe("y-b");
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct name", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0].getAttribute("name")).toBe("x");
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1].getAttribute("name")).toBe("x");
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct options", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("label")).toHaveLength(2);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[0].textContent).toBe("a");
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[1].textContent).toBe("b");
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct options (transform)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", transform: (x) => x.toUpperCase(), checkboxes: true }), { x: { type: String, allowedValues: ["a", "b"] } }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("label")).toHaveLength(2);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[0].textContent).toBe("A");
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[1].textContent).toBe("B");
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct value (default)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]).not.toBeChecked();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]).not.toBeChecked();
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct value (model)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" } }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]).not.toBeChecked();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]).toBeChecked();
});
test("<SelectField checkboxes> - renders a set of checkboxes with correct value (specified)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", value: "b", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]).not.toBeChecked();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]).toBeChecked();
});
test("<SelectField checkboxes> - renders a set of checkboxes which correctly reacts on change", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), { x: { type: String, allowedValues: ["a", "b"] } }, { onChange }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    fireEvent.click(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]);
    expect(onChange).toHaveBeenLastCalledWith("x", "b");
});
test("<SelectField checkboxes> - renders a set of checkboxes which correctly reacts on change (array check)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), {
        x: { type: Array },
        "x.$": { type: String, allowedValues: ["a", "b"] },
    }, { onChange }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    fireEvent.click(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]);
    expect(onChange).toHaveBeenLastCalledWith("x", ["b"]);
});
test("<SelectField checkboxes> - renders a set of checkboxes which correctly reacts on change (array uncheck)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", value: ["b"], checkboxes: true }), {
        x: { type: Array },
        "x.$": { type: String, allowedValues: ["a", "b"] },
    }, { onChange }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    fireEvent.click(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[1]);
    expect(onChange).toHaveBeenLastCalledWith("x", []);
});
test("<SelectField checkboxes> - renders a set of checkboxes which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", checkboxes: true }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" }, onChange }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")).toHaveLength(2);
    fireEvent.click(screen.getByTestId("select-checkbox-field").getElementsByTagName("input")[0]);
    expect(onChange).toHaveBeenLastCalledWith("x", "a");
});
test("<SelectField checkboxes> - renders a label", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", label: "y", checkboxes: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-checkbox-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("label")).toHaveLength(3);
    expect(screen.getByTestId("select-checkbox-field").getElementsByTagName("label")[1].textContent).toBe("a");
});
test("<SelectField> - renders a select", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
});
test("<SelectField> - renders a select with correct disabled state", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", disabled: true }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]).toBeDisabled();
});
test("<SelectField> - renders a select with correct id (specified)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", id: "y" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(screen.getByTestId("select-inputs-field").getAttribute("id")).toBe("y");
});
test("<SelectField> - renders a select with correct name", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
});
test("<SelectField> - renders a select with correct options", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[1].textContent).toBe("a");
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2].textContent).toBe("b");
});
test("<SelectField> - renders a select with correct options (transform)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", transform: (x) => x.toUpperCase() }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[1].textContent).toBe("A");
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2].textContent).toBe("B");
});
test("<SelectField> - renders a select with correct options (numbers)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x" }), { x: { type: String, allowedValues: [1, 2] } }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[1].textContent).toBe("1");
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2].textContent).toBe("2");
});
test("<SelectField> - renders a select with correct placeholder (implicit)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", placeholder: "y" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("span")[0].textContent).toBe("y");
    expect(screen.getByTestId("select-inputs-field").getAttribute("value")).toBe(null);
});
test("<SelectField> - renders a select with correct value (default)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(screen.getByTestId("select-inputs-field").getAttribute("value")).toBe(null);
});
test("<SelectField> - renders a select with correct value (model)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x" }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" } }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(screen.getByTestId("select-inputs-field").textContent).toBe("b");
});
test("<SelectField> - renders a select with correct value (specified)", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", value: "b" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("span")[0].textContent).toBe("b");
});
test("<SelectField> - renders a select which correctly reacts on change", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x" }), { x: { type: String, allowedValues: ["a", "b"] } }, { onChange }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2]);
    expect(onChange).toHaveBeenLastCalledWith("x", "b");
});
test("<SelectField> - renders a select which correctly reacts on change (array)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", value: undefined }), {
        x: { type: Array },
        "x.$": { type: String, allowedValues: ["a", "b"] },
    }, { onChange }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2]);
    expect(onChange).toHaveBeenLastCalledWith("x", ["b"]);
});
test("<SelectField> - renders a select which correctly reacts on change (placeholder)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x", placeholder: "test" }), { x: { type: String, allowedValues: ["a", "b"] } }, { onChange }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(4);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[1]);
    expect(onChange).toHaveBeenCalled();
});
test("<SelectField> - renders a select which correctly reacts on change (same value)", () => {
    const onChange = jest.fn();
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, name: "x" }), { x: { type: String, allowedValues: ["a", "b"] } }, { model: { x: "b" }, onChange }));
    expect(screen.getByTestId("select-inputs-field")).toBeInTheDocument();
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(1);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[0]);
    expect(screen.getByTestId("select-inputs-field").getElementsByTagName("button")).toHaveLength(3);
    fireEvent.click(screen.getByTestId("select-inputs-field").getElementsByTagName("button")[2]);
    expect(onChange).toHaveBeenLastCalledWith("x", "b");
});
test("<SelectField> - renders a label", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, required: false, name: "x", label: "y" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(1);
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y");
});
test("<SelectField> - renders a label", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, required: true, name: "x", label: "y" }), {
        x: { type: String, allowedValues: ["a", "b"] },
    }));
    expect(screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(1);
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("y *");
});
test("<SelectField> - renders a number label", () => {
    render(usingUniformsContext(_jsx(SelectField, { onToggle: () => { }, required: true, name: "x", label: 1 }), {
        x: { type: Number, allowedValues: [1, 2] },
    }));
    expect(screen.getByTestId("wrapper-field")).toBeInTheDocument();
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")).toHaveLength(1);
    expect(screen.getByTestId("wrapper-field").getElementsByTagName("label")[0].textContent).toBe("1 *");
});
//# sourceMappingURL=SelectField.test.js.map