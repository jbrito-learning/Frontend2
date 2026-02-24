"use client";

/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

const ProductList = ({ products }: { products: Product[] }) => {
    const dispatch = useDispatch();
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((product: Product) => (
                <div key={product.id} className="border-2 border-gray-300 rounded-md p-4">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-gray-500">{product.description}</p>
                    <p className="text-gray-500">{product.price} €</p>
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                    <button className="bg-blue-500 text-white px-4 mt-2 py-2 rounded-md cursor-pointer hover:bg-blue-600" onClick={() => dispatch(addItem(product))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;