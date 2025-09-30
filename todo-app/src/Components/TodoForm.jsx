import { useState } from "react"
export default function TodoForm({addTodo}){ // handles adding new todo

    const [todo, setTodo] = useState('')
    
    function handleSubmit(e){
        e.preventDefault()
        addTodo(todo)
        setTodo('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={e=> setTodo(e.target.value)} value={todo} type="text" />
            <button className="add" type="submit">Add</button>

        
        </form>
    )

}