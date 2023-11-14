

const OrderList = ({ id,date,brand,model,amount,order }) => {  

  // console.log('estas son las ordenes del usuario en orderlist',order);


  return (
    <li className="py-4 border-b">
      <ul>
        <li key={id} className="flex items-center justify-between p-4 bg-gray-100 border border-black">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Order #{order}</h1>
            <h4 className="text-lg font-bold">N° de órden: {id}</h4>
            <p className="text-gray-600">Date: {date}</p>
          </div>
          <div className="flex flex-col">
            <span>{brand} </span>
            <span>{model}</span>
            <span className="text-lg font-bold">${amount}</span>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default OrderList;


