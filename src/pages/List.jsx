import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TodoItem from '../components/todoItem'

function List() {
    const { id } = useParams()
    const [todo, setTodos] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${id}`)
            .then((res) => res.json())
            .then((res) => setTodos(res))
    }, [])

    return <TodoItem todo={todo} />
}

export default List
