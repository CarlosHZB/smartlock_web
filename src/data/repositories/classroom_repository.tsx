import { Classroom } from "../models/classroom";


// Interface que define os métodos que a classe ClassroomRepository deve implementar
interface ClassroomRepository {
    getRoomsByBlock(block: string): Promise<Classroom[]>
}

export default ClassroomRepository;
