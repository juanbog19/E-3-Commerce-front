import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaMarker, FaTrashAlt } from "react-icons/fa";

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
    <div className='mt-4 ml-64'>
      <Sidebar />
      <div className="px-5 text-center">
        <h3><b>Lista de Productos</b></h3>
        <div className='flex flex-start px-6'>
          <Link className=" text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to={`/admin/products/create`}>Crear Producto +</Link>
        </div>
        <ul>
          {products.map((product) => (
            <li className="flex justify-between items-center my-2 border-b border-secondary py-1" key={product.id}>
              <div className="flex items-center flex-shrink-0 w-5/6">
                {product.image !== null ? <img src={product.image} alt='product' className=" shadow-lg w-14 h-14" /> : ''}
                <div className="ml-2 flex flex-col">
                  <h3 className="text-xl font-bold">{product.model} | ${product.price}</h3>
                  <div className="font-light text-sm">
                    {product.memory} RAM | {product.storage} GB | {product.cpu} | {product.battery} mAh | {product.size}" | {product.special_features}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end flex-shrink-0 w-1/6">
                <Link to={`/admin/products/edit/${product.id}`}>
                  <button className="mr-2 text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    <FaMarker />
                  </button>
                </Link>
                <Link to={`/admin/products/delete/${product.id}`}>
                  <button className="text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    <FaTrashAlt />
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
