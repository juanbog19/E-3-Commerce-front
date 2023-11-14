import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
  FaUserAlt,
  FaUserAltSlash,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";
import axiosURL from "../../tools/axiosInstance";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosURL.get("/reviews");
        const responseData = resp.data || [];
        console.log(responseData);
        setReviews(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = async (id) => {
    try {
      await axiosURL.delete(`/reviews/${id}`);

      const updatedReviews = reviews.map((review) =>
        review.id === id ? { ...review, status: !review.status } : review
      );
      setReviews(updatedReviews);
    } catch (error) {
      console.log("Error al actualizar el estado de la review: ", error);
    }
  };

  return (
    <div className="ml-64">
      <Sidebar />
      <div className="px-5 text-center">
        <h3 className="py-4">
          <b>Lista de Reviews</b>
        </h3>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Orden
                </th>
                <th scope="col" className="px-6 py-3">
                  Usuario
                </th>
                <th scope="col" className="px-6 py-3">
                  Producto
                </th>
                <th scope="col" className="px-6 py-3">
                  Comentario
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Creado
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr className="bg-white border-b" key={review.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {review.order.order}
                  </th>
                  <td className="px-6 py-4">{review.user.username}</td>
                  <td className="px-6 py-4">{review.product.model}</td>
                  <td className="px-6 py-4">{review.comment}</td>
                  <td className="px-6 py-4">{review.rating}</td>
                  {/* <td className="px-6 py-4">
                    <div className="flex items-center ">
                      {review.rol ? "Administrador" : "Usuario"}
                      <button
                        onClick={() => handlePrivileges(user.id)}
                        className="ml-4 text-purple-500 text-2xl"
                      >
                        {review.rol ? <FaToggleOn /> : <FaToggleOff />}
                      </button>
                    </div>
                  </td> */}
                  <td className="px-6 py-4">{review.date.slice(0, 10)}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleChange(review.id)}
                      className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${
                        review.status
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {review.status ? "Activo" : "Baneado"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
