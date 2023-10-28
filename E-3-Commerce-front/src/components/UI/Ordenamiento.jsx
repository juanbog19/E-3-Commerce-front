/* import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderedProducts } from '../../store/orderingSlice'; */

const Ordenamiento = () => {

    /* const dispatch = useDispatch();
    const products = useSelector((state) => state.ordering.products);

    useEffect(() => {
        // Llamada para obtener productos ordenados (aquí especifica tus parámetros)
        dispatch(fetchOrderedProducts({
            filterBy: 'brand',
            filterValue: 'Samsung',
            orderBy: 'name',
            orderValue: 'AZ'
        }));
    }, [dispatch]); */
    
    const handleOrder = () => {
        
    }
    
    return(
        <div>
            <div className="flex flex-col items-center">
                <legend>Ordenamiento</legend>
                <select onChange={handleOrder}>          
                    <option value='A-Z'>De menor a mayor</option>
                    <option value='Z-A'>De mayor a menor</option>
                    <option value='Z-A'>Calificaciones</option>
                </select>
        </div>
        </div>
    )
};

export default Ordenamiento;