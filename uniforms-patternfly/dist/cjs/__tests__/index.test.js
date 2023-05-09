"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const unstyled = __importStar(require(".."));
it("exports everything", () => {
    expect(unstyled).toEqual({
        AutoFields: expect.any(Function),
        AutoField: expect.any(Function),
        AutoForm: expect.any(Function),
        BaseForm: expect.any(Function),
        BoolField: expect.any(Function),
        DateField: expect.any(Function),
        ErrorField: expect.any(Function),
        ErrorsField: expect.any(Function),
        HiddenField: expect.any(Function),
        ListAddField: expect.any(Function),
        ListDelField: expect.any(Function),
        ListField: expect.any(Function),
        ListItemField: expect.any(Function),
        LongTextField: expect.any(Function),
        NestField: expect.any(Function),
        NumField: expect.any(Function),
        QuickForm: expect.any(Function),
        RadioField: expect.any(Function),
        SelectField: expect.any(Function),
        SubmitField: expect.any(Function),
        TextField: expect.any(Function),
        ValidatedForm: expect.any(Function),
        ValidatedQuickForm: expect.any(Function),
    });
});
//# sourceMappingURL=index.test.js.map