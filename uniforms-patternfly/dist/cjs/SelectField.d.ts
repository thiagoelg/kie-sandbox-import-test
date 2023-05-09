import { SelectDirection, SelectProps } from "@patternfly/react-core/dist/js/components/Select";
import { FieldProps } from "uniforms";
import { CheckboxProps } from "@patternfly/react-core/dist/js/components/Checkbox";
import { RadioProps } from "@patternfly/react-core/dist/js/components/Radio";
export declare type SelectCheckboxProps = FieldProps<string | string[], CheckboxProps | RadioProps, {
    onChange: (value?: string | string[]) => void;
    transform?: (value?: string) => string;
    allowedValues: string[];
    id?: string;
    fieldType?: typeof Array;
    disabled?: boolean;
}>;
export declare type SelectInputProps = FieldProps<string | string[], SelectProps, {
    checkboxes?: boolean;
    required?: boolean;
    fieldType?: typeof Array;
    onChange: (value?: string | string[] | number | number[]) => void;
    placeholder?: string;
    allowedValues?: (string | number)[];
    disabled?: boolean;
    error?: boolean;
    transform?: (value?: string | number) => string | number;
    direction?: SelectDirection;
    menuAppendTo?: HTMLElement;
}>;
declare type SelectFieldProps = SelectCheckboxProps | SelectInputProps;
declare const _default: import("uniforms").ConnectedField<SelectFieldProps, string | string[] | undefined>;
export default _default;
//# sourceMappingURL=SelectField.d.ts.map