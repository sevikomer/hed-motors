import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="bg-grey text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <div
              className="flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="sr-only">Hed Motors</span>
            <img
              alt="logo"
              src="../images/hed-motors.svg"
              className="h-56 w-64"
            />
            </div>
            <div className='mx-12'>
            <button
                type="submit"
                className="rounded-3xl bg-light-blue px-3 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contactez-nous
              </button>
              </div>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <p className="mb-4">
              <Link to="/prestations" className="text-white">
              Nos prestations
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/realisations" className="text-white">
              Nos réalisations
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/tarifs" className="text-white">
              Tarifs
              </Link>
            </p>
            <p className="mb-4">
              <Link to="" className="text-white">
              Mentions légales
              </Link>
            </p>
            <p className="mb-4">
            <Link to="" className="text-white">
              Confidentalité
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
            <img
              alt="logo"
              fill="currentColor"
              src="../images/telephone.svg"
              className="mr-3 h-5 w-5 text-white"
            />
              + 01 234 567 88
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-white p-6 text-black text-center">
        <span>© 2025 Copyright :</span>
        <a
          className="font-semibold text-black"
          href="d"
        >HED Motors</a>
      </div>
    </footer>
  );
}