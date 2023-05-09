"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usingUniformsContext = exports.createSimpleSchema = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const uniforms_1 = require("uniforms");
const simpl_schema_1 = __importDefault(require("simpl-schema"));
const uniforms_bridge_simple_schema_2_1 = require("uniforms-bridge-simple-schema-2");
const randomId = (0, uniforms_1.randomIds)();
function createSimpleSchema(schema = {}) {
    return new uniforms_bridge_simple_schema_2_1.SimpleSchema2Bridge(new simpl_schema_1.default(schema));
}
exports.createSimpleSchema = createSimpleSchema;
function usingUniformsContext(children, schema = {}, ctx) {
    const partialCtx = Object.assign(Object.assign({ changed: false, changedMap: {}, error: null, model: {}, name: [], onChange: () => { }, onSubmit: () => { }, randomId, submitting: false, validating: false, submitted: false, schema: createSimpleSchema(schema), formRef: new uniforms_1.BaseForm({
            autosave: false,
            autosaveDelay: 0,
            error: false,
            label: true,
            model: {},
            noValidate: false,
            onSubmit: (event) => { },
            schema: createSimpleSchema(schema),
        }) }, ctx), { state: {
            disabled: false,
            label: false,
            placeholder: false,
            showInlineError: false,
            readOnly: false,
        } });
    return (0, jsx_runtime_1.jsx)(uniforms_1.context.Provider, Object.assign({ value: partialCtx }, { children: children }));
}
exports.usingUniformsContext = usingUniformsContext;
//# sourceMappingURL=test-utils.js.map