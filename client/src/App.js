import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
//import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);  
  console.log(user)
  return (
    <BrowserRouter>
          <Routes>
        <Route path="/" element={user ? <Home /> : <Register />}/>        
        <Route path="/login" element={user ? <Home /> : <Login />}/>          
        <Route path="/register" element={user ? <Home /> : <Register />}/>
        <Route path="/profile/:username" element={<Profile />}/>          
        </Routes>
    </BrowserRouter>
  );
}

export default App;