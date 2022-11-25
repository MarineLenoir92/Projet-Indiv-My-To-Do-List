import React from 'react'


function Todo({newTasks}) {

  return(
    <div>
      <p>My Tasks</p>
      {newTasks.map((newTasks, index) => {
        return(
        <div key={index}>
          <p key={newTasks.id}>{newTasks.value}</p>
        </div>
        );
      })}
    </div>
  );
}

export default Todo;

