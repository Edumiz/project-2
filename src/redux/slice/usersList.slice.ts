import { createSlice } from "@reduxjs/toolkit";
// import { useGetUsersQuery } from "../query";

// const {
//     data: usersRes = [],
// } = useGetUsersQuery()

// const users = (usersRes as any)?.users || []

export const usersListSlice = createSlice({
    name: 'users',
    initialState: {
        value: {}
    },
    reducers: {
        setUserList: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setUserList } = usersListSlice.actions

export default usersListSlice.reducer