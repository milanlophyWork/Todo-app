import { useState, useEffect } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

export default function Todo(){ // parent(holds state, fetch todo, pass handlers)
    
    // const [todo, setTodo] = useState('') // moved to todoItem component
    const [todos, setTodos] = useState([])

    /*function handleSubmit(e){ // moved to todoForm
        e.preventDefault()
        const newTodo = { // adding newTodo as todo fetched is in this format
            id: Date.now, //creates unique id
            title : title,
            completed : false
        }
        setTodos([...todos, newTodo])
        setTodo('')
    } */

    // fetching todos
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=30')
        .then(res => res.json())
        .then(data => setTodos(data))
        .catch(err => console.error("Error fetching todos", err))
    },[])

    function addTodo(title){
        const newTodo = { // adding newTodo as todo fetched is in this format
            id: Date.now(), //creates unique id
            title : title,
            completed : false
        }
        title ? setTodos([newTodo, ...todos]) : console.log('Error fetching data') // first newTodo then rest of the todos, so that new todos are added at top
    }

    function toggleTodo(id){
        setTodos(
            todos.map(todo => 
                todo.id === id ? {...todo, completed : !todo.completed} : todo)
        )
    }

    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    return(
        <div>
            <h1 className="title">Todo App</h1>
            {/* <form onSubmit={handleSubmit}> // moved to todoForm component
                <input onChange={e=> setTodo(e.target.value)} value={todo} type="text" />
                <button type="submit">Add</button>

                {todos.map((todo)=> ( // moved to todoList component
                    
                    <h4 key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={()=> toggleTodo(todo.id)}/>
                        {todo.title}
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>    
                    </h4>  
                ))}
            </form> */}

            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    )
}