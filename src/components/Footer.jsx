import React from 'react'
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  HomeIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <footer
      className="bg-grey text-center text-white lg:text-left">
      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center">
        <div className="grid-1 grid gap-8 lg:grid-cols-3">
          {/* <!-- TW Elements section --> */}
            <div
              className="font-semibold flex flex-col items-center">
              <span className="sr-only">Hed Motors</span>
            <img
              alt="logo"
              src="../images/hed-motors.svg"
              className="h-40 w-64"
            />
            <Link to="/contact"
                className="mx-12 rounded-3xl bg-light-blue px-6 py-1.5 font-semibold text-white shadow-sm hover:bg-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contactez-nous
              </Link>
              </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <p className="mb-4">
              <Link to="/prestations" className="text-white hover:text-dark-blue">
              Nos prestations
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/realisations" className="text-white hover:text-dark-blue">
              Nos réalisations
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/tarifs" className="text-white hover:text-dark-blue">
              Nos tarifs
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/mentions-legales" className="text-white hover:text-dark-blue">
              Mentions légales
              </Link>
            </p>
            <p className="mb-4">
            <Link to="/politique-confidentialite" className="text-white hover:text-dark-blue">
              Confidentialité
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div className=''>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase">
              Contact
            </h6>
            <a 
            href="https://www.google.com/maps/dir/?api=1&destination=HED+Motors,+RD556,+LeBary,+Meyrargues,+France"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 flex items-center justify-center hover:underline">
            <HomeIcon className="size-6 text-white py-1" />
              RD 556, Le Bary, 13650 Meyrargues
            </a>
            <p className="mb-4 flex justify-center">
            <ClockIcon className="size-6 text-white py-1" />
              du Lundi au Vendredi, 08:00-12:00 / 14:00-18:00
            </p>
            <a href="mailto:hedmotors@gmail.com"  
            className="mb-4 flex items-center justify-center hover:underline">
            <EnvelopeIcon className="size-6 text-white py-1" />
              hedmotors@gmail.com
            </a>
            <a 
            href="tel:+33699598616"
            className="mb-4 flex items-center justify-center hover:underline">
            <PhoneIcon className="size-6 text-white py-1" />
              06 99 59 86 16
            </a>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-black p-6 text-white text-center">
      Copyright © 2025 HED Motors
      </div>
    </footer>
  );
}