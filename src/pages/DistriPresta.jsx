import React from 'react'
import Pagetitle from '../components/Pagetitle'
import ContactUs from '../components/ContactUs'
import { LinkIcon, WrenchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const DistriPresta = () => {
  return (
    <div>
        <Pagetitle icon={<WrenchIcon />} title="Chaîne de distribution" content="Préservez la Fiabilité de Votre Moteur." />
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-8">
          La chaîne de distribution est un élément crucial pour le bon fonctionnement de votre moteur. Elle assure la synchronisation des mouvements entre les différentes pièces du moteur, permettant ainsi une combustion optimale. Un entretien régulier et un remplacement préventif de la chaîne de distribution peuvent éviter des dommages coûteux à votre moteur.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <LinkIcon className="h-12 w-12 text-light-blue" />
            </div>
            <h3 className="text-xl font-semibold text-light-blue mb-4">Qu'est-ce que la chaîne de distribution ?</h3>
            <p className="text-grey mb-4">
              La chaîne de distribution est un composant essentiel du moteur de votre véhicule. Elle permet de synchroniser le mouvement des soupapes et des pistons, afin de garantir un fonctionnement optimal. Une chaîne de distribution usée ou défectueuse peut entraîner des défaillances moteur graves et coûteuses, c'est pourquoi il est primordial de la remplacer à temps.
            </p>
            <p className="text-grey">
              Contrairement à une courroie de distribution, la chaîne est généralement plus robuste, mais elle peut aussi se détériorer avec le temps. Des bruits étranges ou des ratés moteur sont des signes qu'il est temps d'intervenir.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheckIcon className="h-12 w-12 text-light-blue" />
            </div>
            <h3 className="text-xl font-semibold text-light-blue mb-4">Les Risques d'une Chaîne de Distribution Usée</h3>
            <p className="text-grey mb-4">
              Si la chaîne de distribution se casse ou se détériore, les conséquences peuvent être dramatiques pour votre moteur. Les pistons et soupapes peuvent entrer en collision, endommageant gravement le moteur. Cela peut entraîner des réparations extrêmement coûteuses et, dans certains cas, nécessiter le remplacement complet du moteur.
            </p>
            <p className="text-grey">
              Un entretien préventif et un remplacement de la chaîne de distribution avant qu'elle ne présente des signes de faiblesse vous permettront d'éviter ces risques et de garantir la longévité de votre moteur.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-4">
              <WrenchIcon className="h-12 w-12 text-light-blue" />
            </div>
            <h3 className="text-xl font-semibold text-light-blue mb-4">Pourquoi Choisir HED Motors ?</h3>
            <p className="text-grey mb-4">
              Chez HED Motors, nous possédons l'expertise et les équipements nécessaires pour effectuer un remplacement de chaîne de distribution dans les règles de l'art. Nous utilisons des pièces de qualité, adaptées à votre véhicule, pour assurer une réparation durable et fiable.
            </p>
            <p className="text-grey">
              Notre équipe de professionnels prend le temps de démonter et de remplacer la chaîne de distribution en respectant les normes constructeur. Nous vérifions également l'ensemble des composants associés (tels que les tendeurs et les guides) pour garantir un fonctionnement optimal du moteur.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <p className="lg:text-lg">
            Si vous constatez des bruits inhabituels ou des pertes de puissance, il est peut-être temps de faire contrôler votre chaîne de distribution. Ne laissez pas un petit problème se transformer en une grosse réparation coûteuse.
          </p>
          <p className="lg:text-lg mt-4">
            Contactez-nous dès aujourd'hui pour un diagnostic complet et, si nécessaire, un remplacement de la chaîne de distribution de votre véhicule. Protégez votre moteur avec HED Motors.
          </p>
        </div>
      </div>
    </section>
        <ContactUs />
    </div>
  )
}

export default DistriPresta