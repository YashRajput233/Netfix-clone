import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from '../pages/Home';
import View from '../components/View/View';
const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/View" element={<View />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Routers
