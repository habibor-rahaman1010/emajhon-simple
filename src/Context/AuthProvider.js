import React from 'react';
import { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';

export const AuthContextAPI = createContext();

const AuthProviderAPI = ({ children }) => {
    const allContexts = UseFirebase();

    return (
        <AuthContextAPI.Provider value={allContexts}>
            {children}
        </AuthContextAPI.Provider>
    );
};

export default AuthProviderAPI;