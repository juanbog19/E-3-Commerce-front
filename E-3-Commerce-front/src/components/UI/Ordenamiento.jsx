const Ordenamiento = () => {
    
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