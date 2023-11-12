
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axiosURL from '../../tools/axiosInstance';
import OrderList from '../UI/OrderList';

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);
  const userId = user.id
  const [order, setOrder] = useState([]);
  //console.log(order);

  useEffect(() => {
    axiosURL.get(`/orders/user/${userId}`)
      .then((response) => {
        console.log('estas son las ordenes del usuario en myprofile',response.data);
        setOrder(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  //const orders = useSelector((state) => state.user.orders);

  return (
    <div className="my-10 mt-20 border-collapse font-abril">
      <h1 className="mb-3 text-2xl text-center uppercase">
        Perfil Del Usuario
      </h1>
      <div className="mb-3 text-2xl text-gray-700 uppercase align-middle border border-black">
        <h2 className="mx-3">
          Nombre: {user ? user.username : ''}
        </h2>
        <h2 className="mx-3">
          Email: {user ? user.email : ''}
        </h2>
      </div>
      <ul className="border">
        <h3 className="mb-3 text-2xl text-center text-gray-700 uppercase border border-black">
          Order history
          </h3>

          {/* cuando este hecho el slice agregar una prop "quant" */}
        {order.map((order,index) => (
          <OrderList 
          key={index} 
          id={order.id}
          date={order.date}
          brand={order.product.brand.name}
          model={order.model}
          amount={order.amount}
          order={order.order} />
        ))}
      </ul>
    </div>
  );
};


export default UserProfile;