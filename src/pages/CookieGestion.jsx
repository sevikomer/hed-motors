import React, { useState } from 'react';
import Pagetitle from '../components/Pagetitle';

const CookieGestion = () => {
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: false,
    essential: true, // Toujours activé
  });

  const handleToggle = (type) => {
    if (type !== 'essential') {
      setPreferences((prev) => ({
        ...prev,
        [type]: !prev[type],
      }));
    }
  };

  const handleSavePreferences = () => {
    console.log('Préférences enregistrées :', preferences);
    alert('Vos préférences ont été enregistrées.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
        <Pagetitle title="Gestion des cookies" />
      <h1 className="text-2xl font-bold mb-4">Gestion des Cookies</h1>

      <p className="mb-6">
        Nous utilisons des cookies pour améliorer votre expérience utilisateur. Vous pouvez
        personnaliser vos préférences ci-dessous.
      </p>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
          <span>Cookies Essentiels (toujours activés)</span>
          <input
            type="checkbox"
            checked={preferences.essential}
            disabled
            className="cursor-not-allowed"
          />
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
          <span>Cookies d'Analyse</span>
          <input
            type="checkbox"
            checked={preferences.analytics}
            onChange={() => handleToggle('analytics')}
            className="cursor-pointer"
          />
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
          <span>Cookies Marketing</span>
          <input
            type="checkbox"
            checked={preferences.marketing}
            onChange={() => handleToggle('marketing')}
            className="cursor-pointer"
          />
        </div>
      </div>

      <button
        onClick={handleSavePreferences}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Enregistrer mes préférences
      </button>
    </div>
  );
};

export default CookieGestion;
