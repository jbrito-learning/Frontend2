"use client";

import { NameContext } from "./NameProvider";
import { useContext } from "react";

const UserProfile = () => {
    const { name } = useContext(NameContext);

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {name}</p>
        </div>
    );
};

export default UserProfile;