import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Sarah Johnson",
        rating: 5,
        feedback: "This website is amazing! Everything fits perfectly and delivery was fast.",
    },
    {
        name: "Michael Chen",
        rating: 4,
        feedback: "Great variety and good customer service. I’ll definitely come back!",
    },
    {
        name: "Lola Adewale",
        rating: 5,
        feedback: "Affordable and stylish. My favorite online store now!",
    },
];

export default function TestimonialSection() {
    return (
        <section className="bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10 text-gray-900">
                    Our Happy Customers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all"
                        >
                            <div className="flex justify-center mb-4 text-yellow-500">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar key={i} className={i < review.rating ? "" : "text-gray-300"} />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-4">“{review.feedback}”</p>
                            <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
