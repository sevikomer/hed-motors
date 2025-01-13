import React from 'react'
import Pagetitle from '../components/Pagetitle'
import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const Realisations = () => {
  const data = [
    { name:'Réalisation entretien', image:'/images/moteur-bmw.jpg', description: `HED MOTORS a réalisé l'entretien d'un véhicule...`},
    { name:'Réalisation chaîne de distribution', image:'/images/moteur-bmw.jpg', description: `HED MOTORS a réalisé la chaîne de distribution BVA d'un véhicule...`},
    { name:'Réalisation vidange BVA', image:'/images/moteur-bmw.jpg', description: `HED MOTORS a réalisé la vidange BVA d'un véhicule...`},
  ]


  return (
    <>
    <div>
    <Pagetitle icon={<CheckCircleIcon />} title="Nos réalisations" content="Des réalisations qui témoignent de notre savoir-faire et de votre confiance." />
      <section class="">
  <div class="lg:m-16 m-4 lg:p-16 p-6">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      {data.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 text-lg  text-black"
                  >
          <div class="max-w-lg text-center text-grey">
          <div class="my-8 hover:brightness-75">
          <img src={item.image} alt={item.name} className="w-96 h-64 rounded-2xl" />
              </div>
              <h3 class="mb-4 text-2xl font-bold">{item.name}</h3>
              <p class="mb-4 text-grey lg:text-lg">{item.description}</p>
              <Link to="/prestations"
                className="flex justify-center px-3 py-1.5 mb-2 lg:text-lg font-semibold hover:underline text-red"
              >
                En savoir plus <span > &rarr;</span>
              </Link>
          </div>
          </div>
           ))}
           </div>
  </div>
</section>
    </div>
    <ContactUs />
    </>
  )
}

export default Realisations