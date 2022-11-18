import React, {useState} from "react";



const Tasks = ({tasks}) => {
   
    return(
        <>
        {tasks.map((task) => (
            <h3>{task.text}</h3>
        ))}
        </>
    )
}

export default Tasks 