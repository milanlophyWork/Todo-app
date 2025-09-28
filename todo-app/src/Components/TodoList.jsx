import TodoItem from "./TodoItem";

export default function TodoList({todos, removeTodo, toggleTodo}){ // loops through todos and renders each todoitem
    return(
        <div>
            {todos.map(todo => 
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    removeTodo={removeTodo} 
                    toggleTodo={toggleTodo}
                />
            )}
        </div>
    )
}