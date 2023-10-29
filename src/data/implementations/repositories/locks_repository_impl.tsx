
import { Lock, convertJsonToLock } from '../../models/lock';
import LocksRepository from '../../repositories/locks_repository';
import { ApiContextType } from '../../services/api_provider';


class LocksRepositoryImpl implements LocksRepository {
    private api: ApiContextType;

    constructor(provider: ApiContextType) {
        this.api = provider;
    }

    async createLock(lockName: string, classroomId: string): Promise<void> {

        console.log({
            name: lockName,
            classroomId: classroomId,
        })
        try {
            await this.api.post(`/lock`,
                {
                    name: lockName,
                    classroom_id: classroomId,
                });
        } catch (error) {
            console.error(`Erro ao buscar fechaduras:`, error);
            throw error;
        }
    }

    async getAllLocks(): Promise<Lock[]> {
        try {
            const response = await this.api.get(`/lock`);
            const jsonData = response.data;

            if (Array.isArray(jsonData)) {
                // Mapear o JSON para instâncias da classe Classroom
                const locks = jsonData.map((locksData: any) =>
                    convertJsonToLock(locksData)
                );

                return locks;
            } else {
                throw new Error('Resposta da API não é um array JSON.');
            }
        } catch (error) {
            console.error(`Erro ao buscar fechaduras:`, error);
            throw error;
        }
    }
}

export default LocksRepositoryImpl;