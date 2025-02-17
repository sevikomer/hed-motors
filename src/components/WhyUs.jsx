import React from 'react'
import {
    HandThumbUpIcon,
    CurrencyEuroIcon,
    CheckBadgeIcon,
    ClockIcon,
  } from '@heroicons/react/24/solid'

  const advantages = [
    { description: 'Une entreprise au service de ses clients', icon: HandThumbUpIcon },
    { description: 'Une réponse rapide à vos demandes', icon: ClockIcon },
    { description: 'Des prestations à des prix compétitifs', icon: CurrencyEuroIcon },
    { description: 'Nos clients nous recommandent', icon: CheckBadgeIcon },
  ]

const WhyUs = () => {
  return (
    <div className='bg-dark-blue font-sans text-white lg:m-16 m-4 rounded-3xl items-center place-content-center p-6'>
        <div className='font-semibold lg:text-4xl md:text-3xl text-2xl text-center pt-6 pb-3'>
            Pourquoi nous choisir ?
        </div>
                <div className="grid lg:gap-12 gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:m-16 my-4 items-center place-content-center">
                {advantages.map((item) => (
                  <div
                    key={item.description}
                    className="bg-white rounded-3xl lg:p-8 p-2 lg:text-lg  text-black"
                  >
                    <div className="flex justify-center lg:py-4 py-2">
                      <item.icon aria-hidden="true" className="size-10 text-red" />
                    </div>
                    <div className="p-2">
                      <p className="mt-1 text-black text-center">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
    </div>
  )
}

export default WhyUs