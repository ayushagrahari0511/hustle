import {createSlice} from '@reduxjs/toolkit'

const searchJobSlice = createSlice({
    name: "searchJob",
    initialState: {
        jobType: null,
        jobLocation: null,
        jobTitle: null
    },
    reducers: {
     addJobDetail: (state, action) => {
        state.jobType = action.payload.type;
        state.jobLocation = action.payload.place;
        state.jobTitle = action.payload.title
     },
    }
})

export const {addJobDetail} = searchJobSlice.actions;
export default searchJobSlice.reducer;