import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Colection/Collection'

function App() {


  return (
    <>

      <Routes >


        <Route path='/' element={<Home />} />
        <Route path='/trends' element={<Collection />} />

      </Routes>

    </>
  )
}

export default App
