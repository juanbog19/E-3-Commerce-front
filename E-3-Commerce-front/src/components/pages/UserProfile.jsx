
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllOrders, getOrderById } from '../../store/orderSlice';
import OrderList from '../UI/OrderList';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const productsById = useSelector(state => state.orders.orders)
  const userId = user?.id;

  useEffect(() => {
    dispatch(getOrderById(userId))

  }, []);

  return (
    <div className="max-w-4xl mx-auto my-10 mt-20 border-collapse font-abril">
      <h1 className="mb-6 text-3xl font-bold text-center uppercase">
        Perfil del Usuario
      </h1>
      <div className="p-4 mb-6 bg-gray-100 border border-black rounded-md">
        <h2 className="mb-2 text-xl font-semibold">
          Nombre: {user ? user.username : ''}
        </h2>
        <h2 className="text-xl font-semibold">
          Email: {user ? user.email : ''}
        </h2>
      </div>
      <div className="overflow-hidden border rounded-md">
        <h3 className="px-4 py-3 text-xl font-bold text-gray-700 bg-gray-100 border-b border-black">
          Historial de Órdenes
        </h3>
        <ul>
          {productsById.map((order, index) => (
            <OrderList
              key={index}
              id={order.id}
              date={order.date}
              brand={order.products.map(product => product.brand.name)}
              model={order.products.map(product => product.model)}
              amount={order.amount}
              order={order.order}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};


export default UserProfile;