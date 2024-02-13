import React, { createContext, useState } from 'react'

export const Usercontext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <Usercontext.Provider value={{ user, setUser }}>{children}</Usercontext.Provider>
    )
}

export default UserContextProvider;
