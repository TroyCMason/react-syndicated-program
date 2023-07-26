import './Todo.css'

function Todo(title,) {
function deleteTodo() {
    console.log("deleteTodo()", id)
}

    return (
        <div  ClassName="todo">
      <p>{title}</p>
      <p>{paragraph}</p>
      <button onClick={() => deleteTodo}> Delete</button>
     </div>
    )
}

export default Todo