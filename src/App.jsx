import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import Home from './pages/Home'
import Protected from './share/Protected'
import Department from './pages/Department'
import Table from './pages/Table'

const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/home' element={<Protected compo={<Home />} />} />
        <Route path='/dep' element={<Protected compo={<Department />} />} />
        <Route path='/table' element={<Protected compo={<Table />} />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App