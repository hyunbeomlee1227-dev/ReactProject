import { useTodos } from '../context/TodoContext'

function TodoWriteForm() {
    const { addTodo } = useTodos()
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: form.todo.value,
                completed: false,
                userId: 5,
            }),
        })
        // addTodo(form.todo.value)
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
