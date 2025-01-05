import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';


function App() {

  return (
    < div >
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;