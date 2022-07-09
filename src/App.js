import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Author from './Components/Author';
import Navbar from './Components/Navbar';
import Admin from './Components/Admin';
import Home from './Components/Home';
import Publicnav from './Components/Publicnav';


function App() {
  const [user, setUser] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [userdata,setuserdata] = useState({});

  useEffect(()=>{    
    loadUser();
  },[refresh])
  const loadUser = async()=>{
    const data = await axios.get("http://localhost:5000/api/auth/login/success")   
    setUser(data.data.success);
    setuserdata(data.data.user);
  }
  const toggleRefresh = () => setRefresh((p) => !p);

  return (
    <BrowserRouter>
    {user?(<>
    <Navbar refresh = {toggleRefresh} userdata={userdata} />
      <Routes>      
      <Route path='/' element={userdata.Email === process.env.REACT_APP_ADMIN_EMAIL ? <Admin userdata = {userdata} /> : <Author userdata = {userdata}/> }></Route>
    </Routes>
    </>)
    :
    (<>
    <Publicnav />
     <Routes>
     <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login loadUser={loadUser}/>}></Route>
      <Route path='/register' element={<SignUp />}></Route>
    </Routes>
    </>)}
   
    </BrowserRouter>
    
  );
}

export default App;