import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axiosURL from '../../tools/axiosInstance'
import UploadWidget from '../UI/UploadWidget'
import { useForm } from 'react-hook-form';

export default function BrandsCreateForm() {

    const navigate = useNavigate()
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm();


    // const [newBrand, setNewBrand] = useState({
    //     "image": "",
    //     "name": "",
    //     "description": ""
    // })

    // const handleChange = (event) => {
    //     const { name, value } = event.target

    //     setNewBrand(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }

    const [imageUrl, setImageUrl] = useState('');

    const handleSetImageUrl = (url) => {
        setImageUrl(url);
        setValue('image', url);
    };

    const onSubmit = async (data) => {
        try {
            const response = await axiosURL.post('/brands', data)

            console.log('Respuesta del servidor:', response.data);

            setValue('image', '');
            setValue('name', '');
            setValue('description', '');

            navigate('/admin/brands')
        } catch (error) {
            console.log('Error al enviar la solicitud:', error)
            console.log('Detalle del error:', error.response.data)
        }
    }

    return (
        <div className='mt-4 ml-64'>
            <Sidebar />

            <div className='flex justify-center'>
                <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  dark:border-gray-300'>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                        <h5 className='text-xl font-medium text-gray-900'>Crear una nueva marca</h5>
                        <div>
                            <label htmlFor="image" className='block mb-2 text-sm font-medium text-gray-900'>Cargar imagen en la nube:</label>
                            <input type="text" {...register('image', { required: 'Este campo es obligatorio.' })} hidden />
                            {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
                            <UploadWidget setImageUrlCallback={handleSetImageUrl} />
                            <div className='flex justify-center'>
                                {imageUrl && <img src={imageUrl} className="mt-3 w-14 h-14" alt="New Brand Image" />}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 '>Nombre:</label>
                            <input type="text" {...register('name', {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio.",
                                },
                                pattern: {
                                    value: /^(?!\s*$).+/i,
                                    message: "El nombre debe ser uno valido.",
                                },
                            })} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400' placeholder='Ingresa el nombre del producto' />
                            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="description" className='block mb-2 text-sm font-medium text-gray-900 '>Descripción:</label>
                            <input type="text" {...register('description', {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio.",
                                },
                                pattern: {
                                    value: /^(?!\s*$).+/i,
                                    message: "La descripcion debe ser una valida.",
                                },
                            })} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400' placeholder='Ingresa la descripcion del producto' />
                            {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
                        </div>
                        <button type='submit' className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Guardar Marca</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
