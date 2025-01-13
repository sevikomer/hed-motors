import React from 'react'
import Pagetitle from '../components/Pagetitle'
import { Link } from 'react-router-dom';
import {
  LinkIcon,
  WrenchIcon,
  ChartBarIcon,
  CogIcon,
  BeakerIcon,
  AdjustmentsVerticalIcon
} from '@heroicons/react/24/outline'
import ContactUs from '../components/ContactUs';
import prestations from '../data/prestations.json';

const iconMap = {
  WrenchIcon: WrenchIcon,
  ChartBarIcon: ChartBarIcon,
  CogIcon: CogIcon,
  BeakerIcon: BeakerIcon,
  LinkIcon: LinkIcon,
};

const Prestations = () => {

  return (
    <>
       <Pagetitle icon={<AdjustmentsVerticalIcon />} title="Nos prestations" content="Des services sur mesure pour votre véhicule." />
       <div className="">
                {prestations.map((item) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                  <div
                    key={item.name}
                    className=" grid lg:grid-cols-2 grid-cols-1 lg:m-16 m-4 bg-white rounded-lg border border-gray-100 shadow lg:p-16 p-6"
                  >
                    <div className='flex items-center justify-center'>
                    <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-grey group-hover:bg-black text-white">
                    {IconComponent && <IconComponent className="h-12 w-12" />}
                    </div>
                    </div>
                    <div>
                    <div className="flex-auto p-4">
                      <div className='text-2xl font-bold text-center mb-1'>{item.name}</div>
                      <p className="mt-1 text-center hover:text-grey">{item.description}</p>
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 place-content-center my-6'>
                    <Link to={item.href}
                                    className="flex justify-center px-3 py-1.5 mb-2 lg:text-lg font-semibold hover:underline text-red"
                                  >
                                    En savoir plus <span > &rarr;</span>
                                  </Link>
                    <Link to="/contact"
                                    className="flex justify-center mx-2 rounded-3xl bg-light-blue px-6 py-1.5 mt-2 lg:text-lg font-semibold text-white text-center shadow-sm hover:bg-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  >
                                    Demander votre devis
                                  </Link>       
                          </div>
                  </div>
                  </div>
               ) })}
              </div>
              <ContactUs />
    </>
  )
}

export default Prestations