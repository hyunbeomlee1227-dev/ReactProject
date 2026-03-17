import { useTodos } from '../context/TodoContext'

function TodoWriteForm() {
    const { addTodo } = useTodos()
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        addTodo(form.todo.value)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button>입력</button>
            </form>
        </>
    )
}

export default TodoWriteForm
