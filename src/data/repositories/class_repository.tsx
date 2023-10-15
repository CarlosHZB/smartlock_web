import { Class } from "../models/class";


// Interface que define os métodos que a classe ClassroomRepository deve implementar
interface ClassRepository {
    getAllClasses(): Promise<Class[]>
}

export default ClassRepository;
