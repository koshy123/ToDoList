import React, {useState} from "react";
import Task from "./Task";

const Tasks = ({tasks, markComplete}) => {
   
    return(
        <>
        {tasks.map((task, index) => (
           <Task key={index} task = {task}
           markComplete = {markComplete}/>
        ))}
        </>
    )
}

export default Tasks 