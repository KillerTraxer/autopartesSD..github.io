import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Information from "./pages/Information";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import Pending from "./pages/Pending";
import Purchases from "./pages/Purchases";
import Favorite from "./pages/Favorite";
import AboutUs from "./pages/AboutUs";

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Information />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/info" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
