"use client";

import { NameContext } from "./NameProvider";
import { useContext } from "react";

export const NameDisplay = () => {
    const { name, setName } = useContext(NameContext);
    return (
        <div>
            <h1>Name: {name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
};