// ClassRepository.ts

import { Class, convertJsonToClass } from '../../models/class';
import ClassRepository from '../../repositories/class_repository';
import { ApiContextType } from '../../services/api_provider';


class ClassRepositoryImpl implements ClassRepository {
    private api: ApiContextType;

    constructor(provider: ApiContextType) {
        this.api = provider;
    }

    async getAllClasses(): Promise<Class[]> {
        try {
            const response = await this.api.get(`/class`);
            const jsonData = response.data;

            if (Array.isArray(jsonData)) {
                // Mapear o JSON para instâncias da classe Classroom
                const classes = jsonData.map((classData: any) =>
                    convertJsonToClass(classData)
                );

                return classes;
            } else {
                throw new Error('Resposta da API não é um array JSON.');
            }
        } catch (error) {
            console.error(`Erro ao buscar as aulas`, error);
            throw error;
        }
    }
}

export default ClassRepositoryImpl;