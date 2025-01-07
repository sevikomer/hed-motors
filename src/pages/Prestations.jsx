import React from 'react'
import Pagetitle from '../components/Pagetitle'
import { Link } from 'react-router-dom';
import {
  LinkIcon,
  WrenchIcon,
  ChartBarIcon,
  CogIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import ContactUs from '../components/ContactUs';

const Prestations = () => {

  const prestations = [
    { name: 'Entretien', description: 'Prenez soin de ce qui compte, nous prenons soin du reste.', href: '/prestations/entretien', icon: WrenchIcon },
    { name: 'Diagnostic', description: 'Comprendre pour mieux agir : votre diagnostic en un clic.', href: '/prestations/diagnostic', icon: ChartBarIcon },
    { name: 'Diagnostic moteur', description: 'Détecter, analyser, optimiser : tout pour votre moteur.', href: '/prestations/diagnostic-moteur', icon: CogIcon },
    { name: 'Vidange BVA', description: 'Fluidité et performance : offrir le meilleur à votre BVA.', href: '/prestations/vidange-bva', icon: BeakerIcon },
    { name: 'Chaîne de distribution', description: 'Préservez la cadence : votre chaîne de distribution en toute sécurité.', href: '/prestations/distribution', icon: LinkIcon },
  ]

  return (
    <>
       <Pagetitle title="Nos prestations" />
       <div className="p-4">
                {prestations.map((item) => (
                  <div
                    key={item.name}
                    className=" grid lg:grid-cols-2 grid-cols-1 lg:m-16 m-4 bg-slate-100 rounded-3xl p-16"
                  >
                    <div className='flex justify-center'>
                    <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-grey group-hover:bg-black text-white">
                      <item.icon aria-hidden="true" className="size-11 " />
                    </div>
                    </div>
                    <div>
                    <div className="flex-auto p-4">
                      <div className='text-2xl font-bold text-center'>{item.name}</div>
                      <p className="mt-1 text-center hover:text-grey">{item.description}</p>
                    </div>
                    <div className='flex justify-around my-12'>
                    <Link to={item.href}
                                    className="flex justify-center px-3 py-1.5 lg:text-lg font-semibold hover:underline text-red"
                                  >
                                    En savoir plus <span > &rarr;</span>
                                  </Link>
                    <Link to="/contact"
                                    className="flex justify-center mx-2 rounded-3xl bg-light-blue px-3 py-1.5 lg:text-lg font-semibold text-white text-center shadow-sm hover:bg-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  >
                                    Demander votre devis
                                  </Link>       
                          </div>
                  </div>
                  </div>
                ))}
              </div>
              <ContactUs />
    </>
  )
}

export default Prestations