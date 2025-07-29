import { Box, Container } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import NewsletterSection from './components/NewsletterSection';
import TestimonialSection from './components/TestimonialSection';
import PaymentPage from "./pages/Payment.jsx";

function App() {
    return (
        <BrowserRouter>
            <Box minH="100vh" display="flex" flexDirection="column">
                {/* Header */}
                <Navbar />

                <Box as="main" flex="1" py={6}>
                    <Container maxW="7xl">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/payment" element={<PaymentPage />} />
                        </Routes>
                        <TestimonialSection />
                    </Container>
                </Box>
                <NewsletterSection />
                <Footer />
            </Box>
        </BrowserRouter>
    );
}

export default App;
