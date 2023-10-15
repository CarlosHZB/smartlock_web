import { TableBody } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { Teacher } from "../../data/models/teacher";
import { ClassContent } from "../../styles/Teachers";
import { DeleteButton, TableCell, TableCellName, TableContainer, TableHead, TableHeader, TableRow } from "../../styles/components/TableTeacher";
import LoadingTableRows from "./LoadingTableRows";

export const TableTeachers: React.FC<{
    loading: boolean,
    isExpanded: boolean,
    data: Teacher[];
    onClickDetails: (teacher: Teacher) => void
    onClickDelete: (index: number) => void
}> = ({
    loading,
    isExpanded,
    data,
    onClickDetails,
    onClickDelete
}) => {
        return (
            <TableContainer isExpanded={isExpanded} >
                <TableHead>
                    <TableRow>
                        <TableHeader>Nome</TableHeader>
                        <TableHeader>Email</TableHeader>
                        <TableHeader>Aulas</TableHeader>
                        <TableHeader>Prontuário</TableHeader>
                        <TableHeader></TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        loading ?
                            (<LoadingTableRows />) :
                            data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCellName onClick={() => onClickDetails(row)}>
                                        {row.name}
                                    </TableCellName>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{
                                        row.classes.map((classU) => (
                                            <ClassContent key={classU.id}>
                                                {classU.name}
                                            </ClassContent>
                                        ))
                                    }</TableCell>
                                    <TableCell>{row.code}</TableCell>
                                    <TableCell>
                                        <DeleteButton onClick={() => onClickDelete(index)}><MdDeleteOutline size={18} /></DeleteButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                </TableBody>
            </TableContainer>
        );
    };
