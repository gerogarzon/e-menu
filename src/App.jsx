import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Admin from "./components/admin/Admin";
import UsersClick from "./components/admin/Users/UsersClick";
import { Login } from "./pages/Login/Login";
import "antd/dist/antd.css";
import { Register } from "./pages/Register/Register";
import ProductsClick from "./components/admin/Products/ProductsClick";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminUsers" element={<UsersClick />} />
          <Route path="/adminProducts" element={<ProductsClick />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
