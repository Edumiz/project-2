import { createSlice } from "@reduxjs/toolkit";

export const filterParamsSlice = createSlice({
    name: 'filterParams',
    initialState: {
        category: 'First name',
        value: '',
        active: false
    },
    reducers: {
        setFilterCategory: (state, action) => {
            state.category = action.payload;
        },
        setValue: (state, action) => {
            state.value = action.payload;
        },
        setActive: (state) => {
            state.active = true
        },
        clearFilters: (state) => {
            state.category = 'First name';
            state.value = '';
            state.active = false;
        },
    },
});

export const { setFilterCategory, setValue, setActive, clearFilters } = filterParamsSlice.actions;

export default filterParamsSlice.reducer;