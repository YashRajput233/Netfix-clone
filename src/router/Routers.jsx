import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from '../pages/Home';
import Poppage from '../components/Popuppage/Poppage';
const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="add/:id" element={<Poppage />} />
      {/* <Route path="/404" element={<NotFoundPage />} />
      <Route path="/apple">
        <Route path="/" element={<ApplePage />} />
        <Route path="*" element={<Navigate replace to="/apple" />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/404" />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default Routers
