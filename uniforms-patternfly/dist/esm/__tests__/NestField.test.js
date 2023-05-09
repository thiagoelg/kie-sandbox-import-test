import { jsx as _jsx } from "react/jsx-runtime";
import { NestField } from "..";
import { render, screen } from "@testing-library/react";
import { usingUniformsContext } from "./test-utils";
test("<NestField> - renders an <AutoField> for each field", () => {
    render(usingUniformsContext(_jsx(NestField, { name: "x" }), {
        x: { type: Object },
        "x.a": { type: String },
        "x.b": { type: Number },
    }));
    expect(screen.getByTestId("nest-field")).toBeInTheDocument();
    expect(screen.getByTestId("nest-field").getElementsByTagName("input")).toHaveLength(2);
    expect(screen.getByTestId("nest-field").getElementsByTagName("input")[0].getAttribute("name")).toBe("x.a");
    expect(screen.getByTestId("nest-field").getElementsByTagName("input")[1].getAttribute("name")).toBe("x.b");
});
test("<NestField> - renders custom content if given", () => {
    render(usingUniformsContext(_jsx(NestField, Object.assign({ name: "x" }, { children: _jsx("article", { "data-test": "content" }) })), {
        x: { type: Object },
        "x.a": { type: String },
        "x.b": { type: Number },
    }));
    expect(screen.getByTestId("nest-field")).toBeInTheDocument();
    expect(screen.getByTestId("nest-field").getElementsByTagName("article")).toHaveLength(1);
    expect(screen.getByTestId("nest-field").getElementsByTagName("article")[0].getAttribute("data-test")).toBe("content");
});
test("<NestField> - renders a label", () => {
    render(usingUniformsContext(_jsx(NestField, { name: "x", label: "y" }), {
        x: { type: Object },
        "x.a": { type: String },
        "x.b": { type: Number },
    }));
    expect(screen.getByTestId("nest-field")).toBeInTheDocument();
    expect(screen.getByTestId("nest-field").getElementsByTagName("label")).toHaveLength(3);
    expect(screen.getByTestId("nest-field").getElementsByTagName("label")[0].textContent).toBe("y");
    expect(screen.getByTestId("nest-field").getElementsByTagName("label")[1].textContent).toBe("A *");
    expect(screen.getByTestId("nest-field").getElementsByTagName("label")[2].textContent).toBe("B *");
});
//# sourceMappingURL=NestField.test.js.map