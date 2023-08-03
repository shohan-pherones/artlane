import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Arts from "./pages/Arts";
import ArtDetails from "./pages/ArtDetails";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/arts/:id" element={<ArtDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
