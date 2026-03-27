import React from 'react'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import { Route, Routes } from 'react-router-dom'
import AddMovie from '../pages/Addmovie.jsx'
import Listmovie from '../pages/Listmovie.jsx'
import ListCategory from '../pages/Listcategery.jsx'
import AddCategory from '../pages/Addcategery.jsx'
import ManageRating from '../pages/RatingManage.jsx'

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
  <Route element={<About/>} path='/'/>

            <Route path="/Home" element={<Home/>} />
            <Route path="/movies/edit/" element={<AddMovie/>} />
            <Route path="/addcate" element={<AddCategory/>} />
            <Route path="/admin/rating" element={<ManageRating/>} />
         </Routes>


{/* </Routes> */}
    </>
  )
}

export default AllRoute