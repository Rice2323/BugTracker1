import React  from "react";
import  ViewSection  from "./component/bugviewsection";
import  BugModel  from "../../../../Models/bugModel";
import "./bugview.css"


export default (props)=> {
    const bug = new BugModel(props.bug);

    return (
        <div className="bug-view">
            <h1>{props.bug.name}</h1>
            <ViewSection title='Details' info = {bug.details} />
            <ViewSection title='Steps' info = {bug.steps} />
            <ViewSection title='Priority' info = {bug.priority} />
            <ViewSection title='Creator' info = {bug.creator} />
            <ViewSection title='App Version' info = {bug.version} />
            <ViewSection title='Time Created' info = {bug.time} />
        </div>
    )
}