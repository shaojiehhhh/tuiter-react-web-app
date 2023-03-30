import {createSlice} from "@reduxjs/toolkit";
import 'font-awesome/css/font-awesome.min.css';
import profile from "./profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        editProfile(state, action) {
            Object.assign(state, action.payload);
        }
    }
})

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;


