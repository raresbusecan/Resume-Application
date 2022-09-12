import './App.css'
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AboutPage from './Components/Pages/AboutPage/About'
import SkillPage from './Components/Pages/SkillPage/Skill'
import ContactPage from './Components/Pages/ContactPage/Contact'
import HomePage from './Components/Pages/HomePage/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/> 
      <Routes>
          <Route path='/' element={<HomePage/>} ></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/skill' element={<SkillPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
