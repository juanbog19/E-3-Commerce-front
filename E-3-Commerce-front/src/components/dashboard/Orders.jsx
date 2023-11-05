import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axiosURL from '../../tools/axiosInstance'

export default function Orders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await axiosURL.get('/orders');
            const responseData = resp.data || [];
            setOrders(responseData);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const formatDateString = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses son base 0
        const year = date.getFullYear().toString().slice(2, 4);
    
        return `${day}/${month}/${year}`;
      };

    return (
        <div className='ml-64'>
            <Sidebar />
            <div className="px-5 text-center">
                <h3 className='py-4'><b>Lista de Ordenes</b></h3>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-200'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>Orden</th>
                                <th scope='col' className='px-6 py-3'>Monto</th>
                                <th scope='col' className='px-6 py-3'>Fecha</th>
                                <th scope='col' className='px-6 py-3'>Cliente</th>
                                <th scope='col' className='px-6 py-3'>Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr className='bg-white border-b' key={order.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{order.order}</th>
                                    <td className="px-6 py-4">{order.amount} USD</td>
                                    <td className="px-6 py-4">{formatDateString(order.date)}</td>
                                    <td className="px-6 py-4">{order.user.username}</td>
                                    <td className="px-6 py-4">{order.product.brand.name} {order.product.model}, {order.product.memory}RAM-{order.product.storage}GB</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
