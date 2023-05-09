import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from "react";
import { Select, SelectOption, SelectVariant, } from "@patternfly/react-core/dist/js/components/Select";
import wrapField from "./wrapField";
function isSelectOptionObject(toBeDetermined) {
    return typeof toBeDetermined === "object" && !Array.isArray(toBeDetermined) && toBeDetermined !== null;
}
function isSelectOptionString(toBeDetermined) {
    return (toBeDetermined.length > 0 && typeof toBeDetermined[0] === "string") || toBeDetermined.length === 0;
}
function SelectInputsField(props) {
    const [expanded, setExpanded] = useState(false);
    const [selected, setSelected] = useState(() => {
        if (!props.value) {
            return [];
        }
        if (Array.isArray(props.value)) {
            return [...props.value];
        }
        return props.value;
    });
    const parseInput = useCallback((selection, fieldType) => {
        const parsedSelection = isSelectOptionObject(selection) ? selection.toString() : selection;
        if (fieldType !== Array) {
            return parsedSelection !== "" ? parsedSelection : "";
        }
        if (Array.isArray(selected)) {
            if (isSelectOptionString(selected) && typeof parsedSelection === "string") {
                if (selected.includes(parsedSelection)) {
                    return selected.filter((s) => s !== parsedSelection);
                }
                return [parsedSelection, ...selected];
            }
            else if (!isSelectOptionString(selected) && typeof parsedSelection === "number") {
                if (selected.includes(parsedSelection)) {
                    return selected.filter((s) => s !== parsedSelection);
                }
                return [parsedSelection, ...selected];
            }
        }
        return [];
    }, [selected]);
    const handleSelect = useCallback((event, selection) => {
        if (selection === props.placeholder) {
            props.onChange(undefined);
            setSelected([]);
        }
        else {
            const items = parseInput(selection, props.fieldType);
            props.onChange(items);
            setSelected(items);
        }
        setExpanded(false);
    }, [parseInput, props]);
    const selectOptions = useMemo(() => {
        var _a;
        const options = [];
        if (props.placeholder) {
            options.push(_jsx(SelectOption, { isPlaceholder: true, value: props.placeholder }, `placeholder ${props.allowedValues.length}`));
        }
        (_a = props.allowedValues) === null || _a === void 0 ? void 0 : _a.forEach((value) => options.push(_jsx(SelectOption, Object.assign({ value: value }, { children: props.transform ? props.transform(value) : value }), value)));
        return options;
    }, [props]);
    return wrapField(props, _jsx("div", Object.assign({ "data-testid": "select-inputs-field", id: props.id }, { children: _jsx(Select, Object.assign({ isDisabled: props.disabled, id: props.id, variant: props.fieldType === Array ? SelectVariant.typeaheadMulti : SelectVariant.single, name: props.name, placeholderText: props.placeholder, isOpen: expanded, selections: selected, onToggle: (isExpanded) => setExpanded(isExpanded), onSelect: handleSelect, value: props.value || (props.fieldType === Array ? [] : undefined), menuAppendTo: props.menuAppendTo, direction: props.direction }, { children: selectOptions })) })));
}
export default SelectInputsField;
//# sourceMappingURL=SelectInputsField.js.map