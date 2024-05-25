import { configureStore } from "@reduxjs/toolkit";
import clipReducer from "../features/clip/clipSlice";

export const store = configureStore({
    reducer: clipReducer
})

export type RootState = ReturnType<typeof store.getState>;