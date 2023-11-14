import { useSelector } from 'react-redux';
import Card from './Card';

const CardsDetail = ({ brandProduct }) => {
    const { products } = useSelector((state) => state.products);

    const filterBrandCards = products.filter((p)=>p.brand.name === brandProduct)


    return(
        <div  className="flex justify-center items-start">

            {
                filterBrandCards?.map((product)=>
                <Card
                key={product.id}
                id={product.id}
                image={product.image}
                brand={product.brand?.name}
                model={product.model}
                price={product.price}
                memory={product.memory}
                storage={product.storage}
                size={product.size}
              />
                )
            }

        </div>
    )
};
export default CardsDetail;