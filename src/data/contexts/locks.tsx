// LockContext.ts

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import LocksRepositoryImpl from '../implementations/repositories/locks_repository_impl';
import { Lock } from '../models/lock';
import LocksRepository from '../repositories/locks_repository';
import { useAPI } from '../services/api_provider';

interface LockContextProps {
  children: ReactNode;
}

interface LockContextType {
  lockRepository: LocksRepository;
  loading: boolean;
  locks: Lock[];
  getAllLocks(): Promise<void>;
  createLock(lockName: string, classromId: string): Promise<void>;
}

const LockContext = createContext<LockContextType | undefined>(undefined);

export const LockProvider: React.FC<LockContextProps> = ({ children }) => {
  const provider = useAPI();
  const lockRepository = new LocksRepositoryImpl(provider)

  const [locks, setLocks] = useState<Lock[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  async function getAllLocks(): Promise<void> {
    try {
      setLoading(true)
      const locks = await lockRepository.getAllLocks();
      setLocks(locks)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  async function createLock(lockName: string, classromId: string): Promise<void> {
    try {
      await lockRepository.createLock(lockName, classromId);
      await getAllLocks()
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getAllLocks()
  }, []);

  return (
    <LockContext.Provider value={{ lockRepository, loading, locks, getAllLocks, createLock }}>
      {children}
    </LockContext.Provider>
  );
};

export const useLock = () => {
  const context = useContext(LockContext);

  if (!context) {
    throw new Error('useLock deve ser usado dentro de um DataProvider');
  }

  return context;
};
