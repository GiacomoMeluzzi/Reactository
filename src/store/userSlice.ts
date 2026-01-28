import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type UserState = {
    user:  string
    email: string
    isLogged: boolean
    role?: "USER" | "ADMIN"
}

const initialState: UserState = {user: '', email: '', isLogged:false} 

export const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {
        // riceve stato della slice, action porta payload
        setUser: (state, action: PayloadAction<UserState>) =>{
            state.user     = action.payload.user
            state.email    = action.payload.email
            state.isLogged = true
        },

        logoutUser: (state) => {
            state.user = ''
            state.email = ''
            state.isLogged = false
        }
    }
})

export const {setUser, logoutUser} = userSlice.actions

export default userSlice.reducer