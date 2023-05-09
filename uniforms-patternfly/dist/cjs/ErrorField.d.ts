import * as React from "react";
import { HTMLProps } from "react";
import { Override } from "uniforms";
export declare type ErrorFieldProps = Override<HTMLProps<HTMLDivElement>, {
    error?: boolean;
    errorMessage?: string;
}>;
declare const _default: import("uniforms").ConnectedField<{
    error?: boolean | undefined;
    errorMessage?: string | undefined;
} & Omit<React.HTMLProps<HTMLDivElement>, "error" | "errorMessage">, string | number | readonly string[] | undefined>;
export default _default;
//# sourceMappingURL=ErrorField.d.ts.map