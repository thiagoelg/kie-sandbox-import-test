"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Select_1 = require("@patternfly/react-core/dist/js/components/Select");
const wrapField_1 = __importDefault(require("./wrapField"));
function isSelectOptionObject(toBeDetermined) {
    return typeof toBeDetermined === "object" && !Array.isArray(toBeDetermined) && toBeDetermined !== null;
}
function isSelectOptionString(toBeDetermined) {
    return (toBeDetermined.length > 0 && typeof toBeDetermined[0] === "string") || toBeDetermined.length === 0;
}
function SelectInputsField(props) {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const [selected, setSelected] = (0, react_1.useState)(() => {
        if (!props.value) {
            return [];
        }
        if (Array.isArray(props.value)) {
            return [...props.value];
        }
        return props.value;
    });
    const parseInput = (0, react_1.useCallback)((selection, fieldType) => {
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
    const handleSelect = (0, react_1.useCallback)((event, selection) => {
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
    const selectOptions = (0, react_1.useMemo)(() => {
        var _a;
        const options = [];
        if (props.placeholder) {
            options.push((0, jsx_runtime_1.jsx)(Select_1.SelectOption, { isPlaceholder: true, value: props.placeholder }, `placeholder ${props.allowedValues.length}`));
        }
        (_a = props.allowedValues) === null || _a === void 0 ? void 0 : _a.forEach((value) => options.push((0, jsx_runtime_1.jsx)(Select_1.SelectOption, Object.assign({ value: value }, { children: props.transform ? props.transform(value) : value }), value)));
        return options;
    }, [props]);
    return (0, wrapField_1.default)(props, (0, jsx_runtime_1.jsx)("div", Object.assign({ "data-testid": "select-inputs-field", id: props.id }, { children: (0, jsx_runtime_1.jsx)(Select_1.Select, Object.assign({ isDisabled: props.disabled, id: props.id, variant: props.fieldType === Array ? Select_1.SelectVariant.typeaheadMulti : Select_1.SelectVariant.single, name: props.name, placeholderText: props.placeholder, isOpen: expanded, selections: selected, onToggle: (isExpanded) => setExpanded(isExpanded), onSelect: handleSelect, value: props.value || (props.fieldType === Array ? [] : undefined), menuAppendTo: props.menuAppendTo, direction: props.direction }, { children: selectOptions })) })));
}
exports.default = SelectInputsField;
//# sourceMappingURL=SelectInputsField.js.map