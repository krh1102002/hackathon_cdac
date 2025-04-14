import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import MenuBoard from './pages/MenuBoard';
import MyBlogs from './pages/MyBlogs';
import AddOrEditBlog from './pages/AddOrEditBlog';
import SearchBlog from './pages/SearchBlog';
import AllBlogs from './pages/AllBlogs';
import Category from './pages/Category';
import ViewBlog from './pages/ViewBlog';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/menuboard' element={<MenuBoard/>}/>
      <Route path='/my_blogs' element={<MyBlogs/>}/>
      <Route path='/all_blogs' element={<AllBlogs/>}/>
      <Route path='/categories' element={<Category/>}/>
      <Route path='/blog' element={<AddOrEditBlog/>}/>
      <Route path='/search_blog' element={<SearchBlog/>}/>
      <Route path='/view_blog' element={<ViewBlog/>}/>
    </Routes>
  )
}

export default App
