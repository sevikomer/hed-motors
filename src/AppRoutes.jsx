import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Realisations from './pages/Réalisations.jsx'
import Prestations from './pages/Prestations.jsx'
import Tarifs from './pages/Tarifs.jsx'
import Contact from './pages/Contact.jsx'


function AppRoutes() {


  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default AppRoutes