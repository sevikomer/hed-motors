import React from 'react'
import Pagetitle from '../components/Pagetitle'
import ContactUs from '../components/ContactUs'
import { ChartBarIcon, CogIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const DiagnosticPresta = () => {
  return (
    <div>
        <Pagetitle icon={<ChartBarIcon />} title="Diagnostic" content="Identifiez rapidement les anomalies de votre véhicule et retrouvez des performances optimales grâce à nos diagnostics de haute précision." />
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="lg:text-lg mb-8">
          Chez HED Motors, nous mettons à votre service des outils de diagnostic à la pointe de la technologie pour garantir un fonctionnement optimal de votre véhicule. Notre équipe d'experts est là pour identifier les dysfonctionnements, analyser les performances et vous fournir des solutions adaptées. Vous pouvez compter sur nous pour maintenir la performance et la sécurité de votre voiture à son meilleur niveau.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-center mb-4">
              <ChartBarIcon className="h-12 w-12 text-light-blue" />
            </div>
            <h3 className="text-xl font-semibold text-light-blue mb-4">Diagnostic Complet</h3>
            <p className="text-grey mb-4">
              Un diagnostic complet permet d’évaluer l’ensemble des systèmes de votre véhicule : moteur, transmission, électronique, freinage, et bien plus encore. Grâce à notre technologie de pointe, nous identifions rapidement les éventuels problèmes et vous offrons des solutions pratiques et durables pour les résoudre.
            </p>
            <p className="text-grey">
              Ce diagnostic est essentiel pour prévenir les pannes majeures et garantir la longévité de votre véhicule. Nous utilisons des outils de diagnostic spécialisés pour garantir une analyse précise, sans compromettre votre sécurité.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-center mb-4">
              <CogIcon className="h-12 w-12 text-light-blue" />
            </div>
            <h3 className="text-xl font-semibold text-light-blue mb-4">Diagnostic Moteur</h3>
            <p className="text-grey mb-4">
              Le moteur est le cœur de votre véhicule et doit être régulièrement vérifié pour garantir ses performances optimales. Nos diagnostics moteur incluent l’analyse de tous les composants vitaux tels que l’injection, l’allumage, la compression, ainsi que les capteurs et les contrôles électroniques.
            </p>
            <p className="text-grey">
              Si un problème est détecté, nous vous fournirons une solution personnalisée pour restaurer la puissance et la fiabilité de votre moteur. Un diagnostic moteur précis permet non seulement de préserver votre véhicule, mais aussi de réduire les consommations de carburant et d'éviter des réparations coûteuses.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-center mb-4">
              <CpuChipIcon className="h-12 w-12 text-light-blue" />
            </div>
            <h3 className="text-xl font-semibold text-light-blue mb-4">Diagnostic Électronique</h3>
            <p className="text-grey mb-4">
              L’électronique de bord d’un véhicule moderne est complexe et contient de nombreux systèmes interconnectés. Notre service de diagnostic électronique analyse minutieusement les ECU (unités de commande électroniques) de votre voiture, afin de détecter toute erreur ou dysfonctionnement dans les circuits de gestion du moteur, de la transmission et des systèmes de sécurité.
            </p>
            <p className="text-grey">
              Nous détectons des problèmes invisibles à l'œil nu, comme les pannes de capteurs ou de composants électroniques défectueux. Grâce à notre diagnostic électronique, nous pouvons corriger ces anomalies avant qu’elles n'affectent les performances globales de votre voiture.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <p className="lg:text-lg">
            Les diagnostics que nous réalisons vont bien au-delà de la simple vérification. Nous analysons en profondeur chaque composant critique pour assurer que tout fonctionne comme prévu. Notre équipe utilise des équipements modernes et spécialisés pour fournir des résultats rapides, précis et fiables.
          </p>
          <p className="lg:text-lg mt-4">
            N'attendez pas que votre véhicule montre des signes de défaillance. Prenez l'initiative d'effectuer un diagnostic complet ou moteur pour identifier les problèmes avant qu'ils ne deviennent coûteux. Nos experts vous guideront tout au long du processus et vous aideront à prendre des décisions éclairées pour assurer la sécurité, la performance et la longévité de votre véhicule.
          </p>
        </div>
      </div>
    </section>
        <ContactUs />
    </div>
  )
}

export default DiagnosticPresta