import React, { useState } from 'react';



const AddTask = ({onAdd}) => {
const [title, setText ] = useState('')
const [day, setDay ] = useState('')

const onSubmit =(e) => {
    e.preventDefault()
    if(!title){
        alert('Please add To-Do')
    }

    onAdd({title, complete: false});

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
            value={title} 
            onChange={(e) => 
            setText(e.target.value)}   />
            </div>

        
            <input className="block" type='submit' value='Save Task' />
        </form>
        

              
    )
}


export default AddTask