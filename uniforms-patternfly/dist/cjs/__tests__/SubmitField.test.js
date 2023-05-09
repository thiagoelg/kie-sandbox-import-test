"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
const react_1 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
test("<SubmitField> - renders", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SubmitField, {})));
    expect(react_1.screen.getByTestId("submit-field")).toBeInTheDocument();
});
test("<SubmitField> - renders disabled if error", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SubmitField, {}), undefined, { error: {} }));
    expect(react_1.screen.getByTestId("submit-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("submit-field")).toBeDisabled();
});
test("<SubmitField> - renders enabled if error and enabled", () => {
    (0, react_1.render)((0, test_utils_1.usingUniformsContext)((0, jsx_runtime_1.jsx)(__1.SubmitField, { disabled: false }), undefined, { error: {} }));
    expect(react_1.screen.getByTestId("submit-field")).toBeInTheDocument();
    expect(react_1.screen.getByTestId("submit-field")).toBeEnabled();
});
//# sourceMappingURL=SubmitField.test.js.map