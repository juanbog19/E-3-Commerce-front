import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UploadWidget from '../UI/UploadWidget'

export default function ProductsCreateForm() {

    const navigate = useNavigate()

    const [newProduct, setNewProduct] = useState({
        "model": "",
        "image": "",
        "price": "",
        "memory": "",
        "storage": "",
        "cpu": "",
        "battery": "",
        "size": "",
        "special_features": "",
        "id_brand": 1 // -> Cambiar y trabajar en la relacion
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSetImageUrl = (url) => {
        setNewProduct(prevState => ({
            ...prevState,
            image: url
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://localhost:3001/products', newProduct)

            console.log('Respuesta del servidor:', response.data);

            setNewProduct({
                "model": "",
                "image": "",
                "price": "",
                "memory": "",
                "storage": "",
                "cpu": "",
                "battery": "",
                "size": "",
                "special_features": "",
                "id_brand": ""
            })

            navigate('/admin/products')
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
                        <input type="text" name="image" id="image" key="image" value={newProduct.image} onChange={handleChange} hidden />
                        <UploadWidget setImageUrlCallback={handleSetImageUrl} />
                        {newProduct.image && <img src={newProduct.image} className="w-14 h-14" alt="New Brand Image" />}
                    </label>
                    <label htmlFor="model" className='mb-5'>
                        <span>Modelo:</span>
                        <input type="text" placeholder='Ingresa el modelo del producto' name="model" id="model" key="model" value={newProduct.model} onChange={handleChange} required />
                    </label>
                    <label htmlFor="price" className='mb-5'>
                        <span>Precio:</span>
                        <input type="text" placeholder='Ingresa el precio del producto' name="price" id="price" key="price" value={newProduct.price} onChange={handleChange} required />
                    </label>
                    <label htmlFor="memory" className='mb-5'>
                        <span>Memoria:</span>
                        <input type="text" placeholder='Ingresa la memoria del producto' name="memory" id="memory" key="memory" value={newProduct.memory} onChange={handleChange} required />
                    </label>
                    <label htmlFor="storage" className='mb-5'>
                        <span>Almacenamiento:</span>
                        <input type="text" placeholder='Ingresa el almacenamiento del producto' name="storage" id="storage" key="storage" value={newProduct.storage} onChange={handleChange} required />
                    </label>
                    <label htmlFor="cpu" className='mb-5'>
                        <span>CPU:</span>
                        <input type="text" placeholder='Ingresa el cpu del producto' name="cpu" id="cpu" key="cpu" value={newProduct.cpu} onChange={handleChange} required />
                    </label>
                    <label htmlFor="battery" className='mb-5'>
                        <span>Bateria:</span>
                        <input type="text" placeholder='Ingresa la bateria del producto' name="battery" id="battery" key="battery" value={newProduct.battery} onChange={handleChange} required />
                    </label>
                    <label htmlFor="size" className='mb-5'>
                        <span>Tamaño:</span>
                        <input type="text" placeholder='Ingresa el tamaño del producto' name="size" id="size" key="size" value={newProduct.size} onChange={handleChange} required />
                    </label>
                    <label htmlFor="special_features" className='mb-5'>
                        <span>Mas caracter:</span>
                        <input type="text" placeholder='Ingresa mas caracteristicas del producto' name="special_features" id="special_features" key="special_features" value={newProduct.special_features} onChange={handleChange} required />
                    </label>
                    <button type='submit' className="px-1 py-1 mr-2 bg-blue-300 hover:bg-secondary">Guardar</button>
                </form>
            </div>
        </div>
    )
}
