import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-black text-white px-6 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
                    <p className="text-gray-400 mb-6 text-sm">
                        Find clothes that match your style. Unbeatable quality.
                    </p>
                    <div className="flex gap-4">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Company</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Press</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Support</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Help Center</Link></li>
                        <li><Link to="/">Returns</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Resources</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Developers</Link></li>
                        <li><Link to="/">Support Docs</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-500 text-center">
                <p>© {year} SHOP.CO. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
