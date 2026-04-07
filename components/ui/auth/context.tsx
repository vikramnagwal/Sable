'use client';

import { createContext, useContext, useState } from "react"

type RegisterContextProps = {
    email: string;
    password: string;
    steps: 'signup' | 'verify';
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setSteps: (steps: 'signup' | 'verify') => void;
}

const RegisterContext = createContext<RegisterContextProps | undefined>(undefined);

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [steps, setSteps] = useState<'signup' | 'verify'>('signup');

    return (
        <RegisterContext.Provider value={{ email, password, steps, setEmail, setPassword, setSteps }}>
            {children}
        </RegisterContext.Provider>
    );
}

export function useRegisterContext() {
    const context = useContext(RegisterContext);

    if (!context) {
        throw new Error('useRegisterContext must be used within a RegisterProvider');
    }
}