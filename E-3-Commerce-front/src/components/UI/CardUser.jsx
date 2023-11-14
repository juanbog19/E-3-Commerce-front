import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authLogout } from "../../store/userSlice";

export default function CardUser() {

  const dispatch = useDispatch()
  const divRef = useRef();
  const btnRef = useRef();
  const [menuActive, setMenuActive] = useState(false)

  const activeClass = menuActive ? 'absolute' : 'hidden'

  useEffect(() => {
    const outsiderClick = (event) => {
      if (
        menuActive &&
        divRef.current &&
        !divRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setMenuActive(false);
      }
    };

    if (menuActive) {
      document.addEventListener("mousedown", outsiderClick);
    }

    return () => {
      document.removeEventListener("mousedown", outsiderClick);
    };
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const logout = () => {
    dispatch(authLogout())
  }

  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <button ref={btnRef} onClick={toggleMenu} className='relative w-8 h-8 overflow-hidden bg-purple-500 rounded-full  flex items-center justify-center'>
        <FaUserCircle className='text-white text-2xl' />
      </button>
      <div className={`${activeClass} mt-3 z-10 bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44`}>
        <div className="px-4 py-3 text-sm text-gray-900">
          <div>{user.username}</div>
          <div className="font-medium truncate">{user.email}</div>
        </div>
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <Link to='myProfile' onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-100">Mi perfil</Link>
          </li>
          {user.rol && (
            <li>
              <Link to='admin' onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-100">Administrador</Link>
            </li>
          )}
          {/* <li>
            <Link to='#' className="block px-4 py-2 hover:bg-gray-100">Mis ordenes</Link>
          </li> */}
        </ul>
        <div className="py-1">
          <Link onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar Sesión</Link>
        </div>
      </div>
    </div>
  )
}



