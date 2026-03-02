import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Recipies from '../pages/Recipies'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleReciepe from '../pages/SingleReciepe'

const Mainroutes = () => {
  return (
   <Routes >
    <Route path="/"element={<Home />}></Route>
    <Route path="/recipies"element={<Recipies />}></Route>
    <Route path="/recipies/details/:id"element={<SingleReciepe />}></Route>
    <Route path="/create-recipie"element={<Create />}></Route>
    <Route path="/about"element={<About />}></Route>
    
   </Routes>
  )
}

export default Mainroutes
