import { useEffect } from "react";
import axiosURL from '../../tools/axiosInstance';
import { useState } from "react";


const OrderList = ({ id,date,brand,model,amount,order }) => {  

  // console.log('estas son las ordenes del usuario en orderlist',order);


  return (
    <li className="py-2 mt-20 border-b">
      {/* <h4 className="text-lg font-bold">Order #{order.id}</h4>
      <p className="text-gray-600">Date: {order.date}</p> */}
      <ul>
        
          <li key={id} className="flex justify-between">
            <h1 className="text-lg font-bold">Order #{order}</h1>
            <h4 className="text-lg font-bold">N° de órden: {id}</h4>
            <p className="text-gray-600">Date: {date}</p>
            <span>{brand} </span>
            <span>{model}</span>
            {/* usar el quant aca totalPrice = quant * amount y renderizar el total price*/}
            <span> ${amount}</span>
          </li>
      </ul>
    </li>
  );
};

export default OrderList;