import './Todo.css'

function Todo(title,paragraph) {
    return (
        <div  ClassName="todo">
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button>Delete</button>
     </div>
    )
}

export default Todo