import bugModel from '../../Models/bugModel'

export function retrieveBugs(){
    let data = [];
    data.push(new bugModel({
        _id:23333333,
        name:"Crash on Load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V1.0",
        assigned:"Carolina Garcia",
        creator:"Joe Smith",
        priority:1,
        time:"23.38",
    }))
    data.push(new bugModel({
        _id:7777777,
        name:"Will Not Load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V1.0",
        assigned:"Carolina Garcia",
        creator:"Joe Smith",
        priority:3,
        time:"23.38",
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}