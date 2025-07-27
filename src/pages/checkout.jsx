import { useSelector } from 'react-redux';

export default function Checkout() {
    const cart = useSelector((state) => state.cart);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                {cart.map(item => (
                    <div key={item.id} className="flex justify-between py-2 border-b last:border-b-0">
                        <span>{item.title} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className="flex justify-between font-bold mt-4">
                    <span>Total:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                    Place Order
                </button>
            </div>
        </div>
    );
}
