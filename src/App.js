import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './AppRoutes';
import AxeptioWidget from './components/AxeptioWidget';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    < div >
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <AppRoutes />
        <AxeptioWidget />
        <ScrollToTopButton />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;