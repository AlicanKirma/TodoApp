import React from 'react'
import Todo from './ToDo'
import '../App.css';

function ToDoList({todos,onRemoveTodo,onUpdateTodo}) {
  return (
  <div className="todo-table-container">
  <table className="todo-table">
    <thead>
      <tr>
        <th>Yapılacak</th>
        <th>Ad</th>
        <th>Soyad</th>
        <th>İşlemler</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </tbody>
  </table>
</div>
   
  )
}

export default ToDoList