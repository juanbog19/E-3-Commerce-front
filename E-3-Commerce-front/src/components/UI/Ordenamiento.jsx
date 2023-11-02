// /* import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchOrderedProducts } from '../../store/orderingSlice'; */

// const Ordenamiento = () => {

//     /* const dispatch = useDispatch();
//     const products = useSelector((state) => state.ordering.products);

//     useEffect(() => {
//         // Llamada para obtener productos ordenados (aquí especifica tus parámetros)
//         dispatch(fetchOrderedProducts({
//             filterBy: 'brand',
//             filterValue: 'Samsung',
//             orderBy: 'name',
//             orderValue: 'AZ'
//         }));
//     }, [dispatch]); */
    
//     const handleOrder = () => {
        
//     }
    
//     return(
//         <div>
//             <div className="flex flex-col items-center">
//                 <legend>Ordenamiento</legend>
//                 <select onChange={handleOrder}>          
//                     <option value='A-Z'>Precio de menor a mayor</option>
//                     <option value='Z-A'>Precio de mayor a menor</option>
//                 </select>
//         </div>
//         </div>
//     )
// };

// export default Ordenamiento;

/*He importado React y useState desde 'react' porque necesitamos usar el estado local en el componente funcional.

He importado useDispatch de 'react-redux' para poder despachar la acción fetchOrderedProducts.

He agregado un estado local orderValue que se actualizará cuando el usuario seleccione una opción en el select.

En la función handleOrder, obtengo el valor seleccionado y lo uso para despachar la acción fetchOrderedProducts con los parámetros adecuados.

Asegúrate de cambiar el valor de orderBy según el campo por el cual quieres ordenar los productos.

*/


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrderedProducts } from '../../store/orderingSlice';

const Ordenamiento = ({ onOrderChange }) => {
    // const dispatch = useDispatch();
    // const [orderValue, setOrderValue] = useState('AZ');

    // const handleOrder = (e) => {
    //     const selectedValue = e.target.value;
    //     setOrderValue(selectedValue);

    //     dispatch(fetchOrderedProducts({
    //         filterBy: 'brand',
    //         filterValue: 'Samsung',
    //         orderBy: 'price',  // Cambia este valor según el campo por el cual quieres ordenar
    //         orderValue: selectedValue
    //     }));
    // }

    const handleOrder = (e) => {
        onOrderChange(e.target.value);
      }; 

    return (
        <div>
            <div className="flex flex-col items-center">
                <legend>Ordenamiento</legend>
                <select onChange={handleOrder}>
                    <option value='A-Z'>Precio de menor a mayor</option>
                    <option value='Z-A'>Precio de mayor a menor</option>
                </select>
            </div>
        </div>
    );
};

export default Ordenamiento;

