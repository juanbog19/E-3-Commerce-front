import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import UploadWidget from "../UI/UploadWidget";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosURL from "../../tools/axiosInstance";
import { useForm } from "react-hook-form";

export default function ProductsEditForm() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const { brands } = useSelector((state) => state.brands);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const resp = await axiosURL.get(`brands`);
        const responseData = resp.data || {};
        setBrandsNames(responseData);
        //console.log(brandsNames);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrands();
  }, [id]);

  const brandNames = (brands) => {
    const results = [];
    brands.forEach((b) => {
      const brand = b.name;
      if (!results.includes(brand)) {
        results.push(brand);
      }
    });
    return results;
  };

  const [products, setProducts] = useState({
    // model: "",
    // image: "",
    // price: "",
    // memory: "",
    // storage: "",
    // cpu: "",
    // battery: "",
    // size: "",
    // special_features: "",
    // id_brand: "",
  });

  // const [newProduct, setNewProduct] = useState({
  //   //   model: "",
  //   //   image: "",
  //   //   price: "",
  //   //   memory: "",
  //   //   storage: "",
  //   //   cpu: "",
  //   //   battery: "",
  //   //   size: "",
  //   //   special_features: "",
  //   //   id_brand: "",
  // });

  const [brandsNames, setBrandsNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosURL.get(`/products/${id}`);
        const responseData = resp.data || {};
        console.log(responseData);
        // setProducts(responseData);
        // setNewProduct(responseData);
        // console.log(products);
        // console.log(newProduct);
        setValue("image", responseData.image);
        setValue("id_brand", responseData.brand.id);
        setValue("model", responseData.model);
        setValue("price", responseData.price);
        setValue("memory", responseData.memory);
        setValue("storage", responseData.storage);
        setValue("cpu", responseData.cpu);
        setValue("battery", responseData.battery);
        setValue("size", responseData.size);
        setValue("special_features", responseData.special_features);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setNewProduct((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const [imageUrl, setImageUrl] = useState("");

  const handleSetImageUrl = (url) => {
    setImageUrl(url);
    setValue("image", url);
  };

  // const handleSetImageUrl = (url) => {
  //   setNewProduct((prevState) => ({
  //     ...prevState,
  //     image: url,
  //   }));
  // };

  const onSubmit = async (data) => {
    //event.preventDefault();

    try {
      const response = await axiosURL.put(`/products/${id}`, data);

      //console.log('Respuesta del servidor:', response);

      // setNewProduct({
      //   model: "",
      //   image: "",
      //   price: "",
      //   memory: "",
      //   storage: "",
      //   cpu: "",
      //   battery: "",
      //   size: "",
      //   special_features: "",
      //   id_brand: "",
      // });
      setValue("image", "");
      setValue("id_brand", "");
      setValue("model", "");
      setValue("price", "");
      setValue("memory", "");
      setValue("storage", "");
      setValue("cpu", "");
      setValue("battery", "");
      setValue("size", "");
      setValue("special_features", "");

      navigate("/admin/products");
    } catch (error) {
      console.log("Error al enviar la solicitud:", error);
      console.log("Detalle del error:", error.response.data);
    }
  };

  return (
    <div className="mt-4 ml-64">
      <Sidebar />

      <div className="flex justify-center ">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  dark:border-gray-300">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900">
              Editar un producto
            </h5>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Cargar imagen en la nube:
              </label>
              <input
                type="text"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio.",
                  },
                })}
                // name="image"
                // id="image"
                // key="image"
                // value={newProduct.image}
                // onChange={handleChange}
                hidden
              />
              {errors.image && (
                <p className="text-red-500 text-xs">{errors.image.message}</p>
              )}
              <UploadWidget setImageUrlCallback={handleSetImageUrl} />
              <div className="flex justify-center">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    className="mt-3 w-14 h-14"
                    alt="New Brand Image"
                  />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Marca:
              </label>
              <select
                name="id_brand"
                {...register("id_brand", {
                  required: "Este campo es obligatorio",
                })}
                // value={newProduct.id_brand}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
                // onChange={handleChange}
              >
                {brandsNames.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
              {errors.id_brand && (
                <p className="text-red-500 text-xs">
                  {errors.id_brand.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="model"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Modelo:
              </label>
              <input
                type="text"
                {...register("model", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio.",
                  },
                  pattern: {
                    value: /^(?!\s*$).+/i,
                    message: "El nombre debe ser uno valido.",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
                placeholder="Ingresa el modelo del producto"
                name="model"
                id="model"
                key="model"
                // value={newProduct.model}
                // onChange={handleChange}
              />
              {errors.model && (
                <p className="text-red-500 text-xs">{errors.model.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Precio:
              </label>
              <input
                type="text"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio.",
                  },
                  pattern: {
                    value:
                      /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/,
                    message: "Solo se admiten valores numericos.",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
                placeholder="Ingresa el precio del producto"
                name="price"
                id="price"
                key="price"
                // value={newProduct.price}
                // onChange={handleChange}
              />
              {errors.price && (
                <p className="text-red-500 text-xs">{errors.price.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="memory"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Memoria:
              </label>
              <input
                type="text"
                {...register("memory", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio.",
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "Solo se admiten valores numericos.",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
                placeholder="Ingresa la memoria del producto"
                name="memory"
                id="memory"
                key="memory"
                // value={newProduct.memory}
                // onChange={handleChange}
              />
              {errors.memory && (
                <p className="text-red-500 text-xs">{errors.memory.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="storage"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Almacenamiento
              </label>
              <input
                type="text"
                {...register("storage", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio.",
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "Solo se admiten valores numericos.",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
                placeholder="Ingresa el almacenamiento del producto"
                name="storage"
                id="storage"
                key="storage"
                // value={newProduct.storage}
                // onChange={handleChange}
              />
              {errors.storage && (
                <p className="text-red-500 text-xs">{errors.storage.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="cpu"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                CPU:
              </label>
              <input
                type="text"
                {...register("cpu", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio.",
                  },
                  pattern: {
                    value: /^(?!\s*$).+/i,
                    message: "El nombre debe ser uno valido.",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
                placeholder="Ingresa el cpu del producto"
                name="cpu"
                id="cpu"
                key="cpu"
                // value={newProduct.cpu}
                // onChange={handleChange}
              />
              {errors.cpu && (
                <p className="text-red-500 text-xs">{errors.cpu.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="battery"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Bateria:
              </label>
              <input
                type="text"
                {...register("battery", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio.",
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "Solo se admiten valores numericos.",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
                placeholder="Ingresa la bateria del producto"
                name="battery"
                id="battery"
                key="battery"
                // value={newProduct.battery}
                // onChange={handleChange}
              />
              {errors.battery && (
                <p className="text-red-500 text-xs">{errors.battery.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="size"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tamaño:
              </label>
              <input
                type="text"
                {...register("size", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio.",
                  },
                  pattern: {
                    value:
                      /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/,
                    message: "Solo se admiten valores numericos.",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
                placeholder="Ingresa el tamaño del producto"
                name="size"
                id="size"
                key="size"
                // value={newProduct.size}
                // onChange={handleChange}
              />
              {errors.size && (
                <p className="text-red-500 text-xs">{errors.size.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="special_features"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Info adicional:
              </label>
              <input
                type="text"
                {...register("special_features", {
                  required: "Este campo es obligatorio",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400"
                placeholder="Ingresa información adicional del producto"
                name="special_features"
                id="special_features"
                key="special_features"
                // value={newProduct.special_features}
                // onChange={handleChange}
              />
              {errors.special_features && (
                <p className="text-red-500 text-xs">
                  {errors.special_features.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Actualizar Producto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
