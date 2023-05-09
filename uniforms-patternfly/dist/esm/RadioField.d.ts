import * as React from "react";
import { HTMLFieldProps } from "uniforms";
export declare type RadioFieldProps = HTMLFieldProps<string, HTMLDivElement, {
    transform?: (string?: string) => string;
    allowedValues: string[];
    onChange: (value: string) => void;
    value?: string;
    disabled?: boolean;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<string> & {
    transform?: ((string?: string | undefined) => string) | undefined;
    allowedValues: string[];
    onChange: (value: string) => void;
    value?: string | undefined;
    disabled?: boolean | undefined;
} & Omit<React.HTMLProps<HTMLDivElement>, "allowedValues" | "transform" | keyof import("uniforms").GuaranteedProps<Value>>, string | undefined>;
export default _default;
//# sourceMappingURL=RadioField.d.ts.map