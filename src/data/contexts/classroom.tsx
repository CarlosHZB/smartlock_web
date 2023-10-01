


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
    blocks: Classroom[][];
    getClassromRoomsByBlock(block: string): Promise<Classroom[]>;
    getAllClassrooms(): Promise<void>;
    updateClassroomState(classroomId: string, newLockState: boolean): void;
}

const ClassroomContext = createContext<ClassroomContextType | undefined>(undefined);

export const ClassroomProvider: React.FC<ClassroomContextProps> = ({ children }) => {
    const provider = useAPI();
    const classroomRepository = new ClassroomRepositoryImpl(provider)

    const [blocks, setBlocks] = useState<Classroom[][]>([])

    async function getClassromRoomsByBlock(block: string): Promise<Classroom[]> {
        try {
            const classrooms = await classroomRepository.getRoomsByBlock(block)
            return classrooms
        } catch (error) {
            throw error
        }
    };

    async function getAllClassrooms(): Promise<void> {
        try {
            const blockPromises = ['A', 'B', 'C', 'D', 'E'].map(async (block) => {
                return await getClassromRoomsByBlock(block);
            });

            const blockClassrooms = await Promise.all(blockPromises);

            setBlocks(blockClassrooms);

            console.log(blocks[2]);
            console.log(blocks[3]);
            console.log(blocks[4]);
        } catch (error) {
            throw error;
        }
    }


    function findTheClassroomAndUpdateState(
        classroomsMatrix: Classroom[][],
        classroomId: string,
        newLockState: boolean
    ) {
        return classroomsMatrix.map((blockClassrooms) =>
            blockClassrooms.map((classroom) => {
                if (classroom.id === classroomId) {
                    classroom.lock!.state = newLockState;
                }
                return classroom;
            })
        );
    }

    function updateClassroomState(classroomId: string, newLockState: boolean) {

        console.log(classroomId, newLockState)

        console.log(blocks)

        const updatedClassrooms = findTheClassroomAndUpdateState(
            blocks,
            classroomId,
            newLockState
        );

        // Atualize as listas com os resultados
        setBlocks(updatedClassrooms);
    }

    return (
        <ClassroomContext.Provider value={{
            classroomRepository,
            blocks,
            getClassromRoomsByBlock,
            getAllClassrooms,
            updateClassroomState
        }}>
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
