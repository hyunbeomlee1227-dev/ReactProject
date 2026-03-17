// import TodoList from './components/TodoList'
// import TodoWriteForm from './components/TodoWriteForm'
// function App() {
//     return (
//         <>
//             <TodoWriteForm />
//             <TodoList />
//         </>
//     )
// }

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
import List from './pages/List'
import Main from './pages/Main'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/main" element={<Main />}></Route>
                <Route path="/list" element={<List />}></Route>
                <Route path="/new" element={<Form />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
