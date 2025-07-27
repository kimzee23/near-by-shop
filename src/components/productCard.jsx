import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const { id, thumbnail, title, price, discountPercentage, rating } = product;

    const oldPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

    return (
        <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">
            <Link to={`/product/${id}`}>
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-base md:text-lg font-medium line-clamp-1 text-gray-900">{title}</h3>
            </Link>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="text-gray-500 ml-1">{rating}</span>
            </div>
            <div className="mt-2 text-gray-800 font-medium flex items-center gap-2">
                <span className="text-base font-semibold">${price}</span>
                {discountPercentage > 0 && (
                    <>
                        <span className="line-through text-gray-400 text-sm">${oldPrice}</span>
                        <span className="text-red-500 text-sm">-{Math.round(discountPercentage)}%</span>
                    </>
                )}
            </div>
            <button
                onClick={() => dispatch(addToCart(product))}
                className="mt-3 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-xl text-sm font-medium"
            >
                Add to Cart
            </button>
        </div>
    );
}
