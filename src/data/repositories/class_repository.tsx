import { Class } from "../models/class";


// Interface que define os métodos que a classe ClassRepository deve implementar

export interface CreateClassProps {
    name: string,
    subject: string,
    initialDate: string,
    endDate: string,
    initialTime: string,
    endTime: string,
    dayOfWeek: string,
    teacherId: string,
    classroomId: string
}

interface ClassRepository {
    getAllClasses(): Promise<Class[]>,
    createClass(props: CreateClassProps): Promise<void>
    deleteClass(idClass: string): Promise<void>
}

export default ClassRepository;
