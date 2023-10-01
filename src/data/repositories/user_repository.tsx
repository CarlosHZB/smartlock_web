import { User } from '../models/user';

// Interface que define os métodos que a classe UserRepository deve implementar
interface UserRepository {
  login(code: string, password: string): Promise<User>;
  getUserById(id: string): Promise<User>;
}

export default UserRepository;
