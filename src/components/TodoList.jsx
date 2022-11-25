import React, { useState } from 'react'
import TodoForm from './TodoForm'

function ToDoList(){

    let [newTasks, setNewTasks] = useState([]);

    const submitNewTask = (newTask) =>{
        if(newTask.text == null || newTask.text == "" || newTask.text.length == 0){
            alert("Veuillez saisir une tâche")
        }else{
            const addNewTask  = [...newTasks, newTask];
            setNewTasks(addNewTask)
            console.log(...newTasks)
        }
    }
   
    return(
        <div>
            <h1>My To Do List</h1>
            <TodoForm onSubmit={submitNewTask} />
        </div>
    )
}

export default ToDoList;