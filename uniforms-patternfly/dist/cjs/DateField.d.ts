import * as React from "react";
import { FieldProps } from "uniforms";
import { TextInputProps } from "@patternfly/react-core/dist/js/components/TextInput";
export declare type DateFieldProps = FieldProps<Date, TextInputProps, {
    inputRef?: React.RefObject<HTMLInputElement>;
    labelProps?: object;
    max?: Date;
    min?: Date;
    type?: "date" | "datetime-local";
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<Date> & {
    inputRef?: React.RefObject<HTMLInputElement> | undefined;
    labelProps?: object | undefined;
    max?: Date | undefined;
    min?: Date | undefined;
    type?: "date" | "datetime-local" | undefined;
} & Omit<TextInputProps, "max" | "min" | "type" | "inputRef" | keyof import("uniforms").GuaranteedProps<Date> | "labelProps">, Date | undefined>;
export default _default;
//# sourceMappingURL=DateField.d.ts.map