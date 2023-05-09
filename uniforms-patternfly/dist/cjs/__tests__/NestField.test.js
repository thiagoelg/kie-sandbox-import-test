"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<NestField> - renders an <AutoField> for each field", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NestField, { name: "x" }), {
        x: { type: Object },
        "x.a": { type: String },
        "x.b": { type: Number },
    }));
    expect(react_1.screen.getByTestId("nest-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("nest-field").getElementsByTagName("input")).toHaveLength(2);
    expect(react_1.screen.getByTestId("nest-field").getElementsByTagName("input")[0].getAttribute("name")).toBe("x.a");
    expect(react_1.screen.getByTestId("nest-field").getElementsByTagName("input")[1].getAttribute("name")).toBe("x.b");
});
test("<NestField> - renders custom content if given", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NestField, Object.assign({ name: "x" }, { children: (0, jsx_runtime_1.jsx)("article", { "data-test": "content" }) })), {
        x: { type: Object },
        "x.a": { type: String },
        "x.b": { type: Number },
    }));
    expect(react_1.screen.getByTestId("nest-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("nest-field").getElementsByTagName("article")).toHaveLength(1);
    expect(react_1.screen.getByTestId("nest-field").getElementsByTagName("article")[0].getAttribute("data-test")).toBe("content");
});
test("<NestField> - renders a label", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.NestField, { name: "x", label: "y" }), {
        x: { type: Object },
        "x.a": { type: String },
        "x.b": { type: Number },
    }));
    expect(react_1.screen.getByTestId("nest-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("nest-field").getElementsByTagName("label")).toHaveLength(3);
    expect(react_1.screen.getByTestId("nest-field").getElementsByTagName("label")[0].textContent).toBe("y");
    expect(react_1.screen.getByTestId("nest-field").getElementsByTagName("label")[1].textContent).toBe("A *");
    expect(react_1.screen.getByTestId("nest-field").getElementsByTagName("label")[2].textContent).toBe("B *");
});
//# sourceMappingURL=NestField.test.js.map