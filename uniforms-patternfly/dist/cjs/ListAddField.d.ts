import { ButtonProps } from "@patternfly/react-core/dist/js/components/Button";
import { FieldProps } from "uniforms";
export declare type ListAddFieldProps = FieldProps<unknown, ButtonProps, {
    initialCount?: number;
    name: string;
    disabled?: boolean;
    value?: unknown;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<unknown> & {
    initialCount?: number | undefined;
    name: string;
    disabled?: boolean | undefined;
    value?: unknown;
} & Omit<ButtonProps, "initialCount" | keyof import("uniforms").GuaranteedProps<unknown>>, unknown>;
export default _default;
//# sourceMappingURL=ListAddField.d.ts.map