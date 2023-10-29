/* import { useDispatch, useSelector } from 'react-redux';
import { setFilter, fetchFilteredProducts } from '../../store/filterSlice'; */

const Filters = () => {

    /* const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const handleChange = (event) => {
    const { name, value } = event.target;
        dispatch(setFilter({ filterType: name, filterValue: value }));

            // Llamar a la acción para cargar los productos filtrados
        dispatch(fetchFilteredProducts(filters));
    }; */

    const handleType = (event) => {
    // Handle the change in the "Marca" select here
    };
    
    const handlePrice = (event) => {
    // Handle the change in the "Modelo", "Memoria RAM", "Almacenamiento", or "Procesador" select here
    };
    return(
        <div className="flex justify-center space-x-4 mb-4">

        <div className="flex flex-col items-center">
        <legend>Marca</legend>
        <select onChange={(event) => handleType(event)} defaultValue="all">
            <option value="all">Todas las marcas</option>
            <option value="Iphone">Iphone</option>
            <option value="Samsung">Samsung</option>
            <option value="Motorola">Motorola</option>
        </select>
        </div>

        <div className="flex flex-col items-center">
        <legend>Modelo</legend>
        <select onChange={(event) => handlePrice(event)} defaultValue="all">
            <option value="all">Todos los modelos</option>
            <option value="11">iphone 11</option>
            <option value="Samsung">Samsung S23+</option>
            <option value="Oppo">Oppo N2 Flip </option>
            <option value="iphone 15 Pro">15 Pro</option>
        </select>
        </div>

        <div className="flex flex-col items-center">
        <legend>Memoria RAM</legend>
        <select onChange={(event) => handlePrice(event)} defaultValue="all">
            <option value="all">Todas las capacidades</option>
            <option value="4 GB">4 GB</option>
            <option value="6 GB">6 GB</option>
            <option value="8 GB">8 GB</option>
        </select>
        </div>

        <div className="flex flex-col items-center">
        <legend>Almacenamiento</legend>
        <select onChange={(event) => handlePrice(event)} defaultValue="all">
            <option value="all">Todas las capacidades</option>
            <option value="32 GB">32 GB</option>
            <option value="64 GB">64 GB</option>
            <option value="128 GB">128 GB</option>
            <option value="256 GB">256 GB</option>
        </select>
        </div>

        <div className="flex flex-col items-center">
        <legend>Procesador</legend>
        <select onChange={(event) => handlePrice(event)} defaultValue="all">
            <option value="all">Todos los procesadores</option>
            <option value="Android">Android</option>
            <option value="iOs">iOs</option>
        </select>
        </div>  

        </div>
    
    )
}

export default Filters;