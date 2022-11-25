import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';


function ToDoList(){

    const [newTasks, setNewTasks] = useState([]);

    const submitNewTask = (newTask) =>{
        if(newTask.value === "" || newTask.value.length === 0){
            alert("Veuillez saisir une tâche")
        }else{
            const addNewTask  = [...newTasks, newTask];
            setNewTasks(addNewTask)
        }
    }
   
    return(
        <div>
            <h1>My To Do List</h1>
            <TodoForm onSubmit={submitNewTask} />
            <Todo newTasks={newTasks} />
        </div>
    )
}

export default ToDoList;