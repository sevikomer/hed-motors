import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  LinkIcon,
  Bars3Icon,
  WrenchIcon,
  ChartBarIcon,
  CogIcon,
  BeakerIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const prestations = [
  { name: 'Entretien', description: 'Prenez soin de ce qui compte, nous prenons soin du reste.', href: '/prestations/entretien', icon: WrenchIcon },
  { name: 'Diagnostic', description: 'Comprendre pour mieux agir : votre diagnostic en un clic.', href: '/prestations/diagnostic', icon: ChartBarIcon },
  { name: 'Diagnostic moteur', description: 'Détecter, analyser, optimiser : tout pour votre moteur.', href: '/prestations/diagnostic-moteur', icon: CogIcon },
  { name: 'Vidange BVA', description: 'Fluidité et performance : offrir le meilleur à votre BVA.', href: '/prestations/vidange-bva', icon: BeakerIcon },
  { name: 'Chaîne de distribution', description: 'Préservez la cadence : votre chaîne de distribution en toute sécurité.', href: '/prestations/distribution', icon: LinkIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-grey">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hed Motors</span>
            <img
              alt="logo"
              src="../images/hed-motors.svg"
              className="h-36 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-4 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-white hover:text-dark-blue">
              Nos prestations
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-grey shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {prestations.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-dark-blue"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-grey group-hover:bg-black">
                      <item.icon aria-hidden="true" className="size-6 text-white " />
                    </div>
                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-white hover:text-grey">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          
          <Link to="/realisations" className=" font-semibold text-white hover:text-dark-blue">
            Nos réalisations
          </Link>
          <Link to="/tarifs" className="font-semibold text-white hover:text-dark-blue">
            Nos tarifs
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link to="/contact"
                className="flex justify-center rounded-3xl bg-light-blue px-3 py-1.5 font-semibold text-white shadow-sm hover:bg-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Demander votre devis <span aria-hidden="true">&rarr;</span>
              </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-grey px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">HED Motors</span>
              <img
              alt="logo"
              src="../images/hed-motors.svg"
              className="h-64 w-auto"
            />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white hover:bg-dark-blue">
                    Nos prestations
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {prestations.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-dark-blue"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link to="/realisations"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-dark-blue"
                >
                  Nos réalisations
                </Link>
                <Link to="/tarifs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-dark-blue"
                >
                  Nos tarifs
                </Link>
              </div>
              <div className="py-6">
                <Link to="contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold bg-light-blue text-white shadow-sm hover:bg-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Demandez votre devis
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}