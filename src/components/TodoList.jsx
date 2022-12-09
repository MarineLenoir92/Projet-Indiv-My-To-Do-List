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
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <h1 class="text-center text-light fw-bold">What Are You Going To Do Today ?</h1>
            <TodoForm onSubmit={submitNewTask} />
            <Todo newTasks={newTasks} />
            </div>
        </div>
    )
}

export default ToDoList;