import { Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import ReducerCounter from './components/ReducerHook'
import { Page404, Home } from './pages'

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route index element={<Counter />} />
                    <Route path="/reducer" element={<ReducerCounter />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    )
}

export default App