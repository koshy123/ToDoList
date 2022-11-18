import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "doc app",
        day: 'Feb 5',
        reminder: true,
    
    },
    {
        id: 2,
        text: "lunch",
        day: 'Dec 5',
        reminder: false,
    },
    {
        id: 3,
        text: "work",
        day: 'Mar 5',
        reminder: true,
    },
    ])

    const addTask = (task) => {
      const id = Math.floor(Math.random() *
       1000) + 1
       const newTask = { id , ...task }
       setTasks([...tasks, newTask])
      }

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
  
  return (
    <div className='container'>
      <Header />
      <AddTask onAdd= {addTask}/>
      {tasks.length > 0 ? (<Tasks tasks ={tasks} 
      onDelete = {deleteTask} />
      ) : ( 'No Tasks')
    }
    </div>

  )
}

export default App;