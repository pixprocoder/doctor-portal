import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "../src/Pages/About/About";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/Shared/404Page/NotFound";
import Header from "./Pages/Shared/Header/Header";
import Review from "./Pages/Home/Review";
import Contact from "./Pages/Home/Contact";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
