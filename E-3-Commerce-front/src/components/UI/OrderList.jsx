const OrderList = ({ id, brand, model, amount }) => {

  return (
    <div className="flex">
      <div className="mr-80 text-m">            
          <h1>Producto: {brand} {model}</h1>           
      </div>

      <div className="ml-80 text-lg font-bold">            
          <span >${amount}</span>
      </div>
    </div>
    
          
        
  );
};

export default OrderList;

