import React, {useState} from 'react'

function TodoForm(newTask) {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
      setInput(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      newTask.onSubmit({
        id: Math.floor(Math.random() * 100),
        text: input
      })
      
      setInput("");
    }


  return (
    <form className="inputForm" onSubmit={handleSubmit}>
        <input
        text='input'
        placeholder='To Do Task'
        value={input}
        name="text"
        onChange={handleChange}
        >
        </input>
        <button className='todosubmit'>Submit</button>
    </form>
  )
}

export default TodoForm;