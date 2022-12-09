import React, { useState, useEffect } from 'react'
import './Todo.css';
import clsx from 'clsx';

const Todo = props => {

  const {newTasks} = props;

  const [tasksList, setTasksList] = useState([newTasks]);
  const toDoName = "toDoName";
  const toDoNameComplete = "toDoNameComplete";
  const cardTask = "cardTask";
  const cardTaskComplete = "cardTaskComplete";

  useEffect(() => {
    setTasksList([...newTasks])
  }, [newTasks, tasksList])

  const deleteTask = (id) => {
    const taskListIndex = tasksList.findIndex(e => e.id === id);
    const newTasksIndex = newTasks.findIndex(e => e.id === id);
    tasksList.splice(taskListIndex, 1);
    newTasks.splice(newTasksIndex, 1);
    setTasksList([...tasksList]);
  }

  const accomplishedTask = (id) => {
    const taskOkIndex = tasksList.findIndex(e => e.id === id);
    const newTasksOkIndex = newTasks.findIndex(e => e.id === id);
    tasksList[taskOkIndex].state = true
    newTasksOkIndex[newTasks].state = true
    setTasksList([...tasksList])
  }

  return(
    <div class="container py-3">
      {tasksList.map((taskList, index) => {
        return(
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-sm-10">
            <div class="card mb-4" className={clsx(cardTask, {[cardTaskComplete]: (taskList.state === true) })} key={taskList.id} >
              <div class="card-body p-2 mt-3 py-3">
                <div class="mx-3" key={index}>
                  <p className={clsx(toDoName, {[toDoNameComplete]: (taskList.state === true) })} key={taskList.id}>{taskList.value}</p>
                  <div class="d-flex justify-content-center align-items-center  py-2">
                    <button type="button" class="btn btn-outline-success mx-2" onClick={() => accomplishedTask(taskList.id)} disabled={taskList.state === true}>V</button>
                    <button type="button" class="btn btn-outline-danger mx-2" onClick={() => deleteTask(taskList.id)}>X</button>
                  </div>
                </div>
              </div>
           </div>
         </div>
       </div>
        );
      })}
    </div>
  );
}

export default Todo;

