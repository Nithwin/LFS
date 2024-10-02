import React from 'react'
import Home from '../Home/Home';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import AdminLogin from '../../Login/Admin/Admin';
import UserLogin from '../../Login/User/User';
import '../Main/styles.css';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <div className='' >
      <Header/>
      <Routes>
      <Route path={'/'} element={<Home/>} />
      <Route path={'/contact'} element={<Contact/>} />
      <Route path={'/about'} element={<About/>} />
      <Route path={'/admin-login'} element={<AdminLogin/>} />
      <Route path={'/user-login'} element={<UserLogin/>} />

    </Routes>
    </div>

  )
}

export default Main;
