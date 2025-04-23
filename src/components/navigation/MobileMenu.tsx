import { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Chapters', href: '/chapters' },
  { name: 'Get Involved', href: '/get-involved' },
  // { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 md:hidden"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <img
                  src="/logo-banner.png"
                  alt="Project Tech"
                  className="h-8 w-auto"
                />
                <button
                  type="button"
                  className="rounded-md text-gray-700 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col items-center space-y-6 flex-1 justify-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-semibold text-gray-900 hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://ko-fi.com/ishaantek"
                  target="_blank"
                  className="mt-6 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Donate
                </a>
              </nav>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}