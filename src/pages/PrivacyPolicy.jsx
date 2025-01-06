import React from 'react';
import Pagetitle from '../components/Pagetitle';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Pagetitle title="Politique de confidentialité" />
      <h1 className="text-2xl font-bold mb-4">Politique de Confidentialité</h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">1. Introduction</h2>
        <p>
          La protection de vos données personnelles est importante pour nous. Cette politique explique comment nous collectons, utilisons et protégeons vos données lorsque vous utilisez notre site [Nom du site].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">2. Données Collectées</h2>
        <p>Nous collectons les types de données suivants :</p>
        <ul className="list-disc pl-6">
          <li>Informations que vous fournissez volontairement (ex. : nom, adresse e-mail, etc.).</li>
          <li>Données collectées automatiquement (ex. : adresse IP, type de navigateur, cookies).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">3. Utilisation des Données</h2>
        <p>Les données collectées sont utilisées pour :</p>
        <ul className="list-disc pl-6">
          <li>Fournir nos services et améliorer votre expérience utilisateur.</li>
          <li>Personnaliser le contenu et les publicités.</li>
          <li>Analyser le trafic et les statistiques de visite.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">4. Partage des Données</h2>
        <p>Nous ne vendons ni ne louons vos données personnelles à des tiers. Toutefois, nous pouvons partager vos données avec :</p>
        <ul className="list-disc pl-6">
          <li>Des prestataires de services (hébergement, analyse, publicité).</li>
          <li>Les autorités légales si la loi l'exige.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">5. Cookies</h2>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience utilisateur. Vous pouvez configurer vos préférences en 
          visitant notre <a href="/gestion-cookies" className="text-blue-500 underline">page de gestion des cookies</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">6. Durée de Conservation</h2>
        <p>
          Vos données sont conservées uniquement le temps nécessaire pour les finalités décrites dans cette politique ou pour respecter nos obligations légales.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">7. Vos Droits</h2>
        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6">
          <li>Droit d'accès : consulter les données vous concernant.</li>
          <li>Droit de rectification : corriger vos données personnelles.</li>
          <li>Droit de suppression : demander la suppression de vos données.</li>
          <li>Droit d'opposition : refuser le traitement de vos données.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">8. Contact</h2>
        <p>
          Pour toute question concernant cette politique ou pour exercer vos droits, veuillez nous contacter :
        </p>
        <ul className="list-disc pl-6">
          <li>Par e-mail : [Adresse e-mail]</li>
          <li>Par courrier : [Adresse postale]</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
