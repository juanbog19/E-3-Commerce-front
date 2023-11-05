import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import UploadWidget from '../UI/UploadWidget'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axiosURL from '../../tools/axiosInstance'

export default function ProductsEditForm() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { brands } = useSelector((state) => state.brands);

  const brandNames = (brands) => {
    const results = [];
    brands.forEach((b) => {
      const brand = b.name;
      if (!results.includes(brand)) {
        results.push(brand);
      }
    });
    return results;
  };

  const [products, setProducts] = useState({
    model: "",
    image: "",
    price: "",
    memory: "",
    storage: "",
    cpu: "",
    battery: "",
    size: "",
    special_features: "",
    id_brand: "",
  })

  const [newProduct, setNewProduct] = useState({
    model: "",
    image: "",
    price: "",
    memory: "",
    storage: "",
    cpu: "",
    battery: "",
    size: "",
    special_features: "",
    id_brand: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosURL.get(`/products/${id}`);
        const responseData = resp.data || {};
        setProducts(responseData);
        setNewProduct(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

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
      const response = await axiosURL.put(`/products/${id}`, newProduct)

      //console.log('Respuesta del servidor:', response);

      setNewProduct({
        model: "",
        image: "",
        price: "",
        memory: "",
        storage: "",
        cpu: "",
        battery: "",
        size: "",
        special_features: "",
        id_brand: "",
      })

      navigate('/admin/products')
    } catch (error) {
      console.log('Error al enviar la solicitud:', error)
      console.log('Detalle del error:', error.response.data)
    }
  }

  //console.log(products)

  return (
    <div className="mt-4 ml-64">
      <Sidebar />

      <div className="flex justify-center ">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  dark:border-gray-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900">Crear un nuevo producto</h5>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Cargar imagen en la nube:</label>
              <input type="text" name="image" id="image" key="image" value={newProduct.image} onChange={handleChange} hidden />
              <UploadWidget setImageUrlCallback={handleSetImageUrl} />
              <div className="flex justify-center">
                {newProduct.image && (<img src={newProduct.image} className="mt-3 w-14 h-14" alt="New Brand Image" />)}
              </div>
            </div>
            <div>
              <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Marca:</label>
              <select name="id_brand" value={newProduct.id_brand} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400" onChange={handleChange}>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900">Modelo:</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400" placeholder="Ingresa el modelo del producto" name="model" id="model" key="model" value={newProduct.model} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Precio:</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400" placeholder="Ingresa el precio del producto" name="price" id="price" key="price" value={newProduct.price} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="memory" className="block mb-2 text-sm font-medium text-gray-900">Memoria:</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400" placeholder="Ingresa la memoria del producto" name="memory" id="memory" key="memory" value={newProduct.memory} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="storage" className="block mb-2 text-sm font-medium text-gray-900">Almacenamiento</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400" placeholder="Ingresa el almacenamiento del producto" name="storage" id="storage" key="storage" value={newProduct.storage} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="cpu" className="block mb-2 text-sm font-medium text-gray-900">CPU:</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400" placeholder="Ingresa el cpu del producto" name="cpu" id="cpu" key="cpu" value={newProduct.cpu} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900">Bateria:</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400" placeholder="Ingresa la bateria del producto" name="battery" id="battery" key="battery" value={newProduct.battery} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900">Tamaño:</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400" placeholder="Ingresa el tamaño del producto" name="size" id="size" key="size" value={newProduct.size} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="special_features" className="block mb-2 text-sm font-medium text-gray-900">Info adicional:</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400" placeholder="Ingresa información adicional del producto" name="special_features" id="special_features" key="special_features" value={newProduct.special_features} onChange={handleChange} required />
            </div>
            <button type="submit" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Actualizar Producto</button>
          </form>
        </div>
      </div>
    </div>
  )
}
