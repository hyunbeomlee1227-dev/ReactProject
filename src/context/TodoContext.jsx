import { createContext, useContext, useRef, useState } from 'react'

const TodoContext = createContext()

export default function TodoProvider({ children }) {
    const lastId = useRef(4)

    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        const todo = { id: lastId.current++, text, checked: false }
        setTodos([...todos, todo])
    }

    const removeTodo = (seletedId) => {
        const filterTodos = todos.filter((todo) => todo.id != seletedId)
        setTodos(filterTodos)
    }

    const toggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    const value = {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        setTodos,
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export function useTodos() {
    const context = useContext(TodoContext)
    return context
}
