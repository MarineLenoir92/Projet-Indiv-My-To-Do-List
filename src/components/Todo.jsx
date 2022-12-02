import React, { useState, useEffect } from 'react'
import './Todo.css';
import clsx from 'clsx';

const Todo = props => {

  const {newTasks} = props;

  const [tasksList, setTasksList] = useState([newTasks]);
  const toDoName = "toDoName";
  const toDoNameComplete = "toDoNameComplete";

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
    <div>
      <p>My Tasks</p>
      {tasksList.map((taskList, index) => {
        return(
        <div key={index}>
          <p className={clsx(toDoName, {[toDoNameComplete]: (taskList.state === true) })} key={taskList.id}>{taskList.value}</p>
          <button onClick={() => deleteTask(taskList.id)}>X</button>
          <button onClick={() => accomplishedTask(taskList.id)} disabled={taskList.state === true}>V</button>
        </div>
        );
      })}
    </div>
  );
}

export default Todo;

