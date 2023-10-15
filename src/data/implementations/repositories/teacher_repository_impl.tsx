



// teacherRepository.ts

import { Teacher, convertJsonToTeacher } from '../../models/teacher';
import TeacherRepository from '../../repositories/teacher_repository';
import { ApiContextType } from '../../services/api_provider';


class TeacherRepositoryImpl implements TeacherRepository {
    private api: ApiContextType;

    constructor(provider: ApiContextType) {
        this.api = provider;
    }

    async deleteTeacher(id: string): Promise<void> {
        try {
            await this.api.remove(`/user/${id}`);
        } catch (error) {
            console.error(`Erro ao buscar professores:`, error);
            throw error;
        }
    }

    async addNewTeacher(name: string, email: string, code: string): Promise<Teacher> {
        try {
            const response = await this.api.post(`/user`,
                {
                    'name': name,
                    'email': email,
                    'password': code,
                    'code': code,
                    'userTypeId': '3fc5dc9f-288c-417a-be68-a24687df6cf9'
                },
            );
            const jsonData = response.data;
            return convertJsonToTeacher(jsonData);

        } catch (error) {
            console.error(`Erro ao buscar professores:`, error);
            throw error;
        }
    }

    async getAllTeachers(): Promise<Teacher[]> {
        try {
            const response = await this.api.get(`/user/all/teachers`);
            const jsonData = response.data;

            if (Array.isArray(jsonData)) {
                // console.log(jsonData)
                // Mapear o JSON para instâncias da classe Classroom
                const teachers = jsonData.map((teacherData: any) =>
                    convertJsonToTeacher(teacherData)
                );

                return teachers;
            } else {
                throw new Error('Resposta da API não é um array JSON.');
            }
        } catch (error) {
            console.error(`Erro ao buscar professores:`, error);
            throw error;
        }
    }

}

export default TeacherRepositoryImpl;
