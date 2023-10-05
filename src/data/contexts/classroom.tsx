


// ClassroomContext.ts

import { ReactNode, createContext, useContext, useState } from 'react';
import ClassroomRepositoryImpl from '../implementations/repositories/classroom_repository_impl';
import { Block } from '../models/block';
import { Classroom } from '../models/classroom';
import ClassroomRepository from '../repositories/classroom_repository';
import { useAPI } from '../services/api_provider';

interface ClassroomContextProps {
    children: ReactNode;
}

interface ClassroomContextType {
    classroomRepository: ClassroomRepository;
    blocks: Block[];
    getClassromRoomsByBlock(block: string): Promise<Classroom[]>;
    getAllClassrooms(): Promise<void>;
    updateClassroomState(classroomId: string, newLockState: boolean): void;
}

const ClassroomContext = createContext<ClassroomContextType | undefined>(undefined);

export const ClassroomProvider: React.FC<ClassroomContextProps> = ({ children }) => {
    const provider = useAPI();
    const classroomRepository = new ClassroomRepositoryImpl(provider)

    const [blocks, setBlocks] = useState<Block[]>([])
    var blocksVar: Block[] = []

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
                const classrooms = await getClassromRoomsByBlock(block);
                return new Block({ name: block, classrooms });
            });

            const blocksWithData = await Promise.all(blockPromises);
            blocksVar = blocksWithData
            setBlocks(blocksWithData)
        } catch (error) {
            throw error;
        }
    }

    function findTheClassroomAndUpdateState(
        blocks: Block[],
        classroomId: string,
        newLockState: boolean
    ) {
        return blocks.map((block) => {
            return new Block({
                name: block.name,
                classrooms: block.classrooms.map((classroom) => {
                    if (classroom instanceof Classroom) {
                        if (classroom.id === classroomId) {
                            // Update the lock state
                            classroom.lock = {
                                id: classroom!.lock!.id || '', // Handle undefined or null
                                name: classroom!.lock!.name || '', // Handle undefined or null
                                state: newLockState,
                            };
                        }
                        return classroom;
                    }
                    // If it's not an instance of Classroom, return it as is
                    return classroom;
                }),
            });
        });
    }

    function updateClassroomState(classroomId: string, newLockState: boolean) {


        const updatedBlocks = findTheClassroomAndUpdateState(
            blocksVar,
            classroomId,
            newLockState
        );


        setBlocks(updatedBlocks);
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
