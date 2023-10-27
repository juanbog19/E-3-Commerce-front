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
        <div>
            <Sidebar />
            <div className="mb-3 text-center">
                <h3><b>Lista de Marcas</b></h3>
                <div className='flex flex-start ml-20 px-20'>
                    <Link className="px-1 py-1 mr-2 bg-red-400 hover:bg-secondary" to={`/admin/brands/create`}>Crear Marca
                    </Link>
                </div>
                <ul>
                    {brands.map((brand) => (
                        <li className="flex justify-between my-2 border-b border-secondary" key={brand.id}>
                            <div className="flex">
                                {brand.image !== null ? <img src={brand.image} alt='Brand' className="rounded-full shadow-lg w-14 h-14" /> : ''}
                                <div className="ml-2">
                                    <h3 className="text-xl font-bold">{brand.name}</h3>
                                    <div className="font-light">{brand.description}</div>
                                </div>
                            </div>
                            <div>
                                <Link className="px-1 py-1 mr-2 bg-blue-400 hover:bg-secondary" to={`/admin/brands/edit/${brand.id}`}>
                                    Editar
                                </Link>
                                <button className="px-1 py-1 mr-2 bg-blue-400 hover:bg-secondary">Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
