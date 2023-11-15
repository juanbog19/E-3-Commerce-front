import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../store/orderSlice';
import { setHasPurchased } from '../../store/userSlice'; // Ajusta la ruta correcta
import { useState } from 'react';
import Swal from 'sweetalert2';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

export default function PaypalPayment({ total, clearStore }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.user);
  const selectedProduct = useSelector((state) => state.cart.items);
  const isLoggedIn = useSelector((state) => state.user.loggedin);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: total,
          },
        },
      ],
      description: 'Compra exitosa',
    });
  };

  //console.log('VERIFICAR:::::: ',selectedProduct.map(item => item.id))

  const onApprove = async (data, actions) => {
    try {
      if (isLoggedIn && loggedInUser && selectedProduct) {
        const orderResponse = await actions.order.capture();
        const { id: transactionId } = orderResponse;

        dispatch(
          postOrder({
            order: transactionId,
            amount: total,
            id_user: loggedInUser.id,
            id_products: selectedProduct.map(item => item.id),
          })
        );

        dispatch(setHasPurchased(true)); 

        Swal.fire('El pago ha sido exitoso', 'Click para continuar', 'success');
        clearStore();
        navigate('/thankYouPage');
      } else {
        //console.log(error)
        Swal.fire('Usuario no autenticado o producto no seleccionado', 'Click para continuar', 'error');
      }
    } catch (error) {
      console.error('Error al capturar la orden:', error);
  
      // Muestra el error específico en la consola del navegador
      console.error('Error específico:', error);
  
      // Muestra un mensaje de error detallado al usuario
      Swal.fire(`Hubo un error al procesar el pago: ${error.message}`, 'Click para continuar', 'error');
   }
  };

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
