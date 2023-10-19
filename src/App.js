import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Program from "./Pages/Program";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Impressum from "./Pages/Impressum";


function App() {
  return (
    <>
    <Header/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="program" element={ <Program/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="impressum" element={ <Impressum/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
