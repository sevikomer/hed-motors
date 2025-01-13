import React from 'react'
import { Link } from 'react-router-dom';
import WhyUs from '../components/WhyUs';
import {
  LinkIcon,
  WrenchIcon,
  ChartBarIcon,
  CogIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import prestations from '../data/prestations.json';

const iconMap = {
  WrenchIcon: WrenchIcon,
  ChartBarIcon: ChartBarIcon,
  CogIcon: CogIcon,
  BeakerIcon: BeakerIcon,
  LinkIcon: LinkIcon,
};

const Home = () => {
  return (
    <div className=''>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 bg-slate-100 lg:m-16 m-4 rounded-3xl items-center place-content-center p-6'>
      <div className=''>
<div className='lg:my-12 mb-6 font-extrabold lg:text-6xl md:text-4xl text-3xl'>Votre spécialiste BMW & MINI à Meyrargues</div>
<div className='lg:text-lg'>Votre garage de confiance pour l'entretien, la réparation et l'optimisation de vos véhicules, offrant un service personnalisé et de qualité supérieure, pour garantir la performance et la longévité de votre voiture à chaque kilomètre.</div>
<div className='grid lg:grid-cols-2 md:grid-cols-1 place-content-start my-6'>
<div className=''>
<Link to="/prestations"
                className="flex justify-center px-3 py-1.5 mb-2 lg:text-lg font-semibold hover:underline text-red"
              >
                En savoir plus <span > &rarr;</span>
              </Link>
              </div>
<div className=''>
<Link to="/contact"
                className="flex justify-center rounded-3xl bg-light-blue px-6 py-1.5 mt-2 lg:text-lg font-semibold text-white shadow-sm hover:bg-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Demander votre devis
              </Link>
              </div>
      </div>
</div>

      <div className='flex justify-center'>
      <img
              alt="moteur-bmw"
              src="../images/moteur-bmw.jpg"
              className="h-84 w-96 rounded-xl"
            />
      </div>
    </div>
    <div>
      <h2 className='lg:text-6xl md:text-4xl text-3xl font-bold text-center pb-4'>Nos prestations</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1">
                {prestations.map((item) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                  <div
                    key={item.name}
                    className="lg:mx-16 lg:my-84 m-4 bg-white rounded-3xl border border-gray-100 shadow lg:p-12 p-6"
                  >
                    <div className='flex items-center justify-center'>
                    <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-grey group-hover:bg-black text-white">
                    {IconComponent && <IconComponent className="h-12 w-12" />}
                    </div>
                    </div>
                    <div className="flex-auto p-4 m-2">
                      <div className='text-2xl font-bold text-center m-2'>{item.name}</div>
                      <p className="m-2 text-center hover:text-grey">{item.description}</p>
                    </div>
                    <div className='place-content-center my-6'>
                    <Link to={item.href}
                                    className="flex justify-center px-3 py-1.5 mb-2 lg:text-lg font-semibold hover:underline text-red"
                                  >
                                    En savoir plus <span > &rarr;</span>
                                  </Link>       
                          </div>
                  </div>
               ) })}
              </div>
    </div>
    <WhyUs />
    </div>
  )
}

export default Home
