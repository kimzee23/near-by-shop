import { useGetProductsQuery } from '../features/products/productApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import HeroSection from '../components/HeroSection';
import BrandSlider from '../components/BrandSlider';
import ProductCard from '../components/ProductCard';
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
            products.filter(p => p.title.toLowerCase().includes(keyword))
        );
    };

    return (
        <div>
            <HeroSection />
            <BrandSlider />

            {/* New Arrivals */}
            <section className="py-10 px-4 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">New Arrivals</h2>

                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full md:w-1/3 px-4 py-2 border rounded"
                    />
                    <select
                        onChange={(e) => {
                            const value = e.target.value;
                            let sorted = [...filteredProducts];
                            if (value === 'priceLow') sorted.sort((a, b) => a.price - b.price);
                            if (value === 'priceHigh') sorted.sort((a, b) => b.price - a.price);
                            setFilteredProducts(sorted);
                        }}
                        className="border px-4 py-2 rounded"
                    >
                        <option value="">Sort by</option>
                        <option value="priceLow">Price: Low to High</option>
                        <option value="priceHigh">Price: High to Low</option>
                    </select>
                </div>

                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {filteredProducts.slice(0, 4).map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAdd={() => dispatch(addToCart(product))}
                            />
                        ))}
                    </div>
                )}

                <button className="mt-6 px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                    View All
                </button>
            </section>

            {/* Top Selling */}
            <section className="py-10 px-4 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Top Selling</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.slice(5, 9).map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAdd={() => dispatch(addToCart(product))}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
