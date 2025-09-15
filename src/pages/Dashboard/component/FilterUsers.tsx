import { 
    ButtonGroup,
    Button,
    FormLayout,
    Popover,
    Select,
    TextField
} from "@shopify/polaris"

import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import toCamelCase from "./toCamelCase";
import { setFilterCategory, setValue, clearFilters, setActive } from "@/redux/slice/filterParams.slice";

interface Params {
    category: string;
    value: string;
    active: boolean
}

interface Props {
    filterParams: Params;
    currParams: Params;
    setCurrParams: (param: Params) => void
}

export default function FilterUsers({...props}: Props) {    
    const [popoverFilterActive, setPopoverFilterActive] = useState(false);
    const dispatch = useDispatch();

    const toggleFilterPopoverActive = useCallback(
        () => setPopoverFilterActive((popoverActive) => !popoverActive),
        [],
    );

    const handleValueChange = useCallback(
        (value: string) => props.setCurrParams({...props.currParams, value: value}),
        [props.currParams]
    )

    const handleCategoryChange = useCallback(
        (value: string) => props.setCurrParams({...props.currParams, category: value}),
        [props.currParams]
    )
    
    const filterActivator = (
        <>
            <Button onClick={toggleFilterPopoverActive} disclosure> Filters</Button>
        </>
    )

    const onFilter = () => {
        dispatch(setFilterCategory(toCamelCase(props.currParams.category)))
        dispatch(setValue(props.currParams.value))
        dispatch(setActive())
    }

    const handleClearAll = () => {
        dispatch(clearFilters())
        props.setCurrParams({
            category: 'First name',
            value: '',
            active: false
        })
    }

    return (
        <Popover
            active={popoverFilterActive}
            activator={filterActivator}
            onClose={toggleFilterPopoverActive}
            ariaHaspopup={false}
            sectioned
        >
            <FormLayout>
                <Select 
                    label="Category" 
                    options={['First name', 'Last name', 'Age']}
                    value={props.currParams.category}
                    onChange={handleCategoryChange}
                />
                <TextField
                    label="Value"
                    value={props.currParams.value}
                    onChange={handleValueChange}
                    autoComplete="off"
                />
                <ButtonGroup>
                    <Button size="slim" onClick={onFilter}>Filter</Button>
                    <Button size="slim" onClick={handleClearAll}>Clear</Button>
                </ButtonGroup>
            </FormLayout>
        </Popover>
    )
}