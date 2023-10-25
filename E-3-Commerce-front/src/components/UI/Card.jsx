import {Link} from 'react-router-dom';


const Card = ({id, marca, modelo, img, price}) => {

    
  return (
    <div>
        <div>
            <img src={img} alt={marca} />
        </div>

        <div>
            <h2>{marca}</h2>
        </div>

        <div>
            <p>Modelo:{modelo}</p>
            <p>Price:{price}</p>
        </div>

        <Link to={`/detail/${id}`} >
            <button>Details</button>
        </Link>
</div>
)
}

export default Card;