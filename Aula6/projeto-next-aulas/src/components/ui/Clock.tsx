"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className=" bg-white text-black p-4 rounded-md w-fit flex flex-col items-center justify-center mx-auto mt-2">
      <h1 className="text-2xl font-bold">Hora Atual: {clock}</h1>
    </motion.div>
  );
};

export default Clock;
