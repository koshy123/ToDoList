import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App = () => {
  const [tasks, setTasks] = useState([
    {
   title: "Wash the dishes",
   complete: false
  },
  {
   title: "Walk the dog",
   complete: false
  },
  {
   title: "Make the bed",
   complete: true
  },
  ])

 

    

    const addTask = (task) => {
      // const id = Math.floor(Math.random() *
      //  1000) + 1
       const newTask = { ...task }
       setTasks([...tasks, newTask])
      }

    const markComplete = (title) => {

       tasks.find(task=> task.title === title).complete ? tasks.find(task=> task.title === title).complete = false :tasks.find(task=> task.title === title).complete = true;
      //setTasks(tasks);
      setTasks(oldTasks=> {
        oldTasks = tasks
        return [...oldTasks];
      })

    //  setTasks(oldTasks=> {
    //   return oldTasks.map(task=> task.title === title).complete= true;
  
    //  })

     console.log(tasks);
    }
  
  return (
    <div className='container'>
      <Header />
      <AddTask onAdd= {addTask}/>
     
      {tasks.length > 0 ? (<Tasks tasks ={tasks} markComplete={markComplete}
      />
      ) : ( 'No Tasks')
    }
    </div>
  )
}

export default App;