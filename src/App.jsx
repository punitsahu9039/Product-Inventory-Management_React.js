import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Edit from "./pages/Edit";


const App=()=>{
  return(
    <>
  
   
  
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Layout/>} >
  <Route index element={<Home/>}/>
<Route path="Home" element={<Home/>} />
<Route path="Products" element={<Product/>} />
<Route path="addproduct" element={<AddProduct/>}/>
<Route path="edit/:id" element={<Edit/>}/>
<Route path="addproduct/Products" element={<Product/>}/>
<Route path="addproduct/Home" element={<Home/>}/>
<Route path="edit/:id/Products" element={<Product/>}/>
</Route>
</Routes>
    </BrowserRouter>
   


    </>
  )
}
export default App;


