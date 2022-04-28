
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "../src/components/main/Main"
import Admin from '../src/components/layout/Admin'


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<Main />} />
    </Routes>

  </BrowserRouter>
   </>
  );
}

export default App;
