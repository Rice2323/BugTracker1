import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Josh Jacobs"})
            state.push({name:"John Johnson"})
        }
    }

})

export default slice.reducer;
export const{getUser} = slice.actions;
