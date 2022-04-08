import {createSlice} from '@reduxjs/toolkit'
import {retrieveBugs} from './bugController'
const slice = createSlice({
name: "bug",
initialState:[],
reducers: {
    getBugs:state => retrieveBugs(),

    createBugs:(state,actions)=>{

    },
    updateBug:(state,actions)=>{

    },
    markCompleted:(state,action)=>{

    }
}

})

export default slice.reducer;

export const {getBugs,createBugs,updateBug,markCompleted} = slice.actions