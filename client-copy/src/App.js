import React from 'react';
import Login from './Login';
import Register from './Register';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import MultiStepForm from "./MultiStepForm";
import "./style.css";


const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/complaint" element={<MultiStepForm />} />
        </Routes>
      </div >
    </>
  )
}

export default App