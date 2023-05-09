"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const test_utils_1 = require("./test-utils");
const react_1 = require("@testing-library/react");
test("<AutoForm> - works", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.AutoForm, { schema: (0, test_utils_1.createSimpleSchema)() })));
    expect(react_1.screen.getByTestId("base-form")).toBeInTheDocument();
});
//# sourceMappingURL=AutoForm.test.js.map