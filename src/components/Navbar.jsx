import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Promo Bar */}
            <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
                <p>
                    Sign up and get 20% off to your first order.{' '}
                    <span className="underline cursor-pointer">Sign Up Now</span>
                </p>
                <button className="text-white text-xl leading-none hover:text-gray-300">&times;</button>
            </div>

            {/* Navbar */}
            <header className="border-b bg-white">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-wider text-gray-900">SHOP.CO</Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
                        <Link to="/">Shop</Link>
                        <Link to="/">On Sale</Link>
                        <Link to="/">New Arrivals</Link>
                        <Link to="/">Brands</Link>
                    </nav>

                    {/* Search Input */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="relative w-full max-w-md">
                            <FaSearch className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                    </div>

                    {/* Cart + Sign In */}
                    <div className="flex items-center gap-4">
                        <Link to="/cart" className="relative text-gray-700 hover:text-black transition">
                            <FaShoppingCart className="text-xl" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <Link to="/profile">
                            <FaUser className="text-xl text-gray-700" />
                        </Link>
                        <button
                            className="md:hidden text-gray-700 text-xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-700">
                        <Link to="/" onClick={() => setIsOpen(false)}>Shop</Link>
                        <Link to="/" onClick={() => setIsOpen(false)}>On Sale</Link>
                        <Link to="/" onClick={() => setIsOpen(false)}>New Arrivals</Link>
                        <Link to="/" onClick={() => setIsOpen(false)}>Brands</Link>
                        <button className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm">
                            Sign In
                        </button>
                    </div>
                )}
            </header>
        </>
    );
}
