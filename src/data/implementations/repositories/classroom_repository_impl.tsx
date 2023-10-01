



// UserRepository.ts

import { Classroom } from '../../models/classroom';
import ClassroomRepository from '../../repositories/classroom_repository';
import { ApiContextType } from '../../services/api_provider';


class ClassroomRepositoryImpl implements ClassroomRepository {
    private api: ApiContextType;

    constructor(provider: ApiContextType) {
        this.api = provider;
    }

    async getRoomsByBlock(block: string): Promise<Classroom[]> {
        try {
            const response = await this.api.get(`/classroom/block/${block}`);
            if (!response.ok) {
                throw new Error(`Erro ao buscar salas do bloco ${block}`);
            }
            return response.json();
        } catch (error) {
            console.error(`Erro ao buscar salas do bloco ${block}:`, error);
            throw error;
        }
    };
}

export default ClassroomRepositoryImpl;
