import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/LoginPage";
import SignUp from "./pages/SignUp/SignUpPage";
import ProductDetail from "./pages/products/detail";
import PreOrderDetail from "./pages/preOrder/preOrderDetail";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route  path="/home" element={<Home />} />
       <Route  path="/login" element={<Login />} />
       <Route path="/signup" element={<SignUp />} />
       <Route  path="/preOrderDetail" element={<PreOrderDetail />} />
       <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

