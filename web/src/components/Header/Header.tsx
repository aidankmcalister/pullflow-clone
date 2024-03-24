/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BugAntIcon } from '@heroicons/react/24/outline'

const navigation = [
  {
    name: "What's New",
    href: '#',
  },
  {
    name: 'Setup',
    href: '#',
  },
  {
    name: 'Pricing',
    href: '#',
  },
  {
    name: 'VS Code Extension',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#',
  },
  {
    name: 'Support',
    href: '#',
  },
  {
    name: 'Jobs',
    href: '#',
  },
  {
    name: 'Request a Demo',
    href: '#',
  },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-brand-background">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Your Company</span>
            <BugAntIcon className="h-6 w-auto text-purple-400" />
            <p className="ml-1 text-2xl">Pullflow</p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 text-brand-white"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-brand-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Your Company</span>
              <BugAntIcon className="h-6 w-auto text-purple-400" />
              <p className="ml-1 text-2xl">Pullflow</p>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-brand-white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-3 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 font-light leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <h1 className="mt-5">Legal</h1>
                <a
                  href="#"
                  className="block  rounded-lg px-3 py-2.5 text-sm font-light leading-7 text-white hover:bg-gray-800"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="block  rounded-lg px-3 py-2.5 text-sm font-light leading-7 text-white hover:bg-gray-800"
                >
                  Terms of User
                </a>
              </div>
              <div className="mt-2">
                <button className="mt-6 w-full bg-purple-500 p-4">
                  Sign Up With Slack
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header
