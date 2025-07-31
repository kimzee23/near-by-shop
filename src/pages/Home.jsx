import {
    Box,
    Container,
    Heading,
    Input,
    Select,
    SimpleGrid,
    Button,
    Flex,
} from '@chakra-ui/react';
import { useGetProductsQuery } from '../features/products/productApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import HeroSection from '../components/HeroSection';
import BrandSlider from '../components/BrandSlider';
import ProductCard from '../components/productCard';
import { useState, useEffect } from 'react';

export default function Home() {
    const dispatch = useDispatch();
    const { data, isLoading } = useGetProductsQuery();
    const products = data?.products || [];

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (products.length) {
            setFilteredProducts(products);
        }
    }, [products]);

    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase();
        setSearchTerm(keyword);
        setFilteredProducts(
            products.filter((p) => p.title.toLowerCase().includes(keyword))
        );
    };

    return (
        <Box>
            <HeroSection />
            <BrandSlider />

            {/* New Arrivals */}
            <Box py={10} bg="gray.50">
                <Container maxW="7xl">
                    <Heading fontSize="3xl" mb={6}>
                        New Arrivals
                    </Heading>

                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        justify="space-between"
                        gap={4}
                        mb={6}
                    >
                        <Input
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={handleSearch}
                            w={{ base: '100%', md: '30%' }}
                            bg="white"
                        />

                        <Select
                            onChange={(e) => {
                                const value = e.target.value;
                                let sorted = [...filteredProducts];
                                if (value === 'priceLow') sorted.sort((a, b) => a.price - b.price);
                                if (value === 'priceHigh') sorted.sort((a, b) => b.price - a.price);
                                setFilteredProducts(sorted);
                            }}
                            w={{ base: '100%', md: '30%' }}
                            bg="white"
                        >
                            <option value="">Sort by</option>
                            <option value="priceLow">Price: Low to High</option>
                            <option value="priceHigh">Price: High to Low</option>
                        </Select>
                    </Flex>

                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                            {filteredProducts.slice(0, 4).map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAdd={() => dispatch(addToCart(product))}
                                />
                            ))}
                        </SimpleGrid>
                    )}

                    <Button
                        mt={6}
                        variant="outline"
                        borderRadius="full"
                        _hover={{ bg: 'black', color: 'white' }}
                    >
                        View All
                    </Button>
                </Container>
            </Box>

            {/* Top Selling */}
            <Box py={10}>
                <Container maxW="7xl">
                    <Heading fontSize="3xl" mb={6}>
                        Top Selling
                    </Heading>

                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                        {products.slice(5, 9).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAdd={() => dispatch(addToCart(product))}
                            />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
}
