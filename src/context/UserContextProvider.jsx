import React, { createContext, useState } from 'react'

export const Usercontext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    return (
        <Usercontext.Provider value={{ user, setUser, cart, setCart }}>{children}</Usercontext.Provider>
    )
}

export default UserContextProvider;
