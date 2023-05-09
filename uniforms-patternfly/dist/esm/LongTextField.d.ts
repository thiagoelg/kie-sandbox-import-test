import * as React from "react";
import { HTMLFieldProps } from "uniforms";
export declare type LongTextFieldProps = HTMLFieldProps<string, HTMLDivElement, {
    inputRef?: React.RefObject<HTMLTextAreaElement>;
    onChange: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
    prefix?: string;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<string> & {
    inputRef?: React.RefObject<HTMLTextAreaElement> | undefined;
    onChange: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string | undefined;
    prefix?: string | undefined;
} & Omit<React.HTMLProps<HTMLDivElement>, "prefix" | "inputRef" | keyof import("uniforms").GuaranteedProps<Value>>, string | undefined>;
export default _default;
//# sourceMappingURL=LongTextField.d.ts.map