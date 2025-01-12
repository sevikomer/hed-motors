import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className='bg-dark-blue font-sans text-white lg:m-16 m-2 rounded-3xl lg:flex items-center place-content-center lg:p-16 p-8'>
        <div>
            <div className='pb-4 font-semibold lg:text-4xl md:text-3xl text-2xl text-start'>
                Demandez votre devis sur mesure ! 
            </div>
            <div className='pb-8'>
            Besoin d’informations supplémentaires ?  Contactez-nous ! Nous sommes à votre disposition pour répondre à toutes vos questions.
            </div>
        </div>
        <Link to="/contact"
                className="lg:mx-12 rounded-3xl bg-white px-6 py-1.5 font-semibold text-dark-blue shadow-sm hover:bg-light-blue hover:text-white hover:outline-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contactez-nous
              </Link>
    </div>
  )
}

export default ContactUs