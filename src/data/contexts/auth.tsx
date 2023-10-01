// UserContext.ts

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userIdStorage } from '../../core/app-local-keys';
import { HOMELOGGED } from '../../core/app-urls';
import UserRepositoryImpl from '../implementations/repositories/user_repository_impl';
import { User } from '../models/user';
import UserRepository from '../repositories/user_repository';
import { useAPI } from '../services/api_provider';

interface UserContextProps {
  children: ReactNode;
}

interface UserContextType {
  userRepository: UserRepository;
  user: User | null;
  login(code: string, password: string): Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const provider = useAPI();
  const userRepository = new UserRepositoryImpl(provider)

  const navigate = useNavigate();
  const [user, setUserClass] = useState<User | null>(null)

  function setUser(user: User | null) {
    setUserClass(user)
    if(user != null) {
      localStorage.setItem(userIdStorage, user.id!)
    }
  }

  useEffect(() => {
    verifyIfUserIsLogged();
  }, [])

  async function login(code: string, password: string): Promise<void> {
    try {
      const user = await userRepository.login(code, password)
      setUser(user)
    } catch (error) {
      throw error
    }
  }

  async function getUserById(id: string): Promise<void> {
    try {
      const user = await userRepository.getUserById(id)
      setUser(user)
    } catch (error) {
      throw error
    }
  }

  async function verifyIfUserIsLogged(): Promise<void> {
    const userId: string | null = localStorage.getItem(userIdStorage)

    if (userId != null && userId.length > 0) {
      await getUserById(userId)
      navigate(HOMELOGGED);
    }
  }

  return (
    <UserContext.Provider value={{ userRepository, user, login }}>
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
