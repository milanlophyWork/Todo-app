export default function TodoItem({todo, removeTodo, toggleTodo}){ // displays one todo with remove or toggle buttons
    return(
        <div>
            <p className="todo">
                <input type="checkbox" checked={todo.completed} onChange={()=> toggleTodo(todo.id)}/>
                <div className="todo_title">{todo.title}</div>
                <button onClick={()=> removeTodo(todo.id)}>Remove</button>
            </p>
        </div>
    )
}