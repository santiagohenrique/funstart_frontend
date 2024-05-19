import React, { createContext, useState, ReactNode } from "react";

interface AuthData {
    name: string | null;
    token: string | null;
}

export interface AuthContextType extends AuthData {
    login: (name: string, token: string) => void;
    logout: () => void;
}

const initialAuthData: AuthData = {
    name: null,
    token: null,
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>(initialAuthData);

    const login = (name: string, token: string) => {
        setAuthData({ name, token });
    };

    const logout = () => {
        setAuthData(initialAuthData);
    };

    return (
        <AuthContext.Provider value={{ ...authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};