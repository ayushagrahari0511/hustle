import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: "new"
    },
    reducers: {
        changeUser: (state, action) => {
            state.user = action.payload.user
        }
    }

})

export const {changeUser} = userSlice.actions;
export default userSlice.reducer;