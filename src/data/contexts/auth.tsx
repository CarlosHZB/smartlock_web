// UserContext.ts

import { ReactNode, createContext, useContext, useState } from 'react';
import UserRepositoryImpl from '../implementations/repositories/user_repository_impl';
import { User } from '../models/user';
import UserRepository from '../repositories/user_repository';
import { useAPI } from '../services/api_provider';

interface UserContextProps {
  children: ReactNode;
}

interface UserContextType {
  userRepository: UserRepository;
  user: User | null
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const provider = useAPI();
  const userRepository = new UserRepositoryImpl(provider)

  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ userRepository, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser deve ser usado dentro de um DataProvider');
  }

  return context;
};
