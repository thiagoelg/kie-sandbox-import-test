import { jsx as _jsx } from "react/jsx-runtime";
import { BaseForm, context, randomIds } from "uniforms";
import SimpleSchema from "simpl-schema";
import { SimpleSchema2Bridge } from "uniforms-bridge-simple-schema-2";
const randomId = randomIds();
export function createSimpleSchema(schema = {}) {
    return new SimpleSchema2Bridge(new SimpleSchema(schema));
}
export function usingUniformsContext(children, schema = {}, ctx) {
    const partialCtx = Object.assign(Object.assign({ changed: false, changedMap: {}, error: null, model: {}, name: [], onChange: () => { }, onSubmit: () => { }, randomId, submitting: false, validating: false, submitted: false, schema: createSimpleSchema(schema), formRef: new BaseForm({
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
    return _jsx(context.Provider, Object.assign({ value: partialCtx }, { children: children }));
}
//# sourceMappingURL=test-utils.js.map