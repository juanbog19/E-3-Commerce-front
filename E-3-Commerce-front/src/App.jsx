import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";
import NavBar from "./components/UI/NavBar";
import UsersLogin from "./components/pages/UsersLogin";
import CartPayment from "./components/cart/CartPayment";
import Dashboard from "./components/dashboard/Dashboard";
import Brands from "./components/dashboard/Brands";
import Products from "./components/dashboard/Products";
import BrandsCreateForm from "./components/dashboard/BrandsCreateForm";
import ProductsCreateForm from "./components/dashboard/ProductsCreateForm";

const App = () => {

  return (
    <div>
      <NavBar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/cart" element={<CartPayment />}/>
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/login' element={<UsersLogin />}/>
        {/* Rutas admin */}
        <Route path='/admin' element={<Dashboard />}/>
        <Route path='/admin/brands' element={<Brands />}/>
        <Route path='/admin/brands/create' element={<BrandsCreateForm />}/>
        <Route path='/admin/products' element={<Products />}/>
        <Route path='/admin/products/create' element={<ProductsCreateForm />}/>
      </Routes>
    </div>
  )
}

export default App