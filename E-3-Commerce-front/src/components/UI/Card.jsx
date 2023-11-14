import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import Swal from "sweetalert2";


const Card = ({ id, image, brand, model, price, memory, storage, size }) => {
    
    const dispatch = useDispatch();


    const add = () => {
        const item = { id, image, brand, model, price, memory, storage, size };
        dispatch(addItem(item));
        Swal.fire("Producto agregado", "Click para continuar", "success");
    };

    return (
        <>
            <div className='mt-10 mb-10 ml-8 mr-8 shadow-lg w-80'>
                <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-100">
                    <Link to={`/detail/${id}`}>
                        <img className='p-8 rounded-t-lg' src={image} alt={brand} />
                    </Link>
                    <div className='px-5 pb-5'>
                        <Link to={`/detail/${id}`}>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-5">{brand}, {model}, {memory} RAM, {storage} GB, {size} pulgadas</h5>
                        </Link>
                        <div className='flex items-center justify-between'>
                            <span className="text-3xl font-bold text-gray-900">${price}</span>
                            <button onClick={add} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Añadir al carrito</button>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
