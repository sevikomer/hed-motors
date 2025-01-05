import React from 'react'

const Home = () => {
  return (
    <>
    <div className='grid grid-cols-2 bg-slate-200 mx-16 my-16 rounded-3xl items-center place-content-center p-6'>
      <div className=''>
<div className='my-12 font-extrabold text-6xl'>Votre spécialiste BMW & Mini</div>
<div className='text-lg'>Votre garage de confiance pour l'entretien, la réparation et l'optimisation de vos véhicules, offrant un service personnalisé et de qualité supérieure, pour garantir la performance et la longévité de votre voiture à chaque kilomètre.</div>
<div className='grid grid-cols-2 my-12'>
<div className=''>
<button
                type="submit"
                className="flex justify-center rounded-3xl bg-red px-3 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
              >
                En savoir plus
              </button>
              </div>
<div className=''>
<button
                type="submit"
                className="flex justify-center rounded-3xl bg-light-blue px-3 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Demander votre devis
              </button>
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
    </>
  )
}

export default Home
