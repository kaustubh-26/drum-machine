import { createSlice } from "@reduxjs/toolkit";
import clipsFile from '../../data/clips.json';

const initialState = {
    clips: clipsFile,
    display: ""
}

export const clipSlice = createSlice({
    name: 'clips',
    initialState,
    reducers: {
        addClip: (state, action) => {
            state.clips.push(action.payload);
        },
        changeDisplay: (state,action) => {
            state.display = action.payload;
        }
    }
})

export const { addClip, changeDisplay } = clipSlice.actions;

export default clipSlice.reducer;