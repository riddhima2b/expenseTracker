import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginPage from './pages/LoginPage';
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      </Routes>
    </>
    
  )
}

export default App
