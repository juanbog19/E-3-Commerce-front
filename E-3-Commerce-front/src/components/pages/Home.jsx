import Footer from "./Footer";
import Card from "../UI/Card"
import Filters from "../UI/Filters";
import Ordenamiento from "../UI/Ordenamiento"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Ordenamiento />
            <Card />
            <Filters />
            <Footer />
        </div>
    )
}

export default Home;