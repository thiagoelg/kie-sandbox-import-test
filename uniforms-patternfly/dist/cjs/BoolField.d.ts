import * as React from "react";
import { Checkbox, CheckboxProps } from "@patternfly/react-core/dist/js/components/Checkbox";
import { Switch, SwitchProps } from "@patternfly/react-core/dist/js/components/Switch";
import { FieldProps } from "uniforms";
declare enum ComponentType {
    checkbox = "checkbox",
    switch = "switch"
}
export declare type BoolFieldProps = FieldProps<boolean, CheckboxProps & SwitchProps, {
    appearance?: ComponentType;
    inputRef?: React.RefObject<Switch | Checkbox> & React.RefObject<HTMLInputElement>;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<boolean> & {
    appearance?: ComponentType | undefined;
    inputRef?: (React.RefObject<Switch | Checkbox> & React.RefObject<HTMLInputElement>) | undefined;
} & Omit<CheckboxProps & SwitchProps, keyof import("uniforms").GuaranteedProps<boolean> | "appearance" | "inputRef">, boolean | undefined>;
export default _default;
//# sourceMappingURL=BoolField.d.ts.map