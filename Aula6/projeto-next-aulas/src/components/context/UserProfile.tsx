"use client";

import { motion } from "framer-motion";
import { NameContext } from "./NameProvider";
import { useContext } from "react";

const UserProfile = () => {
    const { name } = useContext(NameContext);

    return (
        <motion.div initial={{ scale: 0.3 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="bg-white text-black p-4 rounded-md w-fit">
            <h1 className="text-2xl font-bold">User Profile</h1>
            <p className="text-lg">Name: {name}</p>
        </motion.div>
    );
};

export default UserProfile;