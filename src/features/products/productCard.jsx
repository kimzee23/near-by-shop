import {Link} from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
    return (
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <Link to={`/product/${product.id}`}>
                <img className="w-full h-48 object-cover" src={product.thumbnail || product.image} alt={product.title} />
                <div className="p-4">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-teal-600 font-bold text-lg">${product.price}</p>
                </div>
            </Link>
            <button
                className="w-full bg-black text-white py-2 text-sm uppercase tracking-wide hover:bg-gray-800 transition"
                onClick={() => onAdd(product)}
            >
                Add to Cart
            </button>
        </div>
    );
}
