import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "../src/Pages/About/About";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/Shared/404Page/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Review from "./Pages/Home/Review";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<About />} />
        <Route path="/contact" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
