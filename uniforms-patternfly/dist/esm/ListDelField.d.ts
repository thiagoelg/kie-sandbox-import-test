import * as React from "react";
import { ReactNode } from "react";
import { ButtonProps } from "@patternfly/react-core/dist/js/components/Button";
import { FieldProps } from "uniforms";
export declare type ListDelFieldProps = FieldProps<unknown, ButtonProps, {
    icon?: ReactNode;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<unknown> & {
    icon?: React.ReactNode;
} & Omit<ButtonProps, "icon" | keyof import("uniforms").GuaranteedProps<unknown>>, unknown>;
export default _default;
//# sourceMappingURL=ListDelField.d.ts.map