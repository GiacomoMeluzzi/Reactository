import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { userListSlice } from "./userListSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        userlist: userListSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch