// En Cards.js
import Card from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getAllProducts } from "../../store/productsSlice";

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const { products } = useSelector((state) => state.products);

  return (
    <div className='flex flex-wrap justify-around'>
      {products &&
        products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            brand={product.brand.name}
            model={product.model}
            price={product.price}
            memory={product.memory}
            storage={product.storage}
            size={product.size}
          />
        ))}
    </div>
  );
};

export default Cards;
