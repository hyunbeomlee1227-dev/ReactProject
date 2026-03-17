import { useTodos } from '../context/TodoContext'
import TodoItem from './todoItem'

function TodoList() {
    const { todos } = useTodos()
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList
