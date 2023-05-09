import { HTMLProps, Ref } from "react";
export declare type HiddenFieldProps = {
    inputRef?: Ref<HTMLInputElement>;
    name: string;
    noDOM?: boolean;
    value?: any;
} & HTMLProps<HTMLInputElement>;
export default function HiddenField({ value, ...rawProps }: HiddenFieldProps): JSX.Element | null;
//# sourceMappingURL=HiddenField.d.ts.map