import { TableBody } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { Lock } from "../../data/models/lock";
import { ClassContent } from "../../styles/Teachers";
import { DeleteButton, TableCell, TableCellName, TableContainer, TableHead, TableHeader, TableRow } from "../../styles/components/TableTeacher";
import LoadingLocksTable from "./LoadingLocksTable";

export const LocksTable: React.FC<{
    loading: boolean,
    isExpanded: boolean,
    data: Lock[];
    onClickDetails: (lock: Lock) => void
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
                        <TableHeader>Estado</TableHeader>
                        <TableHeader>Sala</TableHeader>
                        <TableHeader></TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        loading ?
                            (<LoadingLocksTable />) :
                            data.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCellName onClick={() => onClickDetails(row)}>
                                        {row.name}
                                    </TableCellName>
                                    <TableCell>{row.state ? 'Fechada' : 'Aberta'}</TableCell>
                                    <TableCell>
                                        <ClassContent>
                                            {row.classroom?.block}{row.classroom?.name}
                                        </ClassContent>
                                    </TableCell>
                                    <TableCell>
                                        <DeleteButton onClick={() => onClickDelete(index)}><MdDeleteOutline size={18} /></DeleteButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                </TableBody>
            </TableContainer>
        );
    };
