import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Cards from '../UI/Cards';
import SearchBar from '../UI/SearchBar';
import Footer from './Footer'


const Home = () => {

  return (
    <>
      <div >
        <SearchBar />
        <div className='flex flex-wrap justify-around'>
          <Cards />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
