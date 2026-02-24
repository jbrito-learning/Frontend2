"use client";

import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";
const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="bg-blue-500 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Navbar</h1>
            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/store">Store</Link>
                </li>
            </ul>
            <div className="flex gap-4">
                <button onClick={() => toggleCart()}>Cart</button>
            </div>
            {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
        </div>

    );
};

export default Navbar;