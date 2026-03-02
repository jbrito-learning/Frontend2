"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { increment, decrement, incrementByAmount } from "@/redux/slices/counterSlice";
import { motion } from "framer-motion";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-9xl">{count}</h1>
            <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.3 }} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600" onClick={() => dispatch(increment())}>Increment</motion.button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600" onClick={() => dispatch(decrement())}>Decrement</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-600" onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
        </div>
    );
};

export default Counter;