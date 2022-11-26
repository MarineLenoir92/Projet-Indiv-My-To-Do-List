import React, { useState, useEffect } from 'react'

const Todo = props => {

  const {newTasks} = props;

  const [tasksList, setTasksList] = useState([newTasks])
  console.log(tasksList)

  useEffect(() => {
    setTasksList([...newTasks])
  }, [newTasks])

  const deleteTask = (id) => {
    const taskListIndex = tasksList.findIndex(e => e.id === id);
    const newTasksIndex = newTasks.findIndex(e => e.id === id);
    tasksList.splice(taskListIndex, 1);
    newTasks.splice(newTasksIndex, 1);
    setTasksList([...tasksList]);
  }

  return(
    <div>
      <p>My Tasks</p>
      {tasksList.map((taskList, index) => {
        return(
        <div key={index}>
          <p key={taskList.id}>{taskList.value}</p>
          <button onClick={() => deleteTask(taskList.id)}>X</button>
        </div>
        );
      })}
    </div>
  );
}

export default Todo;

