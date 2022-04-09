import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{getBugs} from '../../Controllers/Redux/bugSlice'
import BugCard from '../Components/bugCard/bugCard'
import BugView from '../Components/bugCard/BugView/bugview'

export default () => {

    const [Display_Bug, Set_Display_Bug] = useState({
        name: "",
        isDisplayed: false
    })
    const dispatch = useDispatch();
    const {bugs} = useSelector(state =>state);

    useEffect(()=>{
        dispatch(getBugs());
    },[bugs.length < 1])

    function BugsClicked(name){
        Set_Display_Bug({
            isDisplayed: !Display_Bug.isDisplayed,
            name:name
        })
    }


    return (
        <div className = 'page-container'>
            {bugs.map((bug,key)=>(
                < BugCard key ={key} bug={bug} clicked={BugsClicked}/>
            ))}
            {Display_Bug.isDisplayed && <BugView bug={bugs.filter((bug)=> bug.name == Display_Bug.name)[0]}/>}

        </div>
    )
}