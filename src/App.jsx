import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./pages/Header/Header";
// import Footer from "./pages/Footer/Footer";
import Contact from "./pages/Contact/ContactUs"
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";

import './App.css';

function App() {

  return (
    <>
      <div className="App">

        <Header />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
        {/* <Footer /> */}

      </div>
    </>
  )
}

export default App
