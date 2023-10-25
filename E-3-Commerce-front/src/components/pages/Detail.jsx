//import React from 'react'

const Detail = ({celphone}) => {
    const {marca, modelo, img, price} = celphone

  return (
    <div>
        <div>
            <p>Marca:{marca}</p>
        </div>
        <img src={img} alt={marca}/>
        <div>
            <p>Modelo:{modelo}</p>
        </div>
        <div>
            <p>Precio:{price}</p>
        </div>
    </div>
  )
}

export default Detail;