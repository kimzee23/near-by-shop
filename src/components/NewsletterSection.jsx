import { FaEnvelope } from "react-icons/fa";

export default function NewsletterSection() {
    return (
        <section className="bg-black text-white py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-center md:text-left uppercase">
                    Stay up to date about <br className="hidden md:block" />
                    our latest offers
                </h2>

                {/* Email Input + Button */}
                <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
                    <div className="relative w-full">
                        <FaEnvelope className="absolute top-3.5 left-4 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full pl-10 pr-4 py-3 rounded-full text-black bg-gray-100 placeholder-gray-500 text-sm focus:outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition whitespace-nowrap"
                    >
                        Subscribe to Newsletter
                    </button>
                </form>
            </div>
            <div className="bg-green-500 text-white p-4 rounded">
                Tailwind is working!
            </div>



        </section>
    );
}
