import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactSvg from './assets/react.svg'
import Cat from './assets/cat.avif'
let students = ['yash', 'arpit', 'nayan', 'mayank', 'kunal', 'roshan', 'divya']



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <img src={Cat} alt="" className='cat' />
    <h2>Welcome to react bootcamp {students[Math.floor(Math.random()*students.length)]}</h2>
    <p>this is a paragraph</p>
    
  </>
    
   )
