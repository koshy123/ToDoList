import React, { useEffect } from "react";
import {FaTimes} from 'react-icons/fa'



const Task = ({task, markComplete}) => {
  
useEffect(()=> {
  console.log("TASK:", task)
}, [task]);
//   const markComplete=(e)=> {
//     if(e.target.parentElement.children[0].style.textDecoration= "line-through"){
//         e.target.parentElement.children[0].style.textDecoration= "none";
//     }
//     if(e.target.parentElement.children[0].style.textDecoration= "none"){
//         e.target.parentElement.children[0].style.textDecoration= "line-through";
//     }
        
//     }
  

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