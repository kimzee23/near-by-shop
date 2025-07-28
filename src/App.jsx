import { Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import NewsletterSection from './components/NewsletterSection';
import TestimonialSection from './components/TestimonialSection';

function App() {
    return (
        <BrowserRouter>
            <Box minH="100vh" display="flex" flexDirection="column">
                <Navbar />
                <Box as="main" flex="1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                    <TestimonialSection />
                    <NewsletterSection />
                </Box>
                <Footer />
            </Box>
        </BrowserRouter>
    );
}

export default App;
