import { TableBody } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { Class } from "../../data/models/class";
import { WeekDay } from "../../helpers/date";
import { formatDateToHHMM } from "../../helpers/time";
import { DeleteButton, TableCell, TableCellName, TableContainer, TableHead, TableHeader, TableRow } from "../../styles/components/TableTeacher";
import LoadingTableClassRows from "./LoadingTableClassRows";

export const TableClasses: React.FC<{
    loading: boolean,
    isExpanded: boolean,
    data: Class[];
    onClickDetails: (classe: Class) => void
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
                        <TableHeader>Dia da Semana</TableHeader>
                        <TableHeader>Horário de Inicio</TableHeader>
                        <TableHeader>Horário de Fim</TableHeader>
                        <TableHeader>Sala de Aula</TableHeader>
                        <TableHeader>Professor</TableHeader>
                        <TableHeader></TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        loading ?
                            (<LoadingTableClassRows />) :
                            data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCellName onClick={() => onClickDetails(row)}>
                                        {row.name}
                                    </TableCellName>
                                    <TableCell>{WeekDay(row.dayOfTheWeek)}</TableCell>
                                    <TableCell>{`${formatDateToHHMM(row.initialTimeClass)}h`}</TableCell>
                                    <TableCell>{`${formatDateToHHMM(row.endTimeClass)}h`}</TableCell>
                                    <TableCell>{row.classroom?.block}{row.classroom?.name}</TableCell>
                                    <TableCell>{row.teacher?.name}</TableCell>
                                    <TableCell>
                                        <DeleteButton onClick={() => onClickDelete(index)}><MdDeleteOutline size={18} /></DeleteButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                </TableBody>
            </TableContainer>
        );
    };
