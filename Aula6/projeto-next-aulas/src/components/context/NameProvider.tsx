"use client";

import { createContext } from "react";
import { useState } from "react";

export const NameContext = createContext<{ name: string, setName: (name: string) => void }>({ name: "", setName: () => { } });

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState("Joao Brito");
    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    );
};