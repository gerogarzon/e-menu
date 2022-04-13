
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "../src/components/main/Main"


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
  
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
