import React, { useState } from 'react';



const AddTask = ({onAdd}) => {
const [text, setText ] = useState('')
const [day, setDay ] = useState('')

const onSubmit =(e) => {
    e.preventDefault()
    if(!text){
        alert('Please add To-Do')
    }

    onAdd({text,day})

    setText('')
    setDay('')

}
    return (
        <form className= "add-form" onSubmit={onSubmit}>
            <div className="form-control" >
            <label>To Do</label>
            <input 
            type='text' 
            placeholder='Add To-Do'
            value={text} 
            onChange={(e) => 
            setText(e.target.value)}   />
            </div>

            <div className="form-control" >
            <label>The Day</label>
            <input 
            type='text' 
            placeholder='Add Day'
            value={day} 
            onChange={(e) => 
            setDay(e.target.value)}  />
            </div>

            <input className="block" type='submit' value='Save Task' />
        </form>
        

              
    )
}


export default AddTask