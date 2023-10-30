import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Brands() {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get('http://localhost:3001/brands');
                const responseData = resp.data || [];
                setBrands(responseData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    //console.log(brands)

    return (
        <div className='mt-20'>
            <Sidebar />
            <div className="mb-3 text-center">
                <h3><b>Lista de Marcas</b></h3>
                <div className='flex flex-start px-6'>
                    <Link className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to={`/admin/brands/create`}>Crear Marca +</Link>
                </div>
                <ul>
                    {brands.map((brand) => (
                        <li className="flex justify-between my-2 border-b border-secondary py-1" key={brand.id}>
                            <div className="flex">
                                {brand.image !== null ? <img src={brand.image} alt='Brand' className="rounded-full shadow-lg w-14 h-14" /> : ''}
                                <div className="ml-2">
                                    <h3 className="text-xl font-bold">{brand.name}</h3>
                                    <div className="font-light">{brand.description}</div>
                                </div>
                            </div>
                            <div>
                                <Link className="mr-2 text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800" to={`/admin/brands/edit/${brand.id}`}>
                                    Editar
                                </Link>
                                <button className="mr-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
