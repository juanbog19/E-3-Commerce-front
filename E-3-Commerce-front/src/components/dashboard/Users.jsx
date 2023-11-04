import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";

export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('http://localhost:3001/users');
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
      await axios.put(`http://localhost:3001/users/ban/${id}`);

      const updatedUsers = users.map(user =>
        user.id === id ? { ...user, status: !user.status } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.log('Error al actualizar el estado del usuario: ', error);
    }
  };

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
                <th scope='col' className='px-6 py-3'>Rol</th>
                <th scope='col' className='px-6 py-3'>Estado</th>
                <th scope='col' className='px-6 py-3'></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className='bg-white border-b' key={user.id}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.username}</th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.rol}</td>
                  <td className="px-6 py-4">{user.status ? <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Activo</span> : <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Inactivo</span>}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleChange(user.id)} className="mr-2 text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      {user.status ? <FaUserAlt /> : <FaUserAltSlash/>}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
