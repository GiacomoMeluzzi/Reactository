import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserCredentials } from "../containers/components/common/type/CommonType";

export type ListState = {
    users: UserCredentials[]
}

const initialState : ListState  = {
    users : [{
    mail: "admin", password: "123",
    user: "",
    nome: "",
    cognome: "",
    dataNascita: ""}]
}    

export const userListSlice = createSlice({
     name: 'userlist',
     initialState,
     reducers: {
        addUser: (state, action:PayloadAction<UserCredentials>) => {
            state.users.push(action.payload)
        }
     }
})

export const { addUser } = userListSlice.actions

export default userListSlice.reducer