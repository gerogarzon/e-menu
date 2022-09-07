import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Admin from "./components/admin/Admin";
import Users from "./components/admin/Users/Users";
import { Login } from "./pages/Login/Login";
import "antd/dist/antd.css";
import { Register } from "./pages/Register/Register";
import Products from "./components/admin/Products/Products";
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros";
import Orders from "./components/admin/Orders/Orders";
import Error404 from "./pages/404/Error404";
import { CartProvider } from "./context/CartContext";
// import { AuthProvider } from "./context/AuthContext";
// import PublicRoutes from "./routes/PublicRoutes";
// import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sobreNosotros" element={<SobreNosotros />} />
            <Route path="/Error404" element={<Error404 />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminUsers" element={<Users />} />
            <Route path="/adminProducts" element={<Products />} />
            <Route path="/adminOrders" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
