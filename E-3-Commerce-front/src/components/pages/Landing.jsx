import Banner from "../UI/Banner";
import Card from "../UI/Card";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getBanners } from '../../store/bannerSlice';
import { getAllProducts } from '../../store/productsSlice';


const Landing =()=>{

    const dispatch = useDispatch();
    const [banner,setBanner] = useState([]);
    const { banners } = useSelector((state)=>state.banners);
    const { products } = useSelector((state) => state.products);
    console.log(products);

    const renderProducts = products.slice(1,4);
    console.log(renderProducts);

    
    

    // useEffect(()=>{
    //     dispatch(getAllProducts());
        
    // });
    //console.log('renderproducts', renderProducts);

    // useEffect(()=>{
    //     dispatch(getBanners());
    //     setBanner(banners);
    // },[banners])

    // console.log(banners);


    return(
        <div className="mt-20">

            <div>
                <Banner banner={renderProducts}/>
            </div>     

            <div>
                <div className="flex justify-center mt-20">
                    <Link to='/tienda' >
                        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >Visitar Tienda</button>                    
                    </Link>                
                </div>

                <div className='flex flex-wrap justify-around'>                    
                {
                    renderProducts.map((p)=>(
                        <Card
                            key={p.id}
                            id={p.id}
                            image={p.image}
                            brand={p.brand?.name}
                            model={p.model}
                            price={p.price}
                            memory={p.memory}
                            storage={p.storage}
                            size={p.size}
                        />
                    ))
                }
                </div>

                <div className="flex justify-center mt-20">
                    <h1 className="text-3xl">Nuestros clientes nos avalan</h1>
                    
                </div>
                <div className="flex justify-center mt-20 MB-20">ACA LAS REVIEW</div>            
            </div>      

            <div>
                <Footer />
            </div>

        </div>
    )
};

export default Landing;