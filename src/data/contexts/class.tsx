


// ClassContext.ts

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import ClassRepositoryImpl from '../implementations/repositories/class_repository_impl';
import { Class } from '../models/class';
import { CreateClassProps } from '../repositories/class_repository';
import { useAPI } from '../services/api_provider';

interface ClassContextProps {
    children: ReactNode;
}

interface ClassContextType {
    loading: boolean;
    classes: Class[];
    getAllClasses(): Promise<void>;
    createNewClass(props: CreateClassProps): Promise<void>;
    deleteClass(index: number, idClass: string): Promise<void>;
}

const ClassContext = createContext<ClassContextType | undefined>(undefined);

export const ClassProvider: React.FC<ClassContextProps> = ({ children }) => {
    const provider = useAPI();
    const classRepository = new ClassRepositoryImpl(provider)
    const [loading, setLoading] = useState<boolean>(false)
    const [classes, setClasses] = useState<Class[]>([])

    // Function to remove an item by index
    const removeClass = (index: number) => {
        const updatedItems = [...classes]; // Create a copy of the original list
        updatedItems.splice(index, 1); // Remove the item at the specified index
        setClasses(updatedItems); // Update the state with the modified list
    };

    useEffect(() => {
        getAllClasses()
    }, []);


    async function getAllClasses(): Promise<void> {
        try {
            setLoading(true)
            const classes = await classRepository.getAllClasses();
            setClasses(classes)
        } catch (error) {
            throw error;
        } finally {
            setLoading(false)
        }
    }

    async function createNewClass(props: CreateClassProps): Promise<void> {
        try {
            setLoading(true)
            await classRepository.createClass(props);
        } catch (error: any) {
            throw error.response.data.message;
        } finally {
            setLoading(false)
        }
    }

    async function deleteClass(index: number, idClass: string): Promise<void> {
        try {
            await classRepository.deleteClass(idClass);
            removeClass(index)
        } catch (error: any) {
            throw error.response.data.message;
        }
    }

    return (
        <ClassContext.Provider value={{
            loading,
            classes,
            getAllClasses,
            createNewClass,
            deleteClass
        }}>
            {children}
        </ClassContext.Provider>
    );
};

export const useClass = () => {
    const context = useContext(ClassContext);

    if (!context) {
        throw new Error('useClass deve ser usado dentro de um DataProvider');
    }

    return context;
};
