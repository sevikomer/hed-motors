import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Realisations from './pages/Réalisations.jsx'
import Prestations from './pages/Prestations.jsx'
import Tarifs from './pages/Tarifs.jsx'
import Contact from './pages/Contact.jsx'
import LegalMentions from './pages/LegalMentions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import CookieGestion from './pages/CookieGestion.jsx'

function AppRoutes() {


  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/gestion-cookies" element={<CookieGestion />} />
      </Routes>
    </div>
  )
}

export default AppRoutes