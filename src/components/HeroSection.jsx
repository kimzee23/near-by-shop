import headerImage from '../assets/headerImage.png'; // adjust path if different

export default function HeroSection() {
    return (
        <div className="bg-white px-6 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center">
            <div>
                <h1 className="text-[2.75rem] font-extrabold leading-[1.2] tracking-tight mb-4">
                    FIND CLOTHES <br className="hidden md:block" />
                    THAT MATCHES YOUR STYLE
                </h1>
                <p className="text-gray-500 mb-6">
                    Browse through our diverse range of meticulously crafted garments...
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">Shop Now</button>

                <div className="flex gap-8 mt-8 text-sm text-gray-700">
                    <div><span className="text-xl font-bold text-black">200+</span><br />International Brands</div>
                    <div><span className="text-xl font-bold text-black">2,000+</span><br />High-Quality Products</div>
                    <div><span className="text-xl font-bold text-black">30,000+</span><br />Happy Customers</div>
                </div>
            </div>
            <div>
                <img src={headerImage} alt="Hero" className="rounded-lg shadow" />
            </div>
        </div>
    );
}
