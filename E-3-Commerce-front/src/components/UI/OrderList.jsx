const OrderList = ({ id, date, brand, model, amount, order }) => {

  return (
    <li className="py-4 border-b">
      <ul>
        <li key={id} className="flex items-center justify-between p-4 bg-gray-100 border border-purple-500 rounded-md">
          <div className="flex flex-col">
            <h1 className="mb-2 text-lg font-bold">Orden #{order}</h1>
            <h4 className="text-sm font-semibold text-gray-600">N° de órden: {id}</h4>
            <p className="text-xs text-gray-500">Fecha de compra: {date}</p>
          </div>
          <div className="flex flex-col items-end">
            {(brand.length > 0 && brand.length === model.length) ? (
              brand.map((_, i) => (
              <div key={i} className="text-sm">
                {brand[i]} - {model[i]}
              </div>
            ))
            ) : (
            <div className="text-sm">
              {brand.length > 0 && `${brand[0]} - ${model[0]}`}
            </div>
          )}
            <span className="mt-2 text-lg font-bold">${amount}</span>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default OrderList;

