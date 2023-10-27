import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('http://localhost:3001/products');
        const responseData = resp.data || [];
        setProducts(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="mb-3 text-center">
        <h3><b>Lista de Marcas</b></h3>
        <div className='flex flex-start ml-20 px-20'>
          <Link className="px-1 py-1 mr-2 bg-red-400 hover:bg-secondary" to={`/admin/products/create`}>Crear Producto
          </Link>
        </div>
        <ul>
          {products.map((product) => (
            <li className="flex justify-between my-2 border-b border-secondary" key={product.id}>
              <div className="flex">
                {product.image !== null ? <img src={product.image} alt='product' className="rounded-full shadow-lg w-14 h-14" /> : ''}
                <div className="ml-2">
                  <h3 className="text-xl font-bold">{product.model}</h3>
                  <div className="font-light">{product.price}</div>
                  <div className="font-light">{product.memory}</div>
                  <div className="font-light">{product.storage}</div>
                  <div className="font-light">{product.cpu}</div>
                  <div className="font-light">{product.battery}</div>
                  <div className="font-light">{product.size}</div>
                  <div className="font-light">{product.special_features}</div>
                </div>
              </div>
              <div>
                <Link className="px-1 py-1 mr-2 bg-blue-400 hover:bg-secondary" to={`/admin/products/edit/${product.id}`}>
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
