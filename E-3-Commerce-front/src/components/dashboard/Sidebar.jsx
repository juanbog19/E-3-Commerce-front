import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <nav className='bg-white border-gray-200 '>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-purple-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-gray-500 dark:text-purple dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/admin">Inicio</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-purple-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-gray-500 dark:text-purple dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/admin/brands">Marcas</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-purple-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-gray-500 dark:text-purple dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/admin/products">Productos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}