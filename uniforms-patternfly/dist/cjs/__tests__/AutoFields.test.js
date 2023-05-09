"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const test_utils_1 = require("./test-utils");
const react_1 = require("@testing-library/react");
test("<AutoFields> - works", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoFields, {}), { x: { type: String } }));
    expect(react_1.screen.getByTestId("text-field")).toBeInTheDocument();
});
test("<AutoFields> - render all fields by default", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoFields, {}), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(react_1.screen.getAllByTestId("text-field")).toHaveLength(3);
});
test("<AutoFields> - renders only specified fields", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoFields, { fields: ["x", "y"] }), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(react_1.screen.getAllByTestId("text-field")).toHaveLength(2);
    expect(react_1.screen.queryByLabelText("z")).toBeNull();
});
test("<AutoFields> - does not render ommited fields", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoFields, { omitFields: ["x"] }), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(react_1.screen.getAllByTestId("text-field")).toHaveLength(2);
    expect(react_1.screen.queryByLabelText("x")).toBeNull();
});
test("<AutoFields> - works with custom component", () => {
    const Component = jest.fn(() => null);
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoFields, { autoField: Component }), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(Component).toHaveBeenCalledTimes(3);
});
test("<AutoFields> - wraps fields in specified element", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoFields, { element: "section" }), {
        x: { type: String },
        y: { type: String },
        z: { type: String },
    }));
    expect(react_1.screen.getAllByTestId("text-field")).toHaveLength(3);
});
//# sourceMappingURL=AutoFields.test.js.map