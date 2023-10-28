import {Link} from 'react-router-dom';


const Card = ({id, image, brand, model, price}) => {

    
  return (
    <div>
        <div>
            <img src={image} alt={brand} />
        </div>

        <div>
            <h2>{brand}</h2>
        </div>

        <div>
            <p>Modelo:{model}</p>
            <p>Price:{price}</p>
        </div>

        <Link to={`/detail/${id}`} >
            <button>Details</button>
        </Link>
</div>
)
}

export default Card;