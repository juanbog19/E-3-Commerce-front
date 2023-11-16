import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosURL from "../../tools/axiosInstance";
import { FaMarker, FaTrashAlt } from "react-icons/fa";

export default function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosURL.get("/brandsAll");
        const responseData = resp.data || [];
        setBrands(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = async (id) => {
    try {
      await axiosURL.delete(`/brands/${id}`);

      const updatedBrands = brands.map((brand) =>
        brand.id === id ? { ...brand, deleted: !brand.deleted } : brand
      );
      setBrands(updatedBrands);
    } catch (error) {
      console.log("Error al actualizar el estado de las marcas: ", error);
    }
  };

  return (
    <div className="mt-4 ml-64">
      <Sidebar />
      <div className="px-5 text-center">
        <h3>
          <b>Lista de Marcas</b>
        </h3>
        <div className="flex flex-start px-6">
          <Link
            className=" text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            to={`/admin/brands/create`}
          >
            Crear Marca +
          </Link>
        </div>
        <ul>
          {brands.map((brand) => (
            <li
              className="flex justify-between my-2 border-b border-secondary py-1"
              key={brand.id}
            >
              <div className="flex">
                {brand.image !== null ? (
                  <img
                    src={brand.image}
                    alt="Brand"
                    className="rounded-full shadow-lg w-14 h-14"
                  />
                ) : (
                  ""
                )}
                <div className="ml-2">
                  <h3 className="text-xl font-bold">{brand.name}</h3>
                  <div className="font-light">{brand.description}</div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleChange(brand.id)}
                  className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${
                    brand.deleted
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {brand.deleted ? "Borrador" : "Publicado"}
                </button>
                <Link to={`/admin/brands/edit/${brand.id}`}>
                  <button className="mr-2 text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    <FaMarker />
                  </button>
                </Link>

                {/* <Link to={`/admin/brands/delete/${brand.id}`}>
                  <button className="mr-2 text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    <FaTrashAlt />
                  </button>
                </Link> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
