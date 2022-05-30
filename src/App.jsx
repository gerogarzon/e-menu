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
import Orders from './components/admin/Orders/Orders'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminUsers" element={<Users/>} />
          <Route path="/adminProducts" element={<Products />} />
          <Route path="/adminOrders" element={<Orders/>} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
