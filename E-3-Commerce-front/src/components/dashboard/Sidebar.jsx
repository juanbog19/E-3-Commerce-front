import React from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaUserAlt,
  FaWeightHanging,
  FaTag,
  FaBox,
  FaSignInAlt,
  FaCommentAlt,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { authLogout } from "../../store/userSlice";
import { cleanOrders } from "../../store/orderSlice";

export default function Sidebar() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authLogout());
    dispatch(cleanOrders())
  };

  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-purple-600 ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={`/`}
                className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-purple-800 group"
              >
                <FaGlobe />
                <span className="ml-3">Ver Sitio</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/admin/brands`}
                className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-purple-800 group"
              >
                <FaTag />
                <span className="flex-1 ml-3 whitespace-nowrap">Marcas</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/admin/products`}
                className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-purple-800 group"
              >
                <FaWeightHanging />
                <span className="flex-1 ml-3 whitespace-nowrap">Productos</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/admin/orders`}
                className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-purple-800 group"
              >
                <FaBox />
                <span className="flex-1 ml-3 whitespace-nowrap">Ordenes</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/admin/users`}
                className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-purple-800 group"
              >
                <FaUserAlt />
                <span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/admin/reviews`}
                className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-purple-800 group"
              >
                <FaCommentAlt />
                <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
              </Link>
            </li>
          </ul>
          <div>
            <Link
              onClick={logout}
              to="/"
              className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-purple-800 group"
            >
              <FaSignInAlt />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Cerrar Sesión
              </span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
