import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Checkout from './Pages/Checkout';
import Navbar from './assets/components/Navbar';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* ✅ FIXED: dynamic route */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App;