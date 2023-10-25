import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";


const App = () => {

  return (
    <div>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>} />


      </Routes>

    </div>
  )
}

export default App