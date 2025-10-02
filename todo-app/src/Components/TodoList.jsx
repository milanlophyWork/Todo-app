import TodoItem from "./TodoItem";

export default function TodoList({todos, removeTodo, toggleTodo, error}){ // loops through todos and renders each todoitem
    return(
        <div className="todo_bar">
            {todos.map(todo => 
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    removeTodo={removeTodo} 
                    toggleTodo={toggleTodo}
                />
            )}

            {
                error ? <div>{error}</div> : ''
            }
        </div>
    )
}