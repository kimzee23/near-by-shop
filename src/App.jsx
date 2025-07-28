import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import NewsletterSection from "./components/NewsletterSection";
import TestimonialSection from './components/TestimonialSection';

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <TestimonialSection />
            <NewsletterSection />
            <Footer />

        </BrowserRouter>
    );
}

export default App;
