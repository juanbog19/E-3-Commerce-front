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
        const {name, value} = event.target

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
        <div>
            <Sidebar />

            <div className='flex justify-center '>
                <form onSubmit={handleSubmit} className='flex flex-col bg-red-200'>
                    <label htmlFor="image" className='mb-5 flex'>
                        <span>Imagen:</span>
                        <input type="text" name="image" id="image" key="image" value={newBrand.image} onChange={handleChange} hidden />
                        <UploadWidget setImageUrlCallback={handleSetImageUrl} />
                        {newBrand.image && <img src={newBrand.image} className="w-14 h-14" alt="New Brand Image" />}
                    </label>
                    <label htmlFor="name" className='mb-5'>
                        <span>Nombre:</span>
                        <input type="text" placeholder='Ingresa el nombre del producto' name="name" id="name" key="name" value={newBrand.name} onChange={handleChange} required />
                    </label>
                    <label htmlFor="description" className='mb-5'>
                        <span>Descripción:</span>
                        <input type="text" placeholder='Ingresa la descripcion del producto' name="description" id="description" key="description" value={newBrand.description} onChange={handleChange} required />
                    </label>
                    <button type='submit' className="px-1 py-1 mr-2 bg-blue-300 hover:bg-secondary">Guardar</button>
                </form>
            </div>
        </div>
    )
}
