"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { increment, decrement, incrementByAmount } from "@/redux/slices/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1 className="text-9xl">{count}</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600" onClick={() => dispatch(increment())}>Increment</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600" onClick={() => dispatch(decrement())}>Decrement</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-600" onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
        </div>
    );
};

export default Counter;