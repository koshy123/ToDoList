import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';


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
    }
    ])

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
  
  return (
    <div className='container'>
      <Header />
      <Tasks tasks ={tasks} 
      onDelete = {deleteTask}/>
    </div>

  )
}

export default App;