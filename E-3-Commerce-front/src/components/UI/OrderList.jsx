// import { useSelector } from "react-redux";


// const OrderList = () => {
    
//     const ordering = useSelector((state) => state.user.orders);

//     return (
//       <li className="border-b py-2">
//         <h4 className="text-lg font-bold">Order #{ordering.id}</h4>
//         <p className="text-gray-600">Date: {ordering.date}</p>
//         <ul>
//           {ordering.map((item) => (
//             <li key={item.id} className="flex justify-between">
//               <span>{item.productName}</span>
//               <span>{item.quantity} x ${item.price}</span>
//             </li>
//           ))}
//         </ul>
//       </li>
//     );
//   };
  
//   export default OrderList;