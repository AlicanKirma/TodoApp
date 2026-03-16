import React, { useState } from 'react'
import '../App.css';
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function ToDo({todo,onRemoveTodo,onUpdateTodo}) {

const {id, content, name, surname} = todo;

const [editable, setEditable] = useState(false);
const [newTodo, setNewTodo] = useState(content);
const [newName, setNewName] = useState(name);
const [newSurName, setNewSurName] = useState(surname);
const removeTodo = ()=> {
     onRemoveTodo(id);
}
const updateTodo = ()=> {
     const request ={
          id: id,
          content:newTodo,
          name:newName,
          surname:newSurName
     }
     onUpdateTodo(request);
     setEditable(false);
}

  return (
    <tr >
      <td>
        {
 editable ? <input value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} className='todo-input'  type="text"/> :  todo.content
        }
         
        
       
        </td>
      <td>
         {
          editable ? <input value={newName} onChange={(e)=> setNewName(e.target.value)} className='todo-input'  type='text'/> :  todo.name
        }
       
        </td>
      <td>
         {
          editable ? <input value={newSurName} onChange={(e)=> setNewSurName(e.target.value)} className='todo-input'  type='text'/> :  todo.surname
        }
        
        </td>
      
      <td>
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
        {
          editable ? <FaCheck onClick={updateTodo}  className='todo-icons' /> :  <FaEdit onClick={() => setEditable(true)} className='todo-icons' />
        }
       
      </td>
    </tr>
  )
}




export default ToDo