import * as React from "react";
import { HTMLFieldProps } from "uniforms";
export declare type NestFieldProps = HTMLFieldProps<object, HTMLDivElement, {
    helperText?: string;
    itemProps?: object;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<object> & {
    helperText?: string | undefined;
    itemProps?: object | undefined;
} & Omit<React.HTMLProps<HTMLDivElement>, "helperText" | keyof import("uniforms").GuaranteedProps<Value> | "itemProps">, object | undefined>;
export default _default;
//# sourceMappingURL=NestField.d.ts.map