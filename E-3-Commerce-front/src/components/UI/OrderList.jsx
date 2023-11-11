import { useEffect } from "react";
import axiosURL from '../../tools/axiosInstance';
import { useState } from "react";

const OrderList = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
      axiosURL.get("/orders/")
        .then((response) => {
          setOrder(response.data); 
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);


  return (
    <li className="py-2 mt-20 border-b">
      <h4 className="text-lg font-bold">Order #{order.id}</h4>
      <p className="text-gray-600">Date: {order.date}</p>
      <ul>
        {order.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.productName}</span>
            <span>{item.quantity} x ${item.price}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default OrderList;