import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className='bg-dark-blue font-sans text-white lg:m-16 m-4 rounded-3xl flex items-center place-content-center p-16'>
        <div>
            <div className='font-semibold text-4xl text-start'>
                Demandez votre devis sur mesure ! 
            </div>
            <div>
            Besoin d’informations supplémentaires ?  Contactez-nous ! Nous sommes à votre disposition pour répondre à toutes vos questions.
            </div>
        </div>
        <Link to="/contact"
                className="mx-12 rounded-3xl bg-white px-3 py-1.5 font-semibold text-dark-blue shadow-sm hover:bg-light-blue hover:text-white hover:outline-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contactez-nous
              </Link>
    </div>
  )
}

export default ContactUs