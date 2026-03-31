import React from 'react'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import { Route, Routes } from 'react-router-dom'
import AddMovie from '../pages/Addmovie.jsx'
import Listmovie from '../pages/Listmovie.jsx'
import ListCategory from '../pages/Listcategery.jsx'
import AddCategory from '../pages/Addcategery.jsx'
import AdminPanel from '../pages/Home.jsx'
import MovieForm from '../pages/API.jsx'

const AllRoute = () => {
  return (
    <>
{/* <Routes>
  <Route element={<Home/>} path='/home'/>
  <Route element={<Listmovie/>} path='/list'/>
  <Route element={<About/>} path='/'/>
  <Route element={<ListCategory/>} path='/catelist'/>
  <Route element={<AddCategory/>} path='/addcate'/>
  <Route element={<Addmovie/>} path='/movies/edit/'/> */}

 <Routes>

            <Route path="/" element={<AdminPanel/>} />
            <Route path="/movies/edit/" element={<MovieForm/>} />
         </Routes>


{/* </Routes> */}
    </>
  )
}

export default AllRoute