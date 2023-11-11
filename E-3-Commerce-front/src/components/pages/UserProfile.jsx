
import { useSelector } from 'react-redux';
//import OrderList from '../UI/OrderList';

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);
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
      {/* <ul className="border">
        <h3 className="mb-3 text-2xl text-center text-gray-700 uppercase border border-black">
          Order history
          </h3>
        {orders.map((order) => (
          <OrderList key={order.id} order={order} />
        ))}
      </ul> */}
    </div>
  );
};


export default UserProfile;