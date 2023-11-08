const Paginated = ({ productsPerPage, allProducts, paginado, currentPage }) => {
  const pageNumber = [];
  const cantPaginas = Math.ceil(allProducts / productsPerPage);

  for (let i = 1; i <= cantPaginas; i++) {
    //el Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
    //i <= 100/15 = 6.66 => Math.ceil(6.66) = 7 => 1 <= 7
    pageNumber.push(i);
  }

  return (
    <nav className="w-full h-12 flex justify-center">
      <div className="flex space-x-1 items-center bg-white rounded-full p-2">
        {pageNumber &&
          pageNumber.map((number) => (
            <span key={number}>
              <button
                onClick={() => paginado(number)}
                className={`${
                  number === currentPage
                    ? "bg-violet-300 text-white"
                    : "bg-white text-black"
                } px-3 py-1 rounded-full`}
                disabled={number === currentPage}
              >
                {number}
              </button>
              {/* y por cada elemento renderizame un boton y agregales un evento onClick, el cual establecera el numero de pagina en el que me encuentro*/}
            </span>
          ))}
      </div>
    </nav>
  );
};

export default Paginated;
