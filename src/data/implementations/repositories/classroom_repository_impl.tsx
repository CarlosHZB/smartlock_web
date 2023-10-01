



// UserRepository.ts

import { Classroom, convertJsonToClassroom } from '../../models/classroom';
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
            const jsonData = response.data;

            if (Array.isArray(jsonData)) {
                // Mapear o JSON para instâncias da classe Classroom
                const classrooms = jsonData.map((classroomData: any) =>
                    convertJsonToClassroom(classroomData)
                );

                return classrooms;
            } else {
                throw new Error('Resposta da API não é um array JSON.');
            }
        } catch (error) {
            console.error(`Erro ao buscar salas do bloco ${block}:`, error);
            throw error;
        }
    }
}

export default ClassroomRepositoryImpl;
