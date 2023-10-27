import Card from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getAllProducts } from "../../redux/store/productsSlice";


const Cards = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

    const { products } = useSelector((state)=>state.products)
    console.log(products);

   
    return (
    <div>
        {products && products.map((product)=>
            <Card
            key={product.id}
            id={product.id}
            image={product.image}
            brand={product.brand.name}
            model={product.model}
            price={product.price}
            />
        )}
    </div>
    )
};

export default Cards;