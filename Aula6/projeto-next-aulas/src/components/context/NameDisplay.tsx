"use client";

import { NameContext } from "./NameProvider";
import { useContext } from "react";
import { motion } from "framer-motion";

export const NameDisplay = () => {
    const { name, setName } = useContext(NameContext);
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className="bg-white text-black p-4 rounded-md w-fit">
            <h1 className="text-2xl font-bold">Name: {name}</h1>
            <input className="border-2 border-gray-300 rounded-md p-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </motion.div>
    );
};