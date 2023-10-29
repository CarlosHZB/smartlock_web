import { Lock } from "../models/lock";

// Interface que define os métodos que a classe LocksRepository deve implementar
interface LocksRepository {
    getAllLocks(): Promise<Lock[]>
    createLock(lockName: string, classroomId: string): Promise<void>
}

export default LocksRepository;
