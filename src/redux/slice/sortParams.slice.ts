import { createSlice } from "@reduxjs/toolkit";

export const sortParamsSlice = createSlice({
    name: 'filterParams',
    initialState: {
        category: 'First name',
        order: 'asc',
    },
    reducers: {
        setSortCategory: (state, action) => {
            state.category = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        clearSorts: (state) => {
            state.category = 'First name';
            state.order = 'asc';
        },
    },
});

export const { setSortCategory, setOrder, clearSorts } = sortParamsSlice.actions;

export default sortParamsSlice.reducer;