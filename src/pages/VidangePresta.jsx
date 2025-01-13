import React from 'react'
import Pagetitle from '../components/Pagetitle'
import ContactUs from '../components/ContactUs'
import { BeakerIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const VidangePresta = () => {
  return (
    <div>
        <Pagetitle icon={<BeakerIcon />} title="Vidange de Boîte de Vitesses Automatique (BVA)" content="Fluidité et performance : offrir le meilleur à votre BVA." />
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
      <p className="text-lg mb-8">
          La vidange de la boîte de vitesses automatique (BVA) est une étape essentielle dans l'entretien de votre véhicule. Elle permet de préserver la fluidité des changements de vitesses et de garantir le bon fonctionnement du système de transmission. Chez HED Motors, nous effectuons cette opération selon les normes du constructeur pour maximiser la durabilité de votre boîte de vitesses et éviter des réparations coûteuses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <BeakerIcon className="h-12 w-12 text-light-blue" />
            </div>
            <h3 className="text-xl font-semibold text-light-blue mb-4">Importance de la Vidange BVA</h3>
            <p className="text-grey mb-4">
              La vidange BVA permet de renouveler l'huile de transmission qui est soumise à une pression et des températures élevées. Cette huile subit une dégradation naturelle au fil du temps, ce qui peut entraîner des problèmes de passage de vitesses, des bruits inhabituels et une usure prématurée des composants internes. Un entretien régulier de la BVA permet d'éviter ces désagréments.
            </p>
            <p className="text-grey">
              Nos experts procèdent à une vidange complète de la BVA, avec remplacement de l'huile par un fluide adapté aux spécifications de votre modèle. Nous vérifions également les filtres et autres composants liés au système de transmission pour garantir une efficacité maximale.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <CogIcon className="h-12 w-12 text-light-blue" />
            </div>
            <h3 className="text-xl font-semibold text-light-blue mb-4">Réduction des Risques de Pannes</h3>
            <p className="text-grey mb-4">
              Une vidange régulière de la boîte de vitesses automatique permet d'éviter les pannes coûteuses. En renouvelant l'huile de la BVA, vous réduisez les risques de dysfonctionnements comme des patinages de l'embrayage, des retards dans le passage des rapports, et même des défaillances complètes de la transmission.
            </p>
            <p className="text-grey">
              Si vous remarquez des bruits étranges ou une difficulté à changer de vitesses, il est essentiel de faire vérifier votre BVA. Une vidange rapide peut prévenir des réparations majeures et prolonger la vie de votre boîte de vitesses.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheckIcon className="h-12 w-12 text-light-blue" />
            </div>
            <h3 className="text-xl font-semibold text-light-blue mb-4">Prolongation de la Durée de Vie de Votre Boîte de Vitesses</h3>
            <p className="text-grey mb-4">
              Un entretien régulier de la BVA est un gage de longévité pour votre véhicule. La transmission est un élément complexe et coûteux à réparer, c'est pourquoi il est crucial de maintenir une bonne condition de l'huile de la boîte de vitesses automatique. En faisant appel à nos services de vidange BVA, vous vous assurez de préserver la performance de votre véhicule et d'éviter une usure prématurée de cette partie essentielle de votre automobile.
            </p>
            <p className="text-grey">
              Nous vous conseillons de faire effectuer la vidange de votre boîte de vitesses automatique tous les 60 000 à 100 000 km, selon les recommandations du constructeur. Cela permet de maintenir une conduite fluide et d'éviter des coûts imprévus pour des réparations complexes.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <p className="lg:text-lg">
            La vidange BVA est une opération préventive qui ne doit pas être négligée. Grâce à notre expertise et nos équipements de pointe, nous garantissons un service rapide et efficace pour prolonger la durée de vie de votre véhicule et optimiser son rendement.
          </p>
          <p className="lg:text-lg mt-4">
            Ne laissez pas les problèmes de transmission perturber votre expérience de conduite. Confiez-nous la vidange de votre boîte de vitesses automatique et roulez en toute sérénité.
          </p>
        </div>
      </div>
    </section>
        <ContactUs />
    </div>
  )
}

export default VidangePresta