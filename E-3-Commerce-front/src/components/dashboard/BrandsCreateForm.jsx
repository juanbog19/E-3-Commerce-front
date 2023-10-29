import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UploadWidget from '../UI/UploadWidget'

export default function BrandsCreateForm() {

    const navigate = useNavigate()

    const [newBrand, setNewBrand] = useState({
        "image": "",
        "name": "",
        "description": ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setNewBrand(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSetImageUrl = (url) => {
        setNewBrand(prevState => ({
            ...prevState,
            image: url
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://localhost:3001/brands', newBrand)

            console.log('Respuesta del servidor:', response.data);

            setNewBrand({
                "image": "",
                "name": "",
                "description": ""
            })

            navigate('/admin/brands')
        } catch (error) {
            console.log('Error al enviar la solicitud:', error)
            console.log('Detalle del error:', error.response.data)
        }
    }

    return (
        <div className='mt-20'>
            <Sidebar />

            <div className='flex justify-center'>
                <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  dark:border-gray-300'>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <h5 className='text-xl font-medium text-gray-900'>Crear una nueva marca</h5>
                        <div>
                            <label htmlFor="image" className='block mb-2 text-sm font-medium text-gray-900 '>Cargar imagen en la nube:</label>
                            <input type="text" name="image" id="image" key="image" value={newBrand.image} onChange={handleChange} hidden />
                            <UploadWidget setImageUrlCallback={handleSetImageUrl} />
                            <div className='flex justify-center'>
                                {newBrand.image && <img src={newBrand.image} className="mt-3 w-14 h-14" alt="New Brand Image" />}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 '>Nombre:</label>
                            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400' placeholder='Ingresa el nombre del producto' name="name" id="name" key="name" value={newBrand.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="description" className='block mb-2 text-sm font-medium text-gray-900 '>Descripción:</label>
                            <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400' placeholder='Ingresa la descripcion del producto' name="description" id="description" key="description" value={newBrand.description} onChange={handleChange} required />
                        </div>
                        <button type='submit' className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Guardar Marca</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
