import React from 'react'
import { Link } from 'react-router-dom';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
    <div className=''>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 bg-slate-100 lg:m-16 m-4 rounded-3xl items-center place-content-center p-6'>
      <div className=''>
<div className='my-12  font-extrabold lg:text-6xl text-4xl'>Votre spécialiste BMW & MINI à Meyrargues</div>
<div className='lg:text-lg'>Votre garage de confiance pour l'entretien, la réparation et l'optimisation de vos véhicules, offrant un service personnalisé et de qualité supérieure, pour garantir la performance et la longévité de votre voiture à chaque kilomètre.</div>
<div className='flex justify-around my-12'>
<div className=''>
<Link to="/prestations"
                className="flex justify-center px-3 py-1.5 lg:text-lg font-semibold hover:underline text-red"
              >
                En savoir plus <span > &rarr;</span>
              </Link>
              </div>
<div className=''>
<Link to="/contact"
                className="flex justify-center rounded-3xl bg-light-blue px-3 py-1.5 lg:text-lg font-semibold text-white shadow-sm hover:bg-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    <WhyUs />
    </div>
  )
}

export default Home
