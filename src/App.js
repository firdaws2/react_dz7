import './App.css';
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Busket from "./pages/Busket/Busket";

function App() {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path='/busket' element={<Busket/>}/>
        </Routes>
    </>
  );
}

export default App;
