import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useGetProductByIdQuery } from '../features/products/productApi';

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { data, isLoading, error } = useGetProductByIdQuery(id);

    if (isLoading) {
        return <p className="text-center text-lg mt-10">Loading product...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-10">Failed to load product.</p>;
    }

    return (
        <div className="p-6 md:flex gap-12 max-w-6xl mx-auto">
            <img
                src={data.thumbnail}
                alt={data.title}
                className="w-full md:w-1/2 h-[450px] object-cover rounded-xl shadow-md"
            />
            <div className="flex-1 mt-6 md:mt-0">
                <h1 className="text-3xl font-bold mb-3 text-gray-900">{data.title}</h1>
                <p className="text-gray-500 text-lg mb-4 leading-relaxed">{data.description}</p>
                <p className="text-2xl font-semibold text-teal-600 mb-6">${data.price}</p>
                <button
                    onClick={() => dispatch(addToCart(data))}
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
