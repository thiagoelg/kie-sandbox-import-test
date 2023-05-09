import * as React from "react";
import { ButtonProps } from "@patternfly/react-core/dist/js/components/Button";
import { Override } from "uniforms";
export declare type SubmitFieldProps = Override<ButtonProps, {
    inputRef?: React.RefObject<HTMLButtonElement>;
}>;
declare function SubmitField({ disabled, inputRef, value, ...props }: SubmitFieldProps): JSX.Element;
declare namespace SubmitField {
    var defaultProps: {
        value: string;
    };
}
export default SubmitField;
//# sourceMappingURL=SubmitField.d.ts.map