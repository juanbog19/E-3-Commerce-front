const OrderList = ({ id, brand, model, amount }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-md">
        <h1 className="text-base font-extralight">
          Producto: {brand} {model}
        </h1>
      </div>

      <div className="text-lg font-bold">
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default OrderList;

