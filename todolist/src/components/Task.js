import React, { useEffect } from "react";

const Task = ({task, markComplete}) => {
    return(
        <div className="task">
            <h3 style={{textDecoration: task.complete ? "line-through" : "none"}}> {task.title}</h3>
            <div 
            style={{color:
            'green', cursor: 'pointer'}}
            onClick={()=>{ markComplete(task.title);  }}
            > Mark as Complete
            </div>
        </div>
    )
}

export default Task