import { Teacher } from "../models/teacher";


// Interface que define os métodos que a classe TeacherRepository deve implementar
interface TeacherRepository {
    getAllTeachers(): Promise<Teacher[]>
    addNewTeacher(name: string, email: string, code: string): Promise<Teacher>
    deleteTeacher(id: string): Promise<void>
}

export default TeacherRepository;
