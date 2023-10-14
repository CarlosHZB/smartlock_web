// TeacherContext.ts

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import TeacherRepositoryImpl from '../implementations/repositories/teacher_repository_impl';
import { Teacher } from '../models/teacher';
import { useAPI } from '../services/api_provider';

interface TeacherContextProps {
    children: ReactNode;
}

interface TeacherContextType {
    loadingNewTeacher: boolean,
    teachers: Teacher[];
    getAllTeachers(): Promise<void>;
    createNewTeacher(name: string, email: string, code: string): Promise<void>;
}

const TeacherContext = createContext<TeacherContextType | undefined>(undefined);

export const TeacherProvider: React.FC<TeacherContextProps> = ({ children }) => {
    const provider = useAPI();
    const teacherRepository = new TeacherRepositoryImpl(provider)

    const [loadingNewTeacher, setLoadingNewTeacher] = useState(false)
    const [teachers, setTeachers] = useState<Teacher[]>([])


    useEffect(() => {
        getAllTeachers()
    }, []);

    async function getAllTeachers(): Promise<void> {
        try {
            const teachersList = await teacherRepository.getAllTeachers()
            setTeachers(teachersList)
        } catch (error) {
            throw error
        }
    }

    async function createNewTeacher(name: string, email: string, code: string): Promise<void> {

        setLoadingNewTeacher(true)

        if (name.length <= 0) {
            setLoadingNewTeacher(false)
            alert('O nome não pode ser vazio')
            throw Error('O nome não pode ser vazio')
        } else if (email.length <= 0) {
            setLoadingNewTeacher(false)
            alert('O email não pode ser vazio')
            throw Error('O email não pode ser vazio')
        } else if (code.length <= 0) {
            setLoadingNewTeacher(false)
            alert('O prontuário não pode ser vazio')
            throw Error('O prontuário não pode ser vazio')
        }

        try {
            const newTeacher = await teacherRepository.addNewTeacher(name, email, code)
            setTeachers([...teachers, newTeacher])
        } catch (error: any) {
            throw error.response.data.message
        } finally {
            setLoadingNewTeacher(false)
        }
    }

    return (
        <TeacherContext.Provider value={{ loadingNewTeacher, teachers, getAllTeachers, createNewTeacher }}>
            {children}
        </TeacherContext.Provider>
    );
};

export const useTeacher = () => {
    const context = useContext(TeacherContext);

    if (!context) {
        throw new Error('useTeacher deve ser usado dentro de um DataProvider');
    }

    return context;
};
