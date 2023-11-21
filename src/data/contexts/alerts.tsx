


// ClassroomContext.ts

import { RealtimeChannel } from '@supabase/supabase-js';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { AlertsRepositoryImpl } from '../implementations/repositories/alerts_repository_impl';
import { Alerts } from '../models/alert';
import { Classroom } from '../models/classroom';
import { useAPI } from '../services/api_provider';
import supabase from '../services/supabase';
import { useClassroom } from './classroom';

interface AlertsContextProps {
    children: ReactNode;
}

interface AlertsContextType {
    alertsRepository: AlertsRepositoryImpl;
    loading: boolean;
    alerts: Alerts[];
    getAllAlerts(): Promise<void>;
}

const AlertsContext = createContext<AlertsContextType | undefined>(undefined);

export const AlertsProvider: React.FC<AlertsContextProps> = ({ children }) => {
    const provider = useAPI();

    const { blocks } = useClassroom();

    const alertsRepository = new AlertsRepositoryImpl(provider)
    const [loading, setLoading] = useState<boolean>(false)
    const [alerts, setAlerts] = useState<Alerts[]>([])
    const [subscription, setSubscription] = useState<RealtimeChannel | null>(null);
    var alertsVar: Alerts[] = []

    useEffect(() => {
        getAllAlerts()
    }, []);

    useEffect(() => {
        // Função para iniciar a assinatura
        const startSubscription = async () => {
            const newSubscription = supabase
                .channel('alerts-inserts')
                .on(
                    'postgres_changes',
                    {
                        event: 'INSERT',
                        schema: 'public',
                        table: 'Alerts',
                    },
                    (payload: any) => {
                        const classroom = findClassroomById(payload.new.classroom_id);
                        if (classroom) {
                            const alert = new Alerts({
                                id: payload.new.id,
                                message: payload.new.message,
                                classroom: classroom,
                                createdAt: payload.new.created_at,
                            });
                            alertsVar.push(alert)
                            setAlerts(alertsVar)

                            toast.error(`Alerta na sala ${classroom.block}${classroom.name}! ${alert.message}`)
                        }
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


    async function getAlerts(): Promise<Alerts[]> {
        try {
            const alerts = await alertsRepository.getAllAlerts();
            return alerts
        } catch (error) {
            throw error
        }
    };

    async function getAllAlerts(): Promise<void> {
        try {
            setLoading(true)
            const alerts = await getAlerts();
            console.log(alerts)
            alertsVar = alerts
            setAlerts(alerts)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            throw error;
        }
    }

    function findClassroomById(classroomId: string): Classroom | undefined {
        let classroomF: Classroom | undefined;

        for (const block of blocks) {
            const foundClassroom = block.classrooms.find((classroom) => {
                return classroom instanceof Classroom && classroom.id === classroomId;
            });

            if (foundClassroom) {
                classroomF = foundClassroom;
                break;
            }
        }

        return classroomF;
    }

    return (
        <AlertsContext.Provider value={{
            loading,
            alertsRepository,
            alerts,
            getAllAlerts,
        }}>
            {children}
        </AlertsContext.Provider>
    );
};

export const useAlerts = () => {
    const context = useContext(AlertsContext);

    if (!context) {
        throw new Error('useAlerts deve ser usado dentro de um DataProvider');
    }

    return context;
};
