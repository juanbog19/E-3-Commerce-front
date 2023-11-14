import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { postOrder } from '../../store/orderSlice';
import Swal from 'sweetalert2';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

export default function PaypalPayment({ total, clearStore }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: total,             //props.price para que se actualice al price correspondiente
          },
        },
      ],
      description: 'Compra exitosa',
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture(handlePay());
  };

  function handlePay() {
    Swal.fire('El pago ha sido exitoso', 'Click para continuar', 'success');
    dispatch(postOrder({}))
    clearStore();
    navigate('/tienda');                           //deberia redirigir a las órdenes del user
  }

  return (
    <center>
      <div className='flex justify-center mt-20'>
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </center>
  );
}
