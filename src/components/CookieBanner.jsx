import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieBanner = () => {
    const [cookies, setCookie] = useCookies(['userPreferences']);
    const [showBanner, setShowBanner] = useState(cookies.userPreferences);
  
    const handleAccept = () => {
      setCookie('userPreferences', { accepted: true }, { path: '/' });
      setShowBanner(false);
    };
  
    const handleDecline = () => {
      setCookie('userPreferences', { accepted: false }, { path: '/' });
      setShowBanner(false);
    };
  
    if (!showBanner) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-lg font-bold mb-4">Gérer les Cookies</h2>
        <p className="text-gray-700 mb-6">
          Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser l'utilisation des cookies.
        </p>
        <div className="flex justify-around">
          <button
            className="px-4 py-2 bg-light-blue text-white rounded hover:bg-dark-blue"
            onClick={handleAccept}
          >
            Accepter
          </button>
          <button
            className="px-4 py-2 bg-red text-white rounded hover:bg-rose-700"
            onClick={handleDecline}
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
