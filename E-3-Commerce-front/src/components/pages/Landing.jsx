import Banner from "../UI/Banner";
import Card from "../UI/Card";
import Footer from "./Footer";
import BackToTop from "../UI/BackToTop";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getAllProducts } from '../../store/productsSlice';
import Review from "../UI/Reviews";
import { getAllOrders, getOrderById } from "../../store/orderSlice";


const Landing =()=>{

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const user = useSelector((state) => state.user?.user);
    const userId = user?.id;

    const renderProducts = (Array.isArray(products) ? products : []).slice(1,4);
    //console.log(renderProducts);

    useEffect(()=>{
        dispatch(getAllProducts());        
    }, []);

    useEffect(() => {
        dispatch(getOrderById(userId))
    }, [])


    return(
        <div className="mt-20">

            <div>
                <Banner />
            </div>     

            <div>
                <div className="flex justify-center mt-20 text-4xl">
                    <Link to='/tienda' >
                        {/* <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >Visitar Tienda</button>                     */}
                        <h1>Nuestros recomendados</h1>
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
                    <h1 className="text-3xl ">Nuestros clientes nos avalan</h1>
                </div>
            </div>      
                <Review/>
            <div>
                <Footer />
            </div>            

            <BackToTop/>

        </div>
    )
};

export default Landing;