
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllOrders, getOrderById } from '../../store/orderSlice';
import OrderList from '../UI/OrderList';

// const UserProfile = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user?.user);
//   const productsById = useSelector(state => state.orders.orders)
//   const userId = user?.id;
//   console.log(productsById);

//   useEffect(() => {
//     dispatch(getOrderById(userId))

//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto my-10 mt-20 border-collapse">
//       <h1 className="mb-6 text-3xl font-bold text-center uppercase">
//         Perfil del Usuario
//       </h1>
//       <div className="p-4 mb-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
//         <h2 className="mb-2 text-xl font-semibold">
//           Nombre: {user ? user.username : ''}
//         </h2>
//         <h2 className="text-xl font-semibold">
//           Email: {user ? user.email : ''}
//         </h2>
//       </div>
//       <div className="overflow-hidden border rounded-md">
//         <h3 className="px-4 py-3 text-xl font-bold text-gray-700 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
//           Historial de Órdenes
//         </h3>
//         <ul>
//           {productsById.map((order, index) => (
//             <OrderList
//               key={index}
//               id={order.id}
//               date={order.date}
//               brand={order.products.brand ? order.products.brand.name : 'no se encontró marca'}
//               model={order.products ? order.products.model : 'no se encontró modelo'}
//               amount={order.amount}
//               order={order.order}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };


// export default UserProfile;


const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const orders = useSelector((state) => state.orders.orders); // Updated variable name
  const userId = user?.id;

  useEffect(() => {
    dispatch(getOrderById(userId));
  }, [dispatch, userId]);

  return (
    <div className="max-w-4xl mx-auto my-10 mt-20 border-collapse">
      
      <h1 className="mb-6 text-3xl font-bold text-center uppercase">
         Perfil del Usuario
       </h1>
       <div className="p-4 mb-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
         <h2 className="mb-2 text-xl font-semibold">
           Nombre: {user ? user.username : ''}
         </h2>
         <h2 className="text-xl font-semibold">
           Email: {user ? user.email : ''}
         </h2>
       </div>
       <div className="overflow-hidden border rounded-md">
         <h3 className="px-4 py-3 text-xl font-bold text-gray-700 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
           Historial de Órdenes
         </h3>
</div>
      <ul className="flex flex-col mb-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300"> 
        {orders.map((order) => (
          <div key={order.id}>
            <h3 className="text-lg font-semibold">Orden ID: {order.id}</h3>
            <p>Fecha: {order.date}</p>            
            {order.products && order.products.length > 0 ? (
              order.products.map((product) => (
                <OrderList
                  key={product.id}
                  id={product.id}                 
                  brand={product.brand ? product.brand.name : 'No se encontró marca'}
                  model={product.model ? product.model : 'No se encontró modelo'}
                  amount={order.amount}                  
                />
              ))
            ) : (
              <p>No hay productos en esta orden.</p>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;