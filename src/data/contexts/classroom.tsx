


// ClassroomContext.ts

import { RealtimeChannel } from '@supabase/supabase-js';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import ClassroomRepositoryImpl from '../implementations/repositories/classroom_repository_impl';
import { Block } from '../models/block';
import { Classroom } from '../models/classroom';
import ClassroomRepository from '../repositories/classroom_repository';
import { useAPI } from '../services/api_provider';
import supabase from '../services/supabase';

interface ClassroomContextProps {
    children: ReactNode;
}

interface ClassroomContextType {
    classroomRepository: ClassroomRepository;
    loading: boolean;
    blocks: Block[];
    getClassromRoomsByBlock(block: string): Promise<Classroom[]>;
    getAllClassrooms(): Promise<void>;
    updateClassroomState(classroomId: string, newLockState: boolean): void;
}

const ClassroomContext = createContext<ClassroomContextType | undefined>(undefined);

export const ClassroomProvider: React.FC<ClassroomContextProps> = ({ children }) => {
    const provider = useAPI();
    const classroomRepository = new ClassroomRepositoryImpl(provider)
    const [loading, setLoading] = useState<boolean>(false)
    const [blocks, setBlocks] = useState<Block[]>([])
    const [subscription, setSubscription] = useState<RealtimeChannel | null>(null);
    var blocksVar: Block[] = []

    useEffect(() => {
        getAllClassrooms()
    }, []);

    useEffect(() => {
        // Função para iniciar a assinatura
        const startSubscription = async () => {
            const newSubscription = supabase
                .channel('lock-changes')
                .on(
                    'postgres_changes',
                    {
                        event: '*',
                        schema: 'public',
                        table: 'Lock',
                    },
                    (payload: any) => {
                        updateClassroomState(payload.new.classroom_id, payload.new.isClosed)
                    }
                )
                .subscribe();

            setSubscription(newSubscription);
        };

        startSubscription();

        // Função de limpeza para desconectar a assinatura quando o componente for desmontado
        return () => {
            if (subscription) {
                subscription.unsubscribe();
            }
        };
    }, []);


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
            setLoading(true)
            const blockPromises = ['A', 'B', 'C', 'D', 'E'].map(async (block) => {
                const classrooms = await getClassromRoomsByBlock(block);
                return new Block({ name: block, classrooms });
            });

            const blocksWithData = await Promise.all(blockPromises);
            blocksVar = blocksWithData
            setBlocks(blocksWithData)
            setLoading(false)
        } catch (error) {
            setLoading(false)
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

                            toast.success(`A sala ${block.name}${classroom.name} foi ${newLockState ? 'fechada' : 'aberta'}`)
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
            loading,
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
