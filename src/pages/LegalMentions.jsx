import React from 'react';
import Pagetitle from '../components/Pagetitle';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const LegalMentions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
     <Pagetitle icon={<DocumentTextIcon />} title="Mentions légales" content="Toutes les informations légales en toute transparence." />
      <h1 className="text-2xl font-bold mb-4">Mentions Légales</h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">1. Éditeur du Site</h2>
        <p>
          Le site <strong>[Nom du site]</strong> (ci-après dénommé "le Site") est édité par :
        </p>
        <ul className="list-disc pl-6">
          <li>Nom ou Raison sociale : <strong>[Votre nom ou celui de votre entreprise]</strong></li>
          <li>Forme juridique : <strong>[SARL, SAS, Auto-entrepreneur, etc.]</strong></li>
          <li>Adresse : <strong>[Adresse postale complète]</strong></li>
          <li>Téléphone : <strong>[Numéro de téléphone]</strong></li>
          <li>Adresse e-mail : <strong>[Adresse e-mail de contact]</strong></li>
          <li>RCS : <strong>[Numéro d'immatriculation]</strong></li>
          <li>Numéro de TVA intracommunautaire : <strong>[Si applicable]</strong></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">2. Hébergement</h2>
        <p>
          Le Site est hébergé par :
        </p>
        <ul className="list-disc pl-6">
          <li>Nom de l'hébergeur : <strong>[Nom de l'hébergeur]</strong></li>
          <li>Adresse : <strong>[Adresse postale complète de l'hébergeur]</strong></li>
          <li>Téléphone : <strong>[Numéro de téléphone de l'hébergeur]</strong></li>
          <li>Site web : <strong>[URL du site de l'hébergeur]</strong></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">3. Propriété Intellectuelle</h2>
        <p>
          Tous les contenus présents sur le Site (textes, images, vidéos, graphismes, logos, icônes, etc.) 
          sont protégés par les droits de propriété intellectuelle et sont la propriété exclusive de 
          <strong>[Votre nom ou raison sociale]</strong>, sauf indication contraire.
        </p>
        <p>
          Toute reproduction, distribution, modification ou exploitation non autorisée des contenus est 
          strictement interdite sans l'accord préalable écrit de <strong>[Votre nom ou raison sociale]</strong>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">4. Données Personnelles</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vos données personnelles sont 
          collectées et traitées dans le respect de votre vie privée.
        </p>
        <p>
          Pour plus d’informations, veuillez consulter notre{' '}
          <a href="/politique-confidentialite" className="text-blue-500 underline">
            Politique de confidentialité
          </a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">5. Cookies</h2>
        <p>
          Le Site utilise des cookies pour améliorer votre expérience utilisateur. Vous pouvez configurer vos 
          préférences de cookies à tout moment via notre{' '}
          <a href="/gestion-cookies" className="text-blue-500 underline">
            Gestion des cookies
          </a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">6. Limitation de Responsabilité</h2>
        <p>
          [Votre nom ou raison sociale] s'efforce de fournir des informations exactes et à jour sur le Site. 
          Toutefois, aucune garantie n'est donnée quant à l'exactitude ou à l'exhaustivité des informations fournies.
        </p>
        <p>
          [Votre nom ou raison sociale] ne pourra être tenu responsable des dommages résultant de l'utilisation 
          du Site ou des liens hypertextes présents.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">7. Contact</h2>
        <p>
          Pour toute question ou réclamation concernant le Site, vous pouvez nous contacter :
        </p>
        <ul className="list-disc pl-6">
          <li>Par e-mail : <strong>[Adresse e-mail]</strong></li>
          <li>Par courrier : <strong>[Adresse postale]</strong></li>
        </ul>
      </section>
    </div>
  );
};

export default LegalMentions;
