import * as React from "react";
import { ReactNode } from "react";
import { HTMLFieldProps } from "uniforms";
export declare type ListFieldProps = HTMLFieldProps<unknown[], HTMLDivElement, {
    children?: ReactNode;
    info?: string;
    error?: boolean;
    initialCount?: number;
    itemProps?: object;
    showInlineError?: boolean;
}>;
declare module "uniforms" {
    interface FilterDOMProps {
        wrapperCol: never;
        labelCol: never;
    }
}
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<unknown[]> & {
    children?: React.ReactNode;
    info?: string | undefined;
    error?: boolean | undefined;
    initialCount?: number | undefined;
    itemProps?: object | undefined;
    showInlineError?: boolean | undefined;
} & Omit<React.HTMLProps<HTMLDivElement>, "initialCount" | "children" | keyof import("uniforms").GuaranteedProps<Value> | "info" | "itemProps">, unknown[] | undefined>;
export default _default;
//# sourceMappingURL=ListField.d.ts.map