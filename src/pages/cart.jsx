import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from '../features/cart/cartSlice';

export default function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.map(item => (
                <div key={item.id} className="border p-3 mb-4 flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold">{item.title}</h2>
                        <p>${item.price} x {item.quantity}</p>
                        <div className="flex gap-2 mt-2">
                            <button className="px-2 bg-gray-200" onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                            <button className="px-2 bg-gray-200" onClick={() => dispatch(increaseQty(item.id))}>+</button>
                            <button className="ml-4 text-red-600" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                        </div>
                    </div>
                    <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover" />
                </div>
            ))}
            <div className="text-right font-bold">Subtotal: ${subtotal.toFixed(2)}</div>
        </div>
    );
}