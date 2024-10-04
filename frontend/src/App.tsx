import './App.css';
import React from 'react';
import Main from './components/VeryFirstPage/Main/Main';
import Admin from './components/Admin/Home';
import User from './components/User/Main';
import UserLogin from './components/Login/User/User';
import AdminLogin from './components/Login/Admin/Admin';
import {Route, Routes} from 'react-router-dom';
import Header from './components/VeryFirstPage/Header/Header';
import Home from './components/VeryFirstPage/Home/Home';
import About from './components/VeryFirstPage/About/About';
import Contact from './components/VeryFirstPage/Contact/Contact';
import Test from './components/User/Test/Main';
function App() {
  return (
    <div className='p-2 '>
<Routes>
  <Route path="/" element={<Main />} >
      <Route path={'/contact'} element={<Contact/>} />
      <Route path={'/about'} element={<About/>} />
  </Route>
  <Route path="/user-login" element={<UserLogin />} />
  <Route path="/admin-login" element={<AdminLogin />} />
  <Route path="/user/*" element={<User />} />
  <Route path="/admin/*" element={<Admin />} />
  <Route path={"/test"} element={<Test/>}></Route>
</Routes>


   </div>

  );
}

export default App;
