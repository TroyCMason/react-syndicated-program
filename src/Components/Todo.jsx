import './Todo.css'

function Todo(title,paragraph) {
function deleteTodo() {
    console.log("deleteTodo()", id)
}

    return (
        <div  ClassName="todo">
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button onClick={() => deleteTodo}> Delete</button>
     </div>
    )
}

export default Todo