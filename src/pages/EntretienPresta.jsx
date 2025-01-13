import React from 'react'
import Pagetitle from '../components/Pagetitle'
import ContactUs from '../components/ContactUs'
import { WrenchIcon } from '@heroicons/react/24/outline';

const EntretienPresta = () => {
  return (
    <div>
        <Pagetitle icon={<WrenchIcon />} title="Entretien" content="Garantissez la longévité et la performance de votre véhicule grâce à nos services d'entretien complets et personnalisés." />
    <section className="py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h3 className="lg:text-2xl text-xl font-semibold">
              Pourquoi entretenir votre véhicule ?
            </h3>
            <p className="mt-4">
              L'entretien régulier est essentiel pour préserver la fiabilité, la sécurité et les performances de votre véhicule. 
              Que ce soit pour éviter les pannes coûteuses ou pour garantir une conduite agréable, un entretien adapté prolonge 
              la durée de vie de votre voiture.
            </p>
            <p className="mt-4">
              Chez <span className="font-bold">HED Motors</span>, nous effectuons des contrôles précis et des interventions ciblées pour 
              répondre aux besoins spécifiques de votre véhicule, quelle que soit sa marque ou son modèle.
            </p>
          </div>

          <div>
            <img
              src="../images/moteur-bmw.jpg"
              alt="Entretien automobile"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-light-blue text-center m-2">
            Nos prestations d'entretien
          </h3>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Vidange et changement de filtre',
              'Contrôle et remplacement des plaquettes de frein',
              'Vérification et remplacement des pneus',
              'Changement de courroie et chaîne de distribution',
              'Mise à jour des liquides (huile, liquide de refroidissement, frein)',
              'Inspection des systèmes électriques et mécaniques',
            ].map((item, index) => (
              <li key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <p className="font-medium">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-light-blue">
            Pourquoi choisir HED Motors ?
          </h3>
          <p className="mt-4">
            Chez <span className="font-bold">HED Motors</span>, nous comprenons l'importance d'un entretien de qualité. Notre équipe 
            de professionnels qualifiés utilise des outils modernes et des pièces certifiées pour garantir les meilleures 
            performances de votre véhicule.
          </p>
          <p className="mt-4">
            Nous nous engageons à offrir un service transparent, rapide et compétitif pour répondre à vos attentes.
          </p>
        </div>
      </div>
    </section>
        <ContactUs />
    </div>
  )
}

export default EntretienPresta