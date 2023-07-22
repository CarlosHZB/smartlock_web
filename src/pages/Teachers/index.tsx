import { MdAdd } from "react-icons/md";
import { RxTrash } from "react-icons/rx";
import { AddTeacher, TableHeader, TableRow, TableRowContent, TableTitleRows, TeacherContainer, TeacherHeader, TeacherTitle, TrashButton } from "../../styles/Teachers";

export default function Teachers(){
    return(
        <TeacherContainer>
            <TeacherHeader>
                <TeacherTitle>Professores</TeacherTitle>
                <AddTeacher>Adicionar <MdAdd/> </AddTeacher>
            </TeacherHeader>
            <TableHeader>
                <TableTitleRows>Nome</TableTitleRows>
                <TableTitleRows>Email</TableTitleRows>
                <TableTitleRows>Aulas</TableTitleRows>
                <TableTitleRows>Prontuário</TableTitleRows>
            </TableHeader>
            <TableRow>
                <TableRowContent>Murilo Varges</TableRowContent>
                <TableRowContent>murilovarges@gmail.com</TableRowContent>
                <TableRowContent>X</TableRowContent>
                <TableRowContent>BI300XXXX</TableRowContent>
            </TableRow>
            <TableRow>
                <TableRowContent>Murilo Varges</TableRowContent>
                <TableRowContent>murilovarges@gmail.com</TableRowContent>
                <TableRowContent>X</TableRowContent>
                <TableRowContent>BI300XXXX</TableRowContent>
            </TableRow>
            <TableRow>
                <TableRowContent>Murilo Varges</TableRowContent>
                <TableRowContent>murilovarges@gmail.com</TableRowContent>
                <TableRowContent>X</TableRowContent>
                <TableRowContent>BI300XXXX</TableRowContent>
            </TableRow>
        </TeacherContainer>
    );
}