export default function TodoItem({todo, removeTodo, toggleTodo}){ // displays one todo with remove or toggle buttons
    return(
        <h4>
            <input type="checkbox" checked={todo.completed} onChange={()=> toggleTodo(todo.id)}/>
            {todo.title}
            <button onClick={()=> removeTodo(todo.id)}>Remove</button>
        </h4>
    )
}