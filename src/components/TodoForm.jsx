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
        value: input,
        state: false
      })
      
      setInput("");
    }


  return (
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-sm-10">
          <div class="card">
            <div class="card-body p-5">
              <form class="d-flex flex-row mx-2" className="inputForm" onSubmit={handleSubmit}>
              <div class="form-outline flex-fill">
                <input
                   text='input'
                   placeholder='New Task'
                   value={input}
                   name="text"
                   onChange={handleChange}
                   class="form-control"
                  >
                  </input>
                </div>
                <div class="d-flex justify-content-center align-items-center pt-4 ">
                   <button class="btn btn-info ms-2 text-light fw-bold">ADD TO MY LIST</button>
                </div>
              </form>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoForm;