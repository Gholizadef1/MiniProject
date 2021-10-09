import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        add:(state,action) => {
            state.user = action.payload;
        },
        added: (state) =>{
            state.user=null;
        },
    },
});
export const {add,added} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;