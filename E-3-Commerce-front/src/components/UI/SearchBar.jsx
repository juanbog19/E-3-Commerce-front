
/* *****El código comentado será funcional cuando obtengamos las rutas del back y la correspondiente action de redux, también deberá
importarse una libreria de icons**** */


// import { useState } from "react";
// import { useDispatch } from "react-redux";



// const SearchBar = () => {

//     const [celphone, setCelphone] = useState('');

//     const dispatch = useDispatch();
//     // console.log(celphone);

//     const handleInputChange = (event) => {
//         setCelphone(event.target.value);
//     };

//     const handleOnClick = () => {
//         if (!celphone) {
//             alert('Por favor digita algo antes de buscar.');
//         } else {
//             dispatch(getCelphones(celphone));
//             setCelphone('');           
//         } 
//     };

//     const handlerReset = () => {
        
//         setCelphone('');
//         dispatch(getCelphones())
//     };

//     const handleKeyPress = (event) => {
//         if (event.key === "Enter") {
//             // Previene el comportamiento predeterminado del formulario (envío)
//             event.preventDefault();
//             handleOnClick();
//         }
//     };

//     return(
//         <div>
// 				<input value={celphone} onChange={handleInputChange} onKeyPress={handleKeyPress} type='search' placeholder='Buscar...' className="px-12 py-2 border-black rounded-lg"/>
// 				<button className='px-3 py-2 ml-1 text-gray-100 rounded-lg bg-primary hover:bg-secondary' onClick={handleOnClick}>
//                 <Icons icon={faMagnifyingGlass} />
// 				</button>
//                 <button className='px-3 py-2 ml-1 text-gray-100 rounded-lg bg-primary hover:bg-secondary' onClick={handlerReset}>
//                 <Icons icon={faRotateRight} />
//                 </button>                
                
// 			</div>
//     )
// }

// export default SearchBar;


const SearchBar = () => {

    
    const handleInputChange = (event) => {
        
    };

    const handleOnClick = () => {
         
    };

    const handlerReset = () => {
        
        
    };

    const handleKeyPress = (event) => {
        
    };

    return(
        <div className="border-black">
				<input value='celphone' onChange={handleInputChange} onKeyPress={handleKeyPress} type='search' placeholder='Buscar...' className="px-12 py-2 border-black rounded-lg"/>
				<button className='px-3 py-2 ml-1 text-gray-100 rounded-lg bg-primary hover:bg-secondary' onClick={handleOnClick}>
                Buscar
				</button>
                <button className='px-3 py-2 ml-1 text-gray-100 rounded-lg bg-primary hover:bg-secondary' onClick={handlerReset}>
                Reset
                </button>            

			</div>
    )
}

export default SearchBar;