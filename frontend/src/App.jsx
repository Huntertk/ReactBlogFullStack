import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Create from './page/Create'
import SingleBlog from './page/SingleBlog'
import UpdateBlog from './page/UpdateBlog'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/blog/create" element={<Create />} />
              <Route path="/blog/:id" element={<SingleBlog />} />
              <Route path="/blog/update/:id" element={<UpdateBlog />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
