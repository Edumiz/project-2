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
    const [currCategory, setCurrCategory] = useState("First name")
    const [currOrder, setCurrOrder] = useState("asc")
    const dispatch = useDispatch()

    const toggleSortPopoverActive = useCallback(
        () => setPopoverSortActive((popoverActive) => !popoverActive),
        [],
    );

    const handleChange = useCallback(
        (value: string) => {
            if (value === 'Ascending') {
                setCurrOrder('asc')
            } else if (value === "Descending") {
                setCurrOrder('desc')
            } else {
                setCurrCategory(value)
            }
        },
        [],
    )

    const filterActivator = (
        <>
            <Button onClick={toggleSortPopoverActive} disclosure>Sort</Button>
        </>
    )

    const onSort = () => {
        dispatch(setSortCategory(toCamelCase(currCategory)))
        dispatch(setOrder(currOrder))
    }

    const handleClearAll = () => {
        dispatch(clearSorts())
        setCurrCategory("First name")
        setCurrOrder("asc")
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
                value={currCategory}
                onChange={handleChange}
            />
            <Select
                label="Order"
                options={['Ascending', 'Descending']}
                value={(currOrder === 'asc') ? 'Ascending' : 'Descending'}
                onChange={handleChange}
            />
            <ButtonGroup>
                <Button size="slim" onClick={onSort}>Sort</Button>
                <Button size="slim" onClick={handleClearAll}>Clear</Button>
            </ButtonGroup>
            </FormLayout>
        </Popover>
    )
}