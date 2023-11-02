import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

export default function PaypalPayment() {
  //const [price, setPrice] = useState(0);
  const [pay, setPay] = useState('')
  const navigate = useNavigate();

  // useEffect(() => {
  //   setPrice(10.0);
  // }, []);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '100',             //props.price para que se actualice al price correspondiente
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
    console.log('el pago ha sido exitoso');
    navigate('/');                           //deberia redirigir a las órdenes del user
  }
  const handleChange = (e) => {
    setPay(e.target.value);
  };
 
  return (
    <center>
      <div className='mt-20 flex justify-center'>
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </center>
  );
}
