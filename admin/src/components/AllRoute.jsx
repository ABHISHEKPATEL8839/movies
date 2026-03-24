import React from 'react'
import Home from './Header.jsx'
import About from '../pages/About.jsx'
import { Route, Routes } from 'react-router-dom'
import Addmovie from '../pages/Addmovie.jsx'
import Listmovie from '../pages/Listmovie.jsx'
import ListCategory from '../pages/Listcategery.jsx'
import AddCategory from '../pages/Addcategery.jsx'

const AllRoute = () => {
  return (
    <>
<Routes>
  <Route element={<Home/>} path='/home'/>
  <Route element={<About/>} path='/'/>
  <Route element={<Addmovie/>} path='/add'/>
  <Route element={<Listmovie/>} path='/list'/>
  <Route element={<ListCategory/>} path='/catelist'/>
  <Route element={<AddCategory/>} path='/addcate'/>




</Routes>
    </>
  )
}

export default AllRoute