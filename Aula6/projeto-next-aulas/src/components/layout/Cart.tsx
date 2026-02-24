"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { clearCart, removeItem } from "@/redux/slices/cartSlice";

const Cart = ({ setIsCartOpen }: { setIsCartOpen: (isOpen: boolean) => void }) => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    return (
        <div className="fixed top-0 right-0 w-[250px] h-full bg-gray-500 z-50"
        >
            <button className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600" onClick={() => setIsCartOpen(false)}>X</button>
            <h1 className="text-2xl font-bold mt-10">Cart</h1>
            <p>Total: {cart.total} €</p>
            <ul>
                {cart.items.map((item) => (
                    <li key={item.id}>{item.name} - {item.price} € <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600" onClick={() => dispatch(removeItem(item.id))}>R</button></li>
                ))}
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
    );
};

export default Cart;