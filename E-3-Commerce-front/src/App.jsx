import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";
import NavBar from "./components/UI/NavBar";
import About from "./components/pages/About"
import ContactUs from "./components/pages/ContactUs"
import Dashboard from "./components/dashboard/Dashboard";
import Brands from "./components/dashboard/Brands";
import Products from "./components/dashboard/Products";
import BrandsCreateForm from "./components/dashboard/BrandsCreateForm";
import ProductsCreateForm from "./components/dashboard/ProductsCreateForm";
import Login from "./components/UI/Login";
import SignUp from "./components/UI/SignUp";
import Users from "./components/dashboard/Users";
import Orders from "./components/dashboard/Orders";
import Checkout from "./components/pages/Checkout";
import BrandsEditForm from "./components/dashboard/BrandsEditForm";
import ProductsEditForm from "./components/dashboard/ProductsEditForm";
import Landing from "./components/pages/Landing";
import UserProfile from "./components/pages/UserProfile";
import OrderList from "./components/UI/OrderList";


const App = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/admin");
  return (
    <div>
      {!isDashboardRoute && <NavBar />}
      <Routes>
      <Route path='/' element={<Landing />} />
        <Route path='/tienda' element={<Home />} />
        <Route path='/myProfile' element={<UserProfile />} />
        <Route path='/orders' element={<OrderList />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />    
        <Route path='/contacto' element={<ContactUs />} />    
        <Route path='/checkout' element={<Checkout />} />
        {/* Rutas admin */}
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/brands' element={<Brands />} />
        <Route path='/admin/brands/create' element={<BrandsCreateForm />} />
        <Route path='/admin/brands/edit/:id' element={<BrandsEditForm />} />
        <Route path='/admin/products' element={<Products />} />
        <Route path='/admin/products/create' element={<ProductsCreateForm />} />
        <Route path='/admin/products/edit/:id' element={<ProductsEditForm />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/orders' element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App