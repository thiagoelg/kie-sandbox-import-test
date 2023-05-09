import * as React from "react";
import { Ref } from "react";
import { TextInputProps } from "@patternfly/react-core/dist/js/components/TextInput";
export declare type NumFieldProps = {
    id: string;
    decimal?: boolean;
    inputRef?: Ref<HTMLInputElement>;
    onChange: (value?: number) => void;
    disabled?: boolean;
    value?: number;
    error?: boolean;
} & Omit<TextInputProps, "isDisabled">;
declare const _default: import("uniforms").ConnectedField<{
    id: string;
    decimal?: boolean | undefined;
    inputRef?: React.Ref<HTMLInputElement> | undefined;
    onChange: (value?: number | undefined) => void;
    disabled?: boolean | undefined;
    value?: number | undefined;
    error?: boolean | undefined;
} & Omit<TextInputProps, "isDisabled">, number | undefined>;
export default _default;
//# sourceMappingURL=NumField.d.ts.map