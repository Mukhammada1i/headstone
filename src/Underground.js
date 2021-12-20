import './App.js'
import {useState} from "react";
import {nanoid} from "nanoid";



const App  = () => {

    const todonInitial = JSON.parse(localStorage.getItem('todoList'))  || []

    const [todoText, setTodoText] = useState("")
    const [todoList, setTodoList] = useState(todonInitial)

    const inputChange = (e) => {
        setTodoText(e.target.value)
    }

    const addTodo = () => {
        const newTodo ={
            todoText,
            id: nanoid()
        }
        if (todoText.trim()){
            setTodoList([newTodo, ...todoList])
        }
        setTodoText("")
    }

    return (
        <div>
            <input onChange={inputChange} type="text"/>
            <button onClick={addTodo} type="button"/>
            <hr/>
            <ul>{
                todoList.map(it => {
                    return <li key={it.id}>{it.todoText}</li>
                })
            }</ul>
        </div>
    )

}



export default App;