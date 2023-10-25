import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";
import UsersLogin from "./components/pages/UsersLogin";


const App = () => {

  return (
    <div>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/login' element={<UsersLogin/>}/>


      </Routes>

    </div>
  )
}

export default App