


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
    classroomsA: Classroom[];
    classroomsB: Classroom[];
    classroomsC: Classroom[];
    classroomsD: Classroom[];
    classroomsE: Classroom[];
    getClassromRoomsByBlock(block: string): Promise<Classroom[]>;
    getAllClassrooms(): Promise<void>;
    updateClassroomState(classroomId: string, newLockState: boolean): void;
}

const ClassroomContext = createContext<ClassroomContextType | undefined>(undefined);

export const ClassroomProvider: React.FC<ClassroomContextProps> = ({ children }) => {
    const provider = useAPI();
    const classroomRepository = new ClassroomRepositoryImpl(provider)

    const [classroomsA, setClassroomsA] = useState<Classroom[]>([])
    const [classroomsB, setClassroomsB] = useState<Classroom[]>([])
    const [classroomsC, setClassroomsC] = useState<Classroom[]>([])
    const [classroomsD, setClassroomsD] = useState<Classroom[]>([])
    const [classroomsE, setClassroomsE] = useState<Classroom[]>([])

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
            const classroomsA = await getClassromRoomsByBlock('A')
            const classroomsB = await getClassromRoomsByBlock('B')
            const classroomsC = await getClassromRoomsByBlock('C')
            const classroomsD = await getClassromRoomsByBlock('D')
            const classroomsE = await getClassromRoomsByBlock('E')

            setClassroomsA(classroomsA)
            setClassroomsB(classroomsB)
            setClassroomsC(classroomsC)
            setClassroomsD(classroomsD)
            setClassroomsE(classroomsE)

            console.log(classroomsE)
        } catch (error) {
            throw error
        }
    };

    function findTheClassroomAndUpdateState(
        classroomLists: Classroom[][],
        classroomId: string,
        newLockState: boolean
    ) {
        const updatedLists = classroomLists.map((classroomList) => {
            return classroomList.map((classroom) => {
                if (classroom.id === classroomId) {
                    classroom!.lock!.state = newLockState;
                }
                return classroom;
            });
        });

        return updatedLists;
    }

    function updateClassroomState(classroomId: string, newLockState: boolean) {

        console.log(classroomId, newLockState)

        console.log(classroomsE)

        let classroomsAll = [classroomsA, classroomsB, classroomsC, classroomsD, classroomsE]

        const updatedClassrooms = findTheClassroomAndUpdateState(
            classroomsAll,
            classroomId,
            newLockState
        );

        // Atualize as listas com os resultados
        setClassroomsA(updatedClassrooms[0]);
        setClassroomsB(updatedClassrooms[1]);
        setClassroomsC(updatedClassrooms[2]);
        setClassroomsD(updatedClassrooms[3]);
        setClassroomsE(updatedClassrooms[4]);
    }

    return (
        <ClassroomContext.Provider value={{
            classroomRepository,
            classroomsA,
            classroomsB,
            classroomsC,
            classroomsD,
            classroomsE,
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
