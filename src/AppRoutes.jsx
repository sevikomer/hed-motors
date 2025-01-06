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
import EntretienPresta from './pages/EntretienPresta.jsx'
import DiagnosticPresta from './pages/DiagnosticPresta.jsx'
import DiagMoteurPresta from './pages/DiagMoteurPresta.jsx'
import VidangePresta from './pages/VidangePresta.jsx'
import DistriPresta from './pages/DistriPresta.jsx'

function AppRoutes() {


  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/prestations/entretien" element={<EntretienPresta />} />
        <Route path="/prestations/diagnostic" element={<DiagnosticPresta />} />
        <Route path="/prestations/diagnostic-moteur" element={<DiagMoteurPresta />} />
        <Route path="/prestations/vidange-bva" element={<VidangePresta />} />
        <Route path="/prestations/distribution" element={<DistriPresta />} />
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