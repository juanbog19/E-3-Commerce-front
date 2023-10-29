const Paginated = ({ productsPerPage, allProducts, paginado }) => {

    const pageNumber = []
    const cantPaginas = Math.ceil(allProducts / productsPerPage)

    for (let i = 1; i <= cantPaginas; i++) {   //el Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
        //i <= 100/15 = 6.66 => Math.ceil(6.66) = 7 => 1 <= 7
        pageNumber.push(i)
    }


    return (
        <nav className='w-full h-12 '>
            <div className='space-x-1 text-center bg-white border-2 border-black border-double rounded-full shadow-xl '>

                {pageNumber && pageNumber.map(number => ( //si en pageNumber hay algo mapealo
                    <span key={number}>
                        <button onClick={() => paginado(number)}>{number}</button> {/* y por cada elemento renderizame un boton y agregales un evento onClick, el cual establecera el numero de pagina en el que me encuentro*/}
                    </span>
                ))}


            </div>
        </nav>
    )
}

export default Paginated