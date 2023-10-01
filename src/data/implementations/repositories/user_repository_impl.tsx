// UserRepository.ts

import { User, UserProps } from '../../models/user';
import UserRepository from '../../repositories/user_repository';
import { ApiContextType } from '../../services/api_provider';


class UserRepositoryImpl implements UserRepository {
    private api: ApiContextType;

    constructor(provider: ApiContextType) {
        this.api = provider;
    }

    async getUserById(id: string): Promise<User> {
        try {
            const response = await this.api.get(`/user/${id}`);
            const userData: UserProps = response.data;

            const user = new User(userData);

            return user;
        } catch (error) {
            throw error;
        }
    }

    async login(code: string, password: string): Promise<User> {
        try {
            const response = await this.api.post(
                '/user/login',
                {
                    'code': code,
                    'password': password
                });
            const userData: UserProps = response.data;

            // Crie uma instância da classe User com os dados do usuário
            const user = new User(userData);

            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepositoryImpl;
