import React from 'react'
import Pagetitle from '../components/Pagetitle'
import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import { TagIcon } from '@heroicons/react/24/outline';


const Tarifs = () => {
  const data = [
    { name:'Exemple 1', price:'100€', description: 'Un entretien complet de votre véhicule'},
    { name:'Exemple 2', price:'150€', description: 'Une réponse rapide à vos demandes'},
    { name:'Exemple 3', price:'200€', description: 'Des prestations à des prix compétitifs'},
  ]


  return (
    <>
    <div>
    <Pagetitle icon={<TagIcon />} title="Nos tarifs" content="Transparence et compétitivité : découvrez nos tarifs." />
      <section class="bg-white">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {data.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-3xl p-8 text-lg  text-black"
                  >
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
              <h3 class="mb-4 text-2xl font-semibold">{item.name}</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{item.description}</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">{item.price}</span>
              </div>
             
              <ul class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                     
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  
              </ul>
              <Link to="/contact" class="text-white bg-light-blue hover:bg-dark-blue focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Prendre rendez-vous</Link>
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

export default Tarifs