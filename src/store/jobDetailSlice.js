import { createSlice } from "@reduxjs/toolkit";

const jobDetailSlice = createSlice({
    name : "jobDetail",
    initialState: {
        title: "Web Developer",
        category: "Development & IT",
        description: "",
        experience: "Entry Level",
        duration: "Less than a day",
        budget: 0,
        enlish_level: 'Basic',
        job_type: "Remote",
        location: '',
        skills: []
    },
    reducers: {
        addDetail: (state, action) => {
            state.title = action.payload.title;
            state.category = action.payload.category;
            state.description = action.payload.description;
            state.experience = action.payload.experience;
            state.duration = action.payload.duration;
            state.budget = action.payload.budget;
            state.enlish_level = action.payload.enlish_level;
            state.job_type = action.payload.job_type;
            state.location = action.payload.location;
            state.skills = action.payload.skills;
        }
    }
})

export const {addDetail} = jobDetailSlice.actions;
export default jobDetailSlice.reducer;