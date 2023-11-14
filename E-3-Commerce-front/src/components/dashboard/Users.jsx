import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { FaUserAlt, FaUserAltSlash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import axiosURL from '../../tools/axiosInstance'

export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosURL.get('/users');
        const responseData = resp.data || [];
        setUsers(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = async (id) => {
    try {
      await axiosURL.put(`/users/ban/${id}`);

      const updatedUsers = users.map(user =>
        user.id === id ? { ...user, status: !user.status } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.log('Error al actualizar el estado del usuario: ', error);
    }
  };

  const handlePrivileges = async (id) => {
    try {
      await axiosURL.put(`/users/admin/${id}`);

      const updatedUsers = users.map(user =>
        user.id === id ? { ...user, rol: !user.rol } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.log('Error al actualizar los privilegios del usuario: ', error);
    }
  }

  return (
    <div className='ml-64'>
      <Sidebar />
      <div className="px-5 text-center">
        <h3 className='py-4'><b>Lista de Usuarios</b></h3>
        <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-200'>
              <tr>
                <th scope='col' className='px-6 py-3'>Usuario</th>
                <th scope='col' className='px-6 py-3'>Correo Electrónico</th>
                <th scope='col' className='px-6 py-3'>Google</th>
                <th scope='col' className='px-6 py-3'>Rol</th>
                <th scope='col' className='px-6 py-3'>Estado</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className='bg-white border-b' key={user.id}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.username}</th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.google ? 'Si' : 'No'}</td>
                  <td className="px-6 py-4">
                    <div className='flex items-center '>
                      <button onClick={() => handlePrivileges(user.id)} className="mr-4 text-purple-500 text-2xl">
                        {user.rol ? <FaToggleOn /> : <FaToggleOff />}
                      </button>
                      {user.rol ? 'Administrador' : 'Usuario'}
                    </div>
                  </td>
                  <td className="px-6 py-4"><button onClick={() => handleChange(user.id)} className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${user.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{user.status ? 'Activo' : 'Baneado'}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
