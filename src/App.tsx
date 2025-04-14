import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqComponent from "./components/FaqComponent";
import NavbarComponent from "./components/NavbarComponent";
import FaqPage from "./pages/FaqPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollToTop from "./components/ScrollToTop";
import Drawer from "./components/Drawer";



function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);


  return (
    <>
      <Router>
        <ScrollToTop/>
        <NavbarComponent />
        <Drawer />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/faq" element={<FaqPage />}></Route>
          <Route path="/testimonial" element={<TestimonialPage />}></Route>
          <Route path="/kelas" element={<KelasPage />}></Route>
          <Route path="/syaratketen" element={<SyaratKetentuanPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
