import * as React from "react";
import { FormGroupProps } from "@patternfly/react-core/dist/js/components/Form";
declare module "uniforms" {
    interface FilterDOMProps {
        decimal: never;
        minCount: never;
        autoValue: never;
        isDisabled: never;
        checkboxes: never;
        exclusiveMaximum: never;
        exclusiveMinimum: never;
        menuAppendTo: never;
    }
}
declare type WrapperProps = {
    id: string;
    error?: boolean;
    errorMessage?: string;
    help?: string;
    showInlineError?: boolean;
} & Omit<FormGroupProps, "onChange" | "fieldId">;
export default function wrapField({ id, label, type, disabled, error, errorMessage, showInlineError, help, required, ...props }: WrapperProps, children: React.ReactNode): JSX.Element;
export {};
//# sourceMappingURL=wrapField.d.ts.map