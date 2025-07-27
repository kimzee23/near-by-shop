import { useSelector, useDispatch } from 'react-redux';
import {
    removeFromCart,
    increaseQty,
    decreaseQty,
} from '../features/cart/cartSlice';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            {cart.length === 0 ? (
                <p className="text-gray-600 text-center">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border p-4 rounded-lg shadow-sm"
                            >
                                <div className="flex gap-4 items-center">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div>
                                        <h2 className="font-semibold text-lg">{item.title}</h2>
                                        <p className="text-gray-600">
                                            ${item.price} x {item.quantity}
                                        </p>
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                onClick={() => dispatch(decreaseQty(item.id))}
                                                className="px-3 py-1 bg-gray-200 rounded"
                                            >
                                                -
                                            </button>
                                            <button
                                                onClick={() => dispatch(increaseQty(item.id))}
                                                className="px-3 py-1 bg-gray-200 rounded"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                className="ml-4 text-red-500 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-lg font-medium text-gray-800">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-right mt-8">
                        <p className="text-xl font-semibold">
                            Subtotal: ${subtotal.toFixed(2)}
                        </p>
                        <button className="mt-4 px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800">
                            Go to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
