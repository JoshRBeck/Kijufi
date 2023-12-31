import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Program from "./Pages/Program";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Impressum from "./Pages/Impressum";
import Zeichnungen from "./Components/ImagesDisplay";
import Datenschutz from "./Pages/Datenschutz";
import { useEffect, } from "react"
import TeilFestival from "./Components/TeilFestival";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="program" element={<Program />} />
        <Route path="contact" element={<Contact />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="zeichnungen" element={<Zeichnungen />} />
        <Route path="datenschutz" element={<Datenschutz />} />
        <Route path="program/teilfestival" element={<TeilFestival />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
