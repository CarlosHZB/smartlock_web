// ApiProvider.tsx

import api, { AxiosInstance } from 'axios';
import React, { createContext, ReactNode } from 'react';

interface ApiProviderProps {
    children: ReactNode;
}

export interface ApiContextType {
    apiInstance: AxiosInstance;
    get(path: string): Promise<any>;
    post(path: string, body: any): Promise<any>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
    const apiInstance = api.create({
        baseURL: 'https://web-production-4b19.up.railway.app',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    async function get(path: string): Promise<any> {
        return apiInstance.get(path)
    }

    async function post(path: string, body: any): Promise<any> {
        return apiInstance.post(path, body)
    }

    return (
        <ApiContext.Provider value={{ apiInstance, get, post }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useAPI = () => {
    const context = React.useContext(ApiContext);

    if (!context) {
        throw new Error('useApi deve ser usado dentro de um ApiProvider');
    }

    return context;
};
