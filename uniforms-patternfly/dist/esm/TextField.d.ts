import * as React from "react";
import { Ref } from "react";
import { TextInputProps } from "@patternfly/react-core/dist/js/components/TextInput";
export declare type TextFieldProps = {
    id: string;
    decimal?: boolean;
    inputRef?: Ref<HTMLInputElement>;
    onChange: (value?: string) => void;
    value?: string;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    helperText?: string;
    field?: {
        format: string;
    };
} & Omit<TextInputProps, "isDisabled">;
declare const _default: import("uniforms").ConnectedField<{
    id: string;
    decimal?: boolean | undefined;
    inputRef?: React.Ref<HTMLInputElement> | undefined;
    onChange: (value?: string | undefined) => void;
    value?: string | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    errorMessage?: string | undefined;
    helperText?: string | undefined;
    field?: {
        format: string;
    } | undefined;
} & Omit<TextInputProps, "isDisabled">, string | undefined>;
export default _default;
//# sourceMappingURL=TextField.d.ts.map