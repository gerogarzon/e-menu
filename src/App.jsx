
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./components/main/Main"
import Admin from "./components/admin/Admin"
import {Login} from './pages/Login/Login';
import 'antd/dist/antd.css';  



function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
