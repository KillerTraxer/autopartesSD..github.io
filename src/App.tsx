import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Information from "./pages/Information";
import Favorite from "./pages/Favorite";
import AboutUs from "./pages/AboutUs";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Information />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/info" element={<AboutUs />} />
          <Route path="/ubi" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
