


// ClassroomContext.ts

import { ReactNode, createContext, useContext, useState } from 'react';
import ClassroomRepositoryImpl from '../implementations/repositories/classroom_repository_impl';
import { Classroom } from '../models/classroom';
import ClassroomRepository from '../repositories/classroom_repository';
import { useAPI } from '../services/api_provider';

interface ClassroomContextProps {
    children: ReactNode;
}

interface ClassroomContextType {
    classroomRepository: ClassroomRepository;
    classrooms: Classroom[];
    getRoomsByBlock(block: string): Promise<void>;
}

const ClassroomContext = createContext<ClassroomContextType | undefined>(undefined);

export const ClassroomProvider: React.FC<ClassroomContextProps> = ({ children }) => {
    const provider = useAPI();
    const classroomRepository = new ClassroomRepositoryImpl(provider)

    const [classrooms, setClassrooms] = useState<Classroom[]>([])

    async function getRoomsByBlock(block: any): Promise<void> {
      try {
        const classrooms = await classroomRepository.getRoomsByBlock(block)
        setClassrooms(classrooms)
      } catch (error) {
        throw error
      }
    };

    return (
        <ClassroomContext.Provider value={{ classroomRepository, classrooms, getRoomsByBlock }}>
            {children}
        </ClassroomContext.Provider>
    );
};

export const useClassroom = () => {
    const context = useContext(ClassroomContext);

    if (!context) {
        throw new Error('useClassroom deve ser usado dentro de um DataProvider');
    }

    return context;
};
