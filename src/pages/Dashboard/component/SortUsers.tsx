import { 
    ButtonGroup,
    Button,
    FormLayout,
    Popover,
    Select,
} from "@shopify/polaris"

import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import toCamelCase from "./toCamelCase";
import { setSortCategory, setOrder, clearSorts } from "@/redux/slice/sortParams.slice";
// import { DEFAULT, sort } from "@/redux/slice/user.slice";

interface Params {
    category: string,
    order: string,
}

interface Props {
    sortParams: Params,
    currParams: Params,
    setCurrParams: (params: Params) => void
}

export default function SortUsers({...props}: Props) {
    const [popoverSortActive, setPopoverSortActive] = useState(false);
    const dispatch = useDispatch()

    const toggleSortPopoverActive = useCallback(
        () => setPopoverSortActive((popoverActive) => !popoverActive),
        [],
    );

    const handleOrderChange = useCallback(
        (value: string) => {
            if (value === 'Ascending') {
                props.setCurrParams({...props.currParams, order: 'asc'})
            } else props.setCurrParams({...props.currParams, order: 'desc'})
        },
        [],
    )

    const handleCategoryChange = useCallback(
        (value: string) => props.setCurrParams({...props.currParams, category: value}),
        []
    )

    const filterActivator = (
        <>
            <Button onClick={toggleSortPopoverActive} disclosure>Sort</Button>
        </>
    )

    const onSort = () => {
        dispatch(setSortCategory(toCamelCase(props.currParams.category)))
        dispatch(setOrder(props.currParams.order))
    }

    const handleClearAll = () => {
        dispatch(clearSorts())
        props.setCurrParams({...props.currParams, category: 'First name'})
        props.setCurrParams({...props.currParams, order: 'asc'})
    } 

    return (
        <Popover
            active={popoverSortActive}
            activator={filterActivator}
            onClose={toggleSortPopoverActive}
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
            <Select
                label="Order"
                options={['Ascending', 'Descending']}
                value={(props.currParams.order === 'asc') ? 'Ascending' : 'Descending'}
                onChange={handleOrderChange}
            />
            <ButtonGroup>
                <Button size="slim" onClick={onSort}>Sort</Button>
                <Button size="slim" onClick={handleClearAll}>Clear</Button>
            </ButtonGroup>
            </FormLayout>
        </Popover>
    )
}