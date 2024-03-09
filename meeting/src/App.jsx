import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Home from './pages/index'
import AddMetting from './pages/AddMeeting'
import ErrorPage from './pages/ErrorPage'
import './App.css'
import AddMeeting from './pages/AddMeeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/add" element={<AddMeeting/>} />
        <Route  path="*" element={<ErrorPage/>} />
      </Routes>

    </>
  )
}

export default App
