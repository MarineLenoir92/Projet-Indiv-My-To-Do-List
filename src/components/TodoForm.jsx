import React, {useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
    }


  return (
    <form className='todoform' onSubmit={handleSubmit}>
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

export default TodoForm