/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from './logo/me.png'
import Toggle from '../theme/ThemeToggle'
import { Link } from 'react-router-dom'
const navigation = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Blogs', to: '/blogs' },
]

function Navbar({ children }) {

    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <div className="relative z-10 lg:w-full sm:pb-20">
                    <Popover>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                            <nav className="relative flex w-full items-center justify-between sm:h-10">
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto md:justify">
                                        <a href="#" className="flex items-center title">
                                            <span className="sr-only">Mavin Sao</span>
                                            <img
                                                src={logo}
                                                className="h-12 w-auto sm:h-12"
                                            />
                                            <h1 className="font-medium text-gray-500">Mavin Sao</h1>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                        <div className="invisible md:visible md:ml-10 md:pr-4 md:space-x-8">
                                            {navigation.map((item) => (
                                                <Link key={item.name} to={item.to} className="font-medium text-gray-500 hover:text-gray-900">
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                        <Toggle />
                                        <Popover.Button className="bg-white md:invisible inline-flex rounded-md p-2  items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>

                                </div>
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute z-1000 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img
                                                src={logo}
                                                className="h-10 w-auto sm:h-10"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                </div>
            </div>
            {children}
        </div>
    )
}

export default Navbar
