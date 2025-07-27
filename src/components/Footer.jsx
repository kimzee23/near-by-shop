import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
                {/* Brand */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">NearByShop.CO</h2>
                    <p className="text-gray-400 text-sm mb-6">
                        We have clothes that suit your style and which you’re proud to wear.
                        From women to men.
                    </p>
                    <div className="flex gap-4">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>

                {/* Columns */}
                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Features</Link></li>
                        <li><Link to="/">Works</Link></li>
                        <li><Link to="/">Career</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Help</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/">Customer Support</Link></li>
                        <li><Link to="/">Delivery Details</Link></li>
                        <li><Link to="/">Terms & Conditions</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/">Free eBooks</Link></li>
                        <li><Link to="/">Development Tutorial</Link></li>
                        <li><Link to="/">How to - Blog</Link></li>
                        <li><Link to="/">Youtube Playlist</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Shop.co All rights reserved</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
            </div>
        </footer>
    );
}
