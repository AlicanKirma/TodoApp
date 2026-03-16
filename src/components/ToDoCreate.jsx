import React, { useState } from 'react'

function ToDoCreate({onCreateToDo}) {

  const [newTodo,setNewTodo] = useState('');
  const [newName,setNewName] = useState('');
  const [newSurName,setNewSurName] = useState('');

  const clearInput = () =>{
    setNewTodo('');
    setNewName('');
    setNewSurName('');
  }
  const createTodo =() =>{
     if(!newTodo) return;

     const request ={
       id:Math.floor(Math.random()* 99999999999),
       content:newTodo,
       name:newName,
       surname:newSurName
     }
     onCreateToDo(request);
     clearInput();
  }


  return (
    <div className='todo-create'>
      <input value={newTodo} onChange={(e) =>setNewTodo(e.target.value)} name="todo" type="text" placeholder="Yapılacak" />
        <input value={newName} onChange={(e) =>setNewName(e.target.value)} name="name" type="text" placeholder="Yapacak Kişi Ad" />
           <input value={newSurName} onChange={(e) =>setNewSurName(e.target.value)} name="surname" type="text" placeholder="Yapacak Kişi Soyad" />
      <button onClick={createTodo} className='todo-create-button'> Kaydet</button>
    </div>
  )
}

export default ToDoCreate
